export const NOTIFICATION_PREFS_KEY = "portfolio-saas:notification-prefs"

export type NotificationPrefs = {
  loginNewDevice: boolean
  providerLinked: boolean
  passwordChanged: boolean
  weeklyDigest: boolean
  publishErrors: boolean
  contentEdits: boolean
}

export const DEFAULT_NOTIFICATION_PREFS: NotificationPrefs = {
  loginNewDevice: true,
  providerLinked: true,
  passwordChanged: true,
  weeklyDigest: false,
  publishErrors: true,
  contentEdits: false,
}
