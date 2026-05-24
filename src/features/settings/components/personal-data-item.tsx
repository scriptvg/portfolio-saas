import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { AuthUser } from "@/auth/types"

export type PersonalDataItemProps = {
  user: AuthUser | null
  onEdit?: () => void
  editLabel?: string
}

export function PersonalDataItem({
  user,
  onEdit,
  editLabel = "Editar",
}: PersonalDataItemProps) {
  return (
    <Item variant="muted">
      <ItemMedia variant="image">
        <Avatar className="size-10">
          <AvatarImage src={user?.image ?? ""} />
          <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{user?.name}</ItemTitle>
        <ItemDescription>{user?.email}</ItemDescription>
      </ItemContent>
      {onEdit ? (
        <ItemActions>
          <Button variant="outline" size="sm" onClick={onEdit}>
            {editLabel}
          </Button>
        </ItemActions>
      ) : null}
    </Item>
  )
}
