import * as React from "react"
import { toast } from "sonner"

import {
  useGithubRepoDetailsQuery,
  useImportGithubRepoMutation,
  useLinkGithubRepoMutation,
} from "@/lib/queries/github"
import { useProjectsQuery } from "@/lib/queries/projects"
import { useTechnologiesQuery } from "@/lib/queries/technologies"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

type Mode = "create" | "link"

export type GithubImportRepoDialogProps = {
  owner: string
  repo: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GithubImportRepoDialog({
  owner,
  repo,
  open,
  onOpenChange,
}: GithubImportRepoDialogProps) {
  const details = useGithubRepoDetailsQuery(
    open ? owner : null,
    open ? repo : null
  )
  const projects = useProjectsQuery()
  const technologies = useTechnologiesQuery()
  const importMutation = useImportGithubRepoMutation()
  const linkMutation = useLinkGithubRepoMutation()

  const [mode, setMode] = React.useState<Mode>("create")

  // Create-mode state
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [imageUrl, setImageUrl] = React.useState("")

  // Link-mode state
  const [targetProjectId, setTargetProjectId] = React.useState<string>("")
  const [overwrite, setOverwrite] = React.useState({
    title: false,
    description: false,
    image: false,
    githubUrl: true,
    liveUrl: false,
  })
  const [mergeTechnologies, setMergeTechnologies] = React.useState(true)

  React.useEffect(() => {
    if (!open) {
      setMode("create")
      setTargetProjectId("")
      setOverwrite({
        title: false,
        description: false,
        image: false,
        githubUrl: true,
        liveUrl: false,
      })
      setMergeTechnologies(true)
      return
    }
    const data = details.data
    if (!data) return
    setTitle(data.repo.name)
    setDescription(data.repo.description ?? "")
    setImageUrl(data.repo.owner.avatar_url)
  }, [open, details.data])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!details.data) return
    try {
      if (mode === "create") {
        const created = await importMutation.mutateAsync({
          owner,
          repo,
          title: title.trim() || undefined,
          description: description.trim() || undefined,
          imageUrl: imageUrl.trim() || undefined,
        })
        toast.success(`Proyecto «${created.title}» importado`)
      } else {
        if (!targetProjectId) {
          toast.error("Selecciona un proyecto")
          return
        }
        const result = await linkMutation.mutateAsync({
          owner,
          repo,
          projectId: targetProjectId,
          overwriteTitle: overwrite.title,
          overwriteDescription: overwrite.description,
          overwriteImage: overwrite.image,
          overwriteGithubUrl: overwrite.githubUrl,
          overwriteLiveUrl: overwrite.liveUrl,
          mergeTechnologies,
        })
        toast.success(`«${result.title}» enlazado a ${result.githubFullName}`)
      }
      onOpenChange(false)
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo guardar")
    }
  }

  const techMap = React.useMemo(() => {
    const map = new Map<string, string>()
    for (const tech of technologies.data ?? []) {
      map.set(tech.id, tech.name)
    }
    return map
  }, [technologies.data])

  const submitting = importMutation.isPending || linkMutation.isPending

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent size="lg">
        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col"
        >
          <DialogHeader className="gap-3">
            <div className="space-y-1.5">
              <DialogTitle>
                Importar {owner}/{repo}
              </DialogTitle>
              <DialogDescription>
                Crea un proyecto nuevo o enlaza este repo a uno existente del
                portfolio.
              </DialogDescription>
            </div>
            <Tabs
              value={mode}
              onValueChange={(value) => setMode(value as Mode)}
            >
              <TabsList variant="line" className="h-9 w-full">
                <TabsTrigger value="create" className="flex-1">
                  Crear nuevo
                </TabsTrigger>
                <TabsTrigger value="link" className="flex-1">
                  Vincular a existente
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </DialogHeader>

          <DialogBody>
            {details.isPending ? (
              <div className="space-y-2">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-8 w-2/3" />
              </div>
            ) : details.isError ? (
              <p className="text-sm text-destructive">
                No se pudieron cargar los detalles del repo.
              </p>
            ) : details.data ? (
              mode === "create" ? (
                <FieldSet>
                  <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="import-title">Título</FieldLabel>
                    <FieldContent>
                      <Input
                        id="import-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="import-description">
                      Descripción
                    </FieldLabel>
                    <FieldContent>
                      <Textarea
                        id="import-description"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="import-image">URL de imagen</FieldLabel>
                    <FieldContent>
                      <Input
                        id="import-image"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://…"
                      />
                    </FieldContent>
                  </Field>

                  <DetectedTechs
                    ids={details.data.matchedTechnologyIds}
                    techMap={techMap}
                  />
                </FieldGroup>
              </FieldSet>
            ) : (
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="link-target">
                      Proyecto destino
                    </FieldLabel>
                    <FieldContent>
                      <Select
                        value={targetProjectId}
                        onValueChange={setTargetProjectId}
                      >
                        <SelectTrigger id="link-target">
                          <SelectValue placeholder="Selecciona un proyecto" />
                        </SelectTrigger>
                        <SelectContent>
                          {projects.data?.length ? (
                            projects.data.map((project) => (
                              <SelectItem key={project.id} value={project.id}>
                                <span className="flex items-center gap-2">
                                  <span>{project.title}</span>
                                  {project.githubFullName ? (
                                    <span className="font-mono text-[10px] text-muted-foreground">
                                      ↔ {project.githubFullName}
                                    </span>
                                  ) : null}
                                </span>
                              </SelectItem>
                            ))
                          ) : (
                            <div className="px-3 py-2 text-xs text-muted-foreground">
                              No hay proyectos.
                            </div>
                          )}
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Sobrescribir desde GitHub</FieldLabel>
                    <FieldContent>
                      <div className="space-y-2">
                        <OverwriteRow
                          id="ow-title"
                          checked={overwrite.title}
                          onCheckedChange={(v) =>
                            setOverwrite((p) => ({ ...p, title: v }))
                          }
                          label="Título"
                          preview={details.data.repo.name}
                        />
                        <OverwriteRow
                          id="ow-description"
                          checked={overwrite.description}
                          onCheckedChange={(v) =>
                            setOverwrite((p) => ({
                              ...p,
                              description: v,
                            }))
                          }
                          label="Descripción"
                          preview={details.data.repo.description ?? "—"}
                          disabled={!details.data.repo.description}
                        />
                        <OverwriteRow
                          id="ow-image"
                          checked={overwrite.image}
                          onCheckedChange={(v) =>
                            setOverwrite((p) => ({ ...p, image: v }))
                          }
                          label="Imagen (avatar del owner)"
                        />
                        <OverwriteRow
                          id="ow-github"
                          checked={overwrite.githubUrl}
                          onCheckedChange={(v) =>
                            setOverwrite((p) => ({
                              ...p,
                              githubUrl: v,
                            }))
                          }
                          label="URL de GitHub"
                          preview={details.data.repo.html_url}
                        />
                        <OverwriteRow
                          id="ow-live"
                          checked={overwrite.liveUrl}
                          onCheckedChange={(v) =>
                            setOverwrite((p) => ({ ...p, liveUrl: v }))
                          }
                          label="URL live"
                          preview={details.data.repo.homepage ?? "—"}
                          disabled={!details.data.repo.homepage}
                        />
                      </div>
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldContent>
                      <Label
                        htmlFor="merge-techs"
                        className="flex cursor-pointer items-start gap-2 text-xs"
                      >
                        <Checkbox
                          id="merge-techs"
                          checked={mergeTechnologies}
                          onCheckedChange={(v) =>
                            setMergeTechnologies(v === true)
                          }
                        />
                        <span>
                          <span className="text-sm font-medium text-foreground">
                            Añadir tecnologías detectadas
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            Las existentes en el proyecto se conservan.
                          </span>
                        </span>
                      </Label>
                    </FieldContent>
                  </Field>

                  <DetectedTechs
                    ids={details.data.matchedTechnologyIds}
                    techMap={techMap}
                  />
                </FieldGroup>
              </FieldSet>
            )
          ) : null}
          </DialogBody>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={submitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={submitting || !details.data}
            >
              {submitting ? <Spinner className="size-3.5" /> : null}
              {submitting
                ? mode === "link"
                  ? "Enlazando…"
                  : "Importando…"
                : mode === "link"
                  ? "Enlazar"
                  : "Crear proyecto"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function DetectedTechs({
  ids,
  techMap,
}: {
  ids: string[]
  techMap: Map<string, string>
}) {
  return (
    <Field>
      <FieldLabel>Tecnologías detectadas</FieldLabel>
      <FieldContent>
        {ids.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {ids.map((id) => (
              <Badge
                key={id}
                variant="outline"
                className="font-mono text-[10px]"
              >
                {techMap.get(id) ?? id}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">
            Sin coincidencias en tu catálogo.
          </p>
        )}
      </FieldContent>
    </Field>
  )
}

function OverwriteRow({
  id,
  checked,
  onCheckedChange,
  label,
  preview,
  disabled,
}: {
  id: string
  checked: boolean
  onCheckedChange: (next: boolean) => void
  label: string
  preview?: string
  disabled?: boolean
}) {
  return (
    <Label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-2 text-xs aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      aria-disabled={disabled || undefined}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
        disabled={disabled}
      />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-foreground">
          {label}
        </span>
        {preview ? (
          <span className="mt-0.5 block truncate font-mono text-[10px] text-muted-foreground">
            {preview}
          </span>
        ) : null}
      </span>
    </Label>
  )
}
