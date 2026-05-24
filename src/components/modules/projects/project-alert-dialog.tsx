import { AlertTriangleIcon } from "lucide-react"
import { toast } from "sonner"

import type { ProjectRow } from "@/lib/api/projects"
import { hasWriteAuthorization } from "@/lib/api/client"
import { useDeleteProjectMutation } from "@/lib/queries/projects"
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
} from "@/components/ui/alert-dialog"
import { Spinner } from "@/components/ui/spinner"

export function ProjectAlertDialog({
  project,
  open,
  onOpenChange,
}: {
  project: ProjectRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const deleteProjectMutation = useDeleteProjectMutation()

  async function confirmDelete() {
    if (!project) return
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para eliminar proyectos."
      )
      return
    }
    try {
      await deleteProjectMutation.mutateAsync({ id: project.id })
      toast.success("Proyecto eliminado")
      onOpenChange(false)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al eliminar")
    }
  }

  const isDeleting = deleteProjectMutation.isPending

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <AlertTriangleIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Eliminar proyecto</AlertDialogTitle>
          <AlertDialogDescription>
            {project ? (
              <>
                ¿Seguro que quieres eliminar{" "}
                <span className="font-medium text-foreground">
                  {project.title}
                </span>
                ? Esta acción no se puede deshacer.
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
            disabled={isDeleting || !project}
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
