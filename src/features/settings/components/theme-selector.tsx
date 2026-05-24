import { MonitorIcon } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { PanelTheme } from "@/features/settings/types"
import { cn } from "@/lib/utils"

const OPTIONS = [
  { value: "light", label: "Claro", preview: "light" },
  { value: "dark", label: "Oscuro", preview: "dark" },
  { value: "system", label: "Sistema", preview: "system" },
] as const satisfies ReadonlyArray<{
  value: PanelTheme
  label: string
  preview: "light" | "dark" | "system"
}>

export type ThemeSelectorProps = {
  onThemeChange?: (theme: PanelTheme) => void
}

function PreviewChrome({
  surfaceClassName,
  sidebarClassName,
  headerAccentClassName,
  contentClassName,
}: {
  surfaceClassName: string
  sidebarClassName: string
  headerAccentClassName: string
  contentClassName: string
}) {
  return (
    <div
      className={cn(
        "flex size-full min-h-24 overflow-hidden rounded-none border border-black/5 shadow-sm",
        surfaceClassName
      )}
    >
      <div
        className={cn(
          "flex w-[28%] flex-col gap-1.5 border-r border-black/5 p-2",
          sidebarClassName
        )}
      >
        <span className="h-1.5 w-full rounded-full bg-current/15" />
        <span className="h-1.5 w-4/5 rounded-full bg-current/10" />
        <span className="h-1.5 w-3/5 rounded-full bg-current/10" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2 p-2">
        <div className="flex items-center justify-between gap-2">
          <span className={cn("h-2 w-8 rounded-none", headerAccentClassName)} />
          <div className="flex gap-1">
            <span className="size-1.5 rounded-full bg-current/15" />
            <span className="size-1.5 rounded-full bg-current/15" />
          </div>
        </div>
        <span className={cn("min-h-0 flex-1 rounded-none", contentClassName)} />
      </div>
    </div>
  )
}

function ThemePreview({
  variant,
}: {
  variant: (typeof OPTIONS)[number]["preview"]
}) {
  if (variant === "light") {
    return (
      <div className="bg-muted/60 p-4">
        <PreviewChrome
          surfaceClassName="bg-zinc-50 text-zinc-900"
          sidebarClassName="bg-zinc-100/80"
          headerAccentClassName="bg-primary"
          contentClassName="bg-zinc-100/70"
        />
      </div>
    )
  }

  if (variant === "dark") {
    return (
      <div className="bg-muted/60 p-4">
        <PreviewChrome
          surfaceClassName="bg-zinc-900 text-zinc-100"
          sidebarClassName="bg-zinc-800/90"
          headerAccentClassName="bg-primary"
          contentClassName="bg-zinc-800/80"
        />
      </div>
    )
  }

  return (
    <div className="bg-muted/60 p-4">
      <div className="relative flex size-full min-h-24 overflow-hidden rounded-none border border-black/5 shadow-sm">
        <div className="flex w-1/2 min-w-0">
          <PreviewChrome
            surfaceClassName="h-full rounded-none border-0 bg-zinc-50 text-zinc-900 shadow-none"
            sidebarClassName="bg-zinc-100/80"
            headerAccentClassName="bg-primary"
            contentClassName="bg-zinc-100/70"
          />
        </div>
        <div className="flex w-1/2 min-w-0">
          <PreviewChrome
            surfaceClassName="h-full rounded-none border-0 bg-zinc-900 text-zinc-100 shadow-none"
            sidebarClassName="bg-zinc-800/90"
            headerAccentClassName="bg-primary"
            contentClassName="bg-zinc-800/80"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <span className="flex size-7 items-center justify-center rounded-full border border-border/80 bg-background/95 text-muted-foreground shadow-sm backdrop-blur-sm">
            <MonitorIcon className="size-3.5" strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  )
}

export function ThemeSelector({ onThemeChange }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme()

  return (
    <RadioGroup
      value={theme}
      onValueChange={(value) => {
        if (value === "light" || value === "dark" || value === "system") {
          setTheme(value)
          onThemeChange?.(value)
        }
      }}
      className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3"
    >
      {OPTIONS.map(({ value, label, preview }) => {
        const id = `panel-theme-${value}`

        return (
          <div key={value} className="group/theme-option min-w-0">
            <Label
              htmlFor={id}
              className={cn(
                "flex cursor-pointer flex-col overflow-hidden rounded-none border bg-card transition-[border-color,box-shadow]",
                "hover:border-foreground/20",
                "has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:ring-1 has-[[data-state=checked]]:ring-primary/20"
              )}
            >
              <ThemePreview variant={preview} />
              <span className="flex items-center gap-2.5 border-t px-3 py-2.5">
                <RadioGroupItem id={id} value={value} aria-label={label} />
                <span className="text-sm leading-none font-medium">
                  {label}
                </span>
              </span>
            </Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}
