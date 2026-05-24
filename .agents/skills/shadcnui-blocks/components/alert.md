# Alert (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/alert](https://www.shadcnui-blocks.com/components/alert).
10 variant(s). Install base UI with `pnpm dlx shadcn@latest add alert` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `alert-01` | Primary Alert | A primary alert component |
| `alert-02` | Destructive Alert | A destructive alert component |
| `alert-03` | Success Alert | A success alert component |
| `alert-04` | Warning Alert | A warning alert component |
| `alert-05` | Info Alert | An info alert component |
| `alert-06` | Alert With Background | An alert with background component |
| `alert-07` | Soft Alert | A soft alert component |
| `alert-08` | Bootstrap Alert | A bootstrap-styled alert component |
| `alert-09` | Callout Alert | A callout alert component |
| `alert-10` | Alert With Actions | An alert with actions component |

## Variant source

### Primary Alert (`alert-01`)

A primary alert component

```tsx
import { CircleFadingArrowUpIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
      <CircleFadingArrowUpIcon className="size-4" />
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>
        A new version of the app is now available.
      </AlertDescription>
    </Alert>
  );
}
```

### Destructive Alert (`alert-02`)

A destructive alert component

```tsx
import { OctagonAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DestructiveAlertDemo() {
  return (
    <Alert variant="destructive">
      <OctagonAlertIcon className="size-4" />
      <AlertTitle>Something Went Wrong</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request.
      </AlertDescription>
    </Alert>
  );
}
```

### Success Alert (`alert-03`)

A success alert component

```tsx
import { CircleCheckBigIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertSuccessDemo() {
  return (
    <Alert className="border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600">
      <CircleCheckBigIcon className="size-4" />
      <AlertTitle>Operation Successful</AlertTitle>
      <AlertDescription className="text-emerald-600">
        Your action has been completed successfully
      </AlertDescription>
    </Alert>
  );
}
```

### Warning Alert (`alert-04`)

A warning alert component

```tsx
import { AlertTriangleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertWarningDemo() {
  return (
    <Alert className="border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500">
      <AlertTriangleIcon className="size-4" />
      <AlertTitle>Proceed with Caution</AlertTitle>
      <AlertDescription className="text-amber-500">
        This action might have unintended consequences.
      </AlertDescription>
    </Alert>
  );
}
```

### Info Alert (`alert-05`)

An info alert component

```tsx
import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertInfoDemo() {
  return (
    <Alert className="border-cyan-600/50 text-cyan-600 dark:border-cyan-600 [&>svg]:text-cyan-600">
      <InfoIcon className="size-4" />
      <AlertTitle>Important Information</AlertTitle>
      <AlertDescription className="text-cyan-600">
        Make sure to review the recent updates before proceeding.
      </AlertDescription>
    </Alert>
  );
}
```

### Alert With Background (`alert-06`)

An alert with background component

```tsx
import { OctagonAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertWithBackgroundDemo() {
  return (
    <Alert className="bg-muted">
      <OctagonAlertIcon className="size-4" />
      <AlertTitle className="text-foreground">Something Went Wrong</AlertTitle>
      <AlertDescription className="text-foreground">
        An error occurred while processing your request.
      </AlertDescription>
    </Alert>
  );
}
```

### Soft Alert (`alert-07`)

A soft alert component

```tsx
import {
  CircleFadingArrowUpIcon,
  OctagonAlert,
  ShieldAlert,
} from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="border-none bg-emerald-600/10 text-emerald-500 dark:bg-emerald-600/15">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>Your action has been completed successfully.</AlertTitle>
      </Alert>
      <Alert className="border-none bg-blue-500/10 text-blue-500 dark:bg-blue-600/20">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="border-none bg-amber-600/10 text-amber-500 dark:bg-amber-600/15">
        <ShieldAlert className="size-4" />
        <AlertTitle>Changes will overwrite existing data.</AlertTitle>
      </Alert>
      <Alert className="border-none bg-destructive/10 text-destructive dark:bg-destructive/15">
        <OctagonAlert className="size-4" />
        <AlertTitle>
          Unable to process your request. Please try again later.
        </AlertTitle>
      </Alert>
    </div>
  );
}
```

### Bootstrap Alert (`alert-08`)

A bootstrap-styled alert component

```tsx
import {
  CircleFadingArrowUpIcon,
  OctagonAlert,
  ShieldAlert,
} from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="border-emerald-500/50 bg-emerald-600/10 text-emerald-500 dark:border-emerald-600/50 dark:bg-emerald-600/15">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>Your action has been completed successfully.</AlertTitle>
      </Alert>
      <Alert className="border-blue-400/50 bg-blue-500/10 text-blue-500 dark:border-blue-600/60 dark:bg-blue-600/20 dark:text-blue-400">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="border-amber-500/50 bg-amber-600/10 text-amber-500 dark:border-amber-600/50 dark:bg-amber-600/15">
        <ShieldAlert className="size-4" />
        <AlertTitle>Changes will overwrite existing data.</AlertTitle>
      </Alert>
      <Alert className="border-destructive/30 bg-destructive/10 text-destructive dark:border-destructive/50 dark:bg-destructive/15">
        <OctagonAlert className="size-4" />
        <AlertTitle>
          Unable to process your request. Please try again later.
        </AlertTitle>
      </Alert>
    </div>
  );
}
```

### Callout Alert (`alert-09`)

A callout alert component

```tsx
import { CircleFadingArrowUpIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="rounded-none border-0 border-l-4 border-l-blue-500 bg-blue-500/10 dark:bg-blue-500/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="rounded-none border-blue-300 border-l-4 border-l-blue-500 bg-blue-500/10 dark:border-blue-500/60 dark:border-l-blue-500 dark:bg-blue-600/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="border-0 border-l-4 border-l-blue-500 bg-blue-500/10 dark:bg-blue-500/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="border-blue-300 border-l-4 border-l-blue-500 bg-blue-500/10 dark:border-blue-500/60 dark:border-l-blue-500 dark:bg-blue-600/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
    </div>
  );
}
```

### Alert With Actions (`alert-10`)

An alert with actions component

```tsx
"use client";

import { CircleFadingArrowUpIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertWithActionsDemo() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const showAlert = () => {
    setIsAlertVisible(true);
  };
  const hideAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="w-full">
      {isAlertVisible && (
        <Alert className="flex items-center justify-between pr-2 [&>svg+div]:translate-y-0">
          <div className="flex items-start gap-3">
            <CircleFadingArrowUpIcon className="mt-0.5 size-4" />
            <div className="flex-col justify-center">
              <AlertTitle>Update Available</AlertTitle>
              <AlertDescription>
                A new version of the app is now available.
              </AlertDescription>
            </div>
          </div>
          <Button
            className="pl-0!"
            onClick={hideAlert}
            size="icon"
            variant="ghost"
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </Alert>
      )}
      {!isAlertVisible && (
        <div className="flex justify-center">
          <Button className="mx-auto mt-2" onClick={showAlert}>
            Reopen
          </Button>
        </div>
      )}
    </div>
  );
}
```
