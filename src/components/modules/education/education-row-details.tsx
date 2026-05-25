import type { EducationRow } from "@/lib/api/education"
import { Badge } from "@/components/ui/badge"
import {
  DataTableDetailField,
  DataTableDetailList,
} from "@/components/ui/data-table-detail-field"
import { TechnologyIcon } from "@/components/modules/technologies/technology-icon"
import { formatDateTime } from "@/lib/utils"

export function EducationRowDetailsContent({
  education,
}: {
  education: EducationRow
}) {
  return (
    <DataTableDetailList>
      <DataTableDetailField label="Título / Grado">
        {education.degree}
      </DataTableDetailField>
      <DataTableDetailField label="Institución">
        {education.institution}
      </DataTableDetailField>
      <DataTableDetailField label="Campo de estudio">
        {education.fieldOfStudy ?? "—"}
      </DataTableDetailField>
      <DataTableDetailField label="Periodo">
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {education.period}
        </span>
      </DataTableDetailField>
      <DataTableDetailField label="Orden">
        <span className="font-mono text-xs tabular-nums">
          {education.sortOrder}
        </span>
      </DataTableDetailField>
      <DataTableDetailField label="Descripción" className="sm:col-span-2">
        <p className="leading-relaxed whitespace-pre-wrap">
          {education.description ?? "—"}
        </p>
      </DataTableDetailField>
      <DataTableDetailField label="Tecnologías" className="sm:col-span-2">
        {education.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {education.technologies.map((technology) => (
              <Badge
                key={technology.id}
                variant="outline"
                className="gap-1.5 pr-2 font-normal"
              >
                <TechnologyIcon
                  icon={technology.icon}
                  color={technology.color}
                  className="size-3.5 shrink-0"
                />
                {technology.name}
              </Badge>
            ))}
          </div>
        ) : (
          <span className="text-muted-foreground">Sin tecnologías</span>
        )}
      </DataTableDetailField>
      <DataTableDetailField label="Creado">
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {formatDateTime(education.createdAt)}
        </span>
      </DataTableDetailField>
      <DataTableDetailField label="Actualizado">
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {formatDateTime(education.updatedAt)}
        </span>
      </DataTableDetailField>
    </DataTableDetailList>
  )
}

export const educationRowDetails = {
  title: (education: EducationRow) => education.degree,
  description: (education: EducationRow) =>
    `${education.institution} · ${education.period}`,
  render: (education: EducationRow) => (
    <EducationRowDetailsContent education={education} />
  ),
}
