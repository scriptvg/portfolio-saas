# Progress (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

8 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-progress-1` | Basic progress. | registry:block | Basic progress. |
| `c-progress-2` | Small progress. | registry:block | Small progress. |
| `c-progress-3` | Large progress. | registry:block | Large progress. |
| `c-progress-4` | Progress bar with status messages. | registry:block | Progress bar with status messages. |
| `c-progress-5` | File upload list with progress & status. | registry:block | File upload list with progress & status. |
| `c-progress-6` | Progress bar with slider. | registry:block | Progress bar with slider. |
| `c-progress-7` | Multi-step progress indicator | registry:block | Multi-step progress indicator |
| `c-progress-8` | Progress bar with custom colors. | registry:block | Progress bar with custom colors. |

## Source

### Basic progress. (`c-progress-1`)

Target: `components/examples/c-progress-1.tsx`

Basic progress.

```tsx
import { Progress } from "@/components/ui/progress"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="cn-progress-label text-sm font-medium">
          Upload progress
        </span>
        <span className="cn-progress-value text-muted-foreground text-sm">
          56%
        </span>
      </div>
      <Progress value={56} />
    </div>
  )
}
```

### Small progress. (`c-progress-2`)

Target: `components/examples/c-progress-2.tsx`

Small progress.

```tsx
import { Progress } from "@/components/ui/progress"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="cn-progress-label text-sm font-medium">
          Small progress
        </span>
        <span className="cn-progress-value text-muted-foreground text-sm">
          30%
        </span>
      </div>
      <Progress value={30} className="h-1" />
    </div>
  )
}
```

### Large progress. (`c-progress-3`)

Target: `components/examples/c-progress-3.tsx`

Large progress.

```tsx
import { Progress } from "@/components/ui/progress"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="cn-progress-label text-sm font-medium">
          Large progress
        </span>
        <span className="cn-progress-value text-muted-foreground text-sm">
          70%
        </span>
      </div>
      <Progress value={70} className="h-3" />
    </div>
  )
}
```

### Progress bar with status messages. (`c-progress-4`)

Target: `components/examples/c-progress-4.tsx`

Progress bar with status messages.

```tsx
"use client"

import { useEffect, useState } from "react"

import { Progress } from "@/components/ui/progress"

export function BaseProgressStatus() {
  const [downloadProgress, setDownloadProgress] = useState(0)

  // Get status message based on progress
  const getStatusMessage = (progress: number) => {
    if (progress < 5) return "Initializing download..."
    if (progress < 15) return "Setting up environment..."
    if (progress < 25) return "Connecting to server..."
    if (progress < 35) return "Verifying permissions..."
    if (progress < 50) return "Downloading core files..."
    if (progress < 65) return "Downloading assets..."
    if (progress < 80) return "Downloading dependencies..."
    if (progress < 90) return "Extracting files..."
    if (progress < 95) return "Validating integrity..."
    if (progress < 100) return "Finalizing installation..."
    return "Download complete!"
  }

  useEffect(() => {
    // Download simulation
    const downloadTimer = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          return 0 // Reset for continuous loop
        }
        return prev + Math.random() * 3 + 1 // Random increment 1-4
      })
    }, 150)

    return () => {
      clearInterval(downloadTimer)
    }
  }, [])

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="cn-progress-label text-sm font-medium">
          Workspace Setup
        </span>
        <span className="cn-progress-value text-muted-foreground text-sm">
          {Math.min(Math.round(downloadProgress), 100)}%
        </span>
      </div>
      <Progress value={downloadProgress} />
      <div className="text-muted-foreground text-xs">
        {getStatusMessage(downloadProgress)}
      </div>
    </div>
  )
}
```

### File upload list with progress & status. (`c-progress-5`)

Target: `components/examples/c-progress-5.tsx`

File upload list with progress & status.

```tsx
"use client"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const files = [
  { id: "1", name: "document.pdf", progress: 45, status: "2m 30s" },
  { id: "2", name: "presentation.pptx", progress: 78, status: "45s" },
  { id: "3", name: "spreadsheet.xlsx", progress: 12, status: "5m 12s" },
  { id: "4", name: "image.jpg", progress: 100, status: "Complete" },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col">
      <ItemGroup>
        {files.map((file) => (
          <Item key={file.id} size="xs" className="px-0">
            <ItemMedia variant="icon">
              <IconPlaceholder
                lucide="FileIcon"
                tabler="IconFile"
                hugeicons="FileEmpty02Icon"
                phosphor="FileIcon"
                remixicon="RiFileLine"
                className="text-muted-foreground size-4"
              />
            </ItemMedia>
            <ItemContent className="flex-1 truncate">
              <ItemTitle className="cursor-pointer truncate hover:underline">
                {file.name}
              </ItemTitle>
            </ItemContent>
            <ItemContent className="w-32">
              <Progress value={file.progress} className="h-1" />
            </ItemContent>
            <ItemActions className="w-20 justify-end">
              <span className="text-foreground">{file.status}</span>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
```

### Progress bar with slider. (`c-progress-6`)

Target: `components/examples/c-progress-6.tsx`

Progress bar with slider.

```tsx
"use client"

import { useState } from "react"

import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  const [value, setValue] = useState(50)

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-6">
      <Progress value={value} />
      <Slider
        value={[value]}
        onValueChange={(value: number | readonly number[]) =>
          setValue(value as number)
        }
        min={0}
        max={100}
        step={1}
      />
    </div>
  )
}
```

### Multi-step progress indicator (`c-progress-7`)

Target: `components/examples/c-progress-7.tsx`

Multi-step progress indicator

```tsx
import { Progress } from "@/components/ui/progress"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [
  { label: "Account", completed: true },
  { label: "Profile", completed: true },
  { label: "Preferences", completed: false },
  { label: "Review", completed: false },
]

export function Pattern() {
  const completedSteps = steps.filter((s) => s.completed).length
  const progressValue = (completedSteps / steps.length) * 100

  return (
    <div className="mx-auto w-full max-w-xs space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Setup Progress</span>
        <span className="text-muted-foreground text-xs">
          {completedSteps} of {steps.length} steps
        </span>
      </div>
      <Progress value={progressValue} />
      <div className="flex flex-col gap-2">
        {steps.map((step) => (
          <div key={step.label} className="flex items-center gap-2 text-sm">
            {step.completed ? (
              <IconPlaceholder
                lucide="CircleCheckIcon"
                tabler="IconCircleCheck"
                hugeicons="CheckmarkCircle01Icon"
                phosphor="CheckCircleIcon"
                remixicon="RiCheckboxCircleLine"
                className="text-success size-4"
                aria-hidden="true"
              />
            ) : (
              <IconPlaceholder
                lucide="CircleIcon"
                tabler="IconCircle"
                hugeicons="CircleIcon"
                phosphor="CircleIcon"
                remixicon="RiCircleLine"
                className="text-muted-foreground size-4"
                aria-hidden="true"
              />
            )}
            <span
              className={
                step.completed ? "text-foreground" : "text-muted-foreground"
              }
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Progress bar with custom colors. (`c-progress-8`)

Target: `components/examples/c-progress-8.tsx`

Progress bar with custom colors.

```tsx
"use client"

import { useEffect, useState } from "react"

import { Progress } from "@/components/ui/progress"

export function Pattern() {
  const [progress, setProgress] = useState(45)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-6">
      <Progress
        value={progress}
        className="**:data-[slot=progress-indicator]:bg-green-500"
      ></Progress>
      <Progress
        value={progress}
        className="**:data-[slot=progress-indicator]:bg-yellow-500"
      ></Progress>
      <Progress
        value={progress}
        className="**:data-[slot=progress-indicator]:bg-fuchsia-500"
      ></Progress>
      <Progress
        value={progress}
        className="**:data-[slot=progress-indicator]:bg-indigo-500"
      ></Progress>
      <Progress
        value={progress}
        className="**:data-[slot=progress-indicator]:bg-violet-500"
      ></Progress>
    </div>
  )
}
```
