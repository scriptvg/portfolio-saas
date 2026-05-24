import * as React from "react"

export type SettingsItemSectionLayout = "stack" | "split"

export type SettingsItemSectionProps = {
  title: string
  description?: string
  children?: React.ReactNode
  actions?: React.ReactNode
  layout?: SettingsItemSectionLayout
}

export function SettingsItemSection({
  title,
  description,
  children,
  actions,
  layout = "stack",
}: SettingsItemSectionProps) {
  if (layout === "split") {
    return (
      <section className="grid gap-4 border-b pb-6 last:border-b-0 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-8">
        <header className="space-y-1">
          <h3 className="text-sm font-medium tracking-tight">{title}</h3>
          {description ? (
            <p className="text-xs/relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
        <div className="space-y-3">
          {actions ? (
            <div className="flex flex-wrap items-center justify-end gap-2">
              {actions}
            </div>
          ) : null}
          {children ? <div className="space-y-2">{children}</div> : null}
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-3 border-b pb-6 last:border-b-0 last:pb-0">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-sm font-medium tracking-tight">{title}</h3>
          {description ? (
            <p className="text-xs/relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex items-center gap-2">{actions}</div>
        ) : null}
      </header>
      {children ? <div className="space-y-2">{children}</div> : null}
    </section>
  )
}
