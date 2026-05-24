import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  createWebhook,
  deleteWebhook,
  listWebhookDeliveries,
  listWebhooks,
  patchWebhook,
  retryWebhookDelivery,
  rotateWebhookSecret,
  type WebhookBody,
  type WebhookPatchBody,
} from "@/lib/api/webhooks"
import { queryKeys } from "@/lib/query-keys"

export function useWebhooksQuery() {
  return useQuery({
    queryKey: queryKeys.webhooks,
    queryFn: () => listWebhooks(),
  })
}

export function useWebhookDeliveriesQuery(webhookId: string | null) {
  return useQuery({
    queryKey: webhookId
      ? queryKeys.webhookDeliveries(webhookId)
      : ["webhooks", "deliveries", "disabled"],
    queryFn: () => listWebhookDeliveries(webhookId as string),
    enabled: !!webhookId,
    refetchInterval: webhookId ? 5_000 : false,
  })
}

export function useCreateWebhookMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: WebhookBody) => createWebhook(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.webhooks })
    },
  })
}

export function useUpdateWebhookMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (vars: { id: string; body: WebhookPatchBody }) =>
      patchWebhook(vars.id, vars.body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.webhooks })
    },
  })
}

export function useDeleteWebhookMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteWebhook(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.webhooks })
    },
  })
}

export function useRotateWebhookSecretMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => rotateWebhookSecret(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.webhooks })
    },
  })
}

export function useRetryDeliveryMutation(webhookId: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (deliveryId: string) =>
      retryWebhookDelivery(webhookId, deliveryId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.webhookDeliveries(webhookId),
      })
    },
  })
}
