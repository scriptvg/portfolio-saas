# Skeleton (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

10 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-skeleton-1` | Skeleton loader for avatars and user info. | registry:block | Skeleton loader for avatars and user info. |
| `c-skeleton-2` | Skeleton loader for a card component. | registry:block | Skeleton loader for a card component. |
| `c-skeleton-3` | Skeleton loader for text and paragraphs. | registry:block | Skeleton loader for text and paragraphs. |
| `c-skeleton-4` | Skeleton loader for a form. | registry:block | Skeleton loader for a form. |
| `c-skeleton-5` | Skeleton loader for a data table. | registry:block | Skeleton loader for a data table. |
| `c-skeleton-6` | Skeleton loader for a dashboard stats row | registry:block | Skeleton loader for a dashboard stats row |
| `c-skeleton-7` | Skeleton loader for a list with actions | registry:block | Skeleton loader for a list with actions |
| `c-skeleton-8` | Skeleton loader for a card grid | registry:block | Skeleton loader for a card grid |
| `c-skeleton-9` | Skeleton loader for a full profile page | registry:block | Skeleton loader for a full profile page |
| `c-skeleton-10` | Skeleton loader for chat messages | registry:block | Skeleton loader for chat messages |

## Source

### Skeleton loader for avatars and user info. (`c-skeleton-1`)

Target: `components/examples/c-skeleton-1.tsx`

Skeleton loader for avatars and user info.

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[140px]" />
      </div>
    </div>
  )
}
```

### Skeleton loader for a card component. (`c-skeleton-2`)

Target: `components/examples/c-skeleton-2.tsx`

Skeleton loader for a card component.

```tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="gap-2">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full rounded-md" />
      </CardContent>
    </Card>
  )
}
```

### Skeleton loader for text and paragraphs. (`c-skeleton-3`)

Target: `components/examples/c-skeleton-3.tsx`

Skeleton loader for text and paragraphs.

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      {/* Skeleton pattern */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="mt-4 flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  )
}
```

### Skeleton loader for a form. (`c-skeleton-4`)

Target: `components/examples/c-skeleton-4.tsx`

Skeleton loader for a form.

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      {/* Skeleton pattern */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-10 w-28" />
      </div>
    </div>
  )
}
```

### Skeleton loader for a data table. (`c-skeleton-5`)

Target: `components/examples/c-skeleton-5.tsx`

Skeleton loader for a data table.

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
      <div className="flex gap-4 border-b pb-2">
        <Skeleton className="h-4 flex-1" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  )
}
```

### Skeleton loader for a dashboard stats row (`c-skeleton-6`)

Target: `components/examples/c-skeleton-6.tsx`

Skeleton loader for a dashboard stats row

```tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <div className="mx-auto grid w-full max-w-lg grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <Skeleton className="h-3 w-16" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-3 w-20" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

### Skeleton loader for a list with actions (`c-skeleton-7`)

Target: `components/examples/c-skeleton-7.tsx`

Skeleton loader for a list with actions

```tsx
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      {/* Skeleton pattern */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between pb-4">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
        <Separator className="opacity-60" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="border-border/60 flex items-center gap-3 border-b py-3 last:border-b-0"
          >
            <Skeleton className="size-9 shrink-0 rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3.5 w-32" />
              <Skeleton className="h-3 w-48" />
            </div>
            <Skeleton className="h-7 w-16 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Skeleton loader for a card grid (`c-skeleton-8`)

Target: `components/examples/c-skeleton-8.tsx`

Skeleton loader for a card grid

```tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="aspect-video w-full" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </CardFooter>
    </Card>
  )
}
```

### Skeleton loader for a full profile page (`c-skeleton-9`)

Target: `components/examples/c-skeleton-9.tsx`

Skeleton loader for a full profile page

```tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-6">
      {/* Profile header */}
      <Card>
        <CardHeader className="items-center gap-3">
          <Skeleton className="size-20 rounded-full" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-3 w-48" />
        </CardHeader>
        <CardContent className="flex justify-center gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <Skeleton className="h-5 w-10" />
              <Skeleton className="h-3 w-14" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Details section */}
      <Card>
        <CardContent className="space-y-4 pt-4">
          <Skeleton className="h-4 w-24" />
          <Separator />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-32" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
```

### Skeleton loader for chat messages (`c-skeleton-10`)

Target: `components/examples/c-skeleton-10.tsx`

Skeleton loader for chat messages

```tsx
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent>
        {/* Incoming message */}
        <div className="flex items-start gap-2.5">
          <Skeleton className="size-8 shrink-0 rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-16 w-48 rounded-lg rounded-tl-none" />
            <Skeleton className="h-2.5 w-12" />
          </div>
        </div>

        {/* Outgoing message */}
        <div className="flex items-start justify-end gap-2.5">
          <div className="flex flex-col items-end gap-1">
            <Skeleton className="h-10 w-40 rounded-lg rounded-tr-none" />
            <Skeleton className="h-2.5 w-12" />
          </div>
        </div>

        {/* Incoming message */}
        <div className="flex items-start gap-2.5">
          <Skeleton className="size-8 shrink-0 rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-24 w-56 rounded-lg rounded-tl-none" />
            <Skeleton className="h-2.5 w-12" />
          </div>
        </div>

        {/* Input area */}
        <div className="flex items-center gap-2 pt-2">
          <Skeleton className="h-9 flex-1 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}
```
