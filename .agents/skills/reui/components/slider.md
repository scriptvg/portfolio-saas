# Slider (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

12 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-slider-1` | Basic slider. | registry:block | Basic slider. |
| `c-slider-2` | Disabled slider | registry:block | Disabled slider |
| `c-slider-3` | Slider with multiple discrete values | registry:block | Slider with multiple discrete values |
| `c-slider-4` | Vertical slider with range selection | registry:block | Vertical slider with range selection |
| `c-slider-5` | Slider with controlled value tracking | registry:block | Slider with controlled value tracking |
| `c-slider-6` | Slider with range selection | registry:block | Slider with range selection |
| `c-slider-7` | Slider synced with number input | registry:block | Slider synced with number input |
| `c-slider-8` | Color temperature slider | registry:block | Color temperature slider |
| `c-slider-9` | Slider with reference labels | registry:block | Slider with reference labels |
| `c-slider-10` | Slider with tick marks | registry:block | Slider with tick marks |
| `c-slider-11` | Slider with dynamic tooltip indicator | registry:block | Slider with dynamic tooltip indicator |
| `c-slider-12` | Rating slider with emoji feedback | registry:block | Rating slider with emoji feedback |

## Source

### Basic slider. (`c-slider-1`)

Target: `components/examples/c-slider-1.tsx`

Basic slider.

```tsx
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs items-center justify-center">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  )
}
```

### Disabled slider (`c-slider-2`)

Target: `components/examples/c-slider-2.tsx`

Disabled slider

```tsx
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs items-center justify-center">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  )
}
```

### Slider with multiple discrete values (`c-slider-3`)

Target: `components/examples/c-slider-3.tsx`

Slider with multiple discrete values

```tsx
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs items-center justify-center">
      <Slider defaultValue={[10, 40, 80]} max={100} step={10} />
    </div>
  )
}
```

### Vertical slider with range selection (`c-slider-4`)

Target: `components/examples/c-slider-4.tsx`

Vertical slider with range selection

```tsx
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-12">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        orientation="vertical"
        className="h-40"
      />
      <Slider
        defaultValue={[25, 75]}
        max={100}
        step={5}
        orientation="vertical"
        className="h-40"
      />
    </div>
  )
}
```

### Slider with controlled value tracking (`c-slider-5`)

Target: `components/examples/c-slider-5.tsx`

Slider with controlled value tracking

```tsx
"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  const [value, setValue] = useState([0.3, 0.7])

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-controlled" className="text-sm font-medium">
          Controlled Range
        </Label>
        <span className="text-secondary-foreground text-xs font-semibold">
          {value[0]?.toFixed(1)} – {value[1]?.toFixed(1)}
        </span>
      </div>
      <Slider
        id="slider-controlled"
        value={value}
        onValueChange={(val) => setValue(val as number[])}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  )
}
```

### Slider with range selection (`c-slider-6`)

Target: `components/examples/c-slider-6.tsx`

Slider with range selection

```tsx
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs items-center justify-center">
      <Slider defaultValue={[25, 75]} max={100} step={5} />
    </div>
  )
}
```

### Slider synced with number input (`c-slider-7`)

Target: `components/examples/c-slider-7.tsx`

Slider synced with number input

```tsx
"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  const [value, setValue] = useState(50)

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="slider-input" className="text-sm font-medium">
          Opacity
        </Label>
        <div className="flex items-center gap-1.5">
          <Input
            id="slider-input"
            type="number"
            value={value}
            onChange={(e) => {
              const v = Number(e.target.value)
              if (v >= 0 && v <= 100) setValue(v)
            }}
            min={0}
            max={100}
            className="h-8 w-16 text-center text-sm tabular-nums"
          />
          <span className="text-muted-foreground text-xs">%</span>
        </div>
      </div>
      <Slider
        value={[value]}
        onValueChange={(val) =>
          setValue(
            Array.isArray(val) ? ((val[0] as number) ?? 50) : (val as number)
          )
        }
        max={100}
        step={1}
      />
    </div>
  )
}
```

### Color temperature slider (`c-slider-8`)

Target: `components/examples/c-slider-8.tsx`

Color temperature slider

```tsx
"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  const [temperature, setTemperature] = useState(4500)

  const getLabel = (temp: number) => {
    if (temp <= 3000) return "Warm"
    if (temp <= 4500) return "Neutral"
    if (temp <= 5500) return "Daylight"
    return "Cool"
  }

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Color Temperature</Label>
        <span className="text-muted-foreground text-xs font-medium tabular-nums">
          {temperature}K &middot; {getLabel(temperature)}
        </span>
      </div>
      <div
        className="h-2 rounded-full"
        style={{
          background:
            "linear-gradient(to right, #ff8a2b, #ffd4a3, #fff5e6, #e8f0ff, #a3c9ff)",
        }}
      />
      <Slider
        value={[temperature]}
        onValueChange={(val) =>
          setTemperature(Array.isArray(val) ? (val[0] ?? 4500) : val)
        }
        min={2700}
        max={6500}
        step={100}
      />
    </div>
  )
}
```

### Slider with reference labels (`c-slider-9`)

Target: `components/examples/c-slider-9.tsx`

Slider with reference labels

```tsx
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <Label className="text-sm font-medium">Storage</Label>
      <Slider defaultValue={[15]} max={35} min={5} />
      <span
        aria-hidden="true"
        className="text-muted-foreground flex w-full items-center justify-between text-xs font-medium"
      >
        <span>5 GB</span>
        <span>20 GB</span>
        <span>35 GB</span>
      </span>
    </div>
  )
}
```

### Slider with tick marks (`c-slider-10`)

Target: `components/examples/c-slider-10.tsx`

Slider with tick marks

```tsx
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  const max = 12
  const skipInterval = 2
  const ticks = Array.from({ length: max + 1 }, (_, i) => i)

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <Label className="text-sm font-medium">Duration (months)</Label>
      <Slider defaultValue={[5]} max={max} />
      <span
        aria-hidden="true"
        className="text-muted-foreground flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
      >
        {ticks.map((tick) => (
          <span
            key={tick}
            className="flex w-0 flex-col items-center justify-center gap-2"
          >
            <span
              className={cn(
                "bg-muted-foreground/70 h-1 w-px",
                tick % skipInterval !== 0 && "h-0.5"
              )}
            />
            <span className={cn(tick % skipInterval !== 0 && "opacity-0")}>
              {tick}
            </span>
          </span>
        ))}
      </span>
    </div>
  )
}
```

### Slider with dynamic tooltip indicator (`c-slider-11`)

Target: `components/examples/c-slider-11.tsx`

Slider with dynamic tooltip indicator

```tsx
"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Pattern() {
  const [value, setValue] = useState(50)
  const min = 0
  const max = 100
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <Label className="text-sm font-medium">Volume</Label>
      <div className="relative pt-7">
        <div
          className="bg-foreground text-background absolute top-0 rounded px-2 py-0.5 text-xs font-semibold tabular-nums"
          style={{
            left: `${percentage}%`,
            transform: "translateX(-50%)",
          }}
        >
          {value}%
          <div className="bg-foreground absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45" />
        </div>
        <Slider
          value={[value]}
          onValueChange={(val) =>
            setValue(Array.isArray(val) ? (val[0] ?? 50) : val)
          }
          min={min}
          max={max}
          step={1}
        />
      </div>
    </div>
  )
}
```

### Rating slider with emoji feedback (`c-slider-12`)

Target: `components/examples/c-slider-12.tsx`

Rating slider with emoji feedback

```tsx
"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const emojis = ["😡", "🙁", "😐", "🙂", "😍"]
const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"]

export function Pattern() {
  const [value, setValue] = useState(3)

  return (
    <div className="mx-auto grid w-full max-w-sm gap-3">
      <Label className="text-sm font-medium">Rate your experience</Label>
      <div className="flex items-center gap-3">
        <Slider
          value={[value]}
          onValueChange={(val) =>
            setValue(Array.isArray(val) ? (val[0] ?? 3) : val)
          }
          min={1}
          max={5}
          step={1}
        />
        <span className="text-2xl" aria-hidden="true">
          {emojis[value - 1]}
        </span>
      </div>
      <span className="text-muted-foreground text-center text-xs font-medium">
        {labels[value - 1]}
      </span>
    </div>
  )
}
```
