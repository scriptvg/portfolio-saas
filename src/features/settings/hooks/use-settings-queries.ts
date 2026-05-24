import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  deleteWorkspaceAvatar,
  fetchSettings,
  patchNotificationPreferences,
  patchPanelPreferences,
  patchWorkspaceSettings,
  uploadWorkspaceAvatar,
  type SettingsResponse,
} from "@/features/settings/api"

export const settingsQueryKey = ["settings"] as const

export function useSettingsQuery(enabled = true) {
  return useQuery({
    queryKey: settingsQueryKey,
    queryFn: fetchSettings,
    enabled,
  })
}

function mergeSettings(
  current: SettingsResponse | undefined,
  patch: Partial<SettingsResponse>
): SettingsResponse | undefined {
  if (!current) return current
  return {
    panel: { ...current.panel, ...patch.panel },
    notifications: { ...current.notifications, ...patch.notifications },
    workspace: { ...current.workspace, ...patch.workspace },
  }
}

export function usePatchPanelMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchPanelPreferences,
    onSuccess: (panel) => {
      queryClient.setQueryData<SettingsResponse>(settingsQueryKey, (current) =>
        mergeSettings(current, { panel })
      )
    },
  })
}

export function usePatchNotificationsMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchNotificationPreferences,
    onSuccess: (notifications) => {
      queryClient.setQueryData<SettingsResponse>(settingsQueryKey, (current) =>
        mergeSettings(current, { notifications })
      )
    },
  })
}

export function usePatchWorkspaceMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchWorkspaceSettings,
    onSuccess: (workspace) => {
      queryClient.setQueryData<SettingsResponse>(settingsQueryKey, (current) =>
        mergeSettings(current, { workspace })
      )
    },
  })
}

export function useUploadWorkspaceAvatarMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (file: File) => uploadWorkspaceAvatar(file),
    onSuccess: (workspace) => {
      queryClient.setQueryData<SettingsResponse>(settingsQueryKey, (current) =>
        mergeSettings(current, { workspace })
      )
    },
  })
}

export function useDeleteWorkspaceAvatarMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteWorkspaceAvatar,
    onSuccess: (workspace) => {
      queryClient.setQueryData<SettingsResponse>(settingsQueryKey, (current) =>
        mergeSettings(current, { workspace })
      )
    },
  })
}
