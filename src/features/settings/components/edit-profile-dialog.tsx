import * as React from "react"
import { toast } from "sonner"

import type { AuthUser } from "@/auth/types"
import { patchProfile } from "@/lib/api/auth"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { SettingsFormField } from "@/features/settings/components/settings-form-field"

export type EditProfileDialogProps = {
  user: AuthUser | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSaved?: (user: AuthUser) => void
}

export function EditProfileDialog({
  user,
  open,
  onOpenChange,
  onSaved,
}: EditProfileDialogProps) {
  const [name, setName] = React.useState(user?.name ?? "")
  const [imageUrl, setImageUrl] = React.useState(user?.image ?? "")
  const [saving, setSaving] = React.useState(false)

  React.useEffect(() => {
    if (open) {
      setName(user?.name ?? "")
      setImageUrl(user?.image ?? "")
    }
  }, [open, user?.name, user?.image])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) {
      toast.error("El nombre es obligatorio")
      return
    }

    setSaving(true)
    try {
      const updated = await patchProfile({
        name: trimmedName,
        image: imageUrl.trim() || null,
      })
      toast.success("Perfil actualizado")
      onSaved?.(updated)
      onOpenChange(false)
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "No se pudo guardar el perfil"
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
          <DialogHeader>
            <DialogTitle>Editar perfil</DialogTitle>
            <DialogDescription>
              Actualiza cómo te identificas en el panel. El correo se gestiona
              desde el proveedor vinculado.
            </DialogDescription>
          </DialogHeader>

          <DialogBody className="flex flex-col gap-4">
            <SettingsFormField label="Nombre" htmlFor="profile-name">
              <Input
                id="profile-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                autoFocus
              />
            </SettingsFormField>

            <SettingsFormField label="Correo" htmlFor="profile-email">
              <Input
                id="profile-email"
                value={user?.email ?? ""}
                readOnly
                tabIndex={-1}
                className="cursor-default text-muted-foreground"
              />
            </SettingsFormField>

            <SettingsFormField
              label="URL de avatar"
              description="Enlace HTTPS opcional. Si subes foto desde Espacio de trabajo, esta URL queda ignorada."
              htmlFor="profile-image"
            >
              <Input
                id="profile-image"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://…"
                inputMode="url"
              />
            </SettingsFormField>
          </DialogBody>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={saving}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? <Spinner className="size-3.5" /> : null}
              {saving ? "Guardando…" : "Guardar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
