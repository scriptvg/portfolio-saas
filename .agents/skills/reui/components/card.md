# Card (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

18 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-card-1` | Basic card | registry:block | Basic card |
| `c-card-2` | Card header with border | registry:block | Card header with border |
| `c-card-3` | Card with border separation | registry:block | Card with border separation |
| `c-card-4` | Card with header and footer | registry:block | Card with header and footer |
| `c-card-5` | Card with link | registry:block | Card with link |
| `c-card-6` | Card with dropdown menu | registry:block | Card with dropdown menu |
| `c-card-7` | Card with image | registry:block | Card with image |
| `c-card-8` | Card with image scale hover effect | registry:block | Card with image scale hover effect |
| `c-card-9` | Card with full image | registry:block | Card with full image |
| `c-card-10` | Full card with image and shadow fade effect | registry:block | Full card with image and shadow fade effect |
| `c-card-11` | Card with stacked depth effect | registry:block | Card with stacked depth effect |
| `c-card-12` | Advanced clean login form card | registry:block | Advanced clean login form card |
| `c-card-13` | Expandable billing usage card | registry:block | Expandable billing usage card |
| `c-card-14` | Deployment status summary card | registry:block | Deployment status summary card |
| `c-card-15` | Stat card with trend and overflow menu | registry:block | Stat card with trend and overflow menu |
| `c-card-16` | Card with header badge and actions | registry:block | Card with header badge and actions |
| `c-card-17` | Card with icon, title and link | registry:block | Card with icon, title and link |
| `c-card-18` | Card with header label and link | registry:block | Card with header label and link |

## Source

### Basic card (`c-card-1`)

Target: `components/examples/c-card-1.tsx`

Basic card

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>
          This card uses the default size variant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The card component supports a size prop that defaults to
          &quot;default&quot; for standard spacing and sizing.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Card header with border (`c-card-2`)

Target: `components/examples/c-card-2.tsx`

Card header with border

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="border-b">
        <CardTitle>Header with Border</CardTitle>
        <CardDescription>
          This is a card with a header that has a bottom border.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The header has a border-b class applied, creating a visual separation
          between the header and content sections.
        </p>
      </CardContent>
    </Card>
  )
}
```

### Card with border separation (`c-card-3`)

Target: `components/examples/c-card-3.tsx`

Card with border separation

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs gap-0 p-0">
      <CardHeader className="flex items-center justify-between px-4 py-2">
        <CardTitle>Header</CardTitle>
        <CardAction>
          <Button variant="outline" className="w-full">
            Action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="border-y px-4 py-3">
        <p>
          The footer has a border-t class applied, creating a visual separation
          between the content and footer sections.
        </p>
      </CardContent>
      <CardFooter className="border-none px-4 py-3">
        <Button variant="outline" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Card with header and footer (`c-card-4`)

Target: `components/examples/c-card-4.tsx`

Card with header and footer

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="border-b">
        <CardTitle>Header with Border</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          The footer has a border-t class applied, creating a visual separation
          between the content and footer sections.
        </p>
      </CardContent>
      <CardFooter className="border-t">
        <Button variant="outline" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Card with link (`c-card-5`)

Target: `components/examples/c-card-5.tsx`

Card with link

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs gap-2 pt-5">
      <CardHeader>
        <CardTitle>Need a help in Claim?</CardTitle>
      </CardHeader>
      <CardContent className="mb-2">
        <p>
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
      </CardContent>
      <CardFooter className="py-2">
        <Button variant="link" className="px-0">
          See our guideline
          <IconPlaceholder
            lucide="ExternalLinkIcon"
            tabler="IconExternalLink"
            hugeicons="LinkSquare01Icon"
            phosphor="ArrowSquareOutIcon"
            remixicon="RiExternalLinkLine"
            aria-hidden="true"
          />
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Card with dropdown menu (`c-card-6`)

Target: `components/examples/c-card-6.tsx`

Card with dropdown menu

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs gap-2 pt-5">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Need a help in Claim?</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IconPlaceholder
                lucide="MoreHorizontalIcon"
                tabler="IconDots"
                hugeicons="MoreHorizontalCircle01Icon"
                phosphor="DotsThreeIcon"
                remixicon="RiMoreLine"
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Team Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconPlaceholder
                  lucide="UserIcon"
                  tabler="IconUser"
                  hugeicons="UserIcon"
                  phosphor="UserIcon"
                  remixicon="RiUserLine"
                  aria-hidden="true"
                />
                <span>Manage members</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconPlaceholder
                  lucide="SettingsIcon"
                  tabler="IconSettings"
                  hugeicons="SettingsIcon"
                  phosphor="GearIcon"
                  remixicon="RiSettings3Line"
                  aria-hidden="true"
                />
                <span>Team preferences</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IconPlaceholder
                lucide="ExternalLinkIcon"
                tabler="IconExternalLink"
                hugeicons="LinkSquare01Icon"
                phosphor="ArrowSquareOutIcon"
                remixicon="RiExternalLinkLine"
                aria-hidden="true"
              />
              <span>Open dashboard</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="mb-2">
        <p>
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">
          <Avatar className="size-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <span className="text-xs">@shadcn</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Card with image (`c-card-7`)

Target: `components/examples/c-card-7.tsx`

Card with image

```tsx
import Image from "next/image"
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="flex flex-col gap-4">
        <div className="rounded-lg relative h-48 w-full overflow-hidden">
          <Image
            src="https://picsum.photos/1000/800?grayscale&random=18"
            alt="16:9"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-between gap-5">
          <Badge variant="outline">
            <IconPlaceholder
              lucide="BellIcon"
              tabler="IconBell"
              hugeicons="NotificationIcon"
              phosphor="BellIcon"
              remixicon="RiNotificationLine"
              aria-hidden="true"
            />
            Trending
          </Badge>
          <div className="flex items-center gap-1">
            <IconPlaceholder
              lucide="SparklesIcon"
              tabler="IconSparkles"
              hugeicons="SparklesIcon"
              phosphor="SparkleIcon"
              remixicon="RiSparklingLine"
              aria-hidden="true"
            />
            <span className="text-secondary-foreground text-xs font-medium">
              Featured
            </span>
          </div>
        </div>

        <p className="text-foreground text-sm">
          Simplifying your workflow from day one. Manage your tasks, projects,
          and team in one place.
        </p>

        <Button>
          Get Started
          <IconPlaceholder
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
            hugeicons="ArrowRight02Icon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
            aria-hidden="true"
          />
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Card with image scale hover effect (`c-card-8`)

Target: `components/examples/c-card-8.tsx`

Card with image scale hover effect

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"

export function Pattern() {
  return (
    <Card className="group/card relative h-96 w-full max-w-xs overflow-hidden border-0 p-0">
      <Image
        src="https://picsum.photos/1000/800?grayscale&random=62"
        alt="Background"
        fill
        className="object-cover transition-transform duration-500 group-hover/card:scale-110"
      />

      {/* Background fade effects */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover/card:from-black/70" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white">Image Scale Effect</h3>
        <p className="mt-2 text-sm text-white/90">
          This card features a smooth image scaling effect and background
          overlay on hover.
        </p>
      </div>
    </Card>
  )
}
```

### Card with full image (`c-card-9`)

Target: `components/examples/c-card-9.tsx`

Card with full image

```tsx
import Image from "next/image"
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <CardContent className="flex flex-col gap-5 p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src="https://picsum.photos/1000/800?grayscale&random=52"
            alt="16:9"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-4 p-6 pt-0">
          <Badge variant="outline">
            <IconPlaceholder
              lucide="BellIcon"
              tabler="IconBell"
              hugeicons="NotificationIcon"
              phosphor="BellIcon"
              remixicon="RiNotificationLine"
              aria-hidden="true"
            />
            Trending
          </Badge>

          <p className="text-foreground text-center text-sm">
            Making your design process faster and easier. Design tools for your
            team.
          </p>

          <Button className="w-fit">
            Get Started
            <IconPlaceholder
              lucide="ArrowRightIcon"
              tabler="IconArrowRight"
              hugeicons="ArrowRight02Icon"
              phosphor="ArrowRightIcon"
              remixicon="RiArrowRightLine"
              aria-hidden="true"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Full card with image and shadow fade effect (`c-card-10`)

Target: `components/examples/c-card-10.tsx`

Full card with image and shadow fade effect

```tsx
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/reui/badge"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const CustomBadge = () => {
  return (
    <svg viewBox="0 0 15 16" className="size-4">
      <path
        className="fill-blue-500"
        d="M14.5425 6.8973L13.5 5.8398C13.4273 5.76858 13.3699 5.68331 13.3312 5.58919C13.2925 5.49507 13.2734 5.39405 13.275 5.2923V3.7923C13.274 3.58681 13.2324 3.38353 13.1527 3.19414C13.0729 3.00476 12.9565 2.833 12.8101 2.68874C12.6638 2.54448 12.4904 2.43055 12.2998 2.35351C12.1093 2.27647 11.9055 2.23783 11.7 2.2398H10.2C10.0982 2.24141 9.99722 2.22228 9.9031 2.1836C9.80898 2.14492 9.72371 2.08749 9.65249 2.0148L8.60249 0.957304C8.30998 0.665106 7.91344 0.500977 7.49999 0.500977C7.08654 0.500977 6.68999 0.665106 6.39749 0.957304L5.33999 1.9998C5.26876 2.07249 5.1835 2.12992 5.08937 2.1686C4.99525 2.20728 4.89424 2.22641 4.79249 2.2248H3.29249C3.08699 2.22578 2.88371 2.26735 2.69432 2.34713C2.50494 2.4269 2.33318 2.54331 2.18892 2.68966C2.04466 2.83602 1.93073 3.00943 1.85369 3.19994C1.77665 3.39046 1.73801 3.59431 1.73999 3.7998V5.2998C1.74159 5.40155 1.72247 5.50256 1.68378 5.59669C1.6451 5.69081 1.58767 5.77608 1.51499 5.8473L0.457487 6.8973C0.165289 7.18981 0.00115967 7.58635 0.00115967 7.9998C0.00115967 8.41325 0.165289 8.80979 0.457487 9.1023L1.49999 10.1598C1.57267 10.231 1.6301 10.3163 1.66878 10.4104C1.70747 10.5045 1.72659 10.6056 1.72499 10.7073V12.2073C1.72597 12.4128 1.76754 12.6161 1.84731 12.8055C1.92709 12.9949 2.04349 13.1666 2.18985 13.3109C2.3362 13.4551 2.50961 13.5691 2.70013 13.6461C2.89064 13.7231 3.0945 13.7618 3.29999 13.7598H4.79999C4.90174 13.7582 5.00275 13.7773 5.09687 13.816C5.191 13.8547 5.27627 13.9121 5.34749 13.9848L6.40499 15.0423C6.69749 15.3345 7.09404 15.4986 7.50749 15.4986C7.92094 15.4986 8.31748 15.3345 8.60999 15.0423L9.65999 13.9998C9.73121 13.9271 9.81647 13.8697 9.9106 13.831C10.0047 13.7923 10.1057 13.7732 10.2075 13.7748H11.7075C12.1212 13.7748 12.518 13.6104 12.8106 13.3179C13.1031 13.0253 13.2675 12.6285 13.2675 12.2148V10.7148C13.2659 10.6131 13.285 10.512 13.3237 10.4179C13.3624 10.3238 13.4198 10.2385 13.4925 10.1673L14.55 9.1098C14.6953 8.96434 14.8104 8.79157 14.8887 8.60146C14.9671 8.41134 15.007 8.20761 15.0063 8.00199C15.0056 7.79638 14.9643 7.59293 14.8847 7.40334C14.8051 7.21376 14.6888 7.04178 14.5425 6.8973Z"
      />
      <path
        className="fill-white"
        d="M10.635 6.6498L6.95249 10.2498C6.90055 10.3024 6.83864 10.3441 6.77038 10.3724C6.70212 10.4007 6.62889 10.4152 6.55499 10.4148C6.48062 10.4138 6.40719 10.398 6.33896 10.3684C6.27073 10.3388 6.20905 10.2959 6.15749 10.2423L4.37999 8.4423C4.32532 8.39026 4.28169 8.32775 4.25169 8.25849C4.22169 8.18923 4.20593 8.11464 4.20536 8.03916C4.20479 7.96369 4.21941 7.88887 4.24836 7.81916C4.27731 7.74946 4.31999 7.68629 4.37387 7.63342C4.42774 7.58056 4.4917 7.53908 4.56194 7.51145C4.63218 7.48382 4.70726 7.47061 4.78271 7.4726C4.85816 7.4746 4.93244 7.49176 5.00112 7.52306C5.0698 7.55436 5.13148 7.59917 5.18249 7.6548L6.56249 9.0573L9.84749 5.8473C9.95296 5.74197 10.0959 5.6828 10.245 5.6828C10.394 5.6828 10.537 5.74197 10.6425 5.8473C10.6953 5.90016 10.737 5.963 10.7653 6.03216C10.7935 6.10132 10.8077 6.17542 10.807 6.25013C10.8063 6.32483 10.7908 6.39865 10.7612 6.46728C10.7317 6.5359 10.6888 6.59795 10.635 6.6498Z"
      />
    </svg>
  )
}

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <CardContent className="flex items-center gap-5 p-0">
        <div className="group/card relative flex h-96 w-full flex-col justify-end overflow-hidden">
          <Image
            src="https://picsum.photos/1000/800?grayscale&random=76"
            alt="16:9"
            fill
            className="object-cover transition-transform duration-500 group-hover/card:scale-110"
          />

          {/* Background fade effects */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent" />

          {/* Header */}
          <div className="absolute top-0 right-0 left-0 flex flex-wrap items-center gap-3 p-6">
            <div className="relative">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"
                  alt="James Brown"
                />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
              <span className="absolute -top-0.5 -right-0.5">
                <CustomBadge />
              </span>
            </div>
            <div className="flex-1 space-y-px">
              <Link href="#" className="font-medium text-white">
                Nick Johnson
              </Link>
              <div className="text-white/80">nick@example.com</div>
            </div>

            <Badge variant="success">New</Badge>
          </div>

          {/* Content */}
          <div className="absolute right-0 bottom-0 left-0 space-y-2 p-6">
            <h3 className="text-2xl font-bold text-white">Author Profile</h3>
            <p className="text-white">
              Profile card showcasing the author’s avatar, name, and estimated
              reading time for each post.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Card with stacked depth effect (`c-card-11`)

Target: `components/examples/c-card-11.tsx`

Card with stacked depth effect

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Pattern() {
  return (
    <div className="relative size-fit">
      {/* Card */}
      <Card className="relative z-1 w-full max-w-xs">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>
            This card uses the default size variant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The card component supports a size prop that defaults to
            &quot;default&quot; for standard spacing and sizing.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Action
          </Button>
        </CardFooter>
      </Card>
      {/* Depth effect */}
      <div className="bg-card rounded-lg absolute inset-4 -bottom-3 z-0 border shadow-md shadow-black/1" />
      <div className="bg-card rounded-lg absolute inset-2 -bottom-1.5 z-0 border shadow-md shadow-black/1" />
    </div>
  )
}
```

### Advanced clean login form card (`c-card-12`)

Target: `components/examples/c-card-12.tsx`

Advanced clean login form card

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email-12">Email address</FieldLabel>
              <Input
                id="email-12"
                type="email"
                placeholder="name@example.com"
                required
              />
            </Field>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password-12">Password</FieldLabel>
                <a
                  href="#"
                  className="text-muted-foreground text-xs underline-offset-4 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <InputGroup>
                <InputGroupInput
                  id="password-12"
                  placeholder="Password"
                  type={isVisible ? "text" : "password"}
                  required
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-sm"
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    onClick={() => setIsVisible(!isVisible)}
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
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>
          <div className="flex flex-col gap-6">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <FieldSeparator className="text-xs">
              Or continue with
            </FieldSeparator>
            <Button variant="outline" className="w-full">
              <IconPlaceholder
                lucide="GithubIcon"
                tabler="IconBrandGithub"
                hugeicons="GithubIcon"
                phosphor="GithubLogoIcon"
                remixicon="RiGithubLine"
                aria-hidden="true"
              />
              Github
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground w-full text-center text-xs">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="hover:text-primary underline underline-offset-4"
          >
            Terms of Service
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
```

### Expandable billing usage card (`c-card-13`)

Target: `components/examples/c-card-13.tsx`

Expandable billing usage card

```tsx
"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="relative w-full max-w-md gap-6 overflow-visible pb-1">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>3 days remaining in cycle</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm">
            Billing
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent
        className={cn(
          "relative space-y-5 overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[500px]" : "max-h-48"
        )}
      >
        {/* Usage Details */}
        <div className="bg-muted/60 rounded-lg space-y-3 p-4">
          <div className="text-muted-foreground flex justify-between text-xs font-medium">
            <span>Included Credit</span>
            <span>On-Demand Charges</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>$18.08 / $20</span>
            <span>$0</span>
          </div>
          <Progress value={90} className="h-2" />
        </div>

        {/* Additional Usage Details */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-sm">
            <span className="text-foreground font-medium">Requests</span>
            <span className="text-muted-foreground">$210.84</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground font-medium">Active CPU</span>
            <span className="text-muted-foreground">$21.95</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground font-medium">Events</span>
            <span className="text-muted-foreground">$21.20</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground font-medium">Storage Usage</span>
            <span className="text-muted-foreground">$20.45</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground font-medium">Bandwidth</span>
            <span className="text-muted-foreground">$0.00</span>
          </div>
        </div>

        {/* Faded background effect for collapsed state */}
        <div
          className={cn(
            "from-background pointer-events-none absolute inset-x-0 bottom-0 h-20 rounded-b-lg bg-linear-to-t to-transparent transition-opacity duration-300",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
      </CardContent>

      {/* Toggle button */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <Button
          variant="outline"
          size="icon-sm"
          className="bg-background hover:bg-background rounded-full shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconPlaceholder
            lucide="ChevronDownIcon"
            tabler="IconChevronDown"
            hugeicons="ArrowDown01Icon"
            phosphor="CaretDownIcon"
            remixicon="RiArrowDownSLine"
            aria-hidden="true"
            className={cn(
              "transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
          <span className="sr-only">Toggle card</span>
        </Button>
      </div>
    </Card>
  )
}
```

### Deployment status summary card (`c-card-14`)

Target: `components/examples/c-card-14.tsx`

Deployment status summary card

```tsx
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const stats = [
  { label: "Environment", value: "Production" },
  { label: "Region", value: "us-east-1" },
  { label: "Version", value: "v2.4.0" },
  { label: "Status", value: "Healthy" },
]

export function Pattern() {
  return (
    <Card className="mx-auto w-full max-w-xs overflow-hidden p-0">
      <CardContent className="flex flex-col items-center p-0">
        {/* Header with gradient */}
        <div className="flex w-full flex-col items-center justify-center bg-linear-to-b from-fuchsia-50/80 to-transparent py-12">
          <div className="relative mb-6">
            <div className="absolute inset-0 scale-150 rounded-full bg-fuchsia-400/10 blur-2xl" />
            <IconPlaceholder
              lucide="SquareTerminalIcon"
              tabler="IconTerminal2"
              hugeicons="ComputerTerminal01Icon"
              phosphor="TerminalWindowIcon"
              remixicon="RiTerminalBoxLine"
              aria-hidden="true"
              className="relative size-16 text-fuchsia-600"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="text-foreground text-lg font-semibold">
            Deployment Successful
          </h3>
          <p className="text-muted-foreground text-sm">Your app is now live</p>
        </div>

        {/* Status Rows */}
        <div className="w-full space-y-1 px-4 pb-6">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "rounded-lg flex items-center justify-between px-3 py-2.5",
                index % 2 === 0 && "bg-muted/40"
              )}
            >
              <span className="text-foreground text-sm font-medium">
                {item.label}
              </span>
              <span className="text-muted-foreground text-sm">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
```

### Stat card with trend and overflow menu (`c-card-15`)

Target: `components/examples/c-card-15.tsx`

Stat card with trend and overflow menu

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const title = "Revenue"
  const value = "$12.4k"
  const delta = 12.5
  const positive = true
  const lastMonth = "$11.0k"

  return (
    <Card className="w-full max-w-xs">
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-muted-foreground text-sm font-medium">{title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-me-1.5"
                aria-label="More options"
              >
                <IconPlaceholder
                  lucide="MoreHorizontalIcon"
                  tabler="IconDots"
                  hugeicons="MoreHorizontalCircle01Icon"
                  phosphor="DotsThreeIcon"
                  remixicon="RiMoreLine"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconPlaceholder
                    lucide="SettingsIcon"
                    tabler="IconSettings"
                    hugeicons="Settings01Icon"
                    phosphor="GearIcon"
                    remixicon="RiSettings3Line"
                    aria-hidden="true"
                  />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    lucide="TriangleAlertIcon"
                    tabler="IconAlertTriangle"
                    hugeicons="Alert02Icon"
                    phosphor="WarningIcon"
                    remixicon="RiErrorWarningLine"
                    aria-hidden="true"
                  />
                  Add Alert
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    lucide="PinIcon"
                    tabler="IconPin"
                    hugeicons="Pin02Icon"
                    phosphor="PushPinIcon"
                    remixicon="RiPushpinLine"
                    aria-hidden="true"
                  />
                  Pin to Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    lucide="Share2Icon"
                    tabler="IconShare"
                    hugeicons="Share08Icon"
                    phosphor="ShareNetworkIcon"
                    remixicon="RiStackshareLine"
                    aria-hidden="true"
                  />
                  Share
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconPlaceholder
                    lucide="TrashIcon"
                    tabler="IconTrash"
                    hugeicons="DeleteIcon"
                    phosphor="TrashIcon"
                    remixicon="RiDeleteBinLine"
                    aria-hidden="true"
                  />
                  Remove
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <span className="text-foreground text-2xl font-medium tracking-tight tabular-nums">
              {value}
            </span>
            <Badge variant={positive ? "success-light" : "destructive-light"}>
              {positive ? (
                <IconPlaceholder
                  lucide="ArrowUpIcon"
                  tabler="IconArrowUp"
                  hugeicons="ArrowUp02Icon"
                  phosphor="ArrowUpIcon"
                  remixicon="RiArrowUpLine"
                  aria-hidden="true"
                />
              ) : (
                <IconPlaceholder
                  lucide="ArrowDownIcon"
                  tabler="IconArrowDown"
                  hugeicons="ArrowDown02Icon"
                  phosphor="ArrowDownIcon"
                  remixicon="RiArrowDownLine"
                  aria-hidden="true"
                />
              )}
              {delta}%
            </Badge>
          </div>
          <Separator />
          <div className="text-muted-foreground text-xs">
            Vs last month:{" "}
            <span className="text-foreground font-medium tabular-nums">
              {lastMonth}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Card with header badge and actions (`c-card-16`)

Target: `components/examples/c-card-16.tsx`

Card with header badge and actions

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-sm p-0">
      <CardContent className="p-0">
        <div className="flex items-center justify-between border-b px-3 py-2">
          <Badge variant="secondary">
            <IconPlaceholder
              lucide="CheckIcon"
              tabler="IconCheck"
              hugeicons="Tick02Icon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              aria-hidden="true"
            />
            Live
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
                aria-label="More options"
              >
                <IconPlaceholder
                  lucide="MoreVerticalIcon"
                  tabler="IconDotsVertical"
                  hugeicons="MoreVerticalCircleIcon"
                  phosphor="DotsThreeVerticalIcon"
                  remixicon="RiMoreLine"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm leading-tight font-medium">
              Integration name
            </h3>
            <Badge variant="success-light" size="sm">
              Installed
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Short description of the integration and what it does in one line.
          </p>
          <AvatarGroup>
            <Avatar className="size-6">
              <AvatarImage
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
                alt="User 1"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar className="size-6">
              <AvatarImage
                src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"
                alt="User 2"
              />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <Avatar className="size-6">
              <AvatarImage
                src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
                alt="User 3"
              />
              <AvatarFallback>EW</AvatarFallback>
            </Avatar>
            <AvatarGroupCount className="size-6 border text-[10px]">
              +3
            </AvatarGroupCount>
          </AvatarGroup>
        </div>
        <div className="border-t p-3">
          <Button variant="outline" className="w-full">
            Open
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Card with icon, title and link (`c-card-17`)

Target: `components/examples/c-card-17.tsx`

Card with icon, title and link

```tsx
import { Card, CardContent } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const item = {
  title: "Recent Orders Overview",
  description:
    "Track and review all recent purchases, updates, and status changes in one place.",
  link: "View Orders",
  icon: (
    <IconPlaceholder
      lucide="ShoppingBagIcon"
      tabler="IconShoppingBag"
      hugeicons="ShoppingBag01Icon"
      phosphor="ShoppingBagOpenIcon"
      remixicon="RiShoppingBagLine"
      aria-hidden="true"
    />
  ),
}

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="flex flex-col gap-3">
        <div className="bg-primary rounded-md [&_svg]:text-primary-foreground flex size-11 items-center justify-center [&_svg]:size-5">
          {item.icon}
        </div>
        <a
          href="#"
          className="text-foreground hover:text-primary block text-sm leading-tight font-medium"
        >
          {item.title}
        </a>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {item.description}
        </p>
        <a
          href="#"
          className="text-primary inline-flex items-center gap-1 text-xs font-medium hover:underline"
        >
          {item.link}
          <IconPlaceholder
            lucide="ChevronRightIcon"
            tabler="IconChevronRight"
            hugeicons="ArrowRight01Icon"
            phosphor="CaretRightIcon"
            remixicon="RiArrowRightSLine"
            aria-hidden="true"
            className="size-2.5 shrink-0"
          />
        </a>
      </CardContent>
    </Card>
  )
}
```

### Card with header label and link (`c-card-18`)

Target: `components/examples/c-card-18.tsx`

Card with header label and link

```tsx
import { Card, CardContent } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const item = {
  label: "Documentation",
  description:
    "Find guides, API references, and examples to integrate with our platform.",
  link: "View docs",
  icon: (
    <IconPlaceholder
      lucide="BookOpenIcon"
      tabler="IconBook"
      hugeicons="BookOpen01Icon"
      phosphor="BookOpenIcon"
      remixicon="RiBookOpenLine"
      aria-hidden="true"
    />
  ),
}

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <CardContent className="p-0">
        <div className="border-b px-4 py-3">
          <div className="text-muted-foreground flex items-center gap-2 [&_svg]:size-4">
            {item.icon}
            <span className="text-foreground text-sm font-medium">
              {item.label}
            </span>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
          <a
            href="#"
            className="text-primary inline-flex items-center gap-1 text-xs font-medium hover:underline"
          >
            <IconPlaceholder
              lucide="LinkIcon"
              tabler="IconLink"
              hugeicons="Link01Icon"
              phosphor="LinkIcon"
              remixicon="RiLinkM"
              aria-hidden="true"
              className="size-2.5 shrink-0"
            />
            {item.link}
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
```
