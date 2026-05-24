import { AlertTriangleIcon } from "lucide-react"
import { toast } from "sonner"

import type { TechnologyRow } from "@/lib/api/technologies"
import { hasWriteAuthorization } from "@/lib/api/client"
import { useDeleteTechnologyMutation } from "@/lib/queries/technologies"
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

export function TechnologieAlertDialog({
  technology,
  open,
  onOpenChange,
}: {
  technology: TechnologyRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const deleteTechnologyMutation = useDeleteTechnologyMutation()

  async function confirmDelete() {
    if (!technology) return
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para eliminar tecnologías."
      )
      return
    }
    try {
      await deleteTechnologyMutation.mutateAsync({ id: technology.id })
      toast.success("Tecnología eliminada")
      onOpenChange(false)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al eliminar")
    }
  }

  const isDeleting = deleteTechnologyMutation.isPending

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <AlertTriangleIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Eliminar tecnología</AlertDialogTitle>
          <AlertDialogDescription>
            {technology ? (
              <>
                ¿Seguro que quieres eliminar{" "}
                <span className="font-medium text-foreground">
                  {technology.name}
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
            disabled={isDeleting || !technology}
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
