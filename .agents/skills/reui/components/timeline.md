# Timeline (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

13 entr(y/ies).

> Includes the base `@reui/{slug}` primitive plus `c-{slug}-*` demo blocks.

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `timeline` | Timeline | registry:ui | deps: radix-ui |
| `c-timeline-1` | Basic timeline. | registry:block | Basic timeline. |
| `c-timeline-2` | Timeline with roadmap. | registry:block | Timeline with roadmap. |
| `c-timeline-3` | Timeline with order status. | registry:block | Timeline with order status. |
| `c-timeline-4` | Timeline with git activity. | registry:block | Timeline with git activity. |
| `c-timeline-5` | Timeline with milestones. | registry:block | Timeline with milestones. |
| `c-timeline-6` | Timeline with pipeline steps. | registry:block | Timeline with pipeline steps. |
| `c-timeline-7` | Timeline with roadmap items. | registry:block | Timeline with roadmap items. |
| `c-timeline-8` | Vertical timeline | registry:block | Vertical timeline |
| `c-timeline-9` | Horizontal timeline with leading labels | registry:block | Horizontal timeline with leading labels |
| `c-timeline-10` | Deployment log timeline | registry:block | Deployment log timeline |
| `c-timeline-11` | Activity feed timeline with user avatars | registry:block | Activity feed timeline with user avatars |
| `c-timeline-12` | Compact horizontal milestone timeline | registry:block | Compact horizontal milestone timeline |

## Source

### Timeline (`timeline`)

Target: `components/reui/timeline.tsx`

```tsx
"use client"

import {
  createContext,
  HTMLAttributes,
  useCallback,
  useContext,
  useState,
} from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// Types
type TimelineContextValue = {
  activeStep: number
  setActiveStep: (step: number) => void
}

// Context
const TimelineContext = createContext<TimelineContextValue | undefined>(
  undefined
)

const useTimeline = () => {
  const context = useContext(TimelineContext)
  if (!context) {
    throw new Error("useTimeline must be used within a Timeline")
  }
  return context
}

// Components
interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: number
  value?: number
  onValueChange?: (value: number) => void
  orientation?: "horizontal" | "vertical"
}

function Timeline({
  defaultValue = 1,
  value,
  onValueChange,
  orientation = "vertical",
  className,
  children,
  ...props
}: TimelineProps) {
  const [activeStep, setInternalStep] = useState(defaultValue)

  const setActiveStep = useCallback(
    (step: number) => {
      if (value === undefined) {
        setInternalStep(step)
      }
      onValueChange?.(step)
    },
    [value, onValueChange]
  )

  const currentStep = value ?? activeStep

  return (
    <TimelineContext.Provider
      value={{ activeStep: currentStep, setActiveStep }}
    >
      <div
        className={cn(
          "group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
          className
        )}
        data-orientation={orientation}
        data-slot="timeline"
        {...props}
      >
        {children}
      </div>
    </TimelineContext.Provider>
  )
}

// TimelineContent
function TimelineContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="timeline-content"
      {...props}
    />
  )
}

// TimelineDate
interface TimelineDateProps extends HTMLAttributes<HTMLTimeElement> {
  asChild?: boolean
}

function TimelineDate({
  asChild = false,
  className,
  ...props
}: TimelineDateProps) {
  const Comp = asChild ? Slot.Root : "time"

  return (
    <Comp
      className={cn(
        "text-muted-foreground mb-1 block text-xs font-medium group-data-[orientation=vertical]/timeline:max-sm:h-4",
        className
      )}
      data-slot="timeline-date"
      {...props}
    />
  )
}

// TimelineHeader
function TimelineHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className)} data-slot="timeline-header" {...props} />
  )
}

// TimelineIndicator
interface TimelineIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

function TimelineIndicator({
  asChild = false,
  className,
  children,
  ...props
}: TimelineIndicatorProps) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      aria-hidden="true"
      className={cn(
        "border-primary/20 group-data-completed/timeline-item:border-primary absolute size-4 rounded-full border-2 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:left-0 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2",
        className
      )}
      data-slot="timeline-indicator"
      {...props}
    >
      {children}
    </Comp>
  )
}

// TimelineItem
interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
  step: number
}

function TimelineItem({ step, className, ...props }: TimelineItemProps) {
  const { activeStep } = useTimeline()

  return (
    <div
      className={cn(
        "group/timeline-item has-[+[data-completed]]:**:data-[slot=timeline-separator]:bg-primary relative flex flex-1 flex-col gap-0.5 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=vertical]/timeline:not-last:pb-6",
        className
      )}
      data-completed={step <= activeStep || undefined}
      data-slot="timeline-item"
      {...props}
    />
  )
}

// TimelineSeparator
function TimelineSeparator({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-primary/10 absolute self-start group-last/timeline-item:hidden group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:h-0.5 group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:translate-y-4.5",
        className
      )}
      data-slot="timeline-separator"
      {...props}
    />
  )
}

// TimelineTitle
function TimelineTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-sm font-medium", className)}
      data-slot="timeline-title"
      {...props}
    />
  )
}

export {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
}
```

### Basic timeline. (`c-timeline-1`)

Target: `components/examples/c-timeline-1.tsx`

Basic timeline.

```tsx
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

export function Pattern() {
  return (
    <Timeline defaultValue={2} className="w-full max-w-md">
      <TimelineItem step={1}>
        <TimelineHeader>
          <TimelineDate>March 2024</TimelineDate>
          <TimelineTitle>Project Initialized</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          Successfully set up the project repository and initial architecture.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem step={2}>
        <TimelineHeader>
          <TimelineDate>April 2024</TimelineDate>
          <TimelineTitle>Beta Release</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          Launched the beta version for early testers and feedback.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem step={3}>
        <TimelineHeader>
          <TimelineDate>June 2024</TimelineDate>
          <TimelineTitle>Official Launch</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          The platform is now live for all users worldwide.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
```

### Timeline with roadmap. (`c-timeline-2`)

Target: `components/examples/c-timeline-2.tsx`

Timeline with roadmap.

```tsx
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

const roadmap = [
  {
    id: 1,
    date: "Jan 2025",
    title: "AI Engine Integration",
    description:
      "Deep integration of advanced LLMs for real-time code generation and context-aware suggestions.",
  },
  {
    id: 2,
    date: "Feb 2025",
    title: "Collaborative Editing",
    description:
      "Multi-user real-time collaboration with shared cursors and instant synchronization across workspaces.",
  },
  {
    id: 3,
    date: "Mar 2025",
    title: "Visual Theme Builder",
    description:
      "Interactive interface for creating and managing custom design systems with automated CSS variable generation.",
  },
  {
    id: 4,
    date: "Apr 2025",
    title: "Enterprise Security",
    description:
      "Role-based access control, SOC2 compliance audit, and enhanced data encryption protocols.",
  },
]

export function Pattern() {
  return (
    <Timeline defaultValue={2} className="w-full max-w-md">
      {roadmap.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="sm:group-data-[orientation=vertical]/timeline:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
```

### Timeline with order status. (`c-timeline-3`)

Target: `components/examples/c-timeline-3.tsx`

Timeline with order status.

```tsx
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const orderStatus = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Order Placed",
    description: "Your order has been received and is being processed.",
  },
  {
    id: 2,
    date: "Mar 16, 2024",
    title: "Payment Confirmed",
    description: "Transaction successful. Preparing for shipment.",
  },
  {
    id: 3,
    date: "Mar 18, 2024",
    title: "Shipped",
    description: "Your package is on its way. Track your delivery.",
  },
  {
    id: 4,
    date: "Mar 20, 2024",
    title: "Delivered",
    description: "Package successfully delivered to the recipient.",
  },
]

export function Pattern() {
  return (
    <Timeline defaultValue={3} className="w-full max-w-md">
      {orderStatus.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
              <IconPlaceholder
                lucide="CheckIcon"
                tabler="IconCheck"
                hugeicons="Tick02Icon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                className="size-4 group-not-data-completed/timeline-item:hidden"
              />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
```

### Timeline with git activity. (`c-timeline-4`)

Target: `components/examples/c-timeline-4.tsx`

Timeline with git activity.

```tsx
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const gitActivity = [
  {
    id: 1,
    date: "15 minutes ago",
    title: "Forked Repository",
    description:
      "Forked the repository to create a new branch for development.",
    icon: (
      <IconPlaceholder
        lucide="GitForkIcon"
        tabler="IconGitFork"
        hugeicons="GitForkIcon"
        phosphor="GitForkIcon"
        remixicon="RiGitForkLine"
        className="size-4"
      />
    ),
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "Pull Request Submitted",
    description:
      "Submitted PR #342 with new feature implementation. Waiting for code review.",
    icon: (
      <IconPlaceholder
        lucide="GitPullRequestArrowIcon"
        tabler="IconGitPullRequest"
        hugeicons="GitPullRequestIcon"
        phosphor="GitPullRequest"
        remixicon="RiGitPullRequestLine"
        className="size-3.5"
      />
    ),
  },
  {
    id: 3,
    date: "5 minutes ago",
    title: "Comparing Branches",
    description:
      "Received comments on PR. Minor adjustments needed in error handling.",
    icon: (
      <IconPlaceholder
        lucide="GitCompareArrowsIcon"
        tabler="IconGitCompare"
        hugeicons="GitCompareIcon"
        phosphor="GitDiffIcon"
        remixicon="RiGitPullRequestLine"
        className="size-3.5"
      />
    ),
  },
  {
    id: 4,
    date: "Just now",
    title: "Merged Branch",
    description:
      "Merged the feature branch into the main branch. Ready for deployment.",
    icon: (
      <IconPlaceholder
        lucide="GitMergeIcon"
        tabler="IconGitMerge"
        hugeicons="GitMergeIcon"
        phosphor="GitMergeIcon"
        remixicon="RiGitMergeLine"
        className="size-3.5"
      />
    ),
  },
]

export function Pattern() {
  return (
    <Timeline defaultValue={3} className="w-full max-w-md">
      {gitActivity.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
              {item.icon}
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>
            {item.description}
            <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
```

### Timeline with milestones. (`c-timeline-5`)

Target: `components/examples/c-timeline-5.tsx`

Timeline with milestones.

```tsx
import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

import { cn } from "@/lib/utils"

const milestones = [
  {
    id: 1,
    date: "Jan 2024",
    title: "Seed Funding",
  },
  {
    id: 2,
    date: "Mar 2024",
    title: "Product MVP",
  },
  {
    id: 3,
    date: "May 2024",
    title: "First Client",
  },
  {
    id: 4,
    date: "Jul 2024",
    title: "Series A",
  },
  {
    id: 5,
    date: "Sep 2024",
    title: "Global Expansion",
  },
]

export function Pattern() {
  return (
    <Timeline defaultValue={3} className="w-full max-w-md">
      {milestones.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className={cn(
            "w-[calc(50%-1.5rem)] odd:ms-auto even:me-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8",
            "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:-right-6 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:left-auto",
            "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:-right-6",
            "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:left-auto even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:translate-x-1/2"
          )}
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
```

### Timeline with pipeline steps. (`c-timeline-6`)

Target: `components/examples/c-timeline-6.tsx`

Timeline with pipeline steps.

```tsx
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameHeader,
  FramePanel,
} from "@/components/reui/frame"
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Spinner } from "@/components/ui/spinner"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const pipelineSteps = [
  {
    id: 1,
    title: "Source Code Checkout",
    duration: "12s",
    status: "completed",
    description: "Successfully fetched latest changes from the main branch.",
    user: {
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    },
  },
  {
    id: 2,
    title: "Dependency Installation",
    duration: "1m 45s",
    status: "completed",
    description: "All npm packages installed and cached for future builds.",
    user: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    },
  },
  {
    id: 3,
    title: "Unit & Integration Tests",
    duration: "Running",
    status: "active",
    description: "Running 142 test suites across the entire codebase...",
    user: {
      name: "Michael Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    },
  },
  {
    id: 4,
    title: "Production Build",
    duration: "Pending",
    status: "pending",
    description: "Optimizing assets and generating static site pages.",
    user: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
    },
  },
]

function StatusIcon({ status }: { status: string }) {
  if (status === "completed")
    return (
      <IconPlaceholder
        lucide="CheckIcon"
        tabler="IconCheck"
        hugeicons="Tick02Icon"
        phosphor="CheckIcon"
        remixicon="RiCheckLine"
        className="size-3.5"
      />
    )
  if (status === "active") return <Spinner className="size-3.5" />
  return (
    <IconPlaceholder
      lucide="CircleIcon"
      tabler="IconCircle"
      hugeicons="CircleIcon"
      phosphor="CircleIcon"
      remixicon="RiCircleLine"
      className="size-3.5"
    />
  )
}

function StatusBadge({
  status,
  duration,
}: {
  status: string
  duration: string
}) {
  const variant =
    status === "completed"
      ? "success-light"
      : status === "active"
        ? "info-light"
        : "warning-light"

  return (
    <Badge variant={variant} size="sm">
      {duration}
    </Badge>
  )
}

export function Pattern() {
  return (
    <div className="w-full max-w-lg">
      <Timeline defaultValue={3}>
        {pipelineSteps.map((step) => (
          <TimelineItem key={step.id} step={step.id} className="ms-10 pb-10">
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />
              <div className="flex items-center gap-2">
                <TimelineTitle className="text-sm font-semibold">
                  {step.title}
                </TimelineTitle>
                <StatusBadge status={step.status} duration={step.duration} />
              </div>
              <TimelineIndicator
                className={cn(
                  "bg-muted text-muted-foreground group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7",
                  step.status === "active" && "ring-primary/20 ring-2"
                )}
              >
                <StatusIcon status={step.status} />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="mt-2">
              <Frame stacked dense spacing="sm">
                <Collapsible defaultOpen className="group/collapsible">
                  <CollapsibleTrigger className="flex w-full">
                    <FrameHeader className="flex grow flex-row items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="size-5">
                          <AvatarImage
                            src={step.user.avatar}
                            alt={step.user.name}
                          />
                          <AvatarFallback>
                            {step.user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground text-xs font-medium">
                          {step.user.name}
                        </span>
                      </div>
                      <IconPlaceholder
                        lucide="ChevronRightIcon"
                        tabler="IconChevronRight"
                        hugeicons="ArrowRightIcon"
                        phosphor="CaretRightIcon"
                        remixicon="RiArrowRightLine"
                        className="text-muted-foreground size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                      />
                    </FrameHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <FramePanel>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </FramePanel>
                  </CollapsibleContent>
                </Collapsible>
              </Frame>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
```

### Timeline with roadmap items. (`c-timeline-7`)

Target: `components/examples/c-timeline-7.tsx`

Timeline with roadmap items.

```tsx
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/components/reui/timeline"

import { cn } from "@/lib/utils"

const roadmapItems = [
  {
    date: "Dec 15, 2025",
    content: (
      <>
        <span className="text-muted-foreground">Completed</span> Beta Program
      </>
    ),
    color: "bg-emerald-500",
  },
  {
    date: "Nov 01, 2025",
    content: (
      <>
        <span className="text-muted-foreground">Completed</span> Usability
        Testing
      </>
    ),
    color: "bg-violet-500",
  },
  {
    date: "Oct 15, 2025",
    content: (
      <>
        <span className="text-muted-foreground">Initiated</span> Design Phase
      </>
    ),
    color: "bg-fuchsia-500",
  },
  {
    date: "Aug 01, 2024",
    content: (
      <>
        <span className="text-muted-foreground">Completed</span> Requirements
        Gathering
      </>
    ),
    color: "bg-blue-500",
  },
  {
    date: "Jul 15, 2024",
    content: (
      <>
        <span className="text-muted-foreground">Started</span> Project Kickoff
      </>
    ),
    color: "bg-red-500",
  },
]

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Timeline defaultValue={0} className="gap-2.5">
        {roadmapItems.map((item, index) => (
          <TimelineItem
            key={index}
            step={index + 1}
            className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-foreground/20 group-data-[orientation=vertical]/timeline:not-last:pb-0"
          >
            <TimelineHeader className="flex items-center gap-2.5">
              <TimelineSeparator className="" />
              <TimelineIndicator
                className={cn("size-2 border-none", item.color)}
              />
              <TimelineDate className="text-muted-foreground/60 mb-0 text-[10px] font-semibold uppercase">
                {item.date}
              </TimelineDate>
            </TimelineHeader>
            <TimelineContent className="text-foreground text-sm font-medium">
              {item.content}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
```

### Vertical timeline (`c-timeline-8`)

Target: `components/examples/c-timeline-8.tsx`

Vertical timeline

```tsx
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

const releaseCycle = [
  {
    id: 1,
    date: "Week 1",
    title: "Planning",
    description: "Scope definition and resource planning.",
  },
  {
    id: 2,
    date: "Week 2",
    title: "Design",
    description: "UI/UX design and prototyping.",
  },
  {
    id: 3,
    date: "Week 4",
    title: "Development",
    description: "Core features implementation.",
  },
]

export function Pattern() {
  return (
    <Timeline
      defaultValue={2}
      orientation="horizontal"
      className="w-full max-w-xl"
    >
      {releaseCycle.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
```

### Horizontal timeline with leading labels (`c-timeline-9`)

Target: `components/examples/c-timeline-9.tsx`

Horizontal timeline with leading labels

```tsx
"use client"

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

const projectJourney = [
  {
    id: 1,
    date: "Oct 2024",
    title: "Kickoff",
    description: "Defining project goals and core team selection.",
  },
  {
    id: 2,
    date: "Nov 2024",
    title: "Discovery",
    description: "User research and requirements gathering phase.",
  },
  {
    id: 3,
    date: "Dec 2024",
    title: "Implementation",
    description: "Core development and sprint execution.",
  },
]

export function Pattern() {
  return (
    <Timeline
      defaultValue={2}
      orientation="horizontal"
      className="w-full max-w-xl"
    >
      {projectJourney.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=horizontal]/timeline:mt-0"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8" />
            <TimelineDate className="mb-10">{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator className="group-data-[orientation=horizontal]/timeline:top-8" />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
```

### Deployment log timeline (`c-timeline-10`)

Target: `components/examples/c-timeline-10.tsx`

Deployment log timeline

```tsx
import { Badge } from "@/components/reui/badge"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

import { cn } from "@/lib/utils"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const deployments = [
  {
    id: 1,
    title: "Production Deploy",
    date: "2 minutes ago",
    commit: "a1b2c3d",
    branch: "main",
    status: "success",
    duration: "42s",
  },
  {
    id: 2,
    title: "Staging Deploy",
    date: "15 minutes ago",
    commit: "e4f5g6h",
    branch: "staging",
    status: "success",
    duration: "38s",
  },
  {
    id: 3,
    title: "Preview Deploy",
    date: "1 hour ago",
    commit: "i7j8k9l",
    branch: "feat/auth",
    status: "failed",
    duration: "1m 12s",
  },
  {
    id: 4,
    title: "Production Deploy",
    date: "3 hours ago",
    commit: "m0n1o2p",
    branch: "main",
    status: "success",
    duration: "45s",
  },
]

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Timeline defaultValue={4}>
        {deployments.map((deploy) => (
          <TimelineItem
            key={deploy.id}
            step={deploy.id}
            className="group-data-[orientation=vertical]/timeline:ms-10"
          >
            <TimelineHeader>
              <TimelineSeparator className="bg-input! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
              <div className="flex items-center gap-2">
                <TimelineTitle className="text-sm">
                  {deploy.title}
                </TimelineTitle>
                <Badge
                  variant={
                    deploy.status === "success"
                      ? "success-light"
                      : "destructive-light"
                  }
                  size="sm"
                >
                  {deploy.status}
                </Badge>
              </div>
              <TimelineIndicator
                className={cn(
                  "flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7",
                  deploy.status === "success"
                    ? "bg-emerald-500 text-white"
                    : "bg-destructive text-white"
                )}
              >
                {deploy.status === "success" ? (
                  <IconPlaceholder
                    lucide="CheckIcon"
                    tabler="IconCheck"
                    hugeicons="Tick02Icon"
                    phosphor="CheckIcon"
                    remixicon="RiCheckLine"
                    className="size-3.5"
                  />
                ) : (
                  <IconPlaceholder
                    lucide="XIcon"
                    tabler="IconX"
                    hugeicons="MultiplicationSignIcon"
                    phosphor="XIcon"
                    remixicon="RiCloseLine"
                    className="size-3.5"
                  />
                )}
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent>
              <div className="text-muted-foreground flex items-center gap-3 text-xs">
                <span className="font-mono">{deploy.commit}</span>
                <span>&middot;</span>
                <span>{deploy.branch}</span>
                <span>&middot;</span>
                <span>{deploy.duration}</span>
              </div>
              <TimelineDate className="mt-1 mb-0">{deploy.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
```

### Activity feed timeline with user avatars (`c-timeline-11`)

Target: `components/examples/c-timeline-11.tsx`

Activity feed timeline with user avatars

```tsx
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/components/reui/timeline"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    action: "pushed 3 commits to",
    target: "main",
    date: "5 minutes ago",
  },
  {
    id: 2,
    user: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    action: "opened pull request",
    target: "#284 — Add dark mode",
    date: "20 minutes ago",
  },
  {
    id: 3,
    user: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    action: "commented on",
    target: "Issue #142",
    date: "1 hour ago",
  },
  {
    id: 4,
    user: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
    action: "deployed to",
    target: "production",
    date: "2 hours ago",
  },
  {
    id: 5,
    user: "Michael Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    action: "merged branch",
    target: "feat/notifications",
    date: "3 hours ago",
  },
]

export function Pattern() {
  return (
    <div className="w-full max-w-md">
      <Timeline defaultValue={5}>
        {activities.map((activity) => (
          <TimelineItem
            key={activity.id}
            step={activity.id}
            className="group-data-[orientation=vertical]/timeline:ms-10"
          >
            <TimelineHeader>
              <TimelineSeparator className="bg-input! group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />
              <TimelineIndicator className="size-8 overflow-hidden rounded-full border-none group-data-[orientation=vertical]/timeline:-left-8">
                <Avatar className="size-8">
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback className="text-[10px]">
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent>
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>{" "}
                <span className="font-medium">{activity.target}</span>
              </p>
              <TimelineDate className="mt-0.5 mb-0">
                {activity.date}
              </TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
```

### Compact horizontal milestone timeline (`c-timeline-12`)

Target: `components/examples/c-timeline-12.tsx`

Compact horizontal milestone timeline

```tsx
import { Badge } from "@/components/reui/badge"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

import { cn } from "@/lib/utils"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const releases = [
  {
    id: 1,
    version: "v1.0",
    date: "Jan 2025",
    title: "Initial Release",
    status: "released",
  },
  {
    id: 2,
    version: "v1.1",
    date: "Mar 2025",
    title: "Bug Fixes",
    status: "released",
  },
  {
    id: 3,
    version: "v2.0",
    date: "Jun 2025",
    title: "Major Update",
    status: "current",
  },
  {
    id: 4,
    version: "v2.1",
    date: "Sep 2025",
    title: "Improvements",
    status: "upcoming",
  },
]

export function Pattern() {
  return (
    <Timeline
      defaultValue={3}
      orientation="horizontal"
      className="w-full max-w-xl"
    >
      {releases.map((release) => (
        <TimelineItem key={release.id} step={release.id}>
          <TimelineHeader>
            <TimelineSeparator className="bg-input! group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:left-2.5 group-data-[orientation=horizontal]/timeline:w-[calc(100%-2.25rem)]" />
            <TimelineDate>{release.date}</TimelineDate>
            <TimelineTitle className="flex items-center gap-2">
              {release.version}
              {release.status === "current" && (
                <Badge variant="primary-light" size="sm">
                  Current
                </Badge>
              )}
            </TimelineTitle>
            <TimelineIndicator
              className={cn(
                "flex size-6 items-center justify-center border-none",
                release.status === "released" && "bg-emerald-500 text-white",
                release.status === "current" &&
                  "bg-primary text-primary-foreground",
                release.status === "upcoming" &&
                  "bg-muted text-muted-foreground"
              )}
            >
              {release.status === "released" ? (
                <IconPlaceholder
                  lucide="CheckIcon"
                  tabler="IconCheck"
                  hugeicons="Tick02Icon"
                  phosphor="CheckIcon"
                  remixicon="RiCheckLine"
                  className="size-3.5"
                />
              ) : release.status === "current" ? (
                <IconPlaceholder
                  lucide="PlayIcon"
                  tabler="IconPlayerPlay"
                  hugeicons="PlayIcon"
                  phosphor="PlayIcon"
                  remixicon="RiPlayLine"
                  className="size-3"
                />
              ) : (
                <IconPlaceholder
                  lucide="CircleIcon"
                  tabler="IconCircle"
                  hugeicons="CircleIcon"
                  phosphor="CircleIcon"
                  remixicon="RiCircleLine"
                  className="size-3"
                />
              )}
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent className="text-xs">{release.title}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
```
