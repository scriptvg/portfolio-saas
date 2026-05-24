# Avatar (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

35 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-avatar-1` | Basic avatar | registry:block | Basic avatar |
| `c-avatar-2` | Avatar with fallback | registry:block | Avatar with fallback |
| `c-avatar-3` | Avatars with different sizes | registry:block | Avatars with different sizes |
| `c-avatar-4` | Avatars with different border radiuses | registry:block | Avatars with different border radiuses |
| `c-avatar-5` | Avatars with custom sizes | registry:block | Avatars with custom sizes |
| `c-avatar-6` | Avatar with an online status badge | registry:block | Avatar with an online status badge |
| `c-avatar-7` | Avatar with badge icon | registry:block | Avatar with badge icon |
| `c-avatar-8` | Avatar with different badge positions | registry:block | Avatar with different badge positions |
| `c-avatar-9` | Avatar with different badge positions | registry:block | Avatar with different badge positions |
| `c-avatar-10` | Basic avatar group | registry:block | Basic avatar group |
| `c-avatar-11` | Avatar group with numerical count | registry:block | Avatar group with numerical count |
| `c-avatar-12` | Avatar group with an icon count | registry:block | Avatar group with an icon count |
| `c-avatar-13` | Avatar with a distinct border ring | registry:block | Avatar with a distinct border ring |
| `c-avatar-14` | Avatar with light background color fallback | registry:block | Avatar with light background color fallback |
| `c-avatar-15` | Avatar with a solid background color fallback | registry:block | Avatar with a solid background color fallback |
| `c-avatar-16` | Avatar with user details and badge | registry:block | Avatar with user details and badge |
| `c-avatar-17` | Avatar with grayscale image filter | registry:block | Avatar with grayscale image filter |
| `c-avatar-18` | Avatar group with online status on one | registry:block | Avatar group with online status on one |
| `c-avatar-19` | Avatar inside small outline button | registry:block | Avatar inside small outline button |
| `c-avatar-20` | Avatar social proof with text label | registry:block | Avatar social proof with text label |
| `c-avatar-21` | Compact social proof with initials | registry:block | Compact social proof with initials |
| `c-avatar-22` | Avatar group with hover tooltips and lift effect | registry:block | Avatar group with hover tooltips and lift effect |
| `c-avatar-23` | Avatar group with hover effect | registry:block | Avatar group with hover effect |
| `c-avatar-24` | Avatar group with hover effect and tooltips | registry:block | Avatar group with hover effect and tooltips |
| `c-avatar-25` | Avatar group with numerical count | registry:block | Avatar group with numerical count |
| `c-avatar-26` | Pilled small outline button with avatar | registry:block | Pilled small outline button with avatar |
| `c-avatar-27` | Pilled small button with avatar | registry:block | Pilled small button with avatar |
| `c-avatar-28` | Avatar inside an empty state example | registry:block | Avatar inside an empty state example |
| `c-avatar-29` | Avatar group with icon count and button | registry:block | Avatar group with icon count and button |
| `c-avatar-30` | Avatar with loading state demonstration | registry:block | Avatar with loading state demonstration |
| `c-avatar-31` | Avatar with custom badge | registry:block | Avatar with custom badge |
| `c-avatar-32` | Avatar with ring animation | registry:block | Avatar with ring animation |
| `c-avatar-33` | Avatar with gradient animated ring | registry:block | Avatar with gradient animated ring |
| `c-avatar-34` | Avatar with multiple badges | registry:block | Avatar with multiple badges |
| `c-avatar-35` | Compact avatar dropdown menu | registry:block | Compact avatar dropdown menu |

## Source

### Basic avatar (`c-avatar-1`)

Target: `components/examples/c-avatar-1.tsx`

Basic avatar

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
        alt="Michael Rodriguez"
      />
      <AvatarFallback>MR</AvatarFallback>
    </Avatar>
  )
}
```

### Avatar with fallback (`c-avatar-2`)

Target: `components/examples/c-avatar-2.tsx`

Avatar with fallback

```tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <IconPlaceholder
            lucide="UserIcon"
            tabler="IconUser"
            hugeicons="UserIcon"
            phosphor="UserIcon"
            remixicon="RiUserLine"
            className="size-4"
            aria-hidden="true"
          />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatars with different sizes (`c-avatar-3`)

Target: `components/examples/c-avatar-3.tsx`

Avatars with different sizes

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar size="sm">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatars with different border radiuses (`c-avatar-4`)

Target: `components/examples/c-avatar-4.tsx`

Avatars with different border radiuses

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="rounded-md after:rounded-md">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
          className="rounded-md"
        />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg after:rounded-lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
          className="rounded-lg"
        />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg after:rounded-xl">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
          className="rounded-xl"
        />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
        />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatars with custom sizes (`c-avatar-5`)

Target: `components/examples/c-avatar-5.tsx`

Avatars with custom sizes

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-4">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatar with an online status badge (`c-avatar-6`)

Target: `components/examples/c-avatar-6.tsx`

Avatar with an online status badge

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"
          alt="Nick Johnson"
        />
        <AvatarFallback>AJ</AvatarFallback>
        <AvatarBadge className="bg-primary" />
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson (away)"
        />
        <AvatarFallback>AJ</AvatarFallback>
        <AvatarBadge className="bg-green-500" />
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge className="bg-yellow-500" />
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
        <AvatarBadge className="bg-destructive" />
      </Avatar>
    </div>
  )
}
```

### Avatar with badge icon (`c-avatar-7`)

Target: `components/examples/c-avatar-7.tsx`

Avatar with badge icon

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"
          alt="Nick Johnson"
        />
        <AvatarFallback>NJ</AvatarFallback>
        <AvatarBadge>
          <IconPlaceholder
            lucide="PlusIcon"
            tabler="IconPlus"
            hugeicons="PlusSignIcon"
            phosphor="PlusIcon"
            remixicon="RiAddLine"
            aria-hidden="true"
          />
        </AvatarBadge>
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson (away)"
        />
        <AvatarFallback>AJ</AvatarFallback>
        <AvatarBadge className="bg-success">
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            aria-hidden="true"
          />
        </AvatarBadge>
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge className="bg-warning">
          <IconPlaceholder
            lucide="StarIcon"
            tabler="IconStar"
            hugeicons="StarIcon"
            phosphor="StarIcon"
            remixicon="RiStarLine"
            aria-hidden="true"
          />
        </AvatarBadge>
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
        <AvatarBadge className="bg-info">
          <IconPlaceholder
            lucide="ShieldCheckIcon"
            tabler="IconShieldCheck"
            hugeicons="ShieldEnergyIcon"
            phosphor="ShieldCheckIcon"
            remixicon="RiShieldCheckLine"
            aria-hidden="true"
          />
        </AvatarBadge>
      </Avatar>
    </div>
  )
}
```

### Avatar with different badge positions (`c-avatar-8`)

Target: `components/examples/c-avatar-8.tsx`

Avatar with different badge positions

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson (away)"
        />
        <AvatarFallback>AJ</AvatarFallback>
        <AvatarBadge className="top-0 right-0 bg-green-500" />
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge className="bg-yellow-500" />
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
        <AvatarBadge className="bg-destructive top-0 right-auto left-0" />
      </Avatar>
      <Avatar className="relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
        />
        <AvatarFallback>EW</AvatarFallback>
        <AvatarBadge className="right-auto left-0 bg-blue-500" />
      </Avatar>
    </div>
  )
}
```

### Avatar with different badge positions (`c-avatar-9`)

Target: `components/examples/c-avatar-9.tsx`

Avatar with different badge positions

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="rounded-md relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson (away)"
          className="rounded-md"
        />
        <AvatarFallback>AJ</AvatarFallback>
        <AvatarBadge className="-top-1 -right-1 bg-green-500" />
      </Avatar>
      <Avatar className="rounded-md relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
          className="rounded-md"
        />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge className="-right-1 -bottom-1 bg-yellow-500" />
      </Avatar>
      <Avatar className="rounded-md relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
          className="rounded-md"
        />
        <AvatarFallback>MR</AvatarFallback>
        <AvatarBadge className="bg-destructive -top-1 right-auto bottom-auto -left-1" />
      </Avatar>
      <Avatar className="rounded-md relative">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
          className="rounded-md"
        />
        <AvatarFallback>EW</AvatarFallback>
        <AvatarBadge className="right-auto -bottom-1 -left-1 bg-blue-500" />
      </Avatar>
    </div>
  )
}
```

### Basic avatar group (`c-avatar-10`)

Target: `components/examples/c-avatar-10.tsx`

Basic avatar group

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson (away)"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}
```

### Avatar group with numerical count (`c-avatar-11`)

Target: `components/examples/c-avatar-11.tsx`

Avatar group with numerical count

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
        />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}
```

### Avatar group with an icon count (`c-avatar-12`)

Target: `components/examples/c-avatar-12.tsx`

Avatar group with an icon count

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"
          alt="Nick Johnson"
        />
        <AvatarFallback>NJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson (away)"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <IconPlaceholder
          lucide="PlusIcon"
          tabler="IconPlus"
          hugeicons="PlusSignIcon"
          phosphor="PlusIcon"
          remixicon="RiAddLine"
          aria-hidden="true"
        />
      </AvatarGroupCount>
    </AvatarGroup>
  )
}
```

### Avatar with a distinct border ring (`c-avatar-13`)

Target: `components/examples/c-avatar-13.tsx`

Avatar with a distinct border ring

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="ring-primary ring-offset-background size-8 ring-2 ring-offset-2">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <Avatar className="ring-destructive ring-offset-background size-8 ring-2 ring-offset-2">
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar className="ring-offset-background size-8 ring-2 ring-violet-500 ring-offset-2">
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <Avatar className="ring-offset-background size-8 ring-2 ring-yellow-500 ring-offset-2">
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
        />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatar with light background color fallback (`c-avatar-14`)

Target: `components/examples/c-avatar-14.tsx`

Avatar with light background color fallback

```tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="after:border-primary/10">
        <AvatarFallback className="bg-primary/10 text-primary">
          AB
        </AvatarFallback>
      </Avatar>
      <Avatar className="after:border-destructive/10">
        <AvatarFallback className="bg-destructive/10 text-destructive">
          DV
        </AvatarFallback>
      </Avatar>
      <Avatar className="after:border-green-200 dark:after:border-green-600">
        <AvatarFallback className="bg-green-50 text-green-600 dark:bg-green-900">
          SB
        </AvatarFallback>
      </Avatar>
      <Avatar className="after:border-fuchsia-200 dark:after:border-fuchsia-600">
        <AvatarFallback className="bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900">
          DB
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatar with a solid background color fallback (`c-avatar-15`)

Target: `components/examples/c-avatar-15.tsx`

Avatar with a solid background color fallback

```tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="after:border-primary">
        <AvatarFallback className="bg-primary text-primary-foreground">
          AB
        </AvatarFallback>
      </Avatar>
      <Avatar className="after:border-destructive">
        <AvatarFallback className="bg-destructive text-white">
          AB
        </AvatarFallback>
      </Avatar>
      <Avatar className="after:border-green-500">
        <AvatarFallback className="bg-green-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar className="after:border-blue-500">
        <AvatarFallback className="bg-blue-500 text-white">CB</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatar with user details and badge (`c-avatar-16`)

Target: `components/examples/c-avatar-16.tsx`

Avatar with user details and badge

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center gap-1.5">
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
          alt="Alex Johnson"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold">Alex Johnson</span>
          <Badge variant="default" size="xs">
            Pro
          </Badge>
        </div>
        <span className="text-muted-foreground text-xs">Founder & CEO</span>
      </div>
    </div>
  )
}
```

### Avatar with grayscale image filter (`c-avatar-17`)

Target: `components/examples/c-avatar-17.tsx`

Avatar with grayscale image filter

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

### Avatar group with online status on one (`c-avatar-18`)

Target: `components/examples/c-avatar-18.tsx`

Avatar group with online status on one

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
          alt="Sarah Chen"
        />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge className="bg-success" />
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
          alt="Michael Rodriguez"
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
          alt="Emma Wilson"
        />
        <AvatarFallback>EW</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}
```

### Avatar inside small outline button (`c-avatar-19`)

Target: `components/examples/c-avatar-19.tsx`

Avatar inside small outline button

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button variant="outline" size="sm" className="gap-1.5">
      <Avatar className="size-5">
        <AvatarImage
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&q=80"
          alt="@nick.bold"
        />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <span className="text-xs">@nick.bold</span>
    </Button>
  )
}
```

### Avatar social proof with text label (`c-avatar-20`)

Target: `components/examples/c-avatar-20.tsx`

Avatar social proof with text label

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="border-border rounded-full flex items-center gap-1.5 border p-1 shadow-sm shadow-black/5">
      <AvatarGroup>
        <Avatar className="size-7">
          <AvatarImage
            src="https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80"
            alt="Liam Thompson"
          />
          <AvatarFallback>LT</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"
            alt="Nick Johnson"
          />
          <AvatarFallback>NJ</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage
            src="https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80"
            alt="Maria Garcia"
          />
          <AvatarFallback>MG</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
      </AvatarGroup>

      <p className="text-muted-foreground me-1.5 text-xs">
        Trusted by <span className="text-foreground font-semibold">100K+</span>{" "}
        users.
      </p>
    </div>
  )
}
```

### Compact social proof with initials (`c-avatar-21`)

Target: `components/examples/c-avatar-21.tsx`

Compact social proof with initials

```tsx
import { Frame, FramePanel } from "@/components/reui/frame"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <Frame>
      <FramePanel className="flex items-center gap-2 p-2!">
        <AvatarGroup>
          <Avatar className="size-7">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <Avatar className="size-7">
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <Avatar className="size-7">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <Avatar className="size-7">
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
        </AvatarGroup>

        <p className="text-muted-foreground me-1.5 text-xs">
          Joined by <span className="text-foreground font-semibold">500+</span>{" "}
          developers.
        </p>
      </FramePanel>
    </Frame>
  )
}
```

### Avatar group with hover tooltips and lift effect (`c-avatar-22`)

Target: `components/examples/c-avatar-22.tsx`

Avatar group with hover tooltips and lift effect

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    fallback: "DK",
    name: "David Kim",
  },
  {
    src: "https://github.com/maxleiter.png",
    fallback: "ML",
    name: "Max Leiter",
  },
  {
    src: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    fallback: "ER",
    name: "James Brown",
  },
  {
    src: "https://github.com/pranathip.png",
    fallback: "JW",
    name: "Jenny Wilson",
  },
]

export function Pattern() {
  return (
    <TooltipProvider>
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <Avatar className="ring-background ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md">
                <AvatarImage src={avatar.src} alt={avatar.name} />
                <AvatarFallback className="text-xs">
                  {avatar.fallback}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>{avatar.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
```

### Avatar group with hover effect (`c-avatar-23`)

Target: `components/examples/c-avatar-23.tsx`

Avatar group with hover effect

```tsx
import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    fallback: "DK",
    name: "David Kim",
  },
  {
    src: "https://github.com/maxleiter.png",
    fallback: "ML",
    name: "Max Leiter",
  },
  {
    src: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    fallback: "ER",
    name: "James Brown",
  },
  {
    src: "https://github.com/pranathip.png",
    fallback: "JW",
    name: "Jenny Wilson",
  },
]

export function Pattern() {
  return (
    <div className="group/avatars flex items-center px-2 py-4">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          style={
            {
              "--index": index,
              zIndex: avatars.length - index,
            } as React.CSSProperties
          }
          className="group/avatar-item translate-x-[calc(var(--index)*-8px)] transition-all duration-300 ease-in-out will-change-transform group-hover/avatars:translate-x-[calc(var(--index)*6px)]"
        >
          <Avatar
            className={cn(
              "ring-background origin-center ring-2 transition-transform duration-300 ease-in-out",
              "group-hover/avatar-item:scale-110"
            )}
          >
            <AvatarImage src={avatar.src} alt={avatar.name} />
            <AvatarFallback className="text-xs">
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        </div>
      ))}
    </div>
  )
}
```

### Avatar group with hover effect and tooltips (`c-avatar-24`)

Target: `components/examples/c-avatar-24.tsx`

Avatar group with hover effect and tooltips

```tsx
import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    fallback: "DK",
    name: "David Kim",
  },
  {
    src: "https://github.com/maxleiter.png",
    fallback: "ML",
    name: "Max Leiter",
  },
  {
    src: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    fallback: "ER",
    name: "James Brown",
  },
  {
    src: "https://github.com/pranathip.png",
    fallback: "JW",
    name: "Jenny Wilson",
  },
]

export function Pattern() {
  return (
    <TooltipProvider>
      <div className="group/avatars flex items-center px-2 py-4">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            style={
              {
                "--index": index,
                zIndex: avatars.length - index,
              } as React.CSSProperties
            }
            className="group/avatar-item translate-x-[calc(var(--index)*-8px)] transition-all duration-300 ease-in-out will-change-transform group-hover/avatars:translate-x-[calc(var(--index)*6px)]"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar
                  className={cn(
                    "ring-background origin-center ring-2 transition-transform duration-300 ease-in-out",
                    "group-hover/avatar-item:scale-110"
                  )}
                >
                  <AvatarImage src={avatar.src} alt={avatar.name} />
                  <AvatarFallback className="text-xs">
                    {avatar.fallback}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>{avatar.name}</TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
```

### Avatar group with numerical count (`c-avatar-25`)

Target: `components/examples/c-avatar-25.tsx`

Avatar group with numerical count

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="border-border flex items-center gap-1.5 rounded-full border p-0.5 shadow-sm shadow-black/5">
      <div className="flex -space-x-1.5">
        <Avatar className="border-background size-7 border-2">
          <AvatarImage
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
            alt="Alex Johnson"
          />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <Avatar className="border-background size-7 border-2">
          <AvatarImage
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
            alt="Sarah Chen"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Avatar className="border-background size-7 border-2">
          <AvatarImage
            src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
            alt="Michael Rodriguez"
          />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <Avatar className="border-background size-7 border-2">
          <AvatarImage
            src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
            alt="Emma Wilson"
          />
          <AvatarFallback>EW</AvatarFallback>
        </Avatar>
      </div>

      <p className="text-muted-foreground me-1.5 text-xs">+3</p>
    </div>
  )
}
```

### Pilled small outline button with avatar (`c-avatar-26`)

Target: `components/examples/c-avatar-26.tsx`

Pilled small outline button with avatar

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full gap-1 pl-0.5"
    >
      <Avatar className="border-background size-6 border-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <span className="text-xs">@shadcn</span>
    </Button>
  )
}
```

### Pilled small button with avatar (`c-avatar-27`)

Target: `components/examples/c-avatar-27.tsx`

Pilled small button with avatar

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button
      size="sm"
      className="rounded-full gap-1 pl-0.5"
    >
      <Avatar className="border-primary size-6 border">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <span className="text-xs">@shadcn</span>
    </Button>
  )
}
```

### Avatar inside an empty state example (`c-avatar-28`)

Target: `components/examples/c-avatar-28.tsx`

Avatar inside an empty state example

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <AvatarGroup>
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
            alt="sarah@example.com"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
            className="grayscale"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
            className="grayscale"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount aria-label="Add collaborator">
          <IconPlaceholder
            lucide="UserPlusIcon"
            tabler="IconUserPlus"
            hugeicons="UserAdd01Icon"
            phosphor="UserPlusIcon"
            remixicon="RiUserAddLine"
            aria-hidden="true"
          />
        </AvatarGroupCount>
      </AvatarGroup>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">No active collaborators</h3>
        <p className="text-muted-foreground text-xs">
          Invite teammates to start working together.
        </p>
      </div>
    </div>
  )
}
```

### Avatar group with icon count and button (`c-avatar-29`)

Target: `components/examples/c-avatar-29.tsx`

Avatar group with icon count and button

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
              alt="emma@example.com"
            />
            <AvatarFallback>EW</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="outline" size="icon" className="rounded-full">
              <IconPlaceholder
                lucide="PlusIcon"
                tabler="IconPlus"
                hugeicons="PlusSignIcon"
                phosphor="PlusIcon"
                remixicon="RiAddLine"
                aria-hidden="true"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add user</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
```

### Avatar with loading state demonstration (`c-avatar-30`)

Target: `components/examples/c-avatar-30.tsx`

Avatar with loading state demonstration

```tsx
"use client"

import { useEffect, useState } from "react"

import { Spinner } from "@/components/ui/spinner"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setLoading((prev) => !prev), 2000) // Toggle loading state every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {loading && (
        <div className="bg-background/60 absolute inset-0 flex items-center justify-center rounded-full">
          <Spinner className="text-primary" />
        </div>
      )}
    </div>
  )
}
```

### Avatar with custom badge (`c-avatar-31`)

Target: `components/examples/c-avatar-31.tsx`

Avatar with custom badge

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const CustomBadge = () => {
  return (
    <svg viewBox="0 0 15 16" className="size-4">
      <path
        className="fill-blue-500"
        d="M14.5425 6.8973L13.5 5.8398C13.4273 5.76858 13.3699 5.68331 13.3312 5.58919C13.2925 5.49507 13.2734 5.39405 13.275 5.2923V3.7923C13.274 3.58681 13.2324 3.38353 13.1527 3.19414C13.0729 3.00476 12.9565 2.833 12.8101 2.68874C12.6638 2.54448 12.4904 2.43055 12.2998 2.35351C12.1093 2.27647 11.9055 2.23783 11.7 2.2398H10.2C10.0982 2.24141 9.99722 2.22228 9.9031 2.1836C9.80898 2.14492 9.72371 2.08749 9.65249 2.0148L8.60249 0.957304C8.30998 0.665106 7.91344 0.500977 7.49999 0.500977C7.08654 0.500977 6.68999 0.665106 6.39749 0.957304L5.33999 1.9998C5.26876 2.07249 5.1835 2.12992 5.08937 2.1686C4.99525 2.20728 4.89424 2.22641 4.79249 2.2248H3.29249C3.08699 2.22578 2.88371 2.26735 2.69432 2.34713C2.50494 2.4269 2.33318 2.54331 2.18892 2.68966C2.04466 2.83602 1.93073 3.00943 1.85369 3.19994C1.77665 3.39046 1.73801 3.59431 1.73999 3.7998V5.2998C1.74159 5.40155 1.72247 5.50256 1.68378 5.59669C1.6451 5.69081 1.58767 5.77608 1.51499 5.8473L0.457487 6.8973C0.165289 7.18981 0.00115967 7.58635 0.00115967 7.9998C0.00115967 8.41325 0.165289 8.80979 0.457487 9.1023L1.49999 10.1598C1.57267 10.231 1.6301 10.3163 1.66878 10.4104C1.70747 10.5045 1.72659 10.6056 1.72499 10.7073V12.2073C1.72597 12.4128 1.76754 12.6161 1.84731 12.8055C1.92709 12.9949 2.04349 13.1666 2.18985 13.3109C2.3362 13.4551 2.50961 13.5691 2.70013 13.6461C2.89064 13.7231 3.0945 13.7618 3.29999 13.7598H4.79999C4.90174 13.7582 5.00275 13.7773 5.09687 13.816C5.191 13.8547 5.27627 13.9121 5.34749 13.9848L6.40499 15.0423C6.69749 15.3345 7.09404 15.4986 7.50749 15.4986C7.92094 15.4986 8.31748 15.3345 8.60999 15.0423L9.65999 13.9998C9.73121 13.9271 9.81647 13.8697 9.9106 13.831C10.0047 13.7923 10.1057 13.7732 10.2075 13.7748H11.7075C12.1212 13.7748 12.518 13.6104 12.8106 13.3179C13.1031 13.0253 13.2675 12.6285 13.2675 12.2148V10.7148C13.2659 10.6131 13.285 10.512 13.3237 10.4179C13.3624 10.3238 13.4198 10.2385 13.4925 10.1673L14.55 9.1098C14.6953 8.96434 14.8104 8.79157 14.8887 8.60146C14.9671 8.41134 15.007 8.20761 15.0063 8.00199C15.0056 7.79638 14.9643 7.59293 14.8847 7.40334C14.8051 7.21376 14.6888 7.04178 14.5425 6.8973Z"
      />
      <path
        className="fill-white"
        d="M10.635 6.6498L6.95249 10.2498C6.90055 10.3024 6.83864 10.3441 6.77038 10.3724C6.70212 10.4007 6.62889 10.4152 6.55499 10.4148C6.48062 10.4138 6.40719 10.398 6.33896 10.3684C6.27073 10.3388 6.20905 10.2959 6.15749 10.2423L4.37999 8.4423C4.32532 8.39026 4.28169 8.32775 4.25169 8.25849C4.22169 8.18923 4.20593 8.11464 4.20536 8.03916C4.20479 7.96369 4.21941 7.88887 4.24836 7.81916C4.27731 7.74946 4.31999 7.68629 4.37387 7.63342C4.42774 7.58056 4.4917 7.53908 4.56194 7.51145C4.63218 7.48382 4.70726 7.47061 4.78271 7.4726C4.85816 7.4746 4.93244 7.49176 5.00112 7.52306C5.0698 7.55436 5.13148 7.59917 5.18249 7.6548L6.56249 9.0573L9.84749 5.8473C9.95296 5.74197 10.0959 5.6828 10.245 5.6828C10.394 5.6828 10.537 5.74197 10.6425 5.8473C10.6953 5.90016 10.737 5.963 10.7653 6.03216C10.7935 6.10132 10.8077 6.17542 10.807 6.25013C10.8063 6.32483 10.7908 6.39865 10.7612 6.46728C10.7317 6.5359 10.6888 6.59795 10.635 6.6498Z"
      />
    </svg>
  )
}

export function Pattern() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar size="lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"
          alt="Aron Thompson"
        />
        <AvatarFallback>AT</AvatarFallback>
        <span className="absolute -bottom-0.5 -left-0.5">
          <CustomBadge />
        </span>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"
          alt="Aron Thompson"
        />
        <AvatarFallback>AT</AvatarFallback>
        <span className="absolute -top-0.5 -left-0.5">
          <CustomBadge />
        </span>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"
          alt="Aron Thompson"
        />
        <AvatarFallback>AT</AvatarFallback>
        <span className="absolute -right-0.5 -bottom-0.5">
          <CustomBadge />
        </span>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"
          alt="James Brown"
        />
        <AvatarFallback>JB</AvatarFallback>
        <span className="absolute -top-0.5 -right-0.5">
          <CustomBadge />
        </span>
      </Avatar>
    </div>
  )
}
```

### Avatar with ring animation (`c-avatar-32`)

Target: `components/examples/c-avatar-32.tsx`

Avatar with ring animation

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="relative w-fit">
      <Avatar className="ring-offset-background animate-pulse ring-2 ring-green-500 ring-offset-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="border-background absolute -right-1 -bottom-1 size-3 rounded-full border-2 bg-green-500" />
    </div>
  )
}
```

### Avatar with gradient animated ring (`c-avatar-33`)

Target: `components/examples/c-avatar-33.tsx`

Avatar with gradient animated ring

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <div className="group/avatar relative flex items-center justify-center">
      {/* Animated Story Ring */}
      <div className="absolute -inset-1 animate-[spin_3s_linear_infinite] rounded-full bg-linear-to-tr from-yellow-400 via-fuchsia-500 to-violet-600 opacity-75 blur-xs transition-all duration-500 group-hover/avatar:opacity-100 group-hover/avatar:blur-sm" />

      {/* Main Avatar */}
      <Avatar className="ring-background size-10 ring-2 transition-transform duration-500 group-hover/avatar:scale-95">
        <AvatarImage src="https://github.com/shadcn.png" alt="User story" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Avatar with multiple badges (`c-avatar-34`)

Target: `components/examples/c-avatar-34.tsx`

Avatar with multiple badges

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  return (
    <Avatar className="relative">
      <AvatarImage
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
        alt="Alex Johnson"
      />
      <AvatarFallback>JB</AvatarFallback>
      <AvatarBadge className="bg-green-500" />
      <span className="border-background absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border-2 bg-red-500 text-xs font-medium text-white">
        3
      </span>
    </Avatar>
  )
}
```

### Compact avatar dropdown menu (`c-avatar-35`)

Target: `components/examples/c-avatar-35.tsx`

Compact avatar dropdown menu

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full h-8 gap-1.5 pr-2.5 pl-1"
        >
          <Avatar className="border-background size-6 border">
            <AvatarImage
              src="https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80"
              alt="Liam Thompson"
            />
            <AvatarFallback>LT</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium">Liam Thompson</span>
          <IconPlaceholder
            lucide="ChevronsUpDownIcon"
            tabler="IconSelector"
            hugeicons="UnfoldMoreIcon"
            phosphor="CaretUpDownIcon"
            remixicon="RiExpandUpDownLine"
            className="size-3.5 opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="center" sideOffset={8}>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Management</DropdownMenuLabel>
          <DropdownMenuItem>
            <IconPlaceholder
              lucide="UserIcon"
              tabler="IconUser"
              hugeicons="UserIcon"
              phosphor="UserIcon"
              remixicon="RiUserLine"
              aria-hidden="true"
            />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              lucide="SettingsIcon"
              tabler="IconSettings"
              hugeicons="SettingsIcon"
              phosphor="GearIcon"
              remixicon="RiSettings3Line"
              aria-hidden="true"
            />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder
              lucide="UserIcon"
              tabler="IconUser"
              hugeicons="UserIcon"
              phosphor="UserIcon"
              remixicon="RiUserLine"
              aria-hidden="true"
            />
            <span>Teams</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              lucide="PlusIcon"
              tabler="IconPlus"
              hugeicons="PlusSignIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
              aria-hidden="true"
            />
            <span>Invite</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <IconPlaceholder
            lucide="LogOutIcon"
            tabler="IconLogout"
            hugeicons="LogoutSquare01Icon"
            phosphor="SignOutIcon"
            remixicon="RiLogoutBoxRLine"
            aria-hidden="true"
          />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```
