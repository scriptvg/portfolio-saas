# Button (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

61 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-button-1` | Default button | registry:block | Default button |
| `c-button-2` | Secondary button | registry:block | Secondary button |
| `c-button-3` | Outline button | registry:block | Outline button |
| `c-button-4` | Ghost button | registry:block | Ghost button |
| `c-button-5` | Destructive button | registry:block | Destructive button |
| `c-button-6` | Link button variant | registry:block | Link button variant |
| `c-button-7` | Extra small button | registry:block | Extra small button |
| `c-button-8` | Small button | registry:block | Small button |
| `c-button-9` | Large button | registry:block | Large button |
| `c-button-10` | Disabled button | registry:block | Disabled button |
| `c-button-11` | Icon button | registry:block | Icon button |
| `c-button-12` | Button with an icon on the right | registry:block | Button with an icon on the right |
| `c-button-13` | Button in a loading state | registry:block | Button in a loading state |
| `c-button-14` | Button with an icon on the left | registry:block | Button with an icon on the left |
| `c-button-15` | Button with an invalid state highlight | registry:block | Button with an invalid state highlight |
| `c-button-16` | Secondary button with an icon on the left | registry:block | Secondary button with an icon on the left |
| `c-button-17` | Secondary button with an icon on the right | registry:block | Secondary button with an icon on the right |
| `c-button-18` | Outline button with an icon on the left | registry:block | Outline button with an icon on the left |
| `c-button-19` | Outline button with an icon on the right | registry:block | Outline button with an icon on the right |
| `c-button-20` | Ghost button with an icon on the left | registry:block | Ghost button with an icon on the left |
| `c-button-21` | Ghost button with an icon on the right | registry:block | Ghost button with an icon on the right |
| `c-button-22` | Destructive button with an icon on the left | registry:block | Destructive button with an icon on the left |
| `c-button-23` | Destructive button with an icon on the right | registry:block | Destructive button with an icon on the right |
| `c-button-24` | Extra small icon button | registry:block | Extra small icon button |
| `c-button-25` | Small icon button | registry:block | Small icon button |
| `c-button-26` | Large (lg) icon-only button | registry:block | Large (lg) icon-only button |
| `c-button-27` | Button rendered as a Next.js Link | registry:block | Button rendered as a Next.js Link |
| `c-button-28` | Link button with an icon on the left | registry:block | Link button with an icon on the left |
| `c-button-29` | Link button with an icon on the right | registry:block | Link button with an icon on the right |
| `c-button-30` | Large button with an icon on the left | registry:block | Large button with an icon on the left |
| `c-button-31` | Large button with an icon on the right | registry:block | Large button with an icon on the right |
| `c-button-32` | Outline button with an invalid state | registry:block | Outline button with an invalid state |
| `c-button-33` | Ghost button with an invalid state | registry:block | Ghost button with an invalid state |
| `c-button-34` | Button with an icon on the left | registry:block | Button with an icon on the left |
| `c-button-35` | Ghost button with more/less toggle | registry:block | Ghost button with more/less toggle |
| `c-button-36` | Social login buttons with Remix Icons | registry:block | Social login buttons with Remix Icons |
| `c-button-37` | Outline like button with count | registry:block | Outline like button with count |
| `c-button-38` | Star button with count | registry:block | Star button with count |
| `c-button-39` | Button with an unread badge | registry:block | Button with an unread badge |
| `c-button-40` | Button with icon, label, and shortcut keys | registry:block | Button with icon, label, and shortcut keys |
| `c-button-41` | Copy button with feedback | registry:block | Copy button with feedback |
| `c-button-42` | Icon-only copy button with feedback | registry:block | Icon-only copy button with feedback |
| `c-button-43` | Animated hamburger / close toggle button | registry:block | Animated hamburger / close toggle button |
| `c-button-44` | Async action button with loading and success states | registry:block | Async action button with loading and success states |
| `c-button-45` | Outline button with inline count badge | registry:block | Outline button with inline count badge |
| `c-button-46` | Button with status dot badge | registry:block | Button with status dot badge |
| `c-button-47` | Ghost button with a status badge | registry:block | Ghost button with a status badge |
| `c-button-48` | Icon button with notification badge | registry:block | Icon button with notification badge |
| `c-button-49` | Go back link button | registry:block | Go back link button |
| `c-button-50` | Go back link button with animation | registry:block | Go back link button with animation |
| `c-button-51` | Expanding button from icon to label | registry:block | Expanding button from icon to label |
| `c-button-52` | Multi-line button with icon, title & description | registry:block | Multi-line button with icon, title & description |
| `c-button-53` | Sliding Icon Button (Hover reveal) | registry:block | Sliding Icon Button (Hover reveal) |
| `c-button-54` | Shortcut Tooltip Button (Kbd hints) | registry:block | Shortcut Tooltip Button (Kbd hints) |
| `c-button-55` | Button with avatar | registry:block | Button with avatar |
| `c-button-56` | Outline button with avatar | registry:block | Outline button with avatar |
| `c-button-57` | Small button with avatar | registry:block | Small button with avatar |
| `c-button-58` | Small outline button with avatar | registry:block | Small outline button with avatar |
| `c-button-59` | Social login buttons with Remix icons | registry:block | Social login buttons with Remix icons |
| `c-button-60` | Social icon-only buttons with Remix icons | registry:block | Social icon-only buttons with Remix icons |
| `c-button-61` | Theme toggle button with animated moon and sun icons | registry:block | Theme toggle button with animated moon and sun icons |

## Source

### Default button (`c-button-1`)

Target: `components/examples/c-button-1.tsx`

Default button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button>Default</Button>
}
```

### Secondary button (`c-button-2`)

Target: `components/examples/c-button-2.tsx`

Secondary button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button variant="secondary">Secondary</Button>
}
```

### Outline button (`c-button-3`)

Target: `components/examples/c-button-3.tsx`

Outline button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button variant="outline">Outline</Button>
}
```

### Ghost button (`c-button-4`)

Target: `components/examples/c-button-4.tsx`

Ghost button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button variant="ghost">Ghost</Button>
}
```

### Destructive button (`c-button-5`)

Target: `components/examples/c-button-5.tsx`

Destructive button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button variant="destructive">Destructive</Button>
}
```

### Link button variant (`c-button-6`)

Target: `components/examples/c-button-6.tsx`

Link button variant

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button variant="link">Link</Button>
}
```

### Extra small button (`c-button-7`)

Target: `components/examples/c-button-7.tsx`

Extra small button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button size="xs">Button</Button>
}
```

### Small button (`c-button-8`)

Target: `components/examples/c-button-8.tsx`

Small button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button size="sm">Button</Button>
}
```

### Large button (`c-button-9`)

Target: `components/examples/c-button-9.tsx`

Large button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button size="lg">Button</Button>
}
```

### Disabled button (`c-button-10`)

Target: `components/examples/c-button-10.tsx`

Disabled button

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button>Button</Button>
}
```

### Icon button (`c-button-11`)

Target: `components/examples/c-button-11.tsx`

Icon button

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button size="icon" aria-label="Search">
      <IconPlaceholder
        lucide="SearchIcon"
        tabler="IconSearch"
        hugeicons="Search01Icon"
        phosphor="MagnifyingGlassIcon"
        remixicon="RiSearchLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Button with an icon on the right (`c-button-12`)

Target: `components/examples/c-button-12.tsx`

Button with an icon on the right

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button>
      Get Started
      <IconPlaceholder
        lucide="ArrowRightIcon"
        tabler="IconArrowRight"
        hugeicons="ArrowRight02Icon"
        phosphor="ArrowRightIcon"
        remixicon="RiArrowRightLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Button in a loading state (`c-button-13`)

Target: `components/examples/c-button-13.tsx`

Button in a loading state

```tsx
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function Pattern() {
  return (
    <Button disabled>
      <Spinner aria-hidden="true" />
      Please wait
    </Button>
  )
}
```

### Button with an icon on the left (`c-button-14`)

Target: `components/examples/c-button-14.tsx`

Button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button>
      <IconPlaceholder
        lucide="CloudDownloadIcon"
        tabler="IconCloudDownload"
        hugeicons="CloudDownloadIcon"
        phosphor="CloudArrowDownIcon"
        remixicon="RiDownloadCloud2Line"
        aria-hidden="true"
      />
      Download
    </Button>
  )
}
```

### Button with an invalid state highlight (`c-button-15`)

Target: `components/examples/c-button-15.tsx`

Button with an invalid state highlight

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return <Button aria-invalid="true">Invalid State</Button>
}
```

### Secondary button with an icon on the left (`c-button-16`)

Target: `components/examples/c-button-16.tsx`

Secondary button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="secondary">
      <IconPlaceholder
        lucide="GithubIcon"
        tabler="IconBrandGithub"
        hugeicons="GithubIcon"
        phosphor="GithubLogoIcon"
        remixicon="RiGithubLine"
        aria-hidden="true"
      />
      Github
    </Button>
  )
}
```

### Secondary button with an icon on the right (`c-button-17`)

Target: `components/examples/c-button-17.tsx`

Secondary button with an icon on the right

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="secondary">
      Open Project
      <IconPlaceholder
        lucide="ExternalLinkIcon"
        tabler="IconExternalLink"
        hugeicons="LinkSquare01Icon"
        phosphor="ArrowSquareOutIcon"
        remixicon="RiExternalLinkLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Outline button with an icon on the left (`c-button-18`)

Target: `components/examples/c-button-18.tsx`

Outline button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="outline">
      <IconPlaceholder
        lucide="PlusIcon"
        tabler="IconPlus"
        hugeicons="PlusSignIcon"
        phosphor="PlusIcon"
        remixicon="RiAddLine"
        aria-hidden="true"
      />
      Add Item
    </Button>
  )
}
```

### Outline button with an icon on the right (`c-button-19`)

Target: `components/examples/c-button-19.tsx`

Outline button with an icon on the right

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="outline">
      Options
      <IconPlaceholder
        lucide="Settings2Icon"
        tabler="IconAdjustmentsHorizontal"
        hugeicons="FilterHorizontalIcon"
        phosphor="SlidersHorizontalIcon"
        remixicon="RiEqualizer2Line"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Ghost button with an icon on the left (`c-button-20`)

Target: `components/examples/c-button-20.tsx`

Ghost button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="ghost">
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
        aria-hidden="true"
      />
      Settings
    </Button>
  )
}
```

### Ghost button with an icon on the right (`c-button-21`)

Target: `components/examples/c-button-21.tsx`

Ghost button with an icon on the right

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="ghost">
      Logout
      <IconPlaceholder
        lucide="LogOutIcon"
        tabler="IconLogout"
        hugeicons="LogoutSquare01Icon"
        phosphor="SignOutIcon"
        remixicon="RiLogoutBoxRLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Destructive button with an icon on the left (`c-button-22`)

Target: `components/examples/c-button-22.tsx`

Destructive button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="destructive">
      <IconPlaceholder
        lucide="Trash2Icon"
        tabler="IconTrash"
        hugeicons="Delete02Icon"
        phosphor="TrashIcon"
        remixicon="RiDeleteBinLine"
        aria-hidden="true"
      />
      Delete Account
    </Button>
  )
}
```

### Destructive button with an icon on the right (`c-button-23`)

Target: `components/examples/c-button-23.tsx`

Destructive button with an icon on the right

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="destructive">
      Confirm Removal
      <IconPlaceholder
        lucide="CircleAlertIcon"
        tabler="IconAlertCircle"
        hugeicons="AlertCircleIcon"
        phosphor="WarningCircleIcon"
        remixicon="RiErrorWarningLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Extra small icon button (`c-button-24`)

Target: `components/examples/c-button-24.tsx`

Extra small icon button

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button size="icon-xs" variant="outline" aria-label="Close">
      <IconPlaceholder
        lucide="XIcon"
        tabler="IconX"
        hugeicons="MultiplicationSignIcon"
        phosphor="XIcon"
        remixicon="RiCloseLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Small icon button (`c-button-25`)

Target: `components/examples/c-button-25.tsx`

Small icon button

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button size="icon-sm" variant="ghost" aria-label="Notifications">
      <IconPlaceholder
        lucide="BellIcon"
        tabler="IconBell"
        hugeicons="NotificationIcon"
        phosphor="BellIcon"
        remixicon="RiNotificationLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Large (lg) icon-only button (`c-button-26`)

Target: `components/examples/c-button-26.tsx`

Large (lg) icon-only button

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button size="icon-lg" aria-label="Play">
      <IconPlaceholder
        lucide="PlayIcon"
        tabler="IconPlayerPlay"
        hugeicons="PlayIcon"
        phosphor="PlayIcon"
        remixicon="RiPlayLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Button rendered as a Next.js Link (`c-button-27`)

Target: `components/examples/c-button-27.tsx`

Button rendered as a Next.js Link

```tsx
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button asChild>
      <Link href="/">Back to Home</Link>
    </Button>
  )
}
```

### Link button with an icon on the left (`c-button-28`)

Target: `components/examples/c-button-28.tsx`

Link button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="link">
      <IconPlaceholder
        lucide="HelpCircleIcon"
        tabler="IconHelpCircle"
        hugeicons="HelpCircleIcon"
        phosphor="QuestionIcon"
        remixicon="RiQuestionLine"
        aria-hidden="true"
      />
      Help Center
    </Button>
  )
}
```

### Link button with an icon on the right (`c-button-29`)

Target: `components/examples/c-button-29.tsx`

Link button with an icon on the right

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="link" className="group/link-button">
      View Documentation
      <IconPlaceholder
        lucide="ArrowUpRightIcon"
        tabler="IconArrowUpRight"
        hugeicons="ArrowUpRight01Icon"
        phosphor="ArrowUpRightIcon"
        remixicon="RiArrowRightUpLine"
        aria-hidden="true"
        className="transition-transform group-hover/link-button:rotate-45"
      />
    </Button>
  )
}
```

### Large button with an icon on the left (`c-button-30`)

Target: `components/examples/c-button-30.tsx`

Large button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button size="lg">
      <IconPlaceholder
        lucide="ZapIcon"
        tabler="IconBolt"
        hugeicons="ZapIcon"
        phosphor="LightningIcon"
        remixicon="RiFlashlightLine"
        aria-hidden="true"
      />
      Upgrade Now
    </Button>
  )
}
```

### Large button with an icon on the right (`c-button-31`)

Target: `components/examples/c-button-31.tsx`

Large button with an icon on the right

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button size="lg">
      Send Message
      <IconPlaceholder
        lucide="SendIcon"
        tabler="IconSend"
        hugeicons="SentIcon"
        phosphor="PaperPlaneTiltIcon"
        remixicon="RiSendInsLine"
        aria-hidden="true"
      />
    </Button>
  )
}
```

### Outline button with an invalid state (`c-button-32`)

Target: `components/examples/c-button-32.tsx`

Outline button with an invalid state

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button variant="outline" aria-invalid="true">
      Invalid Outline
    </Button>
  )
}
```

### Ghost button with an invalid state (`c-button-33`)

Target: `components/examples/c-button-33.tsx`

Ghost button with an invalid state

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button variant="ghost" aria-invalid="true">
      Invalid Ghost
    </Button>
  )
}
```

### Button with an icon on the left (`c-button-34`)

Target: `components/examples/c-button-34.tsx`

Button with an icon on the left

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button>
      <IconPlaceholder
        lucide="MailIcon"
        tabler="IconMail"
        hugeicons="MailIcon"
        phosphor="EnvelopeIcon"
        remixicon="RiMailLine"
        aria-hidden="true"
      />
      Login with Email
    </Button>
  )
}
```

### Ghost button with more/less toggle (`c-button-35`)

Target: `components/examples/c-button-35.tsx`

Ghost button with more/less toggle

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)}>
      {isExpanded ? "Show less" : "Show more"}
      {isExpanded ? (
        <IconPlaceholder
          lucide="ChevronUpIcon"
          tabler="IconChevronUp"
          hugeicons="ArrowUp01Icon"
          phosphor="CaretUpIcon"
          remixicon="RiArrowUpSLine"
          aria-hidden="true"
        />
      ) : (
        <IconPlaceholder
          lucide="ChevronDownIcon"
          tabler="IconChevronDown"
          hugeicons="ArrowDown01Icon"
          phosphor="CaretDownIcon"
          remixicon="RiArrowDownSLine"
          aria-hidden="true"
        />
      )}
    </Button>
  )
}
```

### Social login buttons with Remix Icons (`c-button-36`)

Target: `components/examples/c-button-36.tsx`

Social login buttons with Remix Icons

```tsx
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline" size="icon">
        <RiGoogleFill aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        <RiFacebookFill aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        <RiTwitterXFill aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        <RiGithubFill aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        <RiLinkedinFill aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        <RiInstagramFill aria-hidden="true" />
      </Button>
    </div>
  )
}
```

### Outline like button with count (`c-button-37`)

Target: `components/examples/c-button-37.tsx`

Outline like button with count

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button className="pe-0">
      <IconPlaceholder
        lucide="ThumbsUpIcon"
        tabler="IconThumbUp"
        hugeicons="ThumbsUpIcon"
        phosphor="ThumbsUpIcon"
        remixicon="RiThumbUpLine"
        aria-hidden="true"
      />
      Like
      <span className="relative ms-1 px-3 text-xs font-medium opacity-80 before:absolute before:inset-0 before:left-0 before:w-px before:bg-[currentColor]/60">
        456
      </span>
    </Button>
  )
}
```

### Star button with count (`c-button-38`)

Target: `components/examples/c-button-38.tsx`

Star button with count

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button className="pe-0" variant="outline">
      <IconPlaceholder
        lucide="StarIcon"
        tabler="IconStar"
        hugeicons="StarIcon"
        phosphor="StarIcon"
        remixicon="RiStarLine"
        aria-hidden="true"
      />
      Star
      <span className="text-muted-foreground before:bg-border relative ms-1 px-2 text-xs font-medium before:absolute before:inset-0 before:left-0 before:w-px">
        589
      </span>
    </Button>
  )
}
```

### Button with an unread badge (`c-button-39`)

Target: `components/examples/c-button-39.tsx`

Button with an unread badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button
      variant="outline"
      className="relative gap-2"
      aria-label="Inbox (8 unread)"
    >
      <IconPlaceholder
        lucide="MailIcon"
        tabler="IconMail"
        hugeicons="MailIcon"
        phosphor="EnvelopeIcon"
        remixicon="RiMailLine"
        aria-hidden="true"
      />
      Inbox
      <Badge
        variant="destructive"
        size="sm"
        className="absolute -top-1.5 -right-2 rounded-full px-1"
        aria-hidden="true"
      >
        8
      </Badge>
    </Button>
  )
}
```

### Button with icon, label, and shortcut keys (`c-button-40`)

Target: `components/examples/c-button-40.tsx`

Button with icon, label, and shortcut keys

```tsx
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="outline" aria-label="Search (Command K)">
      <IconPlaceholder
        lucide="SearchIcon"
        tabler="IconSearch"
        hugeicons="Search01Icon"
        phosphor="MagnifyingGlassIcon"
        remixicon="RiSearchLine"
        aria-hidden="true"
      />
      <span>Search</span>
      <KbdGroup aria-hidden="true">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
  )
}
```

### Copy button with feedback (`c-button-41`)

Target: `components/examples/c-button-41.tsx`

Copy button with feedback

```tsx
"use client"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1500 })

  return (
    <Button
      variant="outline"
      aria-label={isCopied ? "Copied" : "Copy"}
      onClick={() => copyToClipboard("https://reui.io")}
    >
      {isCopied ? (
        <IconPlaceholder
          lucide="CheckIcon"
          tabler="IconCheck"
          hugeicons="Tick02Icon"
          phosphor="CheckIcon"
          remixicon="RiCheckLine"
          aria-hidden="true"
        />
      ) : (
        <IconPlaceholder
          lucide="CopyIcon"
          tabler="IconCopy"
          hugeicons="CopyIcon"
          phosphor="CopyIcon"
          remixicon="RiFileCopyLine"
          aria-hidden="true"
        />
      )}
      <span>{isCopied ? "Copied" : "Copy"}</span>
    </Button>
  )
}
```

### Icon-only copy button with feedback (`c-button-42`)

Target: `components/examples/c-button-42.tsx`

Icon-only copy button with feedback

```tsx
"use client"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1500 })

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            aria-label={isCopied ? "Copied" : "Copy"}
            onClick={() => copyToClipboard("https://reui.io")}
          >
            {isCopied ? (
              <IconPlaceholder
                lucide="CheckIcon"
                tabler="IconCheck"
                hugeicons="Tick02Icon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                aria-hidden="true"
              />
            ) : (
              <IconPlaceholder
                lucide="CopyIcon"
                tabler="IconCopy"
                hugeicons="CopyIcon"
                phosphor="CopyIcon"
                remixicon="RiFileCopyLine"
                aria-hidden="true"
              />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isCopied ? "Copied" : "Copy link"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Animated hamburger / close toggle button (`c-button-43`)

Target: `components/examples/c-button-43.tsx`

Animated hamburger / close toggle button

```tsx
"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <Button
      size="icon"
      variant="outline"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
    >
      <span className="relative flex size-4 items-center justify-center">
        <IconPlaceholder
          lucide="MenuIcon"
          tabler="IconMenu2"
          hugeicons="Menu01Icon"
          phosphor="ListIcon"
          remixicon="RiMenuLine"
          aria-hidden="true"
          className={cn(
            "absolute size-4 transition-all duration-200",
            open
              ? "scale-75 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          )}
        />
        <IconPlaceholder
          lucide="XIcon"
          tabler="IconX"
          hugeicons="MultiplicationSignIcon"
          phosphor="XIcon"
          remixicon="RiCloseLine"
          aria-hidden="true"
          className={cn(
            "absolute size-4 transition-all duration-200",
            open
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 -rotate-90 opacity-0"
          )}
        />
      </span>
    </Button>
  )
}
```

### Async action button with loading and success states (`c-button-44`)

Target: `components/examples/c-button-44.tsx`

Async action button with loading and success states

```tsx
"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

type Status = "idle" | "loading" | "success"

export function Pattern() {
  const [status, setStatus] = useState<Status>("idle")

  useEffect(() => {
    if (status !== "success") return

    const timer = setTimeout(() => setStatus("idle"), 2000)
    return () => clearTimeout(timer)
  }, [status])

  return (
    <Button
      onClick={() => {
        if (status !== "idle") return

        setStatus("loading")
        setTimeout(() => setStatus("success"), 900)
      }}
      disabled={status === "loading"}
      aria-busy={status === "loading"}
      aria-live="polite"
      className="min-w-32"
    >
      {status === "loading" ? (
        <>
          <Spinner aria-hidden="true" />
          Saving…
        </>
      ) : status === "success" ? (
        <>
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            aria-hidden="true"
          />
          Saved
        </>
      ) : (
        "Save changes"
      )}
    </Button>
  )
}
```

### Outline button with inline count badge (`c-button-45`)

Target: `components/examples/c-button-45.tsx`

Outline button with inline count badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button variant="outline" className="gap-2" aria-label="Messages (12)">
      Messages
      <Badge variant="destructive-outline" size="sm" aria-hidden="true">
        12
      </Badge>
    </Button>
  )
}
```

### Button with status dot badge (`c-button-46`)

Target: `components/examples/c-button-46.tsx`

Button with status dot badge

```tsx
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button
      variant="outline"
      className="relative pr-8"
      aria-label="Deploy (ready)"
    >
      Live
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-3 -translate-y-1/2"
      >
        <span className="relative flex size-2 rounded-full bg-emerald-500 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-emerald-400 before:opacity-75 before:duration-1500 after:absolute after:inset-0 after:animate-ping after:rounded-full after:bg-emerald-400 after:opacity-40 after:delay-500 after:duration-1500" />
      </span>
    </Button>
  )
}
```

### Ghost button with a status badge (`c-button-47`)

Target: `components/examples/c-button-47.tsx`

Ghost button with a status badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button aria-label="Updates (new)">
      Updates
      <Badge variant="success" size="xs" aria-hidden="true">
        New
      </Badge>
    </Button>
  )
}
```

### Icon button with notification badge (`c-button-48`)

Target: `components/examples/c-button-48.tsx`

Icon button with notification badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button
      size="icon"
      variant="outline"
      className="relative"
      aria-label="Notifications (8)"
    >
      <IconPlaceholder
        lucide="BellIcon"
        tabler="IconBell"
        hugeicons="NotificationIcon"
        phosphor="BellIcon"
        remixicon="RiNotificationLine"
        aria-hidden="true"
      />
      <Badge
        variant="destructive"
        size="xs"
        className="absolute -top-1 -right-1 rounded-full px-1"
        aria-hidden="true"
      >
        8
      </Badge>
    </Button>
  )
}
```

### Go back link button (`c-button-49`)

Target: `components/examples/c-button-49.tsx`

Go back link button

```tsx
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="link" asChild>
      <Link href="#">
        <IconPlaceholder
          lucide="ChevronLeftIcon"
          tabler="IconChevronLeft"
          hugeicons="ArrowLeft01Icon"
          phosphor="CaretLeftIcon"
          remixicon="RiArrowLeftSLine"
          data-icon="inline-start"
          aria-hidden="true"
        />
        Go back
      </Link>
    </Button>
  )
}
```

### Go back link button with animation (`c-button-50`)

Target: `components/examples/c-button-50.tsx`

Go back link button with animation

```tsx
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button variant="link" className="group/back-button" asChild>
      <Link href="#">
        <IconPlaceholder
          lucide="ChevronLeftIcon"
          tabler="IconChevronLeft"
          hugeicons="ArrowLeft01Icon"
          phosphor="CaretLeftIcon"
          remixicon="RiArrowLeftSLine"
          data-icon="inline-start"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover/back-button:-translate-x-1"
        />
        Go back
      </Link>
    </Button>
  )
}
```

### Expanding button from icon to label (`c-button-51`)

Target: `components/examples/c-button-51.tsx`

Expanding button from icon to label

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button className="group/fab relative flex h-10 w-10 items-center overflow-hidden rounded-full px-3 transition-[width] duration-300 ease-in-out hover:w-32">
      <IconPlaceholder
        lucide="PlusIcon"
        tabler="IconPlus"
        hugeicons="PlusSignIcon"
        phosphor="PlusIcon"
        remixicon="RiAddLine"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover/fab:left-3 group-hover/fab:translate-x-0"
      />

      <span className="ml-8 pr-2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover/fab:opacity-100">
        Create New
      </span>
    </Button>
  )
}
```

### Multi-line button with icon, title & description (`c-button-52`)

Target: `components/examples/c-button-52.tsx`

Multi-line button with icon, title & description

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button
      variant="outline"
      className="group/button h-auto justify-start gap-3 px-4 py-3 text-left"
    >
      <div className="bg-muted text-accent-foreground group-hover/button:bg-background rounded-md flex size-10 items-center justify-center">
        <IconPlaceholder
          lucide="CreditCardIcon"
          tabler="IconCreditCard"
          hugeicons="CreditCardIcon"
          phosphor="CreditCardIcon"
          remixicon="RiBankCardLine"
          aria-hidden="true"
          className="size-5"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <span>Credit Card</span>
        <span className="text-muted-foreground text-xs font-normal">
          Pay securely with your Visa or Mastercard
        </span>
      </div>
    </Button>
  )
}
```

### Sliding Icon Button (Hover reveal) (`c-button-53`)

Target: `components/examples/c-button-53.tsx`

Sliding Icon Button (Hover reveal)

```tsx
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Button className="group/sliding relative overflow-hidden rounded-full px-6">
      <span className="inline-flex items-center transition-transform duration-300 group-hover/sliding:-translate-x-2">
        Get Started
      </span>
      <IconPlaceholder
        lucide="ArrowRightIcon"
        tabler="IconArrowRight"
        hugeicons="ArrowRight02Icon"
        phosphor="ArrowRightIcon"
        remixicon="RiArrowRightLine"
        aria-hidden="true"
        className="absolute right-2.5 translate-x-8 opacity-0 transition-all duration-300 group-hover/sliding:translate-x-0 group-hover/sliding:opacity-100"
      />
    </Button>
  )
}
```

### Shortcut Tooltip Button (Kbd hints) (`c-button-54`)

Target: `components/examples/c-button-54.tsx`

Shortcut Tooltip Button (Kbd hints)

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Search">
            <IconPlaceholder
              lucide="SearchIcon"
              tabler="IconSearch"
              hugeicons="Search01Icon"
              phosphor="MagnifyingGlassIcon"
              remixicon="RiSearchLine"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-3">
          Search
          <Kbd className="-mr-1">⌘K</Kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Button with avatar (`c-button-55`)

Target: `components/examples/c-button-55.tsx`

Button with avatar

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button>
      <Avatar className="size-5">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <span className="text-xs">@shadcn</span>
    </Button>
  )
}
```

### Outline button with avatar (`c-button-56`)

Target: `components/examples/c-button-56.tsx`

Outline button with avatar

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button variant="outline">
      <Avatar className="size-5">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <span className="text-xs">@shadcn</span>
    </Button>
  )
}
```

### Small button with avatar (`c-button-57`)

Target: `components/examples/c-button-57.tsx`

Small button with avatar

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button size="sm">
      <Avatar className="size-5">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <span className="text-xs">@shadcn</span>
    </Button>
  )
}
```

### Small outline button with avatar (`c-button-58`)

Target: `components/examples/c-button-58.tsx`

Small outline button with avatar

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <Button variant="outline" size="sm">
      <Avatar className="size-5">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <span className="text-xs">@shadcn</span>
    </Button>
  )
}
```

### Social login buttons with Remix icons (`c-button-59`)

Target: `components/examples/c-button-59.tsx`

Social login buttons with Remix icons

```tsx
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">
        <RiGoogleFill
          data-icon="inline-start"
          aria-hidden="true"
          className="text-[#DB4437] dark:text-white/60"
          size={16}
        />
        <span className="text-muted-foreground">Login with</span> Google
      </Button>
      <Button variant="outline">
        <RiTwitterXFill
          data-icon="inline-start"
          aria-hidden="true"
          className="text-[#14171a] dark:text-white/60"
          size={16}
        />
        <span className="text-muted-foreground">Login with</span> X
      </Button>
      <Button variant="outline">
        <RiFacebookFill
          data-icon="inline-start"
          aria-hidden="true"
          className="text-[#1877f2] dark:text-white/60"
          size={16}
        />
        <span className="text-muted-foreground">Login with</span> Facebook
      </Button>
      <Button variant="outline">
        <RiGithubFill
          data-icon="inline-start"
          aria-hidden="true"
          className="text-[#333333] dark:text-white/60"
          size={16}
        />
        <span className="text-muted-foreground">Login with</span> GitHub
      </Button>
    </div>
  )
}
```

### Social icon-only buttons with Remix icons (`c-button-60`)

Target: `components/examples/c-button-60.tsx`

Social icon-only buttons with Remix icons

```tsx
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        aria-label="Login with Google"
        className="flex-1"
        size="icon"
        variant="outline"
      >
        <RiGoogleFill
          aria-hidden="true"
          className="dark:text-primary text-[#DB4437]"
          size={16}
        />
      </Button>
      <Button
        aria-label="Login with Facebook"
        className="flex-1"
        size="icon"
        variant="outline"
      >
        <RiFacebookFill
          aria-hidden="true"
          className="dark:text-primary text-[#1877f2]"
          size={16}
        />
      </Button>
      <Button
        aria-label="Login with X"
        className="flex-1"
        size="icon"
        variant="outline"
      >
        <RiTwitterXFill
          aria-hidden="true"
          className="dark:text-primary text-[#14171a]"
          size={16}
        />
      </Button>
      <Button
        aria-label="Login with GitHub"
        className="flex-1"
        size="icon"
        variant="outline"
      >
        <RiGithubFill
          aria-hidden="true"
          className="dark:text-primary text-black"
          size={16}
        />
      </Button>
    </div>
  )
}
```

### Theme toggle button with animated moon and sun icons (`c-button-61`)

Target: `components/examples/c-button-61.tsx`

Theme toggle button with animated moon and sun icons

```tsx
"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <IconPlaceholder
        lucide="SunIcon"
        tabler="IconSun"
        hugeicons="Sun01Icon"
        phosphor="SunIcon"
        remixicon="RiSunLine"
        className={cn(
          "size-4 transition-all duration-300",
          theme === "dark"
            ? "scale-0 -rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        )}
      />
      <IconPlaceholder
        lucide="MoonIcon"
        tabler="IconMoon"
        hugeicons="Moon02Icon"
        phosphor="MoonIcon"
        remixicon="RiMoonLine"
        className={cn(
          "absolute size-4 transition-all duration-300",
          theme === "dark"
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-90 opacity-0"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```
