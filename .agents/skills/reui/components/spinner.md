# Spinner (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

12 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-spinner-1` | Basic spinner. | registry:block | Basic spinner. |
| `c-spinner-2` | Spinners in buttons. | registry:block | Spinners in buttons. |
| `c-spinner-3` | Spinners in badges. | registry:block | Spinners in badges. |
| `c-spinner-4` | Spinner in input group. | registry:block | Spinner in input group. |
| `c-spinner-5` | Spinner in empty state. | registry:block | Spinner in empty state. |
| `c-spinner-6` | Button loading states | registry:block | Button loading states |
| `c-spinner-7` | Overlay loading spinner | registry:block | Overlay loading spinner |
| `c-spinner-8` | Full page loading state | registry:block | Full page loading state |
| `c-spinner-9` | Inline loading text with spinner | registry:block | Inline loading text with spinner |
| `c-spinner-10` | Animated loading dots | registry:block | Animated loading dots |
| `c-spinner-11` | Spinner overlay on card | registry:block | Spinner overlay on card |
| `c-spinner-12` | Spinner color variants | registry:block | Spinner color variants |

## Source

### Basic spinner. (`c-spinner-1`)

Target: `components/examples/c-spinner-1.tsx`

Basic spinner.

```tsx
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Spinner />
    </div>
  )
}
```

### Spinners in buttons. (`c-spinner-2`)

Target: `components/examples/c-spinner-2.tsx`

Spinners in buttons.

```tsx
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button>
        <Spinner data-icon="inline-start" /> Processing…
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" /> Loading…
      </Button>
      <Button variant="outline" size="icon" disabled aria-label="Loading">
        <Spinner />
      </Button>
    </div>
  )
}
```

### Spinners in badges. (`c-spinner-3`)

Target: `components/examples/c-spinner-3.tsx`

Spinners in badges.

```tsx
import { Badge } from "@/components/reui/badge"

import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Badge>
        <Spinner data-icon="inline-start" />
        Updating
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Loading
      </Badge>
      <Badge variant="destructive-light">
        <Spinner data-icon="inline-start" />
        Updating
      </Badge>
      <Badge variant="success-light">
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
      <Badge variant="info-light">
        <Spinner data-icon="inline-start" />
        Loading
      </Badge>
    </div>
  )
}
```

### Spinner in input group. (`c-spinner-4`)

Target: `components/examples/c-spinner-4.tsx`

Spinner in input group.

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="search-loading">Searching</FieldLabel>
      <InputGroup id="search-loading">
        <InputGroupInput placeholder="Search records…" />
        <InputGroupAddon>
          <Spinner className="size-4" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
```

### Spinner in empty state. (`c-spinner-5`)

Target: `components/examples/c-spinner-5.tsx`

Spinner in empty state.

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Empty className="min-h-[300px] w-full max-w-md">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner className="size-4" />
          </EmptyMedia>
          <EmptyTitle>Loading projects</EmptyTitle>
          <EmptyDescription>
            Please wait while we fetch your project data. This should only take
            a moment.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" disabled>
            Cancel
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Button loading states (`c-spinner-6`)

Target: `components/examples/c-spinner-6.tsx`

Button loading states

```tsx
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Button disabled>
        <Spinner />
        Saving...
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Loading
      </Button>
      <Button variant="secondary" disabled>
        <Spinner />
        Processing
      </Button>
    </div>
  )
}
```

### Overlay loading spinner (`c-spinner-7`)

Target: `components/examples/c-spinner-7.tsx`

Overlay loading spinner

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="w-full max-w-xs overflow-hidden">
      {/* Card */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Report</CardTitle>
          <CardDescription>Revenue and growth metrics.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Revenue</span>
            <span className="font-medium">$12,450</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Growth</span>
            <span className="font-medium">+18.2%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Users</span>
            <span className="font-medium">1,248</span>
          </div>
        </CardContent>
      </Card>

      {/* Overlay */}
      <Card className="bg-background/80 absolute inset-0 z-10 backdrop-blur-xs">
        <CardContent className="flex grow flex-col items-center justify-center gap-2">
          <Spinner className="size-5 opacity-60" />
          <span className="text-muted-foreground text-sm">
            Refreshing data...
          </span>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Full page loading state (`c-spinner-8`)

Target: `components/examples/c-spinner-8.tsx`

Full page loading state

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <Card className="min-h-[200px] w-full max-w-xs">
      <CardContent className="flex grow flex-col items-center justify-center gap-4">
        <Spinner className="size-4 opacity-50" />
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium">Setting up your workspace</p>
          <p className="text-muted-foreground text-xs">
            This may take a few seconds...
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Inline loading text with spinner (`c-spinner-9`)

Target: `components/examples/c-spinner-9.tsx`

Inline loading text with spinner

```tsx
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-2">
        <Spinner className="size-3.5" />
        <span className="text-muted-foreground text-sm">
          Checking availability...
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner className="text-success size-3.5" />
        <span className="text-sm">
          <span className="text-success font-medium">Connected</span>
          <span className="text-muted-foreground"> — syncing data</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner className="text-warning size-3.5" />
        <span className="text-sm">
          <span className="text-warning font-medium">Reconnecting</span>
          <span className="text-muted-foreground"> — attempt 3 of 5</span>
        </span>
      </div>
    </div>
  )
}
```

### Animated loading dots (`c-spinner-10`)

Target: `components/examples/c-spinner-10.tsx`

Animated loading dots

```tsx
export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span className="bg-primary size-2 animate-bounce rounded-full [animation-delay:-0.3s]" />
      <span className="bg-primary size-2 animate-bounce rounded-full [animation-delay:-0.15s]" />
      <span className="bg-primary size-2 animate-bounce rounded-full" />
    </div>
  )
}
```

### Spinner overlay on card (`c-spinner-11`)

Target: `components/examples/c-spinner-11.tsx`

Spinner overlay on card

```tsx
import { Card, CardContent } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <Card className="relative w-full max-w-xs">
      <CardContent className="space-y-3 p-4">
        <h3 className="text-sm font-semibold">Dashboard Overview</h3>
        <p className="text-muted-foreground text-sm">
          Monthly revenue and user statistics for the current period.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md border p-3">
            <p className="text-muted-foreground text-xs">Revenue</p>
            <p className="text-lg font-bold">$12,450</p>
          </div>
          <div className="rounded-md border p-3">
            <p className="text-muted-foreground text-xs">Users</p>
            <p className="text-lg font-bold">1,234</p>
          </div>
        </div>
      </CardContent>

      {/* Overlay */}
      <Card className="bg-background/80 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-xs">
        <CardContent className="flex grow flex-col items-center justify-center gap-2">
          <Spinner className="size-4 opacity-60" />
        </CardContent>
      </Card>
    </Card>
  )
}
```

### Spinner color variants (`c-spinner-12`)

Target: `components/examples/c-spinner-12.tsx`

Spinner color variants

```tsx
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Spinner className="size-4 text-blue-500" />
      <Spinner className="size-4 text-green-500" />
      <Spinner className="size-4 text-red-500" />
      <Spinner className="size-4 text-yellow-500" />
      <Spinner className="size-4 text-purple-500" />
    </div>
  )
}
```
