import { apiRequest } from "@/lib/api/client"
import type { NotificationPrefs, PanelPreferences, WorkspaceDraft } from "@/features/settings/types"

export type SettingsResponse = {
  panel: PanelPreferences
  notifications: NotificationPrefs
  workspace: WorkspaceDraft
}

export const AVATAR_MAX_BYTES = 4 * 1024 * 1024
export const AVATAR_ACCEPT_MIMES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const

export async function fetchSettings(): Promise<SettingsResponse> {
  return apiRequest({ method: "GET", url: "/settings" })
}

export async function patchPanelPreferences(
  body: Partial<PanelPreferences>
): Promise<PanelPreferences> {
  return apiRequest({
    method: "PATCH",
    url: "/settings/panel",
    data: body,
  })
}

export async function patchNotificationPreferences(
  body: Partial<NotificationPrefs>
): Promise<NotificationPrefs> {
  return apiRequest({
    method: "PATCH",
    url: "/settings/notifications",
    data: body,
  })
}

export async function patchWorkspaceSettings(
  body: Partial<WorkspaceDraft>
): Promise<WorkspaceDraft> {
  return apiRequest({
    method: "PATCH",
    url: "/settings/workspace",
    data: body,
  })
}

export async function uploadWorkspaceAvatar(
  file: File
): Promise<WorkspaceDraft> {
  if (file.size > AVATAR_MAX_BYTES) {
    throw new Error("La imagen supera el tamaño máximo (4 MB).")
  }
  if (!AVATAR_ACCEPT_MIMES.includes(file.type as (typeof AVATAR_ACCEPT_MIMES)[number])) {
    throw new Error("Formato no permitido. Usa JPG, PNG, WebP o GIF.")
  }

  const formData = new FormData()
  formData.append("avatar", file)

  return apiRequest({
    method: "POST",
    url: "/settings/workspace/avatar",
    data: formData,
  })
}

export async function deleteWorkspaceAvatar(): Promise<WorkspaceDraft> {
  return apiRequest({
    method: "DELETE",
    url: "/settings/workspace/avatar",
  })
}
