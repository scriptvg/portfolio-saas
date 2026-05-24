import { ExternalLinkIcon } from "lucide-react"

import type { ProjectRow } from "@/lib/api/projects"
import { Badge } from "@/components/ui/badge"
import {
  DataTableDetailField,
  DataTableDetailList,
} from "@/components/ui/data-table-detail-field"
import { TechnologyIcon } from "@/components/modules/technologies/technology-icon"
import { formatDateTime } from "@/lib/utils"

function formatUrlLabel(href: string) {
  try {
    const url = new URL(href)
    const path =
      url.pathname === "/" && !url.search && !url.hash
        ? ""
        : `${url.pathname}${url.search}${url.hash}`
    return `${url.hostname}${path}`
  } catch {
    return href
  }
}

function ExternalHref({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={href}
      className="inline-flex max-w-full min-w-0 items-center gap-1 text-primary underline-offset-4 hover:underline"
    >
      <span className="truncate">{label}</span>
      <ExternalLinkIcon className="size-3.5 shrink-0" aria-hidden />
    </a>
  )
}

export function ProjectRowDetailsContent({ project }: { project: ProjectRow }) {
  return (
    <div className="space-y-4">
      <figure className="flex aspect-[16/11] w-full items-center justify-center overflow-hidden rounded-none border bg-muted p-2">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="text-xs text-muted-foreground">Sin imagen</span>
        )}
      </figure>

      <DataTableDetailList>
        <DataTableDetailField label="Título">
          {project.title}
        </DataTableDetailField>
        <DataTableDetailField label="Slug">
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            {project.slug}
          </code>
        </DataTableDetailField>
        <DataTableDetailField label="Descripción" className="sm:col-span-2">
          <p className="leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>
        </DataTableDetailField>
        <DataTableDetailField label="Enlaces" className="sm:col-span-2">
          {project.liveUrl || project.githubUrl ? (
            <div className="flex flex-col gap-2">
              {project.liveUrl ? (
                <ExternalHref
                  href={project.liveUrl}
                  label={formatUrlLabel(project.liveUrl)}
                />
              ) : null}
              {project.githubUrl ? (
                <ExternalHref
                  href={project.githubUrl}
                  label={formatUrlLabel(project.githubUrl)}
                />
              ) : null}
            </div>
          ) : (
            <span className="text-muted-foreground">Sin enlaces</span>
          )}
        </DataTableDetailField>
        <DataTableDetailField label="Orden">
          <span className="font-mono text-xs tabular-nums">
            {project.sortOrder}
          </span>
        </DataTableDetailField>
        <DataTableDetailField label="Tecnologías" className="sm:col-span-2">
          {project.technologies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
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
            {formatDateTime(project.createdAt)}
          </span>
        </DataTableDetailField>
        <DataTableDetailField label="Actualizado">
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {formatDateTime(project.updatedAt)}
          </span>
        </DataTableDetailField>
      </DataTableDetailList>
    </div>
  )
}

export const projectRowDetails = {
  title: (project: ProjectRow) => project.title,
  description: (project: ProjectRow) => project.slug,
  render: (project: ProjectRow) => (
    <ProjectRowDetailsContent project={project} />
  ),
}
