import { BarChart3Icon } from "lucide-react"
import { toast } from "sonner"

import {
  GithubIntegrationSection,
  IntegrationCard,
  SettingsItemSection,
  WebhooksSection,
} from "@/features/settings/components"

const COMING_SOON_INTEGRATIONS = [
  {
    id: "analytics",
    name: "Analytics",
    description: "Métricas de visitas en tu portfolio público.",
    icon: <BarChart3Icon className="size-5" />,
  },
] as const

export function IntegrationsSettings() {
  function handleNotify(name: string) {
    toast.success(`Te avisaremos cuando ${name} esté disponible.`)
  }

  return (
    <div className="space-y-8">
      <GithubIntegrationSection />

      <WebhooksSection />

      <SettingsItemSection
        title="Otras integraciones"
        description="Servicios externos en preparación."
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {COMING_SOON_INTEGRATIONS.map((item) => (
            <IntegrationCard
              key={item.id}
              name={item.name}
              description={item.description}
              icon={item.icon}
              comingSoon
              onConnect={() => handleNotify(item.name)}
            />
          ))}
        </div>
      </SettingsItemSection>
    </div>
  )
}
