import * as React from "react"
import {
  EllipsisIcon,
  HistoryIcon,
  KeyRoundIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  WebhookIcon,
} from "lucide-react"
import { toast } from "sonner"

import type { WebhookRow } from "@/lib/api/webhooks"
import {
  useDeleteWebhookMutation,
  useRotateWebhookSecretMutation,
  useWebhooksQuery,
} from "@/lib/queries/webhooks"
import { SettingsItemSection } from "@/features/settings/components/item-section"
import { WebhookDeliveriesDialog } from "@/features/settings/components/webhook-deliveries-dialog"
import { WebhookFormDialog } from "@/features/settings/components/webhook-form-dialog"
import { ModuleError } from "@/components/shared/module-error"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import {
  useUpdateWebhookMutation,
} from "@/lib/queries/webhooks"

export function WebhooksSection() {
  const { data, isPending, isError, error, refetch } = useWebhooksQuery()
  const updateMutation = useUpdateWebhookMutation()
  const deleteMutation = useDeleteWebhookMutation()
  const rotateMutation = useRotateWebhookSecretMutation()

  const [formOpen, setFormOpen] = React.useState(false)
  const [editing, setEditing] = React.useState<WebhookRow | null>(null)
  const [deliveriesFor, setDeliveriesFor] = React.useState<WebhookRow | null>(
    null
  )

  function openCreate() {
    setEditing(null)
    setFormOpen(true)
  }

  function openEdit(webhook: WebhookRow) {
    setEditing(webhook)
    setFormOpen(true)
  }

  async function toggleActive(webhook: WebhookRow, active: boolean) {
    try {
      await updateMutation.mutateAsync({ id: webhook.id, body: { active } })
      toast.success(active ? "Webhook activado" : "Webhook pausado")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo actualizar")
    }
  }

  async function handleDelete(webhook: WebhookRow) {
    if (
      !window.confirm(`¿Eliminar el webhook «${webhook.label}»?`)
    ) {
      return
    }
    try {
      await deleteMutation.mutateAsync(webhook.id)
      toast.success("Webhook eliminado")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo eliminar")
    }
  }

  async function handleRotate(webhook: WebhookRow) {
    try {
      const result = await rotateMutation.mutateAsync(webhook.id)
      await navigator.clipboard.writeText(result.secret).catch(() => {})
      toast.success("Secreto rotado y copiado al portapapeles")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo rotar")
    }
  }

  return (
    <SettingsItemSection
      title="Webhooks"
      description="Recibe eventos HTTP firmados cuando cambie tu contenido. Cada entrega trae las cabeceras X-Webhook-Event, X-Webhook-Timestamp y X-Webhook-Signature (HMAC SHA-256)."
      actions={
        <Button type="button" size="sm" onClick={openCreate}>
          <PlusIcon className="size-3.5" />
          Nuevo webhook
        </Button>
      }
    >
      {isError ? (
        <ModuleError
          title="No se pudieron cargar los webhooks"
          error={error}
          onRetry={() => void refetch()}
        />
      ) : isPending ? (
        <div className="space-y-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      ) : data && data.length > 0 ? (
        <ItemGroup>
          {data.map((webhook) => (
            <Item key={webhook.id} variant="muted">
              <ItemMedia variant="icon">
                <WebhookIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="gap-2">
                  {webhook.label}
                  {!webhook.active ? (
                    <Badge variant="secondary" className="text-[10px]">
                      Pausado
                    </Badge>
                  ) : null}
                </ItemTitle>
                <ItemDescription className="font-mono">
                  {webhook.url}
                </ItemDescription>
                <div className="mt-1 flex flex-wrap gap-1">
                  {webhook.events.slice(0, 4).map((event) => (
                    <Badge
                      key={event}
                      variant="outline"
                      className="text-[10px] font-mono"
                    >
                      {event}
                    </Badge>
                  ))}
                  {webhook.events.length > 4 ? (
                    <Badge variant="outline" className="text-[10px]">
                      +{webhook.events.length - 4}
                    </Badge>
                  ) : null}
                </div>
              </ItemContent>
              <ItemActions>
                <Switch
                  checked={webhook.active}
                  onCheckedChange={(checked) => void toggleActive(webhook, checked)}
                  aria-label={
                    webhook.active ? "Pausar webhook" : "Activar webhook"
                  }
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Acciones de ${webhook.label}`}
                    >
                      <EllipsisIcon className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onSelect={() => setDeliveriesFor(webhook)}
                    >
                      <HistoryIcon className="size-4" />
                      Ver entregas
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => openEdit(webhook)}>
                      <PencilIcon className="size-4" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => void handleRotate(webhook)}
                    >
                      <KeyRoundIcon className="size-4" />
                      Rotar secreto
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      variant="destructive"
                      onSelect={() => void handleDelete(webhook)}
                    >
                      <TrashIcon className="size-4" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      ) : (
        <Empty className="border border-dashed">
          <EmptyMedia variant="icon">
            <WebhookIcon />
          </EmptyMedia>
          <EmptyTitle>Sin webhooks configurados</EmptyTitle>
          <EmptyDescription>
            Crea un webhook para enviar eventos a Discord, Slack o tu propio
            servicio cada vez que cambies contenido.
          </EmptyDescription>
        </Empty>
      )}

      <WebhookFormDialog
        open={formOpen}
        onOpenChange={(open) => {
          setFormOpen(open)
          if (!open) setEditing(null)
        }}
        webhook={editing}
      />
      <WebhookDeliveriesDialog
        webhook={deliveriesFor}
        open={deliveriesFor !== null}
        onOpenChange={(open) => {
          if (!open) setDeliveriesFor(null)
        }}
      />
    </SettingsItemSection>
  )
}
