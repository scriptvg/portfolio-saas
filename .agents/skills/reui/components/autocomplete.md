# Autocomplete (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

12 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-autocomplete-1` | Basic autocomplete control | registry:block | Basic autocomplete control |
| `c-autocomplete-2` | Disabled state | registry:block | Disabled state |
| `c-autocomplete-3` | Auto highlight option as you type | registry:block | Auto highlight option as you type |
| `c-autocomplete-4` | Control with label | registry:block | Control with label |
| `c-autocomplete-5` | With clear button | registry:block | With clear button |
| `c-autocomplete-6` | With trigger button | registry:block | With trigger button |
| `c-autocomplete-7` | With clear and trigger buttons | registry:block | With clear and trigger buttons |
| `c-autocomplete-8` | With groups and labels | registry:block | With groups and labels |
| `c-autocomplete-9` | With search results | registry:block | With search results |
| `c-autocomplete-10` | Small autocomplete | registry:block | Small autocomplete |
| `c-autocomplete-11` | Large autocomplete | registry:block | Large autocomplete |
| `c-autocomplete-12` | Form integration | registry:block | Form integration |

## Source

### Basic autocomplete control (`c-autocomplete-1`)

Target: `components/examples/c-autocomplete-1.tsx`

Basic autocomplete control

```tsx
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Autocomplete items={items}>
        <AutocompleteInput placeholder="Search items" />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item.value}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "Feature" },
  { id: "t2", value: "Fix" },
  { id: "t3", value: "Bug" },
  { id: "t4", value: "Docs" },
  { id: "t5", value: "Internal" },
  { id: "t6", value: "Mobile" },
  { id: "c-accordion", value: "component: Accordion" },
  { id: "c-alert-dialog", value: "component: Alert Dialog" },
  { id: "c-autocomplete", value: "component: Autocomplete" },
  { id: "c-avatar", value: "component: Avatar" },
  { id: "c-checkbox", value: "component: Checkbox" },
  { id: "c-checkbox-group", value: "component: Checkbox Group" },
  { id: "c-collapsible", value: "component: Collapsible" },
  { id: "c-combobox", value: "component: Combobox" },
  { id: "c-context-menu", value: "component: Context Menu" },
  { id: "c-dialog", value: "component: Dialog" },
  { id: "c-field", value: "component: Field" },
  { id: "c-fieldset", value: "component: Fieldset" },
  { id: "c-filterable-menu", value: "component: Filterable Menu" },
  { id: "c-form", value: "component: Form" },
  { id: "c-input", value: "component: Input" },
  { id: "c-menu", value: "component: Menu" },
  { id: "c-menubar", value: "component: Menubar" },
  { id: "c-meter", value: "component: Meter" },
  { id: "c-navigation-menu", value: "component: Navigation Menu" },
  { id: "c-number-field", value: "component: Number Field" },
  { id: "c-popover", value: "component: Popover" },
  { id: "c-preview-card", value: "component: Preview Card" },
  { id: "c-progress", value: "component: Progress" },
  { id: "c-radio", value: "component: Radio" },
  { id: "c-scroll-area", value: "component: Scroll Area" },
  { id: "c-select", value: "component: Select" },
  { id: "c-separator", value: "component: Separator" },
  { id: "c-slider", value: "component: Slider" },
  { id: "c-switch", value: "component: Switch" },
  { id: "c-tabs", value: "component: Tabs" },
  { id: "c-toast", value: "component: Toast" },
  { id: "c-toggle", value: "component: Toggle" },
  { id: "c-toggle-group", value: "component: Toggle Group" },
  { id: "c-toolbar", value: "component: Toolbar" },
  { id: "c-tooltip", value: "component: Tooltip" },
]
```

### Disabled state (`c-autocomplete-2`)

Target: `components/examples/c-autocomplete-2.tsx`

Disabled state

```tsx
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Autocomplete items={items} disabled>
        <AutocompleteInput placeholder="Search items" />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item.value}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-avatar", value: "component: avatar" },
  { id: "c-checkbox", value: "component: checkbox" },
  { id: "c-checkbox-group", value: "component: checkbox group" },
  { id: "c-collapsible", value: "component: collapsible" },
  { id: "c-combobox", value: "component: combobox" },
  { id: "c-context-menu", value: "component: context menu" },
  { id: "c-dialog", value: "component: dialog" },
  { id: "c-field", value: "component: field" },
  { id: "c-fieldset", value: "component: fieldset" },
  { id: "c-filterable-menu", value: "component: filterable menu" },
  { id: "c-form", value: "component: form" },
  { id: "c-input", value: "component: input" },
  { id: "c-menu", value: "component: menu" },
  { id: "c-menubar", value: "component: menubar" },
  { id: "c-meter", value: "component: meter" },
  { id: "c-navigation-menu", value: "component: navigation menu" },
  { id: "c-number-field", value: "component: number field" },
  { id: "c-popover", value: "component: popover" },
  { id: "c-preview-card", value: "component: preview card" },
  { id: "c-progress", value: "component: progress" },
  { id: "c-radio", value: "component: radio" },
  { id: "c-scroll-area", value: "component: scroll area" },
  { id: "c-select", value: "component: select" },
  { id: "c-separator", value: "component: separator" },
  { id: "c-slider", value: "component: slider" },
  { id: "c-switch", value: "component: switch" },
  { id: "c-tabs", value: "component: tabs" },
  { id: "c-toast", value: "component: toast" },
  { id: "c-toggle", value: "component: toggle" },
  { id: "c-toggle-group", value: "component: toggle group" },
  { id: "c-toolbar", value: "component: toolbar" },
  { id: "c-tooltip", value: "component: tooltip" },
]
```

### Auto highlight option as you type (`c-autocomplete-3`)

Target: `components/examples/c-autocomplete-3.tsx`

Auto highlight option as you type

```tsx
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Autocomplete items={items} autoHighlight>
        <AutocompleteInput placeholder="Search items" />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item.value}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-avatar", value: "component: avatar" },
  { id: "c-checkbox", value: "component: checkbox" },
  { id: "c-checkbox-group", value: "component: checkbox group" },
  { id: "c-collapsible", value: "component: collapsible" },
  { id: "c-combobox", value: "component: combobox" },
  { id: "c-context-menu", value: "component: context menu" },
  { id: "c-dialog", value: "component: dialog" },
  { id: "c-field", value: "component: field" },
  { id: "c-fieldset", value: "component: fieldset" },
  { id: "c-filterable-menu", value: "component: filterable menu" },
  { id: "c-form", value: "component: form" },
  { id: "c-input", value: "component: input" },
  { id: "c-menu", value: "component: menu" },
  { id: "c-menubar", value: "component: menubar" },
  { id: "c-meter", value: "component: meter" },
  { id: "c-navigation-menu", value: "component: navigation menu" },
  { id: "c-number-field", value: "component: number field" },
  { id: "c-popover", value: "component: popover" },
  { id: "c-preview-card", value: "component: preview card" },
  { id: "c-progress", value: "component: progress" },
  { id: "c-radio", value: "component: radio" },
  { id: "c-scroll-area", value: "component: scroll area" },
  { id: "c-select", value: "component: select" },
  { id: "c-separator", value: "component: separator" },
  { id: "c-slider", value: "component: slider" },
  { id: "c-switch", value: "component: switch" },
  { id: "c-tabs", value: "component: tabs" },
  { id: "c-toast", value: "component: toast" },
  { id: "c-toggle", value: "component: toggle" },
  { id: "c-toggle-group", value: "component: toggle group" },
  { id: "c-toolbar", value: "component: toolbar" },
  { id: "c-tooltip", value: "component: tooltip" },
]
```

### Control with label (`c-autocomplete-4`)

Target: `components/examples/c-autocomplete-4.tsx`

Control with label

```tsx
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

import { Label } from "@/components/ui/label"

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Autocomplete items={items} autoHighlight>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="with-label">Label</Label>
          <AutocompleteInput id="with-label" placeholder="e.g. feature" />
        </div>
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item.value}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-avatar", value: "component: avatar" },
  { id: "c-checkbox", value: "component: checkbox" },
  { id: "c-checkbox-group", value: "component: checkbox group" },
  { id: "c-collapsible", value: "component: collapsible" },
  { id: "c-combobox", value: "component: combobox" },
  { id: "c-context-menu", value: "component: context menu" },
  { id: "c-dialog", value: "component: dialog" },
  { id: "c-field", value: "component: field" },
  { id: "c-fieldset", value: "component: fieldset" },
  { id: "c-filterable-menu", value: "component: filterable menu" },
  { id: "c-form", value: "component: form" },
  { id: "c-input", value: "component: input" },
  { id: "c-menu", value: "component: menu" },
  { id: "c-menubar", value: "component: menubar" },
  { id: "c-meter", value: "component: meter" },
  { id: "c-navigation-menu", value: "component: navigation menu" },
  { id: "c-number-field", value: "component: number field" },
  { id: "c-popover", value: "component: popover" },
  { id: "c-preview-card", value: "component: preview card" },
  { id: "c-progress", value: "component: progress" },
  { id: "c-radio", value: "component: radio" },
  { id: "c-scroll-area", value: "component: scroll area" },
  { id: "c-select", value: "component: select" },
  { id: "c-separator", value: "component: separator" },
  { id: "c-slider", value: "component: slider" },
  { id: "c-switch", value: "component: switch" },
  { id: "c-tabs", value: "component: tabs" },
  { id: "c-toast", value: "component: toast" },
  { id: "c-toggle", value: "component: toggle" },
  { id: "c-toggle-group", value: "component: toggle group" },
  { id: "c-toolbar", value: "component: toolbar" },
  { id: "c-tooltip", value: "component: tooltip" },
]
```

### With clear button (`c-autocomplete-5`)

Target: `components/examples/c-autocomplete-5.tsx`

With clear button

```tsx
"use client"

import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  const [value, setValue] = useState<string>("")

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <div className="w-full max-w-xs">
      <Autocomplete
        value={value}
        onValueChange={setValue}
        items={filteredItems}
        itemToStringValue={(item: unknown) => (item as Item).value}
      >
        <AutocompleteInput placeholder="e.g. feature" showClear />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-avatar", value: "component: avatar" },
  { id: "c-checkbox", value: "component: checkbox" },
  { id: "c-checkbox-group", value: "component: checkbox group" },
  { id: "c-collapsible", value: "component: collapsible" },
  { id: "c-combobox", value: "component: combobox" },
  { id: "c-context-menu", value: "component: context menu" },
  { id: "c-dialog", value: "component: dialog" },
  { id: "c-field", value: "component: field" },
  { id: "c-fieldset", value: "component: fieldset" },
  { id: "c-filterable-menu", value: "component: filterable menu" },
  { id: "c-form", value: "component: form" },
  { id: "c-input", value: "component: input" },
  { id: "c-menu", value: "component: menu" },
  { id: "c-menubar", value: "component: menubar" },
  { id: "c-meter", value: "component: meter" },
  { id: "c-navigation-menu", value: "component: navigation menu" },
  { id: "c-number-field", value: "component: number field" },
  { id: "c-popover", value: "component: popover" },
  { id: "c-preview-card", value: "component: preview card" },
  { id: "c-progress", value: "component: progress" },
  { id: "c-radio", value: "component: radio" },
  { id: "c-scroll-area", value: "component: scroll area" },
  { id: "c-select", value: "component: select" },
  { id: "c-separator", value: "component: separator" },
  { id: "c-slider", value: "component: slider" },
  { id: "c-switch", value: "component: switch" },
  { id: "c-tabs", value: "component: tabs" },
  { id: "c-toast", value: "component: toast" },
  { id: "c-toggle", value: "component: toggle" },
  { id: "c-toggle-group", value: "component: toggle group" },
  { id: "c-toolbar", value: "component: toolbar" },
  { id: "c-tooltip", value: "component: tooltip" },
]
```

### With trigger button (`c-autocomplete-6`)

Target: `components/examples/c-autocomplete-6.tsx`

With trigger button

```tsx
"use client"

import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  const [value, setValue] = useState<string>("")

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <div className="w-full max-w-xs">
      <Autocomplete
        value={value}
        onValueChange={setValue}
        items={filteredItems}
        itemToStringValue={(item: unknown) => (item as Item).value}
      >
        <AutocompleteInput placeholder="e.g. feature" showTrigger />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-avatar", value: "component: avatar" },
  { id: "c-checkbox", value: "component: checkbox" },
  { id: "c-checkbox-group", value: "component: checkbox group" },
  { id: "c-collapsible", value: "component: collapsible" },
  { id: "c-combobox", value: "component: combobox" },
  { id: "c-context-menu", value: "component: context menu" },
  { id: "c-dialog", value: "component: dialog" },
  { id: "c-field", value: "component: field" },
  { id: "c-fieldset", value: "component: fieldset" },
  { id: "c-filterable-menu", value: "component: filterable menu" },
  { id: "c-form", value: "component: form" },
  { id: "c-input", value: "component: input" },
  { id: "c-menu", value: "component: menu" },
  { id: "c-menubar", value: "component: menubar" },
  { id: "c-meter", value: "component: meter" },
  { id: "c-navigation-menu", value: "component: navigation menu" },
  { id: "c-number-field", value: "component: number field" },
  { id: "c-popover", value: "component: popover" },
  { id: "c-preview-card", value: "component: preview card" },
  { id: "c-progress", value: "component: progress" },
  { id: "c-radio", value: "component: radio" },
  { id: "c-scroll-area", value: "component: scroll area" },
  { id: "c-select", value: "component: select" },
  { id: "c-separator", value: "component: separator" },
  { id: "c-slider", value: "component: slider" },
  { id: "c-switch", value: "component: switch" },
  { id: "c-tabs", value: "component: tabs" },
  { id: "c-toast", value: "component: toast" },
  { id: "c-toggle", value: "component: toggle" },
  { id: "c-toggle-group", value: "component: toggle group" },
  { id: "c-toolbar", value: "component: toolbar" },
  { id: "c-tooltip", value: "component: tooltip" },
]
```

### With clear and trigger buttons (`c-autocomplete-7`)

Target: `components/examples/c-autocomplete-7.tsx`

With clear and trigger buttons

```tsx
"use client"

import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  const [value, setValue] = useState<string>("")

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <div className="w-full max-w-xs">
      <Autocomplete
        value={value}
        onValueChange={setValue}
        items={filteredItems}
        itemToStringValue={(item: unknown) => (item as Item).value}
      >
        <AutocompleteInput placeholder="e.g. feature" showTrigger showClear />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-avatar", value: "component: avatar" },
  { id: "c-checkbox", value: "component: checkbox" },
  { id: "c-checkbox-group", value: "component: checkbox group" },
  { id: "c-collapsible", value: "component: collapsible" },
  { id: "c-combobox", value: "component: combobox" },
  { id: "c-context-menu", value: "component: context menu" },
  { id: "c-dialog", value: "component: dialog" },
  { id: "c-field", value: "component: field" },
  { id: "c-fieldset", value: "component: fieldset" },
  { id: "c-filterable-menu", value: "component: filterable menu" },
  { id: "c-form", value: "component: form" },
  { id: "c-input", value: "component: input" },
  { id: "c-menu", value: "component: menu" },
  { id: "c-menubar", value: "component: menubar" },
  { id: "c-meter", value: "component: meter" },
  { id: "c-navigation-menu", value: "component: navigation menu" },
  { id: "c-number-field", value: "component: number field" },
  { id: "c-popover", value: "component: popover" },
  { id: "c-preview-card", value: "component: preview card" },
  { id: "c-progress", value: "component: progress" },
  { id: "c-radio", value: "component: radio" },
  { id: "c-scroll-area", value: "component: scroll area" },
  { id: "c-select", value: "component: select" },
  { id: "c-separator", value: "component: separator" },
  { id: "c-slider", value: "component: slider" },
  { id: "c-switch", value: "component: switch" },
  { id: "c-tabs", value: "component: tabs" },
  { id: "c-toast", value: "component: toast" },
  { id: "c-toggle", value: "component: toggle" },
  { id: "c-toggle-group", value: "component: toggle group" },
  { id: "c-toolbar", value: "component: toolbar" },
  { id: "c-tooltip", value: "component: tooltip" },
]
```

### With groups and labels (`c-autocomplete-8`)

Target: `components/examples/c-autocomplete-8.tsx`

With groups and labels

```tsx
"use client"

import { useMemo, useState } from "react"
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Pattern() {
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)

  const { contains } = AutocompletePrimitive.useFilter({ sensitivity: "base" })

  const filteredItems = useMemo(() => {
    if (!value) return groupedUsers

    return groupedUsers
      .map((group) => ({
        ...group,
        items: (group.items || []).filter(
          (item) =>
            contains(item.name || "", value) ||
            contains(item.group || "", value) ||
            contains(item.position || "", value)
        ),
      }))
      .filter((group) => group.items && group.items.length > 0)
  }, [value, contains])

  return (
    <div className="w-full max-w-xs">
      <Autocomplete
        items={filteredItems}
        value={value}
        onValueChange={setValue}
        open={open}
        onOpenChange={setOpen}
        itemToStringValue={(item: unknown) => (item as User).name}
        filter={null}
      >
        <AutocompleteInput placeholder="e.g. John, Developer, Marketing" />
        {open && (
          <AutocompleteContent className="pt-0">
            {filteredItems.length === 0 ? (
              <AutocompleteEmpty>No matching users found.</AutocompleteEmpty>
            ) : (
              <AutocompleteList className="not-empty:py-0">
                {(group: UserGroup) => (
                  <AutocompleteGroup
                    key={group.group}
                    items={group.items}
                    className="py-0"
                  >
                    <AutocompleteGroupLabel className="bg-background text-muted-foreground sticky top-0 z-10 me-1.5 py-2.5 text-xs font-medium">
                      {group.group}
                    </AutocompleteGroupLabel>
                    <AutocompleteCollection>
                      {(item: User) => (
                        <AutocompleteItem
                          key={item.id}
                          value={item}
                          className="flex items-center gap-2.5 rounded-lg"
                        >
                          <Avatar className="size-9">
                            <AvatarImage
                              src={item.avatar}
                              alt={item.name || "User"}
                            />
                            <AvatarFallback>
                              {(item.name || "U")
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <div className="truncate font-medium">
                              {item.name || "Unknown"}
                            </div>
                            <div className="text-muted-foreground truncate text-sm">
                              {item.position || "No position available"}
                            </div>
                          </div>
                        </AutocompleteItem>
                      )}
                    </AutocompleteCollection>
                  </AutocompleteGroup>
                )}
              </AutocompleteList>
            )}
          </AutocompleteContent>
        )}
      </Autocomplete>
    </div>
  )
}

interface User {
  id: string
  name: string
  group: string
  position: string
  avatar: string
  status: "Active" | "Inactive" | "Away"
}

interface UserGroup {
  group: string
  items: User[]
}

const usersData: User[] = [
  // Development Team
  {
    id: "john-doe",
    name: "John Doe",
    group: "Development Team",
    position: "Senior Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "Active",
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    group: "Development Team",
    position: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "Active",
  },
  {
    id: "mike-wilson",
    name: "Mike Wilson",
    group: "Development Team",
    position: "Backend Developer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "Active",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    group: "Development Team",
    position: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    status: "Away",
  },
  {
    id: "david-brown",
    name: "David Brown",
    group: "Development Team",
    position: "Mobile Developer",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "Active",
  },
  {
    id: "lisa-garcia",
    name: "Lisa Garcia",
    group: "Development Team",
    position: "UI/UX Developer",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    status: "Active",
  },

  // Design Team
  {
    id: "alex-martinez",
    name: "Alex Martinez",
    group: "Design Team",
    position: "Lead UX Designer",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    status: "Active",
  },
  {
    id: "emma-davis",
    name: "Emma Davis",
    group: "Design Team",
    position: "UI Designer",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    status: "Active",
  },
  {
    id: "chris-taylor",
    name: "Chris Taylor",
    group: "Design Team",
    position: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    status: "Active",
  },
  {
    id: "olivia-anderson",
    name: "Olivia Anderson",
    group: "Design Team",
    position: "Visual Designer",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    status: "Inactive",
  },

  // Marketing Team
  {
    id: "james-moore",
    name: "James Moore",
    group: "Marketing Team",
    position: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    status: "Active",
  },
  {
    id: "sophia-white",
    name: "Sophia White",
    group: "Marketing Team",
    position: "Content Marketing Specialist",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    status: "Active",
  },
  {
    id: "william-harris",
    name: "William Harris",
    group: "Marketing Team",
    position: "Digital Marketing Specialist",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    status: "Active",
  },
  {
    id: "ava-martin",
    name: "Ava Martin",
    group: "Marketing Team",
    position: "Social Media Manager",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    status: "Away",
  },

  // Sales Team
  {
    id: "ethan-thompson",
    name: "Ethan Thompson",
    group: "Sales Team",
    position: "Sales Director",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    status: "Active",
  },
  {
    id: "mia-garcia",
    name: "Mia Garcia",
    group: "Sales Team",
    position: "Account Executive",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    status: "Active",
  },
  {
    id: "noah-martinez",
    name: "Noah Martinez",
    group: "Sales Team",
    position: "Sales Representative",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    status: "Active",
  },
  {
    id: "isabella-rodriguez",
    name: "Isabella Rodriguez",
    group: "Sales Team",
    position: "Business Development Manager",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    status: "Active",
  },

  // Management Team
  {
    id: "lucas-lee",
    name: "Lucas Lee",
    group: "Management Team",
    position: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    status: "Active",
  },
  {
    id: "charlotte-walker",
    name: "Charlotte Walker",
    group: "Management Team",
    position: "CTO",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    status: "Active",
  },
  {
    id: "benjamin-hall",
    name: "Benjamin Hall",
    group: "Management Team",
    position: "VP of Engineering",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    status: "Active",
  },
  {
    id: "amelia-allen",
    name: "Amelia Allen",
    group: "Management Team",
    position: "VP of Marketing",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    status: "Active",
  },

  // Support Team
  {
    id: "henry-young",
    name: "Henry Young",
    group: "Support Team",
    position: "Customer Success Manager",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    status: "Active",
  },
  {
    id: "grace-king",
    name: "Grace King",
    group: "Support Team",
    position: "Technical Support Specialist",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    status: "Active",
  },
  {
    id: "sebastian-wright",
    name: "Sebastian Wright",
    group: "Support Team",
    position: "Customer Support Representative",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    status: "Away",
  },
  {
    id: "lily-lopez",
    name: "Lily Lopez",
    group: "Support Team",
    position: "Help Desk Technician",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    status: "Active",
  },
]

function groupUsers(users: User[]): UserGroup[] {
  const groups: { [key: string]: User[] } = {}
  users.forEach((item) => {
    ;(groups[item.group] ??= []).push(item)
  })

  // Sort by status within each group (Active first, then Away, then Inactive)
  Object.keys(groups).forEach((group) => {
    groups[group].sort((a, b) => {
      const statusOrder = { Active: 0, Away: 1, Inactive: 2 }
      return statusOrder[a.status] - statusOrder[b.status]
    })
  })

  const order = [
    "Management Team",
    "Development Team",
    "Design Team",
    "Marketing Team",
    "Sales Team",
    "Support Team",
  ]
  return order.map((group) => ({ group, items: groups[group] ?? [] }))
}

const groupedUsers: UserGroup[] = groupUsers(usersData)
```

### With search results (`c-autocomplete-9`)

Target: `components/examples/c-autocomplete-9.tsx`

With search results

```tsx
"use client"

import { ReactNode, useEffect, useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteStatus,
} from "@/components/reui/autocomplete"
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [searchValue, setSearchValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<Developer[]>([])
  const [error, setError] = useState<string | null>(null)

  const { contains } = AutocompletePrimitive.useFilter({ sensitivity: "base" })

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([])
      setIsLoading(false)
      return undefined
    }

    setIsLoading(true)
    setError(null)

    let ignore = false

    async function fetchDevelopers() {
      try {
        const results = await searchDevelopers(searchValue, contains)
        if (!ignore) {
          setSearchResults(results)
        }
      } catch {
        if (!ignore) {
          setError("Failed to fetch developers. Please try again.")
          setSearchResults([])
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    const timeoutId = setTimeout(fetchDevelopers, 300)

    return () => {
      clearTimeout(timeoutId)
      ignore = true
    }
  }, [searchValue, contains])

  let status: ReactNode = ""

  if (isLoading) {
    status = (
      <div className="flex items-center gap-2">
        <IconPlaceholder
          lucide="LoaderCircleIcon"
          tabler="IconLoader2"
          hugeicons="Loading02Icon"
          phosphor="CircleNotchIcon"
          remixicon="RiLoader4Line"
          className="size-4 animate-spin"
          aria-hidden
        />
        Searching developers...
      </div>
    )
  } else if (error) {
    status = error
  } else if (searchResults.length === 0 && searchValue) {
    status = `No developers found for "${searchValue}"`
  } else if (searchResults.length > 0) {
    status = `${searchResults.length} developer${searchResults.length === 1 ? "" : "s"} found`
  } else if (!searchValue) {
    status = "Start typing to search developers..."
  }

  const shouldRenderPopup = searchValue !== ""

  return (
    <div className="w-full max-w-xs">
      <Autocomplete
        items={searchResults}
        value={searchValue}
        onValueChange={setSearchValue}
        itemToStringValue={(item: unknown) => (item as Developer).name}
        filter={null}
      >
        <AutocompleteInput
          placeholder="e.g. John Smith, React, San Francisco"
          showTrigger
          showClear
        />
        {shouldRenderPopup && (
          <AutocompleteContent>
            <AutocompleteStatus>{status}</AutocompleteStatus>
            <AutocompleteList>
              {(developer: Developer) => (
                <AutocompleteItem
                  key={developer.id}
                  value={developer}
                  className="rounded-lg"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Avatar className="size-9">
                      <AvatarImage
                        src={developer.avatar}
                        alt={developer.name}
                      />
                      <AvatarFallback>
                        {developer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium">
                        {developer.name}
                      </div>
                      <div className="text-muted-foreground truncate text-sm">
                        {developer.role} • {developer.location}
                      </div>
                    </div>
                  </div>
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompleteContent>
        )}
      </Autocomplete>
    </div>
  )
}

async function searchDevelopers(
  query: string,
  filter: (item: string, query: string) => boolean
): Promise<Developer[]> {
  // Simulate network delay
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 800 + 200)
  })

  // Simulate occasional network errors (2% chance)
  if (Math.random() < 0.02 || query === "error") {
    throw new Error("Network error")
  }

  return topDevelopers.filter(
    (developer) =>
      filter(developer.name, query) ||
      filter(developer.role, query) ||
      filter(developer.location, query) ||
      developer.skills.some((skill) => filter(skill, query))
  )
}

interface Developer {
  id: string
  name: string
  role: string
  location: string
  skills: string[]
  experience: number
  rating: number
  avatar: string
}

const topDevelopers: Developer[] = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    experience: 8,
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Frontend Architect",
    location: "New York, NY",
    skills: ["Vue.js", "JavaScript", "CSS", "Webpack", "Figma"],
    experience: 10,
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    role: "Backend Engineer",
    location: "Austin, TX",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Kubernetes"],
    experience: 6,
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Emily Wang",
    role: "DevOps Engineer",
    location: "Seattle, WA",
    skills: ["AWS", "Terraform", "Jenkins", "Docker", "Linux"],
    experience: 7,
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "David Kim",
    role: "Mobile Developer",
    location: "Los Angeles, CA",
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    experience: 5,
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "6",
    name: "Lisa Thompson",
    role: "Data Engineer",
    location: "Boston, MA",
    skills: ["Python", "Spark", "Airflow", "Snowflake", "dbt"],
    experience: 9,
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "7",
    name: "James Wilson",
    role: "Cloud Solutions Architect",
    location: "Chicago, IL",
    skills: ["AWS", "Azure", "Terraform", "Kubernetes", "Microservices"],
    experience: 12,
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "8",
    name: "Maria Garcia",
    role: "UI/UX Developer",
    location: "Miami, FL",
    skills: ["React", "Figma", "CSS-in-JS", "Storybook", "Accessibility"],
    experience: 4,
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: "9",
    name: "Robert Taylor",
    role: "Machine Learning Engineer",
    location: "Denver, CO",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Docker"],
    experience: 6,
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: "10",
    name: "Jennifer Lee",
    role: "Blockchain Developer",
    location: "San Diego, CA",
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Rust"],
    experience: 5,
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: "11",
    name: "Christopher Brown",
    role: "Security Engineer",
    location: "Portland, OR",
    skills: ["Cybersecurity", "Penetration Testing", "OWASP", "SIEM", "Python"],
    experience: 8,
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "12",
    name: "Amanda Davis",
    role: "Game Developer",
    location: "Orlando, FL",
    skills: ["Unity", "C#", "Unreal Engine", "3D Modeling", "VR/AR"],
    experience: 7,
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: "13",
    name: "Kevin Zhang",
    role: "AI Research Engineer",
    location: "Palo Alto, CA",
    skills: ["Python", "PyTorch", "Transformers", "NLP", "Computer Vision"],
    experience: 6,
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: "14",
    name: "Rachel Green",
    role: "QA Automation Engineer",
    location: "Phoenix, AZ",
    skills: ["Selenium", "Cypress", "Jest", "Python", "Test Automation"],
    experience: 5,
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: "15",
    name: "Daniel Martinez",
    role: "System Administrator",
    location: "Dallas, TX",
    skills: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "PowerShell",
      "VMware",
    ],
    experience: 10,
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: "16",
    name: "Sophie Anderson",
    role: "Product Manager",
    location: "San Jose, CA",
    skills: [
      "Product Strategy",
      "Agile",
      "Analytics",
      "User Research",
      "Figma",
    ],
    experience: 8,
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    id: "17",
    name: "Mark Thompson",
    role: "Database Administrator",
    location: "Atlanta, GA",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Performance Tuning"],
    experience: 11,
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: "18",
    name: "Jessica White",
    role: "Technical Writer",
    location: "Raleigh, NC",
    skills: [
      "Technical Writing",
      "Markdown",
      "API Documentation",
      "Git",
      "Confluence",
    ],
    experience: 6,
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    id: "19",
    name: "Andrew Clark",
    role: "Site Reliability Engineer",
    location: "Nashville, TN",
    skills: [
      "Monitoring",
      "Incident Response",
      "Python",
      "Terraform",
      "Kubernetes",
    ],
    experience: 7,
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: "20",
    name: "Nicole Taylor",
    role: "Frontend Developer",
    location: "Minneapolis, MN",
    skills: ["Angular", "TypeScript", "RxJS", "SCSS", "Jest"],
    experience: 4,
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: "21",
    name: "Ryan Murphy",
    role: "Backend Developer",
    location: "Kansas City, MO",
    skills: ["Java", "Spring Boot", "Microservices", "MongoDB", "Docker"],
    experience: 6,
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: "22",
    name: "Stephanie Lewis",
    role: "Full-Stack Developer",
    location: "Salt Lake City, UT",
    skills: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
    experience: 5,
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "23",
    name: "Brandon Wright",
    role: "Cloud Engineer",
    location: "Las Vegas, NV",
    skills: ["AWS", "Terraform", "Docker", "Kubernetes", "Python"],
    experience: 8,
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: "24",
    name: "Ashley Hall",
    role: "DevOps Engineer",
    location: "Columbus, OH",
    skills: ["CI/CD", "Jenkins", "GitLab", "Docker", "AWS"],
    experience: 6,
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    id: "25",
    name: "Tyler Young",
    role: "Mobile App Developer",
    location: "Tampa, FL",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
    experience: 4,
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
  },
]
```

### Small autocomplete (`c-autocomplete-10`)

Target: `components/examples/c-autocomplete-10.tsx`

Small autocomplete

```tsx
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Autocomplete items={items}>
        <AutocompleteInput
          placeholder="Search items"
          size="sm"
          showTrigger
          showClear
        />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item.value}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "Feature" },
  { id: "t2", value: "Fix" },
  { id: "t3", value: "Bug" },
  { id: "t4", value: "Docs" },
  { id: "t5", value: "Internal" },
  { id: "t6", value: "Mobile" },
  { id: "c-accordion", value: "component: Accordion" },
  { id: "c-alert-dialog", value: "component: Alert Dialog" },
  { id: "c-autocomplete", value: "component: Autocomplete" },
  { id: "c-avatar", value: "component: Avatar" },
  { id: "c-checkbox", value: "component: Checkbox" },
  { id: "c-checkbox-group", value: "component: Checkbox Group" },
  { id: "c-collapsible", value: "component: Collapsible" },
  { id: "c-combobox", value: "component: Combobox" },
  { id: "c-context-menu", value: "component: Context Menu" },
  { id: "c-dialog", value: "component: Dialog" },
  { id: "c-field", value: "component: Field" },
  { id: "c-fieldset", value: "component: Fieldset" },
  { id: "c-filterable-menu", value: "component: Filterable Menu" },
  { id: "c-form", value: "component: Form" },
  { id: "c-input", value: "component: Input" },
  { id: "c-menu", value: "component: Menu" },
  { id: "c-menubar", value: "component: Menubar" },
  { id: "c-meter", value: "component: Meter" },
  { id: "c-navigation-menu", value: "component: Navigation Menu" },
  { id: "c-number-field", value: "component: Number Field" },
  { id: "c-popover", value: "component: Popover" },
  { id: "c-preview-card", value: "component: Preview Card" },
  { id: "c-progress", value: "component: Progress" },
  { id: "c-radio", value: "component: Radio" },
  { id: "c-scroll-area", value: "component: Scroll Area" },
  { id: "c-select", value: "component: Select" },
  { id: "c-separator", value: "component: Separator" },
  { id: "c-slider", value: "component: Slider" },
  { id: "c-switch", value: "component: Switch" },
  { id: "c-tabs", value: "component: Tabs" },
  { id: "c-toast", value: "component: Toast" },
  { id: "c-toggle", value: "component: Toggle" },
  { id: "c-toggle-group", value: "component: Toggle Group" },
  { id: "c-toolbar", value: "component: Toolbar" },
  { id: "c-tooltip", value: "component: Tooltip" },
]
```

### Large autocomplete (`c-autocomplete-11`)

Target: `components/examples/c-autocomplete-11.tsx`

Large autocomplete

```tsx
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Autocomplete items={items}>
        <AutocompleteInput
          placeholder="Search items"
          size="lg"
          showTrigger
          showClear
        />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.id} value={item.value}>
                {item.value}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "Feature" },
  { id: "t2", value: "Fix" },
  { id: "t3", value: "Bug" },
  { id: "t4", value: "Docs" },
  { id: "t5", value: "Internal" },
  { id: "t6", value: "Mobile" },
  { id: "c-accordion", value: "component: Accordion" },
  { id: "c-alert-dialog", value: "component: Alert Dialog" },
  { id: "c-autocomplete", value: "component: Autocomplete" },
  { id: "c-avatar", value: "component: Avatar" },
  { id: "c-checkbox", value: "component: Checkbox" },
  { id: "c-checkbox-group", value: "component: Checkbox Group" },
  { id: "c-collapsible", value: "component: Collapsible" },
  { id: "c-combobox", value: "component: Combobox" },
  { id: "c-context-menu", value: "component: Context Menu" },
  { id: "c-dialog", value: "component: Dialog" },
  { id: "c-field", value: "component: Field" },
  { id: "c-fieldset", value: "component: Fieldset" },
  { id: "c-filterable-menu", value: "component: Filterable Menu" },
  { id: "c-form", value: "component: Form" },
  { id: "c-input", value: "component: Input" },
  { id: "c-menu", value: "component: Menu" },
  { id: "c-menubar", value: "component: Menubar" },
  { id: "c-meter", value: "component: Meter" },
  { id: "c-navigation-menu", value: "component: Navigation Menu" },
  { id: "c-number-field", value: "component: Number Field" },
  { id: "c-popover", value: "component: Popover" },
  { id: "c-preview-card", value: "component: Preview Card" },
  { id: "c-progress", value: "component: Progress" },
  { id: "c-radio", value: "component: Radio" },
  { id: "c-scroll-area", value: "component: Scroll Area" },
  { id: "c-select", value: "component: Select" },
  { id: "c-separator", value: "component: Separator" },
  { id: "c-slider", value: "component: Slider" },
  { id: "c-switch", value: "component: Switch" },
  { id: "c-tabs", value: "component: Tabs" },
  { id: "c-toast", value: "component: Toast" },
  { id: "c-toggle", value: "component: Toggle" },
  { id: "c-toggle-group", value: "component: Toggle Group" },
  { id: "c-toolbar", value: "component: Toolbar" },
  { id: "c-tooltip", value: "component: Tooltip" },
]
```

### Form integration (`c-autocomplete-12`)

Target: `components/examples/c-autocomplete-12.tsx`

Form integration

```tsx
"use client"

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/reui/autocomplete"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const FormSchema = z.object({
  feature: z
    .string()
    .min(1, "Please select an item.")
    .refine(
      (val) => items.some((item) => item.value === val),
      "Please select a valid item."
    ),
})

export function Pattern() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { feature: "" },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Form submitted", {
      description: (
        <Alert variant="default">
          <IconPlaceholder
            lucide="CircleAlertIcon"
            tabler="IconAlertCircle"
            hugeicons="AlertCircleIcon"
            phosphor="WarningCircleIcon"
            remixicon="RiErrorWarningLine"
          />
          <AlertDescription>
            Your form has successfully submitted with feature: {data.feature}
          </AlertDescription>
        </Alert>
      ),
    })

    form.reset()
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Controller
                name="feature"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid || undefined}>
                    <FieldLabel htmlFor="autocomplete-feature">
                      Select Feature
                    </FieldLabel>
                    <Autocomplete
                      items={items}
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value)
                      }}
                    >
                      <AutocompleteInput
                        id="autocomplete-feature"
                        placeholder="e.g. feature"
                        aria-invalid={!!form.formState.errors.feature}
                      />
                      <AutocompleteContent>
                        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
                        <AutocompleteList>
                          {(item) => (
                            <AutocompleteItem key={item.id} value={item.value}>
                              {item.value}
                            </AutocompleteItem>
                          )}
                        </AutocompleteList>
                      </AutocompleteContent>
                    </Autocomplete>
                    <FieldDescription>
                      Search and select a component feature.
                    </FieldDescription>
                    {fieldState.error && (
                      <FieldError>{fieldState.error?.message}</FieldError>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button
              variant="outline"
              type="button"
              onClick={() => form.reset()}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

interface Item {
  id: string
  value: string
}

const items: Item[] = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "c-accordion", value: "component: accordion" },
  { id: "c-alert-dialog", value: "component: alert dialog" },
  { id: "c-autocomplete", value: "component: autocomplete" },
  { id: "c-avatar", value: "component: avatar" },
  { id: "c-checkbox", value: "component: checkbox" },
  { id: "c-checkbox-group", value: "component: checkbox group" },
  { id: "c-collapsible", value: "component: collapsible" },
  { id: "c-combobox", value: "component: combobox" },
  { id: "c-context-menu", value: "component: context menu" },
  { id: "c-dialog", value: "component: dialog" },
  { id: "c-field", value: "component: field" },
  { id: "c-fieldset", value: "component: fieldset" },
  { id: "c-filterable-menu", value: "component: filterable menu" },
  { id: "c-form", value: "component: form" },
  { id: "c-input", value: "component: input" },
  { id: "c-menu", value: "component: menu" },
  { id: "c-menubar", value: "component: menubar" },
  { id: "c-meter", value: "component: meter" },
  { id: "c-navigation-menu", value: "component: navigation menu" },
  { id: "c-number-field", value: "component: number field" },
  { id: "c-popover", value: "component: popover" },
  { id: "c-preview-card", value: "component: preview card" },
  { id: "c-progress", value: "component: progress" },
  { id: "c-radio", value: "component: radio" },
  { id: "c-scroll-area", value: "component: scroll area" },
  { id: "c-select", value: "component: select" },
  { id: "c-separator", value: "component: separator" },
  { id: "c-slider", value: "component: slider" },
  { id: "c-switch", value: "component: switch" },
  { id: "c-tabs", value: "component: tabs" },
  { id: "c-toast", value: "component: toast" },
  { id: "c-toggle", value: "component: toggle" },
  { id: "c-toggle-group", value: "component: toggle group" },
  { id: "c-toolbar", value: "component: toolbar" },
  { id: "c-tooltip", value: "component: tooltip" },
]
```
