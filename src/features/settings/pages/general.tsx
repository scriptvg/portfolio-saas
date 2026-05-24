import * as React from "react"

import { AlignCenterIcon, StretchHorizontalIcon } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import {
  SettingsFormField,
  SettingsItemSection,
  SettingsLoading,
  SettingsToggleRow,
  ThemeSelector,
} from "@/features/settings/components"
import { ModuleError } from "@/components/shared/module-error"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { applyPanelLayout } from "@/features/settings/types"
import type { PanelLayout } from "@/features/settings/types"
import {
  usePatchPanelMutation,
  useSettingsQuery,
} from "@/features/settings/hooks/use-settings-queries"

export function GeneralSettings() {
  const { theme, setTheme } = useTheme()
  const { data, isPending, isError, error, refetch } = useSettingsQuery()
  const patchPanel = usePatchPanelMutation()
  const hydrated = React.useRef(false)

  React.useEffect(() => {
    if (!data || hydrated.current) return
    hydrated.current = true
    if (data.panel.theme !== theme) {
      setTheme(data.panel.theme)
    }
    applyPanelLayout(data.panel.layout)
  }, [data, setTheme, theme])

  function updatePanel(patch: Parameters<typeof patchPanel.mutate>[0]) {
    if (patch.layout) {
      applyPanelLayout(patch.layout)
    }
    patchPanel.mutate(patch)
  }

  if (isPending) {
    return <SettingsLoading />
  }

  if (isError || !data) {
    return (
      <ModuleError
        title="No se pudieron cargar los ajustes"
        error={error}
        onRetry={() => void refetch()}
      />
    )
  }

  const panel = data.panel
  return (
    <div className="space-y-8">
      <SettingsItemSection
        title="Apariencia"
        description="Cómo se ve el panel en tu dispositivo."
      >
        <SettingsFormField label="Tema">
          <ThemeSelector
            onThemeChange={(value) => updatePanel({ theme: value })}
          />
        </SettingsFormField>

        <SettingsFormField label="Ancho del contenido">
          <ToggleGroup
            type="single"
            variant="outline"
            value={panel.layout}
            onValueChange={(value) => {
              if (value === "fixed" || value === "full") {
                updatePanel({ layout: value as PanelLayout })
              }
            }}
            className="w-full justify-start"
          >
            <ToggleGroupItem value="fixed" className="flex-1 gap-2">
              <AlignCenterIcon className="size-4" />
              Centrado
            </ToggleGroupItem>
            <ToggleGroupItem value="full" className="flex-1 gap-2">
              <StretchHorizontalIcon className="size-4" />
              Ancho completo
            </ToggleGroupItem>
          </ToggleGroup>
        </SettingsFormField>
      </SettingsItemSection>

      <SettingsItemSection
        title="Idioma y formato"
        description="Preferencias de visualización del panel."
      >
        <SettingsFormField
          label="Idioma del panel"
          description="La traducción completa llegará más adelante."
          htmlFor="panel-language"
        >
          <Select
            value={panel.language}
            onValueChange={(value) => {
              if (value === "es" || value === "en") {
                updatePanel({ language: value })
              }
            }}
          >
            <SelectTrigger id="panel-language" className="w-full sm:w-60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </SettingsFormField>
      </SettingsItemSection>

      <SettingsItemSection
        title="Comportamiento"
        description="Opciones al trabajar con el contenido del portfolio."
      >
        <SettingsToggleRow
          title="Confirmar antes de eliminar"
          description="Pide confirmación al borrar tecnologías o experiencias."
          checked={panel.confirmBeforeDelete}
          onCheckedChange={(checked) =>
            updatePanel({ confirmBeforeDelete: checked })
          }
        />
      </SettingsItemSection>
    </div>
  )
}
