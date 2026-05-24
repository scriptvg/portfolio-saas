# Scrollspy (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

2 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-scrollspy-1` | Basic scrollspy | registry:block | Basic scrollspy |
| `c-scrollspy-2` | Basic scroll area | registry:block | Basic scroll area |

## Source

### Basic scrollspy (`c-scrollspy-1`)

Target: `components/examples/c-scrollspy-1.tsx`

Basic scrollspy

```tsx
"use client"

import { useRef } from "react"
import { Scrollspy } from "@/components/reui/scrollspy"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Pattern() {
  const parentRef = useRef<HTMLDivElement | null>(null)

  const nav = [
    {
      id: "section-1",
      label: "Section 1",
    },
    {
      id: "section-2",
      label: "Section 2",
    },
    {
      id: "section-3",
      label: "Section 3",
    },
    {
      id: "section-4",
      label: "Section 4",
    },
    {
      id: "section-5",
      label: "Section 5",
    },
  ]

  return (
    <div className="flex w-full grow gap-5">
      <div className="flex w-[150px] flex-col gap-2">
        <Scrollspy
          offset={50}
          targetRef={parentRef}
          className="flex flex-col gap-2.5"
        >
          {nav.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              data-scrollspy-anchor={item.id}
              className={
                "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              }
            >
              {item.label}
            </Button>
          ))}
        </Scrollspy>
      </div>
      <div className="grow" ref={parentRef}>
        <ScrollArea className="-me-5 h-[500px] grow pe-5">
          <div className="space-y-8">
            {nav.map((item) => (
              <div key={item.id} id={item.id} className="space-y-2.5">
                <h3 className="text-foreground text-base">{item.label}</h3>
                <div className="bg-muted rounded-2xl h-[350px]"></div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
```

### Basic scroll area (`c-scrollspy-2`)

Target: `components/examples/c-scrollspy-2.tsx`

Basic scroll area

```tsx
"use client"

import { useRef } from "react"
import { Scrollspy } from "@/components/reui/scrollspy"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Pattern() {
  const parentRef = useRef<HTMLDivElement>(null)
  const nav = [
    {
      id: "section-6",
      label: "Section 1",
    },
    {
      id: "section-7",
      label: "Section 2",
    },
    {
      id: "section-8",
      label: "Section 3",
    },
    {
      id: "section-9",
      label: "Section 4",
    },
    {
      id: "section-10",
      label: "Section 5",
    },
  ]

  return (
    <div className="w-full space-y-5">
      <div className="flex w-full gap-2">
        <Scrollspy offset={50} targetRef={parentRef} className="flex gap-2.5">
          {nav.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              data-scrollspy-anchor={item.id}
              className={
                "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              }
            >
              {item.label}
            </Button>
          ))}
        </Scrollspy>
      </div>
      <div className="w-full" ref={parentRef}>
        <ScrollArea className="h-[400px] grow">
          <div className="space-y-8">
            {nav.map((item) => (
              <div key={item.id} id={item.id} className="space-y-2.5">
                <h3 className="text-foreground text-base">{item.label}</h3>
                <div className="bg-muted rounded-2xl h-[350px]"></div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
```
