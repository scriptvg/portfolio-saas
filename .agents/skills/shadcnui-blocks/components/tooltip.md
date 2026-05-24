# Tooltip (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/tooltip](https://www.shadcnui-blocks.com/components/tooltip).
7 variant(s). Install base UI with `pnpm dlx shadcn@latest add tooltip` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `tooltip-01` | Default Tooltip | A default tooltip component |
| `tooltip-02` | Tooltip with Arrow | A tooltip component with an arrow |
| `tooltip-03` | Tooltip Directions | A tooltip component with different directions |
| `tooltip-04` | Tooltip with Disabled Hoverable Content | A tooltip component with disabled hoverable content |
| `tooltip-05` | Tooltip with Delay | A tooltip component with delay settings |
| `tooltip-06` | Tooltip with Skip Delay Duration | A tooltip component with skip delay duration settings |
| `tooltip-07` | Tooltip Portal | A tooltip component using portal for rendering |

## Variant source

### Default Tooltip (`tooltip-01`)

A default tooltip component

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Default Tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

### Tooltip with Arrow (`tooltip-02`)

A tooltip component with an arrow

```tsx
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WithArrowTooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip with arrow</p>
          <TooltipPrimitive.Arrow className="fill-foreground" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

### Tooltip Directions (`tooltip-03`)

A tooltip component with different directions

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipDirectionsDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Hey there!</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Hey there!</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Hey there!</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Hey there!</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
```

### Tooltip with Disabled Hoverable Content (`tooltip-04`)

A tooltip component with disabled hoverable content

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipWithDisabledHoverableContentDemo() {
  return (
    <TooltipProvider>
      <Tooltip disableHoverableContent>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>You can&apos;t hover over me</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

### Tooltip with Delay (`tooltip-05`)

A tooltip component with delay settings

```tsx
"use client";

import { type ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WithDelayTooltipDemo() {
  const [delayDuration, setDelayDuration] = useState<number | undefined>(500);

  const handleDelayDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDelayDuration(
      e.target.value === "" ? undefined : Math.max(0, +e.target.value)
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <TooltipProvider>
        <Tooltip delayDuration={delayDuration}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hello there!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div>
        <Label>Delay</Label>
        <Input
          className="mt-2"
          onChange={handleDelayDurationChange}
          type="number"
          value={delayDuration}
        />
      </div>
    </div>
  );
}
```

### Tooltip with Skip Delay Duration (`tooltip-06`)

A tooltip component with skip delay duration settings

```tsx
"use client";

import { type ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WithSkipDelayTooltipDemo() {
  const [skipDelayDuration, setSkipDelayDuration] = useState<
    number | undefined
  >(300);

  const handleDelayDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkipDelayDuration(
      e.target.value === "" ? undefined : Math.max(0, +e.target.value)
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <TooltipProvider skipDelayDuration={skipDelayDuration}>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover Here First</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hello there!</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Then Hover Here</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hello there!</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <div>
        <Label>Skip delay duration</Label>
        <Input
          className="mt-2"
          onChange={handleDelayDurationChange}
          type="number"
          value={skipDelayDuration}
        />
      </div>
    </div>
  );
}
```

### Tooltip Portal (`tooltip-07`)

A tooltip component using portal for rendering

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipPortalDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent forceMount>
          <p>I&apos;m in a Portal</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```
