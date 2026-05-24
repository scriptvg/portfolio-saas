# Dialog (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

10 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-dialog-1` | Basic dialog | registry:block | Basic dialog |
| `c-dialog-2` | Dialog with scrollable content | registry:block | Dialog with scrollable content |
| `c-dialog-3` | Dialog with scrollable content and sticky footer. | registry:block | Dialog with scrollable content and sticky footer. |
| `c-dialog-4` | Dialog without a close button. | registry:block | Dialog without a close button. |
| `c-dialog-5` | Dialog with custom close button | registry:block | Dialog with custom close button |
| `c-dialog-6` | Full-screen fluid dialog with sticky header and footer | registry:block | Full-screen fluid dialog with sticky header and footer |
| `c-dialog-7` | Confirmation dialog with destructive action | registry:block | Confirmation dialog with destructive action |
| `c-dialog-8` | Cookie consent dialog | registry:block | Cookie consent dialog |
| `c-dialog-9` | Dialog with keyboard shortcuts list | registry:block | Dialog with keyboard shortcuts list |
| `c-dialog-10` | Dialog with full width button | registry:block | Dialog with full width button |

## Source

### Basic dialog (`c-dialog-1`)

Target: `components/examples/c-dialog-1.tsx`

Basic dialog

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Basic Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done. Your profile will be updated immediately.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name-1">Name</FieldLabel>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </Field>
              <Field>
                <FieldLabel htmlFor="username-1">Username</FieldLabel>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
```

### Dialog with scrollable content (`c-dialog-2`)

Target: `components/examples/c-dialog-2.tsx`

Dialog with scrollable content

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

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Scrollable Content</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scrollable Content</DialogTitle>
            <DialogDescription>
              This is a dialog with scrollable content.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 px-4 no-scrollbar max-h-[70vh] overflow-y-auto">
            {Array.from({ length: 10 }).map((_, index) => (
              <p
                key={index}
                className="mb-4 leading-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

### Dialog with scrollable content and sticky footer. (`c-dialog-3`)

Target: `components/examples/c-dialog-3.tsx`

Dialog with scrollable content and sticky footer.

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Sticky Footer</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scrollable Content</DialogTitle>
            <DialogDescription>
              This is a dialog with scrollable content.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 px-4 no-scrollbar max-h-[70vh] overflow-y-auto">
            {Array.from({ length: 10 }).map((_, index) => (
              <p
                key={index}
                className="mb-4 leading-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

### Dialog without a close button. (`c-dialog-4`)

Target: `components/examples/c-dialog-4.tsx`

Dialog without a close button.

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">No Close Button</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>No Close Button</DialogTitle>
            <DialogDescription>
              This dialog doesn&apos;t have a close button in the top-right
              corner.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

### Dialog with custom close button (`c-dialog-5`)

Target: `components/examples/c-dialog-5.tsx`

Dialog with custom close button

```tsx
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Custom Close Button</Button>
          </DialogTrigger>
          <DialogContent
            className={cn(
              "[&>[data-slot=dialog-close]]:bg-background [&>[data-slot=dialog-close]]:-end-6 [&>[data-slot=dialog-close]]:-top-6",
              "[&>[data-slot=dialog-close]]:size-7 [&>[data-slot=dialog-close]]:rounded-full [&>[data-slot=dialog-close]]:border [&>[data-slot=dialog-close]]:shadow-sm"
            )}
          >
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done. Your profile will be updated immediately.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name-1">Name</FieldLabel>
                <Input id="name-1" name="name" defaultValue="Albert Einstein" />
              </Field>
              <Field>
                <FieldLabel htmlFor="username-1">Username</FieldLabel>
                <Input id="username-1" name="username" defaultValue="@albert" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
```

### Full-screen fluid dialog with sticky header and footer (`c-dialog-6`)

Target: `components/examples/c-dialog-6.tsx`

Full-screen fluid dialog with sticky header and footer

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Pattern() {
  return (
    <>
      <style>{`
        .transparent-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(120, 120, 120, 0.4) transparent;
        }  
      `}</style>
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Full Screen Fluid</Button>
          </DialogTrigger>
          <DialogContent className="flex max-h-[calc(100vh-3rem)] w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden p-0">
            <DialogHeader className="bg-background sticky top-0 z-10 border-b px-6 py-4">
              <DialogTitle>Full Screen Dialog</DialogTitle>
              <DialogDescription>
                A fluid full-screen dialog with sticky header and footer.
              </DialogDescription>
            </DialogHeader>
            <div className="transparent-scrollbar me-0.5 flex-1 overflow-auto px-6">
              <div className="space-y-4 text-sm">
                {Array.from({ length: 20 }).map((_, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-normal"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                ))}
              </div>
            </div>
            <DialogFooter className="bg-background border-t px-6 py-4">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
```

### Confirmation dialog with destructive action (`c-dialog-7`)

Target: `components/examples/c-dialog-7.tsx`

Confirmation dialog with destructive action

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Delete Item</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-start gap-3">
              <div className="bg-destructive/10 text-destructive rounded-full flex size-10 shrink-0 items-center justify-center">
                <IconPlaceholder
                  lucide="AlertTriangleIcon"
                  tabler="IconAlertTriangle"
                  hugeicons="Alert02Icon"
                  phosphor="WarningIcon"
                  remixicon="RiAlertLine"
                  className="size-5"
                />
              </div>
              <div className="flex flex-col gap-1">
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the
                  item and remove all associated data from our servers.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

### Cookie consent dialog (`c-dialog-8`)

Target: `components/examples/c-dialog-8.tsx`

Cookie consent dialog

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Cookie Preferences</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              You can enable or disable different categories of cookies.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.75">
                <Label className="text-sm font-medium">Essential Cookies</Label>
                <p className="text-muted-foreground text-xs">
                  Required for the website to function properly. Cannot be
                  disabled.
                </p>
              </div>
              <Switch defaultChecked disabled />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.75">
                <Label
                  htmlFor="cookie-analytics"
                  className="text-sm font-medium"
                >
                  Analytics Cookies
                </Label>
                <p className="text-muted-foreground text-xs">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <Switch id="cookie-analytics" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.75">
                <Label
                  htmlFor="cookie-marketing"
                  className="text-sm font-medium"
                >
                  Marketing Cookies
                </Label>
                <p className="text-muted-foreground text-xs">
                  Used to deliver personalized advertisements and track ad
                  campaign performance.
                </p>
              </div>
              <Switch id="cookie-marketing" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Save Preferences</Button>
            <Button>Accept All</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

### Dialog with keyboard shortcuts list (`c-dialog-9`)

Target: `components/examples/c-dialog-9.tsx`

Dialog with keyboard shortcuts list

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Kbd } from "@/components/ui/kbd"

const shortcuts = [
  { keys: ["⌘", "K"], action: "Search" },
  { keys: ["⌘", "B"], action: "Bold" },
  { keys: ["⌘", "I"], action: "Italic" },
  { keys: ["⌘", "S"], action: "Save" },
  { keys: ["⌘", "Z"], action: "Undo" },
  { keys: ["⌘", "⇧", "Z"], action: "Redo" },
  { keys: ["⌘", "N"], action: "New File" },
  { keys: ["⌘", "P"], action: "Quick Open" },
  { keys: ["⌘", "/"], action: "Toggle Comment" },
  { keys: ["⌘", "D"], action: "Duplicate Line" },
]

export function Pattern() {
  const half = Math.ceil(shortcuts.length / 2)
  const leftColumn = shortcuts.slice(0, half)
  const rightColumn = shortcuts.slice(half)

  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Keyboard Shortcuts</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
            <DialogDescription>
              Quick reference for commonly used keyboard shortcuts.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {[leftColumn, rightColumn].map((column, colIndex) => (
              <div key={colIndex} className="space-y-3">
                {column.map((shortcut) => (
                  <div
                    key={shortcut.action}
                    className="flex items-center justify-between"
                  >
                    <span className="text-muted-foreground text-sm">
                      {shortcut.action}
                    </span>
                    <div className="flex gap-1">
                      {shortcut.keys.map((key, index) => (
                        <Kbd key={index}>{key}</Kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

### Dialog with full width button (`c-dialog-10`)

Target: `components/examples/c-dialog-10.tsx`

Dialog with full width button

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Session Expired</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Session Expired</DialogTitle>
            <DialogDescription>
              Your session has timed out due to inactivity. Please sign in again
              to continue where you left off.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="w-full">Sign In Again</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```
