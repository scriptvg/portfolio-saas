import type { ColumnDef } from "@tanstack/react-table"
import { EllipsisIcon, PencilIcon, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { TechnologyRow } from "@/lib/api/technologies"
import { formatDate } from "@/lib/utils"
import { BadgeColor } from "@/components/shared/badge-color"
import { BadgeIcon } from "@/components/shared/badge-icon"

export interface TechnologyColumnHandlers {
    onEdit: (technology: TechnologyRow) => void
    onDelete: (technology: TechnologyRow) => void
}

function TechnologyRowActions({
    technology,
    onEdit,
    onDelete,
}: {
    technology: TechnologyRow
} & TechnologyColumnHandlers) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`Acciones de ${technology.name}`}
                >
                    <EllipsisIcon className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => onEdit(technology)}>
                    <PencilIcon className="size-4" />
                    Editar
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    variant="destructive"
                    onSelect={() => onDelete(technology)}
                >
                    <TrashIcon className="size-4" />
                    Eliminar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function getTechnologyColumns({
    onEdit,
    onDelete,
}: TechnologyColumnHandlers): ColumnDef<TechnologyRow>[] {
    return [
        {
            id: "name",
            header: "Nombre",
            cell: ({ row }) => <div>{row.original.name}</div>,
        },
        {
            id: "icon",
            header: "Icono",
            cell: ({ row }) => (
                <BadgeIcon icon={row.original.icon} color={row.original.color} />
            ),
        },
        {
            id: "color",
            header: "Color",
            cell: ({ row }) => (
                <BadgeColor color={row.original.color} />
            ),
        },
        {
            id: "createdAt",
            header: "Creado",
            cell: ({ row }) => (
                <div className="font-mono text-xs tabular-nums text-muted-foreground">
                    {formatDate(row.original.createdAt)}
                </div>
            ),
        },
        {
            id: "updatedAt",
            header: "Actualizado",
            cell: ({ row }) => (
                <div className="font-mono text-xs tabular-nums text-muted-foreground">
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
                <div className="flex justify-end">
                    <TechnologyRowActions
                        technology={row.original}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </div>
            ),
        },
    ]
}
