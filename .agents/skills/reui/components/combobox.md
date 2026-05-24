# Combobox (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

20 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-combobox-1` | A basic combobox with a list of options | registry:block | A basic combobox with a list of options |
| `c-combobox-2` | A disabled combobox | registry:block | A disabled combobox |
| `c-combobox-3` | A combobox in an invalid state | registry:block | A combobox in an invalid state |
| `c-combobox-4` | A combobox with a clear button | registry:block | A combobox with a clear button |
| `c-combobox-5` | A combobox with auto-highlight enabled | registry:block | A combobox with auto-highlight enabled |
| `c-combobox-6` | A combobox with grouped options | registry:block | A combobox with grouped options |
| `c-combobox-7` | A combobox with grouped options and separators | registry:block | A combobox with grouped options and separators |
| `c-combobox-8` | A combobox with a large list of options | registry:block | A combobox with a large list of options |
| `c-combobox-9` | A combobox with an icon addon | registry:block | A combobox with an icon addon |
| `c-combobox-10` | A combobox rendered inside a popup | registry:block | A combobox rendered inside a popup |
| `c-combobox-11` | A combobox used within a form | registry:block | A combobox used within a form |
| `c-combobox-12` | A multi-select combobox | registry:block | A multi-select combobox |
| `c-combobox-13` | A disabled multi-select combobox | registry:block | A disabled multi-select combobox |
| `c-combobox-14` | A multi-select combobox in an invalid state | registry:block | A multi-select combobox in an invalid state |
| `c-combobox-15` | A multi-select with chips that cannot be removed | registry:block | A multi-select with chips that cannot be removed |
| `c-combobox-16` | A combobox with custom item rendering | registry:block | A combobox with custom item rendering |
| `c-combobox-17` | A combobox used within a dialog | registry:block | A combobox used within a dialog |
| `c-combobox-18` | A combobox with a custom trigger icon | registry:block | A combobox with a custom trigger icon |
| `c-combobox-19` | A multi-select combobox with user tags | registry:block | A multi-select combobox with user tags |
| `c-combobox-20` | Invisible combobox with member tags | registry:block | Invisible combobox with member tags |

## Source

### A basic combobox with a list of options (`c-combobox-1`)

Target: `components/examples/c-combobox-1.tsx`

A basic combobox with a list of options

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A disabled combobox (`c-combobox-2`)

Target: `components/examples/c-combobox-2.tsx`

A disabled combobox

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Select a framework" disabled />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox in an invalid state (`c-combobox-3`)

Target: `components/examples/c-combobox-3.tsx`

A combobox in an invalid state

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  return (
    <Field className="max-w-xs" data-invalid>
      <FieldLabel htmlFor="combobox-framework-invalid">Framework</FieldLabel>
      <Combobox items={frameworks}>
        <ComboboxInput
          id="combobox-framework-invalid"
          placeholder="Select a framework"
          aria-invalid
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldError errors={[{ message: "This field is required." }]} />
    </Field>
  )
}
```

### A combobox with a clear button (`c-combobox-4`)

Target: `components/examples/c-combobox-4.tsx`

A combobox with a clear button

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={frameworks} defaultValue={frameworks[0]}>
        <ComboboxInput placeholder="Select a framework" showClear />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox with auto-highlight enabled (`c-combobox-5`)

Target: `components/examples/c-combobox-5.tsx`

A combobox with auto-highlight enabled

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={frameworks} autoHighlight>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox with grouped options (`c-combobox-6`)

Target: `components/examples/c-combobox-6.tsx`

A combobox with grouped options

```tsx
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={timezones}>
        <ComboboxInput placeholder="Select a timezone" />
        <ComboboxContent>
          <ComboboxEmpty>No timezones found.</ComboboxEmpty>
          <ComboboxList>
            {(group) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox with grouped options and separators (`c-combobox-7`)

Target: `components/examples/c-combobox-7.tsx`

A combobox with grouped options and separators

```tsx
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={timezones}>
        <ComboboxInput placeholder="Select a timezone" />
        <ComboboxContent>
          <ComboboxEmpty>No timezones found.</ComboboxEmpty>
          <ComboboxList>
            {(group) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                <ComboboxSeparator className="group-last/combobox-group:hidden" />
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox with a large list of options (`c-combobox-8`)

Target: `components/examples/c-combobox-8.tsx`

A combobox with a large list of options

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const largeListItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={largeListItems}>
        <ComboboxInput placeholder="Search from 100 items" />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox with an icon addon (`c-combobox-9`)

Target: `components/examples/c-combobox-9.tsx`

A combobox with an icon addon

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import { InputGroupAddon } from "@/components/ui/input-group"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Select a framework">
          <InputGroupAddon>
            <IconPlaceholder
              lucide="GlobeIcon"
              tabler="IconWorld"
              hugeicons="Globe02Icon"
              phosphor="GlobeSimpleIcon"
              remixicon="RiGlobalLine"
              className="text-muted-foreground size-4"
            />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox rendered inside a popup (`c-combobox-10`)

Target: `components/examples/c-combobox-10.tsx`

A combobox rendered inside a popup

```tsx
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const countries = [
  { code: "af", label: "Afghanistan" },
  { code: "al", label: "Albania" },
  { code: "dz", label: "Algeria" },
  { code: "as", label: "American Samoa" },
  { code: "ad", label: "Andorra" },
  { code: "ao", label: "Angola" },
]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox
        items={countries}
        defaultValue={countries[0]}
        itemToStringValue={(item: (typeof countries)[number]) => item.label}
      >
        <ComboboxTrigger
          render={
            <Button variant="outline" className="justify-between font-normal" />
          }
        >
          <ComboboxValue>
            {(item: (typeof countries)[number]) => (
              <span className="flex items-center gap-2">
                <Image
                  src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                  alt=""
                  width={16}
                  height={16}
                  className="rounded-xs"
                />
                <span>{item.label}</span>
              </span>
            )}
          </ComboboxValue>
        </ComboboxTrigger>
        <ComboboxContent className="max-w-(--anchor-width) min-w-(--anchor-width)">
          <ComboboxInput showTrigger={false} placeholder="Search" />
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.code} value={item}>
                <Image
                  src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                  alt=""
                  width={16}
                  height={12}
                  className="rounded-xs"
                />
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox used within a form (`c-combobox-11`)

Target: `components/examples/c-combobox-11.tsx`

A combobox used within a form

```tsx
"use client"

import { FormEvent } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldLabel } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const framework = formData.get("framework") as string
    toast(`You selected ${framework} as your framework.`)
  }

  return (
    <form
      id="form-with-combobox"
      onSubmit={handleSubmit}
      className="w-full max-w-xs space-y-4"
    >
      <Field>
        <FieldLabel htmlFor="framework">Framework</FieldLabel>
        <Combobox items={frameworks}>
          <ComboboxInput
            id="framework"
            name="framework"
            placeholder="Select a framework"
            required
          />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Field>
      <Button type="submit" form="form-with-combobox" className="w-full">
        Submit
      </Button>
    </form>
  )
}
```

### A multi-select combobox (`c-combobox-12`)

Target: `components/examples/c-combobox-12.tsx`

A multi-select combobox

```tsx
"use client"

import { Fragment } from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="max-w-xs">
      <Combobox
        multiple
        autoHighlight
        items={frameworks}
        defaultValue={[frameworks[0]]}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values) => (
              <Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Select frameworks..." />
              </Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A disabled multi-select combobox (`c-combobox-13`)

Target: `components/examples/c-combobox-13.tsx`

A disabled multi-select combobox

```tsx
"use client"

import { Fragment } from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="max-w-xs">
      <Combobox
        multiple
        autoHighlight
        items={frameworks}
        defaultValue={[frameworks[0], frameworks[1]]}
        disabled
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values) => (
              <Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Select frameworks..." />
              </Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A multi-select combobox in an invalid state (`c-combobox-14`)

Target: `components/examples/c-combobox-14.tsx`

A multi-select combobox in an invalid state

```tsx
"use client"

import { Fragment } from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="max-w-xs" data-invalid>
      <FieldLabel htmlFor="combobox-multiple-invalid">Frameworks</FieldLabel>
      <Combobox
        multiple
        autoHighlight
        items={frameworks}
        defaultValue={[frameworks[0], frameworks[1]]}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values) => (
              <Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value} showRemove={true}>
                    {value}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput
                  id="combobox-multiple-invalid"
                  placeholder="Select frameworks..."
                  aria-invalid
                />
              </Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldError errors={[{ message: "This field is required." }]} />
    </Field>
  )
}
```

### A multi-select with chips that cannot be removed (`c-combobox-15`)

Target: `components/examples/c-combobox-15.tsx`

A multi-select with chips that cannot be removed

```tsx
"use client"

import { Fragment } from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="max-w-xs">
      <Combobox
        multiple
        autoHighlight
        items={frameworks}
        defaultValue={[frameworks[0], frameworks[1]]}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values) => (
              <Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value} showRemove={false}>
                    {value}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Select frameworks..." />
              </Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox with custom item rendering (`c-combobox-16`)

Target: `components/examples/c-combobox-16.tsx`

A combobox with custom item rendering

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

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

const members = users.map((user, index) => ({
  ...user,
  position: [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Technical Lead",
    "CTO",
  ][index % 5],
}))

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox
        items={members}
        defaultValue={members[0]}
        itemToStringValue={(member: (typeof members)[number]) => member.name}
      >
        <ComboboxTrigger
          render={
            <Button
              variant="outline"
              className="w-full justify-between font-normal"
            />
          }
        >
          <ComboboxValue>
            {(member: (typeof members)[number]) =>
              member ? (
                <span className="flex items-center gap-2">
                  <Avatar className="size-5">
                    <AvatarImage src={member?.avatar} alt={member?.name} />
                    <AvatarFallback>{member?.initials}</AvatarFallback>
                  </Avatar>
                  <span>{member?.name}</span>
                </span>
              ) : (
                <span className="text-muted-foreground">Select a member</span>
              )
            }
          </ComboboxValue>
        </ComboboxTrigger>
        <ComboboxContent className="max-w-(--anchor-width) min-w-(--anchor-width)">
          <ComboboxInput showTrigger={false} placeholder="Search members..." />
          <ComboboxEmpty>No members found.</ComboboxEmpty>
          <ComboboxList>
            {(member) => (
              <ComboboxItem key={member.id} value={member}>
                <Item size="xs" className="p-0">
                  <Avatar className="size-6">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <ItemContent>
                    <ItemTitle className="whitespace-nowrap">
                      {member.name}
                    </ItemTitle>
                    <ItemDescription>{member.position}</ItemDescription>
                  </ItemContent>
                </Item>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A combobox used within a dialog (`c-combobox-17`)

Target: `components/examples/c-combobox-17.tsx`

A combobox used within a dialog

```tsx
"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <DialogTrigger asChild>
        <Button className="w-full max-w-xs">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Select Framework</DialogTitle>
          <DialogDescription>
            Choose your preferred framework from the list below.
          </DialogDescription>
        </DialogHeader>
        <Field className="pt-4">
          <FieldLabel htmlFor="framework-dialog" className="sr-only">
            Framework
          </FieldLabel>
          <Combobox items={frameworks}>
            <ComboboxInput
              id="framework-dialog"
              placeholder="Select a framework"
            />
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
        <DialogFooter className="pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              toast("Framework selected.")
              setOpen(false)
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### A combobox with a custom trigger icon (`c-combobox-18`)

Target: `components/examples/c-combobox-18.tsx`

A combobox with a custom trigger icon

```tsx
"use client"

import { useState } from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <Field className="max-w-xs">
      <Combobox value={value} onValueChange={setValue} items={frameworks}>
        <ComboboxInput
          placeholder="Select framework"
          showTrigger={false}
          showClear={true}
        >
          {!value && (
            <ComboboxPrimitive.Trigger data-slot="combobox-trigger">
              <IconPlaceholder
                lucide="ChevronsUpDownIcon"
                tabler="IconSelector"
                hugeicons="UnfoldMoreIcon"
                phosphor="CaretUpDownIcon"
                remixicon="RiExpandUpDownLine"
                className="text-muted-foreground pointer-events-none size-4"
              />
            </ComboboxPrimitive.Trigger>
          )}
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### A multi-select combobox with user tags (`c-combobox-19`)

Target: `components/examples/c-combobox-19.tsx`

A multi-select combobox with user tags

```tsx
"use client"

import { Fragment } from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

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

const members = users.map((user, index) => ({
  ...user,
  position: [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Technical Lead",
    "CTO",
  ][index % 5],
}))

export function Pattern() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="max-w-xs">
      <Combobox
        multiple
        items={members}
        itemToStringValue={(member: (typeof members)[number]) => member.name}
        defaultValue={[members[0], members[1]]}
      >
        <ComboboxChips
          ref={anchor}
          className="has-data-[slot=combobox-chip]:pl-1"
        >
          <ComboboxValue>
            {(selectedMembers: (typeof members)[number][]) => (
              <Fragment>
                {selectedMembers.map((member) => (
                  <ComboboxChip
                    key={member.id}
                    showRemove={true}
                    className="rounded-full gap-1.5"
                  >
                    <Avatar className="size-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-[8px]">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    {member.name}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add members..." />
              </Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent
          anchor={anchor}
          className="max-w-(--anchor-width) min-w-(--anchor-width)"
        >
          <ComboboxEmpty>No members found.</ComboboxEmpty>
          <ComboboxList>
            {(member) => (
              <ComboboxItem key={member.id} value={member}>
                <Item size="xs" className="p-0">
                  <Avatar className="size-6">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <ItemContent>
                    <ItemTitle className="whitespace-nowrap">
                      {member.name}
                    </ItemTitle>
                    <ItemDescription>{member.position}</ItemDescription>
                  </ItemContent>
                </Item>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```

### Invisible combobox with member tags (`c-combobox-20`)

Target: `components/examples/c-combobox-20.tsx`

Invisible combobox with member tags

```tsx
"use client"

import { Fragment } from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

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

const members = users.map((user, index) => ({
  ...user,
  position: [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Technical Lead",
    "CTO",
  ][index % 5],
}))

export function Pattern() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="max-w-xs">
      <Combobox
        multiple
        items={members}
        itemToStringValue={(member: (typeof members)[number]) => member.name}
        defaultValue={[members[5], members[9], members[3]]}
      >
        <ComboboxChips
          ref={anchor}
          className="border-none bg-transparent p-0 shadow-none ring-0 focus-within:ring-0"
        >
          <ComboboxValue>
            {(selectedMembers: (typeof members)[number][]) => (
              <Fragment>
                {selectedMembers.map((member) => (
                  <ComboboxChip
                    key={member.id}
                    showRemove={true}
                    className="bg-background rounded-full inline-flex h-auto items-center gap-1.5 border py-0.5 pl-2 shadow-xs **:data-[slot=combobox-chip-remove]:mr-0.5 **:data-[slot=combobox-chip-remove]:bg-transparent"
                  >
                    <Avatar className="size-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-[8px]">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    {member.name}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput
                  placeholder="Add members..."
                  className="bg-transparent"
                />
              </Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent
          anchor={anchor}
          className="max-w-(--anchor-width) min-w-(--anchor-width)"
        >
          <ComboboxEmpty>No members found.</ComboboxEmpty>
          <ComboboxList>
            {(member) => (
              <ComboboxItem key={member.id} value={member}>
                <Item size="xs" className="p-0">
                  <Avatar className="size-6">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <ItemContent>
                    <ItemTitle className="whitespace-nowrap">
                      {member.name}
                    </ItemTitle>
                    <ItemDescription>{member.position}</ItemDescription>
                  </ItemContent>
                </Item>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
```
