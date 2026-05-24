# Accordion (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

11 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-accordion-1` | A basic single-expand accordion | registry:block | A basic single-expand accordion |
| `c-accordion-2` | Accordion with plus/minus indicators | registry:block | Accordion with plus/minus indicators |
| `c-accordion-3` | Accordion with borders and rounded corners | registry:block | Accordion with borders and rounded corners |
| `c-accordion-4` | Accordion embedded within a Card | registry:block | Accordion embedded within a Card |
| `c-accordion-5` | Accordion with disabled items and highlighted state | registry:block | Accordion with disabled items and highlighted state |
| `c-accordion-6` | Advanced accordion with custom icons and badges | registry:block | Advanced accordion with custom icons and badges |
| `c-accordion-7` | Accordion items integrated within Frame and FramePanel | registry:block | Accordion items integrated within Frame and FramePanel |
| `c-accordion-8` | Nested accordion example with bordered items | registry:block | Nested accordion example with bordered items |
| `c-accordion-9` | User list accordion with avatars and role indicators | registry:block | User list accordion with avatars and role indicators |
| `c-accordion-10` | Accordion with rotating arrow indicator | registry:block | Accordion with rotating arrow indicator |
| `c-accordion-11` | Accordion pattern for onboarding or setup steps with icons, badges, and QR codes | registry:block | Accordion pattern for onboarding or setup steps with icons, badges, and QR codes |

## Source

### A basic single-expand accordion (`c-accordion-1`)

Target: `components/examples/c-accordion-1.tsx`

A basic single-expand accordion

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "Is it accessible ?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    trigger: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    value: "item-3",
    trigger: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion type="single" collapsible defaultValue="item-1">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

### Accordion with plus/minus indicators (`c-accordion-2`)

Target: `components/examples/c-accordion-2.tsx`

Accordion with plus/minus indicators

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const items = [
  {
    value: "security",
    trigger: "Data Security",
    content:
      "We use industry-standard AES-256 encryption to protect your sensitive information at rest and in transit.",
  },
  {
    value: "integration",
    trigger: "API Integration",
    content:
      "Seamlessly connect with your favorite tools using our robust REST API and pre-built connectors.",
  },
  {
    value: "collaboration",
    trigger: "Team Collaboration",
    content:
      "Invite team members, assign roles, and work together in real-time on shared projects and documents.",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion type="multiple" defaultValue={["security"]}>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="hover:no-underline *:data-[slot=accordion-trigger-icon]:hidden">
              <span>{item.trigger}</span>
              <IconPlaceholder
                lucide="PlusIcon"
                tabler="IconPlus"
                hugeicons="PlusSignIcon"
                phosphor="PlusIcon"
                remixicon="RiAddLine"
                className="text-muted-foreground ml-auto size-3.5 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:hidden"
              />
              <IconPlaceholder
                lucide="MinusIcon"
                tabler="IconMinus"
                hugeicons="MinusSignIcon"
                phosphor="MinusIcon"
                remixicon="RiSubtractLine"
                className="text-muted-foreground ml-auto hidden size-3.5 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:inline"
              />
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

### Accordion with borders and rounded corners (`c-accordion-3`)

Target: `components/examples/c-accordion-3.tsx`

Accordion with borders and rounded corners

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members. There are no hidden fees or setup costs.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols. We also offer optional two-factor authentication and single sign-on for enterprise customers.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content: (
      <>
        <p>
          We integrate with 500+ popular tools including Slack, Zapier,
          Salesforce, HubSpot, and more. You can also build custom integrations
          using our REST API and webhooks.{" "}
        </p>
        <p>
          Our API documentation includes code examples in 10+ programming
          languages.
        </p>
      </>
    ),
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion
        type="single"
        collapsible
        defaultValue="billing"
        className="space-y-2 border-0"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-border rounded-lg border px-3 not-last:border-b"
          >
            <AccordionTrigger className="items-center py-3 font-medium hover:no-underline">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-0 pb-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

### Accordion embedded within a Card (`c-accordion-4`)

Target: `components/examples/c-accordion-4.tsx`

Accordion embedded within a Card

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const items = [
  {
    value: "plans",
    trigger: "What subscription plans do you offer?",
    content: (
      <>
        <p>
          <a href="#" className="text-primary hover:underline">
            Annual billing is available
          </a>{" "}
          with a 20% discount. All plans include a 14-day free trial with no
          credit card required.
        </p>
        <Button size="sm" className="mt-4">
          View plans
          <IconPlaceholder
            lucide="ArrowUpRightIcon"
            tabler="IconArrowUpRight"
            hugeicons="ArrowUpRight01Icon"
            phosphor="ArrowUpRightIcon"
            remixicon="RiArrowRightUpLine"
            className="size-4"
          />
        </Button>
      </>
    ),
  },
  {
    value: "billing",
    trigger: "How does billing work?",
    content: (
      <>
        <p>
          Billing occurs automatically at the start of each billing cycle. We
          accept all major credit cards, PayPal, and ACH transfers for
          enterprise customers.
        </p>
      </>
    ),
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content: (
      <>
        <p>
          We take security seriously. All data is encrypted at rest using
          AES-256 and in transit via TLS 1.3. We perform regular third-party
          security audits and maintain SOC 2 Type II compliance.
        </p>
        <p>
          You can also enable multi-factor authentication (MFA) and single
          sign-on (SSO) for additional security.
        </p>
      </>
    ),
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle>Subscription & Billing</CardTitle>
          <CardDescription>
            Common questions about your account, plans, and payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" defaultValue={["plans"]}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Accordion with disabled items and highlighted state (`c-accordion-5`)

Target: `components/examples/c-accordion-5.tsx`

Accordion with disabled items and highlighted state

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "Can I access my account history?",
    content:
      "Yes, you can view your complete account history including all transactions, plan changes, and support tickets in the Account History section of your dashboard.",
    disabled: false,
  },
  {
    value: "item-2",
    trigger: "Premium feature information (Locked)",
    content:
      "This section contains information about premium features. Upgrade your plan to access this content.",
    disabled: true,
  },
  {
    value: "item-3",
    trigger: "How do I update my email address?",
    content:
      "You can update your email address in your account settings. You'll receive a verification email at your new address to confirm the change.",
    disabled: false,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="border-border rounded-lg overflow-hidden border"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className="data-[state=open]:bg-muted/50 **:data-[slot=accordion-content]:p-0!"
          >
            <AccordionTrigger className="px-4 py-4 hover:no-underline">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="px-4! pt-0 pb-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

### Advanced accordion with custom icons and badges (`c-accordion-6`)

Target: `components/examples/c-accordion-6.tsx`

Advanced accordion with custom icons and badges

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const items = [
  {
    value: "account",
    icon: (
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
        className="text-muted-foreground size-4"
      />
    ),
    trigger: "Account Settings",
    badge: "New",
    content:
      "Manage your account preferences, security settings, and personal information. You can also configure two-factor authentication here.",
  },
  {
    value: "privacy",
    icon: (
      <IconPlaceholder
        lucide="LockIcon"
        tabler="IconLock"
        hugeicons="SquareLock01Icon"
        phosphor="LockSimpleIcon"
        remixicon="RiLockLine"
        className="text-muted-foreground size-4"
      />
    ),
    trigger: "Privacy & Security",
    content:
      "Control who can see your profile and what data we collect. View our latest security audits and transparency reports.",
  },
  {
    value: "support",
    icon: (
      <IconPlaceholder
        lucide="HelpCircleIcon"
        tabler="IconHelpCircle"
        hugeicons="HelpCircleIcon"
        phosphor="QuestionIcon"
        remixicon="RiQuestionLine"
        className="text-muted-foreground size-4"
      />
    ),
    trigger: "Help & Support",
    content:
      "Access our help center, community forums, and contact support. We're here to help you 24/7.",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion
        type="single"
        collapsible
        defaultValue="account"
        className="space-y-3 border-0"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-border bg-card rounded-lg border px-2 **:data-[slot=accordion-content]:p-0!"
          >
            <AccordionTrigger className="items-center px-1 py-3 font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="bg-muted rounded-lg flex size-8 items-center justify-center">
                  {item.icon}
                </div>
                <span>{item.trigger}</span>
                {item.badge && (
                  <Badge variant="success-light">{item.badge}</Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-2 pt-0 pb-4 leading-relaxed">
              <div className="pl-11">{item.content}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

### Accordion items integrated within Frame and FramePanel (`c-accordion-7`)

Target: `components/examples/c-accordion-7.tsx`

Accordion items integrated within Frame and FramePanel

```tsx
import { Badge } from "@/components/reui/badge"
import { Frame, FramePanel } from "@/components/reui/frame"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const items = [
  {
    value: "account",
    icon: (
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
        className="text-muted-foreground size-4"
      />
    ),
    trigger: "Account Settings",
    badge: "New",
    content:
      "Manage your account preferences, security settings, and personal information. You can also configure two-factor authentication here.",
  },
  {
    value: "privacy",
    icon: (
      <IconPlaceholder
        lucide="LockIcon"
        tabler="IconLock"
        hugeicons="SquareLock01Icon"
        phosphor="LockSimpleIcon"
        remixicon="RiLockLine"
        className="text-muted-foreground size-4"
      />
    ),
    trigger: "Privacy & Security",
    content:
      "Control who can see your profile and what data we collect. View our latest security audits and transparency reports.",
  },
  {
    value: "support",
    icon: (
      <IconPlaceholder
        lucide="HelpCircleIcon"
        tabler="IconHelpCircle"
        hugeicons="HelpCircleIcon"
        phosphor="QuestionIcon"
        remixicon="RiQuestionLine"
        className="text-muted-foreground size-4"
      />
    ),
    trigger: "Help & Support",
    content:
      "Access our help center, community forums, and contact support. We're here to help you 24/7.",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame stacked spacing="sm">
        {items.map((item) => (
          <FramePanel key={item.value}>
            <Accordion
              type="single"
              collapsible
              defaultValue={items[0].value}
              className="border-none"
            >
              <AccordionItem
                value={item.value}
                className="border-none bg-transparent **:data-[slot=accordion-content]:p-0!"
              >
                <AccordionTrigger className="items-center px-1 py-1 font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted rounded-lg flex size-8 items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.trigger}</span>
                    {item.badge && (
                      <Badge variant="success-light" className="ms-1">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground p-0 ps-1!">
                  <div className="ps-11! pe-2">{item.content}</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FramePanel>
        ))}
      </Frame>
    </div>
  )
}
```

### Nested accordion example with bordered items (`c-accordion-8`)

Target: `components/examples/c-accordion-8.tsx`

Nested accordion example with bordered items

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const nestedItems = [
  {
    value: "sub-item-1",
    trigger: "Technical Specifications",
    content:
      "Detailed technical specs including dimensions, weight, and power requirements.",
  },
  {
    value: "sub-item-2",
    trigger: "Compatibility",
    content:
      "List of supported devices and operating systems for this product.",
  },
]

const mainItems = [
  {
    value: "product-info",
    trigger: "Product Overview",
    content:
      "This product is designed for high-performance enterprise environments requiring maximum reliability.",
  },
  {
    value: "details",
    trigger: "Additional Details",
    isNested: true,
  },
  {
    value: "shipping",
    trigger: "Shipping & Returns",
    content:
      "Free standard shipping on orders over $500. 30-day return policy applies.",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion
        type="single"
        collapsible
        defaultValue="details"
        className="space-y-2 border-none"
      >
        {mainItems.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-border rounded-lg border bg-transparent px-4"
          >
            <AccordionTrigger className="items-center py-3 font-medium hover:no-underline">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground h-auto">
              {item.isNested ? (
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="sub-item-1"
                  className="space-y-2 border-none"
                >
                  {nestedItems.map((subItem) => (
                    <AccordionItem
                      key={subItem.value}
                      value={subItem.value}
                      className="border-border rounded-lg border bg-transparent px-3"
                    >
                      <AccordionTrigger className="text-foreground items-center py-3 font-medium hover:no-underline">
                        {subItem.trigger}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm">
                        {subItem.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                item.content
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

### User list accordion with avatars and role indicators (`c-accordion-9`)

Target: `components/examples/c-accordion-9.tsx`

User list accordion with avatars and role indicators

```tsx
import { Badge } from "@/components/reui/badge"
import { Frame, FramePanel } from "@/components/reui/frame"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const users = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@apple.com",
    role: "Admin",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    initials: "AJ",
    content:
      "Alex has full administrative access to the platform, including billing management, user provisioning, and security configurations.",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@openai.com",
    role: "Viewer",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    initials: "SC",
    content:
      "Sarah has read-only access to projects and reports. She cannot modify settings or invite new members.",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    email: "michael@meta.com",
    role: "Editor",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    initials: "MR",
    content:
      "Michael is part of the design team and has permissions to edit projects, manage assets, and update design system components.",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame stacked spacing="sm">
        {users.map((user) => (
          <FramePanel key={user.id}>
            <Accordion
              type="single"
              collapsible
              defaultValue="1"
              className="border-none"
            >
              <AccordionItem
                value={user.id}
                className="border-none bg-transparent p-0 **:data-[slot=accordion-content]:p-0!"
              >
                <AccordionTrigger className="items-center px-1 py-1 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-8 border">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xs">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="inline-flex items-center gap-2">
                      <span className="text-foreground/90 font-semibold tracking-tight">
                        {user.name}
                      </span>
                      <Badge
                        variant={
                          user.role === "Admin" ? "success-light" : "secondary"
                        }
                        size="sm"
                      >
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground py-0 pl-11">
                  {user.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FramePanel>
        ))}
      </Frame>
    </div>
  )
}
```

### Accordion with rotating arrow indicator (`c-accordion-10`)

Target: `components/examples/c-accordion-10.tsx`

Accordion with rotating arrow indicator

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const items = [
  {
    value: "item-1",
    trigger: "Can I use this for my project?",
    content:
      "Yes, you can use ReUI for any of your personal or commercial projects. The library is distributed under the MIT license.",
  },
  {
    value: "item-2",
    trigger: "Is there a Figma file available?",
    content:
      "We are currently working on a comprehensive Figma design system that will be released soon to all ReUI users.",
  },
  {
    value: "item-3",
    trigger: "How do I contribute to ReUI?",
    content:
      "You can contribute by reporting bugs, suggesting features, or submitting pull requests on our GitHub repository.",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion type="single" collapsible defaultValue="item-1">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="flex-row-reverse items-center justify-end gap-3 py-3 hover:no-underline *:data-[slot=accordion-trigger-icon]:hidden">
              <span className="text-foreground/90 font-medium">
                {item.trigger}
              </span>
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-90"
              />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ps-7 leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

### Accordion pattern for onboarding or setup steps with icons, badges, and QR codes (`c-accordion-11`)

Target: `components/examples/c-accordion-11.tsx`

Accordion pattern for onboarding or setup steps with icons, badges, and QR codes

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Accordion
        type="single"
        collapsible
        defaultValue="pos-app"
        className="border-border rounded-lg overflow-hidden border"
      >
        {/* Step 1: Completed */}
        <AccordionItem
          value="add-products"
          className="bg-transparent px-4"
        >
          <AccordionTrigger className="items-center py-4 font-semibold hover:no-underline">
            <div className="flex w-full items-center justify-between pr-4">
              <div className="flex items-center justify-center gap-3">
                <div className="flex size-5 items-center justify-center">
                  <IconPlaceholder
                    lucide="CircleCheckIcon"
                    tabler="IconCircleCheck"
                    hugeicons="CheckmarkCircle01Icon"
                    phosphor="CheckCircleIcon"
                    remixicon="RiCheckboxCircleLine"
                    className="fill-success text-background size-5"
                  />
                </div>
                <span className="text-sm font-medium">Add products</span>
              </div>
              <Badge variant="success-light">Ready</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pr-0 pb-4 pl-8 leading-relaxed">
            Your products have been successfully added and are ready for sale.
          </AccordionContent>
        </AccordionItem>

        {/* Step 2: Expanded/In Progress */}
        <AccordionItem
          value="pos-app"
          className="bg-transparent px-4"
        >
          <AccordionTrigger className="items-center py-4 font-semibold hover:no-underline">
            <div className="flex w-full items-center justify-between pr-4">
              <div className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-950">
                  <div className="size-2 rounded-full bg-yellow-500" />
                </div>
                <span className="text-foreground text-sm font-medium">
                  Get the point of sale application
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pl-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex-1 space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scan the QR code or send yourself the link to get the app. The
                  mobile app is where you&apos;ll manage orders, track
                  inventory, and view analytics on the go.
                </p>
                <ButtonGroup>
                  <Input placeholder="james@alignui.com" />
                  <Button variant="outline" aria-label="Send link">
                    Send link
                  </Button>
                </ButtonGroup>
              </div>
              <div className="bg-muted/30 border-border rounded-lg flex shrink-0 items-center justify-center border p-3">
                <IconPlaceholder
                  lucide="QrCodeIcon"
                  tabler="IconQrcode"
                  hugeicons="QrCodeIcon"
                  phosphor="QrCodeIcon"
                  remixicon="RiQrCodeLine"
                  className="size-20"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Step 3: Pending */}
        <AccordionItem
          value="price-stock"
          className="bg-transparent px-4"
        >
          <AccordionTrigger className="items-center py-4 font-semibold hover:no-underline">
            <div className="flex w-full items-center justify-between pr-4">
              <div className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center">
                  <Spinner className="opacity-60" />
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  Product price & stock
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pl-8 text-sm leading-relaxed">
            Configure your product pricing and manage stock levels across all
            locations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
```
