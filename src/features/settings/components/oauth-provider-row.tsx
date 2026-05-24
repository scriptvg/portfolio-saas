import type { IconType } from "react-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export type OAuthProviderRowProps = {
  icon: IconType
  label: string
  linked: boolean
  disabled?: boolean
  busy: boolean
  unlinkBusy?: boolean
  onLink: () => void
  onUnlink?: () => void
  canUnlink?: boolean
  unlinkBlockedHint?: string
  hint?: string
}

export function OAuthProviderRow({
  icon: Icon,
  label,
  linked,
  disabled,
  busy,
  unlinkBusy,
  onLink,
  onUnlink,
  canUnlink,
  unlinkBlockedHint,
  hint,
}: OAuthProviderRowProps) {
  const unlinking = !!unlinkBusy
  const blockUnlink = linked && canUnlink === false

  return (
    <div className="flex flex-col gap-3 rounded-none border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-none border bg-background">
          <Icon className="size-5" aria-hidden />
        </div>
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium">{label}</span>
            {linked ? (
              <Badge variant="secondary">Conectada</Badge>
            ) : (
              <Badge variant="outline">Sin conectar</Badge>
            )}
          </div>
          {hint ? (
            <p className="text-xs text-muted-foreground">{hint}</p>
          ) : null}
          {linked && blockUnlink && unlinkBlockedHint ? (
            <p className="text-xs text-amber-700 dark:text-amber-500">
              {unlinkBlockedHint}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
        {!linked ? (
          <Button
            type="button"
            variant="default"
            size="sm"
            className="inline-flex shrink-0 gap-2 sm:self-center"
            disabled={disabled || busy || unlinking}
            onClick={onLink}
          >
            {busy ? (
              <>
                <Spinner className="size-4" />
                Preparando…
              </>
            ) : (
              "Vincular"
            )}
          </Button>
        ) : onUnlink ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="inline-flex shrink-0 gap-2 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive sm:self-center"
            disabled={disabled || busy || unlinking || blockUnlink}
            onClick={onUnlink}
          >
            {unlinking ? (
              <>
                <Spinner className="size-4" />
                Desvinculando…
              </>
            ) : (
              "Desvincular"
            )}
          </Button>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="shrink-0 sm:self-center"
            disabled
          >
            Ya vinculada
          </Button>
        )}
      </div>
    </div>
  )
}
