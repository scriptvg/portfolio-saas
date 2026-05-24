import { SiGithub, SiGoogle } from "react-icons/si"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Spinner } from "@/components/ui/spinner"

export type OAuthProvider = "google" | "github"

const PROVIDER_LABELS: Record<OAuthProvider, string> = {
  google: "Google",
  github: "GitHub",
}

export type OAuthItemProps = {
  provider: OAuthProvider
  linked: boolean
  accountLabel?: string
  onLink: () => void
  onUnlink: () => void
  busy?: boolean
  unlinkBusy?: boolean
  disabled?: boolean
  canUnlink?: boolean
  className?: string
}

export function OAuthItem({
  provider,
  linked,
  accountLabel,
  onLink,
  onUnlink,
  busy = false,
  unlinkBusy = false,
  disabled = false,
  canUnlink = true,
  className,
}: OAuthItemProps) {
  const Icon = provider === "google" ? SiGoogle : SiGithub
  const label = PROVIDER_LABELS[provider]
  const blockUnlink = linked && !canUnlink

  return (
    <Item variant="muted" className={className}>
      <ItemMedia variant="icon">
        <Icon className="size-4" aria-hidden />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{label}</ItemTitle>
        <ItemDescription>
          {linked
            ? accountLabel ?? "Cuenta vinculada"
            : "No vinculada"}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        {linked ? (
          <Button
            variant="outline"
            size="sm"
            className="inline-flex gap-2"
            disabled={disabled || busy || unlinkBusy || blockUnlink}
            onClick={onUnlink}
          >
            {unlinkBusy ? (
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
            variant="outline"
            size="sm"
            className="inline-flex gap-2"
            disabled={disabled || busy || unlinkBusy}
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
        )}
      </ItemActions>
    </Item>
  )
}
