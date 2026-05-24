import * as React from "react"

import {
  applyPanelLayout,
  DEFAULT_PANEL_PREFS,
  PANEL_PREFS_KEY,
  type PanelPreferences,
} from "@/features/settings/types"
import { readStoredJson, writeStoredJson } from "@/features/settings/utils/use-persisted-state"

export function usePanelPreferences() {
  const [prefs, setPrefsState] = React.useState<PanelPreferences>(() =>
    readStoredJson(PANEL_PREFS_KEY, DEFAULT_PANEL_PREFS)
  )

  const setPrefs = React.useCallback(
    (next: PanelPreferences | ((prev: PanelPreferences) => PanelPreferences)) => {
      setPrefsState((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next
        writeStoredJson(PANEL_PREFS_KEY, resolved)
        applyPanelLayout(resolved.layout)
        return resolved
      })
    },
    []
  )

  React.useEffect(() => {
    applyPanelLayout(prefs.layout)
  }, [prefs.layout])

  return [prefs, setPrefs] as const
}
