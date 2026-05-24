# Kbd (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

6 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-kbd-1` | Basic keyboard keys. | registry:block | Basic keyboard keys. |
| `c-kbd-2` | Keyboard keys grouped together. | registry:block | Keyboard keys grouped together. |
| `c-kbd-3` | Keyboard keys combined with icons. | registry:block | Keyboard keys combined with icons. |
| `c-kbd-4` | Keyboard key within an input. | registry:block | Keyboard key within an input. |
| `c-kbd-5` | Keyboard shortcut in a tooltip. | registry:block | Keyboard shortcut in a tooltip. |
| `c-kbd-6` | Keyboard shortcuts reference list | registry:block | Keyboard shortcuts reference list |

## Source

### Basic keyboard keys. (`c-kbd-1`)

Target: `components/examples/c-kbd-1.tsx`

Basic keyboard keys.

```tsx
import { Kbd } from "@/components/ui/kbd"

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Kbd>Ctrl</Kbd>
      <Kbd>⌘K</Kbd>
      <Kbd>Ctrl + B</Kbd>
    </div>
  )
}
```

### Keyboard keys grouped together. (`c-kbd-2`)

Target: `components/examples/c-kbd-2.tsx`

Keyboard keys grouped together.

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  )
}
```

### Keyboard keys combined with icons. (`c-kbd-3`)

Target: `components/examples/c-kbd-3.tsx`

Keyboard keys combined with icons.

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <KbdGroup>
        <Kbd>
          <IconPlaceholder
            lucide="ArrowLeftIcon"
            tabler="IconArrowLeft"
            hugeicons="ArrowLeft02Icon"
            phosphor="ArrowLeftIcon"
            remixicon="RiArrowLeftLine"
          />
          Left
        </Kbd>
        <Kbd>
          <IconPlaceholder
            lucide="CircleDashedIcon"
            tabler="IconCircleDashed"
            hugeicons="DashedLineCircleIcon"
            phosphor="CircleDashedIcon"
            remixicon="RiLoaderLine"
          />
          Voice Enabled
        </Kbd>
      </KbdGroup>
    </div>
  )
}
```

### Keyboard key within an input. (`c-kbd-4`)

Target: `components/examples/c-kbd-4.tsx`

Keyboard key within an input.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder="Search…" />
        <InputGroupAddon>
          <Kbd>Space</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Keyboard shortcut in a tooltip. (`c-kbd-5`)

Target: `components/examples/c-kbd-5.tsx`

Keyboard shortcut in a tooltip.

```tsx
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon-sm" variant="outline">
              <IconPlaceholder
                lucide="SaveIcon"
                tabler="IconDeviceFloppy"
                hugeicons="FloppyDiskIcon"
                phosphor="FloppyDiskIcon"
                remixicon="RiSaveLine"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="pr-1.5">
            <div className="flex items-center gap-2">
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Keyboard shortcuts reference list (`c-kbd-6`)

Target: `components/examples/c-kbd-6.tsx`

Keyboard shortcuts reference list

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"

const shortcuts = [
  { label: "Search", keys: ["⌘", "K"] },
  { label: "New File", keys: ["⌘", "N"] },
  { label: "Save", keys: ["⌘", "S"] },
  { label: "Undo", keys: ["⌘", "Z"] },
  { label: "Redo", keys: ["⌘", "⇧", "Z"] },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col">
      <p className="mb-3 text-sm font-medium">Keyboard Shortcuts</p>
      <Separator />
      <div className="flex flex-col">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.label}
            className="flex items-center justify-between border-b py-2.5 last:border-b-0"
          >
            <span className="text-muted-foreground text-sm">
              {shortcut.label}
            </span>
            <KbdGroup>
              {shortcut.keys.map((key) => (
                <Kbd key={key}>{key}</Kbd>
              ))}
            </KbdGroup>
          </div>
        ))}
      </div>
    </div>
  )
}
```
