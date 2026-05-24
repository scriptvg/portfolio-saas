import * as React from "react"
import { toast } from "sonner"

import { useAuth } from "@/auth/auth-context"
import { prepareOAuthLink, unlinkOAuth } from "@/lib/api/auth"
import { resolveOAuthRedirectUrl } from "@/lib/oauth-redirect"
import type { OAuthProvider } from "@/features/settings/components/oauth-item"

export function useOAuthProviders() {
  const { user, isAuthenticated, refreshUser } = useAuth()
  const [oauthBusy, setOauthBusy] = React.useState<OAuthProvider | null>(null)
  const [unlinkBusy, setUnlinkBusy] = React.useState<OAuthProvider | null>(null)

  const providers = user?.providers

  const canUnlinkGoogle =
    providers == null ? true : !!(providers.password || providers.github)
  const canUnlinkGitHub =
    providers == null ? true : !!(providers.password || providers.google)

  async function linkProvider(provider: OAuthProvider) {
    if (!isAuthenticated) {
      toast.error("No hay sesión activa. Vuelve a iniciar sesión.")
      return
    }
    setOauthBusy(provider)
    try {
      const { redirectUrl } = await prepareOAuthLink(provider)
      window.location.assign(resolveOAuthRedirectUrl(redirectUrl))
    } catch (e) {
      toast.error(
        e instanceof Error
          ? e.message
          : "No se pudo iniciar la vinculación. Comprueba que el proveedor esté configurado en la API."
      )
      setOauthBusy(null)
    }
  }

  async function unlinkProvider(provider: OAuthProvider) {
    if (!isAuthenticated) {
      toast.error("No hay sesión activa.")
      return
    }
    setUnlinkBusy(provider)
    try {
      await unlinkOAuth(provider)
      toast.success(
        provider === "github" ? "GitHub desvinculado." : "Google desvinculado."
      )
      await refreshUser()
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo desvincular.")
    } finally {
      setUnlinkBusy(null)
    }
  }

  return {
    providers,
    oauthBusy,
    unlinkBusy,
    canUnlinkGoogle,
    canUnlinkGitHub,
    linkProvider,
    unlinkProvider,
  }
}
