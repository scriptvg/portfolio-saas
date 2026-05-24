import type { ColumnDef } from "@tanstack/react-table"
import { EllipsisIcon, PencilIcon, TrashIcon } from "lucide-react"

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
import type { ExperienceRow } from "@/lib/api/experiences"
import { EMPLOYMENT_TYPE_LABELS } from "@/lib/api/experiences"
import { formatDate } from "@/lib/utils"

import { TechnologyIcon } from "../technologies/technology-icon"

export interface ExperienceColumnHandlers {
  onEdit: (experience: ExperienceRow) => void
  onDelete: (experience: ExperienceRow) => void
}

function ExperienceRowActions({
  experience,
  onEdit,
  onDelete,
}: {
  experience: ExperienceRow
} & ExperienceColumnHandlers) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Acciones de ${experience.title}`}
        >
          <EllipsisIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => onEdit(experience)}>
          <PencilIcon className="size-4" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onSelect={() => onDelete(experience)}
        >
          <TrashIcon className="size-4" />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function getExperienceColumns({
  onEdit,
  onDelete,
}: ExperienceColumnHandlers): ColumnDef<ExperienceRow>[] {
  return [
    {
      id: "position",
      header: "Puesto",
      cell: ({ row }) => (
        <div className="font-medium">
          {row.original.position || row.original.title}
        </div>
      ),
    },
    {
      id: "employmentType",
      header: "Tipo",
      cell: ({ row }) => (
        <Badge variant="outline" className="font-normal">
          {EMPLOYMENT_TYPE_LABELS[row.original.employmentType]}
        </Badge>
      ),
    },
    {
      id: "company",
      header: "Empresa",
      cell: ({ row }) => <div>{row.original.company}</div>,
    },
    {
      id: "period",
      header: "Periodo",
      cell: ({ row }) => (
        <div className="whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground">
          {row.original.period}
        </div>
      ),
    },
    {
      id: "description",
      header: "Descripción",
      cell: ({ row }) => (
        <div className="line-clamp-3 max-w-xs truncate text-sm leading-relaxed">
          {row.original.description}
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

            {hiddenTechnologies.length > 0 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant="outline"
                    className="size-7 shrink-0 cursor-pointer items-center justify-center rounded-full p-0 text-[10px] font-medium leading-none"
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
            )}
          </div>
        )
      },
    },
    {
      id: "createdAt",
      header: "Creado",
      cell: ({ row }) => (
        <div className="whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground">
          {formatDate(row.original.createdAt)}
        </div>
      ),
    },
    {
      id: "updatedAt",
      header: "Actualizado",
      cell: ({ row }) => (
        <div className="whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground">
          {formatDate(row.original.updatedAt)}
        </div>
      ),
    },
    {
      id: "actions",
      header: () => <span className="sr-only">Acciones</span>,
      enablePinning: true,
      meta: { pin: "right" },
      cell: ({ row }) => (
        <div className="flex justify-end ">
          <ExperienceRowActions
            experience={row.original}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ),
    },
  ]
}
