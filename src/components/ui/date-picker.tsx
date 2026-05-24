"use client"

import * as React from "react"
import { format, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type DatePickerValue = {
  from?: Date
  to?: Date
  isPresent?: boolean
}

type DatePickerProps = Omit<
  React.ComponentProps<typeof Button>,
  "value" | "onChange" | "defaultValue"
> & {
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  onChange?: (value: DatePickerValue) => void
  placeholder?: string
  dateFormat?: string
  presentLabel?: string
  presentToggleLabel?: string
  numberOfMonths?: number
  align?: React.ComponentProps<typeof PopoverContent>["align"]
  portalContainer?: React.ComponentProps<typeof PopoverContent>["container"]
  contentClassName?: string
}

function buildDefaultValue(defaultValue: DatePickerValue | undefined): DatePickerValue {
  if (defaultValue) {
    return defaultValue
  }

  return {
    from: startOfDay(new Date()),
    isPresent: true,
  }
}

export function DatePicker({
  value,
  defaultValue,
  onChange,
  placeholder = "Selecciona un rango de fechas",
  dateFormat = "PPP",
  presentLabel = "Presente",
  presentToggleLabel = "Hasta el presente",
  numberOfMonths = 2,
  align = "start",
  portalContainer,
  contentClassName,
  className,
  ...buttonProps
}: DatePickerProps) {
  const isControlled = value !== undefined

  const [internalValue, setInternalValue] = React.useState<DatePickerValue>(
    () => buildDefaultValue(defaultValue)
  )

  const current = isControlled ? value : internalValue

  const updateValue = React.useCallback(
    (next: DatePickerValue) => {
      if (!isControlled) {
        setInternalValue(next)
      }
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  const handleSelect = React.useCallback(
    (next: DateRange | undefined) => {
      if (!next?.from) {
        updateValue({ from: undefined, to: undefined, isPresent: false })
        return
      }

      updateValue({
        from: next.from,
        to: next.to,
        isPresent: next.to ? false : current?.isPresent ?? true,
      })
    },
    [updateValue, current?.isPresent]
  )

  const handleTogglePresent = React.useCallback(
    (checked: boolean) => {
      updateValue({
        from: current?.from ?? startOfDay(new Date()),
        to: checked ? undefined : current?.to,
        isPresent: checked,
      })
    },
    [updateValue, current?.from, current?.to]
  )

  const calendarSelected = React.useMemo<DateRange | undefined>(() => {
    if (!current?.from) {
      return undefined
    }

    return {
      from: current.from,
      to: current.isPresent ? undefined : current.to,
    }
  }, [current])

  const label = React.useMemo(() => {
    if (!current?.from) {
      return null
    }

    const from = format(current.from, dateFormat)

    if (current.isPresent) {
      return `${from} – ${presentLabel}`
    }

    if (current.to) {
      return `${from} – ${format(current.to, dateFormat)}`
    }

    return from
  }, [current, dateFormat, presentLabel])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!current?.from}
          className={cn(
            "w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground",
            className
          )}
          {...buttonProps}
        >
          <span className="truncate">{label ?? placeholder}</span>
          <CalendarIcon className="ml-2 size-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "max-w-[calc(100vw-2rem)] p-0",
          contentClassName
        )}
        align={align}
        container={portalContainer}
        collisionPadding={16}
      >
        <Calendar
          mode="range"
          selected={calendarSelected}
          onSelect={handleSelect}
          defaultMonth={current?.from}
          numberOfMonths={numberOfMonths}
          className="w-full"
          
        />

        <div className="flex items-center gap-2 border-t px-3 py-2">
          <Checkbox
            id="date-picker-present"
            checked={!!current?.isPresent}
            onCheckedChange={(checked) => handleTogglePresent(checked === true)}
          />
          <Label
            htmlFor="date-picker-present"
            className="cursor-pointer text-sm font-normal"
          >
            {presentToggleLabel}
          </Label>
        </div>
      </PopoverContent>
    </Popover>
  )
}
