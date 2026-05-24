import type { TechnologyRow } from "@/lib/api/technologies"
import type { DataTableRowDetails } from "@/components/ui/data-table"
import { BadgeColor } from "@/components/shared/badge-color"
import { BadgeIcon } from "@/components/shared/badge-icon"
import {
  DataTableDetailField,
  DataTableDetailList,
} from "@/components/ui/data-table-detail-field"

function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return date.toLocaleString("es-CR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function TechnologyRowDetailsContent({
  technology,
}: {
  technology: TechnologyRow
}) {
  return (
    <DataTableDetailList>
      <DataTableDetailField label="ID">
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
          {technology.id}
        </code>
      </DataTableDetailField>
      <DataTableDetailField label="Nombre">{technology.name}</DataTableDetailField>
      <DataTableDetailField label="Icono">
        <BadgeIcon icon={technology.icon} color={technology.color} />
      </DataTableDetailField>
      <DataTableDetailField label="Color">
        <BadgeColor color={technology.color} />
      </DataTableDetailField>
      <DataTableDetailField label="Creado">
        {formatDate(technology.createdAt)}
      </DataTableDetailField>
      <DataTableDetailField label="Actualizado">
        {formatDate(technology.updatedAt)}
      </DataTableDetailField>
    </DataTableDetailList>
  )
}

export const technologyRowDetails: DataTableRowDetails<TechnologyRow> = {
  title: (technology: TechnologyRow) => technology.name,
  description: (_technology: TechnologyRow) => "Detalle de la tecnología",
  render: (technology: TechnologyRow) => (
    <TechnologyRowDetailsContent technology={technology} />
  ),
}
