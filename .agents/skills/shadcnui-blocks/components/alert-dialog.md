# Alert Dialog (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/alert-dialog](https://www.shadcnui-blocks.com/components/alert-dialog).
6 variant(s). Install base UI with `pnpm dlx shadcn@latest add alert-dialog` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `alert-dialog-01` | Default Alert Dialog | A default alert dialog component |
| `alert-dialog-02` | Alert Dialog With Icon | An alert dialog with icon component |
| `alert-dialog-03` | Destructive Alert Dialog | A destructive alert dialog component |
| `alert-dialog-04` | Info Alert Dialog | An info alert dialog component |
| `alert-dialog-05` | Customized Header Alert Dialog | An alert dialog with customized header |
| `alert-dialog-06` | Customized Footer Alert Dialog | An alert dialog with customized footer |

## Variant source

### Default Alert Dialog (`alert-dialog-01`)

A default alert dialog component

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Alert Dialog With Icon (`alert-dialog-02`)

An alert dialog with icon component

```tsx
import { OctagonAlert } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogWithIcon() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10 sm:mx-0">
              <OctagonAlert className="h-5 w-5 text-destructive" />
            </div>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Destructive Alert Dialog (`alert-dialog-03`)

A destructive alert dialog component

```tsx
import { OctagonAlert } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogDestructive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="w-full">
            <div>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
                <OctagonAlert className="h-7 w-7 text-destructive" />
              </div>
              <p className="text-center">Are you absolutely sure?</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-[15px]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2 sm:justify-center">
          <AlertDialogCancel variant="ghost">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Info Alert Dialog (`alert-dialog-04`)

An info alert dialog component

```tsx
import { CircleFadingArrowUp, Rocket } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AlertDialogInfo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-lg!">
        <AlertDialogHeader>
          <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 sm:mx-0">
            <CircleFadingArrowUp className="h-[18px] w-[18px] text-primary" />
          </div>
          <AlertDialogTitle className="font-semibold text-2xl tracking-[-0.015em]">
            New Software Update Available
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            A new software update is available for your device. Please update to
            the latest version to continue using the app.
          </AlertDialogDescription>
          <div className="mt-6! flex flex-wrap gap-2">
            <Badge variant="outline">Faster Performance</Badge>
            <Badge variant="outline">Advanced Blocks</Badge>
            <Badge variant="outline">Customized Components</Badge>
            <Badge variant="outline">UI Revamp</Badge>
            <Badge variant="outline">Security Improvements</Badge>
            <Badge variant="outline">Other Improvements</Badge>
            <Badge variant="outline">Bug Fixes</Badge>
            <Badge variant="outline">+ much more</Badge>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Rocket /> Update Now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Customized Header Alert Dialog (`alert-dialog-05`)

An alert dialog with customized header

```tsx
import { OctagonAlert, X } from "lucide-react";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogWithCustomizedHeader() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="-mx-4 -mt-1 flex items-center justify-between border-b px-4 pb-3">
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogPrimitive.Cancel asChild>
            <Button size="icon-sm" variant="ghost">
              <X />
            </Button>
          </AlertDialogPrimitive.Cancel>
        </div>
        <AlertDialogHeader className="pt-2">
          <AlertDialogTitle>
            <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10 sm:mx-0">
              <OctagonAlert className="h-5 w-5 text-destructive" />
            </div>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2">
          <AlertDialogCancel variant="ghost">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Customized Footer Alert Dialog (`alert-dialog-06`)

An alert dialog with customized footer

```tsx
import { ExternalLink, OctagonAlert, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogWithCustomizedFooter() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md!">
        <AlertDialogHeader className="pb-4">
          <AlertDialogTitle>
            <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10 sm:mx-0">
              <OctagonAlert className="h-5 w-5 text-destructive" />
            </div>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="border-t">
          <Button
            className="mr-auto -ml-3 text-muted-foreground"
            variant="link"
          >
            Learn more <ExternalLink />
          </Button>
          <AlertDialogCancel variant="ghost">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            <Trash />
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```
