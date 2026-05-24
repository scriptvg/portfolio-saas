import { AlertTriangleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export type SettingsDangerZoneProps = {
  onDeleteAccount?: () => void
  deleteDisabled?: boolean
}

export function SettingsDangerZone({
  onDeleteAccount,
  deleteDisabled = true,
}: SettingsDangerZoneProps) {
  return (
    <section className="space-y-3">
      <header className="space-y-1">
        <h3 className="text-sm font-medium tracking-tight text-destructive">
          Zona de peligro
        </h3>
        <p className="text-xs/relaxed text-muted-foreground">
          Acciones irreversibles sobre tu cuenta.
        </p>
      </header>
      <Item
        variant="outline"
        className="border-destructive/40 bg-destructive/5"
      >
        <ItemMedia variant="icon" className="text-destructive">
          <AlertTriangleIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Eliminar cuenta</ItemTitle>
          <ItemDescription>
            Se borrarán tus datos del panel. Esta acción no se puede deshacer.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            type="button"
            variant="destructive"
            size="sm"
            disabled={deleteDisabled}
            onClick={onDeleteAccount}
          >
            Eliminar cuenta
          </Button>
        </ItemActions>
      </Item>
    </section>
  )
}
