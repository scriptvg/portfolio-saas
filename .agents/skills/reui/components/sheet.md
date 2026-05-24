# Sheet (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

4 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-sheet-1` | Sheet containing a form for editing profile information. | registry:block | Sheet containing a form for editing profile information. |
| `c-sheet-2` | Sheet containing a form for editing profile information. | registry:block | Sheet containing a form for editing profile information. |
| `c-sheet-3` | Sheets that open from any side. | registry:block | Sheets that open from any side. |
| `c-sheet-4` | Sheet with scrollable content | registry:block | Sheet with scrollable content |

## Source

### Sheet containing a form for editing profile information. (`c-sheet-1`)

Target: `components/examples/c-sheet-1.tsx`

Sheet containing a form for editing profile information.

```tsx
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Show Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" defaultValue="John Doe" />
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" defaultValue="@john-doe" />
              </Field>
            </FieldGroup>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
```

### Sheet containing a form for editing profile information. (`c-sheet-2`)

Target: `components/examples/c-sheet-2.tsx`

Sheet containing a form for editing profile information.

```tsx
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">With No Close Button</Button>
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" defaultValue="John Doe" />
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" defaultValue="@john-doe" />
              </Field>
            </FieldGroup>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
```

### Sheets that open from any side. (`c-sheet-3`)

Target: `components/examples/c-sheet-3.tsx`

Sheets that open from any side.

```tsx
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const sides = ["top", "right", "bottom", "left"] as const

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>Sheet Side: {side}</SheetTitle>
              <SheetDescription>
                This sheet opens from the {side} side of the screen.
              </SheetDescription>
            </SheetHeader>
            <div className="text-muted-foreground p-4 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <p key={i} className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              ))}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
```

### Sheet with scrollable content (`c-sheet-4`)

Target: `components/examples/c-sheet-4.tsx`

Sheet with scrollable content

```tsx
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Scrollable Sheet</Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-0 space-y-0">
          <SheetHeader>
            <SheetTitle>Scrollable Content</SheetTitle>
            <SheetDescription>
              Description of the scrollable content.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-230px)] flex-1 grow">
            <div className="space-y-4 px-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
```
