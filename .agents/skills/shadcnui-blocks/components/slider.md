# Slider (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/slider](https://www.shadcnui-blocks.com/components/slider).
15 variant(s). Install base UI with `pnpm dlx shadcn@latest add slider` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `slider-01` | Default Slider | A default slider component |
| `slider-02` | Disabled Slider | A disabled slider component |
| `slider-03` | Slider Size | A slider component with different sizes |
| `slider-04` | Slider Color | A slider component with different colors |
| `slider-05` | Slider Shape | A slider component with different shapes |
| `slider-06` | Slider with Label | A slider component with a label |
| `slider-07` | Slider with Thumb Icon | A slider component with a custom thumb icon |
| `slider-08` | Audio Slider | A slider component designed for audio controls |
| `slider-09` | Slider with Marks | A slider component with marks for specific values |
| `slider-10` | Slider with Sticky Label | A slider component with a sticky label |
| `slider-11` | Slider with Sticky Label on Hover | A slider component with a sticky label that appears on hover |
| `slider-12` | Slider with Sticky Label Arrow | A slider component with a sticky label with arrow |
| `slider-13` | Vertical Slider | A vertical slider component |
| `slider-14` | Range Slider | A range slider component |
| `slider-15` | Slider with Multiple Thumbs | A slider component with multiple thumbs |

## Variant source

### Default Slider (`slider-01`)

A default slider component

```tsx
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      className={cn("max-w-sm", className)}
      defaultValue={[50]}
      max={100}
      step={1}
      {...props}
    />
  );
}
```

### Disabled Slider (`slider-02`)

A disabled slider component

```tsx
import { Slider } from "@/components/ui/slider";

export default function SliderDisabledDemo() {
  return (
    <Slider
      className="max-w-sm data-disabled:cursor-not-allowed data-disabled:opacity-50"
      defaultValue={[50]}
      disabled
      max={100}
      step={1}
    />
  );
}
```

### Slider Size (`slider-03`)

A slider component with different sizes

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "@/lib/utils";

const sliderTrackVariants = cva(
  "relative w-full grow overflow-hidden rounded-full bg-primary/20",
  {
    variants: {
      size: {
        base: "h-1.5",
        medium: "h-2",
        large: "h-2.5",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
);
const sliderThumbVariants = cva(
  "block rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        base: "h-4 w-4",
        medium: "h-5 w-5",
        large: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
);

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
  VariantProps<typeof sliderTrackVariants>;

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, size, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(sliderThumbVariants({ size }))} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default function SliderSizeDemo() {
  return (
    <div className="mx-auto grid w-full max-w-sm gap-6">
      <Slider defaultValue={[50]} max={100} size="base" step={1} />
      <Slider defaultValue={[50]} max={100} size="medium" step={1} />
      <Slider defaultValue={[50]} max={100} size="large" step={1} />
    </div>
  );
}
```

### Slider Color (`slider-04`)

A slider component with different colors

```tsx
import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace `Slider` component in `@components/ui/slider.tsx` with the following code to customize the appearance of the slider.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
  }
>(
  (
    { className, trackClassName, rangeClassName, thumbClassName, ...props },
    ref
  ) => (
    <SliderPrimitive.Root
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      ref={ref}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
          trackClassName
        )}
      >
        <SliderPrimitive.Range
          className={cn("absolute h-full bg-primary", rangeClassName)}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          thumbClassName
        )}
      />
    </SliderPrimitive.Root>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export default function SliderColorDemo() {
  return (
    <div className="mx-auto grid w-full max-w-sm gap-6">
      <Slider
        defaultValue={[50]}
        max={100}
        rangeClassName="bg-green-500"
        step={1}
        thumbClassName="bg-white"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        rangeClassName="bg-indigo-500"
        step={1}
        thumbClassName="bg-white"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        rangeClassName="bg-rose-500"
        step={1}
        thumbClassName="bg-white"
      />
    </div>
  );
}
```

### Slider Shape (`slider-05`)

A slider component with different shapes

```tsx
import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace `Slider` component in `@components/ui/slider.tsx` with the following code to customize the appearance of the slider.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
  }
>(
  (
    { className, trackClassName, rangeClassName, thumbClassName, ...props },
    ref
  ) => (
    <SliderPrimitive.Root
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      ref={ref}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
          trackClassName
        )}
      >
        <SliderPrimitive.Range
          className={cn("absolute h-full bg-primary", rangeClassName)}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          thumbClassName
        )}
      />
    </SliderPrimitive.Root>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export default function SliderShapeDemo() {
  return (
    <div className="mx-auto grid w-full max-w-sm gap-6">
      <Slider
        defaultValue={[50]}
        max={100}
        rangeClassName="bg-green-500"
        step={1}
        thumbClassName="rounded-none bg-white"
        trackClassName="h-2 rounded-none"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        rangeClassName="bg-indigo-500"
        step={1}
        thumbClassName="rounded-[2px] bg-white"
        trackClassName="h-2 rounded-[2px]"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        rangeClassName="bg-rose-500"
        step={1}
        thumbClassName="bg-white"
        trackClassName="h-2"
      />
    </div>
  );
}
```

### Slider with Label (`slider-06`)

A slider component with a label

```tsx
"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function SliderWithLabelDemo() {
  const [progress, setProgress] = useState([30]);

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Slider max={100} onValueChange={setProgress} step={1} value={progress} />
      <span className="w-[5ch]">{progress[0]}%</span>
    </div>
  );
}
```

### Slider with Thumb Icon (`slider-07`)

A slider component with a custom thumb icon

```tsx
"use client";

import { Settings2 } from "lucide-react";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

export default function SliderWithCustomThumbDemo() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="relative flex w-full max-w-sm flex-col items-center">
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <Settings2 className="h-3.5 w-3.5" />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
```

### Audio Slider (`slider-08`)

A slider component designed for audio controls

```tsx
"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function AudioSliderDemo() {
  const duration = 145;
  const [playbackTime, setPlaybackTime] = React.useState([78]);

  return (
    <div className="w-full max-w-sm">
      <Slider
        defaultValue={playbackTime}
        max={duration}
        onValueChange={setPlaybackTime}
        step={1}
      />
      <div className="mt-1 flex justify-between font-medium text-muted-foreground text-xs">
        <span>{formatDuration(playbackTime[0])}</span>
        <span>{formatDuration(duration)}</span>
      </div>
    </div>
  );
}
```

### Slider with Marks (`slider-09`)

A slider component with marks for specific values

```tsx
import { Slider } from "@/components/ui/slider";

export default function SliderMarksDemo() {
  const ramExpansions = ["4GB", "6GB", "8GB"];

  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={[1]} max={2} step={1} />
      <div className="-mx-1.5 mt-2 flex items-center justify-between text-muted-foreground text-xs">
        {ramExpansions.map((expansion) => (
          <span key={expansion}>{expansion}</span>
        ))}
      </div>
    </div>
  );
}
```

### Slider with Sticky Label (`slider-10`)

A slider component with a sticky label

```tsx
"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";
import { Badge } from "@/components/ui/badge";

export default function SliderWithStickyLabelDemo() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="relative flex w-full max-w-sm flex-col items-center">
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          {/* Sticky label */}
          <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {progress[0]}%
          </Badge>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
```

### Slider with Sticky Label on Hover (`slider-11`)

A slider component with a sticky label that appears on hover

```tsx
"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";
import { Badge } from "@/components/ui/badge";

export default function SliderWithHoverStickyLabelDemo() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="relative flex w-full max-w-sm flex-col items-center">
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="group block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          {/* Sticky label */}
          <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform group-hover:scale-100">
            {progress[0]}%
          </Badge>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
```

### Slider with Sticky Label Arrow (`slider-12`)

A slider component with a sticky label with arrow

```tsx
"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";
import { Badge } from "@/components/ui/badge";

export default function SliderWithArrowStickyLabelDemo() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="relative flex w-full max-w-sm flex-col items-center">
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          {/* Sticky label */}
          <Badge className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible">
            <span>{progress[0]}%</span>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-primary" />
          </Badge>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
```

### Vertical Slider (`slider-13`)

A vertical slider component

```tsx
import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace `Slider` component in `@components/ui/slider.tsx` with the following code to add vertical orientation to the slider.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col",
      className
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5">
      <SliderPrimitive.Range className="absolute h-full bg-primary data-[orientation=vertical]:w-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default function VerticalSliderDemo() {
  return (
    <Slider
      className="mx-auto h-40 w-fit"
      defaultValue={[50]}
      max={100}
      orientation="vertical"
      step={1}
    />
  );
}
```

### Range Slider (`slider-14`)

A range slider component

```tsx
"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace `Slider` component in `@components/ui/slider.tsx` with the following code to customize the appearance of the slider.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {(props.value ?? props.defaultValue)?.map((_, index) => (
      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        key={index}
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default function RangeSliderDemo() {
  const [value, setValue] = React.useState([30, 80]);
  const [from, to] = value;

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="flex w-full items-center justify-between gap-2">
        <span className="text-muted-foreground text-sm">0</span>
        <Slider max={100} onValueChange={setValue} step={1} value={value} />
        <span className="text-muted-foreground text-sm">100</span>
      </div>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        {from} - {to}
      </p>
    </div>
  );
}
```

### Slider with Multiple Thumbs (`slider-15`)

A slider component with multiple thumbs

```tsx
"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace `Slider` component in `@components/ui/slider.tsx` with the following code to customize the appearance of the slider.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {(props.value ?? props.defaultValue)?.map((_, index) => (
      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        key={index}
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default function MultipleThumbsSliderDemo() {
  const [value, setValue] = React.useState([20, 40, 80]);

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="flex w-full items-center justify-between gap-2">
        <span className="text-muted-foreground text-sm">0</span>
        <Slider max={100} onValueChange={setValue} step={1} value={value} />
        <span className="text-muted-foreground text-sm">100</span>
      </div>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        {value.join(" - ")}
      </p>
    </div>
  );
}
```
