# Popover (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

11 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-popover-1` | Basic popover. | registry:block | Basic popover. |
| `c-popover-2` | Popovers opening from different sides. | registry:block | Popovers opening from different sides. |
| `c-popover-3` | Popover with form. | registry:block | Popover with form. |
| `c-popover-4` | Popover alignment positions. | registry:block | Popover alignment positions. |
| `c-popover-5` | Popover within a dialog. | registry:block | Popover within a dialog. |
| `c-popover-6` | Popover with user profile details. | registry:block | Popover with user profile details. |
| `c-popover-7` | Popover with custom content | registry:block | Popover with custom content |
| `c-popover-8` | Popover with media preview. | registry:block | Popover with media preview. |
| `c-popover-9` | Relative time popover with timezone details | registry:block | Relative time popover with timezone details |
| `c-popover-10` | Popover with controls | registry:block | Popover with controls |
| `c-popover-11` | Popover with navigation | registry:block | Popover with navigation |

## Source

### Basic popover. (`c-popover-1`)

Target: `components/examples/c-popover-1.tsx`

Basic popover.

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-fit">
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="px-3 py-2">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Popovers opening from different sides. (`c-popover-2`)

Target: `components/examples/c-popover-2.tsx`

Popovers opening from different sides.

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
    <div className="grid grid-cols-3 gap-2">
      {sides.map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full capitalize">
              {side.replace("-", " ")}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side} className="w-40">
            <p>Popover on {side.replace("-", " ")}</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
```

### Popover with form. (`c-popover-3`)

Target: `components/examples/c-popover-3.tsx`

Popover with form.

```tsx
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-2">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="width" className="w-1/2">
                Width
              </FieldLabel>
              <Input id="width" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="height" className="w-1/2">
                Height
              </FieldLabel>
              <Input id="height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Popover alignment positions. (`c-popover-4`)

Target: `components/examples/c-popover-4.tsx`

Popover alignment positions.

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Start
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto">
          <p>Aligned to start</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Center
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-auto">
          <p>Aligned to center</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            End
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-auto">
          <p>Aligned to end</p>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Popover within a dialog. (`c-popover-5`)

Target: `components/examples/c-popover-5.tsx`

Popover within a dialog.

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="p-4">
          <DialogHeader>
            <DialogTitle>Popover Example</DialogTitle>
            <DialogDescription>
              Click the button below to see the popover.
            </DialogDescription>
          </DialogHeader>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-fit">
                Open Popover
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto">
              <PopoverHeader>
                <PopoverTitle>Popover in Dialog</PopoverTitle>
                <PopoverDescription>
                  This popover appears inside a dialog. Click the button to open
                  it.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

### Popover with user profile details. (`c-popover-6`)

Target: `components/examples/c-popover-6.tsx`

Popover with user profile details.

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-auto justify-start py-1.5">
            <Avatar className="size-8">
              <AvatarImage
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=96&h=96&dpr=2&q=80"
                alt="Marcus Chen"
              />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="space-y-0.5 text-left">
              <p className="leading-none font-medium">Marcus Chen</p>
              <p className="text-muted-foreground">@mchen_design</p>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start justify-between">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=112&h=112&dpr=2&q=80"
                  alt="Marcus Chen"
                />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <Button size="sm" variant="outline">
                Follow
              </Button>
            </div>
            <div className="space-y-1">
              <h4 className="leading-none font-semibold">Marcus Chen</h4>
              <p className="text-muted-foreground">@mchen_design</p>
            </div>
            <p className="leading-relaxed">
              Product Designer specializing in design systems.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="font-semibold tabular-nums">1.2k</span>
                <span className="text-muted-foreground">Followers</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold tabular-nums">482</span>
                <span className="text-muted-foreground">Following</span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Popover with custom content (`c-popover-7`)

Target: `components/examples/c-popover-7.tsx`

Popover with custom content

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="gap-2">
            <IconPlaceholder
              lucide="SparklesIcon"
              tabler="IconSparkles"
              hugeicons="SparklesIcon"
              phosphor="SparkleIcon"
              remixicon="RiSparklingLine"
            />
            AI Assistant
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-80 gap-0 overflow-hidden p-0"
          align="center"
        >
          <div className="bg-primary/5 border-primary/10 border-b p-2">
            <div className="text-primary flex items-center gap-2 font-semibold">
              <IconPlaceholder
                lucide="SparklesIcon"
                tabler="IconSparkles"
                hugeicons="SparklesIcon"
                phosphor="SparkleIcon"
                remixicon="RiSparklingLine"
                className="size-4"
              />
              <span>Smart Suggestions</span>
            </div>
          </div>
          <div className="space-y-3 p-2">
            <p className="text-muted-foreground leading-relaxed">
              Our AI analyzes your workflow to provide tailored recommendations.
              It helps you automate repetitive tasks and optimizes your design
              process in real-time.
            </p>
            <div className="grid grid-cols-2 items-center gap-2">
              <Button size="sm">Enable AI</Button>
              <Button size="sm" variant="outline">
                Learn more
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Popover with media preview. (`c-popover-8`)

Target: `components/examples/c-popover-8.tsx`

Popover with media preview.

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Preview Media
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[320px] gap-0 overflow-hidden p-0"
          align="end"
        >
          <div className="bg-muted aspect-video w-full overflow-hidden">
            <img
              src="https://picsum.photos/1000/800?grayscale&random=10"
              alt="Website Template Preview"
              width={320}
              height={180}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-3 p-2">
            <div className="space-y-1 pt-1">
              <h4 className="text-sm leading-none font-semibold">
                Portfolio Pro
              </h4>
              <p className="text-muted-foreground text-xs">
                Premium photography template with dark mode.
              </p>
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Button size="sm" className="flex-1">
                Install Template
              </Button>
              <Button
                size="sm"
                variant="outline"
                aria-label="View demo in new tab"
              >
                Learn more
                <IconPlaceholder
                  lucide="ExternalLinkIcon"
                  tabler="IconExternalLink"
                  hugeicons="LinkSquare01Icon"
                  phosphor="ArrowSquareOutIcon"
                  remixicon="RiExternalLinkLine"
                />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Relative time popover with timezone details (`c-popover-9`)

Target: `components/examples/c-popover-9.tsx`

Relative time popover with timezone details

```tsx
"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/reui/badge"
import { format, formatDistanceToNow } from "date-fns"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Pattern() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Static reference time for the "last deployed" example
  const referenceTime = new Date(now.getTime() - 1000 * 60 * 120) // 2 hours ago

  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <p className="text-muted-foreground text-sm">
        Last deployed{" "}
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-foreground cursor-default underline decoration-dashed decoration-1 underline-offset-4 outline-hidden">
              {formatDistanceToNow(referenceTime, { addSuffix: true })}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto max-w-86 gap-0 p-0" align="start">
            <p className="text-foreground border-b px-2 py-1 font-medium">
              {formatDistanceToNow(referenceTime, { addSuffix: true })}
            </p>
            <div className="px-2 py-1.5">
              <table>
                <tbody>
                  <tr>
                    <td className="pr-4 pb-1.5">
                      <Badge variant="outline">UTC</Badge>
                    </td>
                    <td className="pr-6 pb-1.5">
                      {format(referenceTime, "MMM d, yyyy")}
                    </td>
                    <td className="text-muted-foreground pb-1.5">
                      {format(referenceTime, "hh:mm:ss a")}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4">
                      <span className="bg-muted rounded px-1.5 py-0.5 font-medium">
                        {Intl.DateTimeFormat()
                          .resolvedOptions()
                          .timeZone.split("/")
                          .pop()
                          ?.replace("_", " ") || "Local"}
                      </span>
                    </td>
                    <td className="pr-6">{format(now, "MMM d, yyyy")}</td>
                    <td className="text-muted-foreground w-28">
                      {format(now, "hh:mm:ss a")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PopoverContent>
        </Popover>{" "}
        by CI/CD pipeline.
      </p>
    </div>
  )
}
```

### Popover with controls (`c-popover-10`)

Target: `components/examples/c-popover-10.tsx`

Popover with controls

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [volume, setVolume] = useState([75])

  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <IconPlaceholder
              lucide="SettingsIcon"
              tabler="IconSettings"
              hugeicons="SettingsIcon"
              phosphor="GearIcon"
              remixicon="RiSettings3Line"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 gap-0 p-0" align="end">
          <div className="border-b p-3">
            <h4 className="m-0 font-medium">Quick Settings</h4>
            <p className="text-muted-foreground">Adjust your preferences.</p>
          </div>
          <div className="space-y-3 p-3 pb-4">
            <div className="flex items-center justify-between">
              <label htmlFor="qs-dark">Dark Mode</label>
              <Switch id="qs-dark" />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="qs-notif">Notifications</label>
              <Switch id="qs-notif" defaultChecked />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label>Volume</label>
                <span className="text-muted-foreground">{volume[0]}%</span>
              </div>
              <Slider
                value={volume}
                onValueChange={(v) => setVolume(v as number[])}
                max={100}
                step={1}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Popover with navigation (`c-popover-11`)

Target: `components/examples/c-popover-11.tsx`

Popover with navigation

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [
  {
    title: "Invite Your Team",
    description:
      "Add team members by email to collaborate on projects in real time. Assign roles and manage permissions from the team settings.",
  },
  {
    title: "Create a Project",
    description:
      "Set up your first project with a name, description, and timeline. Choose from templates or start from scratch.",
  },
  {
    title: "Connect Integrations",
    description:
      "Link tools like GitHub, Slack, and Figma to streamline your workflow and keep everything in sync.",
  },
  {
    title: "Set Up Notifications",
    description:
      "Customize which events trigger alerts — mentions, due dates, status changes, and deployment updates.",
  },
]

export function Pattern() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isFirst = currentStep === 0
  const isLast = currentStep === steps.length - 1

  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <IconPlaceholder
              lucide="CompassIcon"
              tabler="IconCompass"
              hugeicons="Navigation04Icon"
              phosphor="CompassIcon"
              remixicon="RiCompassLine"
              aria-hidden="true"
            />
            Feature Tour
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-72 gap-2 px-3 pt-3 pb-2"
          side="top"
          sideOffset={8}
        >
          <div className="space-y-2">
            <p className="leading-tight font-medium">
              {steps[currentStep].title}
            </p>
            <p className="text-muted-foreground">
              {steps[currentStep].description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              {currentStep + 1} of {steps.length}
            </span>
            <div className="flex gap-0.5">
              <Button
                aria-label="Previous step"
                className="size-6"
                disabled={isFirst}
                onClick={handlePrev}
                size="icon"
                variant="ghost"
              >
                <IconPlaceholder
                  lucide="ArrowLeftIcon"
                  tabler="IconArrowLeft"
                  hugeicons="ArrowLeft02Icon"
                  phosphor="ArrowLeftIcon"
                  remixicon="RiArrowLeftLine"
                  className="size-3.5"
                  aria-hidden="true"
                />
              </Button>
              <Button
                aria-label="Next step"
                className="size-6"
                disabled={isLast}
                onClick={handleNext}
                size="icon"
                variant="ghost"
              >
                <IconPlaceholder
                  lucide="ArrowRightIcon"
                  tabler="IconArrowRight"
                  hugeicons="ArrowRight02Icon"
                  phosphor="ArrowRightIcon"
                  remixicon="RiArrowRightLine"
                  className="size-3.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```
