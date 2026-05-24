# Input (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

31 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-input-1` | Basic input | registry:block | Basic input |
| `c-input-2` | Input with label | registry:block | Input with label |
| `c-input-3` | Input with description | registry:block | Input with description |
| `c-input-4` | Disabled input | registry:block | Disabled input |
| `c-input-5` | Input with error message | registry:block | Input with error message |
| `c-input-6` | Input with character counter | registry:block | Input with character counter |
| `c-input-7` | Input with password type | registry:block | Input with password type |
| `c-input-8` | Input with phone type | registry:block | Input with phone type |
| `c-input-9` | Input with URL type | registry:block | Input with URL type |
| `c-input-10` | Input with number type | registry:block | Input with number type |
| `c-input-11` | Input with date type | registry:block | Input with date type |
| `c-input-12` | Input with file type | registry:block | Input with file type |
| `c-input-13` | Input with required indicator | registry:block | Input with required indicator |
| `c-input-14` | Input with time type | registry:block | Input with time type |
| `c-input-15` | Complex input form with multiple fields | registry:block | Complex input form with multiple fields |
| `c-input-16` | Input label with tooltip | registry:block | Input label with tooltip |
| `c-input-17` | Input label with badge | registry:block | Input label with badge |
| `c-input-18` | Input label with optional badge | registry:block | Input label with optional badge |
| `c-input-19` | Input label with link and visibility toggle | registry:block | Input label with link and visibility toggle |
| `c-input-20` | Input with horizontal orientation | registry:block | Input with horizontal orientation |
| `c-input-21` | Input with multiple error messages | registry:block | Input with multiple error messages |
| `c-input-22` | Basic password strength with dynamic hint and icons | registry:block | Basic password strength with dynamic hint and icons |
| `c-input-23` | Advanced password strength indicator with progress | registry:block | Advanced password strength indicator with progress |
| `c-input-24` | Input with pulsed background animation | registry:block | Input with pulsed background animation |
| `c-input-25` | Input with custom focus ring | registry:block | Input with custom focus ring |
| `c-input-26` | Input with subtle background | registry:block | Input with subtle background |
| `c-input-27` | Input with bottom border only | registry:block | Input with bottom border only |
| `c-input-28` | Color input | registry:block | Color input |
| `c-input-29` | Range input with value indicator | registry:block | Range input with value indicator |
| `c-input-30` | Pill-shaped input | registry:block | Pill-shaped input |
| `c-input-31` | Minimal input without borders or background | registry:block | Minimal input without borders or background |

## Source

### Basic input (`c-input-1`)

Target: `components/examples/c-input-1.tsx`

Basic input

```tsx
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Input id="basic-input" type="text" placeholder="Basic Input" />
    </Field>
  )
}
```

### Input with label (`c-input-2`)

Target: `components/examples/c-input-2.tsx`

Input with label

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="input-demo-email">Email</FieldLabel>
      <Input
        id="input-demo-email"
        type="email"
        placeholder="name@example.com"
      />
    </Field>
  )
}
```

### Input with description (`c-input-3`)

Target: `components/examples/c-input-3.tsx`

Input with description

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-username">Username</FieldLabel>
      <Input
        id="input-demo-username"
        type="text"
        placeholder="Enter your username"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  )
}
```

### Disabled input (`c-input-4`)

Target: `components/examples/c-input-4.tsx`

Disabled input

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
      <Input
        id="input-demo-disabled"
        type="email"
        placeholder="Email"
        disabled
      />
    </Field>
  )
}
```

### Input with error message (`c-input-5`)

Target: `components/examples/c-input-5.tsx`

Input with error message

```tsx
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-error">Email</FieldLabel>
      <Input
        id="input-demo-error"
        type="email"
        placeholder="name@example.com"
        aria-invalid="true"
      />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  )
}
```

### Input with character counter (`c-input-6`)

Target: `components/examples/c-input-6.tsx`

Input with character counter

```tsx
"use client"

import { useState } from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  const [value, setValue] = useState("")
  const maxLength = 50

  return (
    <Field className="max-w-xs">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="bio">Description</FieldLabel>
        <span className="text-muted-foreground text-xs">
          {value.length}/{maxLength}
        </span>
      </div>
      <Input
        id="bio"
        maxLength={maxLength}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Description of your project"
      />
    </Field>
  )
}
```

### Input with password type (`c-input-7`)

Target: `components/examples/c-input-7.tsx`

Input with password type

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-password">Password</FieldLabel>
      <Input id="input-demo-password" type="password" placeholder="Password" />
    </Field>
  )
}
```

### Input with phone type (`c-input-8`)

Target: `components/examples/c-input-8.tsx`

Input with phone type

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-tel">Phone</FieldLabel>
      <Input id="input-demo-tel" type="tel" placeholder="+1 (555) 123-4567" />
    </Field>
  )
}
```

### Input with URL type (`c-input-9`)

Target: `components/examples/c-input-9.tsx`

Input with URL type

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-url">URL</FieldLabel>
      <Input id="input-demo-url" type="url" placeholder="https://example.com" />
    </Field>
  )
}
```

### Input with number type (`c-input-10`)

Target: `components/examples/c-input-10.tsx`

Input with number type

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-number">Number</FieldLabel>
      <Input id="input-demo-number" type="number" placeholder="123" />
    </Field>
  )
}
```

### Input with date type (`c-input-11`)

Target: `components/examples/c-input-11.tsx`

Input with date type

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-date">Date</FieldLabel>
      <Input id="input-demo-date" type="date" />
    </Field>
  )
}
```

### Input with file type (`c-input-12`)

Target: `components/examples/c-input-12.tsx`

Input with file type

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-file">File</FieldLabel>
      <Input id="input-demo-file" type="file" />
    </Field>
  )
}
```

### Input with required indicator (`c-input-13`)

Target: `components/examples/c-input-13.tsx`

Input with required indicator

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="company">
        Company <span className="text-destructive">*</span>
      </FieldLabel>
      <Input id="company" placeholder="Wotso Inc." />
    </Field>
  )
}
```

### Input with time type (`c-input-14`)

Target: `components/examples/c-input-14.tsx`

Input with time type

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-demo-time">Time</FieldLabel>
      <Input id="input-demo-time" type="time" />
    </Field>
  )
}
```

### Complex input form with multiple fields (`c-input-15`)

Target: `components/examples/c-input-15.tsx`

Complex input form with multiple fields

```tsx
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Pattern() {
  return (
    <form className="w-full">
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </FieldGroup>
    </form>
  )
}
```

### Input label with tooltip (`c-input-16`)

Target: `components/examples/c-input-16.tsx`

Input label with tooltip

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <div className="flex items-center gap-2">
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center">
              <IconPlaceholder
                lucide="HelpCircleIcon"
                tabler="IconHelpCircle"
                hugeicons="HelpCircleIcon"
                phosphor="QuestionIcon"
                remixicon="RiQuestionLine"
                className="text-muted-foreground size-3.5"
              />
            </TooltipTrigger>
            <TooltipContent>
              Your unique identifier on the platform.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Input id="username" placeholder="johndoe" />
      <FieldDescription>
        Your unique identifier on the platform.
      </FieldDescription>
    </Field>
  )
}
```

### Input label with badge (`c-input-17`)

Target: `components/examples/c-input-17.tsx`

Input label with badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <div className="flex items-center gap-2">
        <FieldLabel htmlFor="api-key">API Key</FieldLabel>
        <Badge variant="success-light">New</Badge>
      </div>
      <Input id="api-key" placeholder="9f82a1c4b7e243d8a6c9f1e2a3b4c5d6" />
    </Field>
  )
}
```

### Input label with optional badge (`c-input-18`)

Target: `components/examples/c-input-18.tsx`

Input label with optional badge

```tsx
import { Badge } from "@/components/reui/badge"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <div className="flex items-center justify-between gap-2">
        <FieldLabel htmlFor="middle-name">Middle Name</FieldLabel>
        <Badge variant="warning-outline" size="sm">
          Optional
        </Badge>
      </div>
      <Input id="middle-name" placeholder="Alexander" />
    </Field>
  )
}
```

### Input label with link and visibility toggle (`c-input-19`)

Target: `components/examples/c-input-19.tsx`

Input label with link and visibility toggle

```tsx
"use client"

import { useState } from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => setIsVisible((prevState) => !prevState)

  return (
    <Field className="w-full max-w-xs">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="password-link">Password</FieldLabel>
        <a
          href="#"
          className="text-primary text-xs font-medium hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <div className="relative">
        <Input
          id="password-link"
          type={isVisible ? "text" : "password"}
          className="pe-9"
        />
        <button
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          onClick={toggleVisibility}
          type="button"
        >
          {isVisible ? (
            <IconPlaceholder
              lucide="EyeOffIcon"
              tabler="IconEyeOff"
              hugeicons="ViewOffSlashIcon"
              phosphor="EyeSlashIcon"
              remixicon="RiEyeOffLine"
              aria-hidden="true"
            />
          ) : (
            <IconPlaceholder
              lucide="EyeIcon"
              tabler="IconEye"
              hugeicons="ViewIcon"
              phosphor="EyeIcon"
              remixicon="RiEyeLine"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
    </Field>
  )
}
```

### Input with horizontal orientation (`c-input-20`)

Target: `components/examples/c-input-20.tsx`

Input with horizontal orientation

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field orientation="horizontal" className="w-full max-w-xs">
      <FieldLabel htmlFor="horizontal-name" className="w-24">
        Name
      </FieldLabel>
      <Input id="horizontal-name" placeholder="John Doe" />
    </Field>
  )
}
```

### Input with multiple error messages (`c-input-21`)

Target: `components/examples/c-input-21.tsx`

Input with multiple error messages

```tsx
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="security-code">Security Code</FieldLabel>
      <Input
        id="security-code"
        placeholder="Enter your security code"
        aria-invalid="true"
      />
      <FieldError className="mt-2 space-y-1.5 text-xs">
        <div className="flex items-center gap-1.5">
          <IconPlaceholder
            lucide="CircleAlertIcon"
            tabler="IconAlertCircle"
            hugeicons="AlertCircleIcon"
            phosphor="WarningCircleIcon"
            remixicon="RiErrorWarningLine"
            className="size-3.5"
          />
          <span>Code must be at least 12 characters long</span>
        </div>
        <div className="flex items-center gap-1.5">
          <IconPlaceholder
            lucide="CircleAlertIcon"
            tabler="IconAlertCircle"
            hugeicons="AlertCircleIcon"
            phosphor="WarningCircleIcon"
            remixicon="RiErrorWarningLine"
            className="size-3.5"
          />
          <span>Code must contain at least one uppercase letter</span>
        </div>
        <div className="flex items-center gap-1.5">
          <IconPlaceholder
            lucide="CircleAlertIcon"
            tabler="IconAlertCircle"
            hugeicons="AlertCircleIcon"
            phosphor="WarningCircleIcon"
            remixicon="RiErrorWarningLine"
            className="size-3.5"
          />
          <span>Code cannot include common words or patterns</span>
        </div>
      </FieldError>
    </Field>
  )
}
```

### Basic password strength with dynamic hint and icons (`c-input-22`)

Target: `components/examples/c-input-22.tsx`

Basic password strength with dynamic hint and icons

```tsx
"use client"

import { useId, useState } from "react"

import { cn } from "@/lib/utils"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const [password, setPassword] = useState("")

  const getStrength = (pass: string) => {
    const requirements = [
      { met: pass.length >= 8, text: "8+ characters" },
      { met: /[0-9]/.test(pass), text: "a number" },
      { met: /[!@#$%^&*]/.test(pass), text: "a special character" },
    ]
    const metCount = requirements.filter((r) => r.met).length
    return { requirements, metCount }
  }

  const { metCount } = getStrength(password)

  const getHint = () => {
    if (!password) {
      return "Use 8+ characters with a number and a special character."
    }
    if (metCount === 3) {
      return "Strong password. You're all set!"
    }
    if (metCount === 2) {
      return "Almost there! Add the missing requirement."
    }
    return "Weak password. Include 8+ characters, a number, and a special character."
  }

  const getStatus = () => {
    if (!password)
      return {
        color: "text-muted-foreground",
        icon: (
          <IconPlaceholder
            lucide="InfoIcon"
            tabler="IconInfoCircle"
            hugeicons="InformationCircleIcon"
            phosphor="InfoIcon"
            remixicon="RiInformationLine"
            className="size-3.5 shrink-0"
          />
        ),
      }
    if (metCount === 3)
      return {
        color: "text-emerald-500",
        icon: (
          <IconPlaceholder
            lucide="CircleCheckIcon"
            tabler="IconCircleCheck"
            hugeicons="CheckmarkCircle01Icon"
            phosphor="CheckCircleIcon"
            remixicon="RiCheckboxCircleLine"
            className="size-3.5 shrink-0"
          />
        ),
      }
    if (metCount === 2)
      return {
        color: "text-amber-500",
        icon: (
          <IconPlaceholder
            lucide="AlertTriangleIcon"
            tabler="IconAlertTriangle"
            hugeicons="Alert02Icon"
            phosphor="WarningIcon"
            remixicon="RiAlertLine"
            className="size-3.5 shrink-0"
          />
        ),
      }
    return {
      color: "text-destructive",
      icon: (
        <IconPlaceholder
          lucide="AlertTriangleIcon"
          tabler="IconAlertTriangle"
          hugeicons="Alert02Icon"
          phosphor="WarningIcon"
          remixicon="RiAlertLine"
          className="size-3.5 shrink-0"
        />
      ),
    }
  }

  const { color, icon: StatusIcon } = getStatus()

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor={id}>Password</FieldLabel>
      <Input
        id={id}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <div
        className={cn(
          "flex items-center gap-2 text-xs transition-colors duration-200",
          color
        )}
      >
        {StatusIcon}
        <p>{getHint()}</p>
      </div>
    </Field>
  )
}
```

### Advanced password strength indicator with progress (`c-input-23`)

Target: `components/examples/c-input-23.tsx`

Advanced password strength indicator with progress

```tsx
"use client"

import { useId, useMemo, useState } from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const [password, setPassword] = useState("")
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => setIsVisible((prevState) => !prevState)

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
      {
        regex: /[!@#$%^&*(),.?":{}|<>]/,
        text: "At least 1 special character",
      },
    ]

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }))
  }

  const strength = checkStrength(password)

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length
  }, [strength])

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border"
    if (score <= 1) return "bg-red-500"
    if (score <= 2) return "bg-orange-500"
    if (score <= 3) return "bg-amber-500"
    if (score <= 4) return "bg-green-500"
    return "bg-emerald-500"
  }

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password"
    if (score <= 2) return "Weak security"
    if (score <= 4) return "Medium security"
    return "Strong security"
  }

  return (
    <div className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor={id}>Secure Password</FieldLabel>
        <div className="relative">
          <Input
            aria-describedby={`${id}-description`}
            className="pe-9"
            id={id}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            type={isVisible ? "text" : "password"}
            value={password}
          />
          <button
            aria-controls="password"
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            onClick={toggleVisibility}
            type="button"
          >
            {isVisible ? (
              <IconPlaceholder
                lucide="EyeOffIcon"
                tabler="IconEyeOff"
                hugeicons="ViewOffSlashIcon"
                phosphor="EyeSlashIcon"
                remixicon="RiEyeOffLine"
                aria-hidden="true"
              />
            ) : (
              <IconPlaceholder
                lucide="EyeIcon"
                tabler="IconEye"
                hugeicons="ViewIcon"
                phosphor="EyeIcon"
                remixicon="RiEyeLine"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </Field>

      {/* Segmented Progress Bar */}
      <div
        aria-label="Password strength"
        aria-valuemax={5}
        aria-valuemin={0}
        aria-valuenow={strengthScore}
        className="mt-3 mb-4 flex gap-1"
        role="progressbar"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
              i < strengthScore ? getStrengthColor(strengthScore) : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p
          className="text-foreground text-sm font-medium"
          id={`${id}-description`}
        >
          {getStrengthText(strengthScore)}
        </p>
        <span className="text-muted-foreground text-xs">
          {strengthScore}/5 requirements met
        </span>
      </div>

      <ul aria-label="Password requirements" className="space-y-1.5">
        {strength.map((req) => (
          <li className="flex items-center gap-1" key={req.text}>
            {req.met ? (
              <IconPlaceholder
                lucide="CheckIcon"
                tabler="IconCheck"
                hugeicons="Tick02Icon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                className="size-3.5 text-emerald-500"
                aria-hidden="true"
              />
            ) : (
              <IconPlaceholder
                lucide="XIcon"
                tabler="IconX"
                hugeicons="MultiplicationSignIcon"
                phosphor="XIcon"
                remixicon="RiCloseLine"
                className="text-muted-foreground/60 size-3.5"
                aria-hidden="true"
              />
            )}
            <span
              className={`text-xs transition-colors ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}
            >
              {req.text}
              <span className="sr-only">
                {req.met ? " - Requirement met" : " - Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

### Input with pulsed background animation (`c-input-24`)

Target: `components/examples/c-input-24.tsx`

Input with pulsed background animation

```tsx
"use client"

import { useState } from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="pulsed-input">Pulsed Background</FieldLabel>
      <div className="relative">
        <div
          className={`bg-primary/20 pointer-events-none absolute inset-0 rounded-md transition-opacity duration-300 ${
            isFocused ? "opacity-0" : "animate-pulse"
          }`}
        />
        <Input
          id="pulsed-input"
          placeholder="Animation stops on focus..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="focus-visible:bg-background relative bg-transparent shadow-none transition-colors duration-300"
        />
      </div>
    </Field>
  )
}
```

### Input with custom focus ring (`c-input-25`)

Target: `components/examples/c-input-25.tsx`

Input with custom focus ring

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="custom-focus">Custom Focus</FieldLabel>
      <Input
        id="custom-focus"
        className="focus-visible:border-emerald-500 focus-visible:ring-emerald-500/50"
        placeholder="Green focus ring"
      />
    </Field>
  )
}
```

### Input with subtle background (`c-input-26`)

Target: `components/examples/c-input-26.tsx`

Input with subtle background

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="subtle-bg">Subtle Background</FieldLabel>
      <Input
        id="subtle-bg"
        className="bg-muted focus-visible:bg-muted hover:bg-muted transition-colors duration-300"
        placeholder="Enter text..."
      />
    </Field>
  )
}
```

### Input with bottom border only (`c-input-27`)

Target: `components/examples/c-input-27.tsx`

Input with bottom border only

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="bottom-border">Bottom Border Only</FieldLabel>
      <Input
        id="bottom-border"
        className="focus-visible:border-primary rounded-none border-x-0 border-t-0 border-b-2 px-0 shadow-none focus-visible:ring-0"
        placeholder="Type here..."
      />
    </Field>
  )
}
```

### Color input (`c-input-28`)

Target: `components/examples/c-input-28.tsx`

Color input

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="color-picker">Theme Color</FieldLabel>
      <Input
        id="color-picker"
        type="color"
        className="h-10 w-20 cursor-pointer p-1"
        defaultValue="#3b82f6"
      />
    </Field>
  )
}
```

### Range input with value indicator (`c-input-29`)

Target: `components/examples/c-input-29.tsx`

Range input with value indicator

```tsx
"use client"

import { useState } from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  const [value, setValue] = useState(50)

  return (
    <Field className="w-full max-w-xs">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="range-slider">Volume</FieldLabel>
        <span className="text-muted-foreground text-xs font-medium">
          {value}
        </span>
      </div>
      <Input
        id="range-slider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="bg-muted accent-primary h-2 cursor-pointer appearance-none"
      />
    </Field>
  )
}
```

### Pill-shaped input (`c-input-30`)

Target: `components/examples/c-input-30.tsx`

Pill-shaped input

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="pill-input">Search</FieldLabel>
      <Input
        id="pill-input"
        className="rounded-full px-4"
        placeholder="Search everything..."
      />
    </Field>
  )
}
```

### Minimal input without borders or background (`c-input-31`)

Target: `components/examples/c-input-31.tsx`

Minimal input without borders or background

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="minimal-input">Invisible Input</FieldLabel>
      <Input
        id="minimal-input"
        placeholder="Type here..."
        className="border-none bg-transparent p-0 shadow-none focus-visible:ring-0"
      />
    </Field>
  )
}
```
