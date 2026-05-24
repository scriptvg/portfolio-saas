# Collapsible (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

10 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-collapsible-1` | Basic collapsible | registry:block | Basic collapsible |
| `c-collapsible-2` | Collapsible with checkbox settings | registry:block | Collapsible with checkbox settings |
| `c-collapsible-3` | Collapsible animated card | registry:block | Collapsible animated card |
| `c-collapsible-4` | Collapsible card with bottom trigger | registry:block | Collapsible card with bottom trigger |
| `c-collapsible-5` | Collapsible form fields | registry:block | Collapsible form fields |
| `c-collapsible-6` | Collapsible frame | registry:block | Collapsible frame |
| `c-collapsible-7` | Nested collapsible list with actions | registry:block | Nested collapsible list with actions |
| `c-collapsible-8` | Collapsible User profile | registry:block | Collapsible User profile |
| `c-collapsible-9` | Multi-level collapsible menu | registry:block | Multi-level collapsible menu |
| `c-collapsible-10` | Tree view with file actions | registry:block | Tree view with file actions |

## Source

### Basic collapsible (`c-collapsible-1`)

Target: `components/examples/c-collapsible-1.tsx`

Basic collapsible

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="h-48 w-full max-w-xs">
      <Collapsible className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between gap-4 px-2">
          <h4 className="text-sm font-semibold">Order #4189</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <IconPlaceholder
                lucide="ChevronsUpDownIcon"
                tabler="IconSelector"
                hugeicons="UnfoldMoreIcon"
                phosphor="CaretUpDownIcon"
                remixicon="RiExpandUpDownLine"
                aria-hidden="true"
                className="size-4"
              />
              <span className="sr-only">Toggle details</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <div className="bg-muted/30 rounded-lg flex items-center justify-between border px-3 py-2 text-sm">
          <span className="text-muted-foreground">Status</span>
          <Badge variant="success-light">Shipped</Badge>
        </div>

        <CollapsibleContent className="flex flex-col gap-2">
          <div className="rounded-lg border px-3 py-2 text-sm">
            <p className="font-medium">Shipping address</p>
            <p className="text-muted-foreground">
              100 Market St, San Francisco
            </p>
          </div>
          <div className="rounded-lg border px-3 py-2 text-sm">
            <p className="font-medium">Items</p>
            <p className="text-muted-foreground">2x Studio Headphones</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
```

### Collapsible with checkbox settings (`c-collapsible-2`)

Target: `components/examples/c-collapsible-2.tsx`

Collapsible with checkbox settings

```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const settings = [
  { id: "push", label: "Push notifications", defaultChecked: true },
  { id: "email", label: "Email notifications", defaultChecked: false },
  { id: "sms", label: "SMS notifications", defaultChecked: false },
]

export function Pattern() {
  return (
    <div className="h-40 w-full max-w-xs">
      <Collapsible className="flex flex-col gap-2" defaultOpen>
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            className="bg-background! w-full justify-start"
          >
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              aria-hidden="true"
              className="size-4 group-data-panel-open/button:rotate-90"
            />
            <span className="sr-only">Toggle notification settings</span>
            Notification settings
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <Card className="p-0">
            <FieldGroup className="gap-0 divide-y">
              {settings.map((item) => (
                <Field key={item.id}>
                  <FieldLabel className="px-3 py-2">
                    <Checkbox defaultChecked={item.defaultChecked} />
                    <FieldTitle>{item.label}</FieldTitle>
                  </FieldLabel>
                </Field>
              ))}
            </FieldGroup>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
```

### Collapsible animated card (`c-collapsible-3`)

Target: `components/examples/c-collapsible-3.tsx`

Collapsible animated card

```tsx
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="h-40 w-full max-w-xs">
      <Card className="py-3">
        <CardContent className="px-3">
          <Collapsible>
            <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between text-sm">
              <span>How do I reset my password?</span>
              <IconPlaceholder
                lucide="ChevronDownIcon"
                tabler="IconChevronDown"
                hugeicons="ArrowDown01Icon"
                phosphor="CaretDownIcon"
                remixicon="RiArrowDownSLine"
                aria-hidden="true"
                className="text-muted-foreground size-4 shrink-0 transition-transform in-data-[state=open]:rotate-180"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <div className="text-muted-foreground pt-3 text-sm">
                You can reset your password by clicking the &quot;Forgot
                Password&quot; link on the login page. We&apos;ll send you an
                email with instructions to create a new password.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Collapsible card with bottom trigger (`c-collapsible-4`)

Target: `components/examples/c-collapsible-4.tsx`

Collapsible card with bottom trigger

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="h-72 w-full max-w-xs">
      <Collapsible className="relative">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm">3 days remaining in cycle</CardTitle>
            <CardAction>
              <Button variant="outline" size="sm">
                Billing
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/60 border-border rounded-lg space-y-2 border p-3">
              <div className="flex justify-between text-sm font-medium">
                <span>$18.08 / $20</span>
                <span>$200</span>
              </div>
              <Progress value={90} className="bg-primary/20 h-1.5" />
            </div>

            <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <div className="flex flex-col gap-2.5 pt-2">
                {[
                  { label: "Requests", value: "$210.84" },
                  { label: "Active CPU", value: "$21.95" },
                  { label: "Events", value: "$21.20" },
                  { label: "Storage Usage", value: "$20.45" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between text-xs"
                  >
                    <span className="text-muted-foreground font-medium">
                      {item.label}
                    </span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </CardContent>
        </Card>

        <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2">
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              size="icon-sm"
              className="bg-background! rounded-full shadow-sm"
            >
              <IconPlaceholder
                lucide="ChevronDownIcon"
                tabler="IconChevronDown"
                hugeicons="ArrowDown01Icon"
                phosphor="CaretDownIcon"
                remixicon="RiArrowDownSLine"
                aria-hidden="true"
                className="size-3.5 transition-transform in-data-panel-open:rotate-180"
              />
              <span className="sr-only">Toggle details</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </div>
  )
}
```

### Collapsible form fields (`c-collapsible-5`)

Target: `components/examples/c-collapsible-5.tsx`

Collapsible form fields

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-54 w-full max-w-xs">
      <Card size="sm">
        <CardHeader>
          <CardTitle>Unit Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex flex-col gap-3"
          >
            <div className="flex items-end gap-2">
              <Field className="flex-1">
                <FieldLabel className="sr-only">Base Price</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="number"
                    placeholder="0.00"
                    defaultValue="19.00"
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>$</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0">
                  <IconPlaceholder
                    lucide="Settings2Icon"
                    tabler="IconAdjustmentsHorizontal"
                    hugeicons="FilterHorizontalIcon"
                    phosphor="SlidersHorizontalIcon"
                    remixicon="RiEqualizer2Line"
                    aria-hidden="true"
                    className="size-3.5"
                  />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <FieldGroup className="gap-2">
                <Field>
                  <FieldLabel>Tax Rate (%)</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      placeholder="0"
                      defaultValue="15"
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>%</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field>
                  <FieldLabel>Discount (%)</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      placeholder="0"
                      defaultValue="0"
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>%</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </FieldGroup>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Collapsible frame (`c-collapsible-6`)

Target: `components/examples/c-collapsible-6.tsx`

Collapsible frame

```tsx
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="h-54 w-full max-w-xs">
      <Frame stacked dense spacing="sm" className="w-full">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full">
            <FrameHeader className="flex grow flex-row items-center justify-between gap-2">
              <FrameTitle className="text-sm font-medium">
                Deployment successful
              </FrameTitle>
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                aria-hidden="true"
                className="text-muted-foreground size-4 transition-transform in-data-[state=open]:rotate-90"
              />
            </FrameHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FramePanel>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Updated the core authentication logic and fixed a minor bug in
                the login flow. Improved session handling for better
                performance.
              </p>
            </FramePanel>
          </CollapsibleContent>
        </Collapsible>
      </Frame>
    </div>
  )
}
```

### Nested collapsible list with actions (`c-collapsible-7`)

Target: `components/examples/c-collapsible-7.tsx`

Nested collapsible list with actions

```tsx
"use client"

import { useState } from "react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const initialKeys = [
  { id: "1", name: "Production", key: "AUDO230454*242SDIFPPL" },
  { id: "2", name: "Development", key: "DUILO30454*242SDIFUIP" },
  { id: "3", name: "Staging", key: "IPPODAS230454*242SDI" },
]

export function Pattern() {
  const [keys, setKeys] = useState(initialKeys)

  return (
    <div className="h-54 w-full max-w-xs">
      <Frame stacked dense spacing="sm">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full">
            <FrameHeader className="flex grow flex-row items-center justify-between gap-1.5 py-1!">
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                aria-hidden="true"
                className="text-muted-foreground size-4 transition-transform in-data-[state=open]:rotate-90"
              />
              <FrameTitle className="text-sm font-medium">API Keys</FrameTitle>
              <Button
                variant="ghost"
                size="icon-sm"
                className="hover:border-border ml-auto"
              >
                <IconPlaceholder
                  lucide="PlusIcon"
                  tabler="IconPlus"
                  hugeicons="PlusSignIcon"
                  phosphor="PlusIcon"
                  remixicon="RiAddLine"
                  aria-hidden="true"
                />
              </Button>
            </FrameHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FramePanel>
              <div className="flex flex-col gap-2.5">
                {keys.map((item) => (
                  <ApiKeyItem
                    key={item.id}
                    item={item}
                    onDelete={(id) =>
                      setKeys((k) => k.filter((i) => i.id !== id))
                    }
                  />
                ))}
              </div>
            </FramePanel>
          </CollapsibleContent>
        </Collapsible>
      </Frame>
    </div>
  )
}

function ApiKeyItem({
  item,
  onDelete,
}: {
  item: (typeof initialKeys)[0]
  onDelete: (id: string) => void
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <div className="flex items-center justify-between gap-3.5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="bg-muted border-border/60 flex size-5.5 shrink-0 items-center justify-center rounded-sm border-2">
            <IconPlaceholder
              lucide="LockIcon"
              tabler="IconLock"
              hugeicons="SquareLock01Icon"
              phosphor="LockSimpleIcon"
              remixicon="RiLockLine"
              aria-hidden="true"
              className="size-3.25 text-emerald-600"
            />
          </div>
          <div className="w-10 truncate text-xs">{item.name}</div>
        </div>
        <div className="bg-muted w-40 truncate rounded-md px-2 py-1 text-xs">
          {item.key}
        </div>
      </div>
      <div className="flex shrink-0 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-xs">
              <IconPlaceholder
                lucide="MoreHorizontalIcon"
                tabler="IconDots"
                hugeicons="MoreHorizontalCircle01Icon"
                phosphor="DotsThreeIcon"
                remixicon="RiMoreLine"
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-32">
            <DropdownMenuItem onClick={() => copyToClipboard(item.key)}>
              {isCopied ? (
                <IconPlaceholder
                  lucide="CheckIcon"
                  tabler="IconCheck"
                  hugeicons="Tick02Icon"
                  phosphor="CheckIcon"
                  remixicon="RiCheckLine"
                  aria-hidden="true"
                  className="text-green-500"
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
              <span>{isCopied ? "Copied" : "Copy key"}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onClick={() => onDelete(item.id)}
            >
              <IconPlaceholder
                lucide="TrashIcon"
                tabler="IconTrash"
                hugeicons="DeleteIcon"
                phosphor="TrashIcon"
                remixicon="RiDeleteBinLine"
                aria-hidden="true"
              />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
```

### Collapsible User profile (`c-collapsible-8`)

Target: `components/examples/c-collapsible-8.tsx`

Collapsible User profile

```tsx
import {
  Frame,
  FrameHeader,
  FramePanel,
} from "@/components/reui/frame"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="h-54 w-full max-w-xs">
      <Frame stacked dense spacing="sm" className="w-full">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full">
            <FrameHeader className="flex grow flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="relative size-5">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-foreground text-sm font-medium">
                  @shadcn
                </span>
              </div>
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                aria-hidden="true"
                className="text-muted-foreground size-4 transition-transform in-data-[state=open]:rotate-90"
              />
            </FrameHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FramePanel>
              {/* User profile information */}
              <div className="space-y-2.5">
                {/* Last activity */}
                <div className="flex items-center gap-2">
                  <IconPlaceholder
                    lucide="MessageSquareIcon"
                    tabler="IconMessageDots"
                    hugeicons="Message02Icon"
                    phosphor="ChatIcon"
                    remixicon="RiChat4Line"
                    aria-hidden="true"
                    className="text-muted-foreground size-3.5"
                  />
                  <span className="text-muted-foreground text-xs">
                    Last activity:
                  </span>
                  <span className="text-foreground text-xs font-medium">
                    2 hours ago
                  </span>
                </div>
                {/* Online since */}
                <div className="flex items-center gap-2">
                  <IconPlaceholder
                    lucide="ClockIcon"
                    tabler="IconClock"
                    hugeicons="ClockIcon"
                    phosphor="ClockIcon"
                    remixicon="RiTimeLine"
                    aria-hidden="true"
                    className="text-muted-foreground size-3.5"
                  />
                  <span className="text-muted-foreground text-xs">
                    Online since:
                  </span>
                  <span className="text-foreground text-xs font-medium">
                    Today, 9:00 AM
                  </span>
                </div>
                {/* Location */}
                <div className="flex items-center gap-2">
                  <IconPlaceholder
                    lucide="MapPinIcon"
                    tabler="IconMapPin"
                    hugeicons="Location06Icon"
                    phosphor="MapPinIcon"
                    remixicon="RiMapPinLine"
                    aria-hidden="true"
                    className="text-muted-foreground size-3.5"
                  />
                  <span className="text-muted-foreground text-xs">
                    Location:
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-foreground text-xs font-medium">
                      Canada
                    </span>
                    <img
                      src={`https://flagcdn.com/ca.svg`}
                      alt="Canada"
                      className="size-4 shrink-0 rounded-full border object-cover"
                    />
                  </div>
                </div>
              </div>
            </FramePanel>
          </CollapsibleContent>
        </Collapsible>
      </Frame>
    </div>
  )
}
```

### Multi-level collapsible menu (`c-collapsible-9`)

Target: `components/examples/c-collapsible-9.tsx`

Multi-level collapsible menu

```tsx
"use client"

import { ReactElement, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Item, ItemMedia, ItemTitle } from "@/components/ui/item"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

type NavItem = {
  id: string
  name: string
  icon: ReactElement
  items?: NavItem[]
}

const navItems: NavItem[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: (
      <IconPlaceholder
        lucide="LayoutDashboardIcon"
        tabler="IconLayoutDashboard"
        hugeicons="DashboardSquare02Icon"
        phosphor="LayoutIcon"
        remixicon="RiDashboardLine"
      />
    ),
    items: [
      {
        id: "analytics",
        name: "Analytics",
        icon: (
          <IconPlaceholder
            lucide="ChartBarIcon"
            tabler="IconChartSankey"
            hugeicons="BarChartHorizontalIcon"
            phosphor="ChartLineIcon"
            remixicon="RiLineChartLine"
          />
        ),
        items: [
          {
            id: "real-time",
            name: "Real-time",
            icon: (
              <IconPlaceholder
                lucide="FileTextIcon"
                tabler="IconFileText"
                hugeicons="File02Icon"
                phosphor="FileTextIcon"
                remixicon="RiFileTextLine"
                aria-hidden="true"
              />
            ),
          },
          {
            id: "historical",
            name: "Historical",
            icon: (
              <IconPlaceholder
                lucide="FileTextIcon"
                tabler="IconFileText"
                hugeicons="File02Icon"
                phosphor="FileTextIcon"
                remixicon="RiFileTextLine"
                aria-hidden="true"
              />
            ),
          },
        ],
      },
      {
        id: "reports",
        name: "Reports",
        icon: (
          <IconPlaceholder
            lucide="MessageSquareIcon"
            tabler="IconMessageDots"
            hugeicons="Message02Icon"
            phosphor="ChatIcon"
            remixicon="RiChat4Line"
            aria-hidden="true"
          />
        ),
      },
    ],
  },
  {
    id: "team",
    name: "Team",
    icon: (
      <IconPlaceholder
        lucide="UserIcon"
        tabler="IconUser"
        hugeicons="UserIcon"
        phosphor="UserIcon"
        remixicon="RiUserLine"
        aria-hidden="true"
      />
    ),
    items: [
      {
        id: "members",
        name: "Members",
        icon: (
          <IconPlaceholder
            lucide="UserIcon"
            tabler="IconUser"
            hugeicons="UserIcon"
            phosphor="UserIcon"
            remixicon="RiUserLine"
            aria-hidden="true"
          />
        ),
      },
      {
        id: "permissions",
        name: "Permissions",
        icon: (
          <IconPlaceholder
            lucide="ShieldIcon"
            tabler="IconShield"
            hugeicons="Shield01Icon"
            phosphor="ShieldIcon"
            remixicon="RiShieldLine"
            aria-hidden="true"
          />
        ),
      },
    ],
  },
  {
    id: "billing",
    name: "Billing",
    icon: (
      <IconPlaceholder
        lucide="CreditCardIcon"
        tabler="IconCreditCard"
        hugeicons="CreditCardIcon"
        phosphor="CreditCardIcon"
        remixicon="RiBankCardLine"
        aria-hidden="true"
      />
    ),
  },
  {
    id: "settings",
    name: "Settings",
    icon: (
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
        aria-hidden="true"
      />
    ),
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: (
      <IconPlaceholder
        lucide="BellIcon"
        tabler="IconBell"
        hugeicons="NotificationIcon"
        phosphor="BellIcon"
        remixicon="RiNotificationLine"
        aria-hidden="true"
      />
    ),
  },
]

function NavMenuItem({
  item,
  level = 0,
  selectedId,
  onSelect,
}: {
  item: NavItem
  level?: number
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const isFolder = !!item.items && item.items.length > 0
  const isSelected = selectedId === item.id

  if (isFolder) {
    return (
      <Collapsible className="group/collapsible">
        <CollapsibleTrigger asChild>
          <Item
            size="xs"
            className="hover:bg-accent data-[state=open]:bg-accent group/item cursor-pointer py-1.25"
            style={{ paddingLeft: `${level * 12 + 8}px` }}
          >
            <ItemMedia variant="icon">
              <div className="text-muted-foreground group-hover/item:text-foreground size-3.5">
                {item.icon}
              </div>
            </ItemMedia>
            <ItemTitle className="data-[state=open]/collapsible:font-semibold text-sm">
              {item.name}
            </ItemTitle>
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              aria-hidden="true"
              className="text-muted-foreground ml-auto size-4 transition-transform in-data-[state=open]:rotate-90"
            />
          </Item>
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden pt-0.5">
          <div className="flex flex-col gap-0.5">
            {item.items?.map((child) => (
              <NavMenuItem
                key={child.id}
                item={child}
                level={level + 1}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Item
      size="xs"
      className="hover:bg-accent data-[active=true]:bg-accent data-[active=true]:text-foreground group/item cursor-pointer py-1.25"
      data-active={isSelected}
      style={{ paddingLeft: `${level * 12 + 8}px` }}
      onClick={() => onSelect(item.id)}
    >
      <ItemMedia variant="icon">
        <div className="text-muted-foreground group-hover/item:text-foreground group-data-[active=true]/item:text-foreground size-3.5">
          {item.icon}
        </div>
      </ItemMedia>
      <ItemTitle className="text-sm">{item.name}</ItemTitle>
    </Item>
  )
}

export function Pattern() {
  const [selectedId, setSelectedId] = useState<string | null>("real-time")

  return (
    <div className="min-h-64 w-full max-w-56">
      <Card className="p-0">
        <CardContent className="p-1">
          <div className="gap-0/5 flex flex-col">
            {navItems.map((item) => (
              <NavMenuItem
                key={item.id}
                item={item}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Tree view with file actions (`c-collapsible-10`)

Target: `components/examples/c-collapsible-10.tsx`

Tree view with file actions

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Item,
  ItemActions,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

const fileTree: FileTreeItem[] = [
  {
    name: "components",
    items: [
      {
        name: "ui",
        items: [
          { name: "button.tsx" },
          { name: "card.tsx" },
          { name: "dialog.tsx" },
        ],
      },
      { name: "login-form.tsx" },
    ],
  },
  {
    name: "lib",
    items: [{ name: "utils.ts" }, { name: "api.ts" }],
  },
  {
    name: "hooks",
    items: [{ name: "use-debounce.ts" }, { name: "use-local-storage.ts" }],
  },
  { name: "app.tsx" },
  { name: "package.json" },
]

function TreeItem({
  item,
  level = 0,
  selectedId,
  onSelect,
}: {
  item: FileTreeItem
  level?: number
  selectedId?: string | null
  onSelect?: (name: string) => void
}) {
  const isFolder = "items" in item
  const isSelected = selectedId === item.name

  if (isFolder) {
    return (
      <Collapsible className="group/collapsible">
        <CollapsibleTrigger asChild>
          <Item
            size="xs"
            className="hover:bg-accent data-[state=open]:bg-accent cursor-pointer py-1.5"
            style={{ paddingLeft: `${level * 12 + 8}px` }}
          >
            <ItemMedia variant="icon">
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                aria-hidden="true"
                className="text-muted-foreground size-3 transition-transform in-data-[state=open]:rotate-90"
              />
              <IconPlaceholder
                lucide="FolderIcon"
                tabler="IconFolder"
                hugeicons="FolderIcon"
                phosphor="FolderIcon"
                remixicon="RiFolderLine"
                aria-hidden="true"
                className="text-muted-foreground group-hover/item:text-foreground size-3.5"
              />
            </ItemMedia>
            <ItemTitle className="text-sm">{item.name}</ItemTitle>
          </Item>
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden pt-0.5">
          <div className="flex flex-col gap-0.5 ps-1.5">
            {item.items.map((child) => (
              <TreeItem
                key={child.name}
                item={child}
                level={level + 1}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Item
      className="group/item hover:bg-accent data-[active=true]:bg-accent cursor-pointer py-1.5"
      data-active={isSelected}
      style={{ paddingLeft: `${level * 12 + 9}px` }}
      onClick={() => onSelect?.(item.name)}
    >
      <ItemMedia variant="icon">
        <IconPlaceholder
          lucide="FileIcon"
          tabler="IconFile"
          hugeicons="FileEmpty02Icon"
          phosphor="FileIcon"
          remixicon="RiFileLine"
          aria-hidden="true"
          className="text-muted-foreground group-hover/item:text-foreground group-data-[active=true]/item:text-foreground size-4"
        />
      </ItemMedia>
      <ItemTitle className="text-secondary-foreground group-hover/item:text-foreground group-data-[active=true]/item:text-foreground text-sm">
        {item.name}
      </ItemTitle>
      <ItemActions className="-mr-2 ml-auto gap-0 opacity-0 transition-opacity group-hover/item:opacity-100 group-data-[active=true]/item:opacity-100">
        <Button size="icon-xs" variant="ghost">
          <IconPlaceholder
            lucide="DownloadIcon"
            tabler="IconDownload"
            hugeicons="Download01Icon"
            phosphor="DownloadSimpleIcon"
            remixicon="RiDownload2Line"
            aria-hidden="true"
          />
        </Button>
        <Button variant="ghost" size="icon-xs">
          <IconPlaceholder
            lucide="TrashIcon"
            tabler="IconTrash"
            hugeicons="DeleteIcon"
            phosphor="TrashIcon"
            remixicon="RiDeleteBinLine"
            aria-hidden="true"
          />
        </Button>
      </ItemActions>
    </Item>
  )
}

export function Pattern() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className="min-h-64 w-72">
      <Card size="sm" className="gap-1 p-1">
        <CardHeader className="p-0">
          <Tabs defaultValue="explorer">
            <TabsList className="bg-accent h-8 w-full p-1">
              <TabsTrigger value="explorer" className="text-xs">
                Explorer
              </TabsTrigger>
              <TabsTrigger value="outline" className="text-xs">
                Outline
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col gap-0.5">
            {fileTree.map((item) => (
              <TreeItem
                key={item.name}
                item={item}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```
