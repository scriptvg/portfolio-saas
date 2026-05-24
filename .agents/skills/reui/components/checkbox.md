# Checkbox (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

22 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-checkbox-1` | Basic checkbox with label | registry:block | Basic checkbox with label |
| `c-checkbox-2` | Disabled checkbox | registry:block | Disabled checkbox |
| `c-checkbox-3` | Invalid checkbox | registry:block | Invalid checkbox |
| `c-checkbox-4` | Indeterminate checkbox | registry:block | Indeterminate checkbox |
| `c-checkbox-5` | Checkbox with label and description | registry:block | Checkbox with label and description |
| `c-checkbox-6` | Colored checkbox | registry:block | Colored checkbox |
| `c-checkbox-7` | Circle checkbox | registry:block | Circle checkbox |
| `c-checkbox-8` | Checkbox group | registry:block | Checkbox group |
| `c-checkbox-9` | Card checkbox with group | registry:block | Card checkbox with group |
| `c-checkbox-10` | Checkbox group in a frame | registry:block | Checkbox group in a frame |
| `c-checkbox-11` | Card checkbox group with icons | registry:block | Card checkbox group with icons |
| `c-checkbox-12` | Card checkbox group with icons | registry:block | Card checkbox group with icons |
| `c-checkbox-13` | Custom positioned checkbox | registry:block | Custom positioned checkbox |
| `c-checkbox-14` | Custom positioned checkbox | registry:block | Custom positioned checkbox |
| `c-checkbox-15` | Avatar based card checkbox | registry:block | Avatar based card checkbox |
| `c-checkbox-16` | Nested checkbox group | registry:block | Nested checkbox group |
| `c-checkbox-17` | Payment method card checkbox | registry:block | Payment method card checkbox |
| `c-checkbox-18` | Checkbox with label and tooltip info | registry:block | Checkbox with label and tooltip info |
| `c-checkbox-19` | Checkbox group with badge | registry:block | Checkbox group with badge |
| `c-checkbox-20` | Checkbox with label and tooltip info | registry:block | Checkbox with label and tooltip info |
| `c-checkbox-21` | Inline horizontal checkbox group | registry:block | Inline horizontal checkbox group |
| `c-checkbox-22` | Checkbox with feature badge | registry:block | Checkbox with feature badge |

## Source

### Basic checkbox with label (`c-checkbox-1`)

Target: `components/examples/c-checkbox-1.tsx`

Basic checkbox with label

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto">
      <Checkbox id="terms" />
      <FieldLabel htmlFor="terms">Basic checkbox</FieldLabel>
    </Field>
  )
}
```

### Disabled checkbox (`c-checkbox-2`)

Target: `components/examples/c-checkbox-2.tsx`

Disabled checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <Field orientation="horizontal" data-disabled className="w-auto">
      <Checkbox id="disabled-2" disabled defaultChecked />
      <FieldLabel htmlFor="disabled-2">Disabled checkbox</FieldLabel>
    </Field>
  )
}
```

### Invalid checkbox (`c-checkbox-3`)

Target: `components/examples/c-checkbox-3.tsx`

Invalid checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto" data-invalid>
      <Checkbox id="invalid" aria-invalid />
      <FieldLabel htmlFor="invalid">Invalid checkbox</FieldLabel>
    </Field>
  )
}
```

### Indeterminate checkbox (`c-checkbox-4`)

Target: `components/examples/c-checkbox-4.tsx`

Indeterminate checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto">
      <Checkbox id="indeterminate" checked="indeterminate" />
      <FieldLabel htmlFor="indeterminate">Indeterminate state</FieldLabel>
    </Field>
  )
}
```

### Checkbox with label and description (`c-checkbox-5`)

Target: `components/examples/c-checkbox-5.tsx`

Checkbox with label and description

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto max-w-xs">
      <Checkbox id="terms-2" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="terms-2">Accept terms and conditions</FieldLabel>
        <FieldDescription>
          This checkbox is used to accept the terms and conditions.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}
```

### Colored checkbox (`c-checkbox-6`)

Target: `components/examples/c-checkbox-6.tsx`

Colored checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal" className="w-auto">
        <Checkbox
          id="color-1"
          defaultChecked
          className="data-checked:border-blue-500 data-checked:bg-blue-500 dark:data-checked:border-blue-500 dark:data-checked:bg-blue-500"
        />
        <FieldLabel htmlFor="color-1">Blue checkbox</FieldLabel>
      </Field>
      <Field orientation="horizontal" className="w-auto">
        <Checkbox
          id="color-2"
          defaultChecked
          className="data-checked:border-green-500 data-checked:bg-green-500 dark:data-checked:border-green-500 dark:data-checked:bg-green-500"
        />
        <FieldLabel htmlFor="color-2">Green checkbox</FieldLabel>
      </Field>
      <Field orientation="horizontal" className="w-auto">
        <Checkbox
          id="color-3"
          defaultChecked
          className="data-checked:border-yellow-500 data-checked:bg-yellow-500 dark:data-checked:border-yellow-500 dark:data-checked:bg-yellow-500"
        />
        <FieldLabel htmlFor="color-3">Yellow checkbox</FieldLabel>
      </Field>
    </div>
  )
}
```

### Circle checkbox (`c-checkbox-7`)

Target: `components/examples/c-checkbox-7.tsx`

Circle checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="relative w-auto">
      <Checkbox id="circle" className="rounded-full" defaultChecked />
      <FieldLabel
        htmlFor="circle"
        className="peer-data-checked:text-muted-foreground relative transition-colors after:absolute after:inset-x-0 after:top-1/2 after:h-px after:-translate-y-1/2 after:scale-x-0 after:bg-current after:transition-transform peer-data-checked:after:scale-x-100"
      >
        Circle checkbox
      </FieldLabel>
    </Field>
  )
}
```

### Checkbox group (`c-checkbox-8`)

Target: `components/examples/c-checkbox-8.tsx`

Checkbox group

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <Field className="w-auto">
      <FieldLabel>Notification Settings</FieldLabel>
      <Field orientation="horizontal">
        <Checkbox id="group-1" defaultChecked />
        <FieldLabel htmlFor="group-1">Email notifications</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="group-2" />
        <FieldLabel htmlFor="group-2">SMS notifications</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="group-3" defaultChecked />
        <FieldLabel htmlFor="group-3">Push notifications</FieldLabel>
      </Field>
    </Field>
  )
}
```

### Card checkbox with group (`c-checkbox-9`)

Target: `components/examples/c-checkbox-9.tsx`

Card checkbox with group

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"

export function Pattern() {
  return (
    <FieldGroup className="max-w-xs">
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox defaultChecked />
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}
```

### Checkbox group in a frame (`c-checkbox-10`)

Target: `components/examples/c-checkbox-10.tsx`

Checkbox group in a frame

```tsx
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <Frame className="w-full max-w-xs" spacing="sm">
      <FrameHeader>
        <FrameTitle>Notification Settings</FrameTitle>
      </FrameHeader>
      <FramePanel className="overflow-hidden p-0!">
        <FieldGroup className="gap-0">
          <Field>
            <FieldLabel className="p-3">
              <Checkbox defaultChecked />
              <FieldTitle>Push notifications</FieldTitle>
            </FieldLabel>
          </Field>
          <Separator />
          <Field>
            <FieldLabel className="p-3">
              <Checkbox />
              <FieldTitle>Email notifications</FieldTitle>
            </FieldLabel>
          </Field>
          <Separator />
          <Field>
            <FieldLabel className="p-3">
              <Checkbox />
              <FieldTitle>SMS notifications</FieldTitle>
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FramePanel>
    </Frame>
  )
}
```

### Card checkbox group with icons (`c-checkbox-11`)

Target: `components/examples/c-checkbox-11.tsx`

Card checkbox group with icons

```tsx
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <FieldGroup className="gap-0">
        <Field>
          <FieldLabel className="px-4 py-3">
            <Checkbox defaultChecked />
            <FieldTitle>Push notifications</FieldTitle>
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="px-4 py-3">
            <Checkbox />
            <FieldTitle>Email notifications</FieldTitle>
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="px-4 py-3">
            <Checkbox />
            <FieldTitle>SMS notifications</FieldTitle>
          </FieldLabel>
        </Field>
      </FieldGroup>
    </Card>
  )
}
```

### Card checkbox group with icons (`c-checkbox-12`)

Target: `components/examples/c-checkbox-12.tsx`

Card checkbox group with icons

```tsx
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <FieldGroup className="gap-0">
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle className="flex items-center gap-2">
              <IconPlaceholder
                lucide="LaptopIcon"
                tabler="IconDeviceLaptop"
                hugeicons="LaptopIcon"
                phosphor="LaptopIcon"
                remixicon="RiMacbookLine"
                aria-hidden="true"
                className="size-4 opacity-60"
              />
              Push notifications
            </FieldTitle>
            <Checkbox defaultChecked />
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
            <Checkbox />
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
            <Checkbox />
          </FieldLabel>
        </Field>
      </FieldGroup>
    </Card>
  )
}
```

### Custom positioned checkbox (`c-checkbox-13`)

Target: `components/examples/c-checkbox-13.tsx`

Custom positioned checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"

export function Pattern() {
  return (
    <FieldGroup className="w-full max-w-xs flex-row gap-4">
      <FieldLabel className="relative p-0">
        <Field orientation="horizontal">
          <Checkbox
            defaultChecked
            className="absolute -top-2 -right-2 size-5 rounded-full border-none shadow-none"
          />
          <FieldTitle className="justify-center">Billings</FieldTitle>
        </Field>
      </FieldLabel>
      <FieldLabel className="relative p-0">
        <Field orientation="horizontal" className="justify-center">
          <Checkbox className="absolute -top-2 -right-2 size-5 rounded-full border-none shadow-none" />
          <FieldTitle className="justify-center">Payments</FieldTitle>
        </Field>
      </FieldLabel>
      <FieldLabel className="relative p-0">
        <Field orientation="horizontal" className="justify-center">
          <Checkbox className="absolute -top-2 -right-2 size-5 rounded-full border-none shadow-none" />
          <FieldTitle className="justify-center">Invoices</FieldTitle>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}
```

### Custom positioned checkbox (`c-checkbox-14`)

Target: `components/examples/c-checkbox-14.tsx`

Custom positioned checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const items = [
  {
    title: "Payments",
    description: "Receive payments from your customers",
    icon: (
      <IconPlaceholder
        lucide="CircleDollarSignIcon"
        tabler="IconPremiumRights"
        hugeicons="DollarCircleIcon"
        phosphor="CurrencyCircleDollarIcon"
        remixicon="RiMoneyDollarCircleLine"
        aria-hidden="true"
        className="size-4"
      />
    ),
    checked: true,
  },
  {
    title: "Invoices",
    description: "Create and send invoices to your customers",
    icon: (
      <IconPlaceholder
        lucide="FileTextIcon"
        tabler="IconFileText"
        hugeicons="File02Icon"
        phosphor="FileTextIcon"
        remixicon="RiFileTextLine"
        aria-hidden="true"
        className="size-4"
      />
    ),
    checked: false,
  },
  {
    title: "Billing",
    description: "Manage your billing and subscriptions",
    icon: (
      <IconPlaceholder
        lucide="CreditCardIcon"
        tabler="IconCreditCard"
        hugeicons="CreditCardIcon"
        phosphor="CreditCardIcon"
        remixicon="RiBankCardLine"
        aria-hidden="true"
        className="size-4"
      />
    ),
    checked: false,
  },
  {
    title: "Reports",
    description: "View your reports and analytics",
    icon: (
      <IconPlaceholder
        lucide="ChartNoAxesColumnDecreasingIcon"
        tabler="IconAntennaBars5"
        hugeicons="SignalFull02Icon"
        phosphor="ChartBarIcon"
        remixicon="RiBarChart2Line"
        aria-hidden="true"
        className="size-4"
      />
    ),
    checked: false,
  },
]

export function Pattern() {
  return (
    <FieldGroup className="grid w-full max-w-xs grid-cols-2 gap-4">
      {items.map((item) => (
        <FieldLabel key={item.title} className="relative p-0">
          <Field orientation="horizontal">
            <Checkbox
              defaultChecked={item.checked}
              className="absolute top-3 right-3 size-5 rounded-full"
            />
            <FieldTitle className="flex flex-col items-start">
              <div className="bg-background border-border rounded-2xl flex shrink-0 items-center justify-center border p-2 shadow-xs shadow-black/5">
                {item.icon}
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-sm font-semibold"> {item.title} </span>
                <span className="text-muted-foreground text-xs">
                  {" "}
                  {item.description}{" "}
                </span>
              </div>
            </FieldTitle>
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  )
}
```

### Avatar based card checkbox (`c-checkbox-15`)

Target: `components/examples/c-checkbox-15.tsx`

Avatar based card checkbox

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"

export function Pattern() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldLabel className="relative p-0">
        <Field orientation="horizontal">
          <FieldTitle className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
                alt="Emma Wilson"
              />
              <AvatarFallback>EW</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">Emma Wilson</span>
              <span className="text-muted-foreground text-xs">@emmawilson</span>
            </div>
          </FieldTitle>
          <Checkbox defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}
```

### Nested checkbox group (`c-checkbox-16`)

Target: `components/examples/c-checkbox-16.tsx`

Nested checkbox group

```tsx
"use client"

import { useCallback, useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

interface Item {
  id: string
  label: string
  children?: Item[]
}

const data: Item[] = [
  {
    id: "admin",
    label: "Administration",
    children: [
      {
        id: "user-management",
        label: "User Management",
        children: [
          { id: "view-users", label: "View Users" },
          { id: "create-users", label: "Create Users" },
          { id: "edit-users", label: "Edit Users" },
        ],
      },
      {
        id: "role-management",
        label: "Role Management",
        children: [
          { id: "view-roles", label: "View Roles" },
          { id: "assign-roles", label: "Assign Roles" },
        ],
      },
    ],
  },
]

export function Pattern() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    "view-users": true,
    "create-users": true,
    "view-roles": true,
  })

  // Get all leaf nodes for a given node
  const getLeafIds = useCallback((item: Item): string[] => {
    if (!item.children) return [item.id]
    return item.children.flatMap(getLeafIds)
  }, [])

  // Check if a node is fully checked
  const isChecked = useCallback(
    (item: Item): boolean => {
      const leafIds = getLeafIds(item)
      return leafIds.every((id) => checked[id])
    },
    [checked, getLeafIds]
  )

  // Check if a node is indeterminate
  const isIndeterminate = useCallback(
    (item: Item): boolean => {
      const leafIds = getLeafIds(item)
      const checkedCount = leafIds.filter((id) => checked[id]).length
      return checkedCount > 0 && checkedCount < leafIds.length
    },
    [checked, getLeafIds]
  )

  const toggle = (item: Item) => {
    const leafIds = getLeafIds(item)
    const shouldCheck = !isChecked(item)

    const nextChecked = { ...checked }
    leafIds.forEach((id) => {
      nextChecked[id] = shouldCheck
    })
    setChecked(nextChecked)
  }

  const renderItem = (item: Item, level = 0) => {
    return (
      <div key={item.id} className="flex flex-col gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id={item.id}
            checked={isIndeterminate(item) ? "indeterminate" : isChecked(item)}
            onCheckedChange={() => toggle(item)}
          />
          <FieldLabel
            htmlFor={item.id}
            className={level === 0 ? "font-semibold" : "text-sm"}
          >
            {item.label}
          </FieldLabel>
        </Field>

        {item.children && (
          <div className="ml-7 flex flex-col gap-3">
            {item.children.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="mx-auto flex flex-col gap-3">
      {data.map((item) => renderItem(item))}
    </div>
  )
}
```

### Payment method card checkbox (`c-checkbox-17`)

Target: `components/examples/c-checkbox-17.tsx`

Payment method card checkbox

```tsx
"use client"

import { SVGProps } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel, FieldTitle } from "@/components/ui/field"

const MastercardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7" cy="12" r="7" fill="#EB001B" />
    <circle cx="17" cy="12" r="7" fill="#F79E1B" />
    <path
      d="M12 17.5C13.5 16.2 14.5 14.2 14.5 12C14.5 9.8 13.5 7.8 12 6.5C10.5 7.8 9.5 9.8 9.5 12C9.5 14.2 10.5 16.2 12 17.5Z"
      fill="#FF5F00"
    />
  </svg>
)

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldLabel htmlFor="mastercard" className="relative p-0!">
        <Field orientation="horizontal">
          <Checkbox
            id="mastercard"
            defaultChecked
            className="absolute top-3 right-3 size-5 rounded-full"
          />
          <FieldTitle className="flex flex-col items-start gap-4!">
            <div className="bg-background border-border rounded-lg flex size-10 items-center justify-center border p-1.5 shadow-xs shadow-black/5">
              <MastercardIcon className="size-full" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-sm font-medium">
                Mastercard ending in 8888
              </span>
              <span className="text-muted-foreground text-xs">
                Expires 09/25
              </span>
            </div>
          </FieldTitle>
        </Field>
      </FieldLabel>
    </div>
  )
}
```

### Checkbox with label and tooltip info (`c-checkbox-18`)

Target: `components/examples/c-checkbox-18.tsx`

Checkbox with label and tooltip info

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto">
      <Checkbox id="tooltip-checkbox" />
      <div className="flex items-center gap-1.5">
        <FieldLabel htmlFor="tooltip-checkbox">
          Enable advanced analytics
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
              Advanced analytics provides deeper insights into user behavior and
              system performance.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Field>
  )
}
```

### Checkbox group with badge (`c-checkbox-19`)

Target: `components/examples/c-checkbox-19.tsx`

Checkbox group with badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <Field className="w-auto">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-badge-1" />
        <div className="flex items-center gap-3">
          <FieldLabel htmlFor="checkbox-badge-1">
            AI-powered suggestions
          </FieldLabel>
          <Badge className="rounded-full uppercase" size="sm">
            New
          </Badge>
        </div>
      </Field>
      <Field orientation="horizontal" defaultChecked>
        <Checkbox id="checkbox-badge-2" />
        <div className="flex items-center gap-3">
          <FieldLabel htmlFor="checkbox-badge-2">
            Beta feature access
          </FieldLabel>
          <Badge
            variant="secondary"
            className="rounded-full uppercase"
            size="sm"
          >
            Beta
          </Badge>
        </div>
      </Field>
    </Field>
  )
}
```

### Checkbox with label and tooltip info (`c-checkbox-20`)

Target: `components/examples/c-checkbox-20.tsx`

Checkbox with label and tooltip info

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="w-auto">
      <Checkbox id="tooltip-checkbox" />

      <div className="flex items-center gap-1.5">
        <FieldLabel htmlFor="tooltip-checkbox">
          Enable advanced analytics
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
              Advanced analytics provides deeper insights into user behavior and
              system performance.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Field>
  )
}
```

### Inline horizontal checkbox group (`c-checkbox-21`)

Target: `components/examples/c-checkbox-21.tsx`

Inline horizontal checkbox group

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Field orientation="horizontal" className="w-auto">
        <Checkbox id="inline-1" defaultChecked />
        <FieldLabel htmlFor="inline-1" className="cursor-pointer">
          Read
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" className="w-auto">
        <Checkbox id="inline-2" />
        <FieldLabel htmlFor="inline-2" className="cursor-pointer">
          Write
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" className="w-auto">
        <Checkbox id="inline-4" defaultChecked />
        <FieldLabel htmlFor="inline-4" className="cursor-pointer">
          Delete
        </FieldLabel>
      </Field>
    </div>
  )
}
```

### Checkbox with feature badge (`c-checkbox-22`)

Target: `components/examples/c-checkbox-22.tsx`

Checkbox with feature badge

```tsx
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Pattern() {
  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal" className="w-auto">
        <Checkbox id="badge-1" defaultChecked />
        <div className="flex items-center gap-2">
          <FieldLabel htmlFor="badge-1">AI-powered suggestions</FieldLabel>
          <Badge className="h-4.5 rounded-full px-1.5 text-[10px] tracking-wider uppercase">
            New
          </Badge>
        </div>
      </Field>

      <Field orientation="horizontal" className="w-auto">
        <Checkbox id="badge-2" />
        <div className="flex items-center gap-2">
          <FieldLabel htmlFor="badge-2">Beta feature access</FieldLabel>
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
