import type { TechnologyRow } from "@/lib/api/technologies"
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item"
import { BadgeColor } from "@/components/shared/badge-color"
import { Button } from "@/components/ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"
import { TechnologyIcon } from "@/components/modules/technologies/technology-icon"

export function TechnologyCard({
    technology,
    onEdit,
    onDelete,
  }: {
    technology: TechnologyRow
    onEdit: (technology: TechnologyRow) => void
    onDelete: (technology: TechnologyRow) => void
  }) {
    return (
      <Item variant='outline'>
        <ItemMedia variant="icon" className="size-10 border rounded bg-muted">
          <TechnologyIcon icon={technology.icon} color={technology.color} className="size-6" />
        </ItemMedia>
  
        <ItemContent>
          <ItemTitle>
            {technology.name}
          </ItemTitle>
  
          <ItemDescription>
            <BadgeColor color={technology.color} />
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            type="button"
            variant="ghost"
            className="hover:bg-green-500/10 hover:text-green-500 focus:bg-green-500/10 focus:text-green-500 dark:hover:bg-green-500/10 dark:hover:text-green-500 dark:focus:bg-green-500/10 dark:focus:text-green-500"
            size="icon"
            aria-label={`Editar ${technology.name}`}
            onClick={() => {
              onEdit(technology)
            }}
          >
            <PencilIcon className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="hover:bg-destructive/10 hover:text-destructive focus:bg-destructive/10 focus:text-destructive dark:hover:bg-destructive/10 dark:hover:text-destructive dark:focus:bg-destructive/10 dark:focus:text-destructive"
            size="icon"
            aria-label={`Eliminar ${technology.name}`}
            onClick={() => {
              onDelete(technology)
            }}
          >
            <TrashIcon className="size-4" />
          </Button>
        </ItemActions>
      </Item>
    )
  }