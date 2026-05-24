# Textarea (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/textarea](https://www.shadcnui-blocks.com/components/textarea).
7 variant(s). Install base UI with `pnpm dlx shadcn@latest add textarea` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `textarea-01` | Default Textarea | A default textarea component |
| `textarea-02` | Textarea with Background Color | A textarea component with background color |
| `textarea-03` | Disabled Textarea | A disabled textarea component |
| `textarea-04` | Textarea with Label | A textarea component with a label |
| `textarea-05` | Textarea with Rows | A textarea component with custom rows |
| `textarea-06` | Textarea with Helper Text | A textarea component with helper text |
| `textarea-07` | Controlled Textarea | A controlled textarea component |

## Variant source

### Default Textarea (`textarea-01`)

A default textarea component

```tsx
import { Textarea } from "@/components/ui/textarea";

export default function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}
```

### Textarea with Background Color (`textarea-02`)

A textarea component with background color

```tsx
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithBackgroundColorDemo() {
  return (
    <Textarea
      className="bg-muted shadow-none"
      placeholder="Type your message here."
    />
  );
}
```

### Disabled Textarea (`textarea-03`)

A disabled textarea component

```tsx
import { Textarea } from "@/components/ui/textarea";

export default function TextareaDisabledDemo() {
  return <Textarea disabled placeholder="Type your message here." />;
}
```

### Textarea with Label (`textarea-04`)

A textarea component with a label

```tsx
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithLabelDemo() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  );
}
```

### Textarea with Rows (`textarea-05`)

A textarea component with custom rows

```tsx
import { Textarea } from "@/components/ui/textarea";

export default function TextareaRowsDemo() {
  return <Textarea placeholder="Type your message here." rows={8} />;
}
```

### Textarea with Helper Text (`textarea-06`)

A textarea component with helper text

```tsx
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithHelperTextDemo() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}
```

### Controlled Textarea (`textarea-07`)

A controlled textarea component

```tsx
"use client";

import { type ChangeEventHandler, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function ControlledTextareaDemo() {
  const [message, setMessage] = useState<string>();

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Textarea
      onChange={handleChange}
      placeholder="Type your message here."
      value={message}
    />
  );
}
```
