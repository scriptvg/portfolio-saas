import { Lock, LockOpen, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page"
import { EndpointBadge } from "@/components/shared/endpoint-badge"
import { Badge } from "@/components/ui/badge"
import { hasWriteAuthorization } from "@/lib/api/client"

interface TechnologiesHeaderProps {
  onCreate: () => void
}

export function TechnologiesHeader({ onCreate }: TechnologiesHeaderProps) {
  const isAuthenticated = hasWriteAuthorization()

  const isAuthenticatedIcon = 
  isAuthenticated 
  ? <LockOpen className="size-4 text-yellow-500" /> 
  : <Lock className="size-4" />

  return (
    <PageHeader>
      <div className="flex gap-4 justify-between items-start md:items-center flex-col md:flex-row">
        <div className="space-y-1">
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl font-semibold tracking-tight">Tecnologías</h1>
            <Badge variant="secondary" className="font-mono text-xs py-1 px-1 rounded-none">
              {isAuthenticatedIcon}
            </Badge>
          </div>
          <div className="flex gap-2 flex-wrap">
            <EndpointBadge endpoint="/technologies" method="GET" />
            <EndpointBadge endpoint="/technologies" method="POST" />
            <EndpointBadge endpoint="/technologies/{id}" method="PUT" />
            <EndpointBadge endpoint="/technologies/{id}" method="DELETE" />
          </div>
        </div>

        <div className="flex gap-2 md:items-end md:flex-col md:justify-end">
          <Button type="button" onClick={onCreate}>
            <PlusIcon className="size-4" />
            Añadir tecnología
          </Button>
        </div>
      </div>
    </PageHeader>
  )
}
