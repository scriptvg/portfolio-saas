import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { CheckIcon, CopyIcon } from "lucide-react"
import { toast } from "sonner"

import { WEBHOOK_EVENTS, type WebhookRow } from "@/lib/api/webhooks"
import {
  useCreateWebhookMutation,
  useUpdateWebhookMutation,
} from "@/lib/queries/webhooks"
import {
  webhookFormDefaults,
  webhookFormSchema,
  type WebhookFormValues,
} from "@/lib/schemas/webhook-form"
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
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"

export type WebhookFormDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  webhook: WebhookRow | null
}

export function WebhookFormDialog({
  open,
  onOpenChange,
  webhook,
}: WebhookFormDialogProps) {
  const mode: "create" | "edit" = webhook ? "edit" : "create"
  const createMutation = useCreateWebhookMutation()
  const updateMutation = useUpdateWebhookMutation()
  const [createdSecret, setCreatedSecret] = React.useState<string | null>(null)

  const form = useForm<WebhookFormValues>({
    resolver: zodResolver(webhookFormSchema),
    defaultValues: webhookFormDefaults,
  })

  React.useEffect(() => {
    if (!open) {
      setCreatedSecret(null)
      form.reset(webhookFormDefaults)
      return
    }
    if (webhook) {
      form.reset({
        label: webhook.label,
        url: webhook.url,
        events: webhook.events,
        active: webhook.active,
      })
    } else {
      form.reset(webhookFormDefaults)
    }
  }, [open, webhook, form])

  async function onSubmit(values: WebhookFormValues) {
    try {
      if (mode === "edit" && webhook) {
        await updateMutation.mutateAsync({ id: webhook.id, body: values })
        toast.success("Webhook actualizado")
        onOpenChange(false)
      } else {
        const created = await createMutation.mutateAsync(values)
        setCreatedSecret(created.secret)
        toast.success("Webhook creado")
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo guardar")
    }
  }

  const isSaving = createMutation.isPending || updateMutation.isPending

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent size="lg">
        {createdSecret ? (
          <CreatedSecretView
            secret={createdSecret}
            onClose={() => onOpenChange(false)}
          />
        ) : (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex min-h-0 flex-1 flex-col"
          >
            <DialogHeader>
              <DialogTitle>
                {mode === "edit" ? "Editar webhook" : "Nuevo webhook"}
              </DialogTitle>
              <DialogDescription>
                La API hará POST a la URL cada vez que ocurra alguno de los
                eventos seleccionados. El cuerpo se firma con HMAC SHA-256.
              </DialogDescription>
            </DialogHeader>

            <DialogBody>
              <FieldSet>
                <FieldGroup>
                  <Controller
                    control={form.control}
                    name="label"
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid ? "true" : undefined}
                      >
                        <FieldLabel htmlFor="webhook-label">
                          Etiqueta
                        </FieldLabel>
                        <FieldContent>
                          <Input
                            id="webhook-label"
                            placeholder="Discord: canal de despliegues"
                            autoFocus={mode === "create"}
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          <FieldError errors={[fieldState.error]} />
                        </FieldContent>
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="url"
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid ? "true" : undefined}
                      >
                        <FieldLabel htmlFor="webhook-url">URL</FieldLabel>
                        <FieldContent>
                          <Input
                            id="webhook-url"
                            inputMode="url"
                            placeholder="https://example.com/hook"
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          <FieldError errors={[fieldState.error]} />
                        </FieldContent>
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="events"
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid ? "true" : undefined}
                      >
                        <FieldLabel>Eventos</FieldLabel>
                        <FieldContent>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {WEBHOOK_EVENTS.map((event) => {
                              const id = `event-${event}`
                              const checked = field.value.includes(event)
                              return (
                                <Label
                                  key={event}
                                  htmlFor={id}
                                  className="flex cursor-pointer items-center gap-2 rounded-none border px-2.5 py-2 font-mono text-xs transition-colors hover:border-foreground/20 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                                >
                                  <Checkbox
                                    id={id}
                                    checked={checked}
                                    onCheckedChange={(value) => {
                                      if (value) {
                                        field.onChange([...field.value, event])
                                      } else {
                                        field.onChange(
                                          field.value.filter((e) => e !== event)
                                        )
                                      }
                                    }}
                                  />
                                  <span>{event}</span>
                                </Label>
                              )
                            })}
                          </div>
                          <FieldError errors={[fieldState.error]} />
                        </FieldContent>
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="active"
                    render={({ field }) => (
                      <Field>
                        <div className="flex items-center justify-between gap-3">
                          <div className="space-y-1">
                            <FieldLabel htmlFor="webhook-active">
                              Activo
                            </FieldLabel>
                            <p className="text-xs text-muted-foreground">
                              Si desactivas, las entregas pendientes se marcan
                              como muertas.
                            </p>
                          </div>
                          <Switch
                            id="webhook-active"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </div>
                      </Field>
                    )}
                  />
                </FieldGroup>
              </FieldSet>
            </DialogBody>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                disabled={isSaving}
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? <Spinner className="size-3.5" /> : null}
                {isSaving
                  ? "Guardando…"
                  : mode === "edit"
                    ? "Guardar"
                    : "Crear"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

function CreatedSecretView({
  secret,
  onClose,
}: {
  secret: string
  onClose: () => void
}) {
  const [copied, setCopied] = React.useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(secret)
      setCopied(true)
      toast.success("Secreto copiado")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("No se pudo copiar")
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Guarda este secreto</DialogTitle>
        <DialogDescription>
          Es la única vez que mostraremos el valor completo. Úsalo para
          verificar la cabecera{" "}
          <code className="font-mono">X-Webhook-Signature</code> en el receptor.
        </DialogDescription>
      </DialogHeader>
      <DialogBody>
        <div className="flex items-center gap-2 rounded-none border bg-muted p-3">
          <code className="flex-1 font-mono text-xs break-all">{secret}</code>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => void copy()}
            aria-label="Copiar secreto"
          >
            {copied ? (
              <CheckIcon className="size-4" />
            ) : (
              <CopyIcon className="size-4" />
            )}
          </Button>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button type="button" onClick={onClose}>
          Listo
        </Button>
      </DialogFooter>
    </>
  )
}
