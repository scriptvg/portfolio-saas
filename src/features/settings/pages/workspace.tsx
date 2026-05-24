import * as React from "react"
import {
  ExternalLinkIcon,
  ImagePlusIcon,
  PlusIcon,
  Trash2Icon,
  UploadCloudIcon,
} from "lucide-react"
import { toast } from "sonner"

import {
  SettingsFormField,
  SettingsItemSection,
  SettingsLoading,
  SettingsSaveBar,
} from "@/features/settings/components"
import { ModuleError } from "@/components/shared/module-error"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Item, ItemActions, ItemContent, ItemGroup } from "@/components/ui/item"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { AVATAR_ACCEPT_MIMES, AVATAR_MAX_BYTES } from "@/features/settings/api"
import { PUBLIC_SITE_URL } from "@/features/settings/types"
import type { WorkspaceDraft, WorkspaceLink } from "@/features/settings/types"
import {
  useDeleteWorkspaceAvatarMutation,
  usePatchWorkspaceMutation,
  useSettingsQuery,
  useUploadWorkspaceAvatarMutation,
} from "@/features/settings/hooks/use-settings-queries"

function newLinkId() {
  return `link-${Date.now()}`
}

export function WorkspaceSettings() {
  const { data, isPending, isError, error, refetch } = useSettingsQuery()
  const patchWorkspace = usePatchWorkspaceMutation()
  const uploadAvatar = useUploadWorkspaceAvatarMutation()
  const deleteAvatar = useDeleteWorkspaceAvatarMutation()

  const [draft, setDraft] = React.useState<WorkspaceDraft | null>(null)
  const [savedSnapshot, setSavedSnapshot] = React.useState("")
  const avatarInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (data?.workspace) {
      setDraft(data.workspace)
      setSavedSnapshot(JSON.stringify(data.workspace))
    }
  }, [data?.workspace])

  const dirty =
    draft !== null &&
    savedSnapshot !== "" &&
    JSON.stringify(draft) !== savedSnapshot

  const previewUrl = draft
    ? `${PUBLIC_SITE_URL.replace(/\/$/, "")}/${draft.slug || ""}`
    : PUBLIC_SITE_URL

  function update<K extends keyof WorkspaceDraft>(
    key: K,
    value: WorkspaceDraft[K]
  ) {
    setDraft((prev) => (prev ? { ...prev, [key]: value } : prev))
  }

  function updateLink(id: string, patch: Partial<WorkspaceLink>) {
    setDraft((prev) =>
      prev
        ? {
            ...prev,
            links: prev.links.map((link) =>
              link.id === id ? { ...link, ...patch } : link
            ),
          }
        : prev
    )
  }

  function addLink() {
    setDraft((prev) =>
      prev
        ? {
            ...prev,
            links: [
              ...prev.links,
              { id: newLinkId(), label: "Nuevo enlace", url: "https://" },
            ],
          }
        : prev
    )
  }

  function removeLink(id: string) {
    setDraft((prev) =>
      prev
        ? { ...prev, links: prev.links.filter((link) => link.id !== id) }
        : prev
    )
  }

  async function handleSave() {
    if (!draft) return
    try {
      const saved = await patchWorkspace.mutateAsync(draft)
      setDraft(saved)
      setSavedSnapshot(JSON.stringify(saved))
      toast.success("Espacio de trabajo guardado")
    } catch (e) {
      toast.error(
        e instanceof Error
          ? e.message
          : "No se pudo guardar el espacio de trabajo"
      )
    }
  }

  function handleDiscard() {
    if (!savedSnapshot) return
    setDraft(JSON.parse(savedSnapshot) as WorkspaceDraft)
  }

  /**
   * Sincroniza el resultado de mutaciones server-side (upload / delete avatar)
   * con el draft + savedSnapshot para no marcar dirty algo que ya está persistido.
   */
  function syncFromServer(saved: WorkspaceDraft) {
    setDraft((prev) => (prev ? { ...prev, avatarUrl: saved.avatarUrl } : saved))
    setSavedSnapshot((prev) => {
      if (!prev) return JSON.stringify(saved)
      try {
        const parsed = JSON.parse(prev) as WorkspaceDraft
        return JSON.stringify({ ...parsed, avatarUrl: saved.avatarUrl })
      } catch {
        return JSON.stringify(saved)
      }
    })
  }

  async function handleAvatarFile(file: File | null | undefined) {
    if (!file) return
    if (file.size > AVATAR_MAX_BYTES) {
      toast.error("La imagen supera 4 MB. Comprime o elige otra.")
      return
    }
    if (
      !AVATAR_ACCEPT_MIMES.includes(
        file.type as (typeof AVATAR_ACCEPT_MIMES)[number]
      )
    ) {
      toast.error("Formato no permitido. Usa JPG, PNG, WebP o GIF.")
      return
    }
    try {
      const saved = await uploadAvatar.mutateAsync(file)
      syncFromServer(saved)
      toast.success("Foto actualizada")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo subir la imagen")
    }
  }

  async function handleRemoveAvatar() {
    try {
      const saved = await deleteAvatar.mutateAsync()
      syncFromServer(saved)
      toast.success("Foto eliminada")
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "No se pudo eliminar la imagen"
      )
    }
  }

  const isAvatarBusy = uploadAvatar.isPending || deleteAvatar.isPending

  if (isError) {
    return (
      <ModuleError
        title="No se pudo cargar el espacio de trabajo"
        error={error}
        onRetry={() => void refetch()}
      />
    )
  }

  if (isPending || !draft) {
    return <SettingsLoading />
  }

  return (
    <div className="space-y-8">
      <SettingsItemSection
        title="Identidad pública"
        description="Cómo te presentas en el sitio del portfolio."
      >
        <div className="flex flex-col gap-4">
          <SettingsFormField
            label="Foto de perfil"
            description="JPG, PNG, WebP o GIF. Máximo 4 MB. Se guarda al instante en el servidor."
          >
            <div className="flex items-center gap-4">
              <Avatar className="size-16 ring-1 ring-border">
                <AvatarImage
                  src={draft.avatarUrl || undefined}
                  alt={
                    draft.publicName
                      ? `Foto de perfil de ${draft.publicName}`
                      : "Foto de perfil"
                  }
                />
                <AvatarFallback>
                  {draft.publicName.slice(0, 1).toUpperCase() || "?"}
                </AvatarFallback>
              </Avatar>
              <input
                ref={avatarInputRef}
                type="file"
                accept={AVATAR_ACCEPT_MIMES.join(",")}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  void handleAvatarFile(file)
                  if (avatarInputRef.current) {
                    avatarInputRef.current.value = ""
                  }
                }}
              />
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => avatarInputRef.current?.click()}
                  disabled={isAvatarBusy}
                >
                  {uploadAvatar.isPending ? (
                    <Spinner className="size-4" />
                  ) : draft.avatarUrl ? (
                    <UploadCloudIcon className="size-4" />
                  ) : (
                    <ImagePlusIcon className="size-4" />
                  )}
                  {draft.avatarUrl ? "Cambiar foto" : "Subir foto"}
                </Button>
                {draft.avatarUrl ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => void handleRemoveAvatar()}
                    disabled={isAvatarBusy}
                  >
                    {deleteAvatar.isPending ? (
                      <Spinner className="size-4" />
                    ) : (
                      <Trash2Icon className="size-4" />
                    )}
                    Quitar
                  </Button>
                ) : null}
              </div>
            </div>
          </SettingsFormField>

          <SettingsFormField label="Nombre público" htmlFor="workspace-name">
            <Input
              id="workspace-name"
              value={draft.publicName}
              onChange={(e) => update("publicName", e.target.value)}
            />
          </SettingsFormField>

          <SettingsFormField label="Rol o tagline" htmlFor="workspace-tagline">
            <Input
              id="workspace-tagline"
              value={draft.tagline}
              onChange={(e) => update("tagline", e.target.value)}
            />
          </SettingsFormField>

          <SettingsFormField label="Bio corta" htmlFor="workspace-bio">
            <Textarea
              id="workspace-bio"
              value={draft.bio}
              onChange={(e) => update("bio", e.target.value)}
              rows={3}
            />
          </SettingsFormField>

          <SettingsFormField
            label="Slug de la URL"
            description={`Vista previa: ${previewUrl}`}
            htmlFor="workspace-slug"
          >
            <InputGroup>
              <InputGroupAddon>/</InputGroupAddon>
              <InputGroupInput
                id="workspace-slug"
                value={draft.slug}
                onChange={(e) =>
                  update(
                    "slug",
                    e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9-]/g, "-")
                      .replace(/-+/g, "-")
                  )
                }
              />
            </InputGroup>
          </SettingsFormField>
        </div>
      </SettingsItemSection>

      <SettingsItemSection
        title="Enlaces"
        description="Redes y contacto visibles en el portfolio."
        actions={
          <Button type="button" variant="outline" size="sm" onClick={addLink}>
            <PlusIcon className="size-4" />
            Añadir
          </Button>
        }
      >
        <ItemGroup>
          {draft.links.map((link) => (
            <Item key={link.id} variant="muted" className="gap-2">
              <ItemContent className="flex-row gap-2 sm:grid sm:grid-cols-[1fr_1.5fr]">
                <Input
                  value={link.label}
                  onChange={(e) =>
                    updateLink(link.id, { label: e.target.value })
                  }
                  placeholder="Etiqueta"
                  aria-label="Etiqueta del enlace"
                />
                <Input
                  value={link.url}
                  onChange={(e) => updateLink(link.id, { url: e.target.value })}
                  placeholder="https://"
                  aria-label="URL del enlace"
                />
              </ItemContent>
              <ItemActions>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeLink(link.id)}
                  disabled={draft.links.length <= 1}
                  aria-label="Eliminar enlace"
                >
                  <Trash2Icon className="size-4" />
                </Button>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </SettingsItemSection>

      <SettingsItemSection
        title="Publicación"
        description="Solo en estado «Publicado» la API expone nombre, tagline, bio, foto y enlaces para la sección About del sitio público."
        actions={
          <Button type="button" variant="outline" size="sm" asChild>
            <a href={PUBLIC_SITE_URL} target="_blank" rel="noreferrer">
              Ver sitio
              <ExternalLinkIcon className="size-3.5" />
            </a>
          </Button>
        }
      >
        <SettingsFormField label="Estado" htmlFor="workspace-status">
          <Select
            value={draft.status}
            onValueChange={(value) => {
              if (value === "draft" || value === "published") {
                update("status", value)
              }
            }}
          >
            <SelectTrigger id="workspace-status" className="w-full sm:w-60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Borrador — oculto</SelectItem>
              <SelectItem value="published">Publicado — visible</SelectItem>
            </SelectContent>
          </Select>
        </SettingsFormField>
      </SettingsItemSection>

      <SettingsItemSection
        title="SEO"
        description="Metadatos para buscadores y redes sociales."
      >
        <SettingsFormField
          label="Meta título"
          htmlFor="meta-title"
          description={`${draft.metaTitle.length} / 60 caracteres recomendados`}
        >
          <Input
            id="meta-title"
            value={draft.metaTitle}
            onChange={(e) => update("metaTitle", e.target.value)}
          />
        </SettingsFormField>
        <SettingsFormField
          label="Meta descripción"
          htmlFor="meta-description"
          description={`${draft.metaDescription.length} / 160 caracteres recomendados`}
        >
          <Textarea
            id="meta-description"
            value={draft.metaDescription}
            onChange={(e) => update("metaDescription", e.target.value)}
            rows={3}
          />
        </SettingsFormField>
      </SettingsItemSection>

      <SettingsSaveBar
        dirty={dirty}
        saving={patchWorkspace.isPending}
        onSave={() => void handleSave()}
        onDiscard={handleDiscard}
      />
    </div>
  )
}
