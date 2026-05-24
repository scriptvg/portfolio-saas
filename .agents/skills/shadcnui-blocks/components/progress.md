# Progress (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/progress](https://www.shadcnui-blocks.com/components/progress).
12 variant(s). Install base UI with `pnpm dlx shadcn@latest add progress` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `progress-01` | Default Progress | A default linear progress component |
| `progress-02` | Linear Progress with Label | A linear progress component with label |
| `progress-03` | Linear Progress with Custom Color | A linear progress component with custom color |
| `progress-04` | Rounded Progress | A progress component with rounded styling |
| `progress-05` | Gradient Progress | A progress component with gradient styling |
| `progress-06` | Animated Progress | A progress component with animation effects |
| `progress-07` | Circular Progress | A circular progress component |
| `progress-08` | Circular Progress with Label | A circular progress component with label |
| `progress-09` | Circular Progress with Custom Label | A circular progress component with custom label |
| `progress-10` | Circular Progress with Custom Color | A circular progress component with custom color |
| `progress-11` | Circular Progress with Custom Shape | A circular progress component with custom shape |
| `progress-12` | Circular Progress with Custom Stroke Width | A circular progress component with custom stroke width |

## Variant source

### Default Progress (`progress-01`)

A default linear progress component

```tsx
"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress className="w-[60%]" value={progress} />;
}
```

### Linear Progress with Label (`progress-02`)

A linear progress component with label

```tsx
"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export default function LinearProgressWithLabelDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-3">
      <Progress className="w-[60%]" value={progress} />
      <span className="text-sm">{progress}%</span>
    </div>
  );
}
```

### Linear Progress with Custom Color (`progress-03`)

A linear progress component with custom color

```tsx
"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export default function ProgressColorDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <Progress className="w-[60%] [&>div]:bg-green-500" value={progress} />
      <Progress className="w-[60%] [&>div]:bg-indigo-500" value={progress} />
      <Progress className="w-[60%] [&>div]:bg-rose-500" value={progress} />
    </div>
  );
}
```

### Rounded Progress (`progress-04`)

A progress component with rounded styling

```tsx
"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export default function RoundedLinearProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress className="w-[60%] [&>div]:rounded-r-full" value={progress} />
  );
}
```

### Gradient Progress (`progress-05`)

A progress component with gradient styling

```tsx
"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export default function ProgressGradientDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      className="w-[60%] [&>div]:rounded-l-full [&>div]:bg-linear-to-r [&>div]:from-cyan-400 [&>div]:via-sky-500 [&>div]:to-indigo-500"
      value={progress}
    />
  );
}
```

### Animated Progress (`progress-06`)

A progress component with animation effects

```tsx
"use client";

import { Progress as ProgressPrimitive } from "radix-ui";
import * as React from "react";

export default function ProgressAnimationDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[60%]">
      <style>
        {`@keyframes gradient-flow {
            0% { background-position: 100% 0%; }
            100% { background-position: -100% 0%; }
          }
          .gradient-flow {
            background: linear-gradient(
              90deg,
              var(--primary),
              color-mix(in oklch, var(--primary) 40%, transparent),
              var(--primary)
            );
            background-size: 200% 100%;
            animation: gradient-flow 2s linear infinite;
          }
          `}
      </style>
      <ProgressPrimitive.Root className="relative h-1 w-full overflow-hidden rounded-full bg-primary/20">
        <ProgressPrimitive.Indicator
          className="gradient-flow relative h-full w-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
}
```

### Circular Progress (`progress-07`)

A circular progress component

```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        className="relative"
        height={size}
        style={{ transform: "rotate(-90deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-primary/25", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <circle
          className={cn("stroke-primary", progressClassName)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-md",
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressDemo() {
  const [progress, setProgress] = React.useState([13]);

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center">
      <CircularProgress size={120} strokeWidth={10} value={progress[0]} />
      <Slider
        className="mt-6"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      />
    </div>
  );
}
```

### Circular Progress with Label (`progress-08`)

A circular progress component with label

```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        className="relative"
        height={size}
        style={{ transform: "rotate(-90deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-primary/25", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <circle
          className={cn("stroke-primary", progressClassName)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-md",
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressWithLabelDemo() {
  const [progress, setProgress] = React.useState([13]);

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center">
      <CircularProgress
        labelClassName="text-xl font-bold"
        showLabel
        size={120}
        strokeWidth={10}
        value={progress[0]}
      />
      <Slider
        className="mt-6"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      />
    </div>
  );
}
```

### Circular Progress with Custom Label (`progress-09`)

A circular progress component with custom label

```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        className="relative"
        height={size}
        style={{ transform: "rotate(-90deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-primary/25", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <circle
          className={cn("stroke-primary", progressClassName)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-md",
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressWithCustomLabelDemo() {
  const [progress, setProgress] = React.useState([13]);

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center">
      <CircularProgress
        labelClassName="text-xl font-bold"
        renderLabel={(progress) => `${progress}%`}
        showLabel
        size={120}
        strokeWidth={10}
        value={progress[0]}
      />
      <Slider
        className="mt-6"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      />
    </div>
  );
}
```

### Circular Progress with Custom Color (`progress-10`)

A circular progress component with custom color

```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        className="relative"
        height={size}
        style={{ transform: "rotate(-90deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-primary/25", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <circle
          className={cn("stroke-primary", progressClassName)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-md",
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressColorDemo() {
  const [progress, setProgress] = React.useState([13]);

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center">
      <div className="flex items-center gap-1">
        <CircularProgress
          className="stroke-indigo-500/25"
          labelClassName="text-xl font-bold"
          progressClassName="stroke-indigo-600"
          renderLabel={(progress) => `${progress}%`}
          showLabel
          size={120}
          strokeWidth={10}
          value={progress[0]}
        />
        <CircularProgress
          className="stroke-orange-500/25"
          labelClassName="text-xl font-bold"
          progressClassName="stroke-orange-600"
          renderLabel={(progress) => `${progress}%`}
          showLabel
          size={120}
          strokeWidth={10}
          value={progress[0]}
        />
      </div>
      <Slider
        className="mt-6"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      />
    </div>
  );
}
```

### Circular Progress with Custom Shape (`progress-11`)

A circular progress component with custom shape

```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        className="relative"
        height={size}
        style={{ transform: "rotate(-90deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-primary/25", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <circle
          className={cn("stroke-primary", progressClassName)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-md",
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressShapeDemo() {
  const [progress, setProgress] = React.useState([13]);

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center">
      <div className="flex items-center gap-1">
        <CircularProgress
          labelClassName="text-xl font-bold"
          renderLabel={(progress) => `${progress}%`}
          shape="round"
          showLabel
          size={120}
          strokeWidth={10}
          value={progress[0]}
        />
        <CircularProgress
          labelClassName="text-xl font-bold"
          renderLabel={(progress) => `${progress}%`}
          shape="square"
          showLabel
          size={120}
          strokeWidth={10}
          value={progress[0]}
        />
      </div>
      <Slider
        className="mt-6"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      />
    </div>
  );
}
```

### Circular Progress with Custom Stroke Width (`progress-12`)

A circular progress component with custom stroke width

```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        className="relative"
        height={size}
        style={{ transform: "rotate(-90deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-primary/25", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <circle
          className={cn("stroke-primary", progressClassName)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-md",
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressStrokeWidthDemo() {
  const [progress, setProgress] = React.useState([13]);

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center">
      <div className="flex items-center gap-1">
        <CircularProgress
          labelClassName="text-xl font-bold"
          renderLabel={(progress) => `${progress}%`}
          showLabel
          size={120}
          strokeWidth={10}
          value={progress[0]}
        />
        <CircularProgress
          circleStrokeWidth={12}
          labelClassName="text-xl font-bold"
          progressStrokeWidth={6}
          renderLabel={(progress) => `${progress}%`}
          showLabel
          size={120}
          value={progress[0]}
        />
        <CircularProgress
          circleStrokeWidth={6}
          labelClassName="text-xl font-bold"
          progressStrokeWidth={10}
          renderLabel={(progress) => `${progress}%`}
          showLabel
          size={120}
          value={progress[0]}
        />
      </div>
      <Slider
        className="mt-6"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      />
    </div>
  );
}
```
