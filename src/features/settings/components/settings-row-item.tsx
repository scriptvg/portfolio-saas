import * as React from "react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

export type SettingsRowItemProps = {
  title: string
  description?: React.ReactNode
  actions?: React.ReactNode
}

export function SettingsRowItem({
  title,
  description,
  actions,
}: SettingsRowItemProps) {
  return (
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        {description ? <ItemDescription>{description}</ItemDescription> : null}
      </ItemContent>
      {actions ? <ItemActions>{actions}</ItemActions> : null}
    </Item>
  )
}
