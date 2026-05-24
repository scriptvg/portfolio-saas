import type { AuthUser } from "@/auth/types"

import { apiRequest } from "@/lib/api/client"

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
