const ACCESS_TOKEN_KEY = "portfolio_auth_token"

export function getAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null
  }
  const token = localStorage.getItem(ACCESS_TOKEN_KEY)
  const trimmed = token?.trim()
  return trimmed ? trimmed : null
}

export function setAccessToken(token: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, token.trim())
}

export function clearAccessToken(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export function hasPersistedSession(): boolean {
  return getAccessToken() !== null
}
