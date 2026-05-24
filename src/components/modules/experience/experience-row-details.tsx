import type { ExperienceRow } from "@/lib/api/experiences"
import { EMPLOYMENT_TYPE_LABELS } from "@/lib/api/experiences"
import { Badge } from "@/components/ui/badge"
import {
  DataTableDetailField,
  DataTableDetailList,
} from "@/components/ui/data-table-detail-field"
import { TechnologyIcon } from "@/components/modules/technologies/technology-icon"
import { formatDateTime } from "@/lib/utils"

export function ExperienceRowDetailsContent({
  experience,
}: {
  experience: ExperienceRow
}) {
  return (
    <DataTableDetailList>
      <DataTableDetailField label="Título">{experience.title}</DataTableDetailField>
      <DataTableDetailField label="Puesto">
        {experience.position || "—"}
      </DataTableDetailField>
      <DataTableDetailField label="Tipo de empleo">
        <Badge variant="outline" className="font-normal">
          {EMPLOYMENT_TYPE_LABELS[experience.employmentType]}
        </Badge>
      </DataTableDetailField>
      <DataTableDetailField label="Empresa">{experience.company}</DataTableDetailField>
      <DataTableDetailField label="Periodo">
        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {experience.period}
        </span>
      </DataTableDetailField>
      <DataTableDetailField label="Orden">
        <span className="font-mono text-xs tabular-nums">{experience.sortOrder}</span>
      </DataTableDetailField>
      <DataTableDetailField label="Descripción" className="sm:col-span-2">
        <p className="leading-relaxed whitespace-pre-wrap">
          {experience.description}
        </p>
      </DataTableDetailField>
      <DataTableDetailField label="Tecnologías" className="sm:col-span-2">
        {experience.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
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
        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {formatDateTime(experience.createdAt)}
        </span>
      </DataTableDetailField>
      <DataTableDetailField label="Actualizado">
        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {formatDateTime(experience.updatedAt)}
        </span>
      </DataTableDetailField>
    </DataTableDetailList>
  )
}

export const experienceRowDetails = {
  title: (experience: ExperienceRow) => experience.title,
  description: (experience: ExperienceRow) =>
    `${experience.company} · ${experience.period}`,
  render: (experience: ExperienceRow) => (
    <ExperienceRowDetailsContent experience={experience} />
  ),
}
