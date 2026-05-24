# Sonner (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

21 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-sonner-1` | Basic toast notification. | registry:block | Basic toast notification. |
| `c-sonner-2` | Toast notification with description. | registry:block | Toast notification with description. |
| `c-sonner-3` | Toast positions | registry:block | Toast positions |
| `c-sonner-4` | Toast variants with colored icons | registry:block | Toast variants with colored icons |
| `c-sonner-5` | Toast duration options | registry:block | Toast duration options |
| `c-sonner-6` | Toast with action button | registry:block | Toast with action button |
| `c-sonner-7` | Promise toast with loading state | registry:block | Promise toast with loading state |
| `c-sonner-8` | Toast with custom close and cancel buttons | registry:block | Toast with custom close and cancel buttons |
| `c-sonner-9` | Toast with custom rich content | registry:block | Toast with custom rich content |
| `c-sonner-10` | Toast with upload progress simulation | registry:block | Toast with upload progress simulation |
| `c-sonner-11` | Toast with status alert markup | registry:block | Toast with status alert markup |
| `c-sonner-12` | Custom accent border toast | registry:block | Custom accent border toast |
| `c-sonner-13` | Custom invert success toast | registry:block | Custom invert success toast |
| `c-sonner-14` | Custom invert error toast with details | registry:block | Custom invert error toast with details |
| `c-sonner-15` | Custom invert info toast with avatar | registry:block | Custom invert info toast with avatar |
| `c-sonner-16` | Custom invert warning toast with countdown | registry:block | Custom invert warning toast with countdown |
| `c-sonner-17` | Multi-action invert toast with avatar group | registry:block | Multi-action invert toast with avatar group |
| `c-sonner-18` | Toast with close button on top-right | registry:block | Toast with close button on top-right |
| `c-sonner-19` | Toast with custom icon | registry:block | Toast with custom icon |
| `c-sonner-20` | Custom integration toast | registry:block | Custom integration toast |
| `c-sonner-21` | Updatable toast with ID | registry:block | Updatable toast with ID |

## Source

### Basic toast notification. (`c-sonner-1`)

Target: `components/examples/c-sonner-1.tsx`

Basic toast notification.

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() => toast("Event has been created")}
        variant="outline"
        className="w-fit"
      >
        Show Toast
      </Button>
    </div>
  )
}
```

### Toast notification with description. (`c-sonner-2`)

Target: `components/examples/c-sonner-2.tsx`

Toast notification with description.

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  const showToast = () => {
    toast("Event has been created", {
      description: "Monday, January 3rd at 6:00pm",
    })
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        Show Toast with Description
      </Button>
    </div>
  )
}
```

### Toast positions (`c-sonner-3`)

Target: `components/examples/c-sonner-3.tsx`

Toast positions

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Top Left", {
            description: "Notification appears in the top left.",
            position: "top-left",
          })
        }
      >
        Top Left
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Top Center", {
            description: "Notification appears in the top center.",
            position: "top-center",
          })
        }
      >
        Top Center
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Top Right", {
            description: "Notification appears in the top right.",
            position: "top-right",
          })
        }
      >
        Top Right
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Bottom Left", {
            description: "Notification appears in the bottom left.",
            position: "bottom-left",
          })
        }
      >
        Bottom Left
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Bottom Center", {
            description: "Notification appears in the bottom center.",
            position: "bottom-center",
          })
        }
      >
        Bottom Center
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Bottom Right", {
            description: "Notification appears in the bottom right.",
            position: "bottom-right",
          })
        }
      >
        Bottom Right
      </Button>
    </div>
  )
}
```

### Toast variants with colored icons (`c-sonner-4`)

Target: `components/examples/c-sonner-4.tsx`

Toast variants with colored icons

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() => toast("Default notification")}
      >
        Default
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast.success("Operation completed", {
            classNames: { icon: "text-green-500" },
          })
        }
      >
        Success
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast.error("Operation failed", {
            classNames: { icon: "text-destructive" },
          })
        }
      >
        Error
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast.warning("Proceed with caution", {
            classNames: { icon: "text-yellow-500" },
          })
        }
      >
        Warning
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast.info("System update available", {
            classNames: { icon: "text-violet-500" },
          })
        }
      >
        Info
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() => toast.loading("Processing...")}
      >
        Loading
      </Button>
    </div>
  )
}
```

### Toast duration options (`c-sonner-5`)

Target: `components/examples/c-sonner-5.tsx`

Toast duration options

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Quick notice", {
            description: "Disappears in 2 seconds.",
            duration: 2000,
          })
        }
      >
        2s Duration
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Standard notice", {
            description: "Disappears in 5 seconds.",
            duration: 5000,
          })
        }
      >
        5s Duration
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Extended notice", {
            description: "Stays for 10 seconds.",
            duration: 10000,
          })
        }
      >
        10s Duration
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="col-span-3 w-full"
        onClick={() =>
          toast("Persistent notice", {
            description: "This toast stays until dismissed.",
            duration: Infinity,
            closeButton: true,
          })
        }
      >
        Persistent
      </Button>
    </div>
  )
}
```

### Toast with action button (`c-sonner-6`)

Target: `components/examples/c-sonner-6.tsx`

Toast with action button

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() =>
          toast("Message archived", {
            description: "The conversation has been moved to archive.",
            action: {
              label: "Undo",
              onClick: () => toast.success("Action undone"),
            },
          })
        }
        variant="outline"
        className="w-fit"
      >
        Toast with Action
      </Button>
    </div>
  )
}
```

### Promise toast with loading state (`c-sonner-7`)

Target: `components/examples/c-sonner-7.tsx`

Promise toast with loading state

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  const handleDeploy = () => {
    toast.promise(
      new Promise<{ name: string }>((resolve) =>
        setTimeout(() => resolve({ name: "production" }), 2000)
      ),
      {
        loading: "Deploying to production...",
        success: (data) => `Deployed to ${data.name} successfully`,
        error: "Deployment failed. Please try again.",
      }
    )
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={handleDeploy} variant="outline" className="w-fit">
        Deploy
      </Button>
    </div>
  )
}
```

### Toast with custom close and cancel buttons (`c-sonner-8`)

Target: `components/examples/c-sonner-8.tsx`

Toast with custom close and cancel buttons

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() =>
          toast("Confirm deletion", {
            description:
              "This item will be permanently deleted. This action cannot be undone.",
            action: {
              label: "Delete",
              onClick: () => toast.success("Item deleted"),
            },
            cancel: {
              label: "Cancel",
              onClick: () => {},
            },
          })
        }
        variant="outline"
        className="w-fit"
      >
        Confirm Action
      </Button>
    </div>
  )
}
```

### Toast with custom rich content (`c-sonner-9`)

Target: `components/examples/c-sonner-9.tsx`

Toast with custom rich content

```tsx
import { toast } from "sonner"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  const showUserToast = () => {
    toast.custom(() => (
      <div className="bg-popover text-popover-foreground border-border rounded-md flex w-[356px] items-start gap-3 border p-4 shadow-lg">
        <Avatar className="size-9 shrink-0">
          <AvatarImage
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
            alt="Alex Johnson"
          />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Alex Johnson</p>
            <span className="text-muted-foreground text-xs">2m ago</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Hey! I&apos;ve finished the design review. Let me know when
            you&apos;re free to discuss.
          </p>
          <div className="mt-2 flex gap-2">
            <Button size="xs" variant="outline" onClick={() => toast.dismiss()}>
              Dismiss
            </Button>
            <Button size="xs" onClick={() => toast.dismiss()}>
              Reply
            </Button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showUserToast} variant="outline" className="w-fit">
        User Message Toast
      </Button>
    </div>
  )
}
```

### Toast with upload progress simulation (`c-sonner-10`)

Target: `components/examples/c-sonner-10.tsx`

Toast with upload progress simulation

```tsx
"use client"

import { useRef } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

function UploadToast({ progress }: { progress: number }) {
  const done = progress >= 100

  return (
    <div className="bg-popover text-popover-foreground border-border rounded-md flex w-[350px] flex-col gap-3 border p-4 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-muted flex size-8 shrink-0 items-center justify-center">
          <IconPlaceholder
            lucide="FileIcon"
            tabler="IconFile"
            hugeicons="FileEmpty02Icon"
            phosphor="FileIcon"
            remixicon="RiFileLine"
            className="size-4"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-sm font-medium">report-q4-2025.pdf</p>
          <p className="text-muted-foreground text-xs">
            2.4 MB &middot; {done ? "Complete" : `Uploading... ${progress}%`}
          </p>
        </div>
      </div>
      <Progress
        value={progress}
        className="**:data-[slot=progress-indicator]:bg-success h-1.5"
      />
    </div>
  )
}

export function Pattern() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const showUploadToast = () => {
    let progress = 0
    const id = toast.custom(() => <UploadToast progress={progress} />, {
      duration: Infinity,
    })

    intervalRef.current = setInterval(() => {
      progress = Math.min(progress + Math.floor(Math.random() * 15) + 5, 100)

      toast.custom(() => <UploadToast progress={progress} />, {
        id,
        duration: progress >= 100 ? 3000 : Infinity,
      })

      if (progress >= 100 && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, 500)
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showUploadToast} variant="outline" className="w-fit">
        Upload Toast
      </Button>
    </div>
  )
}
```

### Toast with status alert markup (`c-sonner-11`)

Target: `components/examples/c-sonner-11.tsx`

Toast with status alert markup

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const showStatusToast = () => {
    toast.custom(() => (
      <div className="bg-popover text-popover-foreground border-border rounded-md flex w-[356px] flex-col gap-2 border p-4 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="flex size-2 rounded-full bg-green-500" />
          <p className="text-sm font-medium">Deployment Successful</p>
        </div>
        <div className="text-muted-foreground space-y-1 text-xs">
          <div className="flex items-center justify-between">
            <span>Environment</span>
            <span className="text-foreground font-medium">Production</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Duration</span>
            <span className="text-foreground font-medium">42s</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Commit</span>
            <span className="text-foreground font-mono font-medium">
              a1b2c3d
            </span>
          </div>
        </div>
        <div className="mt-1 flex gap-2">
          <Button
            size="xs"
            variant="outline"
            className="flex-1"
            onClick={() => toast.dismiss()}
          >
            <IconPlaceholder
              lucide="ExternalLinkIcon"
              tabler="IconExternalLink"
              hugeicons="LinkSquare01Icon"
              phosphor="ArrowSquareOutIcon"
              remixicon="RiExternalLinkLine"
              className="size-3"
              aria-hidden="true"
            />
            View Logs
          </Button>
          <Button size="xs" className="flex-1" onClick={() => toast.dismiss()}>
            Open Site
          </Button>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showStatusToast} variant="outline" className="w-fit">
        Deployment Toast
      </Button>
    </div>
  )
}
```

### Custom accent border toast (`c-sonner-12`)

Target: `components/examples/c-sonner-12.tsx`

Custom accent border toast

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-popover text-popover-foreground border-border rounded-md flex w-[356px] items-start gap-3 border border-l-4 border-l-blue-500 p-4 shadow-lg">
        <div className="text-blue-500">
          <IconPlaceholder
            lucide="InfoIcon"
            tabler="IconInfoCircle"
            hugeicons="InformationCircleIcon"
            phosphor="InfoIcon"
            remixicon="RiInformationLine"
            className="size-5 shrink-0"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-sm font-semibold">New Version Available</p>
          <p className="text-muted-foreground text-sm">
            v2.4.0 includes performance improvements and bug fixes.
          </p>
          <div className="mt-2 flex gap-2">
            <Button size="xs" variant="outline" onClick={() => toast.dismiss()}>
              Later
            </Button>
            <Button size="xs" onClick={() => toast.dismiss()}>
              Update Now
            </Button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        Accent Border Toast
      </Button>
    </div>
  )
}
```

### Custom invert success toast (`c-sonner-13`)

Target: `components/examples/c-sonner-13.tsx`

Custom invert success toast

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-invert text-invert-foreground rounded-md flex w-[356px] items-start gap-3 border border-transparent p-4 shadow-lg">
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-sm font-semibold">Payment Successful</p>
          <p className="text-invert-foreground/70 text-sm">
            Invoice #INV-2025-0042 has been paid. $2,400.00 received.
          </p>
          <div className="mt-2 flex gap-2">
            <Button
              size="xs"
              variant="outline"
              className="bg-background/10 border-border/10 text-invert-foreground"
              onClick={() => toast.dismiss()}
            >
              View Receipt
            </Button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        Invert Success Toast
      </Button>
    </div>
  )
}
```

### Custom invert error toast with details (`c-sonner-14`)

Target: `components/examples/c-sonner-14.tsx`

Custom invert error toast with details

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-invert text-invert-foreground rounded-md flex w-[356px] flex-col gap-3 border border-transparent p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
            <IconPlaceholder
              lucide="XIcon"
              tabler="IconX"
              hugeicons="MultiplicationSignIcon"
              phosphor="XIcon"
              remixicon="RiCloseLine"
              className="size-3.5"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-sm font-semibold">Build Failed</p>
            <p className="text-invert-foreground/70 text-sm">
              Compilation error in 2 files. Fix errors before deploying.
            </p>
          </div>
        </div>
        <Separator className="bg-border/10" />
        <div className="text-invert-foreground/60 space-y-1 font-mono text-xs">
          <p>src/api/auth.ts:42 — TypeError: undefined is not a function</p>
          <p>src/utils/parse.ts:18 — SyntaxError: Unexpected token</p>
        </div>
        <div className="flex gap-2">
          <Button
            size="xs"
            variant="outline"
            className="bg-background/10 border-border/10 text-invert-foreground flex-1"
            onClick={() => toast.dismiss()}
          >
            View Logs
          </Button>
          <Button
            size="xs"
            className="flex-1 border-red-800 bg-red-500 text-white hover:border-red-900 hover:bg-red-600"
            onClick={() => toast.dismiss()}
          >
            Retry Build
          </Button>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        Invert Error Toast
      </Button>
    </div>
  )
}
```

### Custom invert info toast with avatar (`c-sonner-15`)

Target: `components/examples/c-sonner-15.tsx`

Custom invert info toast with avatar

```tsx
import { toast } from "sonner"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-invert text-invert-foreground rounded-md flex w-[356px] items-start gap-3 border border-transparent p-4 shadow-lg">
        <Avatar className="border-border/10 size-9 shrink-0 border">
          <AvatarImage
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
            alt="Sarah Chen"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Sarah Chen</p>
            <span className="text-invert-foreground/40 text-xs">Just now</span>
          </div>
          <p className="text-invert-foreground/70 text-sm">
            Invited you to collaborate on &quot;Design System v2&quot;
          </p>
          <div className="mt-2 flex gap-2">
            <Button
              size="xs"
              variant="outline"
              className="bg-background/10 border-border/10 text-invert-foreground"
              onClick={() => toast.dismiss()}
            >
              Decline
            </Button>
            <Button
              size="xs"
              className="border-blue-800 bg-blue-500 text-white hover:border-blue-900 hover:bg-blue-600"
              onClick={() => toast.dismiss()}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        Invert Invite Toast
      </Button>
    </div>
  )
}
```

### Custom invert warning toast with countdown (`c-sonner-16`)

Target: `components/examples/c-sonner-16.tsx`

Custom invert warning toast with countdown

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const showToast = () => {
    toast.custom(
      () => (
        <div className="bg-invert text-invert-foreground rounded-md flex w-[356px] items-start gap-3 border border-transparent p-4 shadow-lg">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
            <IconPlaceholder
              lucide="AlertTriangleIcon"
              tabler="IconAlertTriangle"
              hugeicons="Alert02Icon"
              phosphor="WarningIcon"
              remixicon="RiAlertLine"
              className="size-3.5"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-sm font-semibold">Session Expiring</p>
            <p className="text-invert-foreground/70 text-sm">
              Your session will expire in 5 minutes due to inactivity.
            </p>
            <div className="mt-2">
              <Button
                size="xs"
                className="border-amber-700 bg-amber-500 text-white hover:border-amber-800 hover:bg-amber-600"
                onClick={() => {
                  toast.dismiss()
                  toast.success("Session extended")
                }}
              >
                Extend Session
              </Button>
            </div>
          </div>
        </div>
      ),
      { duration: 10000 }
    )
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        Invert Warning Toast
      </Button>
    </div>
  )
}
```

### Multi-action invert toast with avatar group (`c-sonner-17`)

Target: `components/examples/c-sonner-17.tsx`

Multi-action invert toast with avatar group

```tsx
import { toast } from "sonner"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const reviewers = [
  {
    name: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    initials: "AJ",
  },
  {
    name: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    initials: "SC",
  },
  {
    name: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    initials: "DK",
  },
]

export function Pattern() {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-invert text-invert-foreground rounded-md flex w-[356px] flex-col gap-3 border border-transparent p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Pull Request #284</p>
          <span className="text-invert-foreground/40 text-xs">2m ago</span>
        </div>
        <p className="text-invert-foreground/70 text-sm">
          All reviewers approved. Ready to merge into{" "}
          <code className="bg-background/10 rounded px-1 py-0.5 font-mono text-xs">
            main
          </code>
        </p>
        <Separator className="bg-border/10" />
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {reviewers.map((reviewer) => (
              <Avatar
                key={reviewer.name}
                className="border-invert size-6 border-2"
              >
                <AvatarImage src={reviewer.avatar} alt={reviewer.name} />
                <AvatarFallback className="text-[10px]">
                  {reviewer.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              size="xs"
              variant="outline"
              className="bg-background/10 border-border/10 text-invert-foreground"
              onClick={() => toast.dismiss()}
            >
              View
            </Button>
            <Button
              size="xs"
              className="border-green-800 bg-green-500 text-white hover:border-green-900 hover:bg-green-600"
              onClick={() => {
                toast.dismiss()
                toast.success("Merged successfully")
              }}
            >
              Merge
            </Button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        PR Merge Toast
      </Button>
    </div>
  )
}
```

### Toast with close button on top-right (`c-sonner-18`)

Target: `components/examples/c-sonner-18.tsx`

Toast with close button on top-right

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() =>
          toast("File uploaded successfully", {
            description: "report-2025.pdf has been saved to your documents.",
            closeButton: true,
            classNames: {
              closeButton: "left-auto! -right-4! -top-1!",
            },
          })
        }
        variant="outline"
        className="w-fit"
      >
        Toast with Close Button
      </Button>
    </div>
  )
}
```

### Toast with custom icon (`c-sonner-19`)

Target: `components/examples/c-sonner-19.tsx`

Toast with custom icon

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        size="sm"
        variant="outline"
        className="w-fit"
        onClick={() =>
          toast("Message sent", {
            description: "Your message has been delivered.",
            icon: (
              <IconPlaceholder
                lucide="SendIcon"
                tabler="IconSend"
                hugeicons="SentIcon"
                phosphor="PaperPlaneTiltIcon"
                remixicon="RiSendInsLine"
                className="size-4"
              />
            ),
          })
        }
      >
        Send Icon
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-fit"
        onClick={() =>
          toast("Download complete", {
            description: "design-assets.zip is ready.",
            icon: (
              <IconPlaceholder
                lucide="DownloadIcon"
                tabler="IconDownload"
                hugeicons="Download01Icon"
                phosphor="DownloadSimpleIcon"
                remixicon="RiDownload2Line"
                className="size-4"
              />
            ),
          })
        }
      >
        Download Icon
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-fit"
        onClick={() =>
          toast("Bookmark added", {
            description: "Saved to your collection.",
            icon: (
              <IconPlaceholder
                lucide="BookmarkIcon"
                tabler="IconBookmark"
                hugeicons="Bookmark02Icon"
                phosphor="BookmarkSimpleIcon"
                remixicon="RiBookmarkLine"
                className="size-4"
              />
            ),
          })
        }
      >
        Bookmark Icon
      </Button>
    </div>
  )
}
```

### Custom integration toast (`c-sonner-20`)

Target: `components/examples/c-sonner-20.tsx`

Custom integration toast

```tsx
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-popover text-popover-foreground border-border rounded-md flex w-[356px] flex-col gap-3 border p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="rounded-lg flex size-10 shrink-0 items-center justify-center bg-linear-to-br from-violet-500 to-purple-600 text-white shadow-sm">
            <IconPlaceholder
              lucide="LinkIcon"
              tabler="IconLink"
              hugeicons="Link01Icon"
              phosphor="LinkIcon"
              remixicon="RiLinkM"
              className="size-5"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <p className="text-sm font-semibold">Integration Connected</p>
            <p className="text-muted-foreground text-xs">workspace.slack.com</p>
          </div>
          <span className="flex items-center gap-1 text-xs text-green-600">
            <span className="size-1.5 rounded-full bg-green-500" />
            Active
          </span>
        </div>
        <Separator />
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          <span>Syncing 3 channels</span>
          <span>Last sync: just now</span>
        </div>
        <div className="flex gap-2">
          <Button
            size="xs"
            variant="outline"
            className="flex-1"
            onClick={() => toast.dismiss()}
          >
            <IconPlaceholder
              lucide="SettingsIcon"
              tabler="IconSettings"
              hugeicons="SettingsIcon"
              phosphor="GearIcon"
              remixicon="RiSettings3Line"
              className="size-3"
              aria-hidden="true"
            />
            Configure
          </Button>
          <Button size="xs" className="flex-1" onClick={() => toast.dismiss()}>
            Open Dashboard
          </Button>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit">
        Integration Toast
      </Button>
    </div>
  )
}
```

### Updatable toast with ID (`c-sonner-21`)

Target: `components/examples/c-sonner-21.tsx`

Updatable toast with ID

```tsx
"use client"

import { useRef } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

function LoadingToast({ message }: { message: string }) {
  return (
    <div className="bg-popover text-popover-foreground border-border rounded-md flex w-[356px] items-center gap-3 border p-4 shadow-lg">
      <Spinner className="size-4 opacity-60" />
      <p className="text-xs font-medium">{message}</p>
    </div>
  )
}

function SuccessToast() {
  return (
    <div className="bg-popover text-popover-foreground border-border rounded-md flex w-[356px] items-start gap-3 border p-4 shadow-lg">
      <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
        <IconPlaceholder
          lucide="CheckIcon"
          tabler="IconCheck"
          hugeicons="Tick02Icon"
          phosphor="CheckIcon"
          remixicon="RiCheckLine"
          className="size-3"
        />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-xs font-semibold">Upload complete!</p>
        <p className="text-muted-foreground text-xs">
          3 files uploaded successfully.
        </p>
      </div>
    </div>
  )
}

export function Pattern() {
  const toastId = useRef<string | number | undefined>(undefined)

  const startProgress = () => {
    toastId.current = toast.custom(
      () => <LoadingToast message="Preparing upload..." />,
      { duration: Infinity }
    )

    setTimeout(() => {
      toast.custom(() => <LoadingToast message="Uploading files... 30%" />, {
        id: toastId.current,
        duration: Infinity,
      })
    }, 1000)

    setTimeout(() => {
      toast.custom(() => <LoadingToast message="Uploading files... 70%" />, {
        id: toastId.current,
        duration: Infinity,
      })
    }, 2000)

    setTimeout(() => {
      toast.custom(() => <SuccessToast />, {
        id: toastId.current,
        duration: 4000,
      })
    }, 3000)
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={startProgress} variant="outline" className="w-fit">
        Updatable Toast
      </Button>
    </div>
  )
}
```
