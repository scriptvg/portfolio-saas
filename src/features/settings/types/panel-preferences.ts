export type PanelTheme = "system" | "light" | "dark"
export type PanelLayout = "fixed" | "full"

export type PanelPreferences = {
  theme: PanelTheme
  layout: PanelLayout
  confirmBeforeDelete: boolean
  language: "es" | "en"
}

export const PANEL_PREFS_KEY = "portfolio-saas:panel-preferences"

export const DEFAULT_PANEL_PREFS: PanelPreferences = {
  theme: "system",
  layout: "fixed",
  confirmBeforeDelete: true,
  language: "es",
}

export function applyPanelLayout(layout: PanelLayout) {
  document.documentElement.dataset.panelLayout = layout
}
