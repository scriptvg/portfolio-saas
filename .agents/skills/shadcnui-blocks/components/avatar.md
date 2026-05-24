# Avatar (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/avatar](https://www.shadcnui-blocks.com/components/avatar).
16 variant(s). Install base UI with `pnpm dlx shadcn@latest add avatar` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `avatar-01` | Default Avatar | A default avatar component |
| `avatar-02` | Clickable Avatar | A clickable avatar component |
| `avatar-03` | Avatar with Tooltip | An avatar with tooltip component |
| `avatar-04` | Avatar with Text | An avatar with text component |
| `avatar-05` | Avatar with Hover Card | An avatar with hover card component |
| `avatar-06` | Avatar Size | Different sizes of avatar component |
| `avatar-07` | Avatar Color | Different colors of avatar component |
| `avatar-08` | Avatar Shape | Different shapes of avatar component |
| `avatar-09` | Avatar Fallback | Avatar with fallback component |
| `avatar-10` | Avatar with Ring | Avatar with ring component |
| `avatar-11` | Avatar Status | Avatar with status indicator component |
| `avatar-12` | Avatar Group | Group of avatars component |
| `avatar-13` | Avatar Group with Max | Group of avatars with maximum limit component |
| `avatar-14` | Avatar Group with Max | Group of avatars with maximum limit component |
| `avatar-15` | Avatar Group with Max | Group of avatars with maximum limit component |
| `avatar-16` | Avatar Dropdown Menu | An avatar dropdown menu component |

## Variant source

### Default Avatar (`avatar-01`)

A default avatar component

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
```

### Clickable Avatar (`avatar-02`)

A clickable avatar component

```tsx
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ClickableAvatarDemo() {
  return (
    <Link href="https://github.com/shadcn" target="_blank">
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
}
```

### Avatar with Tooltip (`avatar-03`)

An avatar with tooltip component

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function AvatarWithTooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent className="font-semibold">shadcn</TooltipContent>
    </Tooltip>
  );
}
```

### Avatar with Text (`avatar-04`)

An avatar with text component

```tsx
import { BadgeCheckIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="size-9">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 font-semibold leading-none tracking-tight">
          shadcn{" "}
          <BadgeCheckIcon className="size-4.5 fill-blue-500 text-white" />
        </div>
        <span className="text-muted-foreground text-sm leading-none">
          I own a computer
        </span>
      </div>
    </div>
  );
}
```

### Avatar with Hover Card (`avatar-05`)

An avatar with hover card component

```tsx
import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function AvatarHoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-full max-w-xs">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">@shadcn</h4>
            <p className="text-sm">
              The founder of Shadcn UI. I own a computer.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
```

### Avatar Size (`avatar-06`)

Different sizes of avatar component

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarSizeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-8">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-11">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-14">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
```

### Avatar Color (`avatar-07`)

Different colors of avatar component

```tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarColorDemo() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="bg-slate-500 text-white">C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500 text-white">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-rose-500 text-white">C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-cyan-500 text-white">C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-green-500 text-white">C</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="bg-slate-500/25 text-slate-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-rose-500/25 text-rose-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-cyan-500/25 text-cyan-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-green-500/25 text-green-500">
            C
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
```

### Avatar Shape (`avatar-08`)

Different shapes of avatar component

```tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarShapeDemo() {
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-4">
        <Avatar className="rounded-none">
          <AvatarFallback className="rounded-none bg-indigo-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-lg bg-indigo-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-full">
          <AvatarFallback className="rounded-full bg-indigo-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="rounded-none">
          <AvatarFallback className="rounded-none bg-indigo-500/25 text-indigo-500">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-lg bg-indigo-500/25 text-indigo-500">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-full">
          <AvatarFallback className="rounded-full bg-indigo-500/25 text-indigo-500">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
```

### Avatar Fallback (`avatar-09`)

Avatar with fallback component

```tsx
import { BuildingIcon, StoreIcon, UserRoundIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarFallbackDemo() {
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <UserRoundIcon className="size-4.5" />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <BuildingIcon className="size-4.5" />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <StoreIcon className="size-4.5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
```

### Avatar with Ring (`avatar-10`)

Avatar with ring component

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarRing() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="ring-2 ring-ring ring-offset-2 ring-offset-background">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback className="rounded-none">ER</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-green-500 ring-offset-2 ring-offset-background">
        <AvatarImage alt="@evilrabbit" src="https://github.com/leerob.png" />
        <AvatarFallback className="rounded-md">LR</AvatarFallback>
      </Avatar>
      <div className="rounded-full bg-gradient-to-b from-red-500 to-blue-500 p-1">
        <Avatar className="ring-2 ring-background">
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
```

### Avatar Status (`avatar-11`)

Avatar with status indicator component

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarWithStatusDemo() {
  return (
    <div className="flex items-center gap-3">
      {/* Online */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full bg-green-500 ring-2 ring-background" />
      </div>

      {/* DND */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full bg-red-500 ring-2 ring-background" />
      </div>

      {/* Busy */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full bg-yellow-500 ring-2 ring-background" />
      </div>

      {/* Offline */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full border-2 border-muted-foreground bg-background ring-2 ring-background" />
      </div>
    </div>
  );
}
```

### Avatar Group (`avatar-12`)

Group of avatars component

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarProps = React.ComponentProps<typeof Avatar>;

interface AvatarGroupProps extends React.ComponentProps<"div"> {
  children: React.ReactElement<AvatarProps>[];
  max?: number;
}

const AvatarGroup = ({
  children,
  max,
  className,
  ...props
}: AvatarGroupProps) => {
  const totalAvatars = React.Children.count(children);
  const displayedAvatars = React.Children.toArray(children)
    .slice(0, max)
    .reverse();
  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;

  return (
    <div
      className={cn("flex flex-row-reverse items-center", className)}
      {...props}
    >
      {remainingAvatars > 0 && (
        <Avatar className="relative -ml-2 ring-2 ring-background hover:z-10">
          <AvatarFallback className="bg-muted-foreground text-white">
            +{remainingAvatars}
          </AvatarFallback>
        </Avatar>
      )}
      {displayedAvatars.map((avatar, index) => {
        if (!React.isValidElement(avatar)) {
          return null;
        }

        return (
          <div className="relative -ml-2 hover:z-10" key={index}>
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {
              className: "ring-2 ring-background",
            })}
          </div>
        );
      })}
    </div>
  );
};

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback className="bg-indigo-500 text-white">CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-green-600 text-white">CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-red-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-indigo-500 text-white">VK</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-orange-500 text-white">RS</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
```

### Avatar Group with Max (`avatar-13`)

Group of avatars with maximum limit component

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarProps = React.ComponentProps<typeof Avatar>;

interface AvatarGroupProps extends React.ComponentProps<"div"> {
  children: React.ReactElement<AvatarProps>[];
  max?: number;
}

const AvatarGroup = ({
  children,
  max,
  className,
  ...props
}: AvatarGroupProps) => {
  const totalAvatars = React.Children.count(children);
  const displayedAvatars = React.Children.toArray(children)
    .slice(0, max)
    .reverse();
  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;

  return (
    <div
      className={cn("flex flex-row-reverse items-center", className)}
      {...props}
    >
      {remainingAvatars > 0 && (
        <Avatar className="relative -ml-2 ring-2 ring-background hover:z-10">
          <AvatarFallback className="bg-muted-foreground text-white">
            +{remainingAvatars}
          </AvatarFallback>
        </Avatar>
      )}
      {displayedAvatars.map((avatar, index) => {
        if (!React.isValidElement(avatar)) {
          return null;
        }

        return (
          <div className="relative -ml-2 hover:z-10" key={index}>
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {
              className: "ring-2 ring-background",
            })}
          </div>
        );
      })}
    </div>
  );
};

export default function AvatarGroupMaxAvatarDemo() {
  return (
    <AvatarGroup className="flex items-center" max={3}>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback className="bg-indigo-500 text-white">CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-green-600 text-white">CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-red-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-indigo-500 text-white">VK</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-orange-500 text-white">RS</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
```

### Avatar Group with Max (`avatar-14`)

Group of avatars with maximum limit component

```tsx
import { BadgeCheck, BadgeMinus, BadgeX } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarBadge() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute -right-0.5 -bottom-0.5 flex size-3.5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground leading-none ring-2 ring-background">
          3
        </div>
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeCheck className="absolute -right-1 -bottom-1 size-4.5 rounded-full fill-blue-500 text-white" />
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeMinus className="absolute -right-1 -bottom-1 size-4.5 rounded-full fill-amber-500 text-white" />
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeX className="absolute -right-1 -bottom-1 size-4.5 rounded-full fill-red-500 text-white" />
      </div>
    </div>
  );
}
```

### Avatar Group with Max (`avatar-15`)

Group of avatars with maximum limit component

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-start gap-10 rounded-lg border p-4 shadow-sm/3">
      <div className="flex gap-3">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1 font-medium leading-none tracking-tight">
            John Doe
          </div>
          <span className="text-muted-foreground text-sm leading-none">
            Let's go to the park
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-1">
        <span className="text-muted-foreground text-xs">12:00 AM</span>
        <div className="ms-auto flex h-5 w-fit min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-primary-foreground text-xs">
          2
        </div>
      </div>
    </div>
  );
}
```

### Avatar Dropdown Menu (`avatar-16`)

An avatar dropdown menu component

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
