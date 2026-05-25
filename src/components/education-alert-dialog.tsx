import { AlertTriangleIcon } from "lucide-react"
import { toast } from "sonner"

import type { EducationRow } from "@/lib/api/education"
import { hasWriteAuthorization } from "@/lib/api/client"
import { useDeleteEducationMutation } from "@/lib/queries/education"
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

export function EducationAlertDialog({
  education,
  open,
  onOpenChange,
}: {
  education: EducationRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const deleteEducationMutation = useDeleteEducationMutation()

  async function confirmDelete() {
    if (!education) return
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para eliminar entradas de educación."
      )
      return
    }
    try {
      await deleteEducationMutation.mutateAsync({ id: education.id })
      toast.success("Educación eliminada")
      onOpenChange(false)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al eliminar")
    }
  }

  const isDeleting = deleteEducationMutation.isPending

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <AlertTriangleIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Eliminar educación</AlertDialogTitle>
          <AlertDialogDescription>
            {education ? (
              <>
                ¿Seguro que quieres eliminar{" "}
                <span className="font-medium text-foreground">
                  {education.degree}
                </span>{" "}
                en {education.institution}? Esta acción no se puede deshacer.
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
            disabled={isDeleting || !education}
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
