# Calendar (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

30 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-calendar-1` | Basic calendar | registry:block | Basic calendar |
| `c-calendar-2` | Range calendar | registry:block | Range calendar |
| `c-calendar-3` | Disabled dates | registry:block | Disabled dates |
| `c-calendar-4` | Multiple day selection | registry:block | Multiple day selection |
| `c-calendar-5` | Custom select day style | registry:block | Custom select day style |
| `c-calendar-6` | Custom select range style | registry:block | Custom select range style |
| `c-calendar-7` | Right navigation | registry:block | Right navigation |
| `c-calendar-8` | Month and year selection | registry:block | Month and year selection |
| `c-calendar-9` | Year select with navigation | registry:block | Year select with navigation |
| `c-calendar-10` | Display week numbers | registry:block | Display week numbers |
| `c-calendar-11` | Current month button | registry:block | Current month button |
| `c-calendar-12` | Today button | registry:block | Today button |
| `c-calendar-13` | Custom navigation with year view | registry:block | Custom navigation with year view |
| `c-calendar-14` | Preset time selection | registry:block | Preset time selection |
| `c-calendar-15` | Calendar with presets | registry:block | Calendar with presets |
| `c-calendar-16` | Range calendar with presets | registry:block | Range calendar with presets |
| `c-calendar-17` | Calendar with pricing | registry:block | Calendar with pricing |
| `c-calendar-18` | Calendar with presets | registry:block | Calendar with presets |
| `c-calendar-19` | Appointment calendar | registry:block | Appointment calendar |
| `c-calendar-20` | Display 2 months | registry:block | Display 2 months |
| `c-calendar-21` | Display 2 months with range picker | registry:block | Display 2 months with range picker |
| `c-calendar-22` | Calendar with event list | registry:block | Calendar with event list |
| `c-calendar-23` | Localize calendar | registry:block | Localize calendar |
| `c-calendar-24` | Calendar with date picker | registry:block | Calendar with date picker |
| `c-calendar-25` | Calendar with date range picker | registry:block | Calendar with date range picker |
| `c-calendar-26` | Calendar with date picker and year view | registry:block | Calendar with date picker and year view |
| `c-calendar-27` | Calendar with date and appointment picker | registry:block | Calendar with date and appointment picker |
| `c-calendar-28` | Calendar with date picker and presets | registry:block | Calendar with date picker and presets |
| `c-calendar-29` | Range calendar with date picker and presets | registry:block | Range calendar with date picker and presets |
| `c-calendar-30` | Calendar with date and time range picker | registry:block | Calendar with date and time range picker |

## Source

### Basic calendar (`c-calendar-1`)

Target: `components/examples/c-calendar-1.tsx`

Basic calendar

```tsx
"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar mode="single" onSelect={setDate} selected={date} />
      </CardContent>
    </Card>
  )
}
```

### Range calendar (`c-calendar-2`)

Target: `components/examples/c-calendar-2.tsx`

Range calendar

```tsx
"use client"

import { useState } from "react"
import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 5),
  })

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar mode="range" onSelect={setDate} selected={date} />
      </CardContent>
    </Card>
  )
}
```

### Disabled dates (`c-calendar-3`)

Target: `components/examples/c-calendar-3.tsx`

Disabled dates

```tsx
"use client"

import { addDays } from "date-fns"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          disabled={[
            { before: new Date() },
            new Date(),
            { dayOfWeek: [0, 6] },
            {
              from: addDays(today, 14),
              to: addDays(today, 16),
            },
            {
              from: addDays(today, 23),
              to: addDays(today, 24),
            },
          ]}
          excludeDisabled
          mode="range"
        />
      </CardContent>
    </Card>
  )
}
```

### Multiple day selection (`c-calendar-4`)

Target: `components/examples/c-calendar-4.tsx`

Multiple day selection

```tsx
"use client"

import { useState } from "react"
import { addDays, subDays } from "date-fns"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()
  const [date, setDate] = useState<Date[] | undefined>([
    subDays(today, 17),
    addDays(today, 2),
    addDays(today, 6),
    addDays(today, 8),
  ])

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar mode="multiple" onSelect={setDate} selected={date} />
      </CardContent>
    </Card>
  )
}
```

### Custom select day style (`c-calendar-5`)

Target: `components/examples/c-calendar-5.tsx`

Custom select day style

```tsx
"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          classNames={{
            day_button: "!rounded-full",
          }}
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </CardContent>
    </Card>
  )
}
```

### Custom select range style (`c-calendar-6`)

Target: `components/examples/c-calendar-6.tsx`

Custom select range style

```tsx
"use client"

import { useState } from "react"
import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 5),
  })

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          classNames={{
            day: "relative before:absolute before:inset-y-px before:inset-x-0 [&.range-start:not(.range-end):before]:bg-linear-to-r before:from-transparent before:from-50% before:to-accent before:to-50% [&.range-end:not(.range-start):before]:bg-linear-to-l",
            day_button:
              "!rounded-full group-[.range-start:not(.range-end)]:rounded-e-full group-[.range-end:not(.range-start)]:rounded-s-full",
          }}
          mode="range"
          onSelect={setDate}
          selected={date}
        />
      </CardContent>
    </Card>
  )
}
```

### Right navigation (`c-calendar-7`)

Target: `components/examples/c-calendar-7.tsx`

Right navigation

```tsx
"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          classNames={{
            month_caption: "ms-2.5 justify-start",
            nav: "flex items-center w-full absolute -top-1 inset-x-0 justify-end",
          }}
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </CardContent>
    </Card>
  )
}
```

### Month and year selection (`c-calendar-8`)

Target: `components/examples/c-calendar-8.tsx`

Month and year selection

```tsx
"use client"

import { ChangeEvent, ChangeEventHandler, useState } from "react"
import type { DropdownNavProps, DropdownProps } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleCalendarChange = (
    _value: string | number,
    _e: ChangeEventHandler<HTMLSelectElement>
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as ChangeEvent<HTMLSelectElement>
    _e(_event)
  }

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          captionLayout="dropdown"
          classNames={{
            month_caption: "mx-0",
          }}
          components={{
            Dropdown: (props: DropdownProps) => {
              return (
                <Select
                  onValueChange={(value) => {
                    if (props.onChange && value !== null) {
                      handleCalendarChange(value, props.onChange)
                    }
                  }}
                  value={String(props.value)}
                >
                  <SelectTrigger className="first:grow">
                    <SelectValue>
                      {
                        props.options?.find(
                          (option) => option.value === props.value
                        )?.label
                      }
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent align="start">
                    {props.options?.map((option) => (
                      <SelectItem
                        disabled={option.disabled}
                        key={option.value}
                        value={String(option.value)}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )
            },
            DropdownNav: (props: DropdownNavProps) => {
              return (
                <div className="flex w-full items-center gap-2">
                  {props.children}
                </div>
              )
            },
          }}
          defaultMonth={new Date()}
          hideNavigation
          mode="single"
          onSelect={setDate}
          selected={date}
          startMonth={new Date(1980, 6)}
        />
      </CardContent>
    </Card>
  )
}
```

### Year select with navigation (`c-calendar-9`)

Target: `components/examples/c-calendar-9.tsx`

Year select with navigation

```tsx
"use client"

import { ChangeEvent, ChangeEventHandler, useState } from "react"
import type { DropdownNavProps, DropdownProps } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleCalendarChange = (
    _value: string | number,
    _e: ChangeEventHandler<HTMLSelectElement>
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as ChangeEvent<HTMLSelectElement>
    _e(_event)
  }

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          captionLayout="dropdown-years"
          classNames={{
            nav: "flex items-center w-full absolute top-0 inset-x-0 justify-between pointer-events-none [&>button]:pointer-events-auto",
          }}
          components={{
            DropdownNav: (props: DropdownNavProps) => {
              return (
                <div className="flex w-full items-center justify-center gap-3 [&>span]:text-sm [&>span]:font-medium">
                  {props.children}
                </div>
              )
            },
            YearsDropdown: (props: DropdownProps) => {
              return (
                <Select
                  onValueChange={(value) => {
                    if (value == null || !props.onChange) {
                      return
                    }
                    handleCalendarChange(value, props.onChange)
                  }}
                  value={String(props.value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {props.options?.map((option) => (
                      <SelectItem
                        disabled={option.disabled}
                        key={option.value}
                        value={String(option.value)}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )
            },
          }}
          defaultMonth={new Date()}
          mode="single"
          onSelect={setDate}
          selected={date}
          startMonth={new Date(1980, 6)}
        />
      </CardContent>
    </Card>
  )
}
```

### Display week numbers (`c-calendar-10`)

Target: `components/examples/c-calendar-10.tsx`

Display week numbers

```tsx
"use client"

import { useState } from "react"
import type { WeekNumberProps } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          components={{
            WeekNumber: ({ week, ...props }: WeekNumberProps) => {
              return (
                <th {...props}>
                  <span className="text-muted-foreground inline-flex size-8 items-center justify-center text-sm font-normal">
                    {week.weekNumber}
                  </span>
                </th>
              )
            },
          }}
          fixedWeeks
          mode="single"
          onSelect={setDate}
          selected={date}
          showWeekNumber
        />
      </CardContent>
    </Card>
  )
}
```

### Current month button (`c-calendar-11`)

Target: `components/examples/c-calendar-11.tsx`

Current month button

```tsx
"use client"

import { useState } from "react"
import { addDays } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()
  const selectedDay = addDays(today, -28)
  const [month, setMonth] = useState(selectedDay)
  const [date, setDate] = useState<Date | undefined>(selectedDay)

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          month={month}
          onMonthChange={setMonth}
          onSelect={setDate}
          selected={date}
        />
        <Button
          className="mb-2 ml-4"
          onClick={() => setMonth(today)}
          size="sm"
          variant="outline"
        >
          Current month
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Today button (`c-calendar-12`)

Target: `components/examples/c-calendar-12.tsx`

Today button

```tsx
"use client"

import { useState } from "react"
import { addDays } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()
  const selectedDay = addDays(today, -28)
  const [month, setMonth] = useState(selectedDay)
  const [date, setDate] = useState<Date | undefined>(selectedDay)

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          month={month}
          onMonthChange={setMonth}
          onSelect={setDate}
          selected={date}
        />
        <Button
          className="mb-2 ml-4"
          onClick={() => {
            setDate(today)
            setMonth(today)
          }}
          size="sm"
          variant="outline"
        >
          Current today
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Custom navigation with year view (`c-calendar-13`)

Target: `components/examples/c-calendar-13.tsx`

Custom navigation with year view

```tsx
"use client"

import {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  eachMonthOfInterval,
  eachYearOfInterval,
  endOfYear,
  format,
  isAfter,
  isBefore,
  startOfYear,
} from "date-fns"
import type { CaptionLabelProps, MonthGridProps } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const today = new Date()
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<Date | undefined>(today)
  const [isYearView, setIsYearView] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const startYear = today.getFullYear() - 10
  const endYear = today.getFullYear() + 10
  const startDate = startOfYear(new Date(startYear, 0))
  const endDate = endOfYear(new Date(endYear, 11))

  const years = eachYearOfInterval({
    end: endOfYear(endDate),
    start: startOfYear(startDate),
  })

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          classNames={{
            month_caption: "ms-2.5 justify-start",
            nav: "flex items-center w-full absolute inset-x-0 justify-end pointer-events-none [&>button]:pointer-events-auto",
          }}
          components={{
            CaptionLabel: (props: CaptionLabelProps) => (
              <CaptionLabel
                isYearView={isYearView}
                setIsYearView={(val) => {
                  setIsYearView(val)
                  if (!val) setSelectedYear(null)
                }}
                {...props}
              />
            ),
            MonthGrid: (props: MonthGridProps) => {
              return (
                <MonthGrid
                  className={props.className}
                  currentMonth={month.getMonth()}
                  currentYear={month.getFullYear()}
                  endDate={endDate}
                  isYearView={isYearView}
                  onMonthSelect={(selectedMonth: Date) => {
                    setMonth(selectedMonth)
                    setIsYearView(false)
                    setSelectedYear(null)
                  }}
                  setIsYearView={setIsYearView}
                  startDate={startDate}
                  years={years}
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                >
                  {props.children}
                </MonthGrid>
              )
            },
          }}
          defaultMonth={new Date()}
          endMonth={endDate}
          mode="single"
          month={month}
          onMonthChange={setMonth}
          onSelect={setDate}
          selected={date}
          startMonth={startDate}
        />
      </CardContent>
    </Card>
  )
}

function MonthGrid({
  className,
  children,
  isYearView,
  years,
  currentYear,
  currentMonth,
  onMonthSelect,
  selectedYear,
  setSelectedYear,
  startDate,
  endDate,
}: {
  className?: string
  children: ReactNode
  isYearView: boolean
  setIsYearView: Dispatch<SetStateAction<boolean>>
  startDate: Date
  endDate: Date
  years: Date[]
  currentYear: number
  currentMonth: number
  onMonthSelect: (date: Date) => void
  selectedYear: number | null
  setSelectedYear: Dispatch<SetStateAction<number | null>>
}) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isYearView && scrollAreaRef.current) {
      const activeElement = scrollAreaRef.current.querySelector(
        "[data-active='true']"
      ) as HTMLElement | null

      if (activeElement) {
        activeElement.scrollIntoView({ block: "center" })
      }
    }
  }, [isYearView, selectedYear])

  return (
    <div className="relative">
      <table className={className}>{children}</table>
      {isYearView && (
        <div className="bg-background absolute inset-0 z-20 -m-2">
          <div className="h-full" ref={scrollAreaRef}>
            <ScrollArea className="h-full">
              <div className="px-3 pt-1 pb-3">
                {selectedYear === null ? (
                  <div className="grid grid-cols-4 gap-2">
                    {years.map((year) => {
                      const y = year.getFullYear()
                      const isCurrent = y === currentYear
                      return (
                        <Button
                          key={y}
                          variant={isCurrent ? "default" : "outline"}
                          size="sm"
                          className="h-8"
                          data-active={isCurrent}
                          onClick={() => setSelectedYear(y)}
                        >
                          {y}
                        </Button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-2"
                        onClick={() => setSelectedYear(null)}
                      >
                        <IconPlaceholder
                          lucide="ChevronDownIcon"
                          tabler="IconChevronDown"
                          hugeicons="ArrowDown01Icon"
                          phosphor="CaretDownIcon"
                          remixicon="RiArrowDownSLine"
                          className="mr-1 size-4 rotate-90"
                        />
                        {selectedYear}
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {eachMonthOfInterval({
                        start: startOfYear(new Date(selectedYear, 0)),
                        end: endOfYear(new Date(selectedYear, 0)),
                      }).map((month) => {
                        const isCurrent =
                          month.getMonth() === currentMonth &&
                          selectedYear === currentYear

                        const isDisabled =
                          isBefore(month, startOfYear(startDate)) ||
                          isAfter(month, endOfYear(endDate))

                        return (
                          <Button
                            key={month.getTime()}
                            variant={isCurrent ? "default" : "outline"}
                            size="sm"
                            className="h-8"
                            data-active={isCurrent}
                            disabled={isDisabled}
                            onClick={() => onMonthSelect(month)}
                          >
                            {format(month, "MMM")}
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  )
}

function CaptionLabel({
  children,
  isYearView,
  setIsYearView,
}: {
  isYearView: boolean
  setIsYearView: Dispatch<SetStateAction<boolean>>
} & HTMLAttributes<HTMLSpanElement>) {
  return (
    <Button
      className="data-[state=open]:text-muted-foreground/80 -ms-2 flex items-center gap-2 text-sm font-medium hover:bg-transparent [&[data-state=open]>svg]:rotate-180"
      data-state={isYearView ? "open" : "closed"}
      onClick={() => setIsYearView((prev) => !prev)}
      size="sm"
      variant="ghost"
    >
      {children}
      <IconPlaceholder
        lucide="ChevronDownIcon"
        tabler="IconChevronDown"
        hugeicons="ArrowDown01Icon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
        aria-hidden="true"
        className="text-muted-foreground/80 shrink-0 transition-transform duration-200"
      />
    </Button>
  )
}
```

### Preset time selection (`c-calendar-14`)

Target: `components/examples/c-calendar-14.tsx`

Preset time selection

```tsx
"use client"

import { useState } from "react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Pattern() {
  const today = new Date()
  const [date, setDate] = useState<Date>(today)
  const [time, setTime] = useState<string | null>(null)

  // Mock time slots data
  const timeSlots = [
    { available: false, time: "09:00" },
    { available: false, time: "09:30" },
    { available: true, time: "10:00" },
    { available: true, time: "10:30" },
    { available: true, time: "11:00" },
    { available: true, time: "11:30" },
    { available: false, time: "12:00" },
    { available: true, time: "12:30" },
    { available: true, time: "13:00" },
    { available: true, time: "13:30" },
    { available: true, time: "14:00" },
    { available: false, time: "14:30" },
    { available: false, time: "15:00" },
    { available: true, time: "15:30" },
    { available: true, time: "16:00" },
    { available: true, time: "16:30" },
    { available: true, time: "17:00" },
    { available: true, time: "17:30" },
  ]

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <div className="flex max-sm:flex-col">
          <Calendar
            disabled={[{ before: today }]}
            mode="single"
            onSelect={(newDate) => {
              if (newDate) {
                setDate(newDate)
                setTime(null)
              }
            }}
            selected={date}
          />
          <div className="relative w-full max-sm:h-48 sm:w-40">
            <div className="absolute inset-0 py-4 max-sm:border-t">
              <ScrollArea className="h-full sm:border-s">
                <div className="space-y-3">
                  <div className="flex h-5 shrink-0 items-center px-5">
                    <p className="text-sm font-medium">
                      {format(date, "EEEE, d")}
                    </p>
                  </div>
                  <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                    {timeSlots.map(({ time: timeSlot, available }) => (
                      <Button
                        className="w-full"
                        disabled={!available}
                        key={timeSlot}
                        onClick={() => setTime(timeSlot)}
                        size="sm"
                        variant={time === timeSlot ? "default" : "outline"}
                      >
                        {timeSlot}
                      </Button>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Calendar with presets (`c-calendar-15`)

Target: `components/examples/c-calendar-15.tsx`

Calendar with presets

```tsx
"use client"

import { useState } from "react"
import { subDays, subMonths, subYears } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()
  const yesterday = subDays(today, 1)
  const lastWeek = subDays(today, 7)
  const lastMonth = subMonths(today, 1)
  const lastYear = subYears(today, 1)
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<Date>(today)

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <div className="flex max-sm:flex-col">
          <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
            <div className="h-full sm:border-e">
              <div className="flex flex-col px-2">
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(today)
                    setMonth(today)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Today
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(yesterday)
                    setMonth(yesterday)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Yesterday
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastWeek)
                    setMonth(lastWeek)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Last week
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastMonth)
                    setMonth(lastMonth)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Last month
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastYear)
                    setMonth(lastYear)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Last year
                </Button>
              </div>
            </div>
          </div>
          <Calendar
            disabled={[{ after: today }]}
            mode="single"
            month={month}
            onMonthChange={setMonth}
            onSelect={(newDate) => {
              if (newDate) {
                setDate(newDate)
              }
            }}
            selected={date}
          />
        </div>
      </CardContent>
    </Card>
  )
}
```

### Range calendar with presets (`c-calendar-16`)

Target: `components/examples/c-calendar-16.tsx`

Range calendar with presets

```tsx
"use client"

import { useState } from "react"
import {
  endOfMonth,
  endOfYear,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const today = new Date()
  const yesterday = {
    from: subDays(today, 1),
    to: subDays(today, 1),
  }
  const last7Days = {
    from: subDays(today, 6),
    to: today,
  }
  const last30Days = {
    from: subDays(today, 29),
    to: today,
  }
  const monthToDate = {
    from: startOfMonth(today),
    to: today,
  }
  const lastMonth = {
    from: startOfMonth(subMonths(today, 1)),
    to: endOfMonth(subMonths(today, 1)),
  }
  const yearToDate = {
    from: startOfYear(today),
    to: today,
  }
  const lastYear = {
    from: startOfYear(subYears(today, 1)),
    to: endOfYear(subYears(today, 1)),
  }
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<DateRange | undefined>(last7Days)

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <div className="flex max-sm:flex-col">
          <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
            <div className="h-full sm:border-e">
              <div className="flex flex-col px-2">
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate({
                      from: today,
                      to: today,
                    })
                    setMonth(today)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Today
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(yesterday)
                    setMonth(yesterday.to)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Yesterday
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(last7Days)
                    setMonth(last7Days.to)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Last 7 days
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(last30Days)
                    setMonth(last30Days.to)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Last 30 days
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(monthToDate)
                    setMonth(monthToDate.to)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Month to date
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastMonth)
                    setMonth(lastMonth.to)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Last month
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(yearToDate)
                    setMonth(yearToDate.to)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Year to date
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastYear)
                    setMonth(lastYear.to)
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Last year
                </Button>
              </div>
            </div>
          </div>
          <Calendar
            disabled={[{ after: today }]}
            mode="range"
            month={month}
            onMonthChange={setMonth}
            onSelect={(newDate) => {
              if (newDate) {
                setDate(newDate)
              }
            }}
            selected={date}
          />
        </div>
      </CardContent>
    </Card>
  )
}
```

### Calendar with pricing (`c-calendar-17`)

Target: `components/examples/c-calendar-17.tsx`

Calendar with pricing

```tsx
"use client"

import { useState } from "react"

import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

function getPriceForDate(date: Date) {
  const seed =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()

  const val = (seed * 9301 + 49297) % 233280

  return Math.floor(50 + (val / 233280) * 200)
}

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      showOutsideDays={false}
      className="rounded-lg border [--cell-size:--spacing(12)]"
      components={{
        DayButton: ({ children, modifiers, day, ...props }) => {
          const price = getPriceForDate(day.date)
          const isGreen = price < 100

          return (
            <CalendarDayButton day={day} modifiers={modifiers} {...props}>
              {children}
              {!modifiers.outside && (
                <span
                  className={
                    isGreen ? "text-green-600 dark:text-green-400" : ""
                  }
                >
                  ${price}
                </span>
              )}
            </CalendarDayButton>
          )
        },
      }}
    />
  )
}
```

### Calendar with presets (`c-calendar-18`)

Target: `components/examples/c-calendar-18.tsx`

Calendar with presets

```tsx
"use client"

import { useState } from "react"
import { addDays } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12)
  )
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )

  return (
    <Card className="mx-auto w-fit max-w-[300px]" size="sm">
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          fixedWeeks
          className="p-0 [--cell-size:--spacing(9.5)]"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t">
        {[
          { label: "Today", value: 0 },
          { label: "Tomorrow", value: 1 },
          { label: "3 days", value: 3 },
          { label: "Week", value: 7 },
          { label: "2 weeks", value: 14 },
        ].map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => {
              const newDate = addDays(new Date(), preset.value)
              setDate(newDate)
              setCurrentMonth(
                new Date(newDate.getFullYear(), newDate.getMonth(), 1)
              )
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
```

### Appointment calendar (`c-calendar-19`)

Target: `components/examples/c-calendar-19.tsx`

Appointment calendar

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00")

  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15
    const hour = Math.floor(totalMinutes / 60) + 9
    const minute = totalMinutes % 60

    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
  })

  const bookedDates = Array.from(
    { length: 3 },
    (_, i) =>
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + i
      )
  )

  return (
    <Card className="gap-0 p-0">
      <CardHeader className="flex h-max items-center justify-start border-b px-4! py-3!">
        <CardTitle>Book your appointment</CardTitle>
      </CardHeader>
      <CardContent className="relative p-0 md:pr-48">
        <div className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            disabled={bookedDates}
            showOutsideDays={false}
            modifiers={{
              booked: bookedDates,
            }}
          />
        </div>
        <div className="inset-y-0 right-0 flex w-full flex-col gap-4 border-t max-md:h-60 md:absolute md:w-48 md:border-t-0 md:border-l">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-2 p-4">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className="w-full shadow-none"
                >
                  {time}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t px-4 py-3! md:flex-row">
        <div className="flex max-w-64 items-center gap-2 text-sm">
          {date && selectedTime ? (
            <>
              <IconPlaceholder
                lucide="CircleCheckIcon"
                tabler="IconCircleCheck"
                hugeicons="CheckmarkCircle01Icon"
                phosphor="CheckCircleIcon"
                remixicon="RiCheckboxCircleLine"
                className="size-4 shrink-0"
              />
              <span className="text-sm">
                Your meeting is booked for{" "}
                <span className="font-medium">
                  {" "}
                  {date?.toLocaleDateString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                </span>
                at <span className="font-medium">{selectedTime}</span>
              </span>
            </>
          ) : (
            <>Select a date and time for your meeting.</>
          )}
        </div>
        <Button
          disabled={!date || !selectedTime}
          className="w-full md:ml-auto md:w-auto"
          variant="outline"
        >
          Confirm
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Display 2 months (`c-calendar-20`)

Target: `components/examples/c-calendar-20.tsx`

Display 2 months

```tsx
"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          numberOfMonths={2}
          onSelect={setDate}
          selected={date}
        />
      </CardContent>
    </Card>
  )
}
```

### Display 2 months with range picker (`c-calendar-21`)

Target: `components/examples/c-calendar-21.tsx`

Display 2 months with range picker

```tsx
"use client"

import { useState } from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const endOfMonth = new Date(year, month + 1, 0).getDate()

const from = new Date(year, month, Math.min(6, endOfMonth))
const to = new Date(year, month, Math.min(18, endOfMonth))

export function Pattern() {
  const [date, setDate] = useState<DateRange | undefined>({
    from,
    to,
  })

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          numberOfMonths={2}
          onSelect={setDate}
          selected={date}
        />
      </CardContent>
    </Card>
  )
}
```

### Calendar with event list (`c-calendar-22`)

Target: `components/examples/c-calendar-22.tsx`

Calendar with event list

```tsx
"use client"

import { useState } from "react"
import { formatDateRange } from "little-date"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const events = [
  {
    title: "Product Launch",
    start: "2026-01-24T10:00:00",
    end: "2026-01-24T11:30:00",
    colorful: "after:bg-green-500",
  },
  {
    title: "Weekly Standup",
    start: "2026-01-28T13:00:00",
    end: "2026-01-28T13:30:00",
    colorful: "after:bg-yellow-500",
  },
  {
    title: "Code Review Session",
    start: "2026-01-31T15:00:00",
    end: "2026-01-31T16:00:00",
    colorful: "after:bg-blue-500",
  },
]

export function Pattern() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="w-2xs py-4">
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full bg-transparent p-0"
          required
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 border-t px-4! pt-3! pb-0!">
        <div className="flex w-full items-center justify-between px-1">
          <div className="text-sm font-medium">
            {date?.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            title="Add Event"
          >
            <IconPlaceholder
              lucide="PlusIcon"
              tabler="IconPlus"
              hugeicons="PlusSignIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
            />
            <span className="sr-only">Add Event</span>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2">
          {events.map((event) => (
            <div
              key={event.title}
              className={cn(
                "bg-muted relative p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1",
                "rounded-md",
                "after:rounded-full",
                event.colorful
              )}
            >
              <div className="font-medium">{event.title}</div>
              <div className="text-muted-foreground text-xs">
                {formatDateRange(new Date(event.start), new Date(event.end))}
              </div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
```

### Localize calendar (`c-calendar-23`)

Target: `components/examples/c-calendar-23.tsx`

Localize calendar

```tsx
"use client"

import { useState } from "react"
import { type DateRange } from "react-day-picker"
import { enUS, zhCN } from "react-day-picker/locale"

import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const localizedStrings = {
  en: {
    title: "Schedule a meeting",
    description: "Choose your preferred dates",
  },
  zh: {
    title: "安排会议",
    description: "选择您偏好的日期",
  },
} as const

export function Pattern() {
  const [locale, setLocale] = useState<keyof typeof localizedStrings>("en")

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 1, 9),
    to: new Date(2026, 1, 17),
  })

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{localizedStrings[locale].title}</CardTitle>
        <CardAction>
          <Select
            value={locale}
            onValueChange={(value) =>
              setLocale(value as keyof typeof localizedStrings)
            }
          >
            <SelectTrigger className="w-[60px]" aria-label="Select language">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent position="popper" align="start">
              <SelectItem value="zh">Chinese</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <CardContent className="border-t pt-3">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          defaultMonth={dateRange?.from}
          locale={locale === "zh" ? zhCN : enUS}
          numerals="latn"
          className="w-full bg-transparent p-0"
          buttonVariant="ghost"
        />
      </CardContent>
    </Card>
  )
}
```

### Calendar with date picker (`c-calendar-24`)

Target: `components/examples/c-calendar-24.tsx`

Calendar with date picker

```tsx
"use client"

import { useId, useState } from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className="group/pick-date w-60 justify-between"
          id={id}
          variant="outline"
        >
          <span className={cn("truncate", !date && "text-muted-foreground")}>
            {date ? format(date, "PPP") : "Pick a date"}
          </span>
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendarEvent"
            hugeicons="Calendar04Icon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            aria-hidden="true"
            className="opacity-60 transition-opacity group-hover/pick-date:opacity-100"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar mode="single" onSelect={setDate} selected={date} />
      </PopoverContent>
    </Popover>
  )
}
```

### Calendar with date range picker (`c-calendar-25`)

Target: `components/examples/c-calendar-25.tsx`

Calendar with date range picker

```tsx
"use client"

import { useId, useState } from "react"
import { format } from "date-fns"
import { type DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className="group/pick-date w-60 justify-between"
          id={id}
          variant="outline"
        >
          <span className={cn("truncate", !date && "text-muted-foreground")}>
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              "Pick a date range"
            )}
          </span>
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendarEvent"
            hugeicons="Calendar04Icon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            aria-hidden="true"
            className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Card className="p-0">
          <CardContent className="p-0">
            <Calendar
              mode="range"
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
```

### Calendar with date picker and year view (`c-calendar-26`)

Target: `components/examples/c-calendar-26.tsx`

Calendar with date picker and year view

```tsx
"use client"

import {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import {
  eachMonthOfInterval,
  eachYearOfInterval,
  endOfYear,
  format,
  isAfter,
  isBefore,
  startOfYear,
} from "date-fns"
import type { CaptionLabelProps, MonthGridProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const today = new Date()
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<Date | undefined>(today)
  const [isYearView, setIsYearView] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const startYear = today.getFullYear() - 10
  const endYear = today.getFullYear() + 10
  const startDate = startOfYear(new Date(startYear, 0))
  const endDate = endOfYear(new Date(endYear, 11))

  const years = eachYearOfInterval({
    end: endOfYear(endDate),
    start: startOfYear(startDate),
  })

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className="group/pick-date w-60 justify-between"
          id={id}
          variant={"outline"}
        >
          <span className={cn("truncate", date && "text-muted-foreground")}>
            {date ? format(date, "LLL dd, y") : "Pick a date"}
          </span>
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendarEvent"
            hugeicons="Calendar04Icon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            aria-hidden="true"
            className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Card className="p-0">
          <CardContent className="p-0">
            <Calendar
              classNames={{
                month_caption: "justify-start",
                nav: "flex items-center w-full absolute inset-x-0 justify-end pointer-events-none [&>button]:pointer-events-auto",
              }}
              components={{
                CaptionLabel: (props: CaptionLabelProps) => (
                  <CaptionLabel
                    isYearView={isYearView}
                    setIsYearView={(val) => {
                      setIsYearView(val)
                      if (!val) setSelectedYear(null)
                    }}
                    {...props}
                  />
                ),
                MonthGrid: (props: MonthGridProps) => {
                  return (
                    <MonthGrid
                      className={props.className}
                      currentMonth={month.getMonth()}
                      currentYear={month.getFullYear()}
                      endDate={endDate}
                      isYearView={isYearView}
                      onMonthSelect={(selectedMonth: Date) => {
                        setMonth(selectedMonth)
                        setIsYearView(false)
                        setSelectedYear(null)
                      }}
                      setIsYearView={setIsYearView}
                      startDate={startDate}
                      years={years}
                      selectedYear={selectedYear}
                      setSelectedYear={setSelectedYear}
                    >
                      {props.children}
                    </MonthGrid>
                  )
                },
              }}
              defaultMonth={new Date()}
              endMonth={endDate}
              mode="single"
              month={month}
              onMonthChange={setMonth}
              onSelect={setDate}
              selected={date}
              startMonth={startDate}
            />
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

function MonthGrid({
  className,
  children,
  isYearView,
  years,
  currentYear,
  currentMonth,
  onMonthSelect,
  selectedYear,
  setSelectedYear,
  startDate,
  endDate,
}: {
  className?: string
  children: ReactNode
  isYearView: boolean
  setIsYearView: Dispatch<SetStateAction<boolean>>
  startDate: Date
  endDate: Date
  years: Date[]
  currentYear: number
  currentMonth: number
  onMonthSelect: (date: Date) => void
  selectedYear: number | null
  setSelectedYear: Dispatch<SetStateAction<number | null>>
}) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isYearView && scrollAreaRef.current) {
      const activeElement = scrollAreaRef.current.querySelector(
        "[data-active='true']"
      ) as HTMLElement | null

      if (activeElement) {
        activeElement.scrollIntoView({ block: "center" })
      }
    }
  }, [isYearView, selectedYear])

  return (
    <div className="relative">
      <table className={className}>{children}</table>
      {isYearView && (
        <div className="bg-background absolute inset-0 z-20 -m-2">
          <div className="h-full" ref={scrollAreaRef}>
            <ScrollArea className="h-full">
              <div className="px-3 pt-1 pb-3">
                {selectedYear === null ? (
                  <div className="grid grid-cols-4 gap-2">
                    {years.map((year) => {
                      const y = year.getFullYear()
                      const isCurrent = y === currentYear
                      return (
                        <Button
                          key={y}
                          variant={isCurrent ? "default" : "outline"}
                          size="sm"
                          className="h-8"
                          data-active={isCurrent}
                          onClick={() => setSelectedYear(y)}
                        >
                          {y}
                        </Button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-2"
                        onClick={() => setSelectedYear(null)}
                      >
                        <IconPlaceholder
                          lucide="ChevronDownIcon"
                          tabler="IconChevronDown"
                          hugeicons="ArrowDown01Icon"
                          phosphor="CaretDownIcon"
                          remixicon="RiArrowDownSLine"
                          className="mr-1 size-4 rotate-90"
                        />
                        {selectedYear}
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {eachMonthOfInterval({
                        start: startOfYear(new Date(selectedYear, 0)),
                        end: endOfYear(new Date(selectedYear, 0)),
                      }).map((month) => {
                        const isCurrent =
                          month.getMonth() === currentMonth &&
                          selectedYear === currentYear

                        const isDisabled =
                          isBefore(month, startOfYear(startDate)) ||
                          isAfter(month, endOfYear(endDate))

                        return (
                          <Button
                            key={month.getTime()}
                            variant={isCurrent ? "default" : "outline"}
                            size="sm"
                            className="h-8"
                            data-active={isCurrent}
                            disabled={isDisabled}
                            onClick={() => onMonthSelect(month)}
                          >
                            {format(month, "MMM")}
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  )
}

function CaptionLabel({
  children,
  isYearView,
  setIsYearView,
}: {
  isYearView: boolean
  setIsYearView: Dispatch<SetStateAction<boolean>>
} & HTMLAttributes<HTMLSpanElement>) {
  return (
    <Button
      className="data-[state=open]:text-muted-foreground/80 -ms-2 flex items-center gap-2 text-sm font-medium hover:bg-transparent [&[data-state=open]>svg]:rotate-180"
      data-state={isYearView ? "open" : "closed"}
      onClick={() => setIsYearView((prev) => !prev)}
      size="sm"
      variant="ghost"
    >
      {children}
      <IconPlaceholder
        lucide="ChevronDownIcon"
        tabler="IconChevronDown"
        hugeicons="ArrowDown01Icon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
        aria-hidden="true"
        className="text-muted-foreground/80 shrink-0 transition-transform duration-200"
      />
    </Button>
  )
}
```

### Calendar with date and appointment picker (`c-calendar-27`)

Target: `components/examples/c-calendar-27.tsx`

Calendar with date and appointment picker

```tsx
"use client"

import { useId, useState } from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const today = new Date()
  const [date, setDate] = useState<Date>(today)
  const [time, setTime] = useState<string | null>(null)

  // Mock time slots data
  const timeSlots = [
    { available: false, time: "09:00" },
    { available: false, time: "09:30" },
    { available: true, time: "10:00" },
    { available: true, time: "10:30" },
    { available: true, time: "11:00" },
    { available: true, time: "11:30" },
    { available: false, time: "12:00" },
    { available: true, time: "12:30" },
    { available: true, time: "13:00" },
    { available: true, time: "13:30" },
    { available: true, time: "14:00" },
    { available: false, time: "14:30" },
    { available: false, time: "15:00" },
    { available: true, time: "15:30" },
    { available: true, time: "16:00" },
    { available: true, time: "16:30" },
    { available: true, time: "17:00" },
    { available: true, time: "17:30" },
  ]

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className="group/pick-date w-60 justify-between"
          id={id}
          variant={"outline"}
        >
          <span className={cn("truncate", date && "text-muted-foreground")}>
            {date ? format(date, "LLL dd, y") : "Pick a date"}
          </span>
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendarEvent"
            hugeicons="Calendar04Icon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            aria-hidden="true"
            className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="flex max-sm:flex-col">
              <Calendar
                disabled={[{ before: today }]}
                mode="single"
                onSelect={(newDate) => {
                  if (newDate) {
                    setDate(newDate)
                    setTime(null)
                  }
                }}
                selected={date}
              />
              <div className="relative w-full max-sm:h-48 sm:w-40">
                <div className="absolute inset-0 py-4 max-sm:border-t">
                  <ScrollArea className="h-full sm:border-s">
                    <div className="space-y-3">
                      <div className="flex h-5 shrink-0 items-center px-5">
                        <p className="text-sm font-medium">
                          {format(date, "EEEE, d")}
                        </p>
                      </div>
                      <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                        {timeSlots.map(({ time: timeSlot, available }) => (
                          <Button
                            className="w-full"
                            disabled={!available}
                            key={timeSlot}
                            onClick={() => setTime(timeSlot)}
                            size="sm"
                            variant={time === timeSlot ? "default" : "outline"}
                          >
                            {timeSlot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
```

### Calendar with date picker and presets (`c-calendar-28`)

Target: `components/examples/c-calendar-28.tsx`

Calendar with date picker and presets

```tsx
"use client"

import { useId, useState } from "react"
import { format, subDays, subMonths, subYears } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const today = new Date()
  const yesterday = subDays(today, 1)
  const lastWeek = subDays(today, 7)
  const lastMonth = subMonths(today, 1)
  const lastYear = subYears(today, 1)
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<Date>(today)

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className="group/pick-date w-60 justify-between"
          id={id}
          variant={"outline"}
        >
          <span className={cn("truncate", date && "text-muted-foreground")}>
            {date ? format(date, "LLL dd, y") : "Pick a date"}
          </span>
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendarEvent"
            hugeicons="Calendar04Icon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            aria-hidden="true"
            className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="flex max-sm:flex-col">
              <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
                <div className="h-full sm:border-e">
                  <div className="flex flex-col px-2">
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(today)
                        setMonth(today)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Today
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(yesterday)
                        setMonth(yesterday)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Yesterday
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(lastWeek)
                        setMonth(lastWeek)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Last week
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(lastMonth)
                        setMonth(lastMonth)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Last month
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(lastYear)
                        setMonth(lastYear)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Last year
                    </Button>
                  </div>
                </div>
              </div>
              <Calendar
                disabled={[{ after: today }]}
                mode="single"
                month={month}
                onMonthChange={setMonth}
                onSelect={(newDate) => {
                  if (newDate) {
                    setDate(newDate)
                  }
                }}
                selected={date}
              />
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
```

### Range calendar with date picker and presets (`c-calendar-29`)

Target: `components/examples/c-calendar-29.tsx`

Range calendar with date picker and presets

```tsx
"use client"

import { useId, useState } from "react"
import {
  endOfMonth,
  endOfYear,
  format,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const today = new Date()
  const yesterday = {
    from: subDays(today, 1),
    to: subDays(today, 1),
  }
  const last7Days = {
    from: subDays(today, 6),
    to: today,
  }
  const last30Days = {
    from: subDays(today, 29),
    to: today,
  }
  const monthToDate = {
    from: startOfMonth(today),
    to: today,
  }
  const lastMonth = {
    from: startOfMonth(subMonths(today, 1)),
    to: endOfMonth(subMonths(today, 1)),
  }
  const yearToDate = {
    from: startOfYear(today),
    to: today,
  }
  const lastYear = {
    from: startOfYear(subYears(today, 1)),
    to: endOfYear(subYears(today, 1)),
  }
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<DateRange | undefined>(last7Days)

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className="group/pick-date w-60 justify-between"
          id={id}
          variant={"outline"}
        >
          <span className={cn("truncate", date && "text-muted-foreground")}>
            {date?.from
              ? date.to
                ? `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`
                : format(date.from, "LLL dd, y")
              : "Pick a date range"}
          </span>
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendarEvent"
            hugeicons="Calendar04Icon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            aria-hidden="true"
            className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="flex max-sm:flex-col">
              <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
                <div className="h-full sm:border-e">
                  <div className="flex flex-col px-2">
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate({
                          from: today,
                          to: today,
                        })
                        setMonth(today)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Today
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(yesterday)
                        setMonth(yesterday.to)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Yesterday
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(last7Days)
                        setMonth(last7Days.to)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Last 7 days
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(last30Days)
                        setMonth(last30Days.to)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Last 30 days
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(monthToDate)
                        setMonth(monthToDate.to)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Month to date
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(lastMonth)
                        setMonth(lastMonth.to)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Last month
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(yearToDate)
                        setMonth(yearToDate.to)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Year to date
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => {
                        setDate(lastYear)
                        setMonth(lastYear.to)
                      }}
                      size="sm"
                      variant="ghost"
                    >
                      Last year
                    </Button>
                  </div>
                </div>
              </div>
              <Calendar
                disabled={[{ after: today }]}
                mode="range"
                month={month}
                onMonthChange={setMonth}
                onSelect={(newDate) => {
                  if (newDate) {
                    setDate(newDate)
                  }
                }}
                selected={date}
              />
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
```

### Calendar with date and time range picker (`c-calendar-30`)

Target: `components/examples/c-calendar-30.tsx`

Calendar with date and time range picker

```tsx
"use client"

import { useId, useState } from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const id = useId()
  const [date, setDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className="group/pick-date w-60 justify-between"
          id={id}
          variant={"outline"}
        >
          <span className={cn("truncate", date && "text-muted-foreground")}>
            {date ? format(date, "PPP") : "Pick a date and time"}
          </span>
          <IconPlaceholder
            lucide="CalendarIcon"
            tabler="IconCalendarEvent"
            hugeicons="Calendar04Icon"
            phosphor="CalendarBlankIcon"
            remixicon="RiCalendarLine"
            aria-hidden="true"
            className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="p-0"
        />

        <Separator />

        <FieldGroup className="grid grid-cols-2 gap-2.5">
          <Field className="gap-1.5">
            <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-from"
                type="time"
                step="1"
                defaultValue="10:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <InputGroupAddon>
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field className="gap-1.5">
            <FieldLabel htmlFor="time-to">End Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-to"
                type="time"
                step="1"
                defaultValue="12:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <InputGroupAddon>
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  )
}
```
