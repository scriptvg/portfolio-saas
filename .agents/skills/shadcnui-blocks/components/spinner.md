# Spinner (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/spinner](https://www.shadcnui-blocks.com/components/spinner).
11 variant(s). Install base UI with `pnpm dlx shadcn@latest add spinner` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `spinner-01` | Default Spinner | A default spinner component |
| `spinner-02` | Circle Spinner | A circular spinner component |
| `spinner-03` | Pinwheel Spinner | A pinwheel spinner component |
| `spinner-04` | Spinner Colors | A spinner component with different colors |
| `spinner-05` | Spinner Sizes | A spinner component with different sizes |
| `spinner-06` | Swirling Effect Spinner | A spinner component with swirling effect |
| `spinner-07` | Spinner Circle 1 | A circle spinner component variation 1 |
| `spinner-08` | Spinner Circle 2 | A circle spinner component variation 2 |
| `spinner-09` | Spinner Circle 3 | A circle spinner component variation 3 |
| `spinner-10` | Spinner Circle 4 | A circle spinner component variation 4 |
| `spinner-11` | Spinner Circle 5 | A circle spinner component variation 5 |

## Variant source

### Default Spinner (`spinner-01`)

A default spinner component

```tsx
import { LoaderIcon } from "lucide-react";

export default function SpinnerDemo() {
  return <LoaderIcon className="animate-spin" />;
}
```

### Circle Spinner (`spinner-02`)

A circular spinner component

```tsx
import { Loader2Icon } from "lucide-react";

export default function SpinnerCircleDemo() {
  return <Loader2Icon className="animate-spin" />;
}
```

### Pinwheel Spinner (`spinner-03`)

A pinwheel spinner component

```tsx
import { LoaderPinwheel } from "lucide-react";

export default function SpinnerPinwheelDemo() {
  return <LoaderPinwheel className="animate-spin" />;
}
```

### Spinner Colors (`spinner-04`)

A spinner component with different colors

```tsx
import { Loader2Icon } from "lucide-react";

export default function SpinnerColorsDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Loader2Icon className="animate-spin" />
      <Loader2Icon className="animate-spin text-green-500" />
      <Loader2Icon className="animate-spin text-indigo-500" />
      <Loader2Icon className="animate-spin text-rose-500" />
    </div>
  );
}
```

### Spinner Sizes (`spinner-05`)

A spinner component with different sizes

```tsx
import { Loader2Icon } from "lucide-react";

export default function SpinnerSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loader2Icon className="h-4 w-4 animate-spin" />
      <Loader2Icon className="h-5 w-5 animate-spin" />
      <Loader2Icon className="h-6 w-6 animate-spin" />
      <Loader2Icon className="h-8 w-8 animate-spin" />
    </div>
  );
}
```

### Swirling Effect Spinner (`spinner-06`)

A spinner component with swirling effect

```tsx
const SwirlingEffectSpinner = () => {
  return (
    <>
      <style>
        {`@keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        
          @keyframes spin2 {
            0% {
              stroke-dasharray: 1, 800;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 400, 400;
              stroke-dashoffset: -200px;
            }
            100% {
              stroke-dasharray: 800, 1;
              stroke-dashoffset: -800px;
            }
          }
        
          .spin2 {
            transform-origin: center;
            animation: spin2 1.5s ease-in-out infinite,
              spin 2s linear infinite;
            animation-direction: alternate;
          }`}
      </style>

      <svg
        className="h-14 w-14"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="spin2 stroke-primary"
          cx="400"
          cy="400"
          fill="none"
          r="200"
          strokeDasharray="700 1400"
          strokeLinecap="round"
          strokeWidth="50"
        />
      </svg>
    </>
  );
};

export default SwirlingEffectSpinner;
```

### Spinner Circle 1 (`spinner-07`)

A circle spinner component variation 1

```tsx
const SpinnerCircle1 = () => (
  <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-transparent border-t-primary" />
);

export default SpinnerCircle1;
```

### Spinner Circle 2 (`spinner-08`)

A circle spinner component variation 2

```tsx
const SpinnerCircle2 = () => (
  <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-transparent border-t-primary border-r-primary" />
);

export default SpinnerCircle2;
```

### Spinner Circle 3 (`spinner-09`)

A circle spinner component variation 3

```tsx
const SpinnerCircle3 = () => (
  <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-secondary border-t-primary" />
);

export default SpinnerCircle3;
```

### Spinner Circle 4 (`spinner-10`)

A circle spinner component variation 4

```tsx
const SpinnerCircle4 = () => (
  <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-primary/10 border-t-primary border-b-primary" />
);

export default SpinnerCircle4;
```

### Spinner Circle 5 (`spinner-11`)

A circle spinner component variation 5

```tsx
const SpinnerCircle5 = () => (
  <div className="h-7 w-7 animate-spin rounded-full border-[3px] border-white border-t-primary border-b-primary" />
);

export default SpinnerCircle5;
```
