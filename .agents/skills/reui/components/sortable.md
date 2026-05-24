# Sortable (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

8 entr(y/ies).

> Includes the base `@reui/{slug}` primitive plus `c-{slug}-*` demo blocks.

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `sortable` | Sortable | registry:ui | deps: @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, radix-ui |
| `c-sortable-1` | Sortable list of items with drag-and-drop | registry:block | Sortable list of items with drag-and-drop |
| `c-sortable-2` | Sortable list of items with grid layout | registry:block | Sortable list of items with grid layout |
| `c-sortable-3` | Sortable list of items with nested layout | registry:block | Sortable list of items with nested layout |
| `c-sortable-4` | Sortable playlist with frame | registry:block | Sortable playlist with frame |
| `c-sortable-5` | Sortable settings priority with frame | registry:block | Sortable settings priority with frame |
| `c-sortable-6` | Sortable sidebar navigation with frame | registry:block | Sortable sidebar navigation with frame |
| `c-sortable-7` | Sortable image gallery grid with frame | registry:block | Sortable image gallery grid with frame |

## Source

### Sortable (`sortable`)

Target: `components/reui/sortable.tsx`

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import {
  Children,
  cloneElement,
  createContext,
  CSSProperties,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react"
import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  MeasuringStrategy,
  Modifiers,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
  type DraggableSyntheticListeners,
} from "@dnd-kit/core"
import {
  arrayMove,
  defaultAnimateLayoutChanges,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  type AnimateLayoutChanges,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Slot } from "radix-ui"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

// Sortable Item Context
const SortableItemContext = createContext<{
  listeners: DraggableSyntheticListeners | undefined
  isDragging?: boolean
  disabled?: boolean
}>({
  listeners: undefined,
  isDragging: false,
  disabled: false,
})

const IsOverlayContext = createContext(false)

const SortableInternalContext = createContext<{
  activeId: UniqueIdentifier | null
  modifiers?: Modifiers
}>({
  activeId: null,
  modifiers: undefined,
})

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true })

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4",
      },
    },
  }),
}

// Multipurpose Sortable Component
export interface SortableRootProps<T> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onDragStart" | "onDragEnd"
> {
  value: T[]
  onValueChange: (value: T[]) => void
  getItemValue: (item: T) => string
  children: ReactNode
  onMove?: (event: {
    event: DragEndEvent
    activeIndex: number
    overIndex: number
  }) => void
  strategy?: "horizontal" | "vertical" | "grid"
  onDragStart?: (event: DragStartEvent) => void
  onDragEnd?: (event: DragEndEvent) => void
  modifiers?: Modifiers
  asChild?: boolean
}

function Sortable<T>({
  value,
  onValueChange,
  getItemValue,
  className,
  asChild = false,
  onMove,
  strategy = "vertical",
  onDragStart,
  onDragEnd,
  modifiers,
  children,
  ...props
}: SortableRootProps<T>) {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => setMounted(true), [])

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      setActiveId(event.active.id)
      onDragStart?.(event)
    },
    [onDragStart]
  )

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      setActiveId(null)
      onDragEnd?.(event)

      if (!over) return

      // Handle item reordering
      const activeIndex = value.findIndex(
        (item: T) => getItemValue(item) === active.id
      )
      const overIndex = value.findIndex(
        (item: T) => getItemValue(item) === over.id
      )

      if (activeIndex !== overIndex) {
        if (onMove) {
          onMove({ event, activeIndex, overIndex })
        } else {
          const newValue = arrayMove(value, activeIndex, overIndex)
          onValueChange(newValue)
        }
      }
    },
    [value, getItemValue, onValueChange, onMove, onDragEnd]
  )

  const handleDragCancel = useCallback(() => {
    setActiveId(null)
  }, [])

  const getStrategy = () => {
    switch (strategy) {
      case "horizontal":
        return rectSortingStrategy
      case "grid":
        return rectSortingStrategy
      case "vertical":
      default:
        return verticalListSortingStrategy
    }
  }

  const itemIds = useMemo(() => value.map(getItemValue), [value, getItemValue])

  const contextValue = useMemo(
    () => ({ activeId, modifiers }),
    [activeId, modifiers]
  )

  // Find the active child for the overlay
  const overlayContent = useMemo(() => {
    if (!activeId) return null
    let result: ReactNode = null
    Children.forEach(children, (child) => {
      if (isValidElement(child) && (child.props as any).value === activeId) {
        result = cloneElement(child as ReactElement<any>, {
          ...(child.props as any),
          className: cn((child.props as any).className, "z-50"),
        })
      }
    })
    return result
  }, [activeId, children])

  const Comp = asChild ? Slot.Root : "div"

  return (
    <SortableInternalContext.Provider value={contextValue}>
      <DndContext
        sensors={sensors}
        modifiers={modifiers}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.Always,
          },
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={itemIds} strategy={getStrategy()}>
          <Comp
            data-slot="sortable"
            data-dragging={activeId !== null}
            className={cn(activeId !== null && "cursor-grabbing!", className)}
            {...props}
          >
            {children}
          </Comp>
        </SortableContext>
        {mounted &&
          createPortal(
            <DragOverlay
              dropAnimation={dropAnimationConfig}
              modifiers={modifiers}
              className={cn("z-50", activeId && "cursor-grabbing")}
            >
              <IsOverlayContext.Provider value={true}>
                {overlayContent}
              </IsOverlayContext.Provider>
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </SortableInternalContext.Provider>
  )
}

export interface SortableItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  disabled?: boolean
  asChild?: boolean
}

function SortableItem({
  value,
  className,
  asChild = false,
  disabled,
  children,
  ...props
}: SortableItemProps) {
  const isOverlay = useContext(IsOverlayContext)

  const {
    setNodeRef,
    transform,
    transition,
    attributes,
    listeners,
    isDragging: isSortableDragging,
  } = useSortable({
    id: value,
    disabled: disabled || isOverlay,
    animateLayoutChanges,
  })

  if (isOverlay) {
    const Comp = asChild ? Slot.Root : "div"

    return (
      <SortableItemContext.Provider
        value={{ listeners: undefined, isDragging: true, disabled: false }}
      >
        <Comp
          data-slot="sortable-item"
          data-value={value}
          data-dragging={true}
          className={cn(className)}
          {...props}
        >
          {children}
        </Comp>
      </SortableItemContext.Provider>
    )
  }

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  } as CSSProperties

  const Comp = asChild ? Slot.Root : "div"

  return (
    <SortableItemContext.Provider
      value={{ listeners, isDragging: isSortableDragging, disabled }}
    >
      <Comp
        data-slot="sortable-item"
        data-value={value}
        data-dragging={isSortableDragging}
        data-disabled={disabled}
        ref={setNodeRef}
        style={style}
        {...attributes}
        className={cn(
          isSortableDragging && "z-50 opacity-50",
          disabled && "opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    </SortableItemContext.Provider>
  )
}

export interface SortableItemHandleProps extends HTMLAttributes<HTMLDivElement> {
  cursor?: boolean
  asChild?: boolean
}

function SortableItemHandle({
  className,
  asChild = false,
  cursor = true,
  children,
  ...props
}: SortableItemHandleProps) {
  const { listeners, isDragging, disabled } = useContext(SortableItemContext)

  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="sortable-item-handle"
      data-dragging={isDragging}
      data-disabled={disabled}
      {...listeners}
      className={cn(
        cursor && (isDragging ? "cursor-grabbing!" : "cursor-grab!"),
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export interface SortableOverlayProps extends Omit<
  React.ComponentProps<typeof DragOverlay>,
  "children"
> {
  children?: ReactNode | ((params: { value: UniqueIdentifier }) => ReactNode)
}

function SortableOverlay({
  children,
  className,
  ...props
}: SortableOverlayProps) {
  const { activeId, modifiers } = useContext(SortableInternalContext)
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => setMounted(true), [])

  const content =
    activeId && children
      ? typeof children === "function"
        ? children({ value: activeId })
        : children
      : null

  if (!mounted) return null

  return createPortal(
    <DragOverlay
      dropAnimation={dropAnimationConfig}
      modifiers={modifiers}
      className={cn("z-50", activeId && "cursor-grabbing", className)}
      {...props}
    >
      <IsOverlayContext.Provider value={true}>
        {content}
      </IsOverlayContext.Provider>
    </DragOverlay>,
    document.body
  )
}

export { Sortable, SortableItem, SortableItemHandle, SortableOverlay }
```

### Sortable list of items with drag-and-drop (`c-sortable-1`)

Target: `components/examples/c-sortable-1.tsx`

Sortable list of items with drag-and-drop

```tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/reui/sortable"
import { toast } from "sonner"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface SortableItem {
  id: string
  title: string
  description: string
  type: "image" | "document" | "audio" | "video"
  size: string
}

const defaultItems: SortableItem[] = [
  {
    id: "1",
    title: "Product Demo",
    description: "Main product image",
    type: "image",
    size: "2.4 MB",
  },
  {
    id: "2",
    title: "Product Specification",
    description: "Technical details document",
    type: "document",
    size: "1.2 MB",
  },
  {
    id: "3",
    title: "Product Demo Video",
    description: "How to use the product",
    type: "video",
    size: "15.7 MB",
  },
  {
    id: "4",
    title: "Product Audio Guide",
    description: "Audio instructions",
    type: "audio",
    size: "8.3 MB",
  },
  {
    id: "5",
    title: "Product Specification",
    description: "Additional product view",
    type: "image",
    size: "3.1 MB",
  },
]

const getTypeIcon = (type: SortableItem["type"]) => {
  switch (type) {
    case "image":
      return (
        <IconPlaceholder
          lucide="ImageIcon"
          tabler="IconPhoto"
          hugeicons="ImageIcon"
          phosphor="ImageIcon"
          remixicon="RiImageLine"
          className="h-4 w-4"
        />
      )
    case "document":
      return (
        <IconPlaceholder
          lucide="FileTextIcon"
          tabler="IconFileText"
          hugeicons="File02Icon"
          phosphor="FileTextIcon"
          remixicon="RiFileTextLine"
          className="h-4 w-4"
        />
      )
    case "audio":
      return (
        <IconPlaceholder
          lucide="MusicIcon"
          tabler="IconMusic"
          hugeicons="MusicNote03Icon"
          phosphor="MusicNotesIcon"
          remixicon="RiMusic2Line"
          className="h-4 w-4"
        />
      )
    case "video":
      return (
        <IconPlaceholder
          lucide="VideoIcon"
          tabler="IconVideo"
          hugeicons="Video02Icon"
          phosphor="VideoCameraIcon"
          remixicon="RiVideoOnLine"
          className="h-4 w-4"
        />
      )
  }
}

const getTypeColor = (type: SortableItem["type"]) => {
  switch (type) {
    case "image":
      return "primary-light"
    case "document":
      return "success-light"
    case "audio":
      return "destructive-light"
    case "video":
      return "info-light"
  }
}

export function Pattern() {
  const [items, setItems] = useState<SortableItem[]>(defaultItems)

  const handleValueChange = (newItems: SortableItem[]) => {
    setItems(newItems)

    // Show toast with new order
    toast.success("Items reordered successfully!", {
      description: newItems
        .map((item, index) => `${index + 1}. ${item.title}`)
        .join(", "),
    })
  }

  const getItemValue = (item: SortableItem) => item.id

  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-6">
      <Sortable
        value={items}
        onValueChange={handleValueChange}
        getItemValue={getItemValue}
        strategy="vertical"
        className="space-y-2"
      >
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div
              className="bg-background border-border hover:bg-accent/50 rounded-md flex cursor-pointer items-center gap-3 border p-3 transition-colors"
              onClick={() => {}}
            >
              <SortableItemHandle className="text-muted-foreground hover:text-foreground">
                <IconPlaceholder
                  lucide="GripVerticalIcon"
                  tabler="IconGripVertical"
                  hugeicons="DragDropVerticalIcon"
                  phosphor="DotsSixVerticalIcon"
                  remixicon="RiDraggable"
                  className="h-4 w-4"
                />
              </SortableItemHandle>

              <div className="text-muted-foreground flex items-center gap-2">
                {getTypeIcon(item.type)}
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium">{item.title}</h4>
                <p className="text-muted-foreground truncate text-xs">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={getTypeColor(item.type)}>{item.type}</Badge>
                <span className="text-muted-foreground text-xs">
                  {item.size}
                </span>
              </div>
            </div>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  )
}
```

### Sortable list of items with grid layout (`c-sortable-2`)

Target: `components/examples/c-sortable-2.tsx`

Sortable list of items with grid layout

```tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/reui/sortable"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface GridItem {
  id: string
  title: string
  description: string
  type: "image" | "document" | "audio" | "video" | "featured"
  size: string
  priority: "high" | "medium" | "low"
}

const defaultGridItems: GridItem[] = [
  {
    id: "1",
    title: "Hero Image",
    description: "Main banner image",
    type: "image",
    size: "2.4 MB",
    priority: "high",
  },
  {
    id: "2",
    title: "Product Specs",
    description: "Technical documentation",
    type: "document",
    size: "1.2 MB",
    priority: "medium",
  },
  {
    id: "3",
    title: "Demo Video",
    description: "Product demonstration",
    type: "video",
    size: "15.7 MB",
    priority: "high",
  },
  {
    id: "4",
    title: "Audio Guide",
    description: "Voice instructions",
    type: "audio",
    size: "8.3 MB",
    priority: "low",
  },
  {
    id: "5",
    title: "Gallery Photo 1",
    description: "Product view 1",
    type: "image",
    size: "3.1 MB",
    priority: "medium",
  },
  {
    id: "6",
    title: "Gallery Photo 2",
    description: "Product view 2",
    type: "image",
    size: "2.8 MB",
    priority: "medium",
  },
  {
    id: "7",
    title: "User Manual",
    description: "Installation guide",
    type: "document",
    size: "4.2 MB",
    priority: "high",
  },
  {
    id: "8",
    title: "Background Music",
    description: "Ambient soundtrack",
    type: "audio",
    size: "12.1 MB",
    priority: "low",
  },
  {
    id: "9",
    title: "Feature Highlight",
    description: "Key product features",
    type: "featured",
    size: "N/A",
    priority: "high",
  },
]

const getTypeColor = (type: GridItem["type"]) => {
  switch (type) {
    case "image":
      return "primary-light"
    case "document":
      return "success-light"
    case "audio":
      return "destructive-light"
    case "video":
      return "info-light"
    case "featured":
      return "warning-light"
  }
}

const getItemSize = (type: GridItem["type"]) => {
  switch (type) {
    case "featured":
      return "col-span-2 row-span-2"
    case "image":
    case "video":
      return "col-span-1 row-span-1"
    case "document":
    case "audio":
      return "col-span-1 row-span-1"
    default:
      return "col-span-1 row-span-1"
  }
}

export function Pattern() {
  const [items, setItems] = useState<GridItem[]>(defaultGridItems)

  const handleValueChange = (newItems: GridItem[]) => {
    setItems(newItems)

    // Show toast with new order
    toast.success("Grid items reordered successfully!", {
      description: `New order: ${newItems.map((item, index) => `${index + 1}. ${item.title}`).join(", ")}`,
    })
  }

  const getItemValue = (item: GridItem) => item.id

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 p-4">
      <Sortable
        value={items}
        onValueChange={handleValueChange}
        getItemValue={getItemValue}
        strategy="grid"
        className="grid auto-rows-fr grid-cols-3 gap-3"
      >
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div
              className={cn(
                "group bg-background border-border hover:bg-accent/50 rounded-md relative cursor-pointer border p-3 transition-colors",
                getItemSize(item.type),
                "flex min-h-[100px] flex-col"
              )}
              onClick={() => {}}
            >
              <SortableItemHandle className="text-muted-foreground hover:text-foreground absolute end-1.5 top-2.5 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <IconPlaceholder
                  lucide="GripVerticalIcon"
                  tabler="IconGripVertical"
                  hugeicons="DragDropVerticalIcon"
                  phosphor="DotsSixVerticalIcon"
                  remixicon="RiDraggable"
                  className="h-3.5 w-3.5"
                />
              </SortableItemHandle>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium">{item.title}</h4>
                <p className="text-muted-foreground mt-0.5 truncate text-xs">
                  {item.description}
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <Badge variant={getTypeColor(item.type)} size="sm">
                  {item.type}
                </Badge>
                {item.type !== "featured" && (
                  <span className="text-muted-foreground text-xs">
                    {item.size}
                  </span>
                )}
              </div>
            </div>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  )
}
```

### Sortable list of items with nested layout (`c-sortable-3`)

Target: `components/examples/c-sortable-3.tsx`

Sortable list of items with nested layout

```tsx
"use client"

import { useState } from "react"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/reui/sortable"
import { toast } from "sonner"

import { Card, CardContent } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface OptionValue {
  id: string
  value: string
}

interface OptionGroup {
  id: string
  name: string
  values: OptionValue[]
}

const defaultOptionGroups: OptionGroup[] = [
  {
    id: "1",
    name: "Colors",
    values: [
      { id: "1-1", value: "White" },
      { id: "1-2", value: "Black" },
      { id: "1-3", value: "Grey" },
      { id: "1-4", value: "Green" },
    ],
  },
  {
    id: "2",
    name: "Sizes",
    values: [
      { id: "2-1", value: "Small" },
      { id: "2-2", value: "Medium" },
      { id: "2-3", value: "Large" },
    ],
  },
  {
    id: "3",
    name: "Materials",
    values: [
      { id: "3-1", value: "Cotton" },
      { id: "3-2", value: "Polyester" },
      { id: "3-3", value: "Wool" },
    ],
  },
]

export function Pattern() {
  const [optionGroups, setOptionGroups] =
    useState<OptionGroup[]>(defaultOptionGroups)

  const handleParentReorder = (newGroups: OptionGroup[]) => {
    setOptionGroups(newGroups)

    toast.success("Option groups reordered successfully!", {
      description: `${newGroups.map((group, index) => `${index + 1}. ${group.name}`).join(", ")}`,
    })
  }

  const getParentValue = (group: OptionGroup) => group.id
  const getChildValue = (value: OptionValue) => value.id

  const handleChildReorder = (groupId: string, newValues: OptionValue[]) => {
    setOptionGroups((prev) =>
      prev.map((group) =>
        group.id === groupId ? { ...group, values: newValues } : group
      )
    )

    toast.success("Values reordered successfully!", {
      description: newValues
        .map((value, index) => `${index + 1}. ${value.value}`)
        .join(", "),
    })
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-6 p-6">
      <Sortable
        value={optionGroups}
        onValueChange={handleParentReorder}
        getItemValue={getParentValue}
        strategy="vertical"
        className="space-y-4"
      >
        {optionGroups.map((group) => (
          <SortableItem key={group.id} value={group.id}>
            <Card className="p-2">
              <CardContent className="p-0">
                {/* Group Header */}
                <div className="mb-2 flex items-center gap-2">
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground cursor-grab">
                    <IconPlaceholder
                      lucide="GripVerticalIcon"
                      tabler="IconGripVertical"
                      hugeicons="DragDropVerticalIcon"
                      phosphor="DotsSixVerticalIcon"
                      remixicon="RiDraggable"
                      className="h-4 w-4"
                    />
                  </SortableItemHandle>
                  <h3 className="text-sm font-semibold">{group.name}</h3>
                </div>

                {/* Option Values - Child Level */}
                <Sortable
                  value={group.values}
                  onValueChange={(newValues) =>
                    handleChildReorder(group.id, newValues)
                  }
                  getItemValue={getChildValue}
                  strategy="vertical"
                  className="space-y-2"
                >
                  {group.values.map((value) => (
                    <SortableItem key={value.id} value={value.id}>
                      <div className="border-border rounded-md flex items-center gap-2 border p-1.5">
                        <SortableItemHandle className="text-muted-foreground hover:text-foreground cursor-grab">
                          <IconPlaceholder
                            lucide="GripVerticalIcon"
                            tabler="IconGripVertical"
                            hugeicons="DragDropVerticalIcon"
                            phosphor="DotsSixVerticalIcon"
                            remixicon="RiDraggable"
                            className="h-4 w-4"
                          />
                        </SortableItemHandle>
                        <span className="flex-1 text-sm">{value.value}</span>
                      </div>
                    </SortableItem>
                  ))}
                </Sortable>
              </CardContent>
            </Card>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  )
}
```

### Sortable playlist with frame (`c-sortable-4`)

Target: `components/examples/c-sortable-4.tsx`

Sortable playlist with frame

```tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/reui/sortable"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  plays: string
  active?: boolean
}

const defaultTracks: Track[] = [
  {
    id: "1",
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    duration: "4:03",
    plays: "1.2B",
    active: true,
  },
  {
    id: "2",
    title: "Digital Love",
    artist: "Daft Punk",
    album: "Discovery",
    duration: "4:58",
    plays: "845M",
  },
  {
    id: "3",
    title: "Starlight",
    artist: "Muse",
    album: "Black Holes",
    duration: "3:59",
    plays: "720M",
  },
  {
    id: "4",
    title: "Take On Me",
    artist: "a-ha",
    album: "Hunting High and Low",
    duration: "3:48",
    plays: "1.8B",
  },
  {
    id: "5",
    title: "Blue Monday",
    artist: "New Order",
    album: "Power, Corruption",
    duration: "7:29",
    plays: "530M",
  },
]

export function Pattern() {
  const [tracks, setTracks] = useState<Track[]>(defaultTracks)

  return (
    <div className="mx-auto w-full max-w-md">
      <Frame spacing="xs">
        <FrameHeader>
          <div className="flex items-center justify-between">
            <div>
              <FrameTitle>Queue</FrameTitle>
              <FrameDescription>{tracks.length} tracks</FrameDescription>
            </div>
            <Badge variant="outline" size="sm">
              <IconPlaceholder
                lucide="ListMusicIcon"
                tabler="IconPlaylist"
                hugeicons="PlayListIcon"
                phosphor="PlaylistIcon"
                remixicon="RiPlayListLine"
                className="size-3"
              />
              Playlist
            </Badge>
          </div>
        </FrameHeader>
        <Sortable
          value={tracks}
          onValueChange={setTracks}
          getItemValue={(item) => item.id}
          strategy="vertical"
          className="space-y-0.5"
        >
          {tracks.map((track, index) => (
            <SortableItem key={track.id} value={track.id}>
              <FramePanel className="p-0!">
                <div className="group flex items-center gap-3 px-3 py-2.5">
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground">
                    <IconPlaceholder
                      lucide="GripVerticalIcon"
                      tabler="IconGripVertical"
                      hugeicons="DragDropVerticalIcon"
                      phosphor="DotsSixVerticalIcon"
                      remixicon="RiDraggable"
                      className="size-4"
                    />
                  </SortableItemHandle>
                  <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md">
                    <IconPlaceholder
                      lucide="MusicIcon"
                      tabler="IconMusic"
                      hugeicons="MusicNote03Icon"
                      phosphor="MusicNotesIcon"
                      remixicon="RiMusic2Line"
                      className="text-muted-foreground size-4"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`truncate text-sm font-medium ${track.active ? "text-primary" : ""}`}
                    >
                      {track.title}
                      {track.active && (
                        <Badge
                          variant="primary-light"
                          size="xs"
                          className="ms-1.5 align-middle"
                        >
                          Playing
                        </Badge>
                      )}
                    </p>
                    <p className="text-muted-foreground truncate text-xs">
                      {track.artist} &middot; {track.album}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground hidden text-xs tabular-nums sm:inline">
                      {track.plays}
                    </span>
                    <span className="text-muted-foreground text-xs tabular-nums">
                      {track.duration}
                    </span>
                  </div>
                </div>
              </FramePanel>
            </SortableItem>
          ))}
        </Sortable>
      </Frame>
    </div>
  )
}
```

### Sortable settings priority with frame (`c-sortable-5`)

Target: `components/examples/c-sortable-5.tsx`

Sortable settings priority with frame

```tsx
"use client"

import { useState } from "react"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/reui/sortable"

import { Switch } from "@/components/ui/switch"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface NotificationChannel {
  id: string
  name: string
  description: string
  enabled: boolean
}

const defaultChannels: NotificationChannel[] = [
  {
    id: "1",
    name: "Email",
    description: "Send notifications via email",
    enabled: true,
  },
  {
    id: "2",
    name: "Push Notifications",
    description: "Browser and mobile push",
    enabled: true,
  },
  { id: "3", name: "SMS", description: "Text message alerts", enabled: false },
  {
    id: "4",
    name: "Slack",
    description: "Post to Slack channels",
    enabled: true,
  },
  {
    id: "5",
    name: "Webhook",
    description: "Send to custom endpoint",
    enabled: false,
  },
]

export function Pattern() {
  const [channels, setChannels] =
    useState<NotificationChannel[]>(defaultChannels)

  const toggleChannel = (id: string) => {
    setChannels((prev) =>
      prev.map((ch) => (ch.id === id ? { ...ch, enabled: !ch.enabled } : ch))
    )
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <Frame spacing="sm">
        <FrameHeader>
          <FrameTitle>Notification Priority</FrameTitle>
          <FrameDescription>
            Drag to reorder by priority. Top channels are tried first.
          </FrameDescription>
        </FrameHeader>
        <Sortable
          value={channels}
          onValueChange={setChannels}
          getItemValue={(item) => item.id}
          strategy="vertical"
          className="space-y-1"
        >
          {channels.map((channel) => (
            <SortableItem key={channel.id} value={channel.id}>
              <FramePanel className="p-0!">
                <div className="flex items-center gap-3 px-3 py-2.5">
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground">
                    <IconPlaceholder
                      lucide="GripVerticalIcon"
                      tabler="IconGripVertical"
                      hugeicons="DragDropVerticalIcon"
                      phosphor="DotsSixVerticalIcon"
                      remixicon="RiDraggable"
                      className="size-4"
                    />
                  </SortableItemHandle>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{channel.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {channel.description}
                    </p>
                  </div>
                  <Switch
                    checked={channel.enabled}
                    onCheckedChange={() => toggleChannel(channel.id)}
                  />
                </div>
              </FramePanel>
            </SortableItem>
          ))}
        </Sortable>
      </Frame>
    </div>
  )
}
```

### Sortable sidebar navigation with frame (`c-sortable-6`)

Target: `components/examples/c-sortable-6.tsx`

Sortable sidebar navigation with frame

```tsx
"use client"

import { ReactNode, useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/reui/sortable"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface NavItem {
  id: string
  label: string
  icon: ReactNode
  count?: number
}

const defaultItems: NavItem[] = [
  {
    id: "1",
    label: "Dashboard",
    icon: (
      <IconPlaceholder
        lucide="LayoutDashboardIcon"
        tabler="IconLayoutDashboard"
        hugeicons="DashboardSquare02Icon"
        phosphor="LayoutIcon"
        remixicon="RiDashboardLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    id: "2",
    label: "Inbox",
    icon: (
      <IconPlaceholder
        lucide="InboxIcon"
        tabler="IconInbox"
        hugeicons="InboxIcon"
        phosphor="TrayIcon"
        remixicon="RiInboxLine"
        className="text-muted-foreground size-4"
      />
    ),
    count: 5,
  },
  {
    id: "3",
    label: "Projects",
    icon: (
      <IconPlaceholder
        lucide="FolderIcon"
        tabler="IconFolder"
        hugeicons="FolderIcon"
        phosphor="FolderIcon"
        remixicon="RiFolderLine"
        className="text-muted-foreground size-4"
      />
    ),
    count: 12,
  },
  {
    id: "4",
    label: "Calendar",
    icon: (
      <IconPlaceholder
        lucide="CalendarIcon"
        tabler="IconCalendarEvent"
        hugeicons="Calendar04Icon"
        phosphor="CalendarBlankIcon"
        remixicon="RiCalendarLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    id: "5",
    label: "Analytics",
    icon: (
      <IconPlaceholder
        lucide="BarChart3Icon"
        tabler="IconChartBar"
        hugeicons="ChartBarLineIcon"
        phosphor="ChartBarIcon"
        remixicon="RiBarChartBoxLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  {
    id: "6",
    label: "Settings",
    icon: (
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
        className="text-muted-foreground size-4"
      />
    ),
  },
]

export function Pattern() {
  const [items, setItems] = useState<NavItem[]>(defaultItems)

  return (
    <div className="mx-auto w-full max-w-xs">
      <Frame spacing="xs">
        <FrameHeader>
          <FrameTitle>Navigation</FrameTitle>
        </FrameHeader>
        <FramePanel className="p-2!">
          <Sortable
            value={items}
            onValueChange={setItems}
            getItemValue={(item) => item.id}
            strategy="vertical"
            className="space-y-0.5"
          >
            {items.map((item) => (
              <SortableItem key={item.id} value={item.id}>
                <div className="hover:bg-accent flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors">
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground opacity-0 transition-opacity group-hover:opacity-100 [div:hover>&]:opacity-100">
                    <IconPlaceholder
                      lucide="GripVerticalIcon"
                      tabler="IconGripVertical"
                      hugeicons="DragDropVerticalIcon"
                      phosphor="DotsSixVerticalIcon"
                      remixicon="RiDraggable"
                      className="size-3.5"
                    />
                  </SortableItemHandle>
                  {item.icon}
                  <span className="flex-1 text-sm">{item.label}</span>
                  {item.count && (
                    <Badge variant="outline" size="sm" className="rounded-full">
                      {item.count}
                    </Badge>
                  )}
                </div>
              </SortableItem>
            ))}
          </Sortable>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Sortable image gallery grid with frame (`c-sortable-7`)

Target: `components/examples/c-sortable-7.tsx`

Sortable image gallery grid with frame

```tsx
"use client"

import { useState } from "react"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/components/reui/sortable"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface GalleryImage {
  id: string
  name: string
  dimensions: string
  size: string
}

const defaultImages: GalleryImage[] = [
  { id: "1", name: "hero-banner.jpg", dimensions: "1920×1080", size: "2.4 MB" },
  { id: "2", name: "product-shot.png", dimensions: "800×600", size: "1.8 MB" },
  { id: "3", name: "team-photo.jpg", dimensions: "1200×800", size: "3.2 MB" },
  { id: "4", name: "logo-dark.svg", dimensions: "240×60", size: "12 KB" },
  { id: "5", name: "og-image.png", dimensions: "1200×630", size: "890 KB" },
  { id: "6", name: "favicon.ico", dimensions: "32×32", size: "4 KB" },
]

export function Pattern() {
  const [images, setImages] = useState<GalleryImage[]>(defaultImages)

  return (
    <div className="mx-auto w-full max-w-md">
      <Frame spacing="xs">
        <FrameHeader>
          <FrameTitle>Media Library</FrameTitle>
          <FrameDescription>Drag to reorder display priority</FrameDescription>
        </FrameHeader>
        <FramePanel className="p-2!">
          <Sortable
            value={images}
            onValueChange={setImages}
            getItemValue={(item) => item.id}
            strategy="grid"
            className="grid grid-cols-3 gap-2"
          >
            {images.map((image) => (
              <SortableItem key={image.id} value={image.id}>
                <div className="bg-muted group rounded-lg relative flex flex-col items-center justify-center gap-2 border p-4">
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground absolute top-1.5 right-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <IconPlaceholder
                      lucide="GripVerticalIcon"
                      tabler="IconGripVertical"
                      hugeicons="DragDropVerticalIcon"
                      phosphor="DotsSixVerticalIcon"
                      remixicon="RiDraggable"
                      className="size-3.5"
                    />
                  </SortableItemHandle>
                  <IconPlaceholder
                    lucide="ImageIcon"
                    tabler="IconPhoto"
                    hugeicons="ImageIcon"
                    phosphor="ImageIcon"
                    remixicon="RiImageLine"
                    className="text-muted-foreground size-5"
                  />
                  <div className="w-full text-center">
                    <p className="truncate text-xs font-medium">{image.name}</p>
                    <p className="text-muted-foreground text-[10px]">
                      {image.dimensions} &middot; {image.size}
                    </p>
                  </div>
                </div>
              </SortableItem>
            ))}
          </Sortable>
        </FramePanel>
      </Frame>
    </div>
  )
}
```
