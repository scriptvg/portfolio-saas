# Textarea (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

6 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-textarea-1` | Basic textarea. | registry:block | Basic textarea. |
| `c-textarea-2` | Invalid textarea. | registry:block | Invalid textarea. |
| `c-textarea-3` | Textarea with label. | registry:block | Textarea with label. |
| `c-textarea-4` | Textarea with description. | registry:block | Textarea with description. |
| `c-textarea-5` | Disabled textarea. | registry:block | Disabled textarea. |
| `c-textarea-6` | Auto-resize textarea with character count | registry:block | Auto-resize textarea with character count |

## Source

### Basic textarea. (`c-textarea-1`)

Target: `components/examples/c-textarea-1.tsx`

Basic textarea.

```tsx
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Textarea placeholder="Type your message here…" className="w-full" />
    </div>
  )
}
```

### Invalid textarea. (`c-textarea-2`)

Target: `components/examples/c-textarea-2.tsx`

Invalid textarea.

```tsx
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Textarea
        placeholder="Type your message here…"
        aria-invalid="true"
        className="w-full"
      />
    </div>
  )
}
```

### Textarea with label. (`c-textarea-3`)

Target: `components/examples/c-textarea-3.tsx`

Textarea with label.

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Field className="w-full">
        <FieldLabel htmlFor="textarea-with-label">Your Message</FieldLabel>
        <Textarea
          id="textarea-with-label"
          placeholder="Type your message here…"
          rows={6}
        />
      </Field>
    </div>
  )
}
```

### Textarea with description. (`c-textarea-4`)

Target: `components/examples/c-textarea-4.tsx`

Textarea with description.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Field className="w-full">
        <FieldLabel htmlFor="textarea-with-desc">Feedback</FieldLabel>
        <Textarea
          id="textarea-with-desc"
          placeholder="Type your message here…"
          rows={6}
        />
        <FieldDescription>
          Type your message and press enter to send.
        </FieldDescription>
      </Field>
    </div>
  )
}
```

### Disabled textarea. (`c-textarea-5`)

Target: `components/examples/c-textarea-5.tsx`

Disabled textarea.

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <Field className="w-full">
        <FieldLabel htmlFor="textarea-disabled">Message (Disabled)</FieldLabel>
        <Textarea
          id="textarea-disabled"
          placeholder="Type your message here…"
          disabled
        />
      </Field>
    </div>
  )
}
```

### Auto-resize textarea with character count (`c-textarea-6`)

Target: `components/examples/c-textarea-6.tsx`

Auto-resize textarea with character count

```tsx
"use client"

import { useCallback, useRef, useState } from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

const MAX_CHARS = 280

export function Pattern() {
  const [value, setValue] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      if (newValue.length <= MAX_CHARS) {
        setValue(newValue)
      }

      const textarea = textareaRef.current
      if (textarea) {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    },
    []
  )

  const remaining = MAX_CHARS - value.length
  const isNearLimit = remaining <= 20
  const isAtLimit = remaining === 0

  return (
    <div className="mx-auto w-full max-w-xs">
      <Field className="w-full">
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="auto-resize-textarea">Bio</FieldLabel>
          <span
            className={`text-xs tabular-nums ${
              isAtLimit
                ? "text-destructive font-semibold"
                : isNearLimit
                  ? "text-warning"
                  : "text-muted-foreground"
            }`}
          >
            {value.length}/{MAX_CHARS}
          </span>
        </div>
        <Textarea
          ref={textareaRef}
          id="auto-resize-textarea"
          value={value}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
          rows={2}
          className="resize-none overflow-hidden"
        />
      </Field>
    </div>
  )
}
```
