import type { TechnologyRow } from "@/lib/api/technologies"

import { TechnologyCard } from "@/components/modules/technologies/technology-card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

interface TechnologiesListProps {
  technologies: TechnologyRow[]
  loading?: boolean
  onCreate: () => void
  onEdit: (technology: TechnologyRow) => void
  onDelete: (technology: TechnologyRow) => void
}

export function TechnologiesList({
  technologies,
  loading,
  onCreate,
  onEdit,
  onDelete,
}: TechnologiesListProps) {
  if (loading) {
    return (
      <Empty>
        <EmptyMedia>
          <Spinner className="size-5" />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>Cargando tecnologías</EmptyTitle>
          <EmptyDescription>
            Espera un momento mientras cargamos los datos.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  if (technologies.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyTitle>No hay tecnologías</EmptyTitle>
          <EmptyDescription>
            Añade una tecnología para verla en la lista.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button type="button" variant="secondary" onClick={onCreate}>
            Añadir tecnología
          </Button>
        </EmptyContent>
      </Empty>
    )
  }

  return (
    <div className="space-y-2">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
