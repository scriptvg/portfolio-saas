import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type IntegrationCardProps = {
  name: string
  description: string
  icon: ReactNode
  connected?: boolean
  comingSoon?: boolean
  onConnect?: () => void
}

export function IntegrationCard({
  name,
  description,
  icon,
  connected = false,
  comingSoon = false,
  onConnect,
}: IntegrationCardProps) {
  const disabled = comingSoon

  return (
    <article
      data-state={
        connected ? "connected" : comingSoon ? "coming-soon" : "available"
      }
      className="group flex flex-col gap-4 rounded-none border bg-card p-4 transition-colors hover:border-foreground/20 data-[state=coming-soon]:opacity-90"
    >
      <header className="flex items-start justify-between gap-3">
        <div
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-none bg-muted text-foreground"
        >
          {icon}
        </div>
        {connected ? (
          <Badge variant="default" className="text-[10px]">
            Conectado
          </Badge>
        ) : comingSoon ? (
          <Badge variant="secondary" className="text-[10px]">
            Próximamente
          </Badge>
        ) : null}
      </header>

      <div className="flex-1 space-y-1">
        <h4 className="text-sm font-medium tracking-tight">{name}</h4>
        <p className="text-xs/relaxed text-muted-foreground">{description}</p>
      </div>

      <footer>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={disabled}
          onClick={onConnect}
          className="w-full"
        >
          {connected ? "Gestionar" : comingSoon ? "Avísame" : "Conectar"}
        </Button>
      </footer>
    </article>
  )
}
