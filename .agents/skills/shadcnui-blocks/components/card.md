# Card (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/card](https://www.shadcnui-blocks.com/components/card).
8 variant(s). Install base UI with `pnpm dlx shadcn@latest add card` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `card-01` | Default Card | A default card component |
| `card-02` | Card with Background | A card with background component |
| `card-03` | Create Account Card | A create account card component |
| `card-04` | Banner Card | A banner card component |
| `card-05` | Pricing Card | A pricing card component |
| `card-06` | Post Card | A post card component |
| `card-07` | Product Card | A product card component |
| `card-08` | Testimonial Card | A testimonial card component |

## Variant source

### Default Card (`card-01`)

A default card component

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
        <CardDescription>
          Quickly add a new task to stay organized.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Priority</Label>
              <Select>
                <SelectTrigger className="w-full" id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
}
```

### Card with Background (`card-02`)

A card with background component

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithBackground() {
  return (
    <Card className="w-[350px] bg-secondary/50 shadow-none">
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
        <CardDescription>
          Quickly add a new task to stay organized.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Priority</Label>
              <Select>
                <SelectTrigger className="w-full" id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
}
```

### Create Account Card (`card-03`)

A create account card component

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function CreateAccountCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-">Create an account</CardTitle>
        <CardDescription>
          Start your free 30 days trials. Cancel at anytime.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <Button>Get Started</Button>
          </div>
          <div className="relative my-4 flex items-center justify-center overflow-hidden">
            <Separator />
            <div className="bg-background px-2 text-center text-sm">OR</div>
            <Separator />
          </div>
          <div className="grid w-full gap-2">
            <Button variant="outline">
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
            <Button variant="outline">
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
            <Button variant="outline">
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
        </form>
      </CardContent>
    </Card>
  );
}
```

### Banner Card (`card-04`)

A banner card component

```tsx
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardBanner() {
  return (
    <Card className="w-full max-w-2xl bg-muted py-10 text-center shadow-none">
      <CardHeader className="px-8">
        <CardTitle className="mb-2 font-medium text-4xl tracking-tight">
          Power up your scheduling
        </CardTitle>
        <CardDescription className="mx-auto max-w-lg text-lg text-muted-foreground">
          Get started with the world&apos;s leading Scheduling Automation
          Platform in seconds - for free.
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto mt-4 flex flex-row gap-2 px-8">
        <Button size="lg">
          Sign up for free <ArrowUpRight />{" "}
        </Button>
        <Button size="lg" variant="outline">
          Get a demo <CirclePlay />
        </Button>
      </CardContent>
    </Card>
  );
}
```

### Pricing Card (`card-05`)

A pricing card component

```tsx
import { CircleHelpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function PricingCard() {
  return (
    <Card className="w-full max-w-xs shadow-border/70 shadow-md">
      <CardHeader>
        <CardTitle className="font-semibold text-2xl tracking-tight">
          Pro Plan
        </CardTitle>
        <CardDescription>
          For teams that need advanced scheduling tools to streamline workflows
          and enhance collaboration, ensuring every meeting is productive and on
          track.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-end text-muted-foreground text-sm leading-6">
        <span className="mt-1 font-semibold text-4xl text-foreground leading-none">
          $20
        </span>
        <span className="mr-1.5 ml-0.5">/mo</span>
        <Tooltip>
          <TooltipTrigger className="mb-1">
            <CircleHelpIcon className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>
              Seats are required for users to connect calendars and create
              Calendly links to help book meetings - meeting invitees do not
              require an account or seat.
            </p>
          </TooltipContent>
        </Tooltip>
      </CardContent>
      <CardFooter className="mt-2 flex justify-between">
        <Button className="w-full" size="lg">
          Try for free
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### Post Card (`card-06`)

A post card component

```tsx
import {
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  ShareIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function CardPost() {
  return (
    <Card className="w-full max-w-xs gap-0 py-0 shadow-none">
      <CardHeader className="-mr-1 flex flex-row items-center justify-between py-2.5">
        <Item className="w-full gap-2.5 p-0">
          <ItemMedia>
            <Image
              alt=""
              className="h-8 w-8 rounded-full bg-secondary object-contain"
              height={32}
              src="https://github.com/shadcn.png"
              width={32}
            />
          </ItemMedia>
          <ItemContent className="gap-0">
            <ItemTitle>shadcn</ItemTitle>
            <ItemDescription className="text-xs">@shadcn</ItemDescription>
          </ItemContent>
          <ItemActions className="-me-1">
            <Button size="icon" variant="ghost">
              <MoreHorizontalIcon />
            </Button>
          </ItemActions>
        </Item>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-14/9 border-y">
          <img
            alt=""
            className="size-full object-cover"
            src="https://www.fffuel.co/images/dddepth-preview/dddepth-032.jpg"
          />
        </div>
        <div className="px-4 py-4">
          <h2 className="font-semibold">Exploring New Horizons</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            Had an amazing time discovering hidden gems! 🌄 Can&apos;t wait to
            share more from this journey.{" "}
            <span className="text-blue-500">#Wanderlust</span>{" "}
            <span className="text-blue-500">#NatureLovers</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t px-2 py-2! pb-0">
        <Button className="shrink-0 text-muted-foreground" variant="ghost">
          <HeartIcon /> <span className="hidden sm:inline">Like</span>
        </Button>
        <Button className="shrink-0 text-muted-foreground" variant="ghost">
          <MessageCircleIcon />
          <span className="hidden sm:inline">Comment</span>
        </Button>
        <Button className="shrink-0 text-muted-foreground" variant="ghost">
          <ShareIcon /> <span className="hidden sm:inline">Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### Product Card (`card-07`)

A product card component

```tsx
import { ArrowRight, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const ProductCard = () => {
  return (
    <Card className="max-w-xs gap-0 pt-0 shadow-none">
      <CardHeader className="flex flex-row items-center gap-3 px-5 py-4 font-semibold">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Shapes className="h-5 w-5" />
        </div>
        Shadcn UI Blocks
      </CardHeader>

      <CardContent className="mt-1 px-5 text-[15px] text-muted-foreground">
        <p>
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy.
        </p>
        <div className="mt-5 aspect-video w-full rounded-xl bg-muted" />
      </CardContent>

      <CardFooter className="mt-6">
        <Button className="/blocks">
          Explore Blocks <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
```

### Testimonial Card (`card-08`)

A testimonial card component

```tsx
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TestimonialCard = () => {
  return (
    <Card className="relative w-full max-w-sm gap-0 border-none bg-muted/70 pt-0 pb-4 shadow-none">
      <Quote className="absolute top-3 right-2 h-16 w-16 stroke-[1.5px] text-foreground/10" />
      <CardHeader className="py-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[15px] leading-none">
              shadcn
            </span>
            <span className="text-muted-foreground text-sm leading-none">
              @shadcn
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[15px] text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          ullamcorper, augue at commodo interdum, erat dolor egestas eros, eu
          finibus turpis nunc at purus. Sed elementum rutrum nibh, a egestas
          turpis porttitor eu.
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
```
