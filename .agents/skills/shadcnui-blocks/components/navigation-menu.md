# Navigation Menu (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/navigation-menu](https://www.shadcnui-blocks.com/components/navigation-menu).
8 variant(s). Install base UI with `pnpm dlx shadcn@latest add navigation-menu` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `navigation-menu-01` | Default Navigation Menu | A default navigation menu component |
| `navigation-menu-02` | Navigation Menu with Icon | A navigation menu with icon integration |
| `navigation-menu-03` | Navigation Menu with Dropdown | A navigation menu with dropdown functionality |
| `navigation-menu-04` | Navigation Menu with Active Item | A navigation menu with active item styling |
| `navigation-menu-05` | Underlined Navigation Menu | A navigation menu with underlined styling |
| `navigation-menu-06` | Rich Navigation Menu | A feature-rich navigation menu with advanced styling |
| `navigation-menu-07` | Navigation Menu with Icons | A navigation menu with icon elements |
| `navigation-menu-08` | Mobile Navigation Menu | A mobile-friendly navigation menu |

## Variant source

### Default Navigation Menu (`navigation-menu-01`)

A default navigation menu component

```tsx
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#" },
  { title: "Blog", href: "#blog" },
  { title: "Docs", href: "#docs" },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```

### Navigation Menu with Icon (`navigation-menu-02`)

A navigation menu with icon integration

```tsx
import { BookOpen, Home, Rss } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
];

export default function NavigationMenuWithIcon() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link className="flex-row items-center gap-2.5" href={item.href}>
                <item.icon className="h-5 w-5 shrink-0" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```

### Navigation Menu with Dropdown (`navigation-menu-03`)

A navigation menu with dropdown functionality

```tsx
import Link from "next/link";
import * as React from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavigationMenuWithDropdown() {
  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 no-underline outline-hidden focus:shadow-md"
                    href="/"
                  >
                    <Logo className="h-8 w-8" />
                    <div className="mt-4 mb-2 font-medium text-lg">
                      Shadcn UI Blocks
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Collection of customized Shadcn UI blocks and components
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  href={component.href}
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none flex-col items-start space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
```

### Navigation Menu with Active Item (`navigation-menu-04`)

A navigation menu with active item styling

```tsx
import { BookOpen, Home, Rss } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home, isActive: true },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
];

export default function NavigationMenuWithActiveItem() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              active={item.isActive}
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link className="flex-row items-center gap-2.5" href={item.href}>
                <item.icon className="h-5 w-5 shrink-0" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```

### Underlined Navigation Menu (`navigation-menu-05`)

A navigation menu with underlined styling

```tsx
import { BookOpen, Home, Rss } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home, isActive: true },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
];

export default function NavigationMenuWithActiveItem() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-8">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              active={item.isActive}
              asChild
              className={cn(
                "group relative inline-flex h-9 w-max items-center justify-center px-0.5 py-2 font-medium text-sm",
                "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:scale-x-0 before:bg-primary before:transition-transform",
                "hover:text-accent-foreground hover:before:scale-x-100",
                "focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100",
                "disabled:pointer-events-none disabled:opacity-50",
                "data-active:bg-transparent data-[state=open]:before:scale-x-100 data-active:before:scale-x-100",
                "hover:bg-transparent focus:bg-transparent active:bg-transparent"
              )}
            >
              <Link className="flex-row items-center gap-2.5" href={item.href}>
                <item.icon className="h-5 w-5 shrink-0" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```

### Rich Navigation Menu (`navigation-menu-06`)

A feature-rich navigation menu with advanced styling

```tsx
import {
  CreditCardIcon,
  Loader,
  type LucideIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  SquarePowerIcon,
  ToggleRight,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Accordion",
    href: "/components/accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Button",
    href: "/components/button",
    description: "Displays a button or a component that looks like a button.",
    icon: SquarePowerIcon,
  },
  {
    title: "Card",
    href: "/components/card",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCardIcon,
  },
  {
    title: "Checkbox",
    href: "/components/checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: SquareCheckIcon,
  },
  {
    title: "Spinner",
    href: "/components/spinner",
    description: "Informs users about the status of ongoing processes.",
    icon: Loader,
  },
  {
    title: "Switch",
    href: "/components/switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: ToggleRight,
  },
];

export default function RichNavigationMenu() {
  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="px-0 py-1">
            <div className="grid w-[900px] grid-cols-3 gap-3 divide-x p-4">
              <div className="col-span-2 pe-2">
                <h6 className="pl-2.5 font-semibold text-muted-foreground text-sm uppercase">
                  Capabilities
                </h6>
                <ul className="mt-2.5 grid grid-cols-2 gap-3">
                  {components.map((component) => (
                    <ListItem
                      href={component.href}
                      icon={component.icon}
                      key={component.title}
                      title={component.title}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>

              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold text-muted-foreground text-sm uppercase">
                  Product & Features
                </h6>
                <ul className="mt-2.5 grid gap-3">
                  {components.slice(0, 3).map((component) => (
                    <ListItem
                      href={component.href}
                      icon={component.icon}
                      key={component.title}
                      title={component.title}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <h6 className="pl-2.5 font-semibold text-muted-foreground text-sm uppercase">
              Solutions
            </h6>
            <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  href={component.href}
                  icon={component.icon}
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Developers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none flex-col items-start rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          <div className="flex items-center gap-2 font-semibold leading-none tracking-tight">
            <Icon className="h-5 w-5" />
            {title}
          </div>
          <p className="mt-2 line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
```

### Navigation Menu with Icons (`navigation-menu-07`)

A navigation menu with icon elements

```tsx
import { BookOpen, Home, Rss, Settings, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home, isActive: true },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
  { title: "Account", href: "#account", icon: Settings },
  { title: "Settings", href: "#settings", icon: User },
];

export default function NavigationMenuWithIcon() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-3">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              asChild
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: item.isActive ? "secondary" : "ghost",
                }),
                "h-11 w-11",
                !item.isActive && "text-muted-foreground"
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-6! w-6!" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```

### Mobile Navigation Menu (`navigation-menu-08`)

A mobile-friendly navigation menu

```tsx
import { BookOpen, Home, Rss, Settings, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home, isActive: true },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
  { title: "Account", href: "#account", icon: Settings },
  { title: "Settings", href: "#settings", icon: User },
];

export default function NavigationMenuMobile() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              active={item.isActive}
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "flex h-auto flex-col items-center px-5 py-3"
              )}
            >
              <Link href={item.href}>
                <item.icon className="mb-0.5 size-5" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```
