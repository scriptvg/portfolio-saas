import * as React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "sonner"

import { useAuth } from "@/auth/auth-context"
import { Spinner } from "@/components/ui/spinner"

export function OAuthCallbackPage() {
  const [search] = useSearchParams()
  const navigate = useNavigate()
  const { signInWithToken } = useAuth()
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const token = search.get("token")
    if (!token) {
      setError("No se recibió token. Vuelve a iniciar sesión.")
      return
    }
    signInWithToken(token)
      .then(() => {
        toast.success("Sesión iniciada")
        navigate("/dashboard", { replace: true })
      })
      .catch(() => {
        setError("El token no es válido o expiró.")
      })
  }, [search, signInWithToken, navigate])

  if (error) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background p-6 text-center text-sm text-destructive">
        <p>{error}</p>
        <button
          type="button"
          className="text-primary underline"
          onClick={() => navigate("/login", { replace: true })}
        >
          Volver al login
        </button>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-3 bg-background text-sm text-muted-foreground">
      <Spinner className="size-8" />
      <p>Completando inicio de sesión…</p>
    </div>
  )
}
