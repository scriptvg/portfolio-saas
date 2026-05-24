import axios, { type AxiosRequestConfig } from "axios"

import { ApiClientError } from "@/lib/api/errors"
import { clearAccessToken, getAccessToken } from "@/lib/api/storage"
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

const connectError =
  "No se pudo conectar con la API. Revisa que el servidor esté en marcha y VITE_API_URL / CORS_ORIGIN (puerto 5173 si usas Vite)."

const sessionInvalidators = new Set<() => void>()

export function onSessionInvalidated(listener: () => void): () => void {
  sessionInvalidators.add(listener)
  return () => {
    sessionInvalidators.delete(listener)
  }
}

function notifySessionInvalidated(): void {
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
  /** Cookie de sesión en POST `/auth/link/*` antes del redirect OAuth. */
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
  if (
    typeof FormData !== "undefined" &&
    config.data instanceof FormData
  ) {
    headers.delete("Content-Type")
  }
  config.headers = headers
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      if (getAccessToken()) {
        clearAccessToken()
        notifySessionInvalidated()
      }
    }
    return Promise.reject(error)
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
