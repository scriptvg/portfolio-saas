# Separator (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

6 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-separator-1` | Horizontal separator for content sections. | registry:block | Horizontal separator for content sections. |
| `c-separator-2` | Vertical separator for inline elements. | registry:block | Vertical separator for inline elements. |
| `c-separator-3` | Vertical separator groups related menu items. | registry:block | Vertical separator groups related menu items. |
| `c-separator-4` | Horizontal separator between items in a list. | registry:block | Horizontal separator between items in a list. |
| `c-separator-5` | Separator with centered text label | registry:block | Separator with centered text label |
| `c-separator-6` | Order summary with separators | registry:block | Order summary with separators |

## Source

### Horizontal separator for content sections. (`c-separator-1`)

Target: `components/examples/c-separator-1.tsx`

Horizontal separator for content sections.

```tsx
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-2 text-sm">
      <div className="flex flex-col gap-1">
        <div className="text-sm leading-none font-medium">Design System</div>
        <div className="text-muted-foreground text-xs">
          The Foundation for your UI.
        </div>
      </div>
      <Separator />
      <div className="text-muted-foreground">
        A set of beautifully designed components that you can customize, extend,
        and build on.
      </div>
    </div>
  )
}
```

### Vertical separator for inline elements. (`c-separator-2`)

Target: `components/examples/c-separator-2.tsx`

Vertical separator for inline elements.

```tsx
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}
```

### Vertical separator groups related menu items. (`c-separator-3`)

Target: `components/examples/c-separator-3.tsx`

Vertical separator groups related menu items.

```tsx
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-4 text-sm">
        <div className="flex flex-col gap-1">
          <span className="font-medium">Settings</span>
          <span className="text-muted-foreground text-xs">
            Manage preferences
          </span>
        </div>
        <Separator orientation="vertical" className="h-8 [&]:self-auto!" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">Account</span>
          <span className="text-muted-foreground text-xs">
            Profile & security
          </span>
        </div>
        <Separator orientation="vertical" className="h-8 [&]:self-auto!" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">Help</span>
          <span className="text-muted-foreground text-xs">Support & docs</span>
        </div>
      </div>
    </div>
  )
}
```

### Horizontal separator between items in a list. (`c-separator-4`)

Target: `components/examples/c-separator-4.tsx`

Horizontal separator between items in a list.

```tsx
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-2 text-sm">
      <dl className="flex items-center justify-between">
        <dt className="font-medium">Item 1</dt>
        <dd className="text-muted-foreground">Value 1</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt className="font-medium">Item 2</dt>
        <dd className="text-muted-foreground">Value 2</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt className="font-medium">Item 3</dt>
        <dd className="text-muted-foreground">Value 3</dd>
      </dl>
    </div>
  )
}
```

### Separator with centered text label (`c-separator-5`)

Target: `components/examples/c-separator-5.tsx`

Separator with centered text label

```tsx
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-6">
      <div className="relative">
        <Separator />
        <span className="bg-background text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">
          or continue with
        </span>
      </div>
    </div>
  )
}
```

### Order summary with separators (`c-separator-6`)

Target: `components/examples/c-separator-6.tsx`

Order summary with separators

```tsx
import { Separator } from "@/components/ui/separator"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-2 text-sm">
      <p className="font-medium">Order Summary</p>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt className="text-muted-foreground">Subtotal</dt>
        <dd>$49.00</dd>
      </dl>
      <dl className="flex items-center justify-between">
        <dt className="text-muted-foreground">Discount</dt>
        <dd className="text-success">-$5.00</dd>
      </dl>
      <dl className="flex items-center justify-between">
        <dt className="text-muted-foreground">Tax</dt>
        <dd>$3.52</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between font-medium">
        <dt>Total</dt>
        <dd>$47.52</dd>
      </dl>
    </div>
  )
}
```
