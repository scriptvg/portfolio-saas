import { apiRequest } from "@/lib/api/client"

export const WEBHOOK_EVENTS = [
  "project.created",
  "project.updated",
  "project.deleted",
  "experience.created",
  "experience.updated",
  "experience.deleted",
  "technology.created",
  "technology.updated",
  "technology.deleted",
  "workspace.published",
] as const

export type WebhookEvent = (typeof WEBHOOK_EVENTS)[number]

export type WebhookDeliveryStatus =
  | "pending"
  | "delivering"
  | "success"
  | "failed"
  | "dead"

export type WebhookRow = {
  id: string
  userId: string
  label: string
  url: string
  events: WebhookEvent[]
  active: boolean
  secretPreview: string
  createdAt: string
  updatedAt: string
}

/** Returned only on POST /webhooks and POST /webhooks/:id/rotate-secret. */
export type WebhookCreatedRow = WebhookRow & { secret: string }

export type WebhookDeliveryRow = {
  id: string
  webhookId: string
  event: WebhookEvent
  payload: Record<string, unknown>
  status: WebhookDeliveryStatus
  attemptCount: number
  nextAttemptAt: string
  lastAttemptAt: string | null
  responseStatus: number | null
  responseBody: string | null
  errorMessage: string | null
  createdAt: string
  updatedAt: string
}

export type WebhookBody = {
  label: string
  url: string
  events: WebhookEvent[]
  active?: boolean
}

export type WebhookPatchBody = Partial<WebhookBody>

export function listWebhooks(): Promise<WebhookRow[]> {
  return apiRequest({ url: "/webhooks", method: "GET" })
}

export function createWebhook(body: WebhookBody): Promise<WebhookCreatedRow> {
  return apiRequest({ url: "/webhooks", method: "POST", data: body })
}

export function patchWebhook(
  id: string,
  body: WebhookPatchBody
): Promise<WebhookRow> {
  return apiRequest({ url: `/webhooks/${id}`, method: "PATCH", data: body })
}

export function deleteWebhook(id: string): Promise<{ id: string }> {
  return apiRequest({ url: `/webhooks/${id}`, method: "DELETE" })
}

export function rotateWebhookSecret(id: string): Promise<{ secret: string }> {
  return apiRequest({
    url: `/webhooks/${id}/rotate-secret`,
    method: "POST",
  })
}

export function listWebhookDeliveries(
  id: string
): Promise<WebhookDeliveryRow[]> {
  return apiRequest({ url: `/webhooks/${id}/deliveries`, method: "GET" })
}

export function retryWebhookDelivery(
  webhookId: string,
  deliveryId: string
): Promise<{ id: string }> {
  return apiRequest({
    url: `/webhooks/${webhookId}/deliveries/${deliveryId}/retry`,
    method: "POST",
  })
}
