import * as React from "react"
import { Navigate } from "react-router-dom"

import { useAuth } from "@/auth/auth-context"
import { Spinner } from "@/components/ui/spinner"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, bootstrapping } = useAuth()

  if (bootstrapping) {
    return (
      <div
        className="flex min-h-svh items-center justify-center gap-2 bg-background text-sm text-muted-foreground"
        role="status"
        aria-label="Cargando sesión"
      >
        <Spinner className="size-6" />
        <span>Cargando sesión…</span>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export function RootRedirect() {
  const { isAuthenticated, bootstrapping } = useAuth()

  if (bootstrapping) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-background">
        <Spinner className="size-6" />
      </div>
    )
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }
  return <Navigate to="/login" replace />
}
