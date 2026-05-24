import { z } from "zod"

import { WEBHOOK_EVENTS, type WebhookEvent } from "@/lib/api/webhooks"

export const webhookFormSchema = z.object({
  label: z.string().trim().min(1, "Etiqueta obligatoria").max(120),
  url: z
    .url("URL inválida (debe incluir https:// o http://)")
    .max(1024, "Máximo 1024 caracteres"),
  events: z
    .array(z.enum(WEBHOOK_EVENTS))
    .min(1, "Selecciona al menos un evento"),
  active: z.boolean(),
})

export type WebhookFormValues = z.infer<typeof webhookFormSchema>

export const webhookFormDefaults: WebhookFormValues = {
  label: "",
  url: "",
  events: [] as WebhookEvent[],
  active: true,
}
