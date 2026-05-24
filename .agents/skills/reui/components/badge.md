# Badge (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

25 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-badge-1` | Default badge | registry:block | Default badge |
| `c-badge-2` | Secondary badge | registry:block | Secondary badge |
| `c-badge-3` | Destructive badge | registry:block | Destructive badge |
| `c-badge-4` | Success badge | registry:block | Success badge |
| `c-badge-5` | Info badge | registry:block | Info badge |
| `c-badge-6` | Warning badge | registry:block | Warning badge |
| `c-badge-7` | Outline badge | registry:block | Outline badge |
| `c-badge-8` | Primary outline badge | registry:block | Primary outline badge |
| `c-badge-9` | Destructive outline badge | registry:block | Destructive outline badge |
| `c-badge-10` | Info outline badge | registry:block | Info outline badge |
| `c-badge-11` | Success outline badge | registry:block | Success outline badge |
| `c-badge-12` | Warning outline badge | registry:block | Warning outline badge |
| `c-badge-13` | Primary light badge | registry:block | Primary light badge |
| `c-badge-14` | Destructive light badge | registry:block | Destructive light badge |
| `c-badge-15` | Success light badge | registry:block | Success light badge |
| `c-badge-16` | Info light badge | registry:block | Info light badge |
| `c-badge-17` | Warning light badge | registry:block | Warning light badge |
| `c-badge-18` | Badge size variations | registry:block | Badge size variations |
| `c-badge-19` | Badge with full radius (radius="full") | registry:block | Badge with full radius (radius="full") |
| `c-badge-20` | Badge with an icon | registry:block | Badge with an icon |
| `c-badge-21` | Badge with a dismiss button | registry:block | Badge with a dismiss button |
| `c-badge-22` | Badge with a status dot | registry:block | Badge with a status dot |
| `c-badge-23` | Badge rendered as a link | registry:block | Badge rendered as a link |
| `c-badge-24` | Badge with avatar | registry:block | Badge with avatar |
| `c-badge-25` | Badge with flag image | registry:block | Badge with flag image |

## Source

### Default badge (`c-badge-1`)

Target: `components/examples/c-badge-1.tsx`

Default badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge>Badge</Badge>
}
```

### Secondary badge (`c-badge-2`)

Target: `components/examples/c-badge-2.tsx`

Secondary badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="secondary">Badge</Badge>
}
```

### Destructive badge (`c-badge-3`)

Target: `components/examples/c-badge-3.tsx`

Destructive badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="destructive">Badge</Badge>
}
```

### Success badge (`c-badge-4`)

Target: `components/examples/c-badge-4.tsx`

Success badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="success">Badge</Badge>
}
```

### Info badge (`c-badge-5`)

Target: `components/examples/c-badge-5.tsx`

Info badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="info">Badge</Badge>
}
```

### Warning badge (`c-badge-6`)

Target: `components/examples/c-badge-6.tsx`

Warning badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="warning">Badge</Badge>
}
```

### Outline badge (`c-badge-7`)

Target: `components/examples/c-badge-7.tsx`

Outline badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="outline">Badge</Badge>
}
```

### Primary outline badge (`c-badge-8`)

Target: `components/examples/c-badge-8.tsx`

Primary outline badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="primary-outline">Badge</Badge>
}
```

### Destructive outline badge (`c-badge-9`)

Target: `components/examples/c-badge-9.tsx`

Destructive outline badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="destructive-outline">Badge</Badge>
}
```

### Info outline badge (`c-badge-10`)

Target: `components/examples/c-badge-10.tsx`

Info outline badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="info-outline">Badge</Badge>
}
```

### Success outline badge (`c-badge-11`)

Target: `components/examples/c-badge-11.tsx`

Success outline badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="success-outline">Badge</Badge>
}
```

### Warning outline badge (`c-badge-12`)

Target: `components/examples/c-badge-12.tsx`

Warning outline badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="warning-outline">Badge</Badge>
}
```

### Primary light badge (`c-badge-13`)

Target: `components/examples/c-badge-13.tsx`

Primary light badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="primary-light">Badge</Badge>
}
```

### Destructive light badge (`c-badge-14`)

Target: `components/examples/c-badge-14.tsx`

Destructive light badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="destructive-light">Badge</Badge>
}
```

### Success light badge (`c-badge-15`)

Target: `components/examples/c-badge-15.tsx`

Success light badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="success-light">Badge</Badge>
}
```

### Info light badge (`c-badge-16`)

Target: `components/examples/c-badge-16.tsx`

Info light badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="info-light">Badge</Badge>
}
```

### Warning light badge (`c-badge-17`)

Target: `components/examples/c-badge-17.tsx`

Warning light badge

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return <Badge variant="warning-light">Badge</Badge>
}
```

### Badge size variations (`c-badge-18`)

Target: `components/examples/c-badge-18.tsx`

Badge size variations

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return (
    <div className="flex items-center gap-2.5">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  )
}
```

### Badge with full radius (radius="full") (`c-badge-19`)

Target: `components/examples/c-badge-19.tsx`

Badge with full radius (radius="full")

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-2.5">
        <Badge size="sm" radius="full">
          3
        </Badge>
        <Badge size="default" radius="full">
          3
        </Badge>
        <Badge size="lg" radius="full">
          3
        </Badge>
      </div>
      <div className="flex items-center gap-2.5">
        <Badge size="sm" radius="full">
          New
        </Badge>
        <Badge radius="full">New</Badge>
        <Badge size="lg" radius="full">
          New
        </Badge>
      </div>
      <div className="flex items-center gap-2.5">
        <Badge size="sm" radius="full" variant="outline">
          New
        </Badge>
        <Badge radius="full" variant="secondary">
          New
        </Badge>
        <Badge size="lg" radius="full" variant="success-light">
          New
        </Badge>
      </div>
    </div>
  )
}
```

### Badge with an icon (`c-badge-20`)

Target: `components/examples/c-badge-20.tsx`

Badge with an icon

```tsx
import { Badge } from "@/components/reui/badge"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Badge variant="outline">
      <IconPlaceholder
        lucide="CheckIcon"
        tabler="IconCheck"
        hugeicons="Tick02Icon"
        phosphor="CheckIcon"
        remixicon="RiCheckLine"
      />
      Badge
    </Badge>
  )
}
```

### Badge with a dismiss button (`c-badge-21`)

Target: `components/examples/c-badge-21.tsx`

Badge with a dismiss button

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Badge variant="outline" className="gap-0.5">
      Badge
      <Button
        variant="ghost"
        size="icon"
        className="size-3 hover:bg-transparent"
      >
        <IconPlaceholder
          lucide="XIcon"
          tabler="IconX"
          hugeicons="MultiplicationSignIcon"
          phosphor="XIcon"
          remixicon="RiCloseLine"
        />
      </Button>
    </Badge>
  )
}
```

### Badge with a status dot (`c-badge-22`)

Target: `components/examples/c-badge-22.tsx`

Badge with a status dot

```tsx
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return (
    <Badge variant="info-light">
      <span className="ms-0.25 size-1.25 rounded-full! bg-[currentColor]" />{" "}
      Badge
    </Badge>
  )
}
```

### Badge rendered as a link (`c-badge-23`)

Target: `components/examples/c-badge-23.tsx`

Badge rendered as a link

```tsx
import Link from "next/link"
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return (
    <Badge variant="outline" asChild>
      <Link href="#">Badge</Link>
    </Badge>
  )
}
```

### Badge with avatar (`c-badge-24`)

Target: `components/examples/c-badge-24.tsx`

Badge with avatar

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Badge variant="outline">
      <Avatar className="size-3.5">
        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80" />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
      Alex
      <Button
        variant="ghost"
        size="icon"
        className="size-3 hover:bg-transparent"
      >
        <IconPlaceholder
          lucide="XIcon"
          tabler="IconX"
          hugeicons="MultiplicationSignIcon"
          phosphor="XIcon"
          remixicon="RiCloseLine"
        />
      </Button>
    </Badge>
  )
}
```

### Badge with flag image (`c-badge-25`)

Target: `components/examples/c-badge-25.tsx`

Badge with flag image

```tsx
import Image from "next/image"
import { Badge } from "@/components/reui/badge"

export function Pattern() {
  return (
    <Badge variant="outline">
      <Image
        src="https://flagcdn.com/us.svg"
        alt="US"
        width={18}
        height={18}
        className="rounded-xs"
      />
      USA
    </Badge>
  )
}
```
