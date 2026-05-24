import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export type SettingsToggleRowProps = {
  title: string
  description?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function SettingsToggleRow({
  title,
  description,
  checked,
  onCheckedChange,
  disabled,
  className,
}: SettingsToggleRowProps) {
  return (
    <Item variant="muted" className={cn(className)}>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        {description ? <ItemDescription>{description}</ItemDescription> : null}
      </ItemContent>
      <ItemActions>
        <Switch
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          aria-label={title}
        />
      </ItemActions>
    </Item>
  )
}
