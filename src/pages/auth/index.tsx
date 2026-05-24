import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { SiGithub, SiGoogle } from "react-icons/si"

import { useAuth } from "@/auth/auth-context"
import { getApiBase } from "@/lib/api/client"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { Page, PageContent } from "@/components/page"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
  email: z.string().email("Introduce un correo válido"),
  password: z.string().min(1, "Introduce tu contraseña"),
})

type LoginFormValues = z.infer<typeof formSchema>

export function LoginPage() {
  const navigate = useNavigate()
  const { signInWithCredentials, isAuthenticated, bootstrapping } = useAuth()
  const [loading, setLoading] = React.useState(false)

  const api = getApiBase()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  React.useEffect(() => {
    if (!bootstrapping && isAuthenticated) {
      navigate("/dashboard", { replace: true })
    }
  }, [isAuthenticated, bootstrapping, navigate])

  async function onSubmit(data: LoginFormValues) {
    setLoading(true)

    try {
      await signInWithCredentials(data.email, data.password)
      toast.success("Bienvenido")
      navigate("/dashboard", { replace: true })
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "No se pudo iniciar sesión"
      )
    } finally {
      setLoading(false)
    }
  }

  if (bootstrapping) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-background">
        <Spinner className="size-8 text-muted-foreground" />
      </div>
    )
  }

  return (
    <Page className="flex min-h-svh items-center justify-center bg-background">
      <PageContent className="grid min-h-svh w-full p-4 lg:grid-cols-2">
        <section className="m-auto flex w-full max-w-sm flex-col items-center">
          <div className="flex size-10 items-center justify-center rounded-none border bg-card text-sm font-semibold shadow-sm">
            AI
          </div>

          <div className="mt-5 space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Iniciar sesión
            </h1>

            <p className="text-sm text-muted-foreground">
              Accede al panel de administración
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col items-center gap-3">
            <Button
              type="button"
              className="w-full"
              variant="outline"
              disabled={loading}
              onClick={() => {
                window.location.href = `${api}/api/v1/auth/google`
              }}
            >
              <SiGoogle className="size-[18px]" />
              <span>Continuar con Google</span>
            </Button>

            <Button
              type="button"
              className="w-full"
              variant="outline"
              disabled={loading}
              onClick={() => {
                window.location.href = `${api}/api/v1/auth/github`
              }}
            >
              <SiGithub className="size-[18px]" />
              <span>Continuar con GitHub</span>
            </Button>
          </div>

          <div className="my-7 flex w-full items-center justify-center overflow-hidden text-muted-foreground">
            <Separator className="flex-1" />
            <span className="px-3 text-xs">O</span>
            <Separator className="flex-1" />
          </div>

          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Correo</FieldLabel>

                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@email.com"
                    aria-invalid={fieldState.invalid}
                    disabled={loading}
                    className="w-full"
                    {...field}
                  />

                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="password"
                    className="flex items-center justify-between"
                  >
                    Contraseña
                    <span>
                      <Link
                        className="block text-center text-sm text-muted-foreground underline underline-offset-4"
                        to="#"
                      >
                        ¿Has olvidado tu contraseña?
                      </Link>
                    </span>
                  </FieldLabel>

                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Introduce tu contraseña"
                    aria-invalid={fieldState.invalid}
                    disabled={loading}
                    className="w-full"
                    {...field}
                  />

                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Button className="mt-4 w-full" type="submit" disabled={loading}>
              {loading ? "Entrando…" : "Continuar con correo"}
            </Button>
          </form>
        </section>

        <aside className="hidden rounded-none border bg-muted/40 lg:flex lg:flex-col lg:justify-between lg:p-10">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="rounded px-1 pt-1.5 font-mono text-xs"
            >
              SaaS Admin
            </Badge>

            <h2 className="max-w-md text-3xl font-semibold tracking-tight">
              Gestiona tu portfolio desde una interfaz simple y segura.
            </h2>

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Acceso privado al panel de administración con autenticación por
              correo, Google y GitHub.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="border bg-background p-4 shadow-sm">
              <p className="text-sm font-medium">Autenticación integrada</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Conecta contra tu API actual sin cambiar la lógica existente.
              </p>
            </div>

            <div className="border bg-background p-4 shadow-sm">
              <p className="text-sm font-medium">Panel administrativo</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Preparado para dashboards, backoffice y gestión interna.
              </p>
            </div>
          </div>
        </aside>
      </PageContent>
    </Page>
  )
}

export default LoginPage
