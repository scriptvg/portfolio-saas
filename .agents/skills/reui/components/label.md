# Label (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

13 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-label-1` | Basic label. | registry:block | Basic label. |
| `c-label-2` | Label paired with a checkbox. | registry:block | Label paired with a checkbox. |
| `c-label-3` | Label for a textarea field. | registry:block | Label for a textarea field. |
| `c-label-4` | Label in a disabled state. | registry:block | Label in a disabled state. |
| `c-label-5` | Label with required indicator | registry:block | Label with required indicator |
| `c-label-6` | Label with optional indicator | registry:block | Label with optional indicator |
| `c-label-7` | Label with tooltip info icon | registry:block | Label with tooltip info icon |
| `c-label-8` | Label with badge indicator | registry:block | Label with badge indicator |
| `c-label-9` | Label with character counter | registry:block | Label with character counter |
| `c-label-10` | Label with helper description text | registry:block | Label with helper description text |
| `c-label-11` | Label with error state | registry:block | Label with error state |
| `c-label-12` | Label with inline edit toggle | registry:block | Label with inline edit toggle |
| `c-label-13` | Label with status indicator dot | registry:block | Label with status indicator dot |

## Source

### Basic label. (`c-label-1`)

Target: `components/examples/c-label-1.tsx`

Basic label.

```tsx
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-demo-username">Username</Label>
      <Input id="label-demo-username" placeholder="Enter your username…" />
    </Field>
  )
}
```

### Label paired with a checkbox. (`c-label-2`)

Target: `components/examples/c-label-2.tsx`

Label paired with a checkbox.

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="mx-auto w-auto">
      <Checkbox id="label-demo-terms" />
      <Label htmlFor="label-demo-terms">Accept terms and conditions</Label>
    </Field>
  )
}
```

### Label for a textarea field. (`c-label-3`)

Target: `components/examples/c-label-3.tsx`

Label for a textarea field.

```tsx
import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-demo-message">Message</Label>
      <Textarea id="label-demo-message" placeholder="Type your message here…" />
    </Field>
  )
}
```

### Label in a disabled state. (`c-label-4`)

Target: `components/examples/c-label-4.tsx`

Label in a disabled state.

```tsx
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field data-disabled={true} className="w-full max-w-xs">
      <Label htmlFor="label-demo-disabled">Disabled Field</Label>
      <Input id="label-demo-disabled" placeholder="Disabled input…" disabled />
    </Field>
  )
}
```

### Label with required indicator (`c-label-5`)

Target: `components/examples/c-label-5.tsx`

Label with required indicator

```tsx
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-required">
        Email address
        <span className="text-destructive">*</span>
      </Label>
      <Input
        id="label-required"
        type="email"
        placeholder="you@example.com"
        required
      />
    </Field>
  )
}
```

### Label with optional indicator (`c-label-6`)

Target: `components/examples/c-label-6.tsx`

Label with optional indicator

```tsx
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-optional">
        Phone number
        <span className="text-muted-foreground">(optional)</span>
      </Label>
      <Input id="label-optional" type="tel" placeholder="+1 (555) 000-0000" />
    </Field>
  )
}
```

### Label with tooltip info icon (`c-label-7`)

Target: `components/examples/c-label-7.tsx`

Label with tooltip info icon

```tsx
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-tooltip" className="gap-1">
        API Key
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center">
              <span className="text-muted-foreground inline-flex cursor-help">
                <IconPlaceholder
                  lucide="InfoIcon"
                  tabler="IconInfoCircle"
                  hugeicons="InformationCircleIcon"
                  phosphor="InfoIcon"
                  remixicon="RiInformationLine"
                  className="size-3.5"
                />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Your API key can be found in the developer settings.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Label>
      <Input
        id="label-tooltip"
        placeholder="sk_live_..."
        className="font-mono"
      />
    </Field>
  )
}
```

### Label with badge indicator (`c-label-8`)

Target: `components/examples/c-label-8.tsx`

Label with badge indicator

```tsx
import { Badge } from "@/components/reui/badge"

import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-badge" className="gap-2">
        Webhook URL
        <Badge variant="success-light" size="sm">
          Active
        </Badge>
      </Label>
      <Input
        id="label-badge"
        type="url"
        defaultValue="https://api.example.com/webhooks"
        className="font-mono text-xs"
      />
    </Field>
  )
}
```

### Label with character counter (`c-label-9`)

Target: `components/examples/c-label-9.tsx`

Label with character counter

```tsx
"use client"

import { useState } from "react"

import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  const [length, setLength] = useState(0)

  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-counter" className="justify-between">
        Bio
        <span className="text-muted-foreground">{length}/200</span>
      </Label>
      <Textarea
        id="label-counter"
        placeholder="Tell us about yourself…"
        maxLength={200}
        onChange={(e) => setLength(e.target.value.length)}
      />
    </Field>
  )
}
```

### Label with helper description text (`c-label-10`)

Target: `components/examples/c-label-10.tsx`

Label with helper description text

```tsx
import { Field, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <div className="flex flex-col gap-1">
        <Label htmlFor="label-helper">API Key</Label>
        <FieldDescription>
          Your secret key for API authentication
        </FieldDescription>
      </div>
      <Input
        id="label-helper"
        placeholder="sk_live_..."
        className="font-mono"
      />
    </Field>
  )
}
```

### Label with error state (`c-label-11`)

Target: `components/examples/c-label-11.tsx`

Label with error state

```tsx
import { Field, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs" data-invalid="true">
      <Label htmlFor="label-error">Email</Label>
      <Input
        id="label-error"
        type="email"
        defaultValue="invalid-email"
        aria-invalid="true"
      />
      <FieldError>Please enter a valid email address</FieldError>
    </Field>
  )
}
```

### Label with inline edit toggle (`c-label-12`)

Target: `components/examples/c-label-12.tsx`

Label with inline edit toggle

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Field, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState("My Awesome Project")

  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-inline-edit" className="gap-2">
        Project Name
        <Button
          size="icon-xs"
          variant="ghost"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? (
            <IconPlaceholder
              lucide="CheckIcon"
              tabler="IconCheck"
              hugeicons="Tick02Icon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              className="size-3.5"
            />
          ) : (
            <IconPlaceholder
              lucide="PencilIcon"
              tabler="IconPencil"
              hugeicons="PenIcon"
              phosphor="PencilIcon"
              remixicon="RiPencilLine"
              className="size-3.5"
            />
          )}
        </Button>
      </Label>
      {isEditing ? (
        <Input
          id="label-inline-edit"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      ) : (
        <FieldDescription>{value}</FieldDescription>
      )}
    </Field>
  )
}
```

### Label with status indicator dot (`c-label-13`)

Target: `components/examples/c-label-13.tsx`

Label with status indicator dot

```tsx
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-status" className="gap-1.5">
        Server Status
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-green-500" />
        </span>
      </Label>
      <Input id="label-status" defaultValue="Online" disabled />
    </Field>
  )
}
```
