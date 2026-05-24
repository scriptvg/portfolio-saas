import type { LucideIcon } from "lucide-react"
import {
  BellIcon,
  BlocksIcon,
  LayoutTemplateIcon,
  ShieldIcon,
  SlidersHorizontalIcon,
  UsersIcon,
} from "lucide-react"

export const SETTINGS_TABS = [
  {
    value: "general",
    segment: "general",
    label: "Ajustes generales",
    description: "Tema, idioma y comportamiento del panel.",
    icon: SlidersHorizontalIcon,
  },
  {
    value: "workspace",
    segment: "workspace",
    label: "Espacio de trabajo",
    description: "Perfil público, enlaces y avatar del portfolio.",
    icon: LayoutTemplateIcon,
  },
  {
    value: "privacy",
    segment: "privacy",
    label: "Cuenta",
    description: "Perfil, acceso, contraseña y proveedores vinculados.",
    icon: ShieldIcon,
  },
  {
    value: "notifications",
    segment: "notifications",
    label: "Notificaciones",
    description: "Alertas y avisos del panel.",
    icon: BellIcon,
  },
  {
    value: "integrations",
    segment: "integrations",
    label: "Integraciones",
    description: "Servicios externos conectados a tu cuenta.",
    icon: BlocksIcon,
  },
  {
    value: "team",
    segment: "team",
    label: "Equipo",
    description: "Miembros del workspace, roles e invitaciones.",
    icon: UsersIcon,
  },
] as const satisfies ReadonlyArray<{
  value: string
  segment: string
  label: string
  description: string
  icon: LucideIcon
}>

export type SettingsTabValue = (typeof SETTINGS_TABS)[number]["value"]

export function getActiveSettingsTab(pathname: string): SettingsTabValue {
  const match = SETTINGS_TABS.find((tab) =>
    pathname.includes(`/settings/${tab.segment}`)
  )
  return match?.value ?? "general"
}

export function getSettingsTab(value: SettingsTabValue) {
  return SETTINGS_TABS.find((tab) => tab.value === value) ?? SETTINGS_TABS[0]
}
