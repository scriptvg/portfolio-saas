import type { ColumnDef } from "@tanstack/react-table"
import {
  EllipsisIcon,
  ExternalLinkIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react"

import type { ProjectRow } from "@/lib/api/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TechnologyIcon } from "@/components/modules/technologies/technology-icon"
import { formatDate } from "@/lib/utils"

export interface ProjectColumnHandlers {
  onEdit: (project: ProjectRow) => void
  onDelete: (project: ProjectRow) => void
}

function ProjectRowActions({
  project,
  onEdit,
  onDelete,
}: {
  project: ProjectRow
} & ProjectColumnHandlers) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Acciones de ${project.title}`}
        >
          <EllipsisIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => onEdit(project)}>
          <PencilIcon className="size-4" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onSelect={() => onDelete(project)}
        >
          <TrashIcon className="size-4" />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ExternalHref({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
    >
      {label}
      <ExternalLinkIcon className="size-3.5" aria-hidden />
    </a>
  )
}

export function getProjectColumns({
  onEdit,
  onDelete,
}: ProjectColumnHandlers): ColumnDef<ProjectRow>[] {
  return [
    {
      id: "image",
      header: "Imagen",
      cell: ({ row }) =>
        row.original.imageUrl ? (
          <img
            src={row.original.imageUrl}
            alt=""
            className="size-12 rounded-none border bg-muted object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="size-12 rounded-none border border-dashed bg-muted"
            aria-label="Sin imagen"
          />
        ),
    },
    {
      id: "title",
      header: "Título",
      cell: ({ row }) => (
        <div className="space-y-0.5">
          <div className="font-medium">{row.original.title}</div>
          <div className="font-mono text-xs text-muted-foreground">
            {row.original.slug}
          </div>
        </div>
      ),
    },
    {
      id: "description",
      header: "Descripción",
      cell: ({ row }) => (
        <div className="line-clamp-2 max-w-xs text-sm leading-relaxed">
          {row.original.description}
        </div>
      ),
    },
    {
      id: "links",
      header: "Enlaces",
      cell: ({ row }) => (
        <div className="flex flex-col gap-1 text-sm">
          {row.original.liveUrl ? (
            <ExternalHref href={row.original.liveUrl} label="Live" />
          ) : (
            <span className="text-muted-foreground">—</span>
          )}
          {row.original.githubUrl ? (
            <ExternalHref href={row.original.githubUrl} label="GitHub" />
          ) : null}
        </div>
      ),
    },
    {
      id: "technologies",
      header: "Tecnologías",
      cell: ({ row }) => {
        const technologies = row.original.technologies
        const visibleTechnologies = technologies.slice(0, 3)
        const hiddenTechnologies = technologies.slice(3)

        return (
          <div className="flex items-center gap-1">
            {visibleTechnologies.map((technology) => (
              <Tooltip key={technology.id}>
                <TooltipTrigger asChild>
                  <Badge
                    variant="outline"
                    className="size-7 items-center justify-center p-0"
                  >
                    <TechnologyIcon
                      icon={technology.icon}
                      color={technology.color}
                      className="size-3.5 shrink-0"
                    />
                    <span className="sr-only">{technology.name}</span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>{technology.name}</TooltipContent>
              </Tooltip>
            ))}

            {hiddenTechnologies.length > 0 ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant="outline"
                    className="size-7 shrink-0 cursor-pointer items-center justify-center rounded-full p-0 text-[10px] leading-none font-medium"
                  >
                    +{hiddenTechnologies.length}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <ScrollArea className="flex max-h-20 flex-col gap-2">
                    {hiddenTechnologies.map((technology) => (
                      <div
                        key={technology.id}
                        className="flex items-center gap-2"
                      >
                        <TechnologyIcon
                          icon={technology.icon}
                          color={technology.color}
                          className="size-3.5"
                        />
                        <span>{technology.name}</span>
                      </div>
                    ))}
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                </TooltipContent>
              </Tooltip>
            ) : null}
          </div>
        )
      },
    },
    {
      id: "sortOrder",
      header: "Orden",
      cell: ({ row }) => (
        <div className="font-mono text-xs text-muted-foreground tabular-nums">
          {row.original.sortOrder}
        </div>
      ),
    },
    {
      id: "createdAt",
      header: "Creado",
      cell: ({ row }) => (
        <div className="font-mono text-xs whitespace-nowrap text-muted-foreground tabular-nums">
          {formatDate(row.original.createdAt)}
        </div>
      ),
    },
    {
      id: "actions",
      header: () => <span className="sr-only">Acciones</span>,
      enablePinning: true,
      meta: { pin: "right" },
      cell: ({ row }) => (
        <div className="flex justify-end">
          <ProjectRowActions
            project={row.original}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ),
    },
  ]
}
