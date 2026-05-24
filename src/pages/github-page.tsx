import * as React from "react"
import {
  ExternalLinkIcon,
  GitForkIcon,
  Link2Icon,
  LockIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"
import { SiGithub } from "react-icons/si"
import { NavLink } from "react-router-dom"
import { toast } from "sonner"

import { TechnologyIcon } from "@/components/modules/technologies/technology-icon"
import type { GitHubRepoSummary } from "@/lib/api/github"
import {
  useGithubReposQuery,
  useGithubStatusQuery,
  useImportGithubRepoMutation,
} from "@/lib/queries/github"
import { useProjectsQuery } from "@/lib/queries/projects"
import { cn, formatDateTime } from "@/lib/utils"
import { GithubImportRepoDialog } from "@/components/github/github-import-repo-dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Page, PageContent } from "@/components/page"
import { ModuleError } from "@/components/shared/module-error"
import { ModuleHeader } from "@/components/shared/module"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"

type SortKey = "pushed" | "updated" | "created" | "full_name"
type Visibility = "all" | "public" | "private"

interface GitHubAvatarWidgetProps {
  login: string
  avatarUrl: string
  htmlUrl: string
  publicRepos: number
}

function GitHubAvatarWidget({
  login,
  avatarUrl,
  htmlUrl,
  publicRepos,
}: GitHubAvatarWidgetProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-right">
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-semibold text-foreground underline-offset-4 hover:underline"
        >
          @{login}
        </a>
        <p className="text-xs text-muted-foreground">{publicRepos} públicos</p>
      </div>
      <Avatar className="size-10">
        <AvatarImage src={avatarUrl} alt="" />
        <AvatarFallback>{login.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function GithubPage() {
  const status = useGithubStatusQuery()
  const projects = useProjectsQuery()
  const [search, setSearch] = React.useState("")
  const [sort, setSort] = React.useState<SortKey>("pushed")
  const [visibility, setVisibility] = React.useState<Visibility>("all")
  const [language, setLanguage] = React.useState<string>("all")
  const [hideForks, setHideForks] = React.useState(false)
  const [hideArchived, setHideArchived] = React.useState(true)
  const [onlyUnlinked, setOnlyUnlinked] = React.useState(false)
  const [selectedIds, setSelectedIds] = React.useState<Set<number>>(new Set())
  const [target, setTarget] = React.useState<{
    owner: string
    repo: string
  } | null>(null)

  if (status.isPending) {
    return (
      <Page className="space-y-2">
        <ModuleHeader
          title="GitHub"
          endpoint="/github/profile"
          methods={["GET"]}
          description="Perfil y repositorios públicos del propietario."
        />
        <PageContent>
          <Skeleton className="h-40 w-full rounded-none" />
        </PageContent>
      </Page>
    )
  }

  if (status.isError) {
    return (
      <Page className="space-y-2">
        <ModuleHeader
          title="GitHub"
          endpoint="/github/profile"
          methods={["GET"]}
          description="Perfil y repositorios públicos del propietario."
        />
        <PageContent>
          <ModuleError
            title="No se pudo cargar GitHub"
            error={status.error}
            onRetry={() => void status.refetch()}
          />
        </PageContent>
      </Page>
    )
  }

  if (!status.data?.connected) {
    return (
      <Page className="space-y-2">
        <ModuleHeader
          title="GitHub"
          endpoint="/github/profile"
          methods={["GET"]}
          description="Perfil y repositorios públicos del propietario."
        />
        <PageContent>
          <Empty className="border border-dashed">
            <EmptyMedia variant="icon">
              <SiGithub />
            </EmptyMedia>
            <EmptyTitle>GitHub no está conectado</EmptyTitle>
            <EmptyDescription>
              Conecta tu cuenta desde Configuración → Integraciones para listar
              y enlazar tus repositorios.
            </EmptyDescription>
            <Button asChild className="mt-2" size="sm">
              <NavLink to="/dashboard/settings/integrations">
                Ir a configuración
              </NavLink>
            </Button>
          </Empty>
        </PageContent>
      </Page>
    )
  }

  const profile = status.data.integration.profile
  const linkedRepoIds = new Set(
    (projects.data ?? [])
      .map((p) => p.githubRepoId)
      .filter((id): id is number => typeof id === "number")
  )

  return (
    <Page className="space-y-2">
      <ModuleHeader
        title="GitHub"
        endpoint="/github/profile"
        methods={["GET"]}
        description="Perfil y repositorios públicos del propietario."
        mediaSlot={
          <GitHubAvatarWidget
            login={profile.login}
            avatarUrl={profile.avatarUrl}
            htmlUrl={profile.htmlUrl}
            publicRepos={profile.publicRepos}
          />
        }
      />

      <PageContent>
        <div className="flex flex-wrap items-center gap-3">
          <InputGroup className="max-w-sm flex-1">
            <InputGroupAddon>
              <SearchIcon className="size-3.5" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Buscar por nombre"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Select
            value={visibility}
            onValueChange={(v) => setVisibility(v as Visibility)}
          >
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="public">Públicos</SelectItem>
              <SelectItem value="private">Privados</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pushed">Último push</SelectItem>
              <SelectItem value="updated">Último update</SelectItem>
              <SelectItem value="created">Más recientes</SelectItem>
              <SelectItem value="full_name">Nombre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={onlyUnlinked}
              onCheckedChange={(v) => setOnlyUnlinked(v === true)}
            />
            <Label className="cursor-pointer text-xs font-normal">
              Solo no enlazados
            </Label>
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={hideForks}
              onCheckedChange={(v) => setHideForks(v === true)}
            />
            <Label className="cursor-pointer text-xs font-normal">
              Ocultar forks
            </Label>
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={hideArchived}
              onCheckedChange={(v) => setHideArchived(v === true)}
            />
            <Label className="cursor-pointer text-xs font-normal">
              Ocultar archivados
            </Label>
          </label>
        </div>

        <div className="mt-4">
          <ReposList
            search={search}
            visibility={visibility}
            sort={sort}
            linkedRepoIds={linkedRepoIds}
            language={language}
            onLanguageChange={setLanguage}
            hideForks={hideForks}
            hideArchived={hideArchived}
            onlyUnlinked={onlyUnlinked}
            selectedIds={selectedIds}
            onSelectedIdsChange={setSelectedIds}
            onImport={(repo) =>
              setTarget({ owner: repo.owner.login, repo: repo.name })
            }
          />
        </div>
      </PageContent>

      {target ? (
        <GithubImportRepoDialog
          owner={target.owner}
          repo={target.repo}
          open
          onOpenChange={(open) => {
            if (!open) setTarget(null)
          }}
        />
      ) : null}
    </Page>
  )
}

function ReposList({
  search,
  visibility,
  sort,
  linkedRepoIds,
  language,
  onLanguageChange,
  hideForks,
  hideArchived,
  onlyUnlinked,
  selectedIds,
  onSelectedIdsChange,
  onImport,
}: {
  search: string
  visibility: Visibility
  sort: SortKey
  linkedRepoIds: Set<number>
  language: string
  onLanguageChange: (value: string) => void
  hideForks: boolean
  hideArchived: boolean
  onlyUnlinked: boolean
  selectedIds: Set<number>
  onSelectedIdsChange: (ids: Set<number>) => void
  onImport: (repo: GitHubRepoSummary) => void
}) {
  const repos = useGithubReposQuery({
    search: search || undefined,
    visibility,
    sort,
    perPage: 60,
  })
  const importMutation = useImportGithubRepoMutation()
  const [bulkRunning, setBulkRunning] = React.useState(false)

  const allLanguages = React.useMemo(() => {
    if (!repos.data) return []
    return Array.from(
      new Set(
        repos.data
          .map((repo) => repo.language)
          .filter((lang): lang is string => Boolean(lang))
      )
    ).sort()
  }, [repos.data])

  const filtered = React.useMemo(() => {
    if (!repos.data) return []
    return repos.data.filter((repo) => {
      if (language !== "all" && repo.language !== language) return false
      if (hideForks && repo.fork) return false
      if (hideArchived && repo.archived) return false
      if (onlyUnlinked && linkedRepoIds.has(repo.id)) return false
      return true
    })
  }, [
    repos.data,
    language,
    hideForks,
    hideArchived,
    onlyUnlinked,
    linkedRepoIds,
  ])

  const visibleIds = React.useMemo(
    () => filtered.map((repo) => repo.id),
    [filtered]
  )
  const allVisibleSelected =
    visibleIds.length > 0 && visibleIds.every((id) => selectedIds.has(id))

  function toggleSelected(id: number) {
    const next = new Set(selectedIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    onSelectedIdsChange(next)
  }

  function toggleAllVisible() {
    const next = new Set(selectedIds)
    if (allVisibleSelected) {
      for (const id of visibleIds) next.delete(id)
    } else {
      for (const id of visibleIds) next.add(id)
    }
    onSelectedIdsChange(next)
  }

  async function runBulkImport() {
    const targets = filtered.filter(
      (repo) => selectedIds.has(repo.id) && !linkedRepoIds.has(repo.id)
    )
    if (targets.length === 0) {
      toast.info("Selecciona al menos un repo no enlazado.")
      return
    }
    setBulkRunning(true)
    let ok = 0
    let failed = 0
    for (const repo of targets) {
      try {
        await importMutation.mutateAsync({
          owner: repo.owner.login,
          repo: repo.name,
        })
        ok += 1
      } catch {
        failed += 1
      }
    }
    setBulkRunning(false)
    onSelectedIdsChange(new Set())
    if (failed === 0) {
      toast.success(`Importados ${ok} repositorios.`)
    } else {
      toast.warning(`Importados ${ok}. Fallaron ${failed}.`)
    }
  }

  if (repos.isPending) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border border-border bg-card p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1 space-y-3">
                <Skeleton className="h-4 w-64 rounded-none" />
                <Skeleton className="h-3 w-full max-w-2xl rounded-none" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-5 w-20 rounded-none" />
                  <Skeleton className="h-5 w-16 rounded-none" />
                  <Skeleton className="h-5 w-24 rounded-none" />
                </div>
              </div>
              <Skeleton className="h-8 w-24 rounded-none" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (repos.isError) {
    return (
      <ModuleError
        title="No se pudieron cargar los repositorios"
        error={repos.error}
        onRetry={() => void repos.refetch()}
      />
    )
  }

  if (!repos.data || filtered.length === 0) {
    return (
      <Empty className="border border-dashed bg-muted/20 py-12">
        <EmptyMedia variant="icon">
          <SiGithub />
        </EmptyMedia>
        <EmptyTitle>Sin repositorios</EmptyTitle>
        <EmptyDescription>
          No hay repositorios que coincidan con los filtros actuales.
        </EmptyDescription>
      </Empty>
    )
  }

  const selectionCount = filtered.filter(
    (repo) => selectedIds.has(repo.id) && !linkedRepoIds.has(repo.id)
  ).length

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 border border-border bg-muted/30 px-3 py-2 text-xs">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={allVisibleSelected}
              onCheckedChange={toggleAllVisible}
            />
            <Label className="cursor-pointer text-xs font-normal">
              Seleccionar visibles ({filtered.length})
            </Label>
          </label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="h-8 w-40">
              <SelectValue placeholder="Lenguaje" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los lenguajes</SelectItem>
              {allLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          type="button"
          size="sm"
          disabled={selectionCount === 0 || bulkRunning}
          onClick={() => void runBulkImport()}
        >
          {bulkRunning
            ? `Importando…`
            : `Importar seleccionados (${selectionCount})`}
        </Button>
      </div>

      <ItemGroup className="space-y-2">
        {filtered.map((repo) => {
          const isLinked = linkedRepoIds.has(repo.id)
          const isSelected = selectedIds.has(repo.id)

          return (
            <Item
              variant="muted"
              key={repo.id}
              role={isLinked ? undefined : "button"}
              tabIndex={isLinked ? -1 : 0}
              aria-pressed={isLinked ? undefined : isSelected}
              onClick={() => {
                if (!isLinked) toggleSelected(repo.id)
              }}
              onKeyDown={(e) => {
                if (isLinked) return
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault()
                  toggleSelected(repo.id)
                }
              }}
              className={cn(
                "group relative overflow-hidden border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/30",
                !isLinked && "cursor-pointer",
                isSelected &&
                  !isLinked &&
                  "border-primary bg-primary/5 hover:bg-primary/5",
                isLinked && "cursor-default opacity-80"
              )}
            >
              {/* Barra de acento lateral: indica estado de selección/enlace */}
              <div
                className={cn(
                  "absolute inset-y-0 left-0 w-1 transition-colors",
                  isSelected && !isLinked
                    ? "bg-primary"
                    : "bg-muted-foreground/20 group-hover:bg-primary/50"
                )}
              />

              <ItemContent className="min-w-0 pl-2">
                <ItemHeader>
                  <ItemTitle className="flex flex-wrap items-center gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="min-w-0 truncate font-mono text-sm font-semibold text-foreground underline-offset-4 hover:underline"
                    >
                      {repo.full_name}
                    </a>

                    {isLinked ? (
                      <Badge
                        variant="default"
                        className="gap-1 rounded-none text-xs"
                      >
                        <Link2Icon className="size-3" />
                        Enlazado
                      </Badge>
                    ) : null}

                    {repo.private ? (
                      <Badge
                        variant="secondary"
                        className="gap-1 rounded-none text-xs"
                      >
                        <LockIcon className="size-3" />
                        Privado
                      </Badge>
                    ) : null}

                    {repo.fork ? (
                      <Badge
                        variant="outline"
                        className="gap-1 rounded-none text-xs"
                      >
                        <GitForkIcon className="size-3" />
                        Fork
                      </Badge>
                    ) : null}

                    {repo.archived ? (
                      <Badge variant="outline" className="rounded-none text-xs">
                        Archivado
                      </Badge>
                    ) : null}
                  </ItemTitle>
                </ItemHeader>

                {repo.description ? (
                  <ItemDescription className="line-clamp-2 max-w-3xl text-sm leading-relaxed">
                    {repo.description}
                  </ItemDescription>
                ) : (
                  <ItemDescription className="text-sm italic">
                    Sin descripción.
                  </ItemDescription>
                )}

                {/* font-mono + tabular-nums: correcto para valores numéricos/técnicos (R6) */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-muted-foreground tabular-nums">
                  {repo.language ? (
                    <Badge variant="outline" className="rounded-none">
                      <TechnologyIcon icon={repo.language} className="size-3" />
                      {repo.language}
                    </Badge>
                  ) : null}

                  <Badge variant="outline" className="rounded-none">
                    <StarIcon className="size-3" />
                    {repo.stargazers_count}
                  </Badge>

                  <Badge variant="outline" className="rounded-none">
                    <GitForkIcon className="size-3" />
                    {repo.forks_count}
                  </Badge>

                  <Badge variant="outline" className="rounded-none">
                    push {formatDateTime(repo.pushed_at)}
                  </Badge>
                </div>
              </ItemContent>

              <ItemActions
                className="flex h-[80px] shrink-0 items-start gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2">
                  <Button
                    asChild
                    size="icon"
                    variant="ghost"
                    className="size-8 rounded-none"
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${repo.full_name} en GitHub`}
                    >
                      <ExternalLinkIcon className="size-4" />
                    </a>
                  </Button>

                  <Button
                    type="button"
                    size="sm"
                    variant={isLinked ? "outline" : "default"}
                    className="min-w-24 rounded-none"
                    onClick={() => onImport(repo)}
                  >
                    {isLinked ? "Re-enlazar" : "Importar"}
                  </Button>
                </div>
              </ItemActions>
            </Item>
          )
        })}
      </ItemGroup>
    </div>
  )
}
