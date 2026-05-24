# Select (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

33 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-select-1` | A basic select component with a list of options | registry:block | A basic select component with a list of options |
| `c-select-2` | Select with icons and placeholder state | registry:block | Select with icons and placeholder state |
| `c-select-3` | Select component with grouped options and labels | registry:block | Select component with grouped options and labels |
| `c-select-4` | Select component with a large list of options | registry:block | Select component with a large list of options |
| `c-select-5` | Select component with small trigger size | registry:block | Select component with small trigger size |
| `c-select-6` | Select component with a subscription plan style | registry:block | Select component with a subscription plan style |
| `c-select-7` | Select component with item alignment disabled | registry:block | Select component with item alignment disabled |
| `c-select-8` | Select component within a Field with label and description | registry:block | Select component within a Field with label and description |
| `c-select-9` | Select component in an invalid state | registry:block | Select component in an invalid state |
| `c-select-10` | Select component in a disabled state | registry:block | Select component in a disabled state |
| `c-select-11` | Select component inside a Dialog | registry:block | Select component inside a Dialog |
| `c-select-12` | Select component with single selection | registry:block | Select component with single selection |
| `c-select-13` | Select component inline with Input | registry:block | Select component inline with Input |
| `c-select-14` | Select component with Button side by side | registry:block | Select component with Button side by side |
| `c-select-15` | Select component with item alignment enabled | registry:block | Select component with item alignment enabled |
| `c-select-16` | Select with custom access level descriptions | registry:block | Select with custom access level descriptions |
| `c-select-17` | Select with colored bullets for status | registry:block | Select with colored bullets for status |
| `c-select-18` | Select with user avatars | registry:block | Select with user avatars |
| `c-select-19` | Select with status badges | registry:block | Select with status badges |
| `c-select-20` | Select with indicator on the left side | registry:block | Select with indicator on the left side |
| `c-select-21` | Select with clear button | registry:block | Select with clear button |
| `c-select-22` | Select with custom chevrons up down icon | registry:block | Select with custom chevrons up down icon |
| `c-select-23` | Select with colored status dots | registry:block | Select with colored status dots |
| `c-select-24` | Select with grouped options and separators | registry:block | Select with grouped options and separators |
| `c-select-25` | Country picker select with flag emojis | registry:block | Country picker select with flag emojis |
| `c-select-26` | Status filter select with colored dots | registry:block | Status filter select with colored dots |
| `c-select-27` | Select with description text per option | registry:block | Select with description text per option |
| `c-select-28` | Timezone select with UTC offsets | registry:block | Timezone select with UTC offsets |
| `c-select-29` | Select with avatar items for team member assignment | registry:block | Select with avatar items for team member assignment |
| `c-select-30` | Priority select with colored badges | registry:block | Priority select with colored badges |
| `c-select-31` | Font family select with preview | registry:block | Font family select with preview |
| `c-select-32` | Select with icon-labeled categories | registry:block | Select with icon-labeled categories |
| `c-select-33` | Size variant select with small trigger | registry:block | Size variant select with small trigger |

## Source

### A basic select component with a list of options (`c-select-1`)

Target: `components/examples/c-select-1.tsx`

A basic select component with a list of options

```tsx
"use client"

import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items
              .filter((item) => item.value !== null)
              .map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with icons and placeholder state (`c-select-2`)

Target: `components/examples/c-select-2.tsx`

Select with icons and placeholder state

```tsx
"use client"

import { ReactElement } from "react"

import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface IconPlaceholderProps {
  lucide: string
  tabler: string
  hugeicons: string
  phosphor: string
  remixicon: string
  className?: string
}

interface Item {
  label: string
  value: string | null
  icon: ReactElement<IconPlaceholderProps>
}

const items: Item[] = [
  {
    label: "Select an option",
    value: null,
    icon: (
      <IconPlaceholder
        lucide="ScanIcon"
        tabler="IconLineScan"
        hugeicons="ScanIcon"
        phosphor="ScanIcon"
        remixicon="RiQrScan2Line"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Dashboard",
    value: "dashboard",
    icon: (
      <IconPlaceholder
        lucide="LayoutDashboardIcon"
        tabler="IconLayoutDashboard"
        hugeicons="DashboardSquare02Icon"
        phosphor="LayoutIcon"
        remixicon="RiDashboardLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Activity",
    value: "activity",
    icon: (
      <IconPlaceholder
        lucide="ActivityIcon"
        tabler="IconActivity"
        hugeicons="ActivityIcon"
        phosphor="ActivityIcon"
        remixicon="RiPulseLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Security",
    value: "security",
    icon: (
      <IconPlaceholder
        lucide="ShieldIcon"
        tabler="IconShield"
        hugeicons="Shield01Icon"
        phosphor="ShieldIcon"
        remixicon="RiShieldLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    label: "Settings",
    value: "settings",
    icon: (
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
        className="text-muted-foreground size-4"
      />
    ),
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.slice(1).map((item) => (
              <SelectItem key={item.value} value={item.value!}>
                {item.icon}
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select component with grouped options and labels (`c-select-3`)

Target: `components/examples/c-select-3.tsx`

Select component with grouped options and labels

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
]

const vegetables = [
  { label: "Carrot", value: "carrot" },
  { label: "Broccoli", value: "broccoli" },
  { label: "Spinach", value: "spinach" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {fruits.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            {vegetables.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select component with a large list of options (`c-select-4`)

Target: `components/examples/c-select-4.tsx`

Select component with a large list of options

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = Array.from({ length: 100 }).map((_, i) => ({
  label: `Item ${i}`,
  value: `item-${i}`,
}))

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select component with small trigger size (`c-select-5`)

Target: `components/examples/c-select-5.tsx`

Select component with small trigger size

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value as string}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select component with a subscription plan style (`c-select-6`)

Target: `components/examples/c-select-6.tsx`

Select component with a subscription plan style

```tsx
import { Field } from "@/components/ui/field"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and businesses.",
  },
  {
    name: "Enterprise",
    description: "Advanced features for large organizations.",
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue="Starter">
        <SelectTrigger className="h-auto! w-full">
          <SelectValue placeholder="Select plan" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {plans.map((plan) => (
              <SelectItem key={plan.name} value={plan.name}>
                <SelectPlanItem plan={plan} />
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}

function SelectPlanItem({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <Item size="xs" className="w-full p-0">
      <ItemContent className="gap-0">
        <ItemTitle>{plan.name}</ItemTitle>
        <ItemDescription className="text-xs">
          {plan.description}
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}
```

### Select component with item alignment disabled (`c-select-7`)

Target: `components/examples/c-select-7.tsx`

Select component with item alignment disabled

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes", disabled: true },
  { label: "Pineapple", value: "pineapple" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value as string}
                disabled={item.disabled}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select component within a Field with label and description (`c-select-8`)

Target: `components/examples/c-select-8.tsx`

Select component within a Field with label and description

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="select-fruit">Favorite Fruit</FieldLabel>
      <Select>
        <SelectTrigger id="select-fruit">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value as string}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        Choose your favorite fruit from the list.
      </FieldDescription>
    </Field>
  )
}
```

### Select component in an invalid state (`c-select-9`)

Target: `components/examples/c-select-9.tsx`

Select component in an invalid state

```tsx
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs" data-invalid>
      <FieldLabel htmlFor="select-fruit-invalid">Favorite Fruit</FieldLabel>
      <Select>
        <SelectTrigger id="select-fruit-invalid" aria-invalid>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value as string}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError errors={[{ message: "Please select a valid fruit." }]} />
    </Field>
  )
}
```

### Select component in a disabled state (`c-select-10`)

Target: `components/examples/c-select-10.tsx`

Select component in a disabled state

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes", disabled: true },
  { label: "Pineapple", value: "pineapple" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs" data-disabled>
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value as string}
                disabled={item.disabled}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select component inside a Dialog (`c-select-11`)

Target: `components/examples/c-select-11.tsx`

Select component inside a Dialog

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
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Example</DialogTitle>
            <DialogDescription>
              Use the select below to choose a fruit.
            </DialogDescription>
          </DialogHeader>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value as string}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </DialogContent>
      </Dialog>
    </Field>
  )
}
```

### Select component with single selection (`c-select-12`)

Target: `components/examples/c-select-12.tsx`

Select component with single selection

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Watermelon", value: "watermelon" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select fruits" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value as string}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select component inline with Input (`c-select-13`)

Target: `components/examples/c-select-13.tsx`

Select component inline with Input

```tsx
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const filterItems = [
  { label: "Filter", value: null },
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
]

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs items-center gap-2">
      <Input placeholder="Search..." className="flex-1" />
      <Select>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {filterItems.map((item) => (
              <SelectItem key={item.value} value={item.value as string}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
```

### Select component with Button side by side (`c-select-14`)

Target: `components/examples/c-select-14.tsx`

Select component with Button side by side

```tsx
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
]

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs items-center gap-2">
      <Select>
        <SelectTrigger className="grow">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value as string}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button>Submit</Button>
    </div>
  )
}
```

### Select component with item alignment enabled (`c-select-15`)

Target: `components/examples/c-select-15.tsx`

Select component with item alignment enabled

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value as string}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with custom access level descriptions (`c-select-16`)

Target: `components/examples/c-select-16.tsx`

Select with custom access level descriptions

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const accessLevels = [
  {
    value: "full_access",
    label: "Full access",
    description: "Can modify list access",
  },
  {
    value: "read_write",
    label: "Read and write",
    description: "Can edit & publish lists",
  },
  {
    value: "read_only",
    label: "Read only",
    description: "Can only view lists",
  },
  {
    value: "no_access",
    label: "No access",
    description: "Cannot view or edit lists",
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={accessLevels[1].value}>
        <SelectTrigger className="w-[240px] [&_small]:hidden">
          <SelectValue placeholder="Select access level" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {accessLevels.map((level) => (
              <SelectItem
                key={level.value}
                value={level.value}
                className="[&_svg]:text-primary"
              >
                <span className="flex flex-col items-start gap-px">
                  <span className="font-medium">{level.label}</span>
                  <small className="text-muted-foreground text-xs">
                    {level.description}
                  </small>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with colored bullets for status (`c-select-17`)

Target: `components/examples/c-select-17.tsx`

Select with colored bullets for status

```tsx
import { cn } from "@/lib/utils"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statuses = [
  { value: "1", label: "In Progress", color: "bg-violet-500" },
  { value: "2", label: "Completed", color: "bg-green-500" },
  { value: "3", label: "Pending", color: "bg-primary" },
  { value: "4", label: "Cancelled", color: "bg-yellow-500" },
  { value: "5", label: "Rejected", color: "bg-destructive" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={statuses[1].value}>
        <SelectTrigger>
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                <span className="flex items-center gap-2">
                  <span className={cn("size-1.5 rounded-full", status.color)} />
                  <span>{status.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with user avatars (`c-select-18`)

Target: `components/examples/c-select-18.tsx`

Select with user avatars

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const users = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    initials: "AJ",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    initials: "SC",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    email: "michael@example.com",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    initials: "MR",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
    initials: "EW",
  },
  {
    id: "5",
    name: "David Kim",
    email: "david@example.com",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    initials: "DK",
  },
  {
    id: "6",
    name: "Aron Thompson",
    email: "lisa@example.com",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
    initials: "LT",
  },
  {
    id: "7",
    name: "James Brown",
    email: "james@example.com",
    avatar:
      "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    initials: "JB",
  },
  {
    id: "8",
    name: "Maria Garcia",
    email: "maria@example.com",
    avatar:
      "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80",
    initials: "MG",
  },
  {
    id: "9",
    name: "Nick Johnson",
    email: "nick@example.com",
    avatar:
      "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80",
    initials: "NJ",
  },
  {
    id: "10",
    name: "Liam Thompson",
    email: "liam@example.com",
    avatar:
      "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80",
    initials: "LT",
  },
]

export function Pattern() {
  const mappedUsers = users.map((user) => ({
    value: user.id,
    label: user.name,
    avatar: user.avatar,
    initials: user.initials,
  }))

  return (
    <Field className="max-w-xs">
      <Select defaultValue={mappedUsers[2].value}>
        <SelectTrigger>
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Select a user</SelectLabel>
            {mappedUsers.map((user) => (
              <SelectItem key={user.value} value={user.value}>
                <span className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarImage src={user.avatar} alt={user.label} />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                  <span>{user.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with status badges (`c-select-19`)

Target: `components/examples/c-select-19.tsx`

Select with status badges

```tsx
import { Badge, BadgeProps } from "@/components/reui/badge"

import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statuses = [
  { value: "1", label: "In Progress", variant: "warning-outline" },
  { value: "2", label: "Completed", variant: "success-outline" },
  { value: "3", label: "Pending", variant: "info-outline" },
  { value: "4", label: "Cancelled", variant: "primary-outline" },
  { value: "5", label: "Rejected", variant: "destructive-outline" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={statuses[2].value}>
        <SelectTrigger className="w-[200px]">
          <span className="flex items-center gap-2">
            Status:
            <SelectValue placeholder="Select status" />
          </span>
        </SelectTrigger>
        <SelectContent position="popper">
          {statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              <Badge variant={status.variant as BadgeProps["variant"]}>
                {status.label}
              </Badge>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with indicator on the left side (`c-select-20`)

Target: `components/examples/c-select-20.tsx`

Select with indicator on the left side

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select an option", value: null },
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.slice(1).map((item) => (
              <SelectItem
                key={item.value}
                value={item.value as string}
                className="pr-2! pl-8 [&>span:first-child]:right-auto! [&>span:first-child]:left-2!"
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with clear button (`c-select-21`)

Target: `components/examples/c-select-21.tsx`

Select with clear button

```tsx
"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "svelte", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

export function Pattern() {
  const [value, setValue] = useState("")

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setValue("")
  }

  return (
    <Field className="max-w-xs">
      <Select key={value || "__empty__"} value={value} onValueChange={setValue}>
        <SelectTrigger
          className={cn(value !== "" && "[&>svg:last-child]:hidden!")}
        >
          <SelectValue placeholder="Select framework" />
          {value !== "" ? (
            <div
              role="button"
              tabIndex={-1}
              onClick={handleClear}
              onPointerDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              className="text-muted-foreground hover:text-foreground flex size-4 items-center justify-center rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            >
              <IconPlaceholder
                lucide="XIcon"
                tabler="IconX"
                hugeicons="MultiplicationSignIcon"
                phosphor="XIcon"
                remixicon="RiCloseLine"
                className="size-4"
              />
              <span className="sr-only">Clear selection</span>
            </div>
          ) : null}
        </SelectTrigger>
        <SelectContent position="popper">
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with custom chevrons up down icon (`c-select-22`)

Target: `components/examples/c-select-22.tsx`

Select with custom chevrons up down icon

```tsx
"use client"

import { useState } from "react"

import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
]

export function Pattern() {
  const [value, setValue] = useState("")

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setValue("")
  }

  return (
    <Field className="max-w-xs">
      <Select key={value || "__empty__"} value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[200px] [&>svg:last-child]:hidden!">
          <SelectValue placeholder="Select an option" />
          {value !== "" ? (
            <div
              role="button"
              tabIndex={-1}
              onClick={handleClear}
              onPointerDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              className="text-muted-foreground hover:text-foreground flex size-4 items-center justify-center rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            >
              <IconPlaceholder
                lucide="XIcon"
                tabler="IconX"
                hugeicons="MultiplicationSignIcon"
                phosphor="XIcon"
                remixicon="RiCloseLine"
                className="size-4"
              />
              <span className="sr-only">Clear selection</span>
            </div>
          ) : (
            <IconPlaceholder
              lucide="ChevronsUpDownIcon"
              tabler="IconSelector"
              hugeicons="UnfoldMoreIcon"
              phosphor="CaretUpDownIcon"
              remixicon="RiExpandUpDownLine"
              className="text-muted-foreground size-4"
            />
          )}
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with colored status dots (`c-select-23`)

Target: `components/examples/c-select-23.tsx`

Select with colored status dots

```tsx
"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statuses = [
  { value: "ready", label: "Ready", color: "bg-emerald-400" },
  { value: "error", label: "Error", color: "bg-red-500" },
  { value: "building", label: "Building", color: "bg-amber-500" },
  { value: "queued", label: "Queued", color: "bg-blue-500" },
  { value: "initializing", label: "Initializing", color: "bg-primary" },
  { value: "canceled", label: "Canceled", color: "bg-fuchsia-500" },
]

export function Pattern() {
  const [selected, setSelected] = useState<string>(statuses[0].value)

  return (
    <Field className="max-w-xs">
      <Select value={selected} onValueChange={(val) => setSelected(val)}>
        <SelectTrigger className="w-full justify-between">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent position="popper" className="min-w-48">
          <SelectGroup>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                <div className="flex items-center gap-2">
                  <div className={cn("size-2 rounded-full", status.color)} />
                  <span>{status.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with grouped options and separators (`c-select-24`)

Target: `components/examples/c-select-24.tsx`

Select with grouped options and separators

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const frontend = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
]

const backend = [
  { label: "Node.js", value: "nodejs" },
  { label: "Python", value: "python" },
  { label: "Go", value: "go" },
]

const allItems = [
  { label: "Select a framework", value: null },
  ...frontend,
  ...backend,
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Frontend</SelectLabel>
            {frontend.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Backend</SelectLabel>
            {backend.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Country picker select with flag emojis (`c-select-25`)

Target: `components/examples/c-select-25.tsx`

Country picker select with flag emojis

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const countries = [
  { value: "us", label: "United States", flag: "\u{1F1FA}\u{1F1F8}" },
  { value: "gb", label: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}" },
  { value: "de", label: "Germany", flag: "\u{1F1E9}\u{1F1EA}" },
  { value: "fr", label: "France", flag: "\u{1F1EB}\u{1F1F7}" },
  { value: "jp", label: "Japan", flag: "\u{1F1EF}\u{1F1F5}" },
  { value: "au", label: "Australia", flag: "\u{1F1E6}\u{1F1FA}" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={countries[0].value}>
        <SelectTrigger>
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                <span className="flex items-center gap-2">
                  <span>{country.flag}</span>
                  <span>{country.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Status filter select with colored dots (`c-select-26`)

Target: `components/examples/c-select-26.tsx`

Status filter select with colored dots

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statuses = [
  { value: "all", label: "All Status", color: "" },
  { value: "active", label: "Active", color: "bg-green-500" },
  { value: "inactive", label: "Inactive", color: "bg-red-500" },
  { value: "pending", label: "Pending", color: "bg-yellow-500" },
  { value: "archived", label: "Archived", color: "bg-gray-400" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={statuses[0].value}>
        <SelectTrigger>
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                <span className="flex items-center gap-2">
                  {status.color && (
                    <span
                      className={`size-2 shrink-0 rounded-full ${status.color}`}
                    />
                  )}
                  <span>{status.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with description text per option (`c-select-27`)

Target: `components/examples/c-select-27.tsx`

Select with description text per option

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const plans = [
  {
    value: "startup",
    label: "Startup",
    description: "For small teams up to 10",
  },
  {
    value: "business",
    label: "Business",
    description: "For growing companies",
  },
  {
    value: "enterprise",
    label: "Enterprise",
    description: "Unlimited everything",
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={plans[0].value}>
        <SelectTrigger className="w-[240px] [&_span.text-muted-foreground]:hidden">
          <SelectValue placeholder="Select plan" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {plans.map((plan) => (
              <SelectItem
                key={plan.value}
                value={plan.value}
                className="[&_svg]:text-primary"
              >
                <div className="flex flex-col items-start gap-px">
                  <span className="font-medium">{plan.label}</span>
                  <span className="text-muted-foreground text-xs">
                    {plan.description}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Timezone select with UTC offsets (`c-select-28`)

Target: `components/examples/c-select-28.tsx`

Timezone select with UTC offsets

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const americas = [
  { value: "est", label: "EST", offset: "UTC-5" },
  { value: "cst", label: "CST", offset: "UTC-6" },
  { value: "pst", label: "PST", offset: "UTC-8" },
]

const europe = [
  { value: "gmt", label: "GMT", offset: "UTC+0" },
  { value: "cet", label: "CET", offset: "UTC+1" },
]

const asia = [
  { value: "ist", label: "IST", offset: "UTC+5:30" },
  { value: "jst", label: "JST", offset: "UTC+9" },
]

const allItems = [
  { label: "Select a timezone", value: null },
  ...americas.map((tz) => ({
    label: `${tz.label} (${tz.offset})`,
    value: tz.value,
  })),
  ...europe.map((tz) => ({
    label: `${tz.label} (${tz.offset})`,
    value: tz.value,
  })),
  ...asia.map((tz) => ({
    label: `${tz.label} (${tz.offset})`,
    value: tz.value,
  })),
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Americas</SelectLabel>
            {americas.map((tz) => (
              <SelectItem key={tz.value} value={tz.value}>
                <span className="flex items-center justify-between gap-3">
                  <span>{tz.label}</span>
                  <span className="text-muted-foreground text-xs">
                    {tz.offset}
                  </span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            {europe.map((tz) => (
              <SelectItem key={tz.value} value={tz.value}>
                <span className="flex items-center justify-between gap-3">
                  <span>{tz.label}</span>
                  <span className="text-muted-foreground text-xs">
                    {tz.offset}
                  </span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            {asia.map((tz) => (
              <SelectItem key={tz.value} value={tz.value}>
                <span className="flex items-center justify-between gap-3">
                  <span>{tz.label}</span>
                  <span className="text-muted-foreground text-xs">
                    {tz.offset}
                  </span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with avatar items for team member assignment (`c-select-29`)

Target: `components/examples/c-select-29.tsx`

Select with avatar items for team member assignment

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const members = [
  {
    value: "sarah",
    label: "Sarah Chen",
    initials: "SC",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
  },
  {
    value: "alex",
    label: "Alex Kim",
    initials: "AK",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
  },
  {
    value: "maria",
    label: "Maria Garcia",
    initials: "MG",
    avatar:
      "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80",
  },
  {
    value: "james",
    label: "James Wilson",
    initials: "JW",
    avatar:
      "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={members[0].value}>
        <SelectTrigger>
          <SelectValue placeholder="Select member" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Assign to</SelectLabel>
            {members.map((member) => (
              <SelectItem key={member.value} value={member.value}>
                <span className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarImage src={member.avatar} alt={member.label} />
                    <AvatarFallback className="text-xs">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span>{member.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Priority select with colored badges (`c-select-30`)

Target: `components/examples/c-select-30.tsx`

Priority select with colored badges

```tsx
import { Badge } from "@/components/reui/badge"

import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const priorities = [
  { value: "none", label: "No Priority", variant: "outline" as const },
  { value: "urgent", label: "Urgent", variant: "destructive" as const },
  { value: "high", label: "High", variant: "warning" as const },
  { value: "medium", label: "Medium", variant: "warning-light" as const },
  { value: "low", label: "Low", variant: "info" as const },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={priorities[0].value}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {priorities.map((priority) => (
              <SelectItem key={priority.value} value={priority.value}>
                <span className="flex items-center gap-2">
                  <Badge variant={priority.variant} size="sm">
                    {priority.label}
                  </Badge>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Font family select with preview (`c-select-31`)

Target: `components/examples/c-select-31.tsx`

Font family select with preview

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const fonts = [
  { value: "sans", label: "Inter", className: "font-sans" },
  { value: "mono", label: "Mono", className: "font-mono" },
  { value: "serif", label: "Serif", className: "font-serif" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={fonts[0].value}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select font" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {fonts.map((font) => (
              <SelectItem key={font.value} value={font.value}>
                <span className={font.className}>{font.label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Select with icon-labeled categories (`c-select-32`)

Target: `components/examples/c-select-32.tsx`

Select with icon-labeled categories

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const categories = [
  {
    value: "documents",
    label: "Documents",
    icon: (
      <IconPlaceholder
        lucide="FileTextIcon"
        tabler="IconFileText"
        hugeicons="File02Icon"
        phosphor="FileTextIcon"
        remixicon="RiFileTextLine"
        className="size-4"
      />
    ),
  },
  {
    value: "images",
    label: "Images",
    icon: (
      <IconPlaceholder
        lucide="ImageIcon"
        tabler="IconPhoto"
        hugeicons="ImageIcon"
        phosphor="ImageIcon"
        remixicon="RiImageLine"
        className="size-4"
      />
    ),
  },
  {
    value: "videos",
    label: "Videos",
    icon: (
      <IconPlaceholder
        lucide="VideoIcon"
        tabler="IconVideo"
        hugeicons="Video02Icon"
        phosphor="VideoCameraIcon"
        remixicon="RiVideoOnLine"
        className="size-4"
      />
    ),
  },
  {
    value: "audio",
    label: "Audio",
    icon: (
      <IconPlaceholder
        lucide="MusicIcon"
        tabler="IconMusic"
        hugeicons="MusicNote03Icon"
        phosphor="MusicNotesIcon"
        remixicon="RiMusic2Line"
        className="size-4"
      />
    ),
  },
  {
    value: "archives",
    label: "Archives",
    icon: (
      <IconPlaceholder
        lucide="ArchiveIcon"
        tabler="IconArchive"
        hugeicons="Archive02Icon"
        phosphor="ArchiveIcon"
        remixicon="RiArchiveLine"
        className="size-4"
      />
    ),
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select defaultValue={categories[0].value}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                <span className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```

### Size variant select with small trigger (`c-select-33`)

Target: `components/examples/c-select-33.tsx`

Size variant select with small trigger

```tsx
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const sizes = [
  { label: "Select a size", value: null },
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
  { label: "Extra Large", value: "xl" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Select a size" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {sizes.map((size) => (
              <SelectItem key={size.value} value={size.value as string}>
                {size.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
```
