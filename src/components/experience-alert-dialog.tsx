import { AlertTriangleIcon } from "lucide-react"
import { toast } from "sonner"

import type { ExperienceRow } from "@/lib/api/experiences"
import { hasWriteAuthorization } from "@/lib/api/client"
import { useDeleteExperienceMutation } from "@/lib/queries/experiences"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "./ui/alert-dialog"
import { Spinner } from "./ui/spinner"

export function ExperienceAlertDialog({
  experience,
  open,
  onOpenChange,
}: {
  experience: ExperienceRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const deleteExperienceMutation = useDeleteExperienceMutation()

  async function confirmDelete() {
    if (!experience) return
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para eliminar experiencias."
      )
      return
    }
    try {
      await deleteExperienceMutation.mutateAsync({ id: experience.id })
      toast.success("Experiencia eliminada")
      onOpenChange(false)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al eliminar")
    }
  }

  const isDeleting = deleteExperienceMutation.isPending

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <AlertTriangleIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Eliminar experiencia</AlertDialogTitle>
          <AlertDialogDescription>
            {experience ? (
              <>
                ¿Seguro que quieres eliminar{" "}
                <span className="font-medium text-foreground">
                  {experience.title}
                </span>{" "}
                en {experience.company}? Esta acción no se puede deshacer.
              </>
            ) : null}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel type="button" disabled={isDeleting}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            type="button"
            variant="destructive"
            disabled={isDeleting || !experience}
            onClick={(e) => {
              e.preventDefault()
              void confirmDelete()
            }}
          >
            {isDeleting ? <Spinner className="size-3.5" /> : null}
            {isDeleting ? "Eliminando…" : "Eliminar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
