# Frame (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

18 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-frame-1` | Basic frame | registry:block | Basic frame |
| `c-frame-2` | Frame with separated panels | registry:block | Frame with separated panels |
| `c-frame-3` | Frame with stacked panels | registry:block | Frame with stacked panels |
| `c-frame-4` | Frame with stacked panels and dense style | registry:block | Frame with stacked panels and dense style |
| `c-frame-5` | Frame with collapsible panels | registry:block | Frame with collapsible panels |
| `c-frame-6` | Frame with ghost(no outer border) variant | registry:block | Frame with ghost(no outer border) variant |
| `c-frame-7` | Frame with dense layout | registry:block | Frame with dense layout |
| `c-frame-8` | Frame with stacked panels | registry:block | Frame with stacked panels |
| `c-frame-9` | Frame with extra small spacing | registry:block | Frame with extra small spacing |
| `c-frame-10` | Frame with small spacing | registry:block | Frame with small spacing |
| `c-frame-11` | Frame with default spacing | registry:block | Frame with default spacing |
| `c-frame-12` | Frame with large spacing | registry:block | Frame with large spacing |
| `c-frame-13` | Frame with small border radius | registry:block | Frame with small border radius |
| `c-frame-14` | Frame with medium border radius | registry:block | Frame with medium border radius |
| `c-frame-15` | Frame with large border radius | registry:block | Frame with large border radius |
| `c-frame-16` | Frame with default border radius | registry:block | Frame with default border radius |
| `c-frame-17` | Frame with extra large border radius | registry:block | Frame with extra large border radius |
| `c-frame-18` | Frame with inverse variant | registry:block | Frame with inverse variant |

## Source

### Basic frame (`c-frame-1`)

Target: `components/examples/c-frame-1.tsx`

Basic frame

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full">
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Section title</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">Section footer</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with separated panels (`c-frame-2`)

Target: `components/examples/c-frame-2.tsx`

Frame with separated panels

```tsx
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full">
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
    </Frame>
  )
}
```

### Frame with stacked panels (`c-frame-3`)

Target: `components/examples/c-frame-3.tsx`

Frame with stacked panels

```tsx
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full" stacked>
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
    </Frame>
  )
}
```

### Frame with stacked panels and dense style (`c-frame-4`)

Target: `components/examples/c-frame-4.tsx`

Frame with stacked panels and dense style

```tsx
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full" stacked dense>
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
    </Frame>
  )
}
```

### Frame with collapsible panels (`c-frame-5`)

Target: `components/examples/c-frame-5.tsx`

Frame with collapsible panels

```tsx
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Frame className="w-full" stacked>
      <Collapsible defaultOpen className="group/collapsible">
        <CollapsibleTrigger className="w-full">
          <FrameHeader className="flex grow flex-row items-center justify-between gap-2">
            <FrameTitle>Start</FrameTitle>
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              className="text-muted-foreground size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
            />
          </FrameHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <FramePanel>
            <p className="text-muted-foreground text-sm">
              Initialize run to answer a user question using uploaded files and
              the knowledge base; cite sources when relevant.
            </p>
          </FramePanel>
        </CollapsibleContent>
      </Collapsible>
    </Frame>
  )
}
```

### Frame with ghost(no outer border) variant (`c-frame-6`)

Target: `components/examples/c-frame-6.tsx`

Frame with ghost(no outer border) variant

```tsx
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full" variant="ghost">
      <FrameHeader>
        <FrameTitle>No Outer Border</FrameTitle>
        <FrameDescription>
          This frame uses variant="ghost" to remove the outer border.
        </FrameDescription>
      </FrameHeader>
      <FramePanel>
        <p className="text-muted-foreground text-sm">
          The outer container of this frame has no border, only the background
          and panels are visible.
        </p>
      </FramePanel>
    </Frame>
  )
}
```

### Frame with dense layout (`c-frame-7`)

Target: `components/examples/c-frame-7.tsx`

Frame with dense layout

```tsx
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame dense className="w-full max-w-sm">
      <FrameHeader>
        <FrameTitle>Inventory Check</FrameTitle>
        <FrameDescription>Real-time stock monitoring</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Warehouse A</h2>
        <p className="text-muted-foreground text-sm">
          Dense mode removes outer padding for a more compact appearance.
        </p>
      </FramePanel>
    </Frame>
  )
}
```

### Frame with stacked panels (`c-frame-8`)

Target: `components/examples/c-frame-8.tsx`

Frame with stacked panels

```tsx
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame stacked className="w-full max-w-sm">
      <FrameHeader>
        <FrameTitle>Server Logs</FrameTitle>
        <FrameDescription>Recent activity and errors</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Auth Service</h2>
        <p className="text-muted-foreground text-sm">
          Successfully logged in user: admin
        </p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Database</h2>
        <p className="text-muted-foreground text-sm">
          Query execution time: 12ms
        </p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Storage</h2>
        <p className="text-muted-foreground text-sm">
          Upload complete: image.png
        </p>
      </FramePanel>
    </Frame>
  )
}
```

### Frame with extra small spacing (`c-frame-9`)

Target: `components/examples/c-frame-9.tsx`

Frame with extra small spacing

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame spacing="xs" className="w-full max-w-xs">
      <FrameHeader>
        <FrameTitle>Project Configuration</FrameTitle>
        <FrameDescription>Adjust your environment settings</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Environment Variables</h2>
        <p className="text-muted-foreground text-sm">
          XS spacing is ideal for high-density toolbars and property panels.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">Updated 2m ago</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with small spacing (`c-frame-10`)

Target: `components/examples/c-frame-10.tsx`

Frame with small spacing

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame spacing="sm" className="w-full max-w-sm">
      <FrameHeader>
        <FrameTitle>Database Overview</FrameTitle>
        <FrameDescription>
          Monitoring system health and performance
        </FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Live Connections</h2>
        <p className="text-muted-foreground text-sm">
          Small spacing provides a balanced layout for sidebar widgets and
          secondary dashboards.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">Status: Operational</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with default spacing (`c-frame-11`)

Target: `components/examples/c-frame-11.tsx`

Frame with default spacing

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full max-w-sm">
      <FrameHeader>
        <FrameTitle>User Profile</FrameTitle>
        <FrameDescription>
          Manage your personal account details
        </FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Account Security</h2>
        <p className="text-muted-foreground text-sm">
          Default spacing is the standard for primary application content and
          main dialogs.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">
          Last login: Today at 4:30 PM
        </p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with large spacing (`c-frame-12`)

Target: `components/examples/c-frame-12.tsx`

Frame with large spacing

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame spacing="lg" className="w-full max-w-sm">
      <FrameHeader>
        <FrameTitle>System Analytics</FrameTitle>
        <FrameDescription>Global traffic and usage patterns</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Performance Metrics</h2>
        <p className="text-muted-foreground text-sm">
          Large spacing creates a focused, airy feel suitable for marketing
          pages or empty states.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">View full report</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with small border radius (`c-frame-13`)

Target: `components/examples/c-frame-13.tsx`

Frame with small border radius

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full max-w-sm [--frame-radius:var(--radius-sm)]">
      <FrameHeader>
        <FrameTitle>Network Diagnostics</FrameTitle>
        <FrameDescription>
          Analyzing real-time socket connections
        </FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Port Status</h2>
        <p className="text-muted-foreground text-sm">
          Small radius gives a sharp, precise look, perfect for technical
          dashboards and data grids.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">Scan completed</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with medium border radius (`c-frame-14`)

Target: `components/examples/c-frame-14.tsx`

Frame with medium border radius

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full max-w-sm [--frame-radius:var(--radius-md)]">
      <FrameHeader>
        <FrameTitle>Media Library</FrameTitle>
        <FrameDescription>Manage your assets and downloads</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Storage Capacity</h2>
        <p className="text-muted-foreground text-sm">
          Medium radius is a versatile middle ground between sharp and rounded
          aesthetics.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">75% of 100GB used</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with large border radius (`c-frame-15`)

Target: `components/examples/c-frame-15.tsx`

Frame with large border radius

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full max-w-sm [--frame-radius:var(--radius-lg)]">
      <FrameHeader>
        <FrameTitle>Team Collaboration</FrameTitle>
        <FrameDescription>Invite and manage workspace members</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Active Members</h2>
        <p className="text-muted-foreground text-sm">
          Large radius offers a modern, friendly appearance for social and
          collaborative interfaces.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">3 members online</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with default border radius (`c-frame-16`)

Target: `components/examples/c-frame-16.tsx`

Frame with default border radius

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full max-w-sm">
      <FrameHeader>
        <FrameTitle>Default Layout</FrameTitle>
        <FrameDescription>Standard component curvature</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Standard Settings</h2>
        <p className="text-muted-foreground text-sm">
          The default radius matches the overall design system for consistent
          application feel.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">System default applied</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with extra large border radius (`c-frame-17`)

Target: `components/examples/c-frame-17.tsx`

Frame with extra large border radius

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full max-w-sm [--frame-radius:var(--radius-2xl)]">
      <FrameHeader>
        <FrameTitle>Creative Portfolio</FrameTitle>
        <FrameDescription>Showcasing visual art and design</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Gallery View</h2>
        <p className="text-muted-foreground text-sm">
          2XL radius provides a very soft, organic look suitable for creative
          portfolios and landing pages.
        </p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">Browse 12 projects</p>
      </FrameFooter>
    </Frame>
  )
}
```

### Frame with inverse variant (`c-frame-18`)

Target: `components/examples/c-frame-18.tsx`

Frame with inverse variant

```tsx
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function Pattern() {
  return (
    <Frame className="w-full" variant="inverse">
      <FrameHeader>
        <FrameTitle>Inverse</FrameTitle>
      </FrameHeader>
      <FramePanel>
        <p className="text-muted-foreground text-sm">
          Frame and panel background are inversed.
        </p>
      </FramePanel>
    </Frame>
  )
}
```
