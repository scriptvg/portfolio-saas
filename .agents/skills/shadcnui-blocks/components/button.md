# Button (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/button](https://www.shadcnui-blocks.com/components/button).
23 variant(s). Install base UI with `pnpm dlx shadcn@latest add button` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `button-01` | Primary Button | A primary button component |
| `button-02` | Secondary Button | A secondary button component |
| `button-03` | Destructive Button | A destructive button component |
| `button-04` | Outline Button | An outline button component |
| `button-05` | Icon Button | An icon button component |
| `button-06` | Loading Button | A loading button component |
| `button-07` | Split Button | A split button component |
| `button-08` | Ghost Button | A ghost button component |
| `button-09` | Gradient Button | A gradient button component |
| `button-10` | Link Button | A link button component |
| `button-11` | Social Button | A social button component |
| `button-12` | Social Login Button | A social login button component |
| `button-13` | Neon Button | A neon button component |
| `button-14` | Rounded Button | A rounded button component |
| `button-15` | Toggle Button | A toggle button component |
| `button-16` | Theme Toggle Button | A theme toggle button component |
| `button-17` | Full Width Button | A full width button component |
| `button-18` | Button Group | A button group component |
| `button-19` | Button Group 2 | Another button group component |
| `button-20` | Copy Button | A copy button component |
| `button-21` | Button with Badge | A button with badge component |
| `button-22` | Button with Tooltip | A button with tooltip component |
| `button-23` | Button with Tap Animation | A button with tap animation component |

## Variant source

### Primary Button (`button-01`)

A primary button component

```tsx
import { Button } from "@/components/ui/button";

const PrimaryButtonDemo = () => <Button>Primary</Button>;

export default PrimaryButtonDemo;
```

### Secondary Button (`button-02`)

A secondary button component

```tsx
import { Button } from "@/components/ui/button";

const SecondaryButtonDemo = () => (
  <Button variant="secondary">Secondary</Button>
);

export default SecondaryButtonDemo;
```

### Destructive Button (`button-03`)

A destructive button component

```tsx
import { Button } from "@/components/ui/button";

const DestructiveButtonDemo = () => (
  <Button variant="destructive">Destructive</Button>
);

export default DestructiveButtonDemo;
```

### Outline Button (`button-04`)

An outline button component

```tsx
import { Button } from "@/components/ui/button";

const OutlineButtonDemo = () => <Button variant="outline">Outline</Button>;

export default OutlineButtonDemo;
```

### Icon Button (`button-05`)

An icon button component

```tsx
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const IconButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon">
        <Star />
      </Button>
      <Button>
        <Star /> Star
      </Button>
      <Button>
        Read More <ArrowRight />
      </Button>
    </div>
  );
};

export default IconButtonDemo;
```

### Loading Button (`button-06`)

A loading button component

```tsx
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

const LoadingButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon">
        <Spinner />
      </Button>
      <Button>
        <Spinner /> Loading
      </Button>
    </div>
  );
};

export default LoadingButtonDemo;
```

### Split Button (`button-07`)

A split button component

```tsx
import { ChevronDown, Plus, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SplitButton = () => {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <Star /> Star
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-52">
          <DropdownMenuLabel className="flex items-center justify-between gap-2">
            Lists
            <Button className="h-5 w-5" size="icon" variant="ghost">
              <X />
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>🔮 Future ideas</DropdownMenuItem>
          <DropdownMenuItem>🚀 My stack</DropdownMenuItem>
          <DropdownMenuItem>✨ Inspiration</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Plus /> Create List
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
};

export default SplitButton;
```

### Ghost Button (`button-08`)

A ghost button component

```tsx
import { Button } from "@/components/ui/button";

const GhostButtonDemo = () => <Button variant="ghost">Ghost</Button>;

export default GhostButtonDemo;
```

### Gradient Button (`button-09`)

A gradient button component

```tsx
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ButtonGradient = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "border-0 bg-linear-to-r from-blue-500 to-indigo-500 text-primary-foreground hover:to-blue-500 dark:text-foreground",
      className
    )}
    {...props}
  />
);

const GradientButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonGradient>Gradient</ButtonGradient>
    <ButtonGradient size="icon">
      <StarIcon />
    </ButtonGradient>
    <ButtonGradient>
      <StarIcon /> Star
    </ButtonGradient>
  </div>
);

export default GradientButtonDemo;
```

### Link Button (`button-10`)

A link button component

```tsx
import { Button } from "@/components/ui/button";

const LinkButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button variant="link">Link</Button>
    <Button disabled variant="link">
      Disabled Link
    </Button>
  </div>
);

export default LinkButtonDemo;
```

### Social Button (`button-11`)

A social button component

```tsx
import { Instagram, Twitch, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button className="rounded-full" size="icon">
        <Twitch />
      </Button>
      <Button className="rounded-full" size="icon">
        <Instagram />
      </Button>
      <Button className="rounded-full" size="icon">
        <Twitter />
      </Button>
    </div>
  );
};

export default SocialButtonDemo;
```

### Social Login Button (`button-12`)

A social login button component

```tsx
import { Button } from "@/components/ui/button";

const SocialLoginButtonDemo = () => {
  return (
    <div className="flex w-full max-w-60 flex-col gap-2">
      <Button className="gap-3" variant="outline">
        <svg
          className="h-5 w-5"
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 488 512"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
        Sign up with Google
      </Button>
      <Button className="gap-3" variant="outline">
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
        </svg>
        Sign up with Twitch
      </Button>
      <Button className="gap-3" variant="outline">
        <svg
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
        Sign up with Twitter
      </Button>
    </div>
  );
};

export default SocialLoginButtonDemo;
```

### Neon Button (`button-13`)

A neon button component

```tsx
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ButtonNeon = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "border-indigo-500 bg-indigo-500 text-primary-foreground shadow-indigo-400/70 shadow-lg hover:bg-indigo-600 dark:text-foreground dark:shadow-indigo-700",
      className
    )}
    {...props}
  />
);

const NeonButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonNeon>Neon</ButtonNeon>
    <ButtonNeon size="icon">
      <StarIcon />
    </ButtonNeon>
    <ButtonNeon>
      <StarIcon /> Star
    </ButtonNeon>
  </div>
);

export default NeonButtonDemo;
```

### Rounded Button (`button-14`)

A rounded button component

```tsx
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const RoundedButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button className="rounded-full">Rounded</Button>
    <Button className="rounded-full" size="icon">
      <StarIcon />
    </Button>
    <Button className="rounded-full">
      <StarIcon /> Star
    </Button>
  </div>
);

export default RoundedButtonDemo;
```

### Toggle Button (`button-15`)

A toggle button component

```tsx
"use client";

import { Heart } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ToggleButton = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <Button
      className={cn("h-10 w-10 rounded-full", {
        "bg-rose-100 hover:bg-rose-100 focus:bg-rose-100": isLiked,
      })}
      onClick={() => setIsLiked(!isLiked)}
      size="icon"
      variant="secondary"
    >
      <Heart
        className={cn("h-5! w-5!", {
          "fill-rose-600 stroke-rose-600": isLiked,
        })}
      />
    </Button>
  );
};

export default ToggleButton;
```

### Theme Toggle Button (`button-16`)

A theme toggle button component

```tsx
"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR flicker and hydration mismatch
  if (!mounted) {
    return <Button className="rounded-full" size="icon" />;
  }

  return (
    <Button className="rounded-full" onClick={toggleTheme} size="icon">
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggleButton;
```

### Full Width Button (`button-17`)

A full width button component

```tsx
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FullWidthButtonDemo = () => (
  <Button className="w-full">
    <StarIcon /> Star
  </Button>
);

export default FullWidthButtonDemo;
```

### Button Group (`button-18`)

A button group component

```tsx
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

const GroupButtonDemo = () => (
  <ButtonGroup>
    <Button variant="secondary">Left</Button>
    <ButtonGroupSeparator />
    <Button variant="secondary">Middle</Button>
    <ButtonGroupSeparator />
    <Button variant="secondary">Right</Button>
  </ButtonGroup>
);

export default GroupButtonDemo;
```

### Button Group 2 (`button-19`)

Another button group component

```tsx
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const GroupButton2Demo = () => (
  <ButtonGroup>
    <Button className="gap-1 font-semibold" variant="outline">
      <ChevronUp className="size-5" /> 39
    </Button>
    <Button size="icon" variant="outline">
      <ChevronDown className="size-5" />
    </Button>
  </ButtonGroup>
);

export default GroupButton2Demo;
```

### Copy Button (`button-20`)

A copy button component

```tsx
"use client";

import { Check, Copy } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const CopyButton = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const link = "https://www.shadcnui-blocks.com";

  return (
    <div className="flex items-center overflow-hidden rounded-xl border bg-muted/70 p-0.75 ps-0">
      <p className="max-w-[25ch] select-all overflow-hidden text-ellipsis whitespace-nowrap pr-2 pl-3 text-sm">
        {link}
      </p>
      <Button onClick={() => copyToClipboard(link)} size="icon">
        {isCopied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

// @hooks/use-copy-to-clipboard.tsx
function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: {
  timeout?: number;
  onCopy?: () => void;
} = {}) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      return;
    }

    if (!value) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      if (onCopy) {
        onCopy();
      }

      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    }, console.error);
  };

  return { isCopied, copyToClipboard };
}

export default CopyButton;
```

### Button with Badge (`button-21`)

A button with badge component

```tsx
import { BellIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ButtonsWithBadge = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <Button size="icon" variant="outline">
        <BellIcon />
      </Button>
      <span className="absolute top-0 right-0 flex min-w-4 origin-center translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-destructive px-1 text-white text-xs">
        2
      </span>
    </div>
  </div>
);

export default ButtonsWithBadge;
```

### Button with Tooltip (`button-22`)

A button with tooltip component

```tsx
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ButtonsWithTooltip = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left</Button>
      </TooltipTrigger>
      <TooltipContent side="left">Left tooltip</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">Top tooltip</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right">Right tooltip</TooltipContent>
    </Tooltip>
  </div>
);

export default ButtonsWithTooltip;
```

### Button with Tap Animation (`button-23`)

A button with tap animation component

```tsx
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ButtonsWithTapAnimation = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button asChild>
      <Button className="active:scale-95">Tap</Button>
    </Button>
    <Button asChild size="icon">
      <Button className="active:scale-95">
        <StarIcon />
      </Button>
    </Button>
    <Button asChild>
      <Button className="active:scale-95">
        <StarIcon /> Star
      </Button>
    </Button>
  </div>
);

export default ButtonsWithTapAnimation;
```
