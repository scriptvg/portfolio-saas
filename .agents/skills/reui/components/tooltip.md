# Tooltip (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

16 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-tooltip-1` | Basic tooltip. | registry:block | Basic tooltip. |
| `c-tooltip-2` | Tooltips opening from different sides. | registry:block | Tooltips opening from different sides. |
| `c-tooltip-3` | Tooltip with icon trigger. | registry:block | Tooltip with icon trigger. |
| `c-tooltip-4` | Tooltip with keyboard shortcut. | registry:block | Tooltip with keyboard shortcut. |
| `c-tooltip-5` | Tooltip on notification bell with badge count | registry:block | Tooltip on notification bell with badge count |
| `c-tooltip-6` | Tooltip with status badge | registry:block | Tooltip with status badge |
| `c-tooltip-7` | Tooltip with icon and description | registry:block | Tooltip with icon and description |
| `c-tooltip-8` | Toolbar with tooltip actions | registry:block | Toolbar with tooltip actions |
| `c-tooltip-9` | Tooltip with warning badge | registry:block | Tooltip with warning badge |
| `c-tooltip-10` | Tooltip with feature badge and upgrade link | registry:block | Tooltip with feature badge and upgrade link |
| `c-tooltip-11` | Tooltip with avatar and role badge | registry:block | Tooltip with avatar and role badge |
| `c-tooltip-12` | Tooltip on disabled button with wrapper | registry:block | Tooltip on disabled button with wrapper |
| `c-tooltip-13` | Tooltip with online status indicator | registry:block | Tooltip with online status indicator |
| `c-tooltip-14` | Tooltip with file info and badges | registry:block | Tooltip with file info and badges |
| `c-tooltip-15` | Tooltip with label badges | registry:block | Tooltip with label badges |
| `c-tooltip-16` | Tooltip with action button inside | registry:block | Tooltip with action button inside |

## Source

### Basic tooltip. (`c-tooltip-1`)

Target: `components/examples/c-tooltip-1.tsx`

Basic tooltip.

```tsx
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-fit">
              Show Tooltip
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltips opening from different sides. (`c-tooltip-2`)

Target: `components/examples/c-tooltip-2.tsx`

Tooltips opening from different sides.

```tsx
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const sides = [
  "inline-start",
  "left",
  "top",
  "bottom",
  "right",
  "inline-end",
] as const

export function Pattern() {
  return (
    <TooltipProvider>
      <div className="grid max-w-xs grid-cols-3 gap-2">
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full">
                {side.replace("-", " ")[0].toUpperCase() +
                  side.replace("-", " ").slice(1)}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p className="text-sm">Add to library</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
```

### Tooltip with icon trigger. (`c-tooltip-3`)

Target: `components/examples/c-tooltip-3.tsx`

Tooltip with icon trigger.

```tsx
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
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="More information">
              <IconPlaceholder
                lucide="InfoIcon"
                tabler="IconInfoCircle"
                hugeicons="InformationCircleIcon"
                phosphor="InfoIcon"
                remixicon="RiInformationLine"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-center text-sm">
              Additional information and help context.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with keyboard shortcut. (`c-tooltip-4`)

Target: `components/examples/c-tooltip-4.tsx`

Tooltip with keyboard shortcut.

```tsx
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Save">
              <IconPlaceholder
                lucide="SaveIcon"
                tabler="IconDeviceFloppy"
                hugeicons="FloppyDiskIcon"
                phosphor="FloppyDiskIcon"
                remixicon="RiSaveLine"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="pr-1.5">
            <div className="flex items-center gap-2 text-sm">
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip on notification bell with badge count (`c-tooltip-5`)

Target: `components/examples/c-tooltip-5.tsx`

Tooltip on notification bell with badge count

```tsx
import { Badge } from "@/components/reui/badge"

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
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Notifications">
              <div className="relative">
                <IconPlaceholder
                  lucide="InfoIcon"
                  tabler="IconInfoCircle"
                  hugeicons="InformationCircleIcon"
                  phosphor="InfoIcon"
                  remixicon="RiInformationLine"
                />
                <Badge
                  variant="destructive"
                  size="xs"
                  className="absolute -top-3.5 -right-3.5"
                >
                  3
                </Badge>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="p-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium">Notifications</span>
                <Badge variant="destructive" size="xs">
                  3 new
                </Badge>
              </div>
              <div className="flex flex-col gap-1 opacity-80">
                <p>• Sarah commented on your PR</p>
                <p>• Build #421 completed</p>
                <p>• New team member joined</p>
              </div>
              <a
                href="#"
                className="flex items-center gap-1 font-medium underline underline-offset-2"
              >
                View all
                <IconPlaceholder
                  lucide="ArrowRightIcon"
                  tabler="IconArrowRight"
                  hugeicons="ArrowRightIcon"
                  phosphor="ArrowRightIcon"
                  remixicon="RiArrowRightLine"
                  className="size-3.5"
                />
              </a>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with status badge (`c-tooltip-6`)

Target: `components/examples/c-tooltip-6.tsx`

Tooltip with status badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-fit">
              System Status
            </Button>
          </TooltipTrigger>
          <TooltipContent className="p-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">API</span>
                <Badge variant="success" size="sm">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">Database</span>
                <Badge variant="info" size="sm">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">CDN</span>
                <Badge variant="warning" size="sm">
                  Degraded
                </Badge>
              </div>
              <p className="text-[10px] opacity-80">Updated 2 min ago</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with icon and description (`c-tooltip-7`)

Target: `components/examples/c-tooltip-7.tsx`

Tooltip with icon and description

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <p className="text-sm">
          Verified domain{" "}
          <Tooltip>
            <TooltipTrigger className="text-muted-foreground align-middle">
              <IconPlaceholder
                lucide="BadgeCheckIcon"
                tabler="IconRosetteDiscountCheck"
                hugeicons="CheckmarkBadge01Icon"
                phosphor="SealCheckIcon"
                remixicon="RiVerifiedBadgeLine"
                className="size-4 text-emerald-600"
                aria-hidden="true"
              />
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm">
                  Verified
                </Badge>
                <p>Domain ownership has been confirmed.</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </p>
      </TooltipProvider>
    </div>
  )
}
```

### Toolbar with tooltip actions (`c-tooltip-8`)

Target: `components/examples/c-tooltip-8.tsx`

Toolbar with tooltip actions

```tsx
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Bold">
                <IconPlaceholder
                  lucide="BoldIcon"
                  tabler="IconBold"
                  hugeicons="TextBoldIcon"
                  phosphor="TextBIcon"
                  remixicon="RiBold"
                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Italic">
                <IconPlaceholder
                  lucide="ItalicIcon"
                  tabler="IconItalic"
                  hugeicons="TextItalicIcon"
                  phosphor="TextItalicIcon"
                  remixicon="RiItalic"
                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Underline">
                <IconPlaceholder
                  lucide="UnderlineIcon"
                  tabler="IconUnderline"
                  hugeicons="TextUnderlineIcon"
                  phosphor="TextUnderlineIcon"
                  remixicon="RiUnderline"
                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Underline</TooltipContent>
          </Tooltip>
          <div className="flex items-center">
            <Separator
              orientation="vertical"
              className="mx-1 h-5 leading-none"
            />
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Image">
                <IconPlaceholder
                  lucide="ImageIcon"
                  tabler="IconPhoto"
                  hugeicons="ImageIcon"
                  phosphor="ImageIcon"
                  remixicon="RiImageLine"
                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Insert Image</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with warning badge (`c-tooltip-9`)

Target: `components/examples/c-tooltip-9.tsx`

Tooltip with warning badge

```tsx
import { Badge } from "@/components/reui/badge"

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
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Warning">
              <IconPlaceholder
                lucide="AlertTriangleIcon"
                tabler="IconAlertTriangle"
                hugeicons="Alert01Icon"
                phosphor="WarningIcon"
                remixicon="RiAlertLine"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2 text-sm">
              <IconPlaceholder
                lucide="AlertTriangleIcon"
                tabler="IconAlertTriangle"
                hugeicons="Alert02Icon"
                phosphor="WarningIcon"
                remixicon="RiAlertLine"
                className="size-4 shrink-0"
              />
              This action cannot be undone
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with feature badge and upgrade link (`c-tooltip-10`)

Target: `components/examples/c-tooltip-10.tsx`

Tooltip with feature badge and upgrade link

```tsx
import { Badge } from "@/components/reui/badge"

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
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Pro feature">
              <IconPlaceholder
                lucide="LockIcon"
                tabler="IconLock"
                hugeicons="SquareLock01Icon"
                phosphor="LockSimpleIcon"
                remixicon="RiLockLine"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-64 p-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Advanced Analytics
                </span>
                <Badge variant="success" size="sm">
                  Pro
                </Badge>
              </div>
              <p className="text-xs opacity-80">
                Unlock detailed insights, custom reports, and real-time
                dashboards.
              </p>
              <Button size="sm" className="border-border/40 border">
                Upgrade to Pro
                <IconPlaceholder
                  lucide="ArrowRightIcon"
                  tabler="IconArrowRight"
                  hugeicons="ArrowRight01Icon"
                  phosphor="ArrowRightIcon"
                  remixicon="RiArrowRightSLine"
                />
              </Button>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with avatar and role badge (`c-tooltip-11`)

Target: `components/examples/c-tooltip-11.tsx`

Tooltip with avatar and role badge

```tsx
import { Badge } from "@/components/reui/badge"

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

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
                alt="Emma Wilson"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-2 p-2">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
                alt="Emma Wilson"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                <span className="font-semibold">Emma Wilson</span>
                <Badge variant="info" size="xs">
                  Admin
                </Badge>
              </div>
              <p className="opacity-80">emma@example.com</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip on disabled button with wrapper (`c-tooltip-12`)

Target: `components/examples/c-tooltip-12.tsx`

Tooltip on disabled button with wrapper

```tsx
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="cursor-not-allowed">
              <Button variant="outline" disabled>
                Delete Project
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">You need admin access to delete projects</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with online status indicator (`c-tooltip-13`)

Target: `components/examples/c-tooltip-13.tsx`

Tooltip with online status indicator

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

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="relative cursor-pointer">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                alt="James Davis"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="border-background absolute right-0 bottom-0 block size-3 rounded-full border-2 bg-green-500" />
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-2 p-2">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                alt="James Davis"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">James Davis</span>
              <div className="flex items-center gap-1.5 opacity-80">
                <span className="block size-1.5 shrink-0 rounded-full bg-green-500" />
                Online now
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with file info and badges (`c-tooltip-14`)

Target: `components/examples/c-tooltip-14.tsx`

Tooltip with file info and badges

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <div className="flex items-center gap-1">
              <IconPlaceholder
                lucide="FileTextIcon"
                tabler="IconFileText"
                hugeicons="File01Icon"
                phosphor="FileTextIcon"
                remixicon="RiFileTextLine"
                className="size-4"
                aria-hidden="true"
              />
              <span className="text-sm">report-q4.pdf</span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-md flex size-8 shrink-0 items-center justify-center">
                  <IconPlaceholder
                    lucide="FileTextIcon"
                    tabler="IconFileText"
                    hugeicons="File01Icon"
                    phosphor="FileTextIcon"
                    remixicon="RiFileTextLine"
                    className="text-muted-foreground size-4"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">report-q4.pdf</span>
                  <span className="opacity-80">
                    2.4 MB &middot; Uploaded 3 days ago
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Badge variant="info" size="xs">
                  PDF
                </Badge>
                <Badge variant="success" size="xs">
                  Verified
                </Badge>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with label badges (`c-tooltip-15`)

Target: `components/examples/c-tooltip-15.tsx`

Tooltip with label badges

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <div className="flex items-center gap-1.5 text-sm">
              <IconPlaceholder
                lucide="TagIcon"
                tabler="IconTag"
                hugeicons="Tag01Icon"
                phosphor="TagIcon"
                remixicon="RiPriceTag3Line"
                className="size-3.5"
                aria-hidden="true"
              />
              3 labels
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-3">
            <div className="flex flex-col gap-2">
              <span className="font-medium">Labels</span>
              <div className="flex items-center gap-1.5">
                <Badge variant="destructive" size="xs">
                  Bug
                </Badge>
                <Badge variant="info" size="xs">
                  Frontend
                </Badge>
                <Badge variant="warning" size="xs">
                  High Priority
                </Badge>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Tooltip with action button inside (`c-tooltip-16`)

Target: `components/examples/c-tooltip-16.tsx`

Tooltip with action button inside

```tsx
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
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <div className="relative">
                <IconPlaceholder
                  lucide="BellIcon"
                  tabler="IconBell"
                  hugeicons="NotificationIcon"
                  phosphor="BellIcon"
                  remixicon="RiNotificationLine"
                />
                <span className="bg-destructive absolute -top-1 -right-1 block size-2 rounded-full" />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex flex-col gap-1.5">
              <p className="text-sm font-medium">3 new notifications</p>
              <a
                href="#"
                className="text-xs font-medium underline underline-offset-2"
              >
                View all &rarr;
              </a>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```
