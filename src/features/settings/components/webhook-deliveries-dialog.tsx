import { RefreshCwIcon } from "lucide-react"
import { toast } from "sonner"

import type { WebhookDeliveryRow, WebhookRow } from "@/lib/api/webhooks"
import {
  useRetryDeliveryMutation,
  useWebhookDeliveriesQuery,
} from "@/lib/queries/webhooks"
import { Badge } from "@/components/ui/badge"
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
import { Empty, EmptyDescription, EmptyTitle } from "@/components/ui/empty"
import { Skeleton } from "@/components/ui/skeleton"
import { formatDateTime } from "@/lib/utils"

export type WebhookDeliveriesDialogProps = {
  webhook: WebhookRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const STATUS_LABEL: Record<WebhookDeliveryRow["status"], string> = {
  pending: "Pendiente",
  delivering: "Enviando",
  success: "Éxito",
  failed: "Fallida",
  dead: "Descartada",
}

function statusVariant(
  status: WebhookDeliveryRow["status"]
): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "success":
      return "default"
    case "pending":
    case "delivering":
      return "secondary"
    case "failed":
    case "dead":
      return "destructive"
    default:
      return "outline"
  }
}

export function WebhookDeliveriesDialog({
  webhook,
  open,
  onOpenChange,
}: WebhookDeliveriesDialogProps) {
  const query = useWebhookDeliveriesQuery(open && webhook ? webhook.id : null)
  const retry = useRetryDeliveryMutation(webhook?.id ?? "")

  async function handleRetry(id: string) {
    try {
      await retry.mutateAsync(id)
      toast.success("Entrega reencolada")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo reintentar")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent size="2xl">
        <DialogHeader>
          <DialogTitle>Entregas · {webhook?.label}</DialogTitle>
          <DialogDescription>
            Últimos 50 intentos. La lista se refresca cada 5 segundos mientras
            esté abierta.
          </DialogDescription>
        </DialogHeader>

        <DialogBody>
          {query.isPending ? (
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : query.isError ? (
            <p className="text-sm text-destructive">
              No se pudieron cargar las entregas.
            </p>
          ) : query.data && query.data.length > 0 ? (
            <ul className="space-y-2">
              {query.data.map((delivery) => (
                <li
                  key={delivery.id}
                  className="space-y-2 rounded-none border bg-card p-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={statusVariant(delivery.status)}>
                        {STATUS_LABEL[delivery.status]}
                      </Badge>
                      <code className="font-mono text-xs">
                        {delivery.event}
                      </code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        intento {delivery.attemptCount}
                      </span>
                      {(delivery.status === "failed" ||
                        delivery.status === "dead") && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => void handleRetry(delivery.id)}
                          disabled={retry.isPending}
                        >
                          <RefreshCwIcon className="size-3.5" />
                          Reintentar
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-1 font-mono text-xs text-muted-foreground sm:grid-cols-2">
                    <span>
                      Encolada:{" "}
                      <span className="tabular-nums">
                        {formatDateTime(delivery.createdAt)}
                      </span>
                    </span>
                    {delivery.lastAttemptAt ? (
                      <span>
                        Último intento:{" "}
                        <span className="tabular-nums">
                          {formatDateTime(delivery.lastAttemptAt)}
                        </span>
                      </span>
                    ) : null}
                    {delivery.responseStatus !== null ? (
                      <span>
                        Respuesta:{" "}
                        <span className="text-foreground tabular-nums">
                          HTTP {delivery.responseStatus}
                        </span>
                      </span>
                    ) : null}
                    {delivery.status === "pending" && delivery.nextAttemptAt ? (
                      <span>
                        Próximo intento:{" "}
                        <span className="tabular-nums">
                          {formatDateTime(delivery.nextAttemptAt)}
                        </span>
                      </span>
                    ) : null}
                  </div>

                  {delivery.errorMessage ? (
                    <p className="font-mono text-xs text-destructive">
                      {delivery.errorMessage}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <Empty className="border-0">
              <EmptyTitle>Aún no hay entregas</EmptyTitle>
              <EmptyDescription>
                Cuando ocurra un evento suscrito, aparecerá aquí su historial.
              </EmptyDescription>
            </Empty>
          )}
        </DialogBody>

        <DialogFooter>
          <Button type="button" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
