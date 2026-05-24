import { Link, useSearchParams } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AuthErrorPage() {
  const [search] = useSearchParams()
  const flow = search.get("flow") ?? ""
  const provider = search.get("provider") ?? ""

  const isLinkFlow = flow === "link"
  const isLoginFlow = flow === "login"
  const isGitHubOAuth = flow === "github"
  const isGitHub = provider === "github"

  const title =
    isGitHubOAuth
      ? "No se pudo completar el acceso con GitHub"
      : isLinkFlow
        ? `No se pudo vincular ${isGitHub ? "GitHub" : provider === "google" ? "Google" : "la cuenta"}`
        : "No se pudo iniciar sesión"

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted/30 p-6">
      <Card className="w-full max-w-lg shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>
            {isLoginFlow
              ? "El proveedor rechazó el acceso o hubo un error al completar OAuth."
              : isGitHubOAuth
                ? "Comprueba la URL de callback en GitHub y el correo verificado si venías de Configuración."
                : isLinkFlow
                  ? "Revisa los puntos siguientes e inténtalo de nuevo desde Configuración."
                  : "OAuth no se completó correctamente."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {isGitHubOAuth ? (
            <ul className="list-inside list-disc space-y-2">
              <li>
                La URL de callback en GitHub OAuth App debe coincidir exactamente con{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  GITHUB_CALLBACK_URL
                </code>{" "}
                (ej.{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  …/api/v1/auth/github/callback
                </code>
                ). Una sola URL sirve para iniciar sesión y para vincular cuenta.
              </li>
              <li>
                Si venías de Configuración → Vincular, el correo del panel debe figurar entre
                tus correos <strong className="text-foreground">verificados</strong> en
                GitHub (Settings → Emails).
              </li>
              <li>
                Si venías de Configuración → Vincular, la sesión en la API caduca en unos
                minutos; repite el flujo desde allí.
              </li>
            </ul>
          ) : null}

          {isLinkFlow && provider === "google" ? (
            <ul className="list-inside list-disc space-y-2">
              <li>
                El correo de tu cuenta Google debe coincidir con el correo de tu perfil
                en el panel.
              </li>
              <li>
                En Google Cloud, registra la URL de callback de{" "}
                <strong className="text-foreground">vinculación</strong>, no solo la del
                login.
              </li>
            </ul>
          ) : null}

          {isLoginFlow ? (
            <p>
              Comprueba que las URLs de callback en Google/GitHub coinciden con{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">
                GOOGLE_CALLBACK_URL
              </code>{" "}
              /{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">
                GITHUB_CALLBACK_URL
              </code>{" "}
              en la API.
            </p>
          ) : null}

          {!isLinkFlow && !isLoginFlow && !isGitHubOAuth ? (
            <p>
              Vuelve al inicio de sesión o a configuración. Si el problema continúa,
              revisa los logs del servidor cuando ocurre el callback OAuth.
            </p>
          ) : null}

          <div className="flex flex-wrap gap-2 pt-2">
            <Button type="button" variant="default" asChild>
              <Link to="/login">Ir al login</Link>
            </Button>
            {isLinkFlow || isGitHubOAuth ? (
              <Button type="button" variant="outline" asChild>
                <Link to="/dashboard/settings">Configuración</Link>
              </Button>
            ) : null}
            <Button type="button" variant="outline" asChild>
              <Link to="/dashboard">Panel</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
