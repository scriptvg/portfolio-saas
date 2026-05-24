# Resizable (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

10 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-resizable-1` | Horizontal resizable layout | registry:block | Horizontal resizable layout |
| `c-resizable-2` | Vertical resizable layout. | registry:block | Vertical resizable layout. |
| `c-resizable-3` | Nested mixed-direction resizable layout. | registry:block | Nested mixed-direction resizable layout. |
| `c-resizable-4` | Nested resizable | registry:block | Nested resizable |
| `c-resizable-5` | Handle with animated pill indicator | registry:block | Handle with animated pill indicator |
| `c-resizable-6` | Handle pill with spring scale on drag | registry:block | Handle pill with spring scale on drag |
| `c-resizable-7` | Handle with large capsule expansion on drag | registry:block | Handle with large capsule expansion on drag |
| `c-resizable-8` | Nested layout with animated pill handles | registry:block | Nested layout with animated pill handles |
| `c-resizable-9` | Three-panel layout with animated pill handles | registry:block | Three-panel layout with animated pill handles |
| `c-resizable-10` | State-tracked resizable layout. | registry:block | State-tracked resizable layout. |

## Source

### Horizontal resizable layout (`c-resizable-1`)

Target: `components/examples/c-resizable-1.tsx`

Horizontal resizable layout

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="vertical"
        className="rounded-2xl min-h-[300px] border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Vertical resizable layout. (`c-resizable-2`)

Target: `components/examples/c-resizable-2.tsx`

Vertical resizable layout.

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[200px] border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Nested mixed-direction resizable layout. (`c-resizable-3`)

Target: `components/examples/c-resizable-3.tsx`

Nested mixed-direction resizable layout.

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[300px] border"
      >
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Side</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize={30}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-semibold">Top</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={70}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-semibold">Bottom</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Nested resizable (`c-resizable-4`)

Target: `components/examples/c-resizable-4.tsx`

Nested resizable

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[300px] border"
      >
        <ResizablePanel defaultSize="50%">
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50%">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="25%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="75%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Handle with animated pill indicator (`c-resizable-5`)

Target: `components/examples/c-resizable-5.tsx`

Handle with animated pill indicator

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[200px] border"
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className="before:bg-muted-foreground/25 hover:before:bg-muted-foreground/50 active:before:bg-primary before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 before:h-6 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 before:ease-[cubic-bezier(0.32,0.72,0,1)] hover:before:h-8 active:before:h-12 active:before:w-1.5" />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Handle pill with spring scale on drag (`c-resizable-6`)

Target: `components/examples/c-resizable-6.tsx`

Handle pill with spring scale on drag

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[200px] border"
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className="before:bg-muted-foreground/20 hover:before:bg-muted-foreground/40 active:before:bg-primary before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 before:h-8 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-y-75 before:rounded-full before:transition-all before:duration-300 before:ease-[cubic-bezier(0.32,0.72,0,1)] hover:before:scale-y-100 active:before:h-14 active:before:w-1.5 active:before:scale-y-100" />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Handle with large capsule expansion on drag (`c-resizable-7`)

Target: `components/examples/c-resizable-7.tsx`

Handle with large capsule expansion on drag

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[200px] border"
      >
        <ResizablePanel defaultSize={35}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Panel A</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className="active:bg-primary/20 before:bg-muted-foreground/20 hover:before:bg-muted-foreground/40 active:before:bg-primary transition-colors duration-200 before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 before:h-6 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 before:ease-[cubic-bezier(0.32,0.72,0,1)] hover:before:h-10 hover:before:w-1.5 active:before:h-20 active:before:w-1.5" />
        <ResizablePanel defaultSize={65}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Panel B</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Nested layout with animated pill handles (`c-resizable-8`)

Target: `components/examples/c-resizable-8.tsx`

Nested layout with animated pill handles

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const verticalPillClasses =
  "before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 before:h-6 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-muted-foreground/25 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.32,0.72,0,1)] hover:before:h-10 hover:before:bg-muted-foreground/40 active:before:h-12 active:before:w-1.5 active:before:bg-primary"

const horizontalPillClasses =
  "before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 before:h-1 before:w-6 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-muted-foreground/25 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.32,0.72,0,1)] hover:before:w-10 hover:before:bg-muted-foreground/40 active:before:h-1.5 active:before:w-12 active:before:bg-primary"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[300px] border"
      >
        <ResizablePanel defaultSize={30} minSize={15}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Nav</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className={verticalPillClasses} />
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-semibold">Toolbar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle className={horizontalPillClasses} />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-semibold">Editor</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### Three-panel layout with animated pill handles (`c-resizable-9`)

Target: `components/examples/c-resizable-9.tsx`

Three-panel layout with animated pill handles

```tsx
"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const pillClasses =
  "before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 before:h-6 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-muted-foreground/25 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.32,0.72,0,1)] hover:before:h-10 hover:before:bg-muted-foreground/40 active:before:h-12 active:before:w-1.5 active:before:bg-primary"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[200px] border"
      >
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Files</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className={pillClasses} />
        <ResizablePanel defaultSize={50} minSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Editor</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className={pillClasses} />
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-semibold">Preview</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

### State-tracked resizable layout. (`c-resizable-10`)

Target: `components/examples/c-resizable-10.tsx`

State-tracked resizable layout.

```tsx
"use client"

import { useState } from "react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Pattern() {
  const [sizes, setSizes] = useState<Record<string, number>>({
    left: 30,
    right: 70,
  })

  return (
    <div className="mx-auto w-full max-w-lg">
      <ResizablePanelGroup
        orientation="horizontal"
        className="rounded-2xl min-h-[200px] border"
        onLayoutChange={(layout) => {
          setSizes(layout)
        }}
      >
        <ResizablePanel id="left" defaultSize={30} minSize={20}>
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
            <span className="text-sm font-semibold">
              {Math.round(sizes.left ?? 30)}%
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="right" defaultSize={70} minSize={30}>
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
            <span className="text-sm font-semibold">
              {Math.round(sizes.right ?? 70)}%
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```
