# Stepper (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

16 entr(y/ies).

> Includes the base `@reui/{slug}` primitive plus `c-{slug}-*` demo blocks.

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `stepper` | Stepper | registry:ui |  |
| `c-stepper-1` | Basic stepper | registry:block | Basic stepper |
| `c-stepper-2` | Stepper with completed state | registry:block | Stepper with completed state |
| `c-stepper-3` | Stepper with loading state | registry:block | Stepper with loading state |
| `c-stepper-4` | Controlled stepper | registry:block | Controlled stepper |
| `c-stepper-5` | Stepper with title and indicator | registry:block | Stepper with title and indicator |
| `c-stepper-6` | Stepper with progress bar indicator | registry:block | Stepper with progress bar indicator |
| `c-stepper-7` | Stepper with icons and badges | registry:block | Stepper with icons and badges |
| `c-stepper-8` | Stepper with descriptions | registry:block | Stepper with descriptions |
| `c-stepper-9` | Stepper with inline titles | registry:block | Stepper with inline titles |
| `c-stepper-10` | Stepper with content for each step | registry:block | Stepper with content for each step |
| `c-stepper-11` | Stepper with progress bar and titles | registry:block | Stepper with progress bar and titles |
| `c-stepper-12` | Stepper with segmented progress bar | registry:block | Stepper with segmented progress bar |
| `c-stepper-13` | Stepper with vertical orientation and descriptions | registry:block | Stepper with vertical orientation and descriptions |
| `c-stepper-14` | Stepper with vertical orientation | registry:block | Stepper with vertical orientation |
| `c-stepper-15` | Stepper with vertical orientation and titles | registry:block | Stepper with vertical orientation and titles |

## Source

### Stepper (`stepper`)

Target: `components/reui/stepper.tsx`

```tsx
/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import {
  Children,
  createContext,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"

// Types
type StepperOrientation = "horizontal" | "vertical"
type StepState = "active" | "completed" | "inactive" | "loading"
type StepIndicators = {
  active?: React.ReactNode
  completed?: React.ReactNode
  inactive?: React.ReactNode
  loading?: React.ReactNode
}

interface StepperContextValue {
  activeStep: number
  setActiveStep: (step: number) => void
  stepsCount: number
  orientation: StepperOrientation
  registerTrigger: (node: HTMLButtonElement | null) => void
  triggerNodes: HTMLButtonElement[]
  focusNext: (currentIdx: number) => void
  focusPrev: (currentIdx: number) => void
  focusFirst: () => void
  focusLast: () => void
  indicators: StepIndicators
}

interface StepItemContextValue {
  step: number
  state: StepState
  isDisabled: boolean
  isLoading: boolean
}

const StepperContext = createContext<StepperContextValue | undefined>(undefined)
const StepItemContext = createContext<StepItemContextValue | undefined>(
  undefined
)

function useStepper() {
  const ctx = useContext(StepperContext)
  if (!ctx) throw new Error("useStepper must be used within a Stepper")
  return ctx
}

function useStepItem() {
  const ctx = useContext(StepItemContext)
  if (!ctx) throw new Error("useStepItem must be used within a StepperItem")
  return ctx
}

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: number
  value?: number
  onValueChange?: (value: number) => void
  orientation?: StepperOrientation
  indicators?: StepIndicators
}

function Stepper({
  defaultValue = 1,
  value,
  onValueChange,
  orientation = "horizontal",
  className,
  children,
  indicators = {},
  ...props
}: StepperProps) {
  const [activeStep, setActiveStep] = useState(defaultValue)
  const [triggerNodes, setTriggerNodes] = useState<HTMLButtonElement[]>([])

  // Register/unregister triggers
  const registerTrigger = useCallback((node: HTMLButtonElement | null) => {
    setTriggerNodes((prev) => {
      if (node && !prev.includes(node)) {
        return [...prev, node]
      } else if (!node && prev.includes(node!)) {
        return prev.filter((n) => n !== node)
      } else {
        return prev
      }
    })
  }, [])

  const handleSetActiveStep = useCallback(
    (step: number) => {
      if (value === undefined) {
        setActiveStep(step)
      }
      onValueChange?.(step)
    },
    [value, onValueChange]
  )

  const currentStep = value ?? activeStep

  // Keyboard navigation logic
  const focusTrigger = (idx: number) => {
    if (triggerNodes[idx]) triggerNodes[idx].focus()
  }
  const focusNext = (currentIdx: number) =>
    focusTrigger((currentIdx + 1) % triggerNodes.length)
  const focusPrev = (currentIdx: number) =>
    focusTrigger((currentIdx - 1 + triggerNodes.length) % triggerNodes.length)
  const focusFirst = () => focusTrigger(0)
  const focusLast = () => focusTrigger(triggerNodes.length - 1)

  // Context value
  const contextValue = useMemo<StepperContextValue>(
    () => ({
      activeStep: currentStep,
      setActiveStep: handleSetActiveStep,
      stepsCount: Children.toArray(children).filter(
        (child): child is ReactElement =>
          isValidElement(child) &&
          (child.type as { displayName?: string }).displayName === "StepperItem"
      ).length,
      orientation,
      registerTrigger,
      focusNext,
      focusPrev,
      focusFirst,
      focusLast,
      triggerNodes,
      indicators,
    }),
    [
      currentStep,
      handleSetActiveStep,
      children,
      orientation,
      registerTrigger,
      triggerNodes,
    ]
  )

  return (
    <StepperContext.Provider value={contextValue}>
      <div
        role="tablist"
        aria-orientation={orientation}
        data-slot="stepper"
        className={cn("w-full", className)}
        data-orientation={orientation}
        {...props}
      >
        {children}
      </div>
    </StepperContext.Provider>
  )
}

interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number
  completed?: boolean
  disabled?: boolean
  loading?: boolean
}

function StepperItem({
  step,
  completed = false,
  disabled = false,
  loading = false,
  className,
  children,
  ...props
}: StepperItemProps) {
  const { activeStep } = useStepper()

  const state: StepState =
    completed || step < activeStep
      ? "completed"
      : activeStep === step
        ? "active"
        : "inactive"

  const isLoading = loading && step === activeStep

  return (
    <StepItemContext.Provider
      value={{ step, state, isDisabled: disabled, isLoading }}
    >
      <div
        data-slot="stepper-item"
        className={cn(
          "group/step flex items-center justify-center not-last:flex-1 group-data-[orientation=horizontal]/stepper-nav:flex-row group-data-[orientation=vertical]/stepper-nav:flex-col",
          className
        )}
        data-state={state}
        {...(isLoading ? { "data-loading": true } : {})}
        {...props}
      >
        {children}
      </div>
    </StepItemContext.Provider>
  )
}

interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

function StepperTrigger({
  asChild = false,
  className,
  children,
  tabIndex,
  ...props
}: StepperTriggerProps) {
  const { state, isLoading } = useStepItem()
  const stepperCtx = useStepper()
  const {
    setActiveStep,
    activeStep,
    registerTrigger,
    triggerNodes,
    focusNext,
    focusPrev,
    focusFirst,
    focusLast,
  } = stepperCtx
  const { step, isDisabled } = useStepItem()
  const isSelected = activeStep === step
  const id = `stepper-tab-${step}`
  const panelId = `stepper-panel-${step}`

  // Register this trigger for keyboard navigation
  const btnRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (btnRef.current) {
      registerTrigger(btnRef.current)
    }
  }, [btnRef.current])

  // Find our index among triggers for navigation
  const myIdx = useMemo(
    () =>
      triggerNodes.findIndex((n: HTMLButtonElement) => n === btnRef.current),
    [triggerNodes, btnRef.current]
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault()
        if (myIdx !== -1 && focusNext) focusNext(myIdx)
        break
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault()
        if (myIdx !== -1 && focusPrev) focusPrev(myIdx)
        break
      case "Home":
        e.preventDefault()
        if (focusFirst) focusFirst()
        break
      case "End":
        e.preventDefault()
        if (focusLast) focusLast()
        break
      case "Enter":
      case " ":
        e.preventDefault()
        setActiveStep(step)
        break
    }
  }

  if (asChild) {
    return (
      <span
        data-slot="stepper-trigger"
        data-state={state}
        className={className}
      >
        {children}
      </span>
    )
  }

  return (
    <button
      ref={btnRef}
      role="tab"
      id={id}
      aria-selected={isSelected}
      aria-controls={panelId}
      tabIndex={typeof tabIndex === "number" ? tabIndex : isSelected ? 0 : -1}
      data-slot="stepper-trigger"
      data-state={state}
      data-loading={isLoading}
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 inline-flex cursor-pointer items-center outline-none focus-visible:z-10 focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-60",
        "gap-2.5 rounded-full",
        className
      )}
      onClick={() => setActiveStep(step)}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  )
}

function StepperIndicator({
  children,
  className,
}: React.ComponentProps<"div">) {
  const { state, isLoading } = useStepItem()
  const { indicators } = useStepper()

  return (
    <div
      data-slot="stepper-indicator"
      data-state={state}
      className={cn(
        "border-background bg-accent text-accent-foreground data-[state=completed]:bg-primary data-[state=completed]:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative flex size-6 shrink-0 items-center justify-center overflow-hidden",
        "rounded-full text-xs",
        className
      )}
    >
      <div className="absolute">
        {indicators &&
        ((isLoading && indicators.loading) ||
          (state === "completed" && indicators.completed) ||
          (state === "active" && indicators.active) ||
          (state === "inactive" && indicators.inactive))
          ? (isLoading && indicators.loading) ||
            (state === "completed" && indicators.completed) ||
            (state === "active" && indicators.active) ||
            (state === "inactive" && indicators.inactive)
          : children}
      </div>
    </div>
  )
}

function StepperSeparator({ className }: React.ComponentProps<"div">) {
  const { state } = useStepItem()

  return (
    <div
      data-slot="stepper-separator"
      data-state={state}
      className={cn(
        "bg-muted rounded-sm group-data-[orientation=horizontal]/stepper-nav:h-0.5 group-data-[orientation=vertical]/stepper-nav:h-12 group-data-[orientation=vertical]/stepper-nav:w-0.5 m-0.5 group-data-[orientation=horizontal]/stepper-nav:flex-1",
        className
      )}
    />
  )
}

function StepperTitle({ children, className }: React.ComponentProps<"h3">) {
  const { state } = useStepItem()

  return (
    <h3
      data-slot="stepper-title"
      data-state={state}
      className={cn(
        "text-sm leading-none font-medium",
        className
      )}
    >
      {children}
    </h3>
  )
}

function StepperDescription({
  children,
  className,
}: React.ComponentProps<"div">) {
  const { state } = useStepItem()

  return (
    <div
      data-slot="stepper-description"
      data-state={state}
      className={cn(
        "text-muted-foreground text-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

function StepperNav({ children, className }: React.ComponentProps<"nav">) {
  const { activeStep, orientation } = useStepper()

  return (
    <nav
      data-slot="stepper-nav"
      data-state={activeStep}
      data-orientation={orientation}
      className={cn(
        "group/stepper-nav inline-flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
        className
      )}
    >
      {children}
    </nav>
  )
}

function StepperPanel({ children, className }: React.ComponentProps<"div">) {
  const { activeStep } = useStepper()

  return (
    <div
      data-slot="stepper-panel"
      data-state={activeStep}
      className={cn("w-full", className)}
    >
      {children}
    </div>
  )
}

interface StepperContentProps extends React.ComponentProps<"div"> {
  value: number
  forceMount?: boolean
}

function StepperContent({
  value,
  forceMount,
  children,
  className,
}: StepperContentProps) {
  const { activeStep } = useStepper()
  const isActive = value === activeStep

  if (!forceMount && !isActive) {
    return null
  }

  return (
    <div
      data-slot="stepper-content"
      data-state={activeStep}
      className={cn("w-full", className, !isActive && forceMount && "hidden")}
      hidden={!isActive && forceMount}
    >
      {children}
    </div>
  )
}

export {
  useStepper,
  useStepItem,
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
  StepperPanel,
  StepperContent,
  StepperNav,
  type StepperProps,
  type StepperItemProps,
  type StepperTriggerProps,
  type StepperContentProps,
}
```

### Basic stepper (`c-stepper-1`)

Target: `components/examples/c-stepper-1.tsx`

Basic stepper

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTrigger,
} from "@/components/reui/stepper"

const steps = [1, 2, 3, 4]

export function Pattern() {
  return (
    <Stepper defaultValue={2} className="w-full max-w-md space-y-8">
      <StepperNav>
        {steps.map((step) => (
          <StepperItem key={step} step={step}>
            <StepperTrigger>
              <StepperIndicator>{step}</StepperIndicator>
            </StepperTrigger>
            {steps.length > step && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step) => (
          <StepperContent
            key={step}
            value={step}
            className="flex items-center justify-center"
          >
            Step {step} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with completed state (`c-stepper-2`)

Target: `components/examples/c-stepper-2.tsx`

Stepper with completed state

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTrigger,
} from "@/components/reui/stepper"

const steps = [1, 2, 3, 4]

export function Pattern() {
  return (
    <Stepper defaultValue={2} className="w-full max-w-md space-y-8">
      <StepperNav>
        {steps.map((step) => (
          <StepperItem key={step} step={step}>
            <StepperTrigger>
              <StepperIndicator className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=inactive]:text-gray-500">
                {step}
              </StepperIndicator>
            </StepperTrigger>
            {steps.length > step && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-green-500" />
            )}
          </StepperItem>
        ))}
      </StepperNav>
      <StepperPanel className="text-sm">
        {steps.map((step) => (
          <StepperContent
            className="flex w-full items-center justify-center"
            key={step}
            value={step}
          >
            Step {step} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with loading state (`c-stepper-3`)

Target: `components/examples/c-stepper-3.tsx`

Stepper with loading state

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [1, 2, 3]

export function Pattern() {
  return (
    <Stepper
      className="w-full max-w-md"
      defaultValue={2}
      indicators={{
        completed: (
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="LoaderCircleIcon"
            tabler="IconLoader2"
            hugeicons="Loading02Icon"
            phosphor="CircleNotchIcon"
            remixicon="RiLoader4Line"
            className="size-3.5 animate-spin"
          />
        ),
      }}
    >
      <StepperNav className="mb-5">
        {steps.map((step) => (
          <StepperItem key={step} step={step} loading={step === 2}>
            <StepperTrigger>
              <StepperIndicator className="data-[state=active]:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:border-primary data-[state=inactive]:border-muted size-5 border-2 data-[state=completed]:border-green-500 data-[state=completed]:bg-green-500 data-[state=completed]:text-white">
                <span className="bg-primary-foreground hidden size-1.5 rounded-full group-data-[state=active]/step:block"></span>
              </StepperIndicator>
            </StepperTrigger>
            {steps.length > step && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-green-500" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step) => (
          <StepperContent
            className="flex w-full items-center justify-center"
            key={step}
            value={step}
          >
            Step {step} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Controlled stepper (`c-stepper-4`)

Target: `components/examples/c-stepper-4.tsx`

Controlled stepper

```tsx
"use client"

import { useState } from "react"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTrigger,
} from "@/components/reui/stepper"

import { Button } from "@/components/ui/button"

const steps = [1, 2, 3, 4]

export function Pattern() {
  const [currentStep, setCurrentStep] = useState(2)

  return (
    <Stepper
      value={currentStep}
      onValueChange={setCurrentStep}
      className="w-full max-w-md space-y-8"
    >
      <StepperNav>
        {steps.map((step) => (
          <StepperItem key={step} step={step}>
            <StepperTrigger asChild>
              <StepperIndicator className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=inactive]:text-gray-500">
                {step}
              </StepperIndicator>
            </StepperTrigger>
            {steps.length > step && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-green-500" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step) => (
          <StepperContent
            className="flex w-full items-center justify-center"
            key={step}
            value={step}
          >
            Step {step} content
          </StepperContent>
        ))}
      </StepperPanel>

      {/* Buttons */}
      <div className="flex items-center justify-between gap-2.5">
        <Button
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep === steps.length}
        >
          Next
        </Button>
      </div>
    </Stepper>
  )
}
```

### Stepper with title and indicator (`c-stepper-5`)

Target: `components/examples/c-stepper-5.tsx`

Stepper with title and indicator

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [{ title: "Step 1" }, { title: "Step 2" }, { title: "Step 3" }]

export function Pattern() {
  return (
    <Stepper
      className="w-full max-w-md space-y-8"
      defaultValue={2}
      indicators={{
        completed: (
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="LoaderCircleIcon"
            tabler="IconLoader2"
            hugeicons="Loading02Icon"
            phosphor="CircleNotchIcon"
            remixicon="RiLoader4Line"
            className="size-3.5 animate-spin"
          />
        ),
      }}
    >
      <StepperNav>
        {steps.map((step, index) => (
          <StepperItem
            key={index}
            step={index + 1}
            className="relative flex-1 items-start"
          >
            <StepperTrigger className="flex flex-col gap-2.5">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <StepperTitle>{step.title}</StepperTitle>
            </StepperTrigger>

            {steps.length > index + 1 && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary absolute inset-x-0 top-3 left-[calc(50%+0.875rem)] m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            Step {step.title} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with progress bar indicator (`c-stepper-6`)

Target: `components/examples/c-stepper-6.tsx`

Stepper with progress bar indicator

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [
  { title: "User Details" },
  { title: "Payment Info" },
  { title: "Auth OTP" },
  { title: "Preview Form" },
]

export function Pattern() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        completed: (
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="LoaderCircleIcon"
            tabler="IconLoader2"
            hugeicons="Loading02Icon"
            phosphor="CircleNotchIcon"
            remixicon="RiLoader4Line"
            className="size-3.5 animate-spin"
          />
        ),
      }}
      className="w-full max-w-lg space-y-8"
    >
      <StepperNav className="gap-3">
        {steps.map((step, index) => (
          <StepperItem
            key={index}
            step={index + 1}
            className="relative flex-1 items-start"
          >
            <StepperTrigger className="flex grow flex-col items-start justify-center gap-3">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <StepperTitle className="group-data-[state=inactive]/step:text-muted-foreground text-start font-semibold">
                {step.title}
              </StepperTitle>
            </StepperTrigger>
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            {step.title} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with icons and badges (`c-stepper-7`)

Target: `components/examples/c-stepper-7.tsx`

Stepper with icons and badges

```tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [
  {
    title: "User Details",
    icon: (
      <IconPlaceholder
        lucide="BookUserIcon"
        tabler="IconUserSquareRounded"
        hugeicons="UserSquareIcon"
        phosphor="UserSquareIcon"
        remixicon="RiContactsBook2Line"
        className="size-4"
      />
    ),
  },
  {
    title: "Payment Info",
    icon: (
      <IconPlaceholder
        lucide="CreditCardIcon"
        tabler="IconCreditCard"
        hugeicons="CreditCardIcon"
        phosphor="CreditCardIcon"
        remixicon="RiBankCardLine"
        className="size-4"
      />
    ),
  },
  {
    title: "Auth OTP",
    icon: (
      <IconPlaceholder
        lucide="LockIcon"
        tabler="IconLock"
        hugeicons="SquareLock01Icon"
        phosphor="LockSimpleIcon"
        remixicon="RiLockLine"
        className="size-4"
      />
    ),
  },
]

export function Pattern() {
  const [currentStep, setCurrentStep] = useState(2)

  return (
    <Stepper
      value={currentStep}
      onValueChange={setCurrentStep}
      indicators={{
        completed: (
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="LoaderCircleIcon"
            tabler="IconLoader2"
            hugeicons="Loading02Icon"
            phosphor="CircleNotchIcon"
            remixicon="RiLoader4Line"
            className="size-3.5 animate-spin"
          />
        ),
      }}
      className="w-full max-w-xl space-y-8"
    >
      <StepperNav className="gap-3">
        {steps.map((step, index) => (
          <StepperItem
            key={index}
            step={index + 1}
            className="relative flex-1 items-start"
          >
            <StepperTrigger
              className="flex grow flex-col items-start justify-center gap-2.5"
              asChild
            >
              <StepperIndicator className="data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground data-[state=completed]:bg-success size-8 border-2 data-[state=completed]:text-white data-[state=inactive]:bg-transparent">
                {step.icon}
              </StepperIndicator>
              <div className="flex flex-col items-start gap-1">
                <div className="text-muted-foreground text-[10px] font-semibold uppercase">
                  Step {index + 1}
                </div>
                <StepperTitle className="group-data-[state=inactive]/step:text-muted-foreground text-start text-base font-semibold">
                  {step.title}
                </StepperTitle>
                <div>
                  <Badge
                    size="sm"
                    variant="primary-light"
                    className="hidden group-data-[state=active]/step:inline-flex"
                  >
                    In Progress
                  </Badge>
                  <Badge
                    variant="success-light"
                    size="sm"
                    className="hidden group-data-[state=completed]/step:inline-flex"
                  >
                    Completed
                  </Badge>
                  <Badge
                    variant="secondary"
                    size="sm"
                    className="text-muted-foreground hidden group-data-[state=inactive]/step:inline-flex"
                  >
                    Pending
                  </Badge>
                </div>
              </div>
            </StepperTrigger>

            {steps.length > index + 1 && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-success absolute inset-x-0 start-9 top-4 m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            {step.title} content
          </StepperContent>
        ))}
      </StepperPanel>

      <div className="flex items-center justify-between gap-2.5">
        <Button
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep === steps.length}
        >
          Next
        </Button>
      </div>
    </Stepper>
  )
}
```

### Stepper with descriptions (`c-stepper-8`)

Target: `components/examples/c-stepper-8.tsx`

Stepper with descriptions

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [
  { title: "Account", description: "Create your account" },
  { title: "Profile", description: "Set up your profile" },
  { title: "Complete", description: "Review and finish" },
]

export function Pattern() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        completed: (
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="LoaderCircleIcon"
            tabler="IconLoader2"
            hugeicons="Loading02Icon"
            phosphor="CircleNotchIcon"
            remixicon="RiLoader4Line"
            className="size-3.5 animate-spin"
          />
        ),
      }}
      className="w-full max-w-md space-y-8"
    >
      <StepperNav>
        {steps.map((step, index) => (
          <StepperItem
            key={index}
            step={index + 1}
            className="relative flex-1 items-start"
          >
            <StepperTrigger className="flex flex-col gap-2.5">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <StepperTitle>{step.title}</StepperTitle>
              <StepperDescription>{step.description}</StepperDescription>
            </StepperTrigger>

            {steps.length > index + 1 && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary absolute inset-x-0 top-2.5 left-[calc(50%+0.875rem)] m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            {step.title} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with inline titles (`c-stepper-9`)

Target: `components/examples/c-stepper-9.tsx`

Stepper with inline titles

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [{ title: "Account" }, { title: "Profile" }, { title: "Review" }]

export function Pattern() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        completed: (
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="LoaderCircleIcon"
            tabler="IconLoader2"
            hugeicons="Loading02Icon"
            phosphor="CircleNotchIcon"
            remixicon="RiLoader4Line"
            className="size-3.5 animate-spin"
          />
        ),
      }}
      className="w-full max-w-md space-y-8"
    >
      <StepperNav>
        {steps.map((step, index) => (
          <StepperItem key={index} step={index + 1} className="relative">
            <StepperTrigger className="flex justify-start gap-1.5">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <StepperTitle>{step.title}</StepperTitle>
            </StepperTrigger>

            {steps.length > index + 1 && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary md:mx-2.5" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            {step.title} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with content for each step (`c-stepper-10`)

Target: `components/examples/c-stepper-10.tsx`

Stepper with content for each step

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [
  { title: "Step 1", description: "Description" },
  { title: "Step 2", description: "Description" },
  { title: "Step 3", description: "Description" },
]

export function Pattern() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        completed: (
          <IconPlaceholder
            lucide="CheckIcon"
            tabler="IconCheck"
            hugeicons="Tick02Icon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            className="size-3.5"
          />
        ),
        loading: (
          <IconPlaceholder
            lucide="LoaderCircleIcon"
            tabler="IconLoader2"
            hugeicons="Loading02Icon"
            phosphor="CircleNotchIcon"
            remixicon="RiLoader4Line"
            className="size-3.5 animate-spin"
          />
        ),
      }}
      className="w-full max-w-lg space-y-8"
    >
      <StepperNav>
        {steps.map((step, index) => (
          <StepperItem key={index} step={index + 1} className="relative">
            <StepperTrigger className="flex justify-start gap-1.5">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <div className="flex flex-col items-start gap-0.5">
                <StepperTitle>{step.title}</StepperTitle>
                <StepperDescription>{step.description}</StepperDescription>
              </div>
            </StepperTrigger>

            {steps.length > index + 1 && (
              <StepperSeparator className="md:mx-2.5" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            {step.title} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with progress bar and titles (`c-stepper-11`)

Target: `components/examples/c-stepper-11.tsx`

Stepper with progress bar and titles

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

const steps = [
  { title: "User Details" },
  { title: "Payment Info" },
  { title: "Auth OTP" },
  { title: "Preview Form" },
]

export function Pattern() {
  return (
    <Stepper defaultValue={2} className="w-full max-w-lg space-y-8">
      <StepperNav className="mb-10 gap-5">
        {steps.map((step, index) => (
          <StepperItem
            key={index}
            step={index + 1}
            className="relative flex-1 items-start"
          >
            <StepperTrigger className="flex grow flex-col items-start justify-center gap-3.5">
              <StepperIndicator className="bg-border data-[state=active]:bg-primary data-[state=completed]:bg-primary h-1 w-full rounded-full">
                <span className="sr-only">{index + 1}</span>
              </StepperIndicator>
              <StepperTitle className="group-data-[state=inactive]/step:text-muted-foreground text-start font-semibold">
                {step.title}
              </StepperTitle>
            </StepperTrigger>
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            {step.title} content
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  )
}
```

### Stepper with segmented progress bar (`c-stepper-12`)

Target: `components/examples/c-stepper-12.tsx`

Stepper with segmented progress bar

```tsx
"use client"

import { useState } from "react"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTrigger,
} from "@/components/reui/stepper"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [1, 2, 3, 4]

export function Pattern() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="w-full max-w-md">
      <Stepper value={currentStep} onValueChange={setCurrentStep}>
        <StepperNav>
          {steps.map((step) => (
            <StepperItem
              key={step}
              step={step}
              className="first:rounded-s-full last:rounded-e-full flex-1 overflow-hidden transition-all duration-300"
            >
              <StepperTrigger
                className="w-full flex-col items-start gap-2"
                asChild
              >
                <StepperIndicator className="bg-border h-2 w-full rounded-none!">
                  <span className="sr-only">{step}</span>
                </StepperIndicator>
              </StepperTrigger>
            </StepperItem>
          ))}
        </StepperNav>

        <div className="flex items-center justify-between gap-2.5 py-1">
          <Button
            variant="link"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className={cn(
              "px-0",
              currentStep === 1 && "pointer-events-none opacity-0"
            )}
          >
            <IconPlaceholder
              lucide="ArrowLeftIcon"
              tabler="IconArrowLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="ArrowLeftIcon"
              remixicon="RiArrowLeftLine"
              className="size-4"
            />
            Back
          </Button>

          <div className="text-sm font-medium">
            <span className="text-foreground">{currentStep}</span>{" "}
            <span className="text-muted-foreground/60">/ {steps.length}</span>
          </div>
        </div>

        <StepperPanel className="py-6 text-sm">
          {steps.map((step) => (
            <StepperContent
              className="flex w-full items-center justify-center"
              key={step}
              value={step}
            >
              Step {step} content
            </StepperContent>
          ))}
        </StepperPanel>

        <div className="flex items-center justify-end gap-2.5">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={currentStep === steps.length}
          >
            Next
          </Button>
        </div>
      </Stepper>
    </div>
  )
}
```

### Stepper with vertical orientation and descriptions (`c-stepper-13`)

Target: `components/examples/c-stepper-13.tsx`

Stepper with vertical orientation and descriptions

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [
  { title: "Account", description: "Create your account" },
  { title: "Profile", description: "Set up your profile" },
  { title: "Review", description: "Confirm your details" },
]

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Stepper
        className="flex flex-col items-center justify-center gap-10"
        defaultValue={2}
        orientation="vertical"
        indicators={{
          completed: (
            <IconPlaceholder
              lucide="CheckIcon"
              tabler="IconCheck"
              hugeicons="Tick02Icon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              className="size-3.5"
            />
          ),
          loading: (
            <IconPlaceholder
              lucide="LoaderCircleIcon"
              tabler="IconLoader2"
              hugeicons="Loading02Icon"
              phosphor="CircleNotchIcon"
              remixicon="RiLoader4Line"
              className="size-3.5 animate-spin"
            />
          ),
        }}
      >
        <StepperNav>
          {steps.map((step, index) => (
            <StepperItem
              key={index}
              step={index + 1}
              className="relative items-start not-last:flex-1"
            >
              <StepperTrigger className="items-start gap-2.5 pb-12 last:pb-0">
                <StepperIndicator className="data-[state=completed]:bg-success data-[state=completed]:text-white">
                  {index + 1}
                </StepperIndicator>
                <div className="mt-0.5 text-left">
                  <StepperTitle>{step.title}</StepperTitle>
                  <StepperDescription>{step.description}</StepperDescription>
                </div>
              </StepperTrigger>
              {index < steps.length - 1 && (
                <StepperSeparator className="group-data-[state=completed]/step:bg-success absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)]" />
              )}
            </StepperItem>
          ))}
        </StepperNav>

        <StepperPanel className="w-56 text-center text-sm">
          {steps.map((step, index) => (
            <StepperContent key={index} value={index + 1}>
              {step.title} content
            </StepperContent>
          ))}
        </StepperPanel>
      </Stepper>
    </div>
  )
}
```

### Stepper with vertical orientation (`c-stepper-14`)

Target: `components/examples/c-stepper-14.tsx`

Stepper with vertical orientation

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [1, 2, 3]

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Stepper
        className="flex flex-col items-center justify-center gap-10"
        defaultValue={2}
        orientation="vertical"
        indicators={{
          completed: (
            <IconPlaceholder
              lucide="CheckIcon"
              tabler="IconCheck"
              hugeicons="Tick02Icon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              className="size-3.5"
            />
          ),
          loading: (
            <IconPlaceholder
              lucide="LoaderCircleIcon"
              tabler="IconLoader2"
              hugeicons="Loading02Icon"
              phosphor="CircleNotchIcon"
              remixicon="RiLoader4Line"
              className="size-3.5 animate-spin"
            />
          ),
        }}
      >
        <StepperNav>
          {steps.map((step) => (
            <StepperItem key={step} step={step} loading={step === 2}>
              <StepperTrigger>
                <StepperIndicator className="data-[state=completed]:bg-success data-[state=completed]:text-white">
                  {step}
                </StepperIndicator>
              </StepperTrigger>
              {steps.length > step && (
                <StepperSeparator className="group-data-[state=completed]/step:bg-success" />
              )}
            </StepperItem>
          ))}
        </StepperNav>

        <StepperPanel className="w-56 text-center text-sm">
          {steps.map((step) => (
            <StepperContent key={step} value={step}>
              Step {step} content
            </StepperContent>
          ))}
        </StepperPanel>
      </Stepper>
    </div>
  )
}
```

### Stepper with vertical orientation and titles (`c-stepper-15`)

Target: `components/examples/c-stepper-15.tsx`

Stepper with vertical orientation and titles

```tsx
"use client"

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const steps = [{ title: "Account" }, { title: "Profile" }, { title: "Review" }]

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Stepper
        className="flex flex-col items-center justify-center gap-10"
        defaultValue={2}
        orientation="vertical"
        indicators={{
          completed: (
            <IconPlaceholder
              lucide="CheckIcon"
              tabler="IconCheck"
              hugeicons="Tick02Icon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              className="size-3.5"
            />
          ),
          loading: (
            <IconPlaceholder
              lucide="LoaderCircleIcon"
              tabler="IconLoader2"
              hugeicons="Loading02Icon"
              phosphor="CircleNotchIcon"
              remixicon="RiLoader4Line"
              className="size-3.5 animate-spin"
            />
          ),
        }}
      >
        <StepperNav>
          {steps.map((step, index) => (
            <StepperItem
              key={index}
              step={index + 1}
              className="relative items-start not-last:flex-1"
            >
              <StepperTrigger className="items-start gap-2.5 pb-12 last:pb-0">
                <StepperIndicator className="data-[state=completed]:bg-success data-[state=completed]:text-white">
                  {index + 1}
                </StepperIndicator>
                <div className="mt-0.5 text-left">
                  <StepperTitle>{step.title}</StepperTitle>
                </div>
              </StepperTrigger>
              {index < steps.length - 1 && (
                <StepperSeparator className="group-data-[state=completed]/step:bg-success absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)]" />
              )}
            </StepperItem>
          ))}
        </StepperNav>

        <StepperPanel className="w-56 text-center text-sm">
          {steps.map((step, index) => (
            <StepperContent key={index} value={index + 1}>
              {step.title} content
            </StepperContent>
          ))}
        </StepperPanel>
      </Stepper>
    </div>
  )
}
```
