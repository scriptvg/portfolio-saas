import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios"

import { ApiClientError } from "@/lib/api/errors"
import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from "@/lib/api/storage"
import { env } from "@/lib/env"

export function getApiBase(): string {
  return env.API_URL
}

type ApiSuccess<T> = {
  success: true
  message: string
  statusCode: number
  data: T
}

type ApiErr = {
  success: false
  message: string
  statusCode: number
}

// Extensión del tipo interno de Axios para marcar requests especiales.
// Se usa en el interceptor de 401 para evitar recursión infinita.
interface MarkedRequestConfig extends InternalAxiosRequestConfig {
  /** true → esta request ya intentó refresh una vez; no volver a intentar. */
  _retried?: boolean
  /** true → es la propia llamada a /auth/refresh; nunca reintentarla. */
  _isRefreshRequest?: boolean
}

const connectError =
  "No se pudo conectar con la API. Revisa que el servidor esté en marcha y VITE_API_URL / CORS_ORIGIN (puerto 5173 si usas Vite)."

const sessionInvalidators = new Set<() => void>()

export function onSessionInvalidated(listener: () => void): () => void {
  sessionInvalidators.add(listener)
  return () => {
    sessionInvalidators.delete(listener)
  }
}

export function notifySessionInvalidated(): void {
  for (const listener of sessionInvalidators) {
    listener()
  }
}

function resolveBearerToken(): string | null {
  const sessionToken = getAccessToken()
  if (sessionToken) {
    return sessionToken
  }

  const adminSecret = env.ADMIN_SECRET?.trim()
  return adminSecret || null
}

/** Panel mutations: JWT de sesión o `VITE_API_ADMIN_SECRET` en desarrollo. */
export function hasWriteAuthorization(): boolean {
  return resolveBearerToken() !== null
}

function parseBody<T>(data: unknown): T {
  if (typeof data !== "object" || data === null || !("success" in data)) {
    throw new ApiClientError("Respuesta inválida de la API")
  }
  const json = data as ApiSuccess<T> | ApiErr
  if (!json.success) {
    throw new ApiClientError(json.message || "Request failed", json.statusCode)
  }
  return json.data
}

export const apiClient = axios.create({
  baseURL: `${getApiBase()}/api/v1`,
  headers: { "Content-Type": "application/json" },
  /** Cookie de sesión para refresh token httpOnly y OAuth link. */
  withCredentials: true,
})

apiClient.interceptors.request.use((config) => {
  const headers = axios.AxiosHeaders.from(config.headers)
  if (!headers.has("Authorization")) {
    const bearer = resolveBearerToken()
    if (bearer) {
      headers.set("Authorization", `Bearer ${bearer}`)
    }
  }
  if (typeof FormData !== "undefined" && config.data instanceof FormData) {
    headers.delete("Content-Type")
  }
  config.headers = headers
  return config
})

// ── Refresh-token queue ────────────────────────────────────────────────────
//
// Problema: si hay varias requests simultáneas con el access token expirado,
// todas recibirán 401 al mismo tiempo. Sin cola, cada una llamaría a
// /auth/refresh por separado → tormenta de refresh + carreras.
//
// Solución: flag `isRefreshing` + lista de suscriptores.
//   - El primer 401 arranca el refresh y activa el flag.
//   - Los 401 siguientes se encolan como promesas suspendidas.
//   - Cuando el refresh resuelve, todas las promesas se reanudan con el nuevo token.
//   - Si el refresh falla, todas las promesas se rechazan → logout único.

let isRefreshing = false
type RefreshSubscriber = (newToken: string) => void
type RefreshRejecter = (err: unknown) => void
const refreshSubscribers: Array<{
  resolve: RefreshSubscriber
  reject: RefreshRejecter
}> = []

function subscribeToRefresh(
  resolve: RefreshSubscriber,
  reject: RefreshRejecter
): void {
  refreshSubscribers.push({ resolve, reject })
}

function notifyRefreshSuccess(newToken: string): void {
  for (const sub of refreshSubscribers) {
    sub.resolve(newToken)
  }
  refreshSubscribers.length = 0
}

function notifyRefreshFailure(err: unknown): void {
  for (const sub of refreshSubscribers) {
    sub.reject(err)
  }
  refreshSubscribers.length = 0
}

/**
 * Llama a /auth/refresh directamente sobre la instancia de Axios para evitar
 * que la respuesta pase por apiRequest (que lanza ApiClientError y complica el
 * manejo en el interceptor). Devuelve el nuevo token o lanza.
 *
 * Se importa la función aquí de forma lazy (import dinámico) para evitar
 * dependencia circular: auth.ts → client.ts → auth.ts.
 */
async function callRefresh(client: AxiosInstance): Promise<string> {
  // Marcamos la config para que el interceptor de 401 no la retome.
  const res = await client.request<{
    success: boolean
    data: { token: string }
  }>({
    method: "POST",
    url: "/auth/refresh",
    _isRefreshRequest: true,
  } as AxiosRequestConfig & { _isRefreshRequest: true })

  const body = res.data
  if (!body.success || !body.data?.token) {
    throw new ApiClientError(
      "Refresh inválido: respuesta inesperada del servidor",
      401
    )
  }
  return body.data.token
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error: unknown) => {
    if (!axios.isAxiosError(error) || error.response?.status !== 401) {
      return Promise.reject(error)
    }

    const config = error.config as MarkedRequestConfig | undefined

    // Casos que NO se reintentan:
    //   1. Request sin config (axios interno)
    //   2. Ya es la propia llamada a /auth/refresh → logout inmediato
    //   3. Ya se reintentó una vez (_retried) → evita bucle infinito
    //   4. Endpoints de autenticación: /auth/signin, /auth/login, /auth/logout
    //      (logout con token expirado no debe disparar un refresh previo)
    if (
      !config ||
      config._isRefreshRequest ||
      config._retried ||
      config.url?.includes("/auth/signin") ||
      config.url?.includes("/auth/login") ||
      config.url?.includes("/auth/logout")
    ) {
      clearAccessToken()
      notifySessionInvalidated()
      return Promise.reject(error)
    }

    // Si ya hay un refresh en curso, encolar esta request para que se reanude
    // cuando el refresh termine (éxito o fallo).
    if (isRefreshing) {
      return new Promise<unknown>((resolve, reject) => {
        subscribeToRefresh(
          (newToken) => {
            config._retried = true
            config.headers = axios.AxiosHeaders.from(config.headers)
            config.headers.set("Authorization", `Bearer ${newToken}`)
            resolve(apiClient.request(config))
          },
          (err) => {
            reject(err)
          }
        )
      })
    }

    // Primera request que ve el 401 → arrancar refresh.
    isRefreshing = true

    try {
      const newToken = await callRefresh(apiClient)
      setAccessToken(newToken)
      isRefreshing = false
      notifyRefreshSuccess(newToken)

      // Reintentar la request original con el nuevo token.
      config._retried = true
      config.headers = axios.AxiosHeaders.from(config.headers)
      config.headers.set("Authorization", `Bearer ${newToken}`)
      return apiClient.request(config)
    } catch (refreshErr) {
      isRefreshing = false
      notifyRefreshFailure(refreshErr)
      clearAccessToken()
      notifySessionInvalidated()
      return Promise.reject(refreshErr)
    }
  }
)

/**
 * Request contra `/api/v1` con envelope `{ success, data, message }`.
 * El Bearer se inyecta en el interceptor; los dominios no pasan tokens.
 */
export async function apiRequest<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const res = await apiClient.request<unknown>(config)
    return parseBody<T>(res.data)
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (
        e.code === "ERR_NETWORK" ||
        e.message === "Network Error" ||
        !e.response
      ) {
        throw new ApiClientError(connectError)
      }
      try {
        return parseBody<T>(e.response.data)
      } catch (inner) {
        if (inner instanceof ApiClientError) {
          throw inner
        }
      }
      const raw = e.response.data
      const text =
        typeof raw === "string"
          ? raw.slice(0, 160)
          : raw
            ? JSON.stringify(raw).slice(0, 160)
            : ""
      throw new ApiClientError(
        text || `Error HTTP ${e.response.status} (sin JSON)`,
        e.response.status
      )
    }
    throw e
  }
}
