import * as React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import { useAuth } from "@/auth/auth-context"
import { Button } from "@/components/ui/button"

export function AuthLinkedPage() {
  const [search] = useSearchParams()
  const navigate = useNavigate()
  const { refreshUser } = useAuth()
  const provider = search.get("provider") ?? ""

  React.useEffect(() => {
    void refreshUser().catch(() => {})
  }, [refreshUser])

  const message =
    provider === "google"
      ? "Google se vinculó correctamente a tu perfil."
      : provider === "github"
        ? "GitHub se vinculó correctamente a tu perfil."
        : "Cuenta vinculada correctamente."

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 text-center">
      <div className="max-w-sm space-y-2">
        <h1 className="text-lg font-semibold tracking-tight">
          Cuenta vinculada
        </h1>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      <Button type="button" onClick={() => navigate("/dashboard")}>
        Ir al panel
      </Button>
    </div>
  )
}
