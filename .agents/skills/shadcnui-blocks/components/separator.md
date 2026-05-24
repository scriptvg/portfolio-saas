# Separator (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/separator](https://www.shadcnui-blocks.com/components/separator).
6 variant(s). Install base UI with `pnpm dlx shadcn@latest add separator` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `separator-01` | Default Separator | A default separator component |
| `separator-02` | Horizontal Separator with Label | A horizontal separator with label component |
| `separator-03` | Horizontal Separator with Chip | A horizontal separator with chip component |
| `separator-04` | Dashed Separator | A dashed separator component |
| `separator-05` | Vertical Separator | A vertical separator component |
| `separator-06` | Vertical Separator with Chip | A vertical separator with chip component |

## Variant source

### Default Separator (`separator-01`)

A default separator component

```tsx
import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="font-semibold text-sm leading-none">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-2.5" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
```

### Horizontal Separator with Label (`separator-02`)

A horizontal separator with label component

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

export default function HorizontalSeparatorWithLabel() {
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
            <div className="bg-card px-2 text-center text-sm">OR</div>
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

### Horizontal Separator with Chip (`separator-03`)

A horizontal separator with chip component

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

export default function HorizontalSeparatorWithChip() {
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
            <div className="mx-1 rounded-full border bg-muted px-2 py-1 text-center text-xs">
              OR
            </div>
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

### Dashed Separator (`separator-04`)

A dashed separator component

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

export default function SeparatorDashed() {
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
            <Separator className="h-0 border-t border-dashed bg-transparent" />
            <div className="bg-card px-2 text-center text-sm">OR</div>
            <Separator className="h-0 border-t border-dashed bg-transparent" />
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

### Vertical Separator (`separator-05`)

A vertical separator component

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SeparatorVertical() {
  return (
    <div className="mt-6 flex h-40 w-full items-center gap-6">
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <Button>Get Started</Button>
      </div>
      <div className="flex h-full shrink-0 flex-col items-center justify-center gap-2 overflow-hidden">
        <Separator className="mx-auto h-full" orientation="vertical" />
        <span>OR</span>
        <Separator className="mx-auto h-full" orientation="vertical" />
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
    </div>
  );
}
```

### Vertical Separator with Chip (`separator-06`)

A vertical separator with chip component

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SeparatorWithChipVertical() {
  return (
    <div className="mt-6 flex h-40 w-full items-center gap-6">
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <Button>Get Started</Button>
      </div>
      <div className="flex h-full shrink-0 flex-col items-center justify-center gap-2 overflow-hidden">
        <Separator className="mx-auto h-full" orientation="vertical" />
        <span className="rounded-full border bg-muted p-1.5 text-center text-xs">
          OR
        </span>
        <Separator className="mx-auto h-full" orientation="vertical" />
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
    </div>
  );
}
```
