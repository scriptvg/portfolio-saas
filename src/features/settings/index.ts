export { SettingsLayout } from "./layout"
export {
  SETTINGS_TABS,
  getActiveSettingsTab,
  getSettingsTab,
} from "./utils/settings-tabs"
export type { SettingsTabValue } from "./utils/settings-tabs"

export {
  SettingsItemSection,
  SettingsLoading,
  SettingsRowItem,
  SettingsToggleRow,
  SettingsFormField,
  SettingsSaveBar,
  SettingsDangerZone,
  ThemeSelector,
  IntegrationCard,
  EditProfileDialog,
  ChangePasswordDialog,
  DeleteAccountDialog,
  PersonalDataItem,
  OAuthItem,
  OAuthProviderRow,
  LinkPasswordSection,
  useOAuthProviders,
  usePanelPreferences,
  WebhooksSection,
  GithubIntegrationSection,
  WebhookFormDialog,
  WebhookDeliveriesDialog,
} from "./components"

export type {
  SettingsItemSectionProps,
  SettingsRowItemProps,
  SettingsToggleRowProps,
  SettingsFormFieldProps,
  SettingsSaveBarProps,
  SettingsDangerZoneProps,
  IntegrationCardProps,
  EditProfileDialogProps,
  ChangePasswordDialogProps,
  DeleteAccountDialogProps,
  PersonalDataItemProps,
  OAuthItemProps,
  OAuthProvider,
  OAuthProviderRowProps,
  LinkPasswordSectionProps,
  WebhookFormDialogProps,
  WebhookDeliveriesDialogProps,
} from "./components"

export {
  useSettingsQuery,
  usePatchPanelMutation,
  usePatchNotificationsMutation,
  usePatchWorkspaceMutation,
  useUploadWorkspaceAvatarMutation,
  useDeleteWorkspaceAvatarMutation,
  settingsQueryKey,
} from "./hooks/use-settings-queries"

export {
  fetchSettings,
  patchPanelPreferences,
  patchNotificationPreferences,
  patchWorkspaceSettings,
  uploadWorkspaceAvatar,
  deleteWorkspaceAvatar,
  type SettingsResponse,
  AVATAR_MAX_BYTES,
  AVATAR_ACCEPT_MIMES,
} from "./api"

export { GeneralSettings } from "./pages/general"
export { WorkspaceSettings } from "./pages/workspace"
export { PrivacySettings } from "./pages/privacy"
export { NotificationsSettings } from "./pages/notifications"
export { IntegrationsSettings } from "./pages/integrations"
export { TeamSettings } from "./pages/team"

export {
  applyPanelLayout,
  PANEL_PREFS_KEY,
  DEFAULT_PANEL_PREFS,
  WORKSPACE_DRAFT_KEY,
  DEFAULT_WORKSPACE_DRAFT,
  PUBLIC_SITE_URL,
  NOTIFICATION_PREFS_KEY,
  DEFAULT_NOTIFICATION_PREFS,
} from "./types"

export type {
  PanelTheme,
  PanelLayout,
  PanelPreferences,
  WorkspaceLink,
  WorkspaceDraft,
  NotificationPrefs,
} from "./types"
