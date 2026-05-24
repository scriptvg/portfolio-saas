# Input Otp (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/input-otp](https://www.shadcnui-blocks.com/components/input-otp).
7 variant(s). Install base UI with `pnpm dlx shadcn@latest add input-otp` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `input-otp-01` | Default OTP Input | A default one-time password input component |
| `input-otp-02` | OTP Input Without Separator | An OTP input without separators between fields |
| `input-otp-03` | Separated OTP Input | An OTP input with separated input fields |
| `input-otp-04` | Separated OTP Input (Alternate) | An alternate style of separated OTP input fields |
| `input-otp-05` | Secondary OTP Input | An OTP input with secondary styling |
| `input-otp-06` | OTP Input with Custom Separator | An OTP input with custom separator between fields |
| `input-otp-07` | OTP Input with Inner Shadow | An OTP input with inner shadow styling |

## Variant source

### Default OTP Input (`input-otp-01`)

A default one-time password input component

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP containerClassName="gap-2" maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
```

### OTP Input Without Separator (`input-otp-02`)

An OTP input without separators between fields

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
```

### Separated OTP Input (`input-otp-03`)

An OTP input with separated input fields

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-2">
        <InputOTPSlot className="rounded-md border-l" index={0} />
        <InputOTPSlot className="rounded-md border-l" index={1} />
        <InputOTPSlot className="rounded-md border-l" index={2} />
        <InputOTPSlot className="rounded-md border-l" index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
```

### Separated OTP Input (Alternate) (`input-otp-04`)

An alternate style of separated OTP input fields

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP containerClassName="gap-3" maxLength={6}>
      <InputOTPGroup className="space-x-1">
        <InputOTPSlot className="rounded-md border-l" index={0} />
        <InputOTPSlot className="rounded-md border-l" index={1} />
        <InputOTPSlot className="rounded-md border-l" index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className="space-x-1">
        <InputOTPSlot className="rounded-md border-l" index={3} />
        <InputOTPSlot className="rounded-md border-l" index={4} />
        <InputOTPSlot className="rounded-md border-l" index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
```

### Secondary OTP Input (`input-otp-05`)

An OTP input with secondary styling

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-2">
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={0}
        />
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={1}
        />
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={2}
        />
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={3}
        />
      </InputOTPGroup>
    </InputOTP>
  );
}
```

### OTP Input with Custom Separator (`input-otp-06`)

An OTP input with custom separator between fields

```tsx
import { Dot } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <div className="text-muted-foreground" role="separator">
        <Dot />
      </div>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
```

### OTP Input with Inner Shadow (`input-otp-07`)

An OTP input with inner shadow styling

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-2">
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={0}
        />
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={1}
        />
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={2}
        />
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={3}
        />
      </InputOTPGroup>
    </InputOTP>
  );
}
```
