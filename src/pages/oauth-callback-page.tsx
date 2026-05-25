import * as React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "sonner"

import { useAuth } from "@/auth/auth-context"
import { isApiClientError } from "@/lib/api/errors"
import { Spinner } from "@/components/ui/spinner"

function resolveOAuthError(error: unknown): string {
  if (isApiClientError(error)) {
    if (error.statusCode === 429) {
      return "Demasiados intentos. Espera un momento y vuelve a intentarlo."
    }
    if (error.statusCode === 401 || error.statusCode === 403) {
      return "Tu sesión no es válida o expiró. Inicia sesión de nuevo."
    }
    // Error de red: statusCode es undefined y el mensaje viene de connectError
    if (error.statusCode === undefined) {
      return error.message
    }
    // Cualquier otro ApiClientError: mostrar el mensaje real de la API
    return error.message
  }
  // Error no tipado (inesperado): no exponer detalles internos
  return "Ocurrió un error inesperado. Inténtalo de nuevo."
}

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
      .catch((err: unknown) => {
        // console.error para diagnóstico; no expone datos sensibles (solo el shape del error)
        console.error("[OAuthCallbackPage] signInWithToken failed:", err)
        setError(resolveOAuthError(err))
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
