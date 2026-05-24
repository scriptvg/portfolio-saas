import * as React from "react"
import { ArrowRightIcon, RefreshCwIcon } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { NavLink } from "react-router-dom"
import { toast } from "sonner"

import {
  useConnectGithubMutation,
  useDisconnectGithubMutation,
  useGithubStatusQuery,
  useRefreshGithubProfileMutation,
} from "@/lib/queries/github"
import { formatDateTime } from "@/lib/utils"
import { SettingsItemSection } from "@/features/settings/components/item-section"
import { ModuleError } from "@/components/shared/module-error"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"

export function GithubIntegrationSection() {
  const status = useGithubStatusQuery()

  return (
    <SettingsItemSection
      title="GitHub"
      description="Conecta un Personal Access Token. La importación de repositorios se gestiona desde la sección GitHub del panel."
    >
      {status.isPending ? (
        <Skeleton className="h-32 w-full" />
      ) : status.isError ? (
        <ModuleError
          title="No se pudo cargar el estado de GitHub"
          error={status.error}
          onRetry={() => void status.refetch()}
        />
      ) : status.data && status.data.connected ? (
        <ConnectedView integration={status.data.integration} />
      ) : (
        <ConnectForm />
      )}
    </SettingsItemSection>
  )
}

function ConnectForm() {
  const [token, setToken] = React.useState("")
  const connect = useConnectGithubMutation()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const trimmed = token.trim()
    if (!trimmed) {
      toast.error("Pega tu Personal Access Token")
      return
    }
    try {
      await connect.mutateAsync(trimmed)
      setToken("")
      toast.success("GitHub conectado")
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "No se pudo conectar con GitHub"
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className=" border bg-muted/40 p-3 text-xs text-muted-foreground">
        <p>
          Genera un{" "}
          <a
            href="https://github.com/settings/tokens?type=beta"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            fine-grained Personal Access Token
          </a>{" "}
          con permisos de lectura en repositorios. Lo guardamos cifrado y no
          se mostrará otra vez.
        </p>
      </div>
      <InputGroup>
        <InputGroupAddon>
          <SiGithub className="size-4" />
        </InputGroupAddon>
        <InputGroupInput
          type="password"
          autoComplete="off"
          placeholder="github_pat_… o ghp_…"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          aria-label="GitHub Personal Access Token"
        />
      </InputGroup>
      <Button type="submit" size="sm" disabled={connect.isPending}>
        {connect.isPending ? <Spinner className="size-3.5" /> : null}
        {connect.isPending ? "Conectando…" : "Conectar GitHub"}
      </Button>
    </form>
  )
}

type IntegrationProps = {
  integration: NonNullable<
    Extract<
      ReturnType<typeof useGithubStatusQuery>["data"],
      { connected: true }
    >
  >["integration"]
}

function ConnectedView({ integration }: IntegrationProps) {
  const disconnect = useDisconnectGithubMutation()
  const refresh = useRefreshGithubProfileMutation()

  async function handleDisconnect() {
    if (!window.confirm("¿Desconectar GitHub? El token se eliminará.")) return
    try {
      await disconnect.mutateAsync()
      toast.success("GitHub desconectado")
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "No se pudo desconectar"
      )
    }
  }

  async function handleRefresh() {
    try {
      await refresh.mutateAsync()
      toast.success("Perfil actualizado")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo refrescar")
    }
  }

  const profile = integration.profile

  return (
    <div className="flex flex-col gap-3  border bg-card p-4 sm:flex-row sm:items-start">
      <Avatar className="size-12">
        <AvatarImage src={profile.avatarUrl} alt="" />
        <AvatarFallback>
          {profile.login.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex flex-wrap items-baseline gap-2">
          <p className="text-sm font-medium">
            {profile.name ?? profile.login}
          </p>
          <a
            href={profile.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            @{profile.login}
          </a>
        </div>
        {profile.bio ? (
          <p className="text-xs/relaxed text-muted-foreground">
            {profile.bio}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground tabular-nums">
          <span>{profile.publicRepos} repos</span>
          <span>{profile.followers} seguidores</span>
          <span>{profile.following} siguiendo</span>
          <span>{profile.publicGists} gists</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="font-mono text-[10px]">
            token {integration.tokenPreview}
          </Badge>
          <span className="font-mono tabular-nums">
            actualizado {formatDateTime(integration.lastSyncedAt)}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <Button type="button" size="sm" asChild>
          <NavLink to="/dashboard/github">
            Abrir gestor
            <ArrowRightIcon className="size-3.5" />
          </NavLink>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => void handleRefresh()}
          disabled={refresh.isPending}
        >
          <RefreshCwIcon className="size-3.5" />
          Refrescar
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => void handleDisconnect()}
          disabled={disconnect.isPending}
        >
          Desconectar
        </Button>
      </div>
    </div>
  )
}
