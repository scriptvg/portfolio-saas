import { getApiBase } from "@/lib/api/client"

/**
 * El servidor puede inferir `Host` distinto al que usa el navegador para llamar a la API
 * (`localhost` vs `127.0.0.1`). La cookie de sesión del flujo "link" queda en el host de la
 * petición POST; el redirect debe usar el mismo origen que `VITE_API_URL`.
 */
export function resolveOAuthRedirectUrl(redirectUrl: string): string {
  try {
    const apiRoot = getApiBase().replace(/\/+$/, "")
    const apiOrigin = new URL(apiRoot).origin
    const parsed = new URL(redirectUrl)
    return `${apiOrigin}${parsed.pathname}${parsed.search}${parsed.hash}`
  } catch {
    return redirectUrl
  }
}
