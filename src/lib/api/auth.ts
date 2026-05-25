import type { AuthUser } from "@/auth/types"

import { apiClient, apiRequest } from "@/lib/api/client"

type ApiAuthMethods = {
  password: boolean
  google: boolean
  github: boolean
}

/** Payload crudo de la API antes de mapear al modelo UI. */
type ApiUserResponse = {
  id: string
  name: string
  email: string
  image: string | null
  googleId?: string | null
  githubId?: string | null
  authMethods?: ApiAuthMethods
}

export function mapApiUserToAuthUser(
  payload: ApiUserResponse,
  hints?: Partial<AuthUser["providers"]>
): AuthUser {
  const providers = payload.authMethods
    ? {
        password: payload.authMethods.password,
        google: payload.authMethods.google,
        github: payload.authMethods.github,
      }
    : {
        password: hints?.password ?? false,
        google: hints?.google ?? !!payload.googleId,
        github: hints?.github ?? !!payload.githubId,
      }

  return {
    id: payload.id,
    name: payload.name,
    email: payload.email,
    image: payload.image ?? null,
    providers,
  }
}

export async function signIn(
  email: string,
  password: string
): Promise<{ token: string; user: AuthUser }> {
  const data = await apiRequest<{ token: string; user: ApiUserResponse }>({
    method: "POST",
    url: "/auth/signin",
    data: { email, password },
  })

  return {
    token: data.token,
    user: mapApiUserToAuthUser(data.user, { password: true }),
  }
}

/** Solo bootstrap, refresh y flujos que reciben únicamente el JWT (p. ej. OAuth callback). */
export async function fetchMe(): Promise<AuthUser> {
  const data = await apiRequest<ApiUserResponse>({
    method: "GET",
    url: "/auth/me",
  })
  return mapApiUserToAuthUser(data)
}

export async function prepareOAuthLink(
  provider: "google" | "github"
): Promise<{ redirectUrl: string }> {
  return apiRequest({
    method: "POST",
    url: `/auth/link/${provider}`,
    data: {},
  })
}

export async function unlinkOAuth(
  provider: "google" | "github"
): Promise<void> {
  await apiRequest<null>({
    method: "DELETE",
    url: `/auth/unlink/${provider}`,
  })
}

export async function linkPassword(password: string): Promise<void> {
  await apiRequest({
    method: "POST",
    url: "/auth/link/password",
    data: { password },
  })
}

export async function patchProfile(body: {
  name?: string
  image?: string | null
}): Promise<AuthUser> {
  const data = await apiRequest<ApiUserResponse>({
    method: "PATCH",
    url: "/auth/me",
    data: body,
  })
  return mapApiUserToAuthUser(data)
}

export async function changePassword(
  currentPassword: string,
  newPassword: string
): Promise<void> {
  await apiRequest({
    method: "POST",
    url: "/auth/change-password",
    data: { currentPassword, newPassword },
  })
}

/**
 * Solicita un nuevo access token usando el refresh token httpOnly que viaja
 * automáticamente en la cookie. No envía body; la cookie la gestiona el navegador.
 * Devuelve el nuevo access token o lanza si el refresh está expirado / revocado.
 *
 * Usa `apiClient` directamente (no `apiRequest`) para poder marcar la config
 * con `_isRefreshRequest: true` y que el interceptor de 401 no la reiIntente,
 * evitando así el bucle de refresh.
 */
export async function refreshAccessToken(): Promise<string> {
  const res = await apiClient.request<{
    success: boolean
    data: { token: string }
  }>({
    method: "POST",
    url: "/auth/refresh",
    // Esta propiedad es preservada por Axios en InternalAxiosRequestConfig.
    // El interceptor de 401 en client.ts la lee para cortar la recursión.
    _isRefreshRequest: true,
  } as Parameters<typeof apiClient.request>[0] & { _isRefreshRequest: true })

  const body = res.data
  if (!body.success || !body.data?.token) {
    throw new Error("Refresh inválido: respuesta inesperada del servidor")
  }
  return body.data.token
}

/**
 * Invalida el refresh token en el servidor y hace que el navegador borre la cookie.
 * Idempotente: un 4xx/5xx no debe bloquear el logout local.
 */
export async function logout(): Promise<void> {
  await apiRequest<null>({
    method: "POST",
    url: "/auth/logout",
  })
}
