import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export type SettingsSaveBarProps = {
  onSave: () => void
  onDiscard?: () => void
  saving?: boolean
  dirty?: boolean
  saveLabel?: string
  className?: string
}

export function SettingsSaveBar({
  onSave,
  onDiscard,
  saving,
  dirty = true,
  saveLabel = "Guardar cambios",
  className,
}: SettingsSaveBarProps) {
  return (
    <div
      data-dirty={dirty || undefined}
      className={cn(
        "pointer-events-none sticky bottom-0 z-20 -mx-4 flex items-center justify-end gap-3 px-4 pt-2 pb-3",
        "transition-opacity data-[dirty]:pointer-events-auto",
        dirty ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-none border bg-background/95 px-3 py-2 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <span className="text-xs text-muted-foreground">
          {saving ? "Guardando cambios" : "Tienes cambios sin guardar"}
        </span>
        {onDiscard ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onDiscard}
            disabled={saving}
          >
            Descartar
          </Button>
        ) : null}
        <Button
          type="button"
          size="sm"
          onClick={onSave}
          disabled={saving || !dirty}
        >
          {saving ? <Spinner className="size-3.5" /> : null}
          {saving ? "Guardando…" : saveLabel}
        </Button>
      </div>
    </div>
  )
}
