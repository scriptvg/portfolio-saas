# Switch (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

14 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-switch-1` | Basic switch. | registry:block | Basic switch. |
| `c-switch-2` | Switch with description. | registry:block | Switch with description. |
| `c-switch-3` | Disabled switch. | registry:block | Disabled switch. |
| `c-switch-4` | Switch in different sizes. | registry:block | Switch in different sizes. |
| `c-switch-5` | Switch group | registry:block | Switch group |
| `c-switch-6` | Switch list in card with separators | registry:block | Switch list in card with separators |
| `c-switch-7` | Switch list in card with icons | registry:block | Switch list in card with icons |
| `c-switch-8` | Switch in frame | registry:block | Switch in frame |
| `c-switch-9` | Switch with tooltip info | registry:block | Switch with tooltip info |
| `c-switch-10` | Switch with badges | registry:block | Switch with badges |
| `c-switch-11` | Colored switches | registry:block | Colored switches |
| `c-switch-12` | Destructive switch with confirmation text | registry:block | Destructive switch with confirmation text |
| `c-switch-13` | Compact settings table with switches | registry:block | Compact settings table with switches |
| `c-switch-14` | Switch with descriptions in card grid | registry:block | Switch with descriptions in card grid |

## Source

### Basic switch. (`c-switch-1`)

Target: `components/examples/c-switch-1.tsx`

Basic switch.

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Field orientation="horizontal">
        <Switch id="switch-basic" />
        <FieldLabel htmlFor="switch-basic">Airplane Mode</FieldLabel>
      </Field>
    </div>
  )
}
```

### Switch with description. (`c-switch-2`)

Target: `components/examples/c-switch-2.tsx`

Switch with description.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <FieldLabel htmlFor="switch-with-desc" className="w-full max-w-xs">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-with-desc" />
        </Field>
      </FieldLabel>
    </div>
  )
}
```

### Disabled switch. (`c-switch-3`)

Target: `components/examples/c-switch-3.tsx`

Disabled switch.

```tsx
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <div className="flex items-center gap-2">
        <Switch id="switch-disabled-unchecked" disabled />
        <Label htmlFor="switch-disabled-unchecked">Disabled (Unchecked)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-disabled-checked" defaultChecked disabled />
        <Label htmlFor="switch-disabled-checked">Disabled (Checked)</Label>
      </div>
    </div>
  )
}
```

### Switch in different sizes. (`c-switch-4`)

Target: `components/examples/c-switch-4.tsx`

Switch in different sizes.

```tsx
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <div className="flex items-center gap-2">
        <Switch id="switch-sm" size="sm" />
        <Label htmlFor="switch-sm">Small Switch</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-default" size="default" />
        <Label htmlFor="switch-default">Default Switch</Label>
      </div>
    </div>
  )
}
```

### Switch group (`c-switch-5`)

Target: `components/examples/c-switch-5.tsx`

Switch group

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <Field className="w-auto">
      <FieldLabel>Notification Settings</FieldLabel>
      <Field orientation="horizontal">
        <Switch id="sg-email" defaultChecked />
        <FieldLabel htmlFor="sg-email">Email notifications</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="sg-sms" />
        <FieldLabel htmlFor="sg-sms">SMS notifications</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="sg-push" defaultChecked />
        <FieldLabel htmlFor="sg-push">Push notifications</FieldLabel>
      </Field>
    </Field>
  )
}
```

### Switch list in card with separators (`c-switch-6`)

Target: `components/examples/c-switch-6.tsx`

Switch list in card with separators

```tsx
import { Card } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <FieldGroup className="gap-0">
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle>Push notifications</FieldTitle>
            <Switch defaultChecked />
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle>Email notifications</FieldTitle>
            <Switch />
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle>SMS notifications</FieldTitle>
            <Switch />
          </FieldLabel>
        </Field>
      </FieldGroup>
    </Card>
  )
}
```

### Switch list in card with icons (`c-switch-7`)

Target: `components/examples/c-switch-7.tsx`

Switch list in card with icons

```tsx
import { Card } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <FieldGroup className="gap-0">
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle className="flex items-center gap-2">
              <IconPlaceholder
                lucide="BellIcon"
                tabler="IconBell"
                hugeicons="NotificationIcon"
                phosphor="BellIcon"
                remixicon="RiNotificationLine"
                aria-hidden="true"
                className="size-4 opacity-60"
              />
              Push notifications
            </FieldTitle>
            <Switch defaultChecked />
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle className="flex items-center gap-2">
              <IconPlaceholder
                lucide="MailIcon"
                tabler="IconMail"
                hugeicons="MailIcon"
                phosphor="EnvelopeIcon"
                remixicon="RiMailLine"
                aria-hidden="true"
                className="size-4 opacity-60"
              />
              Email notifications
            </FieldTitle>
            <Switch />
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle className="flex items-center gap-2">
              <IconPlaceholder
                lucide="SmartphoneIcon"
                tabler="IconDeviceMobile"
                hugeicons="SmartPhone01Icon"
                phosphor="DeviceMobileCameraIcon"
                remixicon="RiSmartphoneLine"
                aria-hidden="true"
                className="size-4 opacity-60"
              />
              SMS notifications
            </FieldTitle>
            <Switch />
          </FieldLabel>
        </Field>
      </FieldGroup>
    </Card>
  )
}
```

### Switch in frame (`c-switch-8`)

Target: `components/examples/c-switch-8.tsx`

Switch in frame

```tsx
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <Frame className="w-full max-w-xs" spacing="sm">
      <FrameHeader>
        <FrameTitle>Privacy Settings</FrameTitle>
      </FrameHeader>
      <FramePanel className="overflow-hidden p-0!">
        <FieldGroup className="gap-0">
          <Field>
            <FieldLabel className="justify-between p-3">
              <FieldTitle>Profile visibility</FieldTitle>
              <Switch defaultChecked />
            </FieldLabel>
          </Field>
          <Separator />
          <Field>
            <FieldLabel className="justify-between p-3">
              <FieldTitle>Show online status</FieldTitle>
              <Switch defaultChecked />
            </FieldLabel>
          </Field>
          <Separator />
          <Field>
            <FieldLabel className="justify-between p-3">
              <FieldTitle>Allow data collection</FieldTitle>
              <Switch />
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FramePanel>
    </Frame>
  )
}
```

### Switch with tooltip info (`c-switch-9`)

Target: `components/examples/c-switch-9.tsx`

Switch with tooltip info

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
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
      <Field orientation="horizontal">
        <Switch id="sw-tooltip" />
        <div className="flex items-center gap-1.5">
          <FieldLabel htmlFor="sw-tooltip">
            Two-factor authentication
          </FieldLabel>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-muted-foreground">
                <IconPlaceholder
                  lucide="HelpCircleIcon"
                  tabler="IconHelpCircle"
                  hugeicons="HelpCircleIcon"
                  phosphor="QuestionIcon"
                  remixicon="RiQuestionLine"
                  aria-hidden="true"
                  className="size-3.5"
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                Adds an extra layer of security by requiring a verification code
                on login.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Field>
    </div>
  )
}
```

### Switch with badges (`c-switch-10`)

Target: `components/examples/c-switch-10.tsx`

Switch with badges

```tsx
import { Badge } from "@/components/ui/badge"
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal">
        <Switch id="sw-badge-1" defaultChecked />
        <div className="flex items-center gap-2">
          <FieldLabel htmlFor="sw-badge-1">AI Copilot</FieldLabel>
          <Badge className="h-4.5 rounded-full px-1.5 text-[10px] tracking-wider uppercase">
            New
          </Badge>
        </div>
      </Field>
      <Field orientation="horizontal">
        <Switch id="sw-badge-2" />
        <div className="flex items-center gap-2">
          <FieldLabel htmlFor="sw-badge-2">Smart suggestions</FieldLabel>
          <Badge
            variant="secondary"
            className="h-4.5 rounded-full px-1.5 text-[10px] tracking-wider uppercase"
          >
            Beta
          </Badge>
        </div>
      </Field>
    </div>
  )
}
```

### Colored switches (`c-switch-11`)

Target: `components/examples/c-switch-11.tsx`

Colored switches

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal" className="w-auto">
        <Switch
          id="sw-blue"
          defaultChecked
          className="data-checked:bg-blue-500"
        />
        <FieldLabel htmlFor="sw-blue">Blue</FieldLabel>
      </Field>
      <Field orientation="horizontal" className="w-auto">
        <Switch
          id="sw-green"
          defaultChecked
          className="data-checked:bg-green-500"
        />
        <FieldLabel htmlFor="sw-green">Green</FieldLabel>
      </Field>
      <Field orientation="horizontal" className="w-auto">
        <Switch
          id="sw-yellow"
          defaultChecked
          className="data-checked:bg-yellow-500"
        />
        <FieldLabel htmlFor="sw-yellow">Yellow</FieldLabel>
      </Field>
    </div>
  )
}
```

### Destructive switch with confirmation text (`c-switch-12`)

Target: `components/examples/c-switch-12.tsx`

Destructive switch with confirmation text

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldLabel htmlFor="sw-danger">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle className="text-destructive">
              Delete all data on sign out
            </FieldTitle>
            <FieldDescription>
              When enabled, all local data will be permanently removed when you
              sign out. This action cannot be undone.
            </FieldDescription>
          </FieldContent>
          <Switch id="sw-danger" className="data-checked:bg-destructive" />
        </Field>
      </FieldLabel>
    </div>
  )
}
```

### Compact settings table with switches (`c-switch-13`)

Target: `components/examples/c-switch-13.tsx`

Compact settings table with switches

```tsx
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

const settings = [
  {
    id: "auto-save",
    label: "Auto-save",
    description: "Save changes automatically",
    checked: true,
  },
  {
    id: "spell-check",
    label: "Spell check",
    description: "Highlight spelling errors",
    checked: true,
  },
  {
    id: "line-numbers",
    label: "Line numbers",
    description: "Show line numbers in editor",
    checked: false,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <p className="mb-3 text-sm font-medium">Editor Preferences</p>
      <Separator />
      <div className="flex flex-col">
        {settings.map((setting) => (
          <label
            key={setting.id}
            htmlFor={setting.id}
            className="flex cursor-pointer items-center justify-between border-b py-3 last:border-b-0"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{setting.label}</span>
              <span className="text-muted-foreground text-xs">
                {setting.description}
              </span>
            </div>
            <Switch
              id={setting.id}
              defaultChecked={setting.checked}
              size="sm"
            />
          </label>
        ))}
      </div>
    </div>
  )
}
```

### Switch with descriptions in card grid (`c-switch-14`)

Target: `components/examples/c-switch-14.tsx`

Switch with descriptions in card grid

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const features = [
  {
    id: "feat-analytics",
    title: "Analytics",
    description: "Track page views and user interactions",
    checked: true,
    icon: (
      <IconPlaceholder
        lucide="BarChart3Icon"
        tabler="IconChartBar"
        hugeicons="ChartBarLineIcon"
        phosphor="ChartBarIcon"
        remixicon="RiBarChartBoxLine"
        aria-hidden="true"
        className="size-4"
      />
    ),
  },
  {
    id: "feat-logging",
    title: "Error Logging",
    description: "Capture and report runtime errors",
    checked: true,
    icon: (
      <IconPlaceholder
        lucide="BugIcon"
        tabler="IconBug"
        hugeicons="Bug01Icon"
        phosphor="BugIcon"
        remixicon="RiBugLine"
        aria-hidden="true"
        className="size-4"
      />
    ),
  },
  {
    id: "feat-cdn",
    title: "CDN Caching",
    description: "Serve static assets from edge network",
    checked: false,
    icon: (
      <IconPlaceholder
        lucide="GlobeIcon"
        tabler="IconWorld"
        hugeicons="Globe02Icon"
        phosphor="GlobeSimpleIcon"
        remixicon="RiGlobalLine"
        aria-hidden="true"
        className="size-4"
      />
    ),
  },
  {
    id: "feat-backup",
    title: "Auto Backup",
    description: "Daily snapshots of your database",
    checked: false,
    icon: (
      <IconPlaceholder
        lucide="DatabaseIcon"
        tabler="IconDatabase"
        hugeicons="Database02Icon"
        phosphor="DatabaseIcon"
        remixicon="RiDatabase2Line"
        aria-hidden="true"
        className="size-4"
      />
    ),
  },
]

export function Pattern() {
  return (
    <FieldGroup className="grid w-full max-w-md grid-cols-2 gap-4">
      {features.map((feature) => (
        <FieldLabel key={feature.id} htmlFor={feature.id} className="p-0!">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle className="flex items-center gap-2">
                <div className="bg-background border-border flex shrink-0 items-center justify-center rounded-md border p-1.5 shadow-xs shadow-black/5">
                  {feature.icon}
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-sm font-semibold">{feature.title}</span>
                  <span className="text-muted-foreground text-xs">
                    {feature.description}
                  </span>
                </div>
              </FieldTitle>
            </FieldContent>
            <Switch
              id={feature.id}
              defaultChecked={feature.checked}
              size="sm"
            />
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  )
}
```
