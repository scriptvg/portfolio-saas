import type React from "react"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page"
import { EndpointBadge } from "@/components/shared/endpoint-badge"
import { RequiredJwtBadge } from "./required-jwt-badge"

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

const DEFAULT_METHODS: readonly HttpMethod[] = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
]

/**
 * Por método: si la ruta lleva sufijo `/{id}` y si el acceso es público.
 * GET del portfolio es público; las mutaciones requieren JWT.
 */
const METHOD_META: Record<HttpMethod, { needsId: boolean; isPublic: boolean }> =
  {
    GET: { needsId: false, isPublic: true },
    POST: { needsId: false, isPublic: false },
    PUT: { needsId: true, isPublic: false },
    PATCH: { needsId: true, isPublic: false },
    DELETE: { needsId: true, isPublic: false },
  }

interface ModuleHeaderProps {
  title: string
  description: string
  /**
   * Ruta de la API del modulo (p. ej. "/technologies").
   * Si se omite, los endpoint badges no se renderizan.
   * Util para modulos API sin CRUD completo (p. ej. GitHub).
   */
  endpoint?: string
  /**
   * Callback para el boton CTA principal ("Añadir …").
   * Si se omite, el boton no se renderiza.
   */
  onCreate?: () => void
  /** Texto del boton CTA. Default: "Añadir {title}". */
  createLabel?: string
  /**
   * Slot de media o accion secundaria opcional (p. ej. avatar de GitHub).
   * Se renderiza a la derecha del area de titulo, antes del CTA si ambos estan presentes.
   */
  mediaSlot?: React.ReactNode
  /**
   * Métodos HTTP a mostrar como badges, en orden. Default: los 5 (CRUD completo).
   * Módulos de solo lectura pueden pasar un subconjunto, p. ej. `["GET"]`.
   */
  methods?: readonly HttpMethod[]
}

export function ModuleHeader({
  title,
  endpoint,
  description,
  onCreate,
  createLabel,
  mediaSlot,
  methods = DEFAULT_METHODS,
}: ModuleHeaderProps) {
  return (
    <PageHeader>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            </div>

            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {endpoint ? (
            <div className="flex max-w-xl flex-wrap gap-2">
              {methods.map((method) => {
                const meta = METHOD_META[method]
                return (
                  <div key={method} className="flex items-center gap-1">
                    <EndpointBadge
                      endpoint={meta.needsId ? `${endpoint}/{id}` : endpoint}
                      method={method}
                    />
                    <RequiredJwtBadge isRequired={meta.isPublic} />
                  </div>
                )
              })}
            </div>
          ) : null}
        </div>

        <div className="flex shrink-0 items-start gap-3">
          {mediaSlot}
          {onCreate ? (
            <Button type="button" onClick={onCreate} className="w-fit">
              <PlusIcon className="size-4" />
              {createLabel ?? `Añadir ${title}`}
            </Button>
          ) : null}
        </div>
      </div>
    </PageHeader>
  )
}
