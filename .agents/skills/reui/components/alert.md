# Alert (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

20 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-alert-1` | Basic alert | registry:block | Basic alert |
| `c-alert-2` | Alert with icon | registry:block | Alert with icon |
| `c-alert-3` | Alert with icon and action buttons | registry:block | Alert with icon and action buttons |
| `c-alert-4` | Destructive alert with icon and action buttons | registry:block | Destructive alert with icon and action buttons |
| `c-alert-5` | Info alert with icon and action buttons | registry:block | Info alert with icon and action buttons |
| `c-alert-6` | Success alert | registry:block | Success alert |
| `c-alert-7` | Warning alert | registry:block | Warning alert |
| `c-alert-8` | Error alert | registry:block | Error alert |
| `c-alert-9` | Invert alert | registry:block | Invert alert |
| `c-alert-10` | Alert with icon and action buttons | registry:block | Alert with icon and action buttons |
| `c-alert-11` | Alert with description and action buttons | registry:block | Alert with description and action buttons |
| `c-alert-12` | Alert integrated within a Frame with reset borders | registry:block | Alert integrated within a Frame with reset borders |
| `c-alert-13` | Stacked alerts within a Frame | registry:block | Stacked alerts within a Frame |
| `c-alert-14` | Alert with actions integrated within a Frame | registry:block | Alert with actions integrated within a Frame |
| `c-alert-15` | Inverted alert variant | registry:block | Inverted alert variant |
| `c-alert-16` | Urgent billing notice | registry:block | Urgent billing notice |
| `c-alert-17` | Service status summary stacked within a frame | registry:block | Service status summary stacked within a frame |
| `c-alert-18` | Feature discovery alert | registry:block | Feature discovery alert |
| `c-alert-19` | User message notification alert | registry:block | User message notification alert |
| `c-alert-20` | User message notification alert | registry:block | User message notification alert |

## Source

### Basic alert (`c-alert-1`)

Target: `components/examples/c-alert-1.tsx`

Basic alert

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

export function Pattern() {
  return (
    <Alert>
      <AlertTitle>Alert!</AlertTitle>
      <AlertDescription>
        This is an alert with a title and description.
      </AlertDescription>
    </Alert>
  )
}
```

### Alert with icon (`c-alert-2`)

Target: `components/examples/c-alert-2.tsx`

Alert with icon

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert>
      <IconPlaceholder
        lucide="CircleCheckIcon"
        tabler="IconCircleCheck"
        hugeicons="CheckmarkCircle01Icon"
        phosphor="CheckCircleIcon"
        remixicon="RiCheckboxCircleLine"
      />
      <AlertTitle>Alert!</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  )
}
```

### Alert with icon and action buttons (`c-alert-3`)

Target: `components/examples/c-alert-3.tsx`

Alert with icon and action buttons

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert>
      <IconPlaceholder
        lucide="ShieldCheckIcon"
        tabler="IconShieldCheck"
        hugeicons="ShieldEnergyIcon"
        phosphor="ShieldCheckIcon"
        remixicon="RiShieldCheckLine"
      />
      <AlertTitle>Security Update</AlertTitle>
      <AlertDescription>Update your password and enable 2FA.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Dismiss
        </Button>
        <Button size="xs">Update</Button>
      </AlertAction>
    </Alert>
  )
}
```

### Destructive alert with icon and action buttons (`c-alert-4`)

Target: `components/examples/c-alert-4.tsx`

Destructive alert with icon and action buttons

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert variant="destructive">
      <IconPlaceholder
        lucide="CircleAlertIcon"
        tabler="IconAlertCircle"
        hugeicons="AlertCircleIcon"
        phosphor="WarningCircleIcon"
        remixicon="RiErrorWarningLine"
      />
      <AlertTitle>Payment Failed</AlertTitle>
      <AlertDescription>
        <p>Please check your payment details:</p>
        <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm">
          <li>Card number and expiry</li>
          <li>Billing address</li>
          <li>Available funds</li>
        </ul>
      </AlertDescription>
    </Alert>
  )
}
```

### Info alert with icon and action buttons (`c-alert-5`)

Target: `components/examples/c-alert-5.tsx`

Info alert with icon and action buttons

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert variant="info">
      <IconPlaceholder
        lucide="CircleAlertIcon"
        tabler="IconAlertCircle"
        hugeicons="AlertCircleIcon"
        phosphor="WarningCircleIcon"
        remixicon="RiErrorWarningLine"
      />
      <AlertTitle>Info! Something important</AlertTitle>
      <AlertDescription>
        This is an important message. Please read it carefully.
      </AlertDescription>
    </Alert>
  )
}
```

### Success alert (`c-alert-6`)

Target: `components/examples/c-alert-6.tsx`

Success alert

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert variant="success">
      <IconPlaceholder
        lucide="CircleCheckIcon"
        tabler="IconCircleCheck"
        hugeicons="CheckmarkCircle01Icon"
        phosphor="CheckCircleIcon"
        remixicon="RiCheckboxCircleLine"
      />
      <AlertTitle>Success! All good</AlertTitle>
      <AlertDescription>
        Everything is working as expected. You can continue with your task.
      </AlertDescription>
    </Alert>
  )
}
```

### Warning alert (`c-alert-7`)

Target: `components/examples/c-alert-7.tsx`

Warning alert

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert variant="warning">
      <IconPlaceholder
        lucide="AlertTriangleIcon"
        tabler="IconAlertTriangle"
        hugeicons="Alert02Icon"
        phosphor="WarningIcon"
        remixicon="RiAlertLine"
      />
      <AlertTitle>Warning! Something is wrong</AlertTitle>
      <AlertDescription>
        Please check your settings. If the problem persists, contact support.
      </AlertDescription>
    </Alert>
  )
}
```

### Error alert (`c-alert-8`)

Target: `components/examples/c-alert-8.tsx`

Error alert

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert variant="destructive">
      <IconPlaceholder
        lucide="CircleAlertIcon"
        tabler="IconAlertCircle"
        hugeicons="AlertCircleIcon"
        phosphor="WarningCircleIcon"
        remixicon="RiErrorWarningLine"
      />
      <AlertTitle>Error! Something went wrong</AlertTitle>
      <AlertDescription>
        Please try again. If the problem persists, contact support.
      </AlertDescription>
    </Alert>
  )
}
```

### Invert alert (`c-alert-9`)

Target: `components/examples/c-alert-9.tsx`

Invert alert

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert variant="invert">
      <IconPlaceholder
        lucide="CircleAlertIcon"
        tabler="IconAlertCircle"
        hugeicons="AlertCircleIcon"
        phosphor="WarningCircleIcon"
        remixicon="RiErrorWarningLine"
        className="text-success"
      />
      <AlertTitle>Notification! All good</AlertTitle>
      <AlertDescription>
        This is a notification alert with a title and description.
      </AlertDescription>
    </Alert>
  )
}
```

### Alert with icon and action buttons (`c-alert-10`)

Target: `components/examples/c-alert-10.tsx`

Alert with icon and action buttons

```tsx
import {
  Alert,
  AlertAction,
  AlertTitle,
} from "@/components/reui/alert"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert>
      <IconPlaceholder
        lucide="ShieldCheckIcon"
        tabler="IconShieldCheck"
        hugeicons="ShieldEnergyIcon"
        phosphor="ShieldCheckIcon"
        remixicon="RiShieldCheckLine"
      />
      <AlertTitle>Update your password and enable 2FA.</AlertTitle>
      <AlertAction>
        <Button variant="outline" size="xs">
          Dismiss
        </Button>
        <Button size="xs">Update</Button>
      </AlertAction>
    </Alert>
  )
}
```

### Alert with description and action buttons (`c-alert-11`)

Target: `components/examples/c-alert-11.tsx`

Alert with description and action buttons

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
} from "@/components/reui/alert"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Alert>
      <IconPlaceholder
        lucide="ShieldCheckIcon"
        tabler="IconShieldCheck"
        hugeicons="ShieldEnergyIcon"
        phosphor="ShieldCheckIcon"
        remixicon="RiShieldCheckLine"
      />
      <AlertDescription>Update your password and enable 2FA.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Dismiss
        </Button>
        <Button size="xs">Update</Button>
      </AlertAction>
    </Alert>
  )
}
```

### Alert integrated within a Frame with reset borders (`c-alert-12`)

Target: `components/examples/c-alert-12.tsx`

Alert integrated within a Frame with reset borders

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert className="border-0 shadow-none">
            <IconPlaceholder
              lucide="InfoIcon"
              tabler="IconInfoCircle"
              hugeicons="InformationCircleIcon"
              phosphor="InfoIcon"
              remixicon="RiInformationLine"
              className="text-destructive"
            />
            <AlertTitle>System Update</AlertTitle>
            <AlertDescription>
              A new system update is available. Please restart your application
              to apply the changes.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Stacked alerts within a Frame (`c-alert-13`)

Target: `components/examples/c-alert-13.tsx`

Stacked alerts within a Frame

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame stacked>
        <FramePanel className="p-0!">
          <Alert
            variant="success"
            className="rounded-none border-0 shadow-none"
          >
            <IconPlaceholder
              lucide="CircleCheckIcon"
              tabler="IconCircleCheck"
              hugeicons="CheckmarkCircle01Icon"
              phosphor="CheckCircleIcon"
              remixicon="RiCheckboxCircleLine"
            />
            <AlertTitle>Deployment Successful</AlertTitle>
            <AlertDescription>
              Your application has been successfully deployed to the production
              environment.
            </AlertDescription>
          </Alert>
        </FramePanel>
        <FramePanel className="p-0!">
          <Alert
            variant="warning"
            className="rounded-none border-0 shadow-none"
          >
            <IconPlaceholder
              lucide="AlertTriangleIcon"
              tabler="IconAlertTriangle"
              hugeicons="Alert02Icon"
              phosphor="WarningIcon"
              remixicon="RiAlertLine"
              className="text-yellow-500"
            />
            <AlertTitle>Resource Limit Reached</AlertTitle>
            <AlertAction>
              <Button size="xs">Verify</Button>
            </AlertAction>
            <AlertDescription>
              Your current plan has reached its resource limits. Consider
              upgrading to a higher tier.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Alert with actions integrated within a Frame (`c-alert-14`)

Target: `components/examples/c-alert-14.tsx`

Alert with actions integrated within a Frame

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert className="border-0 shadow-none">
            <IconPlaceholder
              lucide="ShieldCheckIcon"
              tabler="IconShieldCheck"
              hugeicons="ShieldEnergyIcon"
              phosphor="ShieldCheckIcon"
              remixicon="RiShieldCheckLine"
              className="text-emerald-500"
            />
            <AlertTitle>Security Update</AlertTitle>
            <AlertAction>
              <Button variant="outline" size="xs">
                Dismiss
              </Button>
              <Button size="xs">Update</Button>
            </AlertAction>
            <AlertDescription>
              Update your password and enable 2FA to improve your account
              security.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Inverted alert variant (`c-alert-15`)

Target: `components/examples/c-alert-15.tsx`

Inverted alert variant

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert variant="invert" className="border-0 shadow-none">
            <IconPlaceholder
              lucide="ZapIcon"
              tabler="IconBolt"
              hugeicons="ZapIcon"
              phosphor="LightningIcon"
              remixicon="RiFlashlightLine"
              className="text-yellow-500"
            />
            <AlertTitle>Pro Feature</AlertTitle>
            <AlertAction>
              <Button
                variant="outline"
                size="xs"
                className="bg-background/10 border-border/10"
              >
                Dismiss
              </Button>
              <Button
                size="xs"
                className="border-blue-800 bg-blue-500 text-white hover:border-blue-900 hover:bg-blue-600"
              >
                Upgrade
              </Button>
            </AlertAction>
            <AlertDescription>
              This feature is only available for Pro users. Upgrade your plan to
              get access.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Urgent billing notice (`c-alert-16`)

Target: `components/examples/c-alert-16.tsx`

Urgent billing notice

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert
            variant="destructive"
            className="bg-destructive/5 border-0 shadow-none"
          >
            <IconPlaceholder
              lucide="CreditCardIcon"
              tabler="IconCreditCard"
              hugeicons="CreditCardIcon"
              phosphor="CreditCardIcon"
              remixicon="RiBankCardLine"
            />
            <AlertTitle>Subscription Expiring</AlertTitle>
            <AlertAction>
              <Button size="xs" variant="destructive">
                Renew Now
              </Button>
            </AlertAction>
            <AlertDescription>
              Your annual subscription will expire in 3 days. Renew now to avoid
              service interruption and data loss.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Service status summary stacked within a frame (`c-alert-17`)

Target: `components/examples/c-alert-17.tsx`

Service status summary stacked within a frame

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame stacked>
        <FramePanel className="overflow-hidden p-0!">
          <Alert
            variant="success"
            className="border-0 bg-transparent shadow-none"
          >
            <IconPlaceholder
              lucide="DatabaseIcon"
              tabler="IconDatabase"
              hugeicons="Database02Icon"
              phosphor="DatabaseIcon"
              remixicon="RiDatabase2Line"
            />
            <AlertTitle>Database Connected</AlertTitle>
            <AlertDescription>
              All systems operational. Last sync: 2 minutes ago.
            </AlertDescription>
          </Alert>
        </FramePanel>
        <FramePanel className="overflow-hidden p-0!">
          <Alert
            variant="warning"
            className="border-0 bg-transparent shadow-none"
          >
            <IconPlaceholder
              lucide="GlobeIcon"
              tabler="IconWorld"
              hugeicons="Globe02Icon"
              phosphor="GlobeSimpleIcon"
              remixicon="RiGlobalLine"
            />
            <AlertTitle>API Latency Warning</AlertTitle>
            <AlertAction>
              <Button size="xs" variant="outline" className="h-7">
                <IconPlaceholder
                  lucide="RefreshCwIcon"
                  tabler="IconRefreshDot"
                  hugeicons="Refresh04Icon"
                  phosphor="ArrowsClockwiseIcon"
                  remixicon="RiRestartLine"
                  className="mr-1 size-3"
                />
                Retry
              </Button>
            </AlertAction>
            <AlertDescription>
              Increased latency detected in US-East regions. Our engineers are
              investigating.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Feature discovery alert (`c-alert-18`)

Target: `components/examples/c-alert-18.tsx`

Feature discovery alert

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame variant="ghost">
        <FramePanel className="overflow-hidden p-0!">
          <Alert variant="info" className="border-0 shadow-none">
            <IconPlaceholder
              lucide="LightbulbIcon"
              tabler="IconBulb"
              hugeicons="Idea01Icon"
              phosphor="LightbulbIcon"
              remixicon="RiLightbulbLine"
            />
            <AlertTitle>New: Advanced Analytics</AlertTitle>
            <AlertAction>
              <Button
                size="xs"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground -mt-1 -mr-2 size-7 p-0 hover:bg-transparent"
              >
                <IconPlaceholder
                  lucide="XIcon"
                  tabler="IconX"
                  hugeicons="MultiplicationSignIcon"
                  phosphor="XIcon"
                  remixicon="RiCloseLine"
                  className="size-3.5"
                />
              </Button>
            </AlertAction>
            <AlertDescription>
              We&apos;ve just released a new dashboard for tracking your
              team&apos;s performance.
              <Button
                variant="link"
                size="sm"
                className="text-info h-auto p-0 underline"
              >
                Explore features
              </Button>
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### User message notification alert (`c-alert-19`)

Target: `components/examples/c-alert-19.tsx`

User message notification alert

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert className="grid-cols-[32px_1fr] gap-x-3 border-0 shadow-none">
            <Avatar className="size-8 border">
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                alt="Alex Johnson"
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <AlertTitle className="flex items-center gap-2">
              <span className="truncate">Alex Johnson</span>
              <span className="text-muted-foreground truncate font-normal">
                sent you a message
              </span>
            </AlertTitle>
            <AlertAction>
              <Button size="xs" variant="outline">
                View
              </Button>
              <Button size="xs">Reply</Button>
            </AlertAction>
            <AlertDescription className="line-clamp-1">
              &quot;Hey! I&apos;ve finished the draft for the new design system.
              Let me know what you think when you have a moment.&quot;
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### User message notification alert (`c-alert-20`)

Target: `components/examples/c-alert-20.tsx`

User message notification alert

```tsx
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Frame, FramePanel } from "@/components/reui/frame"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert
            variant="invert"
            className="grid-cols-[32px_1fr] gap-x-3 border-0 shadow-none"
          >
            <Avatar className="border-border/10 size-8 border">
              <AvatarImage
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
                alt="Sarah Chen"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <AlertTitle className="flex items-center gap-2">
              <span className="truncate">Sarah Chen</span>
              <span className="text-invert-foreground/60 truncate font-normal">
                mentioned you in a comment
              </span>
            </AlertTitle>
            <AlertAction>
              <Button
                variant="outline"
                size="xs"
                className="bg-background/10 border-border/10"
              >
                Dismiss
              </Button>
              <Button
                size="xs"
                className="border-blue-800 bg-blue-500 text-white hover:border-blue-900 hover:bg-blue-600"
              >
                View
              </Button>
            </AlertAction>
            <AlertDescription className="text-invert-foreground/70 line-clamp-1">
              &quot;Great work on the user profile layout! I&apos;ve added some
              suggestions for the avatar spacing.&quot;
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}
```
