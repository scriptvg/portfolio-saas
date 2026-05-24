# Field (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

11 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-field-1` | Fields with input groups | registry:block | Fields with input groups |
| `c-field-2` | Field with input and textarea | registry:block | Field with input and textarea |
| `c-field-3` | Field with select control | registry:block | Field with select control |
| `c-field-4` | Field with radio groups and checkboxes | registry:block | Field with radio groups and checkboxes |
| `c-field-5` | Filed with slider and switch | registry:block | Filed with slider and switch |
| `c-field-6` | Field with OTP input | registry:block | Field with OTP input |
| `c-field-7` | Settings form with validation | registry:block | Settings form with validation |
| `c-field-8` | Permission settings with checkboxes | registry:block | Permission settings with checkboxes |
| `c-field-9` | Responsive field layout | registry:block | Responsive field layout |
| `c-field-10` | Notification preferences form | registry:block | Notification preferences form |
| `c-field-11` | Form with validation errors | registry:block | Form with validation errors |

## Source

### Fields with input groups (`c-field-1`)

Target: `components/examples/c-field-1.tsx`

Fields with input groups

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="profile-name">
            Full Name <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="profile-name"
            placeholder="Enter your full name"
            required
          />
          <FieldDescription>
            This name will be displayed on your public profile.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="profile-username">Username</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="profile-username" placeholder="username" />
          </InputGroup>
          <FieldDescription className="text-success">
            Username is available.
          </FieldDescription>
        </Field>
        <Field data-invalid>
          <FieldLabel htmlFor="profile-email">Email Address</FieldLabel>
          <InputGroup>
            <InputGroupInput id="profile-email" placeholder="email" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@gmail.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            Please enter a valid email address.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  )
}
```

### Field with input and textarea (`c-field-2`)

Target: `components/examples/c-field-2.tsx`

Field with input and textarea

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="ticket-subject">Subject</FieldLabel>
          <Input id="ticket-subject" placeholder="Briefly describe the issue" />
          <FieldDescription>
            Use a clear and descriptive subject line.
          </FieldDescription>
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="ticket-message">Message</FieldLabel>
            <span className="text-muted-foreground text-xs">0/500</span>
          </div>
          <Textarea
            id="ticket-message"
            placeholder="Tell us more about your problem…"
            className="min-h-[120px]"
          />
          <FieldDescription>
            Include any relevant details to help us resolve your issue.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  )
}
```

### Field with select control (`c-field-3`)

Target: `components/examples/c-field-3.tsx`

Field with select control

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="plan-selection">Subscription Plan</FieldLabel>
          <Select defaultValue="pro">
            <SelectTrigger id="plan-selection">
              <SelectValue placeholder="Select a plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free - Basic features</SelectItem>
              <SelectItem value="pro">Pro - Advanced tools</SelectItem>
              <SelectItem value="enterprise">
                Enterprise - Custom solutions
              </SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>
            Choose the plan that best fits your needs.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="billing-cycle">Billing Cycle</FieldLabel>
          <Select defaultValue="yearly">
            <SelectTrigger id="billing-cycle">
              <SelectValue placeholder="Select billing cycle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly billing</SelectItem>
              <SelectItem value="yearly">Yearly billing (Save 20%)</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>
            Billing cycles can be changed at any time.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  )
}
```

### Field with radio groups and checkboxes (`c-field-4`)

Target: `components/examples/c-field-4.tsx`

Field with radio groups and checkboxes

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">Email Notifications</FieldLegend>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <Checkbox id="notify-updates" defaultChecked />
              <FieldContent>
                <FieldTitle>Product updates</FieldTitle>
                <FieldDescription>
                  Receive emails about new features and improvements.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="notify-security" defaultChecked disabled />
              <FieldContent>
                <FieldTitle>Security alerts</FieldTitle>
                <FieldDescription>
                  Critical security notifications cannot be disabled.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend variant="label">Profile Privacy</FieldLegend>
          <RadioGroup defaultValue="public">
            <FieldGroup className="gap-2">
              <Field orientation="horizontal">
                <RadioGroupItem value="public" id="privacy-public" />
                <FieldLabel htmlFor="privacy-public" className="font-normal">
                  Public - visible to everyone
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="private" id="privacy-private" />
                <FieldLabel htmlFor="privacy-private" className="font-normal">
                  Private - only visible to you
                </FieldLabel>
              </Field>
            </FieldGroup>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
```

### Filed with slider and switch (`c-field-5`)

Target: `components/examples/c-field-5.tsx`

Filed with slider and switch

```tsx
"use client"

import { useState } from "react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  const [cpuLimit, setCpuLimit] = useState([75])

  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>High Performance Mode</FieldTitle>
            <FieldDescription>
              Prioritize speed over battery life for intensive tasks.
            </FieldDescription>
          </FieldContent>
          <Switch id="high-performance" defaultChecked />
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="cpu-allocation">CPU Allocation</FieldLabel>
            <span className="text-muted-foreground text-xs font-medium">
              {cpuLimit[0]}%
            </span>
          </div>
          <Slider
            id="cpu-allocation"
            value={cpuLimit}
            onValueChange={(value) => setCpuLimit(value as number[])}
            max={100}
            step={5}
          />
          <FieldDescription>
            Limit the maximum CPU resources used by the application.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  )
}
```

### Field with OTP input (`c-field-6`)

Target: `components/examples/c-field-6.tsx`

Field with OTP input

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="verification-method">
            Verification Method
          </FieldLabel>
          <NativeSelect id="verification-method" defaultValue="email">
            <NativeSelectOption value="email">Email Address</NativeSelectOption>
            <NativeSelectOption value="sms">
              SMS Text Message
            </NativeSelectOption>
            <NativeSelectOption value="app">
              Authenticator App
            </NativeSelectOption>
          </NativeSelect>
          <FieldDescription>
            Choose how you want to receive your security code.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="otp-code">Security Code</FieldLabel>
          <InputOTP id="otp-code" maxLength={6}>
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
          <FieldDescription>
            Enter the 6-digit code to verify your identity.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  )
}
```

### Settings form with validation (`c-field-7`)

Target: `components/examples/c-field-7.tsx`

Settings form with validation

```tsx
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="settings-name">
            Display Name <span className="text-destructive">*</span>
          </FieldLabel>
          <Input id="settings-name" defaultValue="Alex Johnson" />
          <FieldDescription>This is your public display name.</FieldDescription>
        </Field>
        <Field data-invalid>
          <FieldLabel htmlFor="settings-slug">URL Slug</FieldLabel>
          <Input id="settings-slug" defaultValue="alex johnson" />
          <FieldError>
            Slug can only contain lowercase letters, numbers, and hyphens.
          </FieldError>
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="settings-bio">Bio</FieldLabel>
            <span className="text-muted-foreground text-xs">24/160</span>
          </div>
          <Textarea
            id="settings-bio"
            defaultValue="Software engineer & open source contributor."
            className="min-h-[80px]"
          />
          <FieldDescription>
            Brief description for your profile.
          </FieldDescription>
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Email Notifications</FieldTitle>
            <FieldDescription>
              Receive emails about account activity.
            </FieldDescription>
          </FieldContent>
          <Switch id="settings-email-notif" defaultChecked />
        </Field>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Marketing Emails</FieldTitle>
            <FieldDescription>
              Receive emails about new features and tips.
            </FieldDescription>
          </FieldContent>
          <Switch id="settings-marketing" />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="settings-terms" />
          <FieldContent>
            <FieldTitle>Terms of Service</FieldTitle>
            <FieldDescription>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Button className="w-full">Save Changes</Button>
      </FieldGroup>
    </div>
  )
}
```

### Permission settings with checkboxes (`c-field-8`)

Target: `components/examples/c-field-8.tsx`

Permission settings with checkboxes

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">Access Permissions</FieldLegend>
          <FieldDescription>
            Configure what this role can access.
          </FieldDescription>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <Checkbox id="perm-read" defaultChecked />
              <FieldContent>
                <FieldTitle>Read</FieldTitle>
                <FieldDescription>
                  View resources and data. Cannot make changes.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="perm-write" defaultChecked />
              <FieldContent>
                <FieldTitle>Write</FieldTitle>
                <FieldDescription>
                  Create and edit resources. Requires read access.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="perm-delete" />
              <FieldContent>
                <FieldTitle>Delete</FieldTitle>
                <FieldDescription>
                  Permanently remove resources. This action is irreversible.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="perm-admin" disabled />
              <FieldContent>
                <FieldTitle>Admin</FieldTitle>
                <FieldDescription>
                  Full access to all settings. Only available to owners.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
```

### Responsive field layout (`c-field-9`)

Target: `components/examples/c-field-9.tsx`

Responsive field layout

```tsx
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
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
    <div className="mx-auto w-full max-w-lg">
      <FieldGroup>
        <Field orientation="responsive">
          <FieldLabel htmlFor="resp-first">First Name</FieldLabel>
          <Input id="resp-first" placeholder="First name" />
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="resp-last">Last Name</FieldLabel>
          <Input id="resp-last" placeholder="Last name" />
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="resp-email">Email</FieldLabel>
          <Input id="resp-email" type="email" placeholder="you@example.com" />
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="resp-role">Role</FieldLabel>
          <Select defaultValue="member">
            <SelectTrigger id="resp-role">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <FieldSeparator />
        <FieldDescription>
          The invited member will receive an email with a link to join.
        </FieldDescription>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Send Invite</Button>
        </div>
      </FieldGroup>
    </div>
  )
}
```

### Notification preferences form (`c-field-10`)

Target: `components/examples/c-field-10.tsx`

Notification preferences form

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">Notification Channels</FieldLegend>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Push Notifications</FieldTitle>
                <FieldDescription>
                  Alerts sent to your device in real time.
                </FieldDescription>
              </FieldContent>
              <Switch id="notif-push" defaultChecked />
            </Field>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Email Digest</FieldTitle>
                <FieldDescription>
                  A daily summary of activity sent to your inbox.
                </FieldDescription>
              </FieldContent>
              <Switch id="notif-email" defaultChecked />
            </Field>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>SMS Alerts</FieldTitle>
                <FieldDescription>
                  Text messages for critical notifications only.
                </FieldDescription>
              </FieldContent>
              <Switch id="notif-sms" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend variant="label">Notify me about</FieldLegend>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <Checkbox id="notif-comments" defaultChecked />
              <FieldContent>
                <FieldTitle>Comments</FieldTitle>
                <FieldDescription>
                  When someone comments on your posts.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="notif-mentions" defaultChecked />
              <FieldContent>
                <FieldTitle>Mentions</FieldTitle>
                <FieldDescription>
                  When someone mentions you in a conversation.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="notif-updates" />
              <FieldContent>
                <FieldTitle>Product Updates</FieldTitle>
                <FieldDescription>
                  News about new features and improvements.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
```

### Form with validation errors (`c-field-11`)

Target: `components/examples/c-field-11.tsx`

Form with validation errors

```tsx
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <FieldGroup>
        <Field data-invalid>
          <FieldLabel htmlFor="val-email">
            Email <span className="text-destructive">*</span>
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <IconPlaceholder
                lucide="MailIcon"
                tabler="IconMail"
                hugeicons="MailIcon"
                phosphor="EnvelopeIcon"
                remixicon="RiMailLine"
                aria-hidden="true"
              />
            </InputGroupAddon>
            <InputGroupInput
              id="val-email"
              type="email"
              defaultValue="invalid-email"
              placeholder="you@example.com"
            />
          </InputGroup>
          <FieldError>Please enter a valid email address.</FieldError>
        </Field>
        <Field data-invalid>
          <FieldLabel htmlFor="val-password">
            Password <span className="text-destructive">*</span>
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <IconPlaceholder
                lucide="LockIcon"
                tabler="IconLock"
                hugeicons="SquareLock01Icon"
                phosphor="LockSimpleIcon"
                remixicon="RiLockLine"
                aria-hidden="true"
              />
            </InputGroupAddon>
            <InputGroupInput
              id="val-password"
              type="password"
              defaultValue="short"
              placeholder="Enter password"
            />
          </InputGroup>
          <FieldError
            errors={[
              { message: "Must be at least 8 characters." },
              { message: "Must contain at least one number." },
            ]}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="val-confirm">Confirm Password</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <IconPlaceholder
                lucide="LockIcon"
                tabler="IconLock"
                hugeicons="SquareLock01Icon"
                phosphor="LockSimpleIcon"
                remixicon="RiLockLine"
                aria-hidden="true"
              />
            </InputGroupAddon>
            <InputGroupInput
              id="val-confirm"
              type="password"
              placeholder="Repeat password"
            />
          </InputGroup>
          <FieldDescription>
            Re-enter your password to confirm.
          </FieldDescription>
        </Field>
        <Button className="w-full">Create Account</Button>
      </FieldGroup>
    </div>
  )
}
```
