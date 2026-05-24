# Filters (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

10 entr(y/ies).

> Includes the base `@reui/{slug}` primitive plus `c-{slug}-*` demo blocks.

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `filters` | Filters | registry:ui | deps: button, button-group, dropdown-menu, input, input-group, kbd, scroll-area, tooltip, class-variance-authority |
| `c-filters-1` | Filters with various field types | registry:block | Filters with various field types |
| `c-filters-2` | Filters with input validation | registry:block | Filters with input validation |
| `c-filters-3` | Filters with custom trigger button | registry:block | Filters with custom trigger button |
| `c-filters-4` | Filters with small size controls | registry:block | Filters with small size controls |
| `c-filters-5` | Filters with large size controls | registry:block | Filters with large size controls |
| `c-filters-6` | Filters with custom controls | registry:block | Filters with custom controls |
| `c-filters-7` | Filters with data grid | registry:block | Filters with data grid |
| `c-filters-8` | Filters with data grid and async mode | registry:block | Filters with data grid and async mode |
| `c-filters-9` | Filters with i18n support | registry:block | Filters with i18n support |

## Source

### Filters (`filters`)

Target: `components/reui/filters.tsx`

```tsx
"use client"

import type React from "react"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

// i18n Configuration Interface
export interface FilterI18nConfig {
  // UI Labels
  addFilter: string
  searchFields: string
  noFieldsFound: string
  noResultsFound: string
  select: string
  true: string
  false: string
  min: string
  max: string
  to: string
  typeAndPressEnter: string
  selected: string
  selectedCount: string
  percent: string
  defaultCurrency: string
  defaultColor: string
  addFilterTitle: string

  // Operators
  operators: {
    is: string
    isNot: string
    isAnyOf: string
    isNotAnyOf: string
    includesAll: string
    excludesAll: string
    before: string
    after: string
    between: string
    notBetween: string
    contains: string
    notContains: string
    startsWith: string
    endsWith: string
    isExactly: string
    equals: string
    notEquals: string
    greaterThan: string
    lessThan: string
    overlaps: string
    includes: string
    excludes: string
    includesAllOf: string
    includesAnyOf: string
    empty: string
    notEmpty: string
  }

  // Placeholders
  placeholders: {
    enterField: (fieldType: string) => string
    selectField: string
    searchField: (fieldName: string) => string
    enterKey: string
    enterValue: string
  }

  // Helper functions
  helpers: {
    formatOperator: (operator: string) => string
  }

  // Validation
  validation: {
    invalidEmail: string
    invalidUrl: string
    invalidTel: string
    invalid: string
  }
}

// Default English i18n configuration
export const DEFAULT_I18N: FilterI18nConfig = {
  // UI Labels
  addFilter: "Filter",
  searchFields: "Filter...",
  noFieldsFound: "No filters found.",
  noResultsFound: "No results found.",
  select: "Select...",
  true: "True",
  false: "False",
  min: "Min",
  max: "Max",
  to: "to",
  typeAndPressEnter: "Type and press Enter to add tag",
  selected: "selected",
  selectedCount: "selected",
  percent: "%",
  defaultCurrency: "$",
  defaultColor: "#000000",
  addFilterTitle: "Add filter",

  // Operators
  operators: {
    is: "is",
    isNot: "is not",
    isAnyOf: "is any of",
    isNotAnyOf: "is not any of",
    includesAll: "includes all",
    excludesAll: "excludes all",
    before: "before",
    after: "after",
    between: "between",
    notBetween: "not between",
    contains: "contains",
    notContains: "does not contain",
    startsWith: "starts with",
    endsWith: "ends with",
    isExactly: "is exactly",
    equals: "equals",
    notEquals: "not equals",
    greaterThan: "greater than",
    lessThan: "less than",
    overlaps: "overlaps",
    includes: "includes",
    excludes: "excludes",
    includesAllOf: "includes all of",
    includesAnyOf: "includes any of",
    empty: "is empty",
    notEmpty: "is not empty",
  },

  // Placeholders
  placeholders: {
    enterField: (fieldType: string) => `Enter ${fieldType}...`,
    selectField: "Select...",
    searchField: (fieldName: string) => `Search ${fieldName.toLowerCase()}...`,
    enterKey: "Enter key...",
    enterValue: "Enter value...",
  },

  // Helper functions
  helpers: {
    formatOperator: (operator: string) => operator.replace(/_/g, " "),
  },

  // Validation
  validation: {
    invalidEmail: "Invalid email format",
    invalidUrl: "Invalid URL format",
    invalidTel: "Invalid phone format",
    invalid: "Invalid input format",
  },
}

// Context for all Filter component props
interface FilterContextValue {
  variant: "solid" | "default"
  size: "sm" | "default" | "lg"
  radius: "default" | "full"
  i18n: FilterI18nConfig
  className?: string
  showSearchInput?: boolean
  trigger?: React.ReactNode
  allowMultiple?: boolean
}

const FilterContext = createContext<FilterContextValue>({
  variant: "default",
  size: "default",
  radius: "default",
  i18n: DEFAULT_I18N,
  className: undefined,
  showSearchInput: true,
  trigger: undefined,
  allowMultiple: true,
})

const useFilterContext = () => useContext(FilterContext)

// Container variant for filters wrapper
const filtersContainerVariants = cva("flex flex-wrap items-center", {
  variants: {
    variant: {
      solid: "gap-2",
      default: "",
    },
    size: {
      sm: "gap-1.5",
      default: "gap-2.5",
      lg: "gap-3.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

function FilterInput<T = unknown>({
  field,
  onBlur,
  onKeyDown,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  field?: FilterFieldConfig<T>
}) {
  const context = useFilterContext()
  const [isValid, setIsValid] = useState(true)
  const [validationMessage, setValidationMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (props.autoFocus) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [props.autoFocus])

  // Validation function to check if input matches pattern
  const validateInput = (value: string, pattern?: string): boolean => {
    if (!pattern || !value) return true
    const regex = new RegExp(pattern)
    return regex.test(value)
  }

  // Get validation message for field type
  const getValidationMessage = (): string => {
    return context.i18n.validation.invalid
  }

  // Handle blur event - validate when user leaves input
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value
    const pattern = field?.pattern || props.pattern

    // Only validate if there's a value and (pattern or validation function)
    if (value && (pattern || field?.validation)) {
      let valid = true
      let customMessage = ""

      // If there's a custom validation function, use it
      if (field?.validation) {
        const result = field.validation(value)
        // Handle both boolean and object return types
        if (typeof result === "boolean") {
          valid = result
        } else {
          valid = result.valid
          customMessage = result.message || ""
        }
      } else if (pattern) {
        // Use pattern validation
        valid = validateInput(value, pattern)
      }

      setIsValid(valid)
      setValidationMessage(valid ? "" : customMessage || getValidationMessage())
    } else {
      // Reset validation state for empty values or no validation
      setIsValid(true)
      setValidationMessage("")
    }

    // Call the original onBlur if provided
    onBlur?.(e)
  }

  // Handle keydown event - hide validation error when user starts typing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Hide validation error when user starts typing (any key except special keys)
    if (
      !isValid &&
      ![
        "Tab",
        "Escape",
        "Enter",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
      ].includes(e.key)
    ) {
      setIsValid(true)
      setValidationMessage("")
    }

    // Call the original onKeyDown if provided
    onKeyDown?.(e)
  }

  return (
    <InputGroup
      className={cn(
        "w-36",
        context.size == "sm" &&
          "h-7!",
        context.size == "default" &&
          "h-8!",
        context.size == "lg" &&
          "h-9!",
        className
      )}
    >
      {field?.prefix && (
        <InputGroupAddon>
          <InputGroupText>{field.prefix}</InputGroupText>
        </InputGroupAddon>
      )}
      <InputGroupInput
        ref={inputRef}
        aria-invalid={!isValid}
        aria-describedby={
          !isValid && validationMessage
            ? `${field?.key || "input"}-error`
            : undefined
        }
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={cn(
          context.size == "sm" &&
            "h-7! text-xs",
          context.size == "default" &&
            "h-8!",
          context.size == "lg" &&
            "h-9!"
        )}
        {...props}
      />
      {!isValid && validationMessage && (
        <InputGroupAddon align="inline-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton size="icon-xs">
                  <IconPlaceholder
                    lucide="AlertCircleIcon"
                    tabler="IconAlertCircle"
                    hugeicons="AlertCircleIcon"
                    phosphor="WarningCircleIcon"
                    remixicon="RiErrorWarningLine"
                    className="text-destructive size-3.5"
                  />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{validationMessage}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </InputGroupAddon>
      )}

      {field?.suffix && (
        <InputGroupAddon align="inline-end">
          <InputGroupText>{field.suffix}</InputGroupText>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}

interface FilterRemoveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

function FilterRemoveButton({
  className,
  icon = (
    <IconPlaceholder
      lucide="XIcon"
      tabler="IconX"
      hugeicons="Cancel01Icon"
      phosphor="XIcon"
      remixicon="RiCloseLine"
    />
  ),
  ...props
}: FilterRemoveButtonProps) {
  const context = useFilterContext()

  const sizeMap = {
    sm: "sm" as const,
    default: "sm" as const,
    lg: "default" as const,
  }

  return (
    <Button
      variant="outline"
      size={
        context.size === "sm"
          ? "icon-sm"
          : context.size === "lg"
            ? "icon-lg"
            : "icon"
      }
      {...props}
    >
      {icon}
    </Button>
  )
}

// Generic types for flexible filter system
export interface FilterOption<T = unknown> {
  value: T
  label: string
  icon?: React.ReactNode
  metadata?: Record<string, unknown>
  className?: string
}

export interface FilterOperator {
  value: string
  label: string
  supportsMultiple?: boolean
}

// Custom renderer props interface
export interface CustomRendererProps<T = unknown> {
  field: FilterFieldConfig<T>
  values: T[]
  onChange: (values: T[]) => void
  operator: string
}

// Grouped field configuration interface
export interface FilterFieldGroup<T = unknown> {
  group?: string
  fields: FilterFieldConfig<T>[]
}

// Union type for both flat and grouped field configurations
export type FilterFieldsConfig<T = unknown> =
  | FilterFieldConfig<T>[]
  | FilterFieldGroup<T>[]

export interface FilterFieldConfig<T = unknown> {
  key?: string
  label?: string
  icon?: React.ReactNode
  type?: "select" | "multiselect" | "text" | "custom" | "separator"
  // Group-level configuration
  group?: string
  fields?: FilterFieldConfig<T>[]
  // Field-specific options
  options?: FilterOption<T>[]
  operators?: FilterOperator[]
  customRenderer?: (props: CustomRendererProps<T>) => React.ReactNode
  customValueRenderer?: (
    values: T[],
    options: FilterOption<T>[]
  ) => React.ReactNode
  placeholder?: string
  searchable?: boolean
  maxSelections?: number
  min?: number
  max?: number
  step?: number
  prefix?: string | React.ReactNode
  suffix?: string | React.ReactNode
  pattern?: string
  validation?: (
    value: unknown
  ) => boolean | { valid: boolean; message?: string }
  allowCustomValues?: boolean
  className?: string
  menuPopupClassName?: string
  // Grouping options (legacy support)
  groupLabel?: string
  // Boolean field options
  onLabel?: string
  offLabel?: string
  // Input event handlers
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  // Default operator to use when creating a filter for this field
  defaultOperator?: string
  // Controlled values support for this field
  value?: T[]
  onValueChange?: (values: T[]) => void
}

// Helper functions to handle both flat and grouped field configurations
const isFieldGroup = <T = unknown,>(
  item: FilterFieldConfig<T> | FilterFieldGroup<T>
): item is FilterFieldGroup<T> => {
  return "fields" in item && Array.isArray(item.fields)
}

// Helper function to check if a FilterFieldConfig is a group-level configuration
const isGroupLevelField = <T = unknown,>(
  field: FilterFieldConfig<T>
): boolean => {
  return Boolean(field.group && field.fields)
}

const flattenFields = <T = unknown,>(
  fields: FilterFieldsConfig<T>
): FilterFieldConfig<T>[] => {
  return fields.reduce<FilterFieldConfig<T>[]>((acc, item) => {
    if (isFieldGroup(item)) {
      return [...acc, ...item.fields]
    }
    // Handle group-level fields (new structure)
    if (isGroupLevelField(item)) {
      return [...acc, ...item.fields!]
    }
    return [...acc, item]
  }, [])
}

const getFieldsMap = <T = unknown,>(
  fields: FilterFieldsConfig<T>
): Record<string, FilterFieldConfig<T>> => {
  const flatFields = flattenFields(fields)
  return flatFields.reduce(
    (acc, field) => {
      // Only add fields that have a key (skip group-level configurations)
      if (field.key) {
        acc[field.key] = field
      }
      return acc
    },
    {} as Record<string, FilterFieldConfig<T>>
  )
}

// Helper function to create operators from i18n config
const createOperatorsFromI18n = (
  i18n: FilterI18nConfig
): Record<string, FilterOperator[]> => ({
  select: [
    { value: "is", label: i18n.operators.is },
    { value: "is_not", label: i18n.operators.isNot },
    { value: "empty", label: i18n.operators.empty },
    { value: "not_empty", label: i18n.operators.notEmpty },
  ],
  multiselect: [
    { value: "is_any_of", label: i18n.operators.isAnyOf },
    { value: "is_not_any_of", label: i18n.operators.isNotAnyOf },
    { value: "includes_all", label: i18n.operators.includesAll },
    { value: "excludes_all", label: i18n.operators.excludesAll },
    { value: "empty", label: i18n.operators.empty },
    { value: "not_empty", label: i18n.operators.notEmpty },
  ],
  text: [
    { value: "contains", label: i18n.operators.contains },
    { value: "not_contains", label: i18n.operators.notContains },
    { value: "starts_with", label: i18n.operators.startsWith },
    { value: "ends_with", label: i18n.operators.endsWith },
    { value: "is", label: i18n.operators.isExactly },
    { value: "empty", label: i18n.operators.empty },
    { value: "not_empty", label: i18n.operators.notEmpty },
  ],
  custom: [
    { value: "is", label: i18n.operators.is },
    { value: "after", label: i18n.operators.after },
    { value: "is", label: i18n.operators.is },
    { value: "between", label: i18n.operators.between },
    { value: "empty", label: i18n.operators.empty },
    { value: "not_empty", label: i18n.operators.notEmpty },
  ],
})

// Default operators for different field types (using default i18n)
export const DEFAULT_OPERATORS: Record<string, FilterOperator[]> =
  createOperatorsFromI18n(DEFAULT_I18N)

// Helper function to get operators for a field
const getOperatorsForField = <T = unknown,>(
  field: FilterFieldConfig<T>,
  values: T[],
  i18n: FilterI18nConfig
): FilterOperator[] => {
  if (field.operators) return field.operators

  const operators = createOperatorsFromI18n(i18n)

  // Determine field type for operator selection
  let fieldType = field.type || "select"

  // If it's a select field but has multiple values, treat as multiselect
  if (fieldType === "select" && values.length > 1) {
    fieldType = "multiselect"
  }

  // If it's a multiselect field or has multiselect operators, use multiselect operators
  if (fieldType === "multiselect" || field.type === "multiselect") {
    return operators.multiselect
  }

  return operators[fieldType] || operators.select
}

interface FilterOperatorDropdownProps<T = unknown> {
  field: FilterFieldConfig<T>
  operator: string
  values: T[]
  onChange: (operator: string) => void
}

function FilterOperatorDropdown<T = unknown>({
  field,
  operator,
  values,
  onChange,
}: FilterOperatorDropdownProps<T>) {
  const context = useFilterContext()
  const operators = getOperatorsForField(field, values, context.i18n)

  // Find the operator label, with fallback to formatted operator name
  const operatorLabel =
    operators.find((op) => op.value === operator)?.label ||
    context.i18n.helpers.formatOperator(operator)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={context.size}
          className="text-muted-foreground hover:text-foreground"
        >
          {operatorLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-fit min-w-fit">
        {operators.map((op) => (
          <DropdownMenuItem
            key={op.value}
            onClick={() => onChange(op.value)}
            className={cn(
              "data-highlighted:bg-accent data-highlighted:text-accent-foreground flex items-center justify-between"
            )}
          >
            <span>{op.label}</span>
            <IconPlaceholder
              lucide="CheckIcon"
              tabler="IconCheck"
              hugeicons="Tick02Icon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              className={cn(
                "text-primary ms-auto",
                op.value === operator ? "opacity-100" : "opacity-0"
              )}
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface FilterValueSelectorProps<T = unknown> {
  field: FilterFieldConfig<T>
  values: T[]
  onChange: (values: T[]) => void
  operator: string
  autoFocus?: boolean
}

interface SelectOptionsPopoverProps<T = unknown> {
  field: FilterFieldConfig<T>
  values: T[]
  onChange: (values: T[]) => void
  onClose?: () => void
  inline?: boolean
}

function SelectOptionsPopover<T = unknown>({
  field,
  values,
  onChange,
  onClose,
  inline = false,
}: SelectOptionsPopoverProps<T>) {
  const [open, setOpen] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const context = useFilterContext()
  const baseId = useId()

  useEffect(() => {
    setHighlightedIndex(-1)
  }, [searchInput, open])

  useEffect(() => {
    if (highlightedIndex >= 0 && open) {
      const element = document.getElementById(
        `${baseId}-item-${highlightedIndex}`
      )
      element?.scrollIntoView({ block: "nearest" })
    }
  }, [highlightedIndex, open, baseId])

  const isMultiSelect = field.type === "multiselect" || values.length > 1
  const effectiveValues =
    (field.value !== undefined ? (field.value as T[]) : values) || []

  const selectedOptions =
    field.options?.filter((opt) => effectiveValues.includes(opt.value)) || []
  const unselectedOptions =
    field.options?.filter((opt) => !effectiveValues.includes(opt.value)) || []

  // Filter options based on search input
  const filteredSelectedOptions = selectedOptions // Keep all selected visible
  const filteredUnselectedOptions = unselectedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(searchInput.toLowerCase())
  )

  const allFilteredOptions = useMemo(
    () => [...filteredSelectedOptions, ...filteredUnselectedOptions],
    [filteredSelectedOptions, filteredUnselectedOptions]
  )

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  const renderMenuContent = () => (
    <>
      {field.searchable !== false && (
        <>
          <Input
            ref={inputRef}
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={true}
            aria-haspopup="listbox"
            aria-controls={`${baseId}-listbox`}
            aria-activedescendant={
              highlightedIndex >= 0
                ? `${baseId}-item-${highlightedIndex}`
                : undefined
            }
            placeholder={context.i18n.placeholders.searchField(
              field.label || ""
            )}
            className={cn(
              "border-input h-8 rounded-none border-0 bg-transparent! px-2 text-sm shadow-none",
              "focus-visible:border-border focus-visible:ring-0 focus-visible:ring-offset-0"
            )}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault()
                if (allFilteredOptions.length > 0) {
                  setHighlightedIndex((prev) =>
                    prev < allFilteredOptions.length - 1 ? prev + 1 : 0
                  )
                }
              } else if (e.key === "ArrowUp") {
                e.preventDefault()
                if (allFilteredOptions.length > 0) {
                  setHighlightedIndex((prev) =>
                    prev > 0 ? prev - 1 : allFilteredOptions.length - 1
                  )
                }
              } else if (e.key === "ArrowLeft") {
                e.preventDefault()
                setOpen(false)
              } else if (e.key === "Enter" && highlightedIndex >= 0) {
                e.preventDefault()
                const option = allFilteredOptions[highlightedIndex]
                if (option) {
                  const isSelected = effectiveValues.includes(option.value as T)
                  const next = isSelected
                    ? (effectiveValues.filter((v) => v !== option.value) as T[])
                    : isMultiSelect
                      ? ([...effectiveValues, option.value] as T[])
                      : ([option.value] as T[])

                  if (
                    !isSelected &&
                    isMultiSelect &&
                    field.maxSelections &&
                    next.length > field.maxSelections
                  ) {
                    return
                  }

                  if (field.onValueChange) {
                    field.onValueChange(next)
                  } else {
                    onChange(next)
                  }
                  if (!isMultiSelect) handleClose()
                }
              }
              e.stopPropagation()
            }}
          />
          <DropdownMenuSeparator />
        </>
      )}
      <div className="relative flex max-h-full">
        <div
          className="flex max-h-[min(var(--radix-dropdown-menu-content-available-height),24rem)] w-full scroll-pt-2 scroll-pb-2 flex-col overscroll-contain"
          role="listbox"
          id={`${baseId}-listbox`}
        >
          <ScrollArea className="size-full min-h-0 **:data-[slot=scroll-area-scrollbar]:m-0 **:data-[slot=scroll-area-viewport]:h-full **:data-[slot=scroll-area-viewport]:overscroll-contain">
            {allFilteredOptions.length === 0 && (
              <div className="text-muted-foreground py-2 text-center text-sm">
                {context.i18n.noResultsFound}
              </div>
            )}

            {/* Selected items */}
            {filteredSelectedOptions.length > 0 && (
              <DropdownMenuGroup className="px-1">
                {filteredSelectedOptions.map((option, index) => {
                  const isHighlighted = highlightedIndex === index
                  const itemId = `${baseId}-item-${index}`

                  return (
                    <DropdownMenuCheckboxItem
                      key={String(option.value)}
                      id={itemId}
                      role="option"
                      aria-selected={isHighlighted}
                      data-highlighted={isHighlighted || undefined}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      checked={true}
                      className={cn(
                        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
                        option.className
                      )}
                      onSelect={(e) => {
                        if (isMultiSelect) e.preventDefault()
                      }}
                      onCheckedChange={() => {
                        const next = effectiveValues.filter(
                          (v) => v !== option.value
                        ) as T[]
                        if (field.onValueChange) {
                          field.onValueChange(next)
                        } else {
                          onChange(next)
                        }
                        if (!isMultiSelect) handleClose()
                      }}
                    >
                      {option.icon && option.icon}
                      <span className="truncate">{option.label}</span>
                    </DropdownMenuCheckboxItem>
                  )
                })}
              </DropdownMenuGroup>
            )}

            {/* Separator */}
            {filteredSelectedOptions.length > 0 &&
              filteredUnselectedOptions.length > 0 && (
                <DropdownMenuSeparator className="mx-0" />
              )}

            {/* Available items */}
            {filteredUnselectedOptions.length > 0 && (
              <DropdownMenuGroup className="px-1">
                {filteredUnselectedOptions.map((option, index) => {
                  const overallIndex = index + filteredSelectedOptions.length
                  const isHighlighted = highlightedIndex === overallIndex
                  const itemId = `${baseId}-item-${overallIndex}`

                  return (
                    <DropdownMenuCheckboxItem
                      key={String(option.value)}
                      id={itemId}
                      role="option"
                      aria-selected={isHighlighted}
                      data-highlighted={isHighlighted || undefined}
                      onMouseEnter={() => setHighlightedIndex(overallIndex)}
                      checked={false}
                      className={cn(
                        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
                        option.className
                      )}
                      onSelect={(e) => {
                        if (isMultiSelect) e.preventDefault()
                      }}
                      onCheckedChange={() => {
                        const next = isMultiSelect
                          ? ([...effectiveValues, option.value] as T[])
                          : ([option.value] as T[])

                        if (
                          isMultiSelect &&
                          field.maxSelections &&
                          next.length > field.maxSelections
                        ) {
                          return
                        }

                        if (field.onValueChange) {
                          field.onValueChange(next)
                        } else {
                          onChange(next)
                        }
                        if (!isMultiSelect) handleClose()
                      }}
                    >
                      {option.icon && option.icon}
                      <span className="truncate">{option.label}</span>
                    </DropdownMenuCheckboxItem>
                  )
                })}
              </DropdownMenuGroup>
            )}
          </ScrollArea>
        </div>
      </div>
    </>
  )

  if (inline) {
    return <div className="w-full">{renderMenuContent()}</div>
  }

  return (
    <DropdownMenu
      open={open}
      onOpenChange={(open) => {
        setOpen(open)
        if (!open) {
          setTimeout(() => setSearchInput(""), 200)
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={context.size}>
          <div className="flex items-center gap-1.5">
            {field.customValueRenderer ? (
              field.customValueRenderer(values, field.options || [])
            ) : (
              <>
                {selectedOptions.length > 0 && (
                  <div className="flex items-center -space-x-1.5">
                    {selectedOptions.slice(0, 3).map((option) => (
                      <div key={String(option.value)}>{option.icon}</div>
                    ))}
                  </div>
                )}
                {selectedOptions.length === 1
                  ? selectedOptions[0].label
                  : selectedOptions.length > 1
                    ? `${selectedOptions.length} ${context.i18n.selectedCount}`
                    : context.i18n.select}
              </>
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className={cn("w-[200px] px-0", field.className)}
      >
        {renderMenuContent()}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function FilterValueSelector<T = unknown>({
  field,
  values,
  onChange,
  operator,
  autoFocus,
}: FilterValueSelectorProps<T>) {
  const context = useFilterContext()

  if (operator === "empty" || operator === "not_empty") {
    return null
  }

  if (field.customRenderer) {
    return (
      <ButtonGroupText className="hover:bg-accent aria-expanded:bg-accent bg-background dark:bg-input/30 text-start whitespace-nowrap outline-hidden">
        {field.customRenderer({ field, values, onChange, operator })}
      </ButtonGroupText>
    )
  }

  if (field.type === "text") {
    return (
      <FilterInput
        type="text"
        value={(values[0] as string) || ""}
        onChange={(e) => onChange([e.target.value] as T[])}
        placeholder={field.placeholder}
        pattern={field.pattern}
        field={field}
        className={cn("w-36", field.className)}
        autoFocus={autoFocus}
      />
    )
  }

  if (field.type === "select" || field.type === "multiselect") {
    return (
      <SelectOptionsPopover field={field} values={values} onChange={onChange} />
    )
  }

  return (
    <SelectOptionsPopover field={field} values={values} onChange={onChange} />
  )
}
export interface Filter<T = unknown> {
  id: string
  field: string
  operator: string
  values: T[]
}

export interface FilterGroup<T = unknown> {
  id: string
  label?: string
  filters: Filter<T>[]
  fields: FilterFieldConfig<T>[]
}

interface FiltersContentProps<T = unknown> {
  filters: Filter<T>[]
  fields: FilterFieldsConfig<T>
  onChange: (filters: Filter<T>[]) => void
}

export const FiltersContent = <T = unknown,>({
  filters,
  fields,
  onChange,
}: FiltersContentProps<T>) => {
  const context = useFilterContext()
  const fieldsMap = useMemo(() => getFieldsMap(fields), [fields])

  const updateFilter = useCallback(
    (filterId: string, updates: Partial<Filter<T>>) => {
      onChange(
        filters.map((filter) => {
          if (filter.id === filterId) {
            const updatedFilter = { ...filter, ...updates }
            if (
              updates.operator === "empty" ||
              updates.operator === "not_empty"
            ) {
              updatedFilter.values = [] as T[]
            }
            return updatedFilter
          }
          return filter
        })
      )
    },
    [filters, onChange]
  )

  const removeFilter = useCallback(
    (filterId: string) => {
      onChange(filters.filter((filter) => filter.id !== filterId))
    },
    [filters, onChange]
  )

  return (
    <div
      className={cn(
        filtersContainerVariants({
          variant: context.variant,
          size: context.size,
        }),
        context.className
      )}
    >
      {filters.map((filter) => {
        const field = fieldsMap[filter.field]
        if (!field) return null

        return (
          <ButtonGroup key={filter.id}>
            <ButtonGroupText>
              {field.icon && field.icon}
              {field.label}
            </ButtonGroupText>

            <FilterOperatorDropdown<T>
              field={field}
              operator={filter.operator}
              values={filter.values}
              onChange={(operator) => updateFilter(filter.id, { operator })}
            />

            <FilterValueSelector<T>
              field={field}
              values={filter.values}
              onChange={(values) => updateFilter(filter.id, { values })}
              operator={filter.operator}
              autoFocus={false}
            />

            <FilterRemoveButton onClick={() => removeFilter(filter.id)} />
          </ButtonGroup>
        )
      })}
    </div>
  )
}

interface FiltersProps<T = unknown> {
  filters: Filter<T>[]
  fields: FilterFieldsConfig<T>
  onChange: (filters: Filter<T>[]) => void
  className?: string
  variant?: "solid" | "default"
  size?: "sm" | "default" | "lg"
  radius?: "default" | "full"
  i18n?: Partial<FilterI18nConfig>
  showSearchInput?: boolean
  trigger?: React.ReactNode
  allowMultiple?: boolean
  menuPopupClassName?: string
  collapseAddButton?: boolean
  enableShortcut?: boolean
  shortcutKey?: string
  shortcutLabel?: string
}

interface FilterSubmenuContentProps<T = unknown> {
  field: FilterFieldConfig<T>
  currentValues: T[]
  isMultiSelect: boolean
  onToggle: (value: T, isSelected: boolean) => void
  i18n: FilterI18nConfig
  isActive?: boolean
  onActive?: () => void
  onBack?: () => void
  onClose?: () => void
}

function FilterSubmenuContent<T = unknown>({
  field,
  currentValues,
  isMultiSelect,
  onToggle,
  i18n,
  isActive,
  onActive,
  onBack,
  onClose,
}: FilterSubmenuContentProps<T>) {
  const [searchInput, setSearchInput] = useState("")
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const baseId = useId()

  useEffect(() => {
    setHighlightedIndex(-1)
  }, [searchInput])

  useEffect(() => {
    if (highlightedIndex >= 0 && isActive) {
      const element = document.getElementById(
        `${baseId}-item-${highlightedIndex}`
      )
      element?.scrollIntoView({ block: "nearest" })
    }
  }, [highlightedIndex, isActive, baseId])

  const filteredOptions = useMemo(() => {
    return (
      field.options?.filter((option) => {
        const isSelected = currentValues.includes(option.value)
        if (isSelected) return true
        if (!searchInput) return true
        return option.label.toLowerCase().includes(searchInput.toLowerCase())
      }) || []
    )
  }, [field.options, searchInput, currentValues])

  useEffect(() => {
    if (isActive && filteredOptions.length > 0) {
      setHighlightedIndex(0)
    }
  }, [isActive, filteredOptions.length])

  return (
    <div className="flex flex-col" onMouseEnter={onActive}>
      {field.searchable !== false && (
        <>
          <Input
            ref={inputRef}
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={true}
            aria-haspopup="listbox"
            aria-controls={`${baseId}-listbox`}
            aria-activedescendant={
              highlightedIndex >= 0
                ? `${baseId}-item-${highlightedIndex}`
                : undefined
            }
            placeholder={i18n.placeholders.searchField(field.label || "")}
            className={cn(
              "h-8 rounded-none border-0 bg-transparent! px-2 text-sm shadow-none",
              "focus-visible:border-border focus-visible:ring-0 focus-visible:ring-offset-0"
            )}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault()
                if (filteredOptions.length > 0) {
                  setHighlightedIndex((prev) =>
                    prev < filteredOptions.length - 1 ? prev + 1 : 0
                  )
                }
              } else if (e.key === "ArrowUp") {
                e.preventDefault()
                if (filteredOptions.length > 0) {
                  setHighlightedIndex((prev) =>
                    prev > 0 ? prev - 1 : filteredOptions.length - 1
                  )
                }
              } else if (e.key === "ArrowLeft") {
                e.preventDefault()
                onBack?.()
              } else if (e.key === "Enter" && highlightedIndex >= 0) {
                e.preventDefault()
                const option = filteredOptions[highlightedIndex]
                if (option) {
                  onToggle(
                    option.value as T,
                    currentValues.includes(option.value)
                  )
                  if (!isMultiSelect) {
                    onBack?.()
                  }
                }
              } else if (e.key === "Escape") {
                e.preventDefault()
                onClose?.()
              }
              e.stopPropagation()
            }}
          />
          <DropdownMenuSeparator />
        </>
      )}
      <div className="relative flex max-h-full">
        <div
          className="flex max-h-[min(var(--radix-dropdown-menu-content-available-height),24rem)] w-full scroll-pt-2 scroll-pb-2 flex-col overscroll-contain outline-hidden"
          role="listbox"
          id={`${baseId}-listbox`}
          tabIndex={field.searchable === false ? 0 : -1}
          onKeyDown={(e) => {
            if (field.searchable === false) {
              if (e.key === "ArrowDown") {
                e.preventDefault()
                if (filteredOptions.length > 0) {
                  setHighlightedIndex((prev) =>
                    prev < filteredOptions.length - 1 ? prev + 1 : 0
                  )
                }
              } else if (e.key === "ArrowUp") {
                e.preventDefault()
                if (filteredOptions.length > 0) {
                  setHighlightedIndex((prev) =>
                    prev > 0 ? prev - 1 : filteredOptions.length - 1
                  )
                }
              } else if (e.key === "ArrowLeft") {
                e.preventDefault()
                onBack?.()
              } else if (e.key === "Enter" && highlightedIndex >= 0) {
                e.preventDefault()
                const option = filteredOptions[highlightedIndex]
                if (option) {
                  onToggle(
                    option.value as T,
                    currentValues.includes(option.value)
                  )
                  if (!isMultiSelect) {
                    onBack?.()
                  }
                }
              } else if (e.key === "Escape") {
                e.preventDefault()
                onClose?.()
              }
              e.stopPropagation()
            }
          }}
        >
          <ScrollArea className="size-full min-h-0 **:data-[slot=scroll-area-scrollbar]:m-0 **:data-[slot=scroll-area-viewport]:h-full **:data-[slot=scroll-area-viewport]:overscroll-contain">
            {filteredOptions.length === 0 ? (
              <div className="text-muted-foreground py-2 text-center text-sm">
                {i18n.noResultsFound}
              </div>
            ) : (
              <DropdownMenuGroup>
                {filteredOptions.map((option, index) => {
                  const isSelected = currentValues.includes(option.value)
                  const isHighlighted = highlightedIndex === index
                  const itemId = `${baseId}-item-${index}`

                  return (
                    <DropdownMenuCheckboxItem
                      key={String(option.value)}
                      id={itemId}
                      role="option"
                      aria-selected={isHighlighted}
                      data-highlighted={isHighlighted || undefined}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      checked={isSelected}
                      className={cn(
                        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
                        option.className
                      )}
                      onSelect={(e) => {
                        if (isMultiSelect) e.preventDefault()
                      }}
                      onCheckedChange={() =>
                        onToggle(option.value as T, isSelected)
                      }
                    >
                      {option.icon && option.icon}
                      <span className="truncate">{option.label}</span>
                    </DropdownMenuCheckboxItem>
                  )
                })}
              </DropdownMenuGroup>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export function Filters<T = unknown>({
  filters,
  fields,
  onChange,
  className,
  variant = "default",
  size = "default",
  radius = "default",
  i18n,
  showSearchInput = true,
  trigger,
  allowMultiple = true,
  menuPopupClassName,
  enableShortcut = false,
  shortcutKey = "f",
  shortcutLabel = "F",
}: FiltersProps<T>) {
  const [addFilterOpen, setAddFilterOpen] = useState(false)
  const [menuSearchInput, setMenuSearchInput] = useState("")
  const [activeMenu, setActiveMenu] = useState<string>("root")
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [lastAddedFilterId, setLastAddedFilterId] = useState<string | null>(
    null
  )
  const rootInputRef = useRef<HTMLInputElement>(null)
  const rootId = useId()

  useEffect(() => {
    if (!enableShortcut) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === shortcutKey.toLowerCase() &&
        !addFilterOpen &&
        !(
          document.activeElement instanceof HTMLInputElement ||
          document.activeElement instanceof HTMLTextAreaElement
        )
      ) {
        e.preventDefault()
        setAddFilterOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [enableShortcut, shortcutKey, addFilterOpen])

  useEffect(() => {
    setHighlightedIndex(-1)
  }, [menuSearchInput])

  useEffect(() => {
    if (highlightedIndex >= 0 && addFilterOpen) {
      const element = document.getElementById(
        `${rootId}-item-${highlightedIndex}`
      )
      element?.scrollIntoView({ block: "nearest" })
    }
  }, [highlightedIndex, addFilterOpen, rootId])

  useEffect(() => {
    if (!addFilterOpen) {
      setOpenSubMenu(null)
    }
  }, [addFilterOpen])

  // Track which filter instance is being built in the current Add Filter menu session
  // Maps fieldKey -> unique filterId created during this open session
  const [sessionFilterIds, setSessionFilterIds] = useState<
    Record<string, string>
  >({})

  useEffect(() => {
    if (lastAddedFilterId) {
      const timer = setTimeout(() => {
        setLastAddedFilterId(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [lastAddedFilterId])

  const mergedI18n: FilterI18nConfig = {
    ...DEFAULT_I18N,
    ...i18n,
    operators: { ...DEFAULT_I18N.operators, ...i18n?.operators },
    placeholders: { ...DEFAULT_I18N.placeholders, ...i18n?.placeholders },
    validation: { ...DEFAULT_I18N.validation, ...i18n?.validation },
  }

  const fieldsMap = useMemo(() => getFieldsMap(fields), [fields])

  const updateFilter = useCallback(
    (filterId: string, updates: Partial<Filter<T>>) => {
      onChange(
        filters.map((filter) => {
          if (filter.id === filterId) {
            const updatedFilter = { ...filter, ...updates }
            if (
              updates.operator === "empty" ||
              updates.operator === "not_empty"
            ) {
              updatedFilter.values = [] as T[]
            }
            return updatedFilter
          }
          return filter
        })
      )
    },
    [filters, onChange]
  )

  const removeFilter = useCallback(
    (filterId: string) => {
      onChange(filters.filter((filter) => filter.id !== filterId))
    },
    [filters, onChange]
  )

  const addFilter = useCallback(
    (fieldKey: string) => {
      const field = fieldsMap[fieldKey]
      if (field && field.key) {
        const defaultOperator =
          field.defaultOperator ||
          (field.type === "multiselect" ? "is_any_of" : "is")
        const defaultValues: unknown[] = field.type === "text" ? [""] : []
        const newFilter = createFilter<T>(
          fieldKey,
          defaultOperator,
          defaultValues as T[]
        )
        setLastAddedFilterId(newFilter.id)
        onChange([...filters, newFilter])
        setAddFilterOpen(false)
        setMenuSearchInput("")
      }
    },
    [fieldsMap, filters, onChange]
  )

  const selectableFields = useMemo(() => {
    const flatFields = flattenFields(fields)
    return flatFields.filter((field) => {
      if (!field.key || field.type === "separator") return false
      if (allowMultiple) return true
      return !filters.some((filter) => filter.field === field.key)
    })
  }, [fields, filters, allowMultiple])

  const filteredFields = useMemo(() => {
    return selectableFields.filter(
      (f) =>
        !menuSearchInput ||
        f.label?.toLowerCase().includes(menuSearchInput.toLowerCase())
    )
  }, [selectableFields, menuSearchInput])

  useEffect(() => {
    if (addFilterOpen && filteredFields.length > 0) {
      setHighlightedIndex(0)
    }
  }, [addFilterOpen, filteredFields.length])

  return (
    <FilterContext.Provider
      value={{
        variant,
        size,
        radius,
        i18n: mergedI18n,
        className,
        trigger,
        allowMultiple,
      }}
    >
      <div
        className={cn(filtersContainerVariants({ variant, size }), className)}
      >
        {selectableFields.length > 0 && (
          <DropdownMenu
            open={addFilterOpen}
            onOpenChange={(open) => {
              setAddFilterOpen(open)
              if (!open) {
                setMenuSearchInput("")
                setSessionFilterIds({})
              } else {
                setActiveMenu("root")
              }
            }}
          >
            <DropdownMenuTrigger asChild>
              {trigger || (
                <Button variant="outline">
                  <IconPlaceholder
                    lucide="PlusIcon"
                    tabler="IconPlus"
                    hugeicons="Plus01Icon"
                    phosphor="PlusIcon"
                    remixicon="RiAddLine"
                  />
                  {mergedI18n.addFilter}
                </Button>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={cn("w-[220px]", menuPopupClassName)}
              align="start"
            >
              {showSearchInput && (
                <>
                  <div className="relative">
                    <Input
                      ref={rootInputRef}
                      role="combobox"
                      aria-controls={`${rootId}-listbox`}
                      aria-activedescendant={
                        highlightedIndex >= 0
                          ? `${rootId}-item-${highlightedIndex}`
                          : undefined
                      }
                      placeholder={mergedI18n.searchFields}
                      className={cn(
                        "h-8 rounded-none border-0 bg-transparent! px-2 text-sm shadow-none",
                        "focus-visible:border-border focus-visible:ring-0 focus-visible:ring-offset-0"
                      )}
                      value={menuSearchInput}
                      onChange={(e) => setMenuSearchInput(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                          e.preventDefault()
                          if (filteredFields.length > 0) {
                            setHighlightedIndex((prev) =>
                              prev < filteredFields.length - 1 ? prev + 1 : 0
                            )
                          }
                        } else if (e.key === "ArrowUp") {
                          e.preventDefault()
                          if (filteredFields.length > 0) {
                            setHighlightedIndex((prev) =>
                              prev > 0 ? prev - 1 : filteredFields.length - 1
                            )
                          }
                        } else if (
                          (e.key === "ArrowRight" || e.key === "ArrowLeft") &&
                          highlightedIndex >= 0
                        ) {
                          const field = filteredFields[highlightedIndex]
                          const hasSubMenu =
                            field &&
                            (field.type === "select" ||
                              field.type === "multiselect") &&
                            field.options?.length

                          if (e.key === "ArrowRight" && hasSubMenu) {
                            e.preventDefault()
                            setOpenSubMenu(field.key || null)
                            setActiveMenu(field.key || "root")
                          } else if (e.key === "ArrowLeft") {
                            e.preventDefault()
                            if (openSubMenu) {
                              setOpenSubMenu(null)
                              setActiveMenu("root")
                            }
                          }
                        } else if (e.key === "Enter" && highlightedIndex >= 0) {
                          e.preventDefault()
                          const field = filteredFields[highlightedIndex]
                          if (field.key) {
                            const hasSubMenu =
                              (field.type === "select" ||
                                field.type === "multiselect") &&
                              field.options?.length
                            if (!hasSubMenu) {
                              addFilter(field.key)
                            } else {
                              if (openSubMenu === field.key) {
                                setOpenSubMenu(null)
                                setActiveMenu("root")
                              } else {
                                setOpenSubMenu(field.key)
                                setActiveMenu(field.key)
                              }
                            }
                          }
                        } else if (e.key === "Escape") {
                          setAddFilterOpen(false)
                        }
                        e.stopPropagation()
                      }}
                    />
                    {enableShortcut && shortcutLabel && (
                      <Kbd className="bg-background absolute top-1/2 right-2 -translate-y-1/2 border">
                        {shortcutLabel}
                      </Kbd>
                    )}
                  </div>
                  <DropdownMenuSeparator />
                </>
              )}

              <div className="relative flex max-h-full">
                <div
                  className="flex max-h-[min(var(--radix-dropdown-menu-content-available-height),24rem)] w-full scroll-pt-2 scroll-pb-2 flex-col overscroll-contain"
                  role="listbox"
                  id={`${rootId}-listbox`}
                >
                  <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:m-0">
                    {(() => {
                      if (filteredFields.length === 0) {
                        return (
                          <div className="text-muted-foreground py-2 text-center text-sm">
                            {mergedI18n.noFieldsFound}
                          </div>
                        )
                      }

                      return filteredFields.map((field, index) => {
                        const isHighlighted = highlightedIndex === index
                        const itemId = `${rootId}-item-${index}`
                        const hasSubMenu =
                          (field.type === "select" ||
                            field.type === "multiselect") &&
                          field.options?.length

                        if (hasSubMenu) {
                          const isMultiSelect = field.type === "multiselect"
                          const fieldKey = field.key as string
                          const sessionFilterId = sessionFilterIds[fieldKey]
                          const sessionFilter = sessionFilterId
                            ? filters.find((f) => f.id === sessionFilterId)
                            : null
                          const currentValues = sessionFilter?.values || []

                          return (
                            <DropdownMenuSub
                              key={fieldKey}
                              open={openSubMenu === fieldKey}
                              onOpenChange={(open) => {
                                if (open) {
                                  setOpenSubMenu((prev) =>
                                    prev === fieldKey ? prev : fieldKey
                                  )
                                } else {
                                  if (openSubMenu === fieldKey) {
                                    setOpenSubMenu(null)
                                    setActiveMenu("root")
                                  }
                                }
                              }}
                            >
                              <DropdownMenuSubTrigger
                                id={itemId}
                                role="option"
                                aria-selected={isHighlighted}
                                data-highlighted={isHighlighted || undefined}
                                onMouseEnter={() => setHighlightedIndex(index)}
                                className="data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                              >
                                {field.icon}
                                <span>{field.label}</span>
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent className="w-[200px]">
                                <FilterSubmenuContent
                                  field={field}
                                  currentValues={currentValues}
                                  isMultiSelect={isMultiSelect}
                                  i18n={mergedI18n}
                                  isActive={activeMenu === fieldKey}
                                  onActive={() => {
                                    if (field.searchable !== false) {
                                      setActiveMenu(fieldKey)
                                    }
                                  }}
                                  onBack={() => {
                                    setOpenSubMenu(null)
                                    setActiveMenu("root")
                                  }}
                                  onClose={() => setAddFilterOpen(false)}
                                  onToggle={(value, isSelected) => {
                                    if (isMultiSelect) {
                                      const nextValues = isSelected
                                        ? (currentValues.filter(
                                            (v) => v !== value
                                          ) as T[])
                                        : ([...currentValues, value] as T[])

                                      if (sessionFilter) {
                                        if (nextValues.length === 0) {
                                          onChange(
                                            filters.filter(
                                              (f) => f.id !== sessionFilter.id
                                            )
                                          )
                                          setSessionFilterIds((prev) => ({
                                            ...prev,
                                            [fieldKey]: "",
                                          }))
                                        } else {
                                          onChange(
                                            filters.map((f) =>
                                              f.id === sessionFilter.id
                                                ? { ...f, values: nextValues }
                                                : f
                                            )
                                          )
                                        }
                                      } else {
                                        const newFilter = createFilter<T>(
                                          fieldKey,
                                          field.defaultOperator || "is_any_of",
                                          nextValues
                                        )
                                        onChange([...filters, newFilter])
                                        setSessionFilterIds((prev) => ({
                                          ...prev,
                                          [fieldKey]: newFilter.id,
                                        }))
                                      }
                                    } else {
                                      const newFilter = createFilter<T>(
                                        fieldKey,
                                        field.defaultOperator || "is",
                                        [value] as T[]
                                      )
                                      setLastAddedFilterId(newFilter.id)
                                      onChange([...filters, newFilter])
                                      setAddFilterOpen(false)
                                    }
                                  }}
                                />
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          )
                        }

                        return (
                          <DropdownMenuItem
                            key={field.key}
                            id={itemId}
                            role="option"
                            aria-selected={isHighlighted}
                            data-highlighted={isHighlighted || undefined}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            onClick={() => field.key && addFilter(field.key)}
                            className="data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                          >
                            {field.icon}
                            <span>{field.label}</span>
                          </DropdownMenuItem>
                        )
                      })
                    })()}
                  </ScrollArea>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {filters.map((filter) => {
          const field = fieldsMap[filter.field]
          if (!field) return null
          return (
            <ButtonGroup key={filter.id}>
              <ButtonGroupText className="bg-background dark:bg-input/30">
                {field.icon && field.icon}
                {field.label}
              </ButtonGroupText>
              <FilterOperatorDropdown<T>
                field={field}
                operator={filter.operator}
                values={filter.values}
                onChange={(operator) => updateFilter(filter.id, { operator })}
              />
              <FilterValueSelector<T>
                field={field}
                values={filter.values}
                operator={filter.operator}
                onChange={(values) => updateFilter(filter.id, { values })}
                autoFocus={filter.id === lastAddedFilterId}
              />
              <FilterRemoveButton onClick={() => removeFilter(filter.id)} />
            </ButtonGroup>
          )
        })}
      </div>
    </FilterContext.Provider>
  )
}

export const createFilter = <T = unknown,>(
  field: string,
  operator?: string,
  values: T[] = []
): Filter<T> => ({
  id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
  field,
  operator: operator || "is",
  values,
})

export const createFilterGroup = <T = unknown,>(
  id: string,
  label: string,
  fields: FilterFieldConfig<T>[],
  initialFilters: Filter<T>[] = []
): FilterGroup<T> => ({
  id,
  label,
  filters: initialFilters,
  fields,
})
```

### Filters with various field types (`c-filters-1`)

Target: `components/examples/c-filters-1.tsx`

Filters with various field types

```tsx
"use client"

import { useCallback, useState } from "react"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

// Priority icon component
const PriorityIcon = ({ priority }: { priority: string }) => {
  const colors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-violet-500",
    urgent: "bg-orange-500",
    critical: "bg-red-500",
  }
  return (
    <div
      className={cn(
        "size-2.25 shrink-0 rounded-full",
        colors[priority as keyof typeof colors]
      )}
    />
  )
}

const countryFlags = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "CV", name: "Cape Verde" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Cote D'Ivoire" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Greece" },
  { code: "GD", name: "Grenada" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KR", name: "South Korea" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Laos" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russia" },
  { code: "RW", name: "Rwanda" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "ZA", name: "South Africa" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syria" },
  { code: "TW", name: "Taiwan" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TR", name: "Turkey" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VN", name: "Vietnam" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
]

export function Pattern() {
  // Example: All Possible Filter Field Types with Grouping
  const fields: FilterFieldConfig[] = [
    {
      group: "Basic",
      fields: [
        {
          key: "text",
          label: "Text",
          type: "text",
          icon: (
            <IconPlaceholder
              lucide="MailIcon"
              tabler="IconMail"
              hugeicons="MailIcon"
              phosphor="EnvelopeIcon"
              remixicon="RiMailLine"
            />
          ),
          placeholder: "Search text...",
        },
        {
          key: "email",
          label: "Email",
          type: "text",
          icon: (
            <IconPlaceholder
              lucide="TypeIcon"
              tabler="IconLetterT"
              hugeicons="TextIcon"
              phosphor="TextTIcon"
              remixicon="RiText"
            />
          ),
          placeholder: "user@example.com",
        },
        {
          key: "website",
          label: "Website",
          icon: (
            <IconPlaceholder
              lucide="GlobeIcon"
              tabler="IconWorld"
              hugeicons="Globe02Icon"
              phosphor="GlobeSimpleIcon"
              remixicon="RiGlobalLine"
            />
          ),
          type: "text",
          placeholder: "https://example.com",
        },
        {
          key: "phone",
          label: "Phone",
          icon: (
            <IconPlaceholder
              lucide="PhoneIcon"
              tabler="IconPhone"
              hugeicons="Call02Icon"
              phosphor="PhoneIcon"
              remixicon="RiPhoneLine"
            />
          ),
          type: "text",
          placeholder: "+1 (123) 456-7890",
        },
      ],
    },
    {
      group: "Select",
      fields: [
        {
          key: "status",
          label: "Status",
          icon: (
            <IconPlaceholder
              lucide="BellIcon"
              tabler="IconBell"
              hugeicons="NotificationIcon"
              phosphor="BellIcon"
              remixicon="RiNotificationLine"
            />
          ),
          type: "select",
          searchable: false,
          className: "w-[200px]",
          options: [
            {
              value: "todo",
              label: "To Do",
              icon: (
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  className="stroke-violet-500"
                />
              ),
            },
            {
              value: "in-progress",
              label: "In Progress",
              icon: (
                <IconPlaceholder
                  lucide="CircleAlertIcon"
                  tabler="IconAlertCircle"
                  hugeicons="AlertCircleIcon"
                  phosphor="WarningCircleIcon"
                  remixicon="RiErrorWarningLine"
                  className="stroke-yellow-500"
                />
              ),
            },
            {
              value: "done",
              label: "Done",
              icon: (
                <IconPlaceholder
                  lucide="CircleCheckIcon"
                  tabler="IconCircleCheck"
                  hugeicons="CheckmarkCircle01Icon"
                  phosphor="CheckCircleIcon"
                  remixicon="RiCheckboxCircleLine"
                  className="stroke-green-500"
                />
              ),
            },
            {
              value: "cancelled",
              label: "Cancelled",
              icon: (
                <IconPlaceholder
                  lucide="BanIcon"
                  tabler="IconBan"
                  hugeicons="UnavailableIcon"
                  phosphor="ProhibitIcon"
                  remixicon="RiProhibitedLine"
                  className="stroke-destructive"
                />
              ),
            },
          ],
        },
        {
          key: "priority",
          label: "Priority",
          icon: (
            <IconPlaceholder
              lucide="BanIcon"
              tabler="IconBan"
              hugeicons="UnavailableIcon"
              phosphor="ProhibitIcon"
              remixicon="RiProhibitedLine"
            />
          ),
          type: "multiselect",
          className: "w-[180px]",
          options: [
            {
              value: "low",
              label: "Low",
              icon: <PriorityIcon priority="low" />,
            },
            {
              value: "medium",
              label: "Medium",
              icon: <PriorityIcon priority="medium" />,
            },
            {
              value: "high",
              label: "High",
              icon: <PriorityIcon priority="high" />,
            },
            {
              value: "urgent",
              label: "Urgent",
              icon: <PriorityIcon priority="urgent" />,
            },
            {
              value: "critical",
              label: "Critical",
              icon: <PriorityIcon priority="critical" />,
            },
          ],
        },
        {
          key: "assignee",
          label: "Assignee",
          icon: (
            <IconPlaceholder
              lucide="UserRoundCheckIcon"
              tabler="IconUserCheck"
              hugeicons="UserCheck01Icon"
              phosphor="UserCheckIcon"
              remixicon="RiUserFollowLine"
            />
          ),
          type: "multiselect",
          maxSelections: 5,
          options: [
            {
              value: "john",
              label: "John Doe",
              icon: (
                <Avatar className="size-5 border">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="John Doe"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "jane",
              label: "Jane Smith",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="Jane Smith"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "bob",
              label: "Bob Johnson",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Bob Johnson"
                  />
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "alice",
              label: "Alice Brown",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/4.jpg"
                    alt="Alice Brown"
                  />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "nick",
              label: "Nick Bold",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/4.jpg"
                    alt="Nick Bold"
                  />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "sarah",
              label: "Sarah Wilson",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/5.jpg"
                    alt="Sarah Wilson"
                  />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "michael",
              label: "Michael Scott",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/6.jpg"
                    alt="Michael Scott"
                  />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "emily",
              label: "Emily Blunt",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/7.jpg"
                    alt="Emily Blunt"
                  />
                  <AvatarFallback>EB</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "david",
              label: "David Gandy",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/8.jpg"
                    alt="David Gandy"
                  />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "laura",
              label: "Laura Palmer",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/9.jpg"
                    alt="Laura Palmer"
                  />
                  <AvatarFallback>LP</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "kevin",
              label: "Kevin Hart",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="Kevin Hart"
                  />
                  <AvatarFallback>KH</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "anna",
              label: "Anna Kendrick",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    alt="Anna Kendrick"
                  />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "tom",
              label: "Tom Cruise",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    alt="Tom Cruise"
                  />
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "lisa",
              label: "Lisa Kudrow",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/13.jpg"
                    alt="Lisa Kudrow"
                  />
                  <AvatarFallback>LK</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "james",
              label: "James Bond",
              icon: (
                <Avatar className="size-5">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/14.jpg"
                    alt="James Bond"
                  />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
              ),
            },
            {
              value: "unassigned",
              label: "Unassigned",
              icon: (
                <Avatar className="size-5">
                  <AvatarFallback>
                    <IconPlaceholder
                      lucide="UserRoundXIcon"
                      tabler="IconUserX"
                      hugeicons="UserRemove01Icon"
                      phosphor="UserGearIcon"
                      remixicon="RiUserUnfollowLine"
                    />
                  </AvatarFallback>
                </Avatar>
              ),
            },
          ],
        },
        {
          key: "userType",
          label: "User Type",
          icon: (
            <IconPlaceholder
              lucide="UsersIcon"
              tabler="IconUsers"
              hugeicons="UserMultiple02Icon"
              phosphor="UsersIcon"
              remixicon="RiGroupLine"
            />
          ),
          type: "select",
          searchable: false,
          className: "w-[200px]",
          options: [
            {
              value: "premium",
              label: "Premium",
              icon: (
                <IconPlaceholder
                  lucide="StarIcon"
                  tabler="IconStar"
                  hugeicons="StarIcon"
                  phosphor="StarIcon"
                  remixicon="RiStarLine"
                  className="size-3 text-yellow-500"
                />
              ),
            },
            {
              value: "standard",
              label: "Standard",
              icon: (
                <IconPlaceholder
                  lucide="BuildingIcon"
                  tabler="IconBuilding"
                  hugeicons="Building02Icon"
                  phosphor="BuildingIcon"
                  remixicon="RiBuilding4Line"
                  className="size-3 text-blue-500"
                />
              ),
            },
            {
              value: "trial",
              label: "Trial",
              icon: (
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  className="size-3 text-gray-500"
                />
              ),
            },
          ],
        },
        {
          key: "country",
          label: "Country",
          icon: (
            <IconPlaceholder
              lucide="GlobeIcon"
              tabler="IconWorld"
              hugeicons="Globe02Icon"
              phosphor="GlobeSimpleIcon"
              remixicon="RiGlobalLine"
            />
          ),
          type: "select",
          searchable: true,
          className: "w-[220px]",
          options: countryFlags.map((country) => ({
            value: country.code,
            label: country.name,
            icon: (
              <img
                src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                alt={country.code}
                className="size-4 rounded-full object-cover"
              />
            ),
          })),
        },
      ],
    },
  ]

  const [filters, setFilters] = useState<Filter[]>([
    createFilter("priority", "is_any_of", ["low", "medium", "critical"]),
  ])

  const handleFiltersChange = useCallback((filters: Filter[]) => {
    setFilters(filters)
  }, [])

  return (
    <div className="flex grow content-start items-start gap-2.5 self-start">
      <div className="grow space-y-5">
        {/* Filters Section */}
        <div className="flex items-start gap-2.5">
          <div className="flex-1">
            <Filters
              filters={filters}
              fields={fields}
              onChange={handleFiltersChange}
              shortcutKey="f"
              shortcutLabel="F"
              enableShortcut={true}
              trigger={
                <Button variant="outline">
                  <IconPlaceholder
                    lucide="ListFilterIcon"
                    tabler="IconFilter2"
                    hugeicons="FilterMailIcon"
                    phosphor="FunnelSimpleIcon"
                    remixicon="RiFilter3Line"
                  />
                  Add Filter
                </Button>
              }
            />
          </div>

          {filters.length > 0 && (
            <Button variant="outline" onClick={() => setFilters([])}>
              <IconPlaceholder
                lucide="FunnelXIcon"
                tabler="IconFilterX"
                hugeicons="FilterRemoveIcon"
                phosphor="FunnelXIcon"
                remixicon="RiFilterOffLine"
              />
              Clear
            </Button>
          )}
        </div>

        {/* Debug Block */}
        <pre className="bg-muted dark:bg-muted/60 mt-2 max-h-[400px] w-full max-w-[500px] overflow-auto overflow-x-auto rounded-md border p-3 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}
```

### Filters with input validation (`c-filters-2`)

Target: `components/examples/c-filters-2.tsx`

Filters with input validation

```tsx
"use client"

import { useCallback, useState } from "react"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

// Zod validation helper - wraps a Zod schema to return validation result with message
function zodValidator<T extends z.ZodType>(schema: T) {
  return (value: unknown): { valid: boolean; message?: string } => {
    const result = schema.safeParse(value)
    if (result.success) {
      return { valid: true }
    }
    // Get the first error message from Zod using format()
    const formatted = result.error.format()
    const message =
      formatted._errors?.[0] || result.error.message || "Invalid value"
    return { valid: false, message }
  }
}

// Define Zod schemas for different field types
const emailSchema = z
  .string()
  .min(1, { message: "Email is required" })
  .pipe(z.email({ message: "Please enter a valid email address" }))

const urlSchema = z
  .string()
  .pipe(
    z.url({ message: "Please enter a valid URL (e.g., https://example.com)" })
  )

const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number" })

const usernameSchema = z
  .string()
  .min(3, { message: "Username must be at least 3 characters" })
  .max(20, { message: "Username must be at most 20 characters" })
  .regex(/^[a-zA-Z0-9_]+$/, {
    message: "Username can only contain letters, numbers, and underscores",
  })

const creditCardSchema = z.string().regex(/^\d{13,19}$/, {
  message: "Please enter a valid credit card number (13-19 digits)",
})

export function Pattern() {
  const fields: FilterFieldConfig[] = [
    {
      key: "email",
      label: "Email",
      icon: (
        <IconPlaceholder
          lucide="AtSignIcon"
          tabler="IconAt"
          hugeicons="AtIcon"
          phosphor="AtIcon"
          remixicon="RiAtLine"
          className="size-3.5"
        />
      ),
      type: "text",
      placeholder: "user@example.com",
      // Use Zod validator for email validation
      validation: zodValidator(emailSchema),
    },
    {
      key: "website",
      label: "Website",
      icon: (
        <IconPlaceholder
          lucide="GlobeIcon"
          tabler="IconWorld"
          hugeicons="Globe02Icon"
          phosphor="GlobeSimpleIcon"
          remixicon="RiGlobalLine"
          className="size-3.5"
        />
      ),
      type: "text",
      placeholder: "https://example.com",
      // Use Zod validator for URL validation
      validation: zodValidator(urlSchema),
    },
    {
      key: "phone",
      label: "Phone",
      icon: (
        <IconPlaceholder
          lucide="PhoneIcon"
          tabler="IconPhone"
          hugeicons="Call02Icon"
          phosphor="PhoneIcon"
          remixicon="RiPhoneLine"
          className="size-3.5"
        />
      ),
      type: "text",
      placeholder: "+1234567890",
      // Use Zod validator for phone validation
      validation: zodValidator(phoneSchema),
    },
    {
      key: "username",
      label: "Username",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-44",
      placeholder: "john_doe",
      // Use Zod validator for username validation
      validation: zodValidator(usernameSchema),
    },
    {
      key: "cardNumber",
      label: "Card Number",
      icon: (
        <IconPlaceholder
          lucide="CreditCardIcon"
          tabler="IconCreditCard"
          hugeicons="CreditCardIcon"
          phosphor="CreditCardIcon"
          remixicon="RiBankCardLine"
          className="size-3.5"
        />
      ),
      type: "text",
      placeholder: "4111111111111111",
      // Use Zod validator for credit card validation
      validation: zodValidator(creditCardSchema),
    },
    {
      key: "customUrl",
      label: "Custom URL",
      icon: (
        <IconPlaceholder
          lucide="LinkIcon"
          tabler="IconLink"
          hugeicons="Link01Icon"
          phosphor="LinkIcon"
          remixicon="RiLinkM"
          className="size-3.5"
        />
      ),
      type: "text",
      placeholder: "https://...",
      // Custom validation function without Zod (for comparison)
      validation: (value) => {
        const urlPattern = /^https?:\/\/.+\..+/
        if (!urlPattern.test(value as string)) {
          return {
            valid: false,
            message: "URL must start with http:// or https://",
          }
        }
        return { valid: true }
      },
    },
  ]

  const [filters, setFilters] = useState<Filter[]>([
    createFilter("email", "contains", [""]),
  ])

  const handleFiltersChange = useCallback((filters: Filter[]) => {
    setFilters(filters)
  }, [])

  return (
    <div className="flex grow content-start items-start self-start">
      <Filters
        filters={filters}
        fields={fields}
        trigger={
          <Button variant="outline" size="icon">
            <IconPlaceholder
              lucide="ListFilterIcon"
              tabler="IconFilter2"
              hugeicons="FilterMailIcon"
              phosphor="FunnelSimpleIcon"
              remixicon="RiFilter3Line"
            />
          </Button>
        }
        onChange={handleFiltersChange}
      />
    </div>
  )
}
```

### Filters with custom trigger button (`c-filters-3`)

Target: `components/examples/c-filters-3.tsx`

Filters with custom trigger button

```tsx
"use client"

import { useCallback, useState } from "react"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

// Priority icon component
const PriorityIcon = ({ priority }: { priority: string }) => {
  const colors = {
    low: "text-green-500",
    medium: "text-yellow-500",
    high: "text-orange-500",
    urgent: "text-red-500",
  }
  return (
    <IconPlaceholder
      lucide="StarIcon"
      tabler="IconStar"
      hugeicons="StarIcon"
      phosphor="StarIcon"
      remixicon="RiStarLine"
      className={colors[priority as keyof typeof colors]}
    />
  )
}

export function Pattern() {
  // Basic filter fields for outline variant demo
  const fields: FilterFieldConfig[] = [
    {
      key: "text",
      label: "Text",
      icon: (
        <IconPlaceholder
          lucide="TagIcon"
          tabler="IconTag"
          hugeicons="Tag01Icon"
          phosphor="TagIcon"
          remixicon="RiPriceTag3Line"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-36",
      placeholder: "Search text...",
    },
    {
      key: "email",
      label: "Email",
      icon: (
        <IconPlaceholder
          lucide="MailIcon"
          tabler="IconMail"
          hugeicons="MailIcon"
          phosphor="EnvelopeIcon"
          remixicon="RiMailLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "user@example.com",
    },
    {
      key: "website",
      label: "Website",
      icon: (
        <IconPlaceholder
          lucide="GlobeIcon"
          tabler="IconWorld"
          hugeicons="Globe02Icon"
          phosphor="GlobeSimpleIcon"
          remixicon="RiGlobalLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "https://example.com",
    },
    {
      key: "assignee",
      label: "Assignee",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "multiselect",
      className: "w-[200px]",
      options: [
        {
          value: "john",
          label: "John Doe",
          icon: (
            <Avatar className="size-5">
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="John Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ),
        },
        {
          value: "jane",
          label: "Jane Smith",
          icon: (
            <Avatar className="size-5">
              <AvatarImage
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Jane Smith"
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          ),
        },
        {
          value: "bob",
          label: "Bob Johnson",
          icon: (
            <Avatar className="size-5">
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Bob Johnson"
              />
              <AvatarFallback>BJ</AvatarFallback>
            </Avatar>
          ),
        },
        {
          value: "alice",
          label: "Alice Brown",
          icon: (
            <Avatar className="size-5">
              <AvatarImage
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="Alice Brown"
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          ),
        },
        {
          value: "nick",
          label: "Nick Bold",
          icon: (
            <Avatar className="size-5">
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt="Nick Bold"
              />
              <AvatarFallback>NB</AvatarFallback>
            </Avatar>
          ),
        },
        {
          value: "unassigned",
          label: "Unassigned",
          icon: (
            <Avatar className="size-5">
              <AvatarFallback>
                <IconPlaceholder
                  lucide="UserRoundXIcon"
                  tabler="IconUserX"
                  hugeicons="UserRemove01Icon"
                  phosphor="UserGearIcon"
                  remixicon="RiUserUnfollowLine"
                />
              </AvatarFallback>
            </Avatar>
          ),
        },
      ],
    },
    {
      key: "priority",
      label: "Priority",
      icon: (
        <IconPlaceholder
          lucide="CircleAlertIcon"
          tabler="IconAlertCircle"
          hugeicons="AlertCircleIcon"
          phosphor="WarningCircleIcon"
          remixicon="RiErrorWarningLine"
          className="size-3.5"
        />
      ),
      type: "multiselect",
      className: "w-[180px]",
      options: [
        { value: "low", label: "Low", icon: <PriorityIcon priority="low" /> },
        {
          value: "medium",
          label: "Medium",
          icon: <PriorityIcon priority="medium" />,
        },
        {
          value: "high",
          label: "High",
          icon: <PriorityIcon priority="high" />,
        },
        {
          value: "urgent",
          label: "Urgent",
          icon: <PriorityIcon priority="urgent" />,
        },
      ],
    },
  ]

  const [filters, setFilters] = useState<Filter[]>([
    createFilter("assignee", "is_any_of", ["john", "nick", "alice"]),
  ])

  const handleFiltersChange = useCallback((filters: Filter[]) => {
    setFilters(filters)
  }, [])

  return (
    <div className="flex grow content-start items-start gap-2.5 self-start">
      <div className="flex-1">
        <Filters
          filters={filters}
          fields={fields}
          trigger={
            <Button variant="outline" size="icon">
              <IconPlaceholder
                lucide="ListFilterIcon"
                tabler="IconFilter2"
                hugeicons="FilterMailIcon"
                phosphor="FunnelSimpleIcon"
                remixicon="RiFilter3Line"
              />
            </Button>
          }
          onChange={handleFiltersChange}
        />
      </div>

      {filters.length > 0 && (
        <Button variant="outline" onClick={() => setFilters([])}>
          <IconPlaceholder
            lucide="FunnelXIcon"
            tabler="IconFilterX"
            hugeicons="FilterRemoveIcon"
            phosphor="FunnelXIcon"
            remixicon="RiFilterOffLine"
          />
          Clear
        </Button>
      )}
    </div>
  )
}
```

### Filters with small size controls (`c-filters-4`)

Target: `components/examples/c-filters-4.tsx`

Filters with small size controls

```tsx
"use client"

import { useCallback, useState } from "react"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "todo":
      return (
        <IconPlaceholder
          lucide="ClockIcon"
          tabler="IconClock"
          hugeicons="ClockIcon"
          phosphor="ClockIcon"
          remixicon="RiTimeLine"
          className="text-primary"
        />
      )
    case "in-progress":
      return (
        <IconPlaceholder
          lucide="CircleAlertIcon"
          tabler="IconAlertCircle"
          hugeicons="AlertCircleIcon"
          phosphor="WarningCircleIcon"
          remixicon="RiErrorWarningLine"
          className="text-yellow-500"
        />
      )
    case "done":
      return (
        <IconPlaceholder
          lucide="CircleCheckIcon"
          tabler="IconCircleCheck"
          hugeicons="CheckmarkCircle01Icon"
          phosphor="CheckCircleIcon"
          remixicon="RiCheckboxCircleLine"
          className="text-green-500"
        />
      )
    case "cancelled":
      return (
        <IconPlaceholder
          lucide="BanIcon"
          tabler="IconBan"
          hugeicons="UnavailableIcon"
          phosphor="ProhibitIcon"
          remixicon="RiProhibitedLine"
          className="text-destructive"
        />
      )
    default:
      return (
        <IconPlaceholder
          lucide="CircleIcon"
          tabler="IconCircle"
          hugeicons="CircleIcon"
          phosphor="CircleIcon"
          remixicon="RiCircleLine"
          className="text-muted-foreground"
        />
      )
  }
}

// Priority icon component
const PriorityIcon = ({ priority }: { priority: string }) => {
  const colors = {
    low: "text-green-500",
    medium: "text-yellow-500",
    high: "text-orange-500",
    urgent: "text-red-500",
  }
  return (
    <IconPlaceholder
      lucide="StarIcon"
      tabler="IconStar"
      hugeicons="StarIcon"
      phosphor="StarIcon"
      remixicon="RiStarLine"
      className={colors[priority as keyof typeof colors]}
    />
  )
}

export function Pattern() {
  // Basic filter fields for size variant demo
  const fields: FilterFieldConfig[] = [
    {
      key: "text",
      label: "Text",
      icon: (
        <IconPlaceholder
          lucide="TagIcon"
          tabler="IconTag"
          hugeicons="Tag01Icon"
          phosphor="TagIcon"
          remixicon="RiPriceTag3Line"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-36",
      placeholder: "Search text...",
    },
    {
      key: "email",
      label: "Email",
      icon: (
        <IconPlaceholder
          lucide="MailIcon"
          tabler="IconMail"
          hugeicons="MailIcon"
          phosphor="EnvelopeIcon"
          remixicon="RiMailLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-48",
      placeholder: "user@example.com",
    },
    {
      key: "website",
      label: "Website",
      icon: (
        <IconPlaceholder
          lucide="GlobeIcon"
          tabler="IconWorld"
          hugeicons="Globe02Icon"
          phosphor="GlobeSimpleIcon"
          remixicon="RiGlobalLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "https://example.com",
    },
    {
      key: "status",
      label: "Status",
      icon: (
        <IconPlaceholder
          lucide="ClockIcon"
          tabler="IconClock"
          hugeicons="ClockIcon"
          phosphor="ClockIcon"
          remixicon="RiTimeLine"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: false,
      className: "w-[200px]",
      options: [
        { value: "todo", label: "To Do", icon: <StatusIcon status="todo" /> },
        {
          value: "in-progress",
          label: "In Progress",
          icon: <StatusIcon status="in-progress" />,
        },
        { value: "done", label: "Done", icon: <StatusIcon status="done" /> },
        {
          value: "cancelled",
          label: "Cancelled",
          icon: <StatusIcon status="cancelled" />,
        },
      ],
    },
    {
      key: "priority",
      label: "Priority",
      icon: (
        <IconPlaceholder
          lucide="CircleAlertIcon"
          tabler="IconAlertCircle"
          hugeicons="AlertCircleIcon"
          phosphor="WarningCircleIcon"
          remixicon="RiErrorWarningLine"
          className="size-3.5"
        />
      ),
      type: "multiselect",
      className: "w-[180px]",
      options: [
        { value: "low", label: "Low", icon: <PriorityIcon priority="low" /> },
        {
          value: "medium",
          label: "Medium",
          icon: <PriorityIcon priority="medium" />,
        },
        {
          value: "high",
          label: "High",
          icon: <PriorityIcon priority="high" />,
        },
        {
          value: "urgent",
          label: "Urgent",
          icon: <PriorityIcon priority="urgent" />,
        },
      ],
    },
  ]

  const [smallFilters, setSmallFilters] = useState<Filter[]>([
    createFilter("priority", "is_any_of", ["high", "urgent"]),
  ])

  const [mediumFilters, setMediumFilters] = useState<Filter[]>([
    createFilter("status", "is", ["todo"]),
  ])

  const [largeFilters, setLargeFilters] = useState<Filter[]>([
    createFilter("email", "contains", ["example@example.com"]),
  ])

  const handleSmallFiltersChange = useCallback((filters: Filter[]) => {
    setSmallFilters(filters)
  }, [])

  const handleMediumFiltersChange = useCallback((filters: Filter[]) => {
    setMediumFilters(filters)
  }, [])

  const handleLargeFiltersChange = useCallback((filters: Filter[]) => {
    setLargeFilters(filters)
  }, [])

  return (
    <div className="flex grow flex-col content-start items-start gap-2.5 space-y-6 self-start">
      <Filters
        size="sm"
        filters={smallFilters}
        fields={fields}
        onChange={handleSmallFiltersChange}
        trigger={
          <Button variant="outline" size="icon-sm">
            <IconPlaceholder
              lucide="ListFilterIcon"
              tabler="IconFilter2"
              hugeicons="FilterMailIcon"
              phosphor="FunnelSimpleIcon"
              remixicon="RiFilter3Line"
            />
          </Button>
        }
      />
    </div>
  )
}
```

### Filters with large size controls (`c-filters-5`)

Target: `components/examples/c-filters-5.tsx`

Filters with large size controls

```tsx
"use client"

import { useCallback, useState } from "react"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"

import { Button } from "@/components/ui/button"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "todo":
      return (
        <IconPlaceholder
          lucide="ClockIcon"
          tabler="IconClock"
          hugeicons="ClockIcon"
          phosphor="ClockIcon"
          remixicon="RiTimeLine"
          className="text-primary"
        />
      )
    case "in-progress":
      return (
        <IconPlaceholder
          lucide="CircleAlertIcon"
          tabler="IconAlertCircle"
          hugeicons="AlertCircleIcon"
          phosphor="WarningCircleIcon"
          remixicon="RiErrorWarningLine"
          className="text-yellow-500"
        />
      )
    case "done":
      return (
        <IconPlaceholder
          lucide="CircleCheckIcon"
          tabler="IconCircleCheck"
          hugeicons="CheckmarkCircle01Icon"
          phosphor="CheckCircleIcon"
          remixicon="RiCheckboxCircleLine"
          className="text-green-500"
        />
      )
    case "cancelled":
      return (
        <IconPlaceholder
          lucide="BanIcon"
          tabler="IconBan"
          hugeicons="UnavailableIcon"
          phosphor="ProhibitIcon"
          remixicon="RiProhibitedLine"
          className="text-destructive"
        />
      )
    default:
      return (
        <IconPlaceholder
          lucide="CircleIcon"
          tabler="IconCircle"
          hugeicons="CircleIcon"
          phosphor="CircleIcon"
          remixicon="RiCircleLine"
          className="text-muted-foreground"
        />
      )
  }
}

// Priority icon component
const PriorityIcon = ({ priority }: { priority: string }) => {
  const colors = {
    low: "text-green-500",
    medium: "text-yellow-500",
    high: "text-orange-500",
    urgent: "text-red-500",
  }
  return (
    <IconPlaceholder
      lucide="StarIcon"
      tabler="IconStar"
      hugeicons="StarIcon"
      phosphor="StarIcon"
      remixicon="RiStarLine"
      className={colors[priority as keyof typeof colors]}
    />
  )
}

export function Pattern() {
  // Basic filter fields for size variant demo
  const fields: FilterFieldConfig[] = [
    {
      key: "text",
      label: "Text",
      icon: (
        <IconPlaceholder
          lucide="TagIcon"
          tabler="IconTag"
          hugeicons="Tag01Icon"
          phosphor="TagIcon"
          remixicon="RiPriceTag3Line"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-36",
      placeholder: "Search text...",
    },
    {
      key: "email",
      label: "Email",
      icon: (
        <IconPlaceholder
          lucide="MailIcon"
          tabler="IconMail"
          hugeicons="MailIcon"
          phosphor="EnvelopeIcon"
          remixicon="RiMailLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-48",
      placeholder: "user@example.com",
    },
    {
      key: "website",
      label: "Website",
      icon: (
        <IconPlaceholder
          lucide="GlobeIcon"
          tabler="IconWorld"
          hugeicons="Globe02Icon"
          phosphor="GlobeSimpleIcon"
          remixicon="RiGlobalLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "https://example.com",
    },
    {
      key: "status",
      label: "Status",
      icon: (
        <IconPlaceholder
          lucide="ClockIcon"
          tabler="IconClock"
          hugeicons="ClockIcon"
          phosphor="ClockIcon"
          remixicon="RiTimeLine"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: false,
      className: "w-[200px]",
      options: [
        { value: "todo", label: "To Do", icon: <StatusIcon status="todo" /> },
        {
          value: "in-progress",
          label: "In Progress",
          icon: <StatusIcon status="in-progress" />,
        },
        { value: "done", label: "Done", icon: <StatusIcon status="done" /> },
        {
          value: "cancelled",
          label: "Cancelled",
          icon: <StatusIcon status="cancelled" />,
        },
      ],
    },
    {
      key: "priority",
      label: "Priority",
      icon: (
        <IconPlaceholder
          lucide="CircleAlertIcon"
          tabler="IconAlertCircle"
          hugeicons="AlertCircleIcon"
          phosphor="WarningCircleIcon"
          remixicon="RiErrorWarningLine"
          className="size-3.5"
        />
      ),
      type: "multiselect",
      className: "w-[180px]",
      options: [
        { value: "low", label: "Low", icon: <PriorityIcon priority="low" /> },
        {
          value: "medium",
          label: "Medium",
          icon: <PriorityIcon priority="medium" />,
        },
        {
          value: "high",
          label: "High",
          icon: <PriorityIcon priority="high" />,
        },
        {
          value: "urgent",
          label: "Urgent",
          icon: <PriorityIcon priority="urgent" />,
        },
      ],
    },
  ]

  const [smallFilters, setSmallFilters] = useState<Filter[]>([
    createFilter("priority", "is_any_of", ["high", "urgent"]),
  ])

  const [mediumFilters, setMediumFilters] = useState<Filter[]>([
    createFilter("status", "is", ["todo"]),
  ])

  const [largeFilters, setLargeFilters] = useState<Filter[]>([
    createFilter("email", "contains", ["example@example.com"]),
  ])

  const handleSmallFiltersChange = useCallback((filters: Filter[]) => {
    setSmallFilters(filters)
  }, [])

  const handleMediumFiltersChange = useCallback((filters: Filter[]) => {
    setMediumFilters(filters)
  }, [])

  const handleLargeFiltersChange = useCallback((filters: Filter[]) => {
    setLargeFilters(filters)
  }, [])

  return (
    <div className="flex grow flex-col content-start items-start gap-2.5 space-y-6 self-start">
      <Filters
        size="lg"
        filters={smallFilters}
        fields={fields}
        onChange={handleSmallFiltersChange}
        trigger={
          <Button variant="outline" size="icon-sm">
            <IconPlaceholder
              lucide="ListFilterIcon"
              tabler="IconFilter2"
              hugeicons="FilterMailIcon"
              phosphor="FunnelSimpleIcon"
              remixicon="RiFilter3Line"
            />
          </Button>
        }
      />
    </div>
  )
}
```

### Filters with custom controls (`c-filters-6`)

Target: `components/examples/c-filters-6.tsx`

Filters with custom controls

```tsx
"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import {
  DateSelector,
  formatDateValue,
  type DateSelectorValue,
} from "@/components/reui/date-selector"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"
import {
  endOfMonth,
  endOfYear,
  format,
  isEqual,
  startOfDay,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

// Type for custom renderer props
type CustomRendererProps = {
  values: unknown[]
  onChange: (values: unknown[]) => void
  autoFocus?: boolean
}

// Modal-based Date Selector Component
function CustomModalDateSelector({
  values,
  onChange,
  autoFocus,
}: CustomRendererProps) {
  const value = values?.[0] as DateSelectorValue | undefined
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<
    DateSelectorValue | undefined
  >(value)

  const formattedValue = value ? formatDateValue(value) : ""
  const displayText = formattedValue || "Select a date"

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => setOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [autoFocus])

  useEffect(() => {
    if (open) {
      setInternalValue(value)
    }
  }, [open, value])

  const handleApply = () => {
    onChange([internalValue])
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{displayText}</DialogTrigger>
      <DialogContent className="sm:max-w-lg" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Select Date</DialogTitle>
        </DialogHeader>

        <DateSelector
          value={internalValue}
          onChange={setInternalValue}
          showInput={true}
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleApply}>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Custom Date Range Input Component
function CustomDateRangeInput({
  values,
  onChange,
  autoFocus,
}: CustomRendererProps) {
  const [date, setDate] = useState<DateRange | undefined>(
    values?.[0] && typeof values[0] === "string"
      ? {
          from: new Date(values[0] as string),
          to:
            values[1] && typeof values[1] === "string"
              ? new Date(values[1] as string)
              : undefined,
        }
      : undefined
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [autoFocus])

  const handleApply = () => {
    if (date?.from) {
      const fromStr = date.from.toISOString().split("T")[0]
      const toStr = date.to ? date.to.toISOString().split("T")[0] : fromStr
      onChange([fromStr, toStr])
    }
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  const handleSelect = (selected: DateRange | undefined) => {
    setDate(selected)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        {date?.from ? (
          date.to ? (
            <>
              {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
            </>
          ) : (
            format(date.from, "LLL dd, y")
          )
        ) : (
          <span>Pick a date range</span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" sideOffset={8}>
        <Calendar
          autoFocus
          mode="range"
          defaultMonth={date?.from}
          showOutsideDays={false}
          selected={date}
          onSelect={handleSelect}
          numberOfMonths={2}
        />
        <div className="border-border flex items-center justify-end gap-1.5 border-t p-3">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleApply}>Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Custom Date Range with Presets Input Component
function CustomDateRangeWithPresetsInput({
  values,
  onChange,
  autoFocus,
}: CustomRendererProps) {
  const today = useMemo(() => new Date(), [])

  const presets = useMemo(
    () => [
      { label: "Today", range: { from: today, to: today } },
      {
        label: "Yesterday",
        range: { from: subDays(today, 1), to: subDays(today, 1) },
      },
      { label: "Last 7 days", range: { from: subDays(today, 6), to: today } },
      { label: "Last 30 days", range: { from: subDays(today, 29), to: today } },
      {
        label: "Month to date",
        range: { from: startOfMonth(today), to: today },
      },
      {
        label: "Last month",
        range: {
          from: startOfMonth(subMonths(today, 1)),
          to: endOfMonth(subMonths(today, 1)),
        },
      },
      { label: "Year to date", range: { from: startOfYear(today), to: today } },
      {
        label: "Last year",
        range: {
          from: startOfYear(subYears(today, 1)),
          to: endOfYear(subYears(today, 1)),
        },
      },
    ],
    [today]
  )

  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<DateRange | undefined>(
    values?.[0] && typeof values[0] === "string"
      ? {
          from: new Date(values[0] as string),
          to:
            values[1] && typeof values[1] === "string"
              ? new Date(values[1] as string)
              : undefined,
        }
      : undefined
  )
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [autoFocus])

  useEffect(() => {
    const matchedPreset = presets.find(
      (preset) =>
        isEqual(
          startOfDay(preset.range.from),
          startOfDay(date?.from || new Date(0))
        ) &&
        isEqual(
          startOfDay(preset.range.to),
          startOfDay(date?.to || new Date(0))
        )
    )
    setSelectedPreset(matchedPreset?.label || null)
  }, [date, presets])

  const handleApply = () => {
    if (date?.from) {
      const fromStr = date.from.toISOString().split("T")[0]
      const toStr = date.to ? date.to.toISOString().split("T")[0] : fromStr
      onChange([fromStr, toStr])
    }
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  const handleSelect = (selected: DateRange | undefined) => {
    setDate({
      from: selected?.from || undefined,
      to: selected?.to || undefined,
    })
    setSelectedPreset(null)
  }

  const handlePresetSelect = (preset: (typeof presets)[0]) => {
    setDate(preset.range)
    setMonth(preset.range.from || today)
    setSelectedPreset(preset.label)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        {date?.from ? (
          format(date.from, "LLL dd, y") +
          (date.to ? ` - ${format(date.to, "LLL dd, y")}` : "")
        ) : (
          <span>Pick a date range with presets</span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center" sideOffset={8}>
        <div className="flex max-sm:flex-col">
          <div className="border-border relative max-sm:order-1 max-sm:border-t sm:w-32">
            <div className="border-border h-full py-2 sm:border-e">
              <div className="flex flex-col gap-[2px] px-2">
                {presets.map((preset, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant="ghost"
                    className={cn(
                      "h-8 w-full justify-start",
                      selectedPreset === preset.label && "bg-accent"
                    )}
                    onClick={() => handlePresetSelect(preset)}
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Calendar
            autoFocus
            mode="range"
            month={month}
            onMonthChange={setMonth}
            showOutsideDays={false}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </div>
        <div className="border-border flex items-center justify-end gap-1.5 border-t p-3">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleApply}>Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Custom DateTime Input Component
function CustomDateTimeInput({
  values,
  onChange,
  autoFocus,
}: CustomRendererProps) {
  const today = new Date()
  const [date, setDate] = useState<Date | undefined>(
    values?.[0] && typeof values[0] === "string"
      ? new Date(values[0] as string)
      : undefined
  )
  const [time, setTime] = useState<string | undefined>(
    values?.[0] && typeof values[0] === "string"
      ? new Date(values[0] as string).toTimeString().slice(0, 5)
      : "10:00"
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [autoFocus])

  const timeSlots = [
    { time: "09:00", available: false },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "12:00", available: false },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
    { time: "15:00", available: false },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: true },
    { time: "17:30", available: true },
    { time: "18:00", available: true },
    { time: "18:30", available: true },
    { time: "19:00", available: true },
    { time: "19:30", available: true },
    { time: "20:00", available: true },
    { time: "20:30", available: true },
    { time: "21:00", available: true },
    { time: "21:30", available: true },
    { time: "22:00", available: true },
    { time: "22:30", available: true },
    { time: "23:00", available: true },
    { time: "23:30", available: true },
  ]

  const handleApply = () => {
    if (date && time) {
      const dateTime = new Date(date)
      const [hours, minutes] = time.split(":").map(Number)
      dateTime.setHours(hours, minutes, 0, 0)
      onChange([dateTime.toISOString()])
    }
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        {date ? (
          format(date, "PPP") + (time ? ` - ${time}` : "")
        ) : (
          <span>Pick a date and time</span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto gap-0 p-0 pt-1" align="start">
        <div className="flex max-sm:flex-col">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate: Date | undefined) => {
              if (newDate) {
                setDate(newDate)
                setTime(undefined)
              }
            }}
            className="p-2 sm:pe-5"
            disabled={[{ before: today }]}
          />
          <div className="relative w-full max-sm:h-46 sm:w-40">
            <div className="absolute inset-0 py-4 max-sm:border-t">
              <ScrollArea className="h-full sm:border-s">
                <div className="space-y-3">
                  <div className="flex h-5 shrink-0 items-center px-5">
                    <p className="text-sm font-medium">
                      {date ? format(date, "EEEE, d") : "Pick a date"}
                    </p>
                  </div>
                  <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                    {timeSlots.map(({ time: timeSlot, available }) => (
                      <Button
                        key={timeSlot}
                        variant={time === timeSlot ? "default" : "outline"}
                        size="sm"
                        className="w-full"
                        onClick={() => setTime(timeSlot)}
                        disabled={!available}
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
        <div className="border-border flex items-center justify-end gap-1.5 border-t p-3">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleApply}>Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Custom Slider Range Input Component
function CustomSliderRangeInput({
  values,
  onChange,
  autoFocus,
}: CustomRendererProps) {
  const [range, setRange] = useState<number[]>(
    values?.[0] &&
      typeof values[0] === "object" &&
      values[0] !== null &&
      "min" in values[0] &&
      "max" in values[0]
      ? [
          (values[0] as { min: number; max: number }).min,
          (values[0] as { min: number; max: number }).max,
        ]
      : [0, 100]
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [autoFocus])

  const handleApply = () => {
    onChange([{ min: range[0], max: range[1] }])
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <span>
          {range[0]} - {range[1]}
        </span>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-4"
        align="start"
        sideOffset={8}
        alignOffset={-8}
      >
        <div className="space-y-2.5">
          <div className="space-y-4 pt-2.5">
            <Slider
              value={range}
              onValueChange={(value) => setRange(value as number[])}
              max={100}
              min={0}
              step={1}
              className="w-[200px]"
            />
            <div className="text-muted-foreground flex justify-between ps-1.5 text-xs">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
            <Button size="sm" variant="outline" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function Pattern() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("customDateRange", "between", []),
  ])
  const [lastAddedValues, setLastAddedValues] = useState<unknown[] | null>(null)

  const fields: FilterFieldConfig[] = [
    {
      key: "modalDateSelector",
      label: "Modal Date Selector",
      icon: (
        <IconPlaceholder
          lucide="CalendarIcon"
          tabler="IconCalendarEvent"
          hugeicons="Calendar04Icon"
          phosphor="CalendarBlankIcon"
          remixicon="RiCalendarLine"
          className="size-3.5"
        />
      ),
      type: "custom",
      operators: [
        { value: "is", label: "is" },
        { value: "is_not", label: "is not" },
      ],
      customRenderer: ({ values, onChange }) => (
        <CustomModalDateSelector
          values={values}
          onChange={onChange}
          autoFocus={values === lastAddedValues}
        />
      ),
    },
    {
      key: "customDateRange",
      label: "Date Range",
      icon: (
        <IconPlaceholder
          lucide="CalendarIcon"
          tabler="IconCalendarEvent"
          hugeicons="Calendar04Icon"
          phosphor="CalendarBlankIcon"
          remixicon="RiCalendarLine"
          className="size-3.5"
        />
      ),
      type: "custom",
      operators: [
        { value: "between", label: "between" },
        { value: "not_between", label: "not between" },
      ],
      customRenderer: ({ values, onChange }) => (
        <CustomDateRangeInput
          values={values}
          onChange={onChange}
          autoFocus={values === lastAddedValues}
        />
      ),
    },
    {
      key: "customDateRangePresets",
      label: "Date Range Presets",
      icon: (
        <IconPlaceholder
          lucide="CalendarIcon"
          tabler="IconCalendarEvent"
          hugeicons="Calendar04Icon"
          phosphor="CalendarBlankIcon"
          remixicon="RiCalendarLine"
          className="size-3.5"
        />
      ),
      type: "custom",
      operators: [
        { value: "between", label: "between" },
        { value: "not_between", label: "not between" },
      ],
      customRenderer: ({ values, onChange }) => (
        <CustomDateRangeWithPresetsInput
          values={values}
          onChange={onChange}
          autoFocus={values === lastAddedValues}
        />
      ),
    },
    {
      key: "customDateTime",
      label: "Date & Time",
      icon: (
        <IconPlaceholder
          lucide="ClockIcon"
          tabler="IconClock"
          hugeicons="ClockIcon"
          phosphor="ClockIcon"
          remixicon="RiTimeLine"
          className="size-3.5"
        />
      ),
      type: "custom",
      operators: [
        { value: "is", label: "is" },
        { value: "before", label: "before" },
        { value: "after", label: "after" },
      ],
      customRenderer: ({ values, onChange }) => (
        <CustomDateTimeInput
          values={values}
          onChange={onChange}
          autoFocus={values === lastAddedValues}
        />
      ),
    },
    {
      key: "customSliderRange",
      label: "Slider Range",
      icon: (
        <IconPlaceholder
          lucide="SlidersVerticalIcon"
          tabler="IconAdjustmentsAlt"
          hugeicons="SlidersVerticalIcon"
          phosphor="FadersIcon"
          remixicon="RiSoundModuleLine"
          className="size-3.5"
        />
      ),
      type: "custom",
      className: "w-36",
      operators: [
        { value: "between", label: "between" },
        { value: "not_between", label: "not between" },
      ],
      customRenderer: ({ values, onChange }) => (
        <CustomSliderRangeInput
          values={values}
          onChange={onChange}
          autoFocus={values === lastAddedValues}
        />
      ),
    },
  ]

  const handleFiltersChange = useCallback(
    (newFilters: Filter[]) => {
      // Check if a filter was added by comparing IDs
      const added = newFilters.find(
        (nf) => !filters.some((f) => f.id === nf.id)
      )
      if (added) {
        setLastAddedValues(added.values)
      }
      setFilters(newFilters)
    },
    [filters]
  )

  return (
    <div className="flex grow content-start items-start gap-2.5 space-y-6 self-start">
      <div className="flex-1">
        <Filters
          filters={filters}
          fields={fields}
          onChange={handleFiltersChange}
          trigger={
            <Button variant="outline" size="icon">
              <IconPlaceholder
                lucide="ListFilterIcon"
                tabler="IconFilter2"
                hugeicons="FilterMailIcon"
                phosphor="FunnelSimpleIcon"
                remixicon="RiFilter3Line"
              />
            </Button>
          }
        />
      </div>

      {filters.length > 0 && (
        <Button variant="outline" onClick={() => setFilters([])}>
          <IconPlaceholder
            lucide="FunnelXIcon"
            tabler="IconFilterX"
            hugeicons="FilterRemoveIcon"
            phosphor="FunnelXIcon"
            remixicon="RiFilterOffLine"
          />
          Clear
        </Button>
      )}
    </div>
  )
}
```

### Filters with data grid (`c-filters-7`)

Target: `components/examples/c-filters-7.tsx`

Filters with data grid

```tsx
"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Alert, AlertTitle } from "@/components/reui/alert"
import { Badge } from "@/components/reui/badge"
import {
  DataGrid,
  DataGridContainer,
} from "@/components/reui/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui/data-grid/data-grid-pagination"
import { DataGridTable } from "@/components/reui/data-grid/data-grid-table"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface IData {
  id: string
  name: string
  availability: "online" | "away" | "busy" | "offline"
  avatar: string
  status: "active" | "inactive"
  flag: string // Emoji flags
  email: string
  company: string
  role: string
  joined: string
  location: string
  balance: number
}

const demoData: IData[] = [
  {
    id: "1",
    name: "Alex Johnson",
    availability: "online",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "us",
    email: "alex@apple.com",
    company: "Apple",
    role: "CEO",
    joined: "Jan, 2024",
    location: "San Francisco, USA",
    balance: 5143.03,
  },
  {
    id: "2",
    name: "Sarah Chen",
    availability: "away",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "gb",
    email: "sarah@openai.com",
    company: "OpenAI",
    role: "CTO",
    joined: "Mar, 2023",
    location: "London, UK",
    balance: 4321.87,
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    availability: "busy",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "ca",
    email: "michael@meta.com",
    company: "Meta",
    role: "Designer",
    joined: "Jun, 2022",
    location: "Toronto, Canada",
    balance: 7654.98,
  },
  {
    id: "4",
    name: "Emma Wilson",
    availability: "offline",
    avatar:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "au",
    email: "emma@tesla.com",
    company: "Tesla",
    role: "Developer",
    joined: "Sep, 2024",
    location: "Sydney, Australia",
    balance: 3456.45,
  },
  {
    id: "5",
    name: "David Kim",
    availability: "online",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "de",
    email: "david@sap.com",
    company: "SAP",
    role: "Lawyer",
    joined: "Nov, 2023",
    location: "Berlin, Germany",
    balance: 9876.54,
  },
  {
    id: "6",
    name: "Aron Thompson",
    availability: "away",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "my",
    email: "aron@keenthemes.com",
    company: "Keenthemes",
    role: "Director",
    joined: "Feb, 2022",
    location: "Kuala Lumpur, MY",
    balance: 6214.22,
  },
  {
    id: "7",
    name: "James Brown",
    availability: "busy",
    avatar:
      "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "es",
    email: "james@bbva.es",
    company: "BBVA",
    role: "Product Manager",
    joined: "Aug, 2024",
    location: "Barcelona, Spain",
    balance: 5321.77,
  },
  {
    id: "8",
    name: "Maria Garcia",
    availability: "offline",
    avatar:
      "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "jp",
    email: "maria@sony.jp",
    company: "Sony",
    role: "Marketing Lead",
    joined: "Dec, 2023",
    location: "Tokyo, Japan",
    balance: 8452.39,
  },
  {
    id: "9",
    name: "Nick Johnson",
    availability: "online",
    avatar:
      "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "fr",
    email: "nick@lvmh.fr",
    company: "LVMH",
    role: "Data Scientist",
    joined: "Apr, 2022",
    location: "Paris, France",
    balance: 7345.1,
  },
  {
    id: "10",
    name: "Liam Thompson",
    availability: "away",
    avatar:
      "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "it",
    email: "liam@eni.it",
    company: "ENI",
    role: "Engineer",
    joined: "Jul, 2024",
    location: "Milan, Italy",
    balance: 5214.88,
  },
  {
    id: "11",
    name: "Alex Johnson",
    availability: "busy",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "br",
    email: "alex@vale.br",
    company: "Vale",
    role: "Software Engineer",
    joined: "May, 2023",
    location: "Rio de Janeiro, Brazil",
    balance: 9421.5,
  },
  {
    id: "12",
    name: "Sarah Chen",
    availability: "offline",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "in",
    email: "sarah@tata.in",
    company: "Tata",
    role: "Sales Manager",
    joined: "Oct, 2024",
    location: "Mumbai, India",
    balance: 4521.67,
  },
]

// Availability status component
const AvailabilityStatus = ({ availability }: { availability: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "busy":
        return "bg-red-500"
      case "offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "away":
        return "Away"
      case "busy":
        return "Busy"
      case "offline":
        return "Offline"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <div className={`size-2 rounded-full ${getStatusColor(availability)}`} />
      <span className="text-muted-foreground text-sm">
        {getStatusLabel(availability)}
      </span>
    </div>
  )
}

// Helper to check if a filter has meaningful values
const getActiveFilters = (filters: Filter[]) => {
  return filters.filter((filter) => {
    const { values } = filter

    // Check if filter has meaningful values
    if (!values || values.length === 0) return false

    // For text/string values, check if they're not empty strings
    if (
      values.every((value) => typeof value === "string" && value.trim() === "")
    )
      return false

    // For number values, check if they're not null/undefined
    if (values.every((value) => value === null || value === undefined))
      return false

    // For arrays, check if they're not empty
    if (values.every((value) => Array.isArray(value) && value.length === 0))
      return false

    return true
  })
}

export function Pattern() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ])
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is", ["active"]),
  ])

  // Async state management
  const [isLoading, setIsLoading] = useState(false)
  const [filteredData, setFilteredData] = useState<IData[]>(demoData)
  const isInitialLoad = useRef(true)

  // Filter field configurations
  const fields: FilterFieldConfig[] = [
    {
      key: "name",
      label: "Name",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "Search names...",
    },
    {
      key: "email",
      label: "Email",
      icon: (
        <IconPlaceholder
          lucide="MailIcon"
          tabler="IconMail"
          hugeicons="MailIcon"
          phosphor="EnvelopeIcon"
          remixicon="RiMailLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-48",
      placeholder: "user@example.com",
    },
    {
      key: "company",
      label: "Company",
      icon: (
        <IconPlaceholder
          lucide="BuildingIcon"
          tabler="IconBuilding"
          hugeicons="Building02Icon"
          phosphor="BuildingIcon"
          remixicon="RiBuilding4Line"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: true,
      className: "w-[180px]",
      options: [
        { value: "Apple", label: "Apple" },
        { value: "OpenAI", label: "OpenAI" },
        { value: "Meta", label: "Meta" },
        { value: "Tesla", label: "Tesla" },
        { value: "SAP", label: "SAP" },
        { value: "Keenthemes", label: "Keenthemes" },
        { value: "BBVA", label: "BBVA" },
        { value: "Sony", label: "Sony" },
        { value: "LVMH", label: "LVMH" },
        { value: "ENI", label: "ENI" },
        { value: "Vale", label: "Vale" },
        { value: "Tata", label: "Tata" },
      ],
    },
    {
      key: "role",
      label: "Role",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: true,
      className: "w-[160px]",
      options: [
        { value: "CEO", label: "CEO" },
        { value: "CTO", label: "CTO" },
        { value: "Designer", label: "Designer" },
        { value: "Developer", label: "Developer" },
        { value: "Lawyer", label: "Lawyer" },
        { value: "Director", label: "Director" },
        { value: "Product Manager", label: "Product Manager" },
        { value: "Marketing Lead", label: "Marketing Lead" },
        { value: "Data Scientist", label: "Data Scientist" },
        { value: "Engineer", label: "Engineer" },
        { value: "Software Engineer", label: "Software Engineer" },
        { value: "Sales Manager", label: "Sales Manager" },
      ],
    },
    {
      key: "status",
      label: "Status",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: false,
      className: "w-[140px]",
      options: [
        {
          value: "active",
          label: "Active",
          icon: <div className="size-2 rounded-full bg-green-500"></div>,
        },
        {
          value: "inactive",
          label: "Inactive",
          icon: <div className="bg-destructive size-2 rounded-full"></div>,
        },
        {
          value: "archived",
          label: "Archived",
          icon: <div className="size-2 rounded-full bg-zinc-400"></div>,
        },
      ],
    },
    {
      key: "availability",
      label: "Availability",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: false,
      className: "w-[160px]",
      options: [
        {
          value: "online",
          label: "Online",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500" />
              <span>Online</span>
            </div>
          ),
        },
        {
          value: "away",
          label: "Away",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-yellow-500" />
              <span>Away</span>
            </div>
          ),
        },
        {
          value: "busy",
          label: "Busy",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-red-500" />
              <span>Busy</span>
            </div>
          ),
        },
        {
          value: "offline",
          label: "Offline",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-gray-400" />
              <span>Offline</span>
            </div>
          ),
        },
      ],
    },
    {
      key: "location",
      label: "Location",
      icon: (
        <IconPlaceholder
          lucide="MapPinIcon"
          tabler="IconMapPin"
          hugeicons="Location06Icon"
          phosphor="MapPinIcon"
          remixicon="RiMapPinLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "Search locations...",
    },
  ]

  // Apply filters to data (shared function)
  const applyFiltersToData = useCallback((newFilters: Filter[]) => {
    let filtered = [...demoData]

    // Filter out empty filters before applying
    const activeFilters = getActiveFilters(newFilters)

    activeFilters.forEach((filter) => {
      const { field, operator, values } = filter

      filtered = filtered.filter((item) => {
        const fieldValue = item[field as keyof IData]

        switch (operator) {
          case "is":
            return values.includes(fieldValue)
          case "is_not":
            return !values.includes(fieldValue)
          case "contains":
            return values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .includes(String(value).toLowerCase())
            )
          case "not_contains":
            return !values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .includes(String(value).toLowerCase())
            )
          case "equals":
            return fieldValue === values[0]
          case "not_equals":
            return fieldValue !== values[0]
          case "greater_than":
            return Number(fieldValue) > Number(values[0])
          case "less_than":
            return Number(fieldValue) < Number(values[0])
          case "greater_than_or_equal":
            return Number(fieldValue) >= Number(values[0])
          case "less_than_or_equal":
            return Number(fieldValue) <= Number(values[0])
          case "between":
            if (values.length >= 2) {
              const min = Number(values[0])
              const max = Number(values[1])
              return Number(fieldValue) >= min && Number(fieldValue) <= max
            }
            return true
          case "not_between":
            if (values.length >= 2) {
              const min = Number(values[0])
              const max = Number(values[1])
              return Number(fieldValue) < min || Number(fieldValue) > max
            }
            return true
          case "before":
            return new Date(String(fieldValue)) < new Date(String(values[0]))
          case "after":
            return new Date(String(fieldValue)) > new Date(String(values[0]))
          default:
            return true
        }
      })
    })

    return filtered
  }, [])

  // Simulate async data filtering
  const simulateAsyncFiltering = useCallback(
    async (newFilters: Filter[]) => {
      setIsLoading(true) // Show loading on current data

      // Simulate API call delay
      await new Promise((resolve) =>
        setTimeout(resolve, 800 + Math.random() * 1200)
      )

      // Apply filters and update data after timeout
      const filtered = applyFiltersToData(newFilters)
      setFilteredData(filtered)
      setIsLoading(false)
    },
    [applyFiltersToData]
  )

  const handleFiltersChange = useCallback(
    (newFilters: Filter[]) => {
      const oldActive = getActiveFilters(filters)
      const newActive = getActiveFilters(newFilters)

      setFilters(newFilters)

      // Compare active filters to decide if we need to trigger async search
      // Use stringify for simple deep comparison of filter objects
      if (JSON.stringify(oldActive) === JSON.stringify(newActive)) {
        return
      }

      // Reset pagination when filters change
      setPagination((prev) => ({ ...prev, pageIndex: 0 }))
      // Trigger async filtering
      simulateAsyncFiltering(newFilters)
    },
    [filters, simulateAsyncFiltering]
  )

  // Initial data load - only run once on mount
  useEffect(() => {
    if (isInitialLoad.current) {
      // Apply initial filter without loading state
      const initialFiltered = applyFiltersToData(filters)
      setFilteredData(initialFiltered)
      isInitialLoad.current = false
    }
  }, [filters, applyFiltersToData])

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Staff" column={column} />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage
                  src={row.original.avatar}
                  alt={row.original.name}
                />
                <AvatarFallback>
                  {row.original.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-px">
                <div className="text-foreground font-medium">
                  {row.original.name}
                </div>
                <div className="text-muted-foreground truncate text-xs">
                  {row.original.email}
                </div>
              </div>
            </div>
          )
        },
        size: 200,
        enableSorting: true,
        enableHiding: false,
        meta: {
          skeleton: (
            <div className="flex items-center gap-3">
              <Skeleton className="size-8 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ),
        },
      },
      {
        accessorKey: "company",
        id: "company",
        header: ({ column }) => (
          <DataGridColumnHeader title="Company" column={column} />
        ),
        cell: (info) => <span>{info.getValue() as string}</span>,
        size: 150,
        enableSorting: true,
        enableHiding: false,
        meta: {
          skeleton: <Skeleton className="h-4 w-20" />,
        },
      },
      {
        accessorKey: "role",
        id: "role",
        header: ({ column }) => (
          <DataGridColumnHeader title="Occupation" column={column} />
        ),
        cell: (info) => <span>{info.getValue() as string}</span>,
        size: 125,
        enableSorting: true,
        enableHiding: false,
        meta: {
          skeleton: <Skeleton className="h-4 w-16" />,
        },
      },
      {
        accessorKey: "status",
        id: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.status

          if (status == "active") {
            return <Badge variant="success-outline">Active</Badge>
          } else if (status == "inactive") {
            return <Badge variant="destructive-outline">Inactive</Badge>
          } else if (status == "archived") {
            return <Badge variant="warning-outline">Archived</Badge>
          }
        },
        size: 100,
        meta: {
          skeleton: <Skeleton className="h-4 w-16 rounded-full" />,
        },
      },
      {
        accessorKey: "availability",
        id: "availability",
        header: "Availability",
        cell: ({ row }) => (
          <AvailabilityStatus availability={row.original.availability} />
        ),
        size: 120,
        enableSorting: true,
        meta: {
          skeleton: (
            <div className="flex items-center gap-1.5">
              <Skeleton className="size-4 rounded-full" />
              <Skeleton className="h-3.5 w-12" />
            </div>
          ),
        },
      },
      {
        accessorKey: "location",
        id: "location",
        header: ({ column }) => (
          <DataGridColumnHeader title="Location" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/${row.original.flag.toLowerCase()}.svg`}
              alt={row.original.flag}
              className="size-4 rounded-full object-cover"
            />
            <span>{row.original.location}</span>
          </div>
        ),
        size: 180,
        enableSorting: true,
        meta: {
          skeleton: (
            <div className="flex items-center gap-2">
              <Skeleton className="size-4 rounded" />
              <Skeleton className="h-3.5 w-24" />
            </div>
          ),
        },
      },
      {
        accessorKey: "balance",
        id: "balance",
        header: ({ column }) => (
          <DataGridColumnHeader title="Balance" column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-medium">
            ${row.original.balance.toLocaleString()}
          </span>
        ),
        size: 120,
        enableSorting: true,
        meta: {
          skeleton: <Skeleton className="h-4 w-16" />,
        },
      },
    ],
    []
  )

  const [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((column) => column.id as string)
  )

  const table = useReactTable({
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => row.id,
    state: {
      pagination,
      sorting,
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full self-start">
      {/* Filters Section */}
      <div className="mb-3.5 flex items-start gap-2.5">
        <div className="flex-1">
          <Filters
            filters={filters}
            fields={fields}
            onChange={handleFiltersChange}
            size="sm"
            trigger={
              <Button variant="outline" size="icon-sm">
                <IconPlaceholder
                  lucide="ListFilterIcon"
                  tabler="IconFilter2"
                  hugeicons="FilterMailIcon"
                  phosphor="FunnelSimpleIcon"
                  remixicon="RiFilter3Line"
                />
              </Button>
            }
          />
        </div>
        {filters.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFilters([])
              simulateAsyncFiltering([])
            }}
            disabled={isLoading}
          >
            <IconPlaceholder
              lucide="FunnelXIcon"
              tabler="IconFilterX"
              hugeicons="FilterRemoveIcon"
              phosphor="FunnelXIcon"
              remixicon="RiFilterOffLine"
            />
            Clear
          </Button>
        )}
      </div>

      {/* Data Grid */}
      <DataGrid
        table={table}
        isLoading={isLoading}
        loadingMode="skeleton"
        recordCount={filteredData?.length || 0}
        tableLayout={{
          dense: true,
          columnsMovable: true,
        }}
      >
        <div className="w-full space-y-2.5">
          <DataGridContainer>
            <ScrollArea>
              <DataGridTable />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </DataGridContainer>
          <DataGridPagination />
        </div>
      </DataGrid>

      {/* Async Info Alert */}
      <Alert variant="success" className="mt-5">
        <IconPlaceholder
          lucide="CircleAlertIcon"
          tabler="IconAlertCircle"
          hugeicons="AlertCircleIcon"
          phosphor="WarningCircleIcon"
          remixicon="RiErrorWarningLine"
        />
        <AlertTitle>
          Async Mode: Simulated API Delay of <strong>800-2000ms</strong>
        </AlertTitle>
      </Alert>
    </div>
  )
}
```

### Filters with data grid and async mode (`c-filters-8`)

Target: `components/examples/c-filters-8.tsx`

Filters with data grid and async mode

```tsx
"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Alert, AlertTitle } from "@/components/reui/alert"
import { Badge } from "@/components/reui/badge"
import {
  DataGrid,
  DataGridContainer,
} from "@/components/reui/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui/data-grid/data-grid-pagination"
import { DataGridTable } from "@/components/reui/data-grid/data-grid-table"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/components/reui/filters"
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  createParser,
  parseAsBoolean,
  parseAsJson,
  useQueryState,
  useQueryStates,
} from "nuqs"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface IData {
  id: string
  name: string
  availability: "online" | "away" | "busy" | "offline"
  avatar: string
  status: "active" | "inactive"
  flag: string // Emoji flags
  email: string
  company: string
  role: string
  joined: string
  location: string
  balance: number
}

const demoData: IData[] = [
  {
    id: "1",
    name: "Alex Johnson",
    availability: "online",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "us",
    email: "alex@apple.com",
    company: "Apple",
    role: "CEO",
    joined: "Jan, 2024",
    location: "San Francisco, USA",
    balance: 5143.03,
  },
  {
    id: "2",
    name: "Sarah Chen",
    availability: "away",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "gb",
    email: "sarah@openai.com",
    company: "OpenAI",
    role: "CTO",
    joined: "Mar, 2023",
    location: "London, UK",
    balance: 4321.87,
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    availability: "busy",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "ca",
    email: "michael@meta.com",
    company: "Meta",
    role: "Designer",
    joined: "Jun, 2022",
    location: "Toronto, Canada",
    balance: 7654.98,
  },
  {
    id: "4",
    name: "Emma Wilson",
    availability: "offline",
    avatar:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "au",
    email: "emma@tesla.com",
    company: "Tesla",
    role: "Developer",
    joined: "Sep, 2024",
    location: "Sydney, Australia",
    balance: 3456.45,
  },
  {
    id: "5",
    name: "David Kim",
    availability: "online",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "de",
    email: "david@sap.com",
    company: "SAP",
    role: "Lawyer",
    joined: "Nov, 2023",
    location: "Berlin, Germany",
    balance: 9876.54,
  },
  {
    id: "6",
    name: "Aron Thompson",
    availability: "away",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "my",
    email: "aron@keenthemes.com",
    company: "Keenthemes",
    role: "Director",
    joined: "Feb, 2022",
    location: "Kuala Lumpur, MY",
    balance: 6214.22,
  },
  {
    id: "7",
    name: "James Brown",
    availability: "busy",
    avatar:
      "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "es",
    email: "james@bbva.es",
    company: "BBVA",
    role: "Product Manager",
    joined: "Aug, 2024",
    location: "Barcelona, Spain",
    balance: 5321.77,
  },
  {
    id: "8",
    name: "Maria Garcia",
    availability: "offline",
    avatar:
      "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "jp",
    email: "maria@sony.jp",
    company: "Sony",
    role: "Marketing Lead",
    joined: "Dec, 2023",
    location: "Tokyo, Japan",
    balance: 8452.39,
  },
  {
    id: "9",
    name: "Nick Johnson",
    availability: "online",
    avatar:
      "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "fr",
    email: "nick@lvmh.fr",
    company: "LVMH",
    role: "Data Scientist",
    joined: "Apr, 2022",
    location: "Paris, France",
    balance: 7345.1,
  },
  {
    id: "10",
    name: "Liam Thompson",
    availability: "away",
    avatar:
      "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80",
    status: "inactive",
    flag: "it",
    email: "liam@eni.it",
    company: "ENI",
    role: "Engineer",
    joined: "Jul, 2024",
    location: "Milan, Italy",
    balance: 5214.88,
  },
  {
    id: "11",
    name: "Alex Johnson",
    availability: "busy",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "br",
    email: "alex@vale.br",
    company: "Vale",
    role: "Software Engineer",
    joined: "May, 2023",
    location: "Rio de Janeiro, Brazil",
    balance: 9421.5,
  },
  {
    id: "12",
    name: "Sarah Chen",
    availability: "offline",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    status: "active",
    flag: "in",
    email: "sarah@tata.in",
    company: "Tata",
    role: "Sales Manager",
    joined: "Oct, 2024",
    location: "Mumbai, India",
    balance: 4521.67,
  },
]

// Availability status component
const AvailabilityStatus = ({ availability }: { availability: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "busy":
        return "bg-red-500"
      case "offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "away":
        return "Away"
      case "busy":
        return "Busy"
      case "offline":
        return "Offline"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <div className={`size-2 rounded-full ${getStatusColor(availability)}`} />
      <span className="text-muted-foreground text-sm">
        {getStatusLabel(availability)}
      </span>
    </div>
  )
}

// Helper to check if a filter has meaningful values
const getActiveFilters = (filters: Filter[]) => {
  return filters.filter((filter) => {
    const { values } = filter

    // Check if filter has meaningful values
    if (!values || values.length === 0) return false

    // For text/string values, check if they're not empty strings
    if (
      values.every((value) => typeof value === "string" && value.trim() === "")
    )
      return false

    // For number values, check if they're not null/undefined
    if (values.every((value) => value === null || value === undefined))
      return false

    // For arrays, check if they're not empty
    if (values.every((value) => Array.isArray(value) && value.length === 0))
      return false

    return true
  })
}

type FilterState = { operator: string; values: string[] }

// Custom parser for "operator:value1|value2" format
const parseAsFilterValue = createParser<FilterState>({
  parse: (queryValue: string) => {
    if (!queryValue) return null
    const separatorIndex = queryValue.indexOf(":")
    if (separatorIndex === -1) {
      return { operator: "is", values: queryValue.split("|").filter(Boolean) }
    }
    const operator = queryValue.slice(0, separatorIndex)
    const values = queryValue
      .slice(separatorIndex + 1)
      .split("|")
      .filter(Boolean)
    return { operator, values }
  },
  serialize: (filter: FilterState) => {
    if (!filter.values?.length) return ""
    return `${filter.operator}:${filter.values.join("|")}`
  },
})

export function Pattern() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  // Sorting state synced with URL
  const [sorting, setSorting] = useQueryState(
    "sort",
    parseAsJson<SortingState>((v) => v as SortingState).withDefault([
      { id: "name", desc: false },
    ])
  )

  // Individual filter states synced with URL
  const [filterStates, setFilterStates] = useQueryStates(
    {
      filters: parseAsBoolean.withDefault(false),
      name: parseAsFilterValue,
      email: parseAsFilterValue,
      company: parseAsFilterValue,
      role: parseAsFilterValue,
      status: parseAsFilterValue,
      availability: parseAsFilterValue,
      location: parseAsFilterValue,
    },
    { history: "replace", shallow: true }
  )

  // Derived filters array for the Filters component
  const filters = useMemo(() => {
    return Object.entries(filterStates)
      .filter(
        ([key, state]) =>
          key !== "filters" && state !== null && typeof state !== "boolean"
      )
      .map(([key, state]) => {
        const filterState = state as FilterState
        return createFilter(key, filterState.operator, filterState.values)
      })
  }, [filterStates])

  // Async state management
  const [isLoading, setIsLoading] = useState(false)
  const [filteredData, setFilteredData] = useState<IData[]>(demoData)
  const isInitialLoad = useRef(true)
  const filterTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Filter field configurations
  const fields: FilterFieldConfig[] = [
    {
      key: "name",
      label: "Name",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "Search names...",
    },
    {
      key: "email",
      label: "Email",
      icon: (
        <IconPlaceholder
          lucide="MailIcon"
          tabler="IconMail"
          hugeicons="MailIcon"
          phosphor="EnvelopeIcon"
          remixicon="RiMailLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-48",
      placeholder: "user@example.com",
    },
    {
      key: "company",
      label: "Company",
      icon: (
        <IconPlaceholder
          lucide="BuildingIcon"
          tabler="IconBuilding"
          hugeicons="Building02Icon"
          phosphor="BuildingIcon"
          remixicon="RiBuilding4Line"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: true,
      className: "w-[180px]",
      options: [
        { value: "Apple", label: "Apple" },
        { value: "OpenAI", label: "OpenAI" },
        { value: "Meta", label: "Meta" },
        { value: "Tesla", label: "Tesla" },
        { value: "SAP", label: "SAP" },
        { value: "Keenthemes", label: "Keenthemes" },
        { value: "BBVA", label: "BBVA" },
        { value: "Sony", label: "Sony" },
        { value: "LVMH", label: "LVMH" },
        { value: "ENI", label: "ENI" },
        { value: "Vale", label: "Vale" },
        { value: "Tata", label: "Tata" },
      ],
    },
    {
      key: "role",
      label: "Role",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: true,
      className: "w-[160px]",
      options: [
        { value: "CEO", label: "CEO" },
        { value: "CTO", label: "CTO" },
        { value: "Designer", label: "Designer" },
        { value: "Developer", label: "Developer" },
        { value: "Lawyer", label: "Lawyer" },
        { value: "Director", label: "Director" },
        { value: "Product Manager", label: "Product Manager" },
        { value: "Marketing Lead", label: "Marketing Lead" },
        { value: "Data Scientist", label: "Data Scientist" },
        { value: "Engineer", label: "Engineer" },
        { value: "Software Engineer", label: "Software Engineer" },
        { value: "Sales Manager", label: "Sales Manager" },
      ],
    },
    {
      key: "status",
      label: "Status",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "multiselect",
      searchable: false,
      className: "w-[140px]",
      options: [
        {
          value: "active",
          label: "Active",
          icon: <div className="size-2 rounded-full bg-green-500"></div>,
        },
        {
          value: "inactive",
          label: "Inactive",
          icon: <div className="bg-destructive size-2 rounded-full"></div>,
        },
        {
          value: "archived",
          label: "Archived",
          icon: <div className="size-2 rounded-full bg-zinc-400"></div>,
        },
      ],
    },
    {
      key: "availability",
      label: "Availability",
      icon: (
        <IconPlaceholder
          lucide="UserIcon"
          tabler="IconUser"
          hugeicons="UserIcon"
          phosphor="UserIcon"
          remixicon="RiUserLine"
          className="size-3.5"
        />
      ),
      type: "select",
      searchable: false,
      className: "w-[160px]",
      options: [
        {
          value: "online",
          label: "Online",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500" />
              <span>Online</span>
            </div>
          ),
        },
        {
          value: "away",
          label: "Away",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-yellow-500" />
              <span>Away</span>
            </div>
          ),
        },
        {
          value: "busy",
          label: "Busy",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-red-500" />
              <span>Busy</span>
            </div>
          ),
        },
        {
          value: "offline",
          label: "Offline",
          icon: (
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-gray-400" />
              <span>Offline</span>
            </div>
          ),
        },
      ],
    },
    {
      key: "location",
      label: "Location",
      icon: (
        <IconPlaceholder
          lucide="MapPinIcon"
          tabler="IconMapPin"
          hugeicons="Location06Icon"
          phosphor="MapPinIcon"
          remixicon="RiMapPinLine"
          className="size-3.5"
        />
      ),
      type: "text",
      className: "w-40",
      placeholder: "Search locations...",
    },
  ]

  // Apply filters to data (shared function)
  const applyFiltersToData = useCallback((newFilters: Filter[]) => {
    let filtered = [...demoData]

    // Filter out empty filters before applying
    const activeFilters = getActiveFilters(newFilters)

    activeFilters.forEach((filter) => {
      const { field, operator, values } = filter

      filtered = filtered.filter((item) => {
        const fieldValue = item[field as keyof IData]

        switch (operator) {
          case "is":
            return values.includes(fieldValue)
          case "is_not":
            return !values.includes(fieldValue)
          case "contains":
            return values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .includes(String(value).toLowerCase())
            )
          case "not_contains":
            return !values.some((value) =>
              String(fieldValue)
                .toLowerCase()
                .includes(String(value).toLowerCase())
            )
          case "equals":
            return fieldValue === values[0]
          case "not_equals":
            return fieldValue !== values[0]
          case "greater_than":
            return Number(fieldValue) > Number(values[0])
          case "less_than":
            return Number(fieldValue) < Number(values[0])
          case "greater_than_or_equal":
            return Number(fieldValue) >= Number(values[0])
          case "less_than_or_equal":
            return Number(fieldValue) <= Number(values[0])
          case "between":
            if (values.length >= 2) {
              const min = Number(values[0])
              const max = Number(values[1])
              return Number(fieldValue) >= min && Number(fieldValue) <= max
            }
            return true
          case "not_between":
            if (values.length >= 2) {
              const min = Number(values[0])
              const max = Number(values[1])
              return Number(fieldValue) < min || Number(fieldValue) > max
            }
            return true
          case "before":
            return new Date(String(fieldValue)) < new Date(String(values[0]))
          case "after":
            return new Date(String(fieldValue)) > new Date(String(values[0]))
          default:
            return true
        }
      })
    })

    return filtered
  }, [])

  // Simulate async data filtering
  const simulateAsyncFiltering = useCallback(
    async (newFilters: Filter[]) => {
      setIsLoading(true) // Show loading on current data

      // Simulate API call delay
      await new Promise((resolve) =>
        setTimeout(resolve, 800 + Math.random() * 1200)
      )

      // Apply filters and update data after timeout
      const filtered = applyFiltersToData(newFilters)
      setFilteredData(filtered)
      setIsLoading(false)
    },
    [applyFiltersToData]
  )

  const handleFiltersChange = useCallback(
    (newFilters: Filter[]) => {
      const oldActive = getActiveFilters(filters)
      const newActive = getActiveFilters(newFilters)

      // Convert Filter[] back to individual query states
      const nextStates: Record<string, FilterState | boolean | null> = {}

      // Reset all tracked fields first
      Object.keys(filterStates).forEach((key) => {
        nextStates[key] = null
      })

      // Set only active ones
      newFilters.forEach((f) => {
        if (f.values.length > 0) {
          nextStates[f.field] = {
            operator: f.operator,
            values: f.values as string[],
          }
        }
      })

      // Set the filters marker if any filters exist
      nextStates.filters = newFilters.length > 0 ? true : null

      setFilterStates(nextStates)

      if (JSON.stringify(oldActive) === JSON.stringify(newActive)) {
        return
      }

      setPagination((prev) => ({ ...prev, pageIndex: 0 }))

      // Clear any pending timeout
      if (filterTimeoutRef.current) {
        clearTimeout(filterTimeoutRef.current)
      }

      // Add a small debounce before starting the async simulation
      filterTimeoutRef.current = setTimeout(() => {
        simulateAsyncFiltering(newFilters)
      }, 300)
    },
    [filters, filterStates, setFilterStates, simulateAsyncFiltering]
  )

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (filterTimeoutRef.current) {
        clearTimeout(filterTimeoutRef.current)
      }
    }
  }, [])

  // Initial data load - only run once on mount
  useEffect(() => {
    if (isInitialLoad.current) {
      // Apply initial filter without loading state
      const initialFiltered = applyFiltersToData(filters || [])
      setFilteredData(initialFiltered)
      isInitialLoad.current = false
    }
  }, [filters, applyFiltersToData])

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="Staff" column={column} />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage
                  src={row.original.avatar}
                  alt={row.original.name}
                />
                <AvatarFallback>
                  {row.original.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-px">
                <div className="text-foreground font-medium">
                  {row.original.name}
                </div>
                <div className="text-muted-foreground truncate text-xs">
                  {row.original.email}
                </div>
              </div>
            </div>
          )
        },
        size: 200,
        enableSorting: true,
        enableHiding: false,
        meta: {
          skeleton: (
            <div className="flex items-center gap-3">
              <Skeleton className="size-8 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ),
        },
      },
      {
        accessorKey: "company",
        id: "company",
        header: ({ column }) => (
          <DataGridColumnHeader title="Company" column={column} />
        ),
        cell: (info) => <span>{info.getValue() as string}</span>,
        size: 150,
        enableSorting: true,
        enableHiding: false,
        meta: {
          skeleton: <Skeleton className="h-4 w-20" />,
        },
      },
      {
        accessorKey: "role",
        id: "role",
        header: ({ column }) => (
          <DataGridColumnHeader title="Occupation" column={column} />
        ),
        cell: (info) => <span>{info.getValue() as string}</span>,
        size: 125,
        enableSorting: true,
        enableHiding: false,
        meta: {
          skeleton: <Skeleton className="h-4 w-16" />,
        },
      },
      {
        accessorKey: "status",
        id: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.status

          if (status == "active") {
            return <Badge variant="success-outline">Active</Badge>
          } else if (status == "inactive") {
            return <Badge variant="destructive-outline">Inactive</Badge>
          } else if (status == "archived") {
            return <Badge variant="warning-outline">Archived</Badge>
          }
        },
        size: 100,
        meta: {
          skeleton: <Skeleton className="h-4 w-16 rounded-full" />,
        },
      },
      {
        accessorKey: "availability",
        id: "availability",
        header: "Availability",
        cell: ({ row }) => (
          <AvailabilityStatus availability={row.original.availability} />
        ),
        size: 120,
        enableSorting: true,
        meta: {
          skeleton: (
            <div className="flex items-center gap-1.5">
              <Skeleton className="size-4 rounded-full" />
              <Skeleton className="h-3.5 w-12" />
            </div>
          ),
        },
      },
      {
        accessorKey: "location",
        id: "location",
        header: ({ column }) => (
          <DataGridColumnHeader title="Location" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/${row.original.flag.toLowerCase()}.svg`}
              alt={row.original.flag}
              className="size-4 rounded-full object-cover"
            />
            <span>{row.original.location}</span>
          </div>
        ),
        size: 180,
        enableSorting: true,
        meta: {
          skeleton: (
            <div className="flex items-center gap-2">
              <Skeleton className="size-4 rounded" />
              <Skeleton className="h-3.5 w-24" />
            </div>
          ),
        },
      },
      {
        accessorKey: "balance",
        id: "balance",
        header: ({ column }) => (
          <DataGridColumnHeader title="Balance" column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-medium">
            ${row.original.balance.toLocaleString()}
          </span>
        ),
        size: 120,
        enableSorting: true,
        meta: {
          skeleton: <Skeleton className="h-4 w-16" />,
        },
      },
    ],
    []
  )

  const [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((column) => column.id as string)
  )

  const table = useReactTable({
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => row.id,
    state: {
      pagination,
      sorting: sorting || [],
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
    onPaginationChange: setPagination,
    onSortingChange: (updater) => {
      const nextSorting =
        typeof updater === "function" ? updater(sorting || []) : updater
      setSorting(nextSorting, { history: "replace", shallow: true })
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full self-start">
      {/* Filters Section */}
      <div className="mb-3.5 flex items-start gap-2.5">
        <div className="flex-1">
          <Filters
            filters={filters}
            fields={fields}
            onChange={handleFiltersChange}
            size="sm"
            trigger={
              <Button variant="outline" size="icon-sm">
                <IconPlaceholder
                  lucide="ListFilterIcon"
                  tabler="IconFilter2"
                  hugeicons="FilterMailIcon"
                  phosphor="FunnelSimpleIcon"
                  remixicon="RiFilter3Line"
                />
              </Button>
            }
          />
        </div>
        {filters.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (filterTimeoutRef.current) {
                clearTimeout(filterTimeoutRef.current)
              }
              // Clear all filters in the URL
              const clearedStates: Record<string, null> = {}
              Object.keys(filterStates).forEach(
                (key) => (clearedStates[key] = null)
              )
              clearedStates.filters = null
              setFilterStates(clearedStates)
              simulateAsyncFiltering([])
            }}
            disabled={isLoading}
          >
            <IconPlaceholder
              lucide="FunnelXIcon"
              tabler="IconFilterX"
              hugeicons="FilterRemoveIcon"
              phosphor="FunnelXIcon"
              remixicon="RiFilterOffLine"
            />
            Clear
          </Button>
        )}
      </div>

      {/* Data Grid */}
      <DataGrid
        table={table}
        isLoading={isLoading}
        loadingMode="skeleton"
        recordCount={filteredData?.length || 0}
        tableLayout={{
          dense: true,
          columnsMovable: true,
        }}
      >
        <div className="w-full space-y-2.5">
          <DataGridContainer>
            <ScrollArea>
              <DataGridTable />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </DataGridContainer>
          <DataGridPagination />
        </div>
      </DataGrid>

      {/* Async Info Alert */}
      <Alert variant="success" className="mt-5">
        <IconPlaceholder
          lucide="CircleAlertIcon"
          tabler="IconAlertCircle"
          hugeicons="AlertCircleIcon"
          phosphor="WarningCircleIcon"
          remixicon="RiErrorWarningLine"
        />
        <AlertTitle>
          Async Mode: Simulated API Delay of <strong>800-2000ms</strong>
        </AlertTitle>
      </Alert>
    </div>
  )
}
```

### Filters with i18n support (`c-filters-9`)

Target: `components/examples/c-filters-9.tsx`

Filters with i18n support

```tsx
"use client"

import { useCallback, useMemo, useState } from "react"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
  type FilterI18nConfig,
} from "@/components/reui/filters"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

// Internationalization configurations
const i18nConfigs: Record<string, FilterI18nConfig> = {
  en: {
    // UI Labels
    addFilter: "Add filter",
    searchFields: "Search fields...",
    noFieldsFound: "No fields found.",
    noResultsFound: "No results found.",
    select: "Select...",
    true: "True",
    false: "False",
    min: "Min",
    max: "Max",
    to: "to",
    typeAndPressEnter: "Type and press Enter to add tag",
    selected: "selected",
    selectedCount: "selected",
    percent: "%",
    defaultCurrency: "$",
    defaultColor: "#000000",
    addFilterTitle: "Add filter",

    // Operators
    operators: {
      is: "is",
      isNot: "is not",
      isAnyOf: "is any of",
      isNotAnyOf: "is not any of",
      includesAll: "includes all",
      excludesAll: "excludes all",
      before: "before",
      after: "after",
      between: "between",
      notBetween: "not between",
      contains: "contains",
      notContains: "does not contain",
      startsWith: "starts with",
      endsWith: "ends with",
      isExactly: "is exactly",
      equals: "equals",
      notEquals: "not equals",
      greaterThan: "greater than",
      lessThan: "less than",
      overlaps: "overlaps",
      includes: "includes",
      excludes: "excludes",
      includesAllOf: "includes all of",
      includesAnyOf: "includes any of",
      empty: "is empty",
      notEmpty: "is not empty",
    },

    // Placeholders
    placeholders: {
      enterField: (fieldType: string) => `Enter ${fieldType}...`,
      selectField: "Select...",
      searchField: (fieldName: string) =>
        `Search ${fieldName.toLowerCase()}...`,
      enterKey: "Enter key...",
      enterValue: "Enter value...",
    },

    // Helper functions
    helpers: {
      formatOperator: (operator: string) => operator.replace(/_/g, " "),
    },

    // Validation
    validation: {
      invalidEmail: "Invalid email format",
      invalidUrl: "Invalid URL format",
      invalidTel: "Invalid phone format",
      invalid: "Invalid input format",
    },
  },
  es: {
    // UI Labels
    addFilter: "Agregar filtro",
    searchFields: "Buscar campos...",
    noFieldsFound: "No se encontraron campos.",
    noResultsFound: "No se encontraron resultados.",
    select: "Seleccionar...",
    true: "Verdadero",
    false: "Falso",
    min: "Mín",
    max: "Máx",
    to: "a",
    typeAndPressEnter: "Escriba y presione Enter para agregar etiqueta",
    selected: "seleccionado",
    selectedCount: "seleccionados",
    percent: "%",
    defaultCurrency: "€",
    defaultColor: "#000000",
    addFilterTitle: "Agregar filtro",

    // Operators
    operators: {
      is: "es",
      isNot: "no es",
      isAnyOf: "es cualquiera de",
      isNotAnyOf: "no es cualquiera de",
      includesAll: "incluye todos",
      excludesAll: "excluye todos",
      before: "antes de",
      after: "después de",
      between: "entre",
      notBetween: "no entre",
      contains: "contiene",
      notContains: "no contiene",
      startsWith: "comienza con",
      endsWith: "termina con",
      isExactly: "es exactamente",
      equals: "igual a",
      notEquals: "no igual a",
      greaterThan: "mayor que",
      lessThan: "menor que",
      overlaps: "se superpone",
      includes: "incluye",
      excludes: "excluye",
      includesAllOf: "incluye todos de",
      includesAnyOf: "incluye cualquiera de",
      empty: "está vacío",
      notEmpty: "no está vacío",
    },

    // Placeholders
    placeholders: {
      enterField: (fieldType: string) => `Ingrese ${fieldType}...`,
      selectField: "Seleccionar...",
      searchField: (fieldName: string) =>
        `Buscar ${fieldName.toLowerCase()}...`,
      enterKey: "Ingrese clave...",
      enterValue: "Ingrese valor...",
    },

    // Helper functions
    helpers: {
      formatOperator: (operator: string) => operator.replace(/_/g, " "),
    },

    // Validation
    validation: {
      invalidEmail: "Formato de email inválido",
      invalidUrl: "Formato de URL inválido",
      invalidTel: "Formato de teléfono inválido",
      invalid: "Formato de entrada inválido",
    },
  },
  fr: {
    // UI Labels
    addFilter: "Ajouter un filtre",
    searchFields: "Rechercher des champs...",
    noFieldsFound: "Aucun champ trouvé.",
    noResultsFound: "Aucun résultat trouvé.",
    select: "Sélectionner...",
    true: "Vrai",
    false: "Faux",
    min: "Min",
    max: "Max",
    to: "à",
    typeAndPressEnter: "Tapez et appuyez sur Entrée pour ajouter une étiquette",
    selected: "sélectionné",
    selectedCount: "sélectionnés",
    percent: "%",
    defaultCurrency: "€",
    defaultColor: "#000000",
    addFilterTitle: "Ajouter un filtre",

    // Operators
    operators: {
      is: "est",
      isNot: "n'est pas",
      isAnyOf: "est l'un de",
      isNotAnyOf: "n'est pas l'un de",
      includesAll: "inclut tous",
      excludesAll: "exclut tous",
      before: "avant",
      after: "après",
      between: "entre",
      notBetween: "pas entre",
      contains: "contient",
      notContains: "ne contient pas",
      startsWith: "commence par",
      endsWith: "se termine par",
      isExactly: "est exactement",
      equals: "égal à",
      notEquals: "pas égal à",
      greaterThan: "supérieur à",
      lessThan: "inférieur à",
      overlaps: "se chevauche",
      includes: "inclut",
      excludes: "exclut",
      includesAllOf: "inclut tous de",
      includesAnyOf: "inclut l'un de",
      empty: "est vide",
      notEmpty: "n'est pas vide",
    },

    // Placeholders
    placeholders: {
      enterField: (fieldType: string) => `Entrez ${fieldType}...`,
      selectField: "Sélectionner...",
      searchField: (fieldName: string) =>
        `Rechercher ${fieldName.toLowerCase()}...`,
      enterKey: "Entrez la clé...",
      enterValue: "Entrez la valeur...",
    },

    // Helper functions
    helpers: {
      formatOperator: (operator: string) => operator.replace(/_/g, " "),
    },

    // Validation
    validation: {
      invalidEmail: "Format d'email invalide",
      invalidUrl: "Format d'URL invalide",
      invalidTel: "Format de téléphone invalide",
      invalid: "Format de saisie invalide",
    },
  },
  de: {
    // UI Labels
    addFilter: "Filter hinzufügen",
    searchFields: "Felder suchen...",
    noFieldsFound: "Keine Felder gefunden.",
    noResultsFound: "Keine Ergebnisse gefunden.",
    select: "Auswählen...",
    true: "Wahr",
    false: "Falsch",
    min: "Min",
    max: "Max",
    to: "bis",
    typeAndPressEnter: "Tippen und Enter drücken, um Tag hinzuzufügen",
    selected: "ausgewählt",
    selectedCount: "ausgewählt",
    percent: "%",
    defaultCurrency: "€",
    defaultColor: "#000000",
    addFilterTitle: "Filter hinzufügen",

    // Operators
    operators: {
      is: "ist",
      isNot: "ist nicht",
      isAnyOf: "ist eines von",
      isNotAnyOf: "ist nicht eines von",
      includesAll: "enthält alle",
      excludesAll: "schließt alle aus",
      before: "vor",
      after: "nach",
      between: "zwischen",
      notBetween: "nicht zwischen",
      contains: "enthält",
      notContains: "enthält nicht",
      startsWith: "beginnt mit",
      endsWith: "endet mit",
      isExactly: "ist genau",
      equals: "gleich",
      notEquals: "nicht gleich",
      greaterThan: "größer als",
      lessThan: "kleiner als",
      overlaps: "überschneidet sich",
      includes: "enthält",
      excludes: "schließt aus",
      includesAllOf: "enthält alle von",
      includesAnyOf: "enthält eines von",
      empty: "ist leer",
      notEmpty: "ist nicht leer",
    },

    // Placeholders
    placeholders: {
      enterField: (fieldType: string) => `${fieldType} eingeben...`,
      selectField: "Auswählen...",
      searchField: (fieldName: string) =>
        `${fieldName.toLowerCase()} suchen...`,
      enterKey: "Schlüssel eingeben...",
      enterValue: "Wert eingeben...",
    },

    // Helper functions
    helpers: {
      formatOperator: (operator: string) => operator.replace(/_/g, " "),
    },

    // Validation
    validation: {
      invalidEmail: "Ungültiges E-Mail-Format",
      invalidUrl: "Ungültiges URL-Format",
      invalidTel: "Ungültiges Telefonformat",
      invalid: "Ungültiges Format",
    },
  },
  ja: {
    // UI Labels
    addFilter: "フィルターを追加",
    searchFields: "フィールドを検索...",
    noFieldsFound: "フィールドが見つかりません。",
    noResultsFound: "結果が見つかりません。",
    select: "選択...",
    true: "真",
    false: "偽",
    min: "最小",
    max: "最大",
    to: "から",
    typeAndPressEnter: "入力してEnterキーを押してタグを追加",
    selected: "選択済み",
    selectedCount: "選択済み",
    percent: "%",
    defaultCurrency: "¥",
    defaultColor: "#000000",
    addFilterTitle: "フィルターを追加",

    // Operators
    operators: {
      is: "は",
      isNot: "ではない",
      isAnyOf: "のいずれか",
      isNotAnyOf: "のいずれでもない",
      includesAll: "すべて含む",
      excludesAll: "すべて除外",
      before: "より前",
      after: "より後",
      between: "の間",
      notBetween: "の間ではない",
      contains: "含む",
      notContains: "含まない",
      startsWith: "で始まる",
      endsWith: "で終わる",
      isExactly: "正確に",
      equals: "等しい",
      notEquals: "等しくない",
      greaterThan: "より大きい",
      lessThan: "より小さい",
      overlaps: "重複する",
      includes: "含む",
      excludes: "除外",
      includesAllOf: "すべて含む",
      includesAnyOf: "いずれか含む",
      empty: "空",
      notEmpty: "空でない",
    },

    // Placeholders
    placeholders: {
      enterField: (fieldType: string) => `${fieldType}を入力...`,
      selectField: "選択...",
      searchField: (fieldName: string) => `${fieldName.toLowerCase()}を検索...`,
      enterKey: "キーを入力...",
      enterValue: "値を入力...",
    },

    // Helper functions
    helpers: {
      formatOperator: (operator: string) => operator.replace(/_/g, " "),
    },

    // Validation
    validation: {
      invalidEmail: "無効なメール形式",
      invalidUrl: "無効なURL形式",
      invalidTel: "無効な電話番号形式",
      invalid: "無効な形式",
    },
  },
}

// Language options for the selector
const languageOptions = [
  { value: "en", label: "English", flag: "us" },
  { value: "es", label: "Español", flag: "es" },
  { value: "fr", label: "Français", flag: "fr" },
  { value: "de", label: "Deutsch", flag: "de" },
  { value: "ja", label: "日本語", flag: "jp" },
]

export function Pattern() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("es")
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is", ["active"]),
  ])

  // Get current i18n configuration
  const currentI18n = useMemo(
    () => i18nConfigs[currentLanguage],
    [currentLanguage]
  )

  // Filter field configurations with localized labels
  const fields: FilterFieldConfig[] = useMemo(() => {
    const fieldLabels = {
      en: {
        name: "Name",
        email: "Email",
        company: "Company",
        role: "Role",
        status: "Status",
        location: "Location",
        joined: "Joined Date",
        balance: "Balance",
        rating: "Rating",
      },
      es: {
        name: "Nombre",
        email: "Correo electrónico",
        company: "Empresa",
        role: "Rol",
        status: "Estado",
        location: "Ubicación",
        joined: "Fecha de ingreso",
        balance: "Saldo",
        rating: "Calificación",
      },
      fr: {
        name: "Nom",
        email: "E-mail",
        company: "Entreprise",
        role: "Rôle",
        status: "Statut",
        location: "Localisation",
        joined: "Date d'adhésion",
        balance: "Solde",
        rating: "Note",
      },
      de: {
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen",
        role: "Rolle",
        status: "Status",
        location: "Standort",
        joined: "Beitrittsdatum",
        balance: "Guthaben",
        rating: "Bewertung",
      },
      ja: {
        name: "名前",
        email: "メール",
        company: "会社",
        role: "役割",
        status: "ステータス",
        location: "場所",
        joined: "参加日",
        balance: "残高",
        rating: "評価",
      },
    }

    const labels =
      fieldLabels[currentLanguage as keyof typeof fieldLabels] || fieldLabels.en

    return [
      {
        key: "name",
        label: labels.name,
        icon: (
          <IconPlaceholder
            lucide="UserIcon"
            tabler="IconUser"
            hugeicons="UserIcon"
            phosphor="UserIcon"
            remixicon="RiUserLine"
            className="size-3.5"
          />
        ),
        type: "text",
        className: "w-40",
        placeholder:
          currentLanguage === "en"
            ? "Search names..."
            : currentLanguage === "es"
              ? "Buscar nombres..."
              : currentLanguage === "fr"
                ? "Rechercher des noms..."
                : currentLanguage === "de"
                  ? "Namen suchen..."
                  : "名前を検索...",
      },
      {
        key: "email",
        label: labels.email,
        icon: (
          <IconPlaceholder
            lucide="MailIcon"
            tabler="IconMail"
            hugeicons="MailIcon"
            phosphor="EnvelopeIcon"
            remixicon="RiMailLine"
            className="size-3.5"
          />
        ),
        type: "text",
        className: "w-48",
        placeholder: "user@example.com",
      },
      {
        key: "company",
        label: labels.company,
        icon: (
          <IconPlaceholder
            lucide="BuildingIcon"
            tabler="IconBuilding"
            hugeicons="Building02Icon"
            phosphor="BuildingIcon"
            remixicon="RiBuilding4Line"
            className="size-3.5"
          />
        ),
        type: "select",
        searchable: true,
        className: "w-[180px]",
        options: [
          { value: "TechCorp", label: "TechCorp" },
          { value: "StartupCo", label: "StartupCo" },
          { value: "BigCorp", label: "BigCorp" },
          { value: "InnovateTech", label: "InnovateTech" },
          { value: "GlobalNet", label: "GlobalNet" },
        ],
      },
      {
        key: "role",
        label: labels.role,
        icon: (
          <IconPlaceholder
            lucide="UserIcon"
            tabler="IconUser"
            hugeicons="UserIcon"
            phosphor="UserIcon"
            remixicon="RiUserLine"
            className="size-3.5"
          />
        ),
        type: "select",
        searchable: true,
        className: "w-[160px]",
        options: [
          { value: "Developer", label: "Developer" },
          { value: "Designer", label: "Designer" },
          { value: "Manager", label: "Manager" },
          { value: "Product Manager", label: "Product Manager" },
          { value: "Sales Rep", label: "Sales Rep" },
        ],
      },
      {
        key: "status",
        label: labels.status,
        icon: (
          <IconPlaceholder
            lucide="CircleCheckIcon"
            tabler="IconCircleCheck"
            hugeicons="CheckmarkCircle01Icon"
            phosphor="CheckCircleIcon"
            remixicon="RiCheckboxCircleLine"
            className="size-3.5"
          />
        ),
        type: "select",
        searchable: false,
        className: "w-[140px]",
        options: [
          {
            value: "active",
            label:
              currentLanguage === "en"
                ? "Active"
                : currentLanguage === "es"
                  ? "Activo"
                  : currentLanguage === "fr"
                    ? "Actif"
                    : currentLanguage === "de"
                      ? "Aktiv"
                      : "アクティブ",
          },
          {
            value: "inactive",
            label:
              currentLanguage === "en"
                ? "Inactive"
                : currentLanguage === "es"
                  ? "Inactivo"
                  : currentLanguage === "fr"
                    ? "Inactif"
                    : currentLanguage === "de"
                      ? "Inaktiv"
                      : "非アクティブ",
          },
        ],
      },
      {
        key: "location",
        label: labels.location,
        icon: (
          <IconPlaceholder
            lucide="MapPinIcon"
            tabler="IconMapPin"
            hugeicons="Location06Icon"
            phosphor="MapPinIcon"
            remixicon="RiMapPinLine"
            className="size-3.5"
          />
        ),
        type: "text",
        className: "w-40",
        placeholder:
          currentLanguage === "en"
            ? "Search locations..."
            : currentLanguage === "es"
              ? "Buscar ubicaciones..."
              : currentLanguage === "fr"
                ? "Rechercher des lieux..."
                : currentLanguage === "de"
                  ? "Standorte suchen..."
                  : "場所を検索...",
      },
    ]
  }, [currentLanguage])

  const handleFiltersChange = useCallback((newFilters: Filter[]) => {
    setFilters(newFilters)
  }, [])

  return (
    <div className="flex w-full grow items-start justify-between space-y-6 self-start">
      {/* Filters Section */}
      <Filters
        filters={filters}
        fields={fields}
        onChange={handleFiltersChange}
        size="sm"
        trigger={
          <Button variant="outline" size="icon-sm">
            <IconPlaceholder
              lucide="ListFilterIcon"
              tabler="IconFilter2"
              hugeicons="FilterMailIcon"
              phosphor="FunnelSimpleIcon"
              remixicon="RiFilter3Line"
            />
          </Button>
        }
        i18n={currentI18n}
      />
      <div className="flex items-center gap-2">
        {/* Language selection */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              {(() => {
                const lang = languageOptions.find(
                  (l) => l.value === currentLanguage
                )
                return (
                  lang && (
                    <img
                      src={`https://flagcdn.com/${lang.flag.toLowerCase()}.svg`}
                      alt={lang.flag}
                      className="size-4 rounded-full object-cover"
                    />
                  )
                )
              })()}
              <span>
                {
                  languageOptions.find((lang) => lang.value === currentLanguage)
                    ?.label
                }
              </span>
              <IconPlaceholder
                lucide="ChevronDownIcon"
                tabler="IconChevronDown"
                hugeicons="ArrowDown01Icon"
                phosphor="CaretDownIcon"
                remixicon="RiArrowDownSLine"
                className="size-4"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {languageOptions.map((lang) => (
              <DropdownMenuItem
                key={lang.value}
                onClick={() => setCurrentLanguage(lang.value)}
                className="flex items-center gap-2"
              >
                <img
                  src={`https://flagcdn.com/${lang.flag.toLowerCase()}.svg`}
                  alt={lang.flag}
                  className="size-4 rounded-full object-cover"
                />
                <span>{lang.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
```
