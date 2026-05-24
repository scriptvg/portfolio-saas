# Chart (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

25 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-chart-1` | Basic bar chart | registry:block | Basic bar chart |
| `c-chart-2` | Multi-dataset bar chart | registry:block | Multi-dataset bar chart |
| `c-chart-3` | Diagonal stripe bar chart | registry:block | Diagonal stripe bar chart |
| `c-chart-4` | Dotted pattern bar chart | registry:block | Dotted pattern bar chart |
| `c-chart-5` | Striped and solid bar chart | registry:block | Striped and solid bar chart |
| `c-chart-6` | 3D gradient bar chart | registry:block | 3D gradient bar chart |
| `c-chart-7` | Gradient bar chart | registry:block | Gradient bar chart |
| `c-chart-8` | 3D isometric bar chart | registry:block | 3D isometric bar chart |
| `c-chart-9` | Dotted and solid bar chart | registry:block | Dotted and solid bar chart |
| `c-chart-10` | Duotone gradient bar chart | registry:block | Duotone gradient bar chart |
| `c-chart-11` | Animated monochrome bar chart | registry:block | Animated monochrome bar chart |
| `c-chart-12` | Vertical bar chart | registry:block | Vertical bar chart |
| `c-chart-13` | Gradient area chart with stripe overlay | registry:block | Gradient area chart with stripe overlay |
| `c-chart-14` | Stacked area chart with dashed strokes | registry:block | Stacked area chart with dashed strokes |
| `c-chart-15` | Step area chart with dotted pattern fill | registry:block | Step area chart with dotted pattern fill |
| `c-chart-16` | Area chart with glowing dot markers | registry:block | Area chart with glowing dot markers |
| `c-chart-17` | Forecast line chart with stripe pattern zone | registry:block | Forecast line chart with stripe pattern zone |
| `c-chart-18` | Stacked area chart with crosshatch pattern fill | registry:block | Stacked area chart with crosshatch pattern fill |
| `c-chart-19` | Donut chart with center total | registry:block | Donut chart with center total |
| `c-chart-20` | Donut chart with center stats | registry:block | Donut chart with center stats |
| `c-chart-21` | Bug priority pie with stripe patterns | registry:block | Bug priority pie with stripe patterns |
| `c-chart-22` | Active segment donut with center label | registry:block | Active segment donut with center label |
| `c-chart-23` | Radar chart with gradient fill | registry:block | Radar chart with gradient fill |
| `c-chart-24` | Filled radar with glowing stroke | registry:block | Filled radar with glowing stroke |
| `c-chart-25` | Lighthouse scores radial with labels | registry:block | Lighthouse scores radial with labels |

## Source

### Basic bar chart (`c-chart-1`)

Target: `components/examples/c-chart-1.tsx`

Basic bar chart

```tsx
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 300 },
  { month: "Feb", desktop: 550 },
  { month: "Mar", desktop: 400 },
  { month: "Apr", desktop: 630 },
  { month: "May", desktop: 460 },
  { month: "Jun", desktop: 780 },
  { month: "Jul", desktop: 390 },
  { month: "Aug", desktop: 925 },
  { month: "Sep", desktop: 645 },
  { month: "Oct", desktop: 530 },
  { month: "Nov", desktop: 700 },
  { month: "Dec", desktop: 270 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBar() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Revenue Growth
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +5.2%
          </Badge>
        </CardTitle>
        <CardDescription>Monthly revenue performance tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="bg-chart-1 rounded-xs h-2.5 w-2.5 shrink-0" />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        ${value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Multi-dataset bar chart (`c-chart-2`)

Target: `components/examples/c-chart-2.tsx`

Multi-dataset bar chart

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "January", desktop: 120, mobile: 80 },
  { month: "February", desktop: 250, mobile: 200 },
  { month: "March", desktop: 230, mobile: 120 },
  { month: "April", desktop: 70, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 210, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBar() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Market Share
          <Badge variant="warning-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +12%
          </Badge>
        </CardTitle>
        <CardDescription>Departmental performance comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Diagonal stripe bar chart (`c-chart-3`)

Target: `components/examples/c-chart-3.tsx`

Diagonal stripe bar chart

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 300 },
  { month: "Feb", desktop: 550 },
  { month: "Mar", desktop: 400 },
  { month: "Apr", desktop: 630 },
  { month: "May", desktop: 460 },
  { month: "Jun", desktop: 780 },
  { month: "Jul", desktop: 390 },
  { month: "Aug", desktop: 925 },
  { month: "Sep", desktop: 645 },
  { month: "Oct", desktop: 530 },
  { month: "Nov", desktop: 700 },
  { month: "Dec", desktop: 270 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarPattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Product Sales
          <Badge variant="destructive-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +4.3%
          </Badge>
        </CardTitle>
        <CardDescription>Annual sales trend visualization</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 12,
              bottom: 12,
              left: 12,
            }}
          >
            <defs>
              <pattern
                id="chart5-diagonal-stripe-pattern"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
              >
                <rect
                  width="8"
                  height="8"
                  fill="var(--color-desktop)"
                  opacity="0.1"
                />
                <path
                  d="M0,8 L8,0 M4,12 L12,4 M-4,4 L4,-4"
                  stroke="var(--color-desktop)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <path
                  d="M2,10 L10,2 M6,14 L14,6 M-2,6 L6,-2"
                  stroke="var(--color-desktop)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="url(#chart5-diagonal-stripe-pattern)"
              stroke="var(--color-desktop)"
              strokeWidth={1}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Dotted pattern bar chart (`c-chart-4`)

Target: `components/examples/c-chart-4.tsx`

Dotted pattern bar chart

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 300 },
  { month: "Feb", desktop: 550 },
  { month: "Mar", desktop: 400 },
  { month: "Apr", desktop: 630 },
  { month: "May", desktop: 460 },
  { month: "Jun", desktop: 780 },
  { month: "Jul", desktop: 390 },
  { month: "Aug", desktop: 925 },
  { month: "Sep", desktop: 645 },
  { month: "Oct", desktop: 530 },
  { month: "Nov", desktop: 700 },
  { month: "Dec", desktop: 270 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarPattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Website Traffic
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +8%
          </Badge>
        </CardTitle>
        <CardDescription>Monthly visitor behavior patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 12,
              bottom: 12,
              left: 12,
            }}
          >
            <defs>
              <pattern
                id="chart4-elegant-dotted-pattern"
                x="0"
                y="0"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="5"
                  height="5"
                  fill="var(--color-desktop)"
                  opacity="0.1"
                />
                <circle
                  cx="5"
                  cy="5"
                  r="1.4"
                  fill="var(--color-desktop)"
                  opacity={0.6}
                ></circle>
              </pattern>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="url(#chart4-elegant-dotted-pattern)"
              stroke="var(--color-desktop)"
              strokeWidth={1}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Striped and solid bar chart (`c-chart-5`)

Target: `components/examples/c-chart-5.tsx`

Striped and solid bar chart

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 340, mobile: 180 },
  { month: "Feb", desktop: 870, mobile: 420 },
  { month: "Mar", desktop: 510, mobile: 280 },
  { month: "Apr", desktop: 620, mobile: 350 },
  { month: "May", desktop: 450, mobile: 240 },
  { month: "Jun", desktop: 780, mobile: 390 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarPattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          User Acquisition
          <Badge variant="destructive-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingDownIcon"
              tabler="IconTrendingDown"
              hugeicons="TradeDownIcon"
              phosphor="TrendDownIcon"
              remixicon="RiArrowRightDownLongLine"
              aria-hidden="true"
            />
            -15%
          </Badge>
        </CardTitle>
        <CardDescription>Quarterly user growth tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 12,
              bottom: 12,
              left: 12,
            }}
          >
            <defs>
              <pattern
                id="chart3-diagonal-stripe-pattern"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
              >
                <rect
                  width="8"
                  height="8"
                  fill="var(--color-desktop)"
                  opacity="0.1"
                />
                <path
                  d="M0,8 L8,0 M4,12 L12,4 M-4,4 L4,-4"
                  stroke="var(--color-desktop)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <path
                  d="M2,10 L10,2 M6,14 L14,6 M-2,6 L6,-2"
                  stroke="var(--color-desktop)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </pattern>
              <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.9"
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.6"
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="url(#chart3-diagonal-stripe-pattern)"
              stroke="var(--color-desktop)"
              strokeWidth={1}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stroke="var(--color-mobile)"
              strokeWidth={1}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### 3D gradient bar chart (`c-chart-6`)

Target: `components/examples/c-chart-6.tsx`

3D gradient bar chart

```tsx
"use client"

import { SVGProps } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 340 },
  { month: "Feb", desktop: 600 },
  { month: "Mar", desktop: 510 },
  { month: "Apr", desktop: 620 },
  { month: "May", desktop: 450 },
  { month: "Jun", desktop: 780 },
  { month: "Jul", desktop: 390 },
  { month: "Aug", desktop: 920 },
  { month: "Sep", desktop: 640 },
  { month: "Oct", desktop: 530 },
  { month: "Nov", desktop: 800 },
  { month: "Dec", desktop: 270 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const True3DBar = (
  props: SVGProps<SVGRectElement> & {
    dataKey?: string
    payload?: any
    index?: number
  }
) => {
  const { fill, x, y, width, height } = props
  const barX = x as number
  const barY = y as number
  const barWidth = width as number
  const barHeight = height as number

  // 3D perspective parameters
  const depth = Math.min(barWidth * 0.3, 15) // Maximum depth of 15px
  const angle = 30 // Isometric angle

  return (
    <g>
      {/* Back face */}
      <rect
        x={barX + depth}
        y={barY - depth}
        width={barWidth}
        height={barHeight}
        fill="url(#bar-gradient-back)"
        rx="3"
      />

      {/* Right side face */}
      <polygon
        points={`${barX + barWidth + 3},${barY - 3} ${barX + barWidth + depth - 3},${barY - depth + 3} ${barX + barWidth + depth - 3},${barY + barHeight - depth - 3} ${barX + barWidth + 3},${barY + barHeight - 3}`}
        fill="url(#bar-gradient-side)"
      />

      {/* Top face */}
      <polygon
        points={`${barX + 3},${barY - 3} ${barX + barWidth - 3},${barY - 3} ${barX + barWidth + depth - 3},${barY - depth + 3} ${barX + depth + 3},${barY - depth + 3}`}
        fill="url(#bar-gradient-top)"
      />

      {/* Front face */}
      <rect
        x={barX}
        y={barY}
        width={barWidth}
        height={barHeight}
        fill="url(#bar-gradient-front)"
        rx="3"
      />
    </g>
  )
}

export function Chart3D() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Regional Performance
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +15.7%
          </Badge>
        </CardTitle>
        <CardDescription>Global sales distribution by region</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 40,
              right: 40,
              bottom: 20,
              left: 20,
            }}
            barCategoryGap="20%"
          >
            <defs>
              <linearGradient
                id="bar-gradient-front"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.9"
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.7"
                />
              </linearGradient>
              <linearGradient
                id="bar-gradient-back"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.5"
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.3"
                />
              </linearGradient>
              <linearGradient
                id="bar-gradient-side"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.6"
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.4"
                />
              </linearGradient>
              <linearGradient id="bar-gradient-top" x1="0" y1="0" x2="1" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.7"
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.5"
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="bg-chart-1 h-2.5 w-2.5 shrink-0 rounded-xs" />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="url(#bar-gradient-front)"
              shape={<True3DBar />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Gradient bar chart (`c-chart-7`)

Target: `components/examples/c-chart-7.tsx`

Gradient bar chart

```tsx
"use client"

import { CSSProperties, SVGProps } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 120 },
  { month: "Feb", desktop: 250 },
  { month: "Mar", desktop: 200 },
  { month: "Apr", desktop: 170 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 210 },
  { month: "Jul", desktop: 150 },
  { month: "Aug", desktop: 230 },
  { month: "Sep", desktop: 180 },
  { month: "Oct", desktop: 190 },
  { month: "Nov", desktop: 200 },
  { month: "Dec", desktop: 120 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const CustomGradientBar = (
  props: SVGProps<SVGRectElement> & {
    dataKey?: string
    payload?: any
    index?: number
  }
) => {
  const { fill, x, y, width, height, dataKey } = props
  const barX = x as number
  const barY = y as number
  const barWidth = width as number
  const barHeight = height as number

  return (
    <>
      <defs>
        <linearGradient
          id={`gradient-bar-pattern-${dataKey}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={fill} stopOpacity={0.7} />
          <stop offset="50%" stopColor={fill} stopOpacity={0.4} />
          <stop offset="100%" stopColor={fill} stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <rect
        x={barX}
        y={barY}
        width={barWidth}
        height={barHeight}
        stroke="none"
        fill={`url(#gradient-bar-pattern-${dataKey})`}
        rx="6"
        ry="6"
      />
    </>
  )
}

export function Pattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Engagement Metrics
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +2.4%
          </Badge>
        </CardTitle>
        <CardDescription>
          User interaction and click-through rates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 12,
              bottom: 12,
              left: 12,
            }}
            barCategoryGap="15%"
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              shape={<CustomGradientBar />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### 3D isometric bar chart (`c-chart-8`)

Target: `components/examples/c-chart-8.tsx`

3D isometric bar chart

```tsx
"use client"

import { CSSProperties, SVGProps } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 340 },
  { month: "Feb", desktop: 870 },
  { month: "Mar", desktop: 510 },
  { month: "Apr", desktop: 620 },
  { month: "May", desktop: 450 },
  { month: "Jun", desktop: 780 },
  { month: "Jul", desktop: 390 },
  { month: "Aug", desktop: 920 },
  { month: "Sep", desktop: 640 },
  { month: "Oct", desktop: 530 },
  { month: "Nov", desktop: 800 },
  { month: "Dec", desktop: 270 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

const True3DBar = (
  props: SVGProps<SVGRectElement> & {
    dataKey?: string
    payload?: any
    index?: number
  }
) => {
  const { fill, x, y, width, height } = props
  const barX = x as number
  const barY = y as number
  const barWidth = width as number
  const barHeight = height as number

  // 3D perspective parameters
  const depth = Math.min(barWidth * 0.3, 15) // Maximum depth of 15px
  const angle = 30 // Isometric angle

  return (
    <g>
      {/* Back face */}
      <rect
        x={barX + depth}
        y={barY - depth}
        width={barWidth}
        height={barHeight}
        fill={fill}
        opacity="0.6"
        rx="3"
      />

      {/* Right side face */}
      <polygon
        points={`${barX + barWidth + 3},${barY - 3} ${barX + barWidth + depth - 3},${barY - depth + 3} ${barX + barWidth + depth - 3},${barY + barHeight - depth - 3} ${barX + barWidth + 3},${barY + barHeight - 3}`}
        fill={fill}
        opacity="0.7"
      />

      {/* Top face */}
      <polygon
        points={`${barX + 3},${barY - 3} ${barX + barWidth - 3},${barY - 3} ${barX + barWidth + depth - 3},${barY - depth + 3} ${barX + depth + 3},${barY - depth + 3}`}
        fill={fill}
        opacity="0.8"
      />

      {/* Front face */}
      <rect
        x={barX}
        y={barY}
        width={barWidth}
        height={barHeight}
        fill={fill}
        rx="3"
      />
    </g>
  )
}

export function Chart3D() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Financial Forecast
          <Badge variant="destructive-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingDownIcon"
              tabler="IconTrendingDown"
              hugeicons="TradeDownIcon"
              phosphor="TrendDownIcon"
              remixicon="RiArrowRightDownLongLine"
              aria-hidden="true"
            />
            +8.2%
          </Badge>
        </CardTitle>
        <CardDescription>Projected vs actual revenue growth</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 40,
              right: 40,
              bottom: 20,
              left: 20,
            }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              shape={<True3DBar />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Dotted and solid bar chart (`c-chart-9`)

Target: `components/examples/c-chart-9.tsx`

Dotted and solid bar chart

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 340, mobile: 180 },
  { month: "Feb", desktop: 870, mobile: 420 },
  { month: "Mar", desktop: 510, mobile: 280 },
  { month: "Apr", desktop: 620, mobile: 350 },
  { month: "May", desktop: 450, mobile: 240 },
  { month: "Jun", desktop: 780, mobile: 390 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarPattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Customer Retention
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +18.4%
          </Badge>
        </CardTitle>
        <CardDescription>Customer loyalty across segments</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 12,
              bottom: 12,
              left: 12,
            }}
          >
            <defs>
              <pattern
                id="chart6-elegant-dotted-pattern"
                x="0"
                y="0"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="5"
                  height="5"
                  fill="var(--color-desktop)"
                  opacity="0.1"
                />
                <circle
                  cx="5"
                  cy="5"
                  r="1.4"
                  fill="var(--color-desktop)"
                  opacity={1}
                ></circle>
              </pattern>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="url(#chart6-elegant-dotted-pattern)"
              stroke="var(--color-desktop)"
              strokeWidth={1}
              radius={[4, 4, 4, 4]}
              style={{ color: "var(--color-desktop)" }}
            />
            <Bar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stroke="var(--color-mobile)"
              strokeWidth={1}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Duotone gradient bar chart (`c-chart-10`)

Target: `components/examples/c-chart-10.tsx`

Duotone gradient bar chart

```tsx
"use client"

import { CSSProperties, SVGProps } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 300 },
  { month: "Feb", desktop: 600 },
  { month: "Mar", desktop: 500 },
  { month: "Apr", desktop: 600 },
  { month: "May", desktop: 400 },
  { month: "Jun", desktop: 780 },
  { month: "Jul", desktop: 390 },
  { month: "Aug", desktop: 920 },
  { month: "Sep", desktop: 640 },
  { month: "Oct", desktop: 530 },
  { month: "Nov", desktop: 800 },
  { month: "Dec", desktop: 270 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const CustomDuotoneBar = (
  props: SVGProps<SVGRectElement> & { dataKey?: string }
) => {
  const { fill, x, y, width, height, dataKey } = props

  return (
    <>
      <rect
        rx={4}
        x={x}
        y={y}
        width={width}
        height={height}
        stroke="none"
        fill={`url(#duotone-bar-pattern-${dataKey})`}
      />
      <defs>
        <linearGradient
          key={dataKey}
          id={`duotone-bar-pattern-${dataKey}`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="50%" stopColor={fill} stopOpacity={0.4} />
          <stop offset="50%" stopColor={fill} />
        </linearGradient>
      </defs>
    </>
  )
}

export function ChartDuotone() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Operational Efficiency
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +12.5%
          </Badge>
        </CardTitle>
        <CardDescription>Supply chain performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 12,
              bottom: 12,
              left: 12,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              shape={<CustomDuotoneBar />}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Animated monochrome bar chart (`c-chart-11`)

Target: `components/examples/c-chart-11.tsx`

Animated monochrome bar chart

```tsx
"use client"

import { CSSProperties, SVGProps, useMemo, useState } from "react"
import { JetBrains_Mono } from "next/font/google"
import { Badge } from "@/components/reui/badge"
import { motion } from "motion/react"
import { Bar, BarChart, XAxis } from "recharts"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

interface CustomBarProps extends SVGProps<SVGSVGElement> {
  setActiveIndex: (index?: number) => void
  index?: number
  activeIndex?: number
  value?: string
}

const CustomBar = (props: CustomBarProps) => {
  const { fill, x, y, width, height, index, activeIndex, value } = props

  // Custom variables
  const xPos = Number(x || 0)
  const realWidth = Number(width || 0)
  const isActive = index === activeIndex
  const collapsedWidth = 6
  // centered bar x-position
  const barX = isActive ? xPos : xPos + (realWidth - collapsedWidth) / 2
  // centered text x-position
  const textX = xPos + realWidth / 2

  // Custom bar shape
  return (
    <g onMouseEnter={() => props.setActiveIndex(index)}>
      {/* rendering the bar with custom position and animated width */}
      <motion.rect
        style={{
          willChange: "transform, width", // helps with performance
        }}
        y={y}
        initial={{ width: collapsedWidth, x: barX }}
        animate={{ width: isActive ? realWidth : collapsedWidth, x: barX }}
        transition={{
          duration: activeIndex === index ? 0.5 : 1,
          type: "spring",
        }}
        height={height}
        fill={fill}
        rx="3"
      />
      {/* Render value text on top of bar */}
      {isActive && (
        <motion.text
          style={{
            willChange: "transform, opacity", // helps with performance
          }}
          className={jetBrainsMono.className}
          key={index}
          initial={{ opacity: 0, y: -10, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(3px)" }}
          transition={{ duration: 0.1 }}
          x={textX}
          y={Number(y) - 5}
          textAnchor="middle"
          fill={fill}
        >
          {value}
        </motion.text>
      )}
    </g>
  )
}

const chartData = [
  { month: "January", desktop: 289 },
  { month: "February", desktop: 345 },
  { month: "March", desktop: 412 },
  { month: "April", desktop: 478 },
  { month: "May", desktop: 534 },
  { month: "June", desktop: 456 },
  { month: "July", desktop: 523 },
  { month: "August", desktop: 589 },
  { month: "September", desktop: 467 },
  { month: "October", desktop: 398 },
  { month: "November", desktop: 356 },
  { month: "December", desktop: 423 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export function Pattern() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  const activeData = useMemo(() => {
    if (activeIndex === undefined) return null
    return chartData[activeIndex]
  }, [activeIndex])

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Conversion Rates
          <span
            className={cn(
              jetBrainsMono.className,
              "ml-auto text-xl tracking-tighter"
            )}
          >
            ${activeData ? activeData.desktop : "123"}
          </span>
          <Badge variant="success-light">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>Real-time funnel conversion tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            onMouseLeave={() => setActiveIndex(undefined)}
            margin={{
              top: 20,
              right: 12,
              bottom: 12,
              left: 12,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              shape={
                <CustomBar
                  setActiveIndex={setActiveIndex}
                  activeIndex={activeIndex}
                />
              }
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Vertical bar chart (`c-chart-12`)

Target: `components/examples/c-chart-12.tsx`

Vertical bar chart

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "Jan", desktop: 342, mobile: 245 },
  { month: "Feb", desktop: 876, mobile: 654 },
  { month: "Mar", desktop: 512, mobile: 389 },
  { month: "Apr", desktop: 629, mobile: 521 },
  { month: "May", desktop: 458, mobile: 367 },
  { month: "Jun", desktop: 781, mobile: 598 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartVerticalBars() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Inventory Levels
          <Badge variant="destructive-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingDownIcon"
              tabler="IconTrendingDown"
              hugeicons="TradeDownIcon"
              phosphor="TrendDownIcon"
              remixicon="RiArrowRightDownLongLine"
              aria-hidden="true"
            />
            -3.2%
          </Badge>
        </CardTitle>
        <CardDescription>Stock availability across warehouses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -10,
              right: 20,
            }}
            barCategoryGap="30%"
          >
            <YAxis
              type="category"
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis
              type="number"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => {
                    return (
                      <div className="border-border/50 mb-0.5 flex flex-col gap-0.5 border-b pb-2">
                        <span className="text-xs font-medium">
                          {value} 2024
                        </span>
                      </div>
                    )
                  }}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {value.toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={2} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Gradient area chart with stripe overlay (`c-chart-13`)

Target: `components/examples/c-chart-13.tsx`

Gradient area chart with stripe overlay

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "January", visitors: 2400 },
  { month: "February", visitors: 2850 },
  { month: "March", visitors: 2600 },
  { month: "April", visitors: 3100 },
  { month: "May", visitors: 2900 },
  { month: "June", visitors: 3400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Website Traffic
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +24.5%
          </Badge>
        </CardTitle>
        <CardDescription>Monthly unique visitor trends</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="chart13-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-visitors)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-visitors)"
                  stopOpacity={0.05}
                />
              </linearGradient>
              <pattern
                id="chart13-stripe"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <path
                  d="M0,6 L6,0"
                  stroke="var(--color-visitors)"
                  strokeWidth="0.8"
                  opacity="0.15"
                />
              </pattern>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => (
                    <div className="border-border/50 mb-0.5 border-b pb-2">
                      <span className="text-xs font-medium">{value} 2024</span>
                    </div>
                  )}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Area
              dataKey="visitors"
              type="natural"
              fill="url(#chart13-gradient)"
              stroke="var(--color-visitors)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Stacked area chart with dashed strokes (`c-chart-14`)

Target: `components/examples/c-chart-14.tsx`

Stacked area chart with dashed strokes

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "January", organic: 1200, paid: 580, referral: 320 },
  { month: "February", organic: 1450, paid: 620, referral: 380 },
  { month: "March", organic: 1380, paid: 540, referral: 420 },
  { month: "April", organic: 1650, paid: 710, referral: 460 },
  { month: "May", organic: 1520, paid: 680, referral: 390 },
  { month: "June", organic: 1800, paid: 750, referral: 510 },
]

const chartConfig = {
  organic: { label: "Organic", color: "var(--chart-1)" },
  paid: { label: "Paid", color: "var(--chart-2)" },
  referral: { label: "Referral", color: "var(--chart-3)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Traffic Sources
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +18.3%
          </Badge>
        </CardTitle>
        <CardDescription>Visitor acquisition by channel</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
          >
            <defs>
              {(["organic", "paid", "referral"] as const).map((key) => (
                <linearGradient
                  key={key}
                  id={`chart14-${key}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={`var(--color-${key})`}
                    stopOpacity={0.5}
                  />
                  <stop
                    offset="95%"
                    stopColor={`var(--color-${key})`}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => (
                    <div className="border-border/50 mb-0.5 border-b pb-2">
                      <span className="text-xs font-medium">{value} 2024</span>
                    </div>
                  )}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Area
              dataKey="referral"
              type="natural"
              stackId="1"
              fill="url(#chart14-referral)"
              fillOpacity={0.4}
              stroke="var(--color-referral)"
              strokeWidth={0.8}
              strokeDasharray="3 3"
            />
            <Area
              dataKey="paid"
              type="natural"
              stackId="1"
              fill="url(#chart14-paid)"
              fillOpacity={0.4}
              stroke="var(--color-paid)"
              strokeWidth={0.8}
              strokeDasharray="3 3"
            />
            <Area
              dataKey="organic"
              type="natural"
              stackId="1"
              fill="url(#chart14-organic)"
              fillOpacity={0.4}
              stroke="var(--color-organic)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Step area chart with dotted pattern fill (`c-chart-15`)

Target: `components/examples/c-chart-15.tsx`

Step area chart with dotted pattern fill

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "January", connections: 48 },
  { month: "February", connections: 62 },
  { month: "March", connections: 62 },
  { month: "April", connections: 85 },
  { month: "May", connections: 85 },
  { month: "June", connections: 110 },
  { month: "July", connections: 110 },
  { month: "August", connections: 135 },
]

const chartConfig = {
  connections: {
    label: "Connections",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Active Connections
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +257%
          </Badge>
        </CardTitle>
        <CardDescription>Server connection pool over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 2, bottom: 0, left: 2 }}
          >
            <defs>
              <pattern
                id="chart15-dot-pattern"
                patternUnits="userSpaceOnUse"
                width="5"
                height="5"
              >
                <rect
                  width="5"
                  height="5"
                  fill="var(--color-connections)"
                  opacity="0.08"
                />
                <circle
                  cx="2.5"
                  cy="2.5"
                  r="1"
                  fill="var(--color-connections)"
                  opacity="0.5"
                />
              </pattern>
              <linearGradient
                id="chart15-stroke-grad"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-connections)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-connections)"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => (
                    <div className="border-border/50 mb-0.5 border-b pb-2">
                      <span className="text-xs font-medium">{value} 2024</span>
                    </div>
                  )}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Area
              dataKey="connections"
              type="stepAfter"
              fill="url(#chart15-dot-pattern)"
              stroke="var(--color-connections)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Area chart with glowing dot markers (`c-chart-16`)

Target: `components/examples/c-chart-16.tsx`

Area chart with glowing dot markers

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { week: "W1", signups: 64 },
  { week: "W2", signups: 78 },
  { week: "W3", signups: 52 },
  { week: "W4", signups: 92 },
  { week: "W5", signups: 85 },
  { week: "W6", signups: 110 },
  { week: "W7", signups: 98 },
  { week: "W8", signups: 125 },
]

const chartConfig = {
  signups: {
    label: "Signups",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          New Signups
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +144%
          </Badge>
        </CardTitle>
        <CardDescription>Weekly user registration trends</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 2, bottom: 0, left: 2 }}
          >
            <defs>
              <linearGradient id="chart16-fill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-signups)"
                  stopOpacity={0.35}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-signups)"
                  stopOpacity={0}
                />
              </linearGradient>
              <filter
                id="chart16-dot-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter
                id="chart16-line-glow"
                x="-10%"
                y="-20%"
                width="120%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-36 gap-2.5"
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Area
              dataKey="signups"
              type="natural"
              fill="url(#chart16-fill)"
              stroke="var(--color-signups)"
              strokeWidth={2}
              filter="url(#chart16-line-glow)"
              dot={{
                r: 4,
                fill: "var(--color-signups)",
                strokeWidth: 2,
                stroke: "var(--background)",
                filter: "url(#chart16-dot-glow)",
              }}
              activeDot={{ r: 6, strokeWidth: 3, stroke: "var(--background)" }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Forecast line chart with stripe pattern zone (`c-chart-17`)

Target: `components/examples/c-chart-17.tsx`

Forecast line chart with stripe pattern zone

```tsx
"use client"

import { CSSProperties } from "react"
import { Area, CartesianGrid, ComposedChart, Line, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", forecast: 2600, forecastArea: 2600 },
  { month: "February", forecast: 4200, forecastArea: 4200 },
  { month: "March", forecast: 2400, forecastArea: 2400 },
  { month: "April", forecast: 5000, forecastArea: 5000 },
  { month: "May", forecast: 2800, forecastArea: 2800 },
  { month: "June", forecast: 5800, forecastArea: 5800 },
  { month: "July", forecast: 3200, forecastArea: 3200 },
  { month: "August", forecast: 6200, forecastArea: 6200 },
  { month: "September", forecast: 3800, forecastArea: 3800 },
]

const chartConfig = {
  forecast: { label: "Forecast", color: "var(--chart-4)" },
  forecastArea: { label: "Forecast", color: "var(--chart-4)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sales Forecast</CardTitle>
        <CardDescription>
          Projected sales performance with trends
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ComposedChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
          >
            <defs>
              <pattern
                id="chart17-forecast-stripe"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <rect
                  width="6"
                  height="6"
                  fill="var(--color-forecast)"
                  opacity="0.04"
                />
                <path
                  d="M0,6 L6,0"
                  stroke="var(--color-forecast)"
                  strokeWidth="0.8"
                  opacity="0.15"
                />
              </pattern>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => (
                    <div className="border-border/50 mb-0.5 border-b pb-2">
                      <span className="text-xs font-medium">{value} 2024</span>
                    </div>
                  )}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="rounded-xs h-2.5 w-2.5 shrink-0 bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {value != null
                          ? `$${Number(value).toLocaleString()}`
                          : "—"}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="forecastArea"
              type="natural"
              fill="url(#chart17-forecast-stripe)"
              stroke="none"
              connectNulls
              legendType="none"
              tooltipType="none"
            />
            <Line
              dataKey="forecast"
              type="natural"
              stroke="var(--color-forecast)"
              strokeWidth={2.5}
              dot={false}
              connectNulls
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Stacked area chart with crosshatch pattern fill (`c-chart-18`)

Target: `components/examples/c-chart-18.tsx`

Stacked area chart with crosshatch pattern fill

```tsx
"use client"

import { CSSProperties } from "react"
import { Badge } from "@/components/reui/badge"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const chartData = [
  { month: "January", api: 1820, webhook: 1640 },
  { month: "February", api: 2340, webhook: 2160 },
  { month: "March", api: 1960, webhook: 1880 },
  { month: "April", api: 2780, webhook: 2540 },
  { month: "May", api: 2100, webhook: 1920 },
  { month: "June", api: 3120, webhook: 2880 },
  { month: "July", api: 2540, webhook: 2320 },
  { month: "August", api: 3480, webhook: 3160 },
  { month: "September", api: 2860, webhook: 2580 },
  { month: "October", api: 2420, webhook: 2140 },
  { month: "November", api: 3240, webhook: 2960 },
  { month: "December", api: 2680, webhook: 2440 },
]

const chartConfig = {
  api: {
    label: "API Calls",
    color: "var(--chart-1)",
  },
  webhook: {
    label: "Webhooks",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

function CrosshatchPattern({ config }: { config: ChartConfig }) {
  const entries = Object.entries(config).filter(([, v]) => v.color)
  return (
    <>
      {entries.map(([key, { color }]) => (
        <pattern
          key={key}
          id={`chart18-crosshatch-${key}`}
          x="0"
          y="0"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0,8 L8,0" stroke={color} strokeWidth="0.8" opacity="0.4" />
          <path d="M0,0 L8,8" stroke={color} strokeWidth="0.8" opacity="0.2" />
        </pattern>
      ))}
    </>
  )
}

export function Pattern() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Request Volume
          <Badge variant="success-light" className="ml-2">
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="TradeUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowRightUpLongLine"
              aria-hidden="true"
            />
            +12.8%
          </Badge>
        </CardTitle>
        <CardDescription>
          API and webhook traffic over 12 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="min-w-40 gap-2.5"
                  labelFormatter={(value) => (
                    <div className="border-border/50 mb-0.5 border-b pb-2">
                      <span className="text-xs font-medium">{value} 2024</span>
                    </div>
                  )}
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <defs>
              <CrosshatchPattern config={chartConfig} />
            </defs>
            <Area
              dataKey="webhook"
              type="natural"
              fill="url(#chart18-crosshatch-webhook)"
              fillOpacity={0.5}
              stroke="var(--color-webhook)"
              stackId="a"
              strokeWidth={1}
            />
            <Area
              dataKey="api"
              type="natural"
              fill="url(#chart18-crosshatch-api)"
              fillOpacity={0.5}
              stroke="var(--color-api)"
              stackId="a"
              strokeWidth={1}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Donut chart with center total (`c-chart-19`)

Target: `components/examples/c-chart-19.tsx`

Donut chart with center total

```tsx
"use client"

import { CSSProperties } from "react"
import { Cell, Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { source: "direct", visits: 4200, fill: "var(--color-direct)" },
  { source: "search", visits: 3600, fill: "var(--color-search)" },
  { source: "social", visits: 2800, fill: "var(--color-social)" },
  { source: "email", visits: 1900, fill: "var(--color-email)" },
  { source: "referral", visits: 1400, fill: "var(--color-referral)" },
]

const total = chartData.reduce((s, d) => s + d.visits, 0)

const chartConfig = {
  visits: { label: "Visits" },
  direct: { label: "Direct", color: "var(--chart-1)" },
  search: { label: "Search", color: "var(--chart-2)" },
  social: { label: "Social", color: "var(--chart-3)" },
  email: { label: "Email", color: "var(--chart-4)" },
  referral: { label: "Referral", color: "var(--chart-5)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center pb-0">
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Where your visitors come from</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <PieChart accessibilityLayer>
            <defs>
              <filter
                id="chart19-3d"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="5"
                  floodOpacity="0.2"
                />
              </filter>
              <linearGradient id="gradient-direct" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.8}
                />
              </linearGradient>
              <linearGradient id="gradient-search" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
              </linearGradient>
              <linearGradient id="gradient-social" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.8}
                />
              </linearGradient>
              <linearGradient id="gradient-email" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-4)" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="var(--chart-4)"
                  stopOpacity={0.8}
                />
              </linearGradient>
              <linearGradient
                id="gradient-referral"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="var(--chart-5)" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="var(--chart-5)"
                  stopOpacity={0.8}
                />
              </linearGradient>
            </defs>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="min-w-40 gap-2.5"
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="visits"
              nameKey="source"
              innerRadius={65}
              outerRadius={95}
              cornerRadius={8}
              paddingAngle={4}
              stroke="var(--background)"
              strokeWidth={4}
              style={{ filter: "url(#chart19-3d)" }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#gradient-${entry.source})`}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold tabular-nums"
                        >
                          {(total / 1000).toFixed(1)}k
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground text-xs"
                        >
                          Total Visits
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Donut chart with center stats (`c-chart-20`)

Target: `components/examples/c-chart-20.tsx`

Donut chart with center stats

```tsx
"use client"

import { CSSProperties } from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { status: "completed", count: 186, fill: "var(--color-completed)" },
  { status: "inProgress", count: 94, fill: "var(--color-inProgress)" },
  { status: "pending", count: 62, fill: "var(--color-pending)" },
  { status: "cancelled", count: 28, fill: "var(--color-cancelled)" },
]

const totalTasks = chartData.reduce((sum, d) => sum + d.count, 0)
const completionRate = Math.round((chartData[0].count / totalTasks) * 100)

const chartConfig = {
  count: { label: "Tasks" },
  completed: { label: "Completed", color: "var(--chart-1)" },
  inProgress: { label: "In Progress", color: "var(--chart-2)" },
  pending: { label: "Pending", color: "var(--chart-3)" },
  cancelled: { label: "Cancelled", color: "var(--chart-5)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center pb-0">
        <CardTitle>Task Status</CardTitle>
        <CardDescription>Current sprint task breakdown</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <PieChart accessibilityLayer>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="min-w-40 gap-2.5"
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2"
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              cornerRadius={5}
              paddingAngle={3}
              stroke="var(--background)"
              strokeWidth={3}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold tabular-nums"
                        >
                          {completionRate}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground text-xs"
                        >
                          Completed
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Bug priority pie with stripe patterns (`c-chart-21`)

Target: `components/examples/c-chart-21.tsx`

Bug priority pie with stripe patterns

```tsx
"use client"

import { CSSProperties } from "react"
import { Cell, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { priority: "critical", bugs: 14, fill: "url(#chart22-critical-pattern)" },
  { priority: "high", bugs: 28, fill: "var(--color-high)" },
  { priority: "medium", bugs: 42, fill: "url(#chart22-medium-pattern)" },
  { priority: "low", bugs: 36, fill: "var(--color-low)" },
]

const chartConfig = {
  bugs: { label: "Bugs" },
  critical: { label: "Critical", color: "var(--destructive)" },
  high: { label: "High", color: "var(--chart-4)" },
  medium: { label: "Medium", color: "var(--chart-3)" },
  low: { label: "Low", color: "var(--chart-5)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center pb-0">
        <CardTitle>Bug Priority</CardTitle>
        <CardDescription>Open issues by severity level</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart accessibilityLayer>
            <defs>
              <pattern
                id="chart22-critical-pattern"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <rect
                  width="6"
                  height="6"
                  fill="var(--destructive)"
                  opacity="0.3"
                />
                <path
                  d="M0,6 L6,0 M-2,2 L2,-2 M4,8 L8,4"
                  stroke="var(--destructive)"
                  strokeWidth="1.5"
                  opacity="0.9"
                />
              </pattern>
              <pattern
                id="chart22-medium-pattern"
                patternUnits="userSpaceOnUse"
                width="5"
                height="5"
              >
                <rect
                  width="5"
                  height="5"
                  fill="var(--chart-3)"
                  opacity="0.2"
                />
                <circle
                  cx="2.5"
                  cy="2.5"
                  r="1.2"
                  fill="var(--chart-3)"
                  opacity="0.7"
                />
              </pattern>
            </defs>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="min-w-40 gap-2.5"
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="priority" />}
              className="-translate-y-2"
            />
            <Pie
              data={chartData}
              dataKey="bugs"
              nameKey="priority"
              innerRadius={40}
              cornerRadius={4}
              paddingAngle={3}
              stroke="var(--background)"
              strokeWidth={3}
            >
              {chartData.map((entry) => (
                <Cell key={entry.priority} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Active segment donut with center label (`c-chart-22`)

Target: `components/examples/c-chart-22.tsx`

Active segment donut with center label

```tsx
"use client"

import { CSSProperties } from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { plan: "free", users: 12800, fill: "var(--color-free)" },
  { plan: "starter", users: 5400, fill: "var(--color-starter)" },
  { plan: "pro", users: 3600, fill: "var(--color-pro)" },
  { plan: "enterprise", users: 1200, fill: "var(--color-enterprise)" },
]

const totalUsers = chartData.reduce((sum, d) => sum + d.users, 0)
const paidUsers = totalUsers - chartData[0].users
const conversionRate = ((paidUsers / totalUsers) * 100).toFixed(1)

const chartConfig = {
  users: { label: "Users" },
  free: { label: "Free", color: "var(--chart-5)" },
  starter: { label: "Starter", color: "var(--chart-3)" },
  pro: { label: "Pro", color: "var(--chart-2)" },
  enterprise: { label: "Enterprise", color: "var(--chart-1)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center pb-0">
        <CardTitle>Conversion Funnel</CardTitle>
        <CardDescription>
          {conversionRate}% of users are on paid plans
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart accessibilityLayer>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="min-w-40 gap-2.5"
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value).toLocaleString()}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="plan" />}
              className="-translate-y-2"
            />
            <Pie
              data={chartData}
              dataKey="users"
              nameKey="plan"
              innerRadius={55}
              cornerRadius={5}
              paddingAngle={3}
              stroke="var(--background)"
              strokeWidth={3}
              activeIndex={2}
              activeShape={{ outerRadius: 110 }}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold tabular-nums"
                        >
                          {paidUsers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground text-xs"
                        >
                          Paid Users
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Radar chart with gradient fill (`c-chart-23`)

Target: `components/examples/c-chart-23.tsx`

Radar chart with gradient fill

```tsx
"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { skill: "Frontend", score: 92 },
  { skill: "Backend", score: 78 },
  { skill: "DevOps", score: 68 },
  { skill: "Design", score: 74 },
  { skill: "Testing", score: 85 },
  { skill: "Security", score: 62 },
]

const chartConfig = {
  score: { label: "Proficiency", color: "var(--chart-1)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center pb-0">
        <CardTitle>Skill Assessment</CardTitle>
        <CardDescription>Team proficiency across key areas</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <RadarChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="chart24-fill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-score)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-score)"
                  stopOpacity={0.08}
                />
              </linearGradient>
              <filter
                id="chart24-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <ChartTooltip content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
            <PolarGrid strokeDasharray="3 3" />
            <Radar
              dataKey="score"
              fill="url(#chart24-fill)"
              stroke="var(--color-score)"
              strokeWidth={2}
              filter="url(#chart24-glow)"
              dot={{ r: 4, fill: "var(--color-score)", strokeWidth: 0 }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Filled radar with glowing stroke (`c-chart-24`)

Target: `components/examples/c-chart-24.tsx`

Filled radar with glowing stroke

```tsx
"use client"

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { metric: "Speed", value: 88 },
  { metric: "Reliability", value: 94 },
  { metric: "Scalability", value: 72 },
  { metric: "Cost", value: 68 },
  { metric: "Security", value: 82 },
  { metric: "DX", value: 78 },
]

const chartConfig = {
  value: { label: "Score", color: "var(--chart-2)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center pb-0">
        <CardTitle>Infrastructure Score</CardTitle>
        <CardDescription>Platform performance metrics</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <RadarChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="chart25-fill" x1="0" y1="0" x2="1" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.45}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <filter
                id="chart25-glow"
                x="-15%"
                y="-15%"
                width="130%"
                height="130%"
              >
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <ChartTooltip content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
            <PolarGrid strokeDasharray="3 3" />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              fill="url(#chart25-fill)"
              stroke="var(--color-value)"
              strokeWidth={2.5}
              filter="url(#chart25-glow)"
              dot={{
                r: 4,
                fill: "var(--background)",
                strokeWidth: 2.5,
                stroke: "var(--color-value)",
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Lighthouse scores radial with labels (`c-chart-25`)

Target: `components/examples/c-chart-25.tsx`

Lighthouse scores radial with labels

```tsx
"use client"

import { CSSProperties } from "react"
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { name: "mobile", score: 58, fill: "url(#chart28-mobile)" },
  { name: "desktop", score: 76, fill: "url(#chart28-desktop)" },
  { name: "api", score: 92, fill: "url(#chart28-api)" },
]

const chartConfig = {
  score: { label: "Score" },
  mobile: { label: "Mobile", color: "var(--chart-4)" },
  desktop: { label: "Desktop", color: "var(--chart-2)" },
  api: { label: "API", color: "var(--chart-1)" },
} satisfies ChartConfig

export function Pattern() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center pb-0">
        <CardTitle>Lighthouse Scores</CardTitle>
        <CardDescription>Performance audit by platform</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadialBarChart
            data={chartData}
            innerRadius={35}
            outerRadius={110}
            barSize={22}
          >
            <defs>
              {(["mobile", "desktop", "api"] as const).map((key) => (
                <linearGradient
                  key={key}
                  id={`chart28-${key}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor={`var(--color-${key})`}
                    stopOpacity={0.5}
                  />
                  <stop
                    offset="100%"
                    stopColor={`var(--color-${key})`}
                    stopOpacity={1}
                  />
                </linearGradient>
              ))}
              <filter
                id="chart28-glow"
                x="-15%"
                y="-15%"
                width="130%"
                height="130%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="min-w-40 gap-2.5"
                  nameKey="name"
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-xs bg-(--color-bg)"
                          style={
                            {
                              "--color-bg": `var(--color-${name})`,
                            } as CSSProperties
                          }
                        />
                        <span className="text-muted-foreground">
                          {chartConfig[name as keyof typeof chartConfig]
                            ?.label || name}
                        </span>
                      </div>
                      <span className="text-foreground font-semibold tabular-nums">
                        {Number(value)}/100
                      </span>
                    </div>
                  )}
                />
              }
            />
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              dataKey="score"
              background
              cornerRadius={10}
              filter="url(#chart28-glow)"
              label={{
                position: "insideStart",
                fill: "#fff",
                fontSize: 11,
                fontWeight: 600,
              }}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```
