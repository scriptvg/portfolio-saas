# Kanban (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

6 entr(y/ies).

> Includes the base `@reui/{slug}` primitive plus `c-{slug}-*` demo blocks.

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `kanban` | Kanban | registry:ui | deps: @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, radix-ui |
| `c-kanban-1` | Kanban board with placeholder overlay | registry:block | Kanban board with placeholder overlay |
| `c-kanban-2` | Kanban board with dynamic overlay | registry:block | Kanban board with dynamic overlay |
| `c-kanban-3` | Kanban board with frame columns | registry:block | Kanban board with frame columns |
| `c-kanban-4` | Minimal kanban with stacked frame | registry:block | Minimal kanban with stacked frame |
| `c-kanban-5` | Feature roadmap kanban with progress | registry:block | Feature roadmap kanban with progress |

## Source

### Kanban (`kanban`)

Target: `components/reui/kanban.tsx`

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import {
  createContext,
  CSSProperties,
  HTMLAttributes,
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
  DragOverEvent,
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
  type DraggableAttributes,
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

interface KanbanContextProps<T> {
  columns: Record<string, T[]>
  setColumns: (columns: Record<string, T[]>) => void
  getItemId: (item: T) => string
  columnIds: string[]
  activeId: UniqueIdentifier | null
  setActiveId: (id: UniqueIdentifier | null) => void
  findContainer: (id: UniqueIdentifier) => string | undefined
  isColumn: (id: UniqueIdentifier) => boolean
  modifiers?: Modifiers
}

const KanbanContext = createContext<KanbanContextProps<any>>({
  columns: {},
  setColumns: () => {},
  getItemId: () => "",
  columnIds: [],
  activeId: null,
  setActiveId: () => {},
  findContainer: () => undefined,
  isColumn: () => false,
  modifiers: undefined,
})

const ColumnContext = createContext<{
  attributes: DraggableAttributes
  listeners: DraggableSyntheticListeners | undefined
  isDragging?: boolean
  disabled?: boolean
}>({
  attributes: {} as DraggableAttributes,
  listeners: undefined,
  isDragging: false,
  disabled: false,
})

const ItemContext = createContext<{
  listeners: DraggableSyntheticListeners | undefined
  isDragging?: boolean
  disabled?: boolean
}>({
  listeners: undefined,
  isDragging: false,
  disabled: false,
})

const IsOverlayContext = createContext(false)

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

export interface KanbanMoveEvent {
  event: DragEndEvent
  activeContainer: string
  activeIndex: number
  overContainer: string
  overIndex: number
}

export interface KanbanRootProps<T> extends HTMLAttributes<HTMLDivElement> {
  value: Record<string, T[]>
  onValueChange: (value: Record<string, T[]>) => void
  getItemValue: (item: T) => string
  children: ReactNode
  onMove?: (event: KanbanMoveEvent) => void
  asChild?: boolean
  modifiers?: Modifiers
}

function Kanban<T>({
  value,
  onValueChange,
  getItemValue,
  children,
  className,
  asChild = false,
  onMove,
  modifiers,
  ...props
}: KanbanRootProps<T>) {
  const columns = value
  const setColumns = onValueChange
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

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

  const columnIds = useMemo(() => Object.keys(columns), [columns])

  const isColumn = useCallback(
    (id: UniqueIdentifier) => columnIds.includes(id as string),
    [columnIds]
  )

  const findContainer = useCallback(
    (id: UniqueIdentifier) => {
      if (isColumn(id)) return id as string
      return columnIds.find((key) =>
        columns[key].some((item) => getItemValue(item) === id)
      )
    },
    [columns, columnIds, getItemValue, isColumn]
  )

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id)
  }, [])

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      if (onMove) {
        return
      }

      const { active, over } = event
      if (!over) return

      if (isColumn(active.id)) return

      const activeContainer = findContainer(active.id)
      const overContainer = findContainer(over.id)

      if (!activeContainer || !overContainer) {
        return
      }

      if (activeContainer !== overContainer) {
        const activeItems = columns[activeContainer]
        const overItems = columns[overContainer]

        const activeIndex = activeItems.findIndex(
          (item: T) => getItemValue(item) === active.id
        )
        let overIndex = overItems.findIndex(
          (item: T) => getItemValue(item) === over.id
        )

        // If dropping on the column itself, not an item
        if (isColumn(over.id)) {
          overIndex = overItems.length
        }

        const newActiveItems = [...activeItems]
        const newOverItems = [...overItems]
        const [movedItem] = newActiveItems.splice(activeIndex, 1)
        newOverItems.splice(overIndex, 0, movedItem)

        setColumns({
          ...columns,
          [activeContainer]: newActiveItems,
          [overContainer]: newOverItems,
        })
      } else {
        const container = activeContainer
        const activeIndex = columns[container].findIndex(
          (item: T) => getItemValue(item) === active.id
        )
        const overIndex = columns[container].findIndex(
          (item: T) => getItemValue(item) === over.id
        )

        if (activeIndex !== overIndex) {
          setColumns({
            ...columns,
            [container]: arrayMove(columns[container], activeIndex, overIndex),
          })
        }
      }
    },
    [findContainer, getItemValue, isColumn, setColumns, columns, onMove]
  )

  const handleDragCancel = useCallback(() => {
    setActiveId(null)
  }, [])

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      setActiveId(null)

      if (!over) return

      // Handle item move callback
      if (onMove && !isColumn(active.id)) {
        const activeContainer = findContainer(active.id)
        const overContainer = findContainer(over.id)

        if (activeContainer && overContainer) {
          const activeIndex = columns[activeContainer].findIndex(
            (item: T) => getItemValue(item) === active.id
          )
          const overIndex = isColumn(over.id)
            ? columns[overContainer].length
            : columns[overContainer].findIndex(
                (item: T) => getItemValue(item) === over.id
              )

          onMove({
            event,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
          })
        }
        return
      }

      // Handle column reordering
      if (isColumn(active.id) && isColumn(over.id)) {
        const activeIndex = columnIds.indexOf(active.id as string)
        const overIndex = columnIds.indexOf(over.id as string)
        if (activeIndex !== overIndex) {
          const newOrder = arrayMove(
            Object.keys(columns),
            activeIndex,
            overIndex
          )
          const newColumns: Record<string, T[]> = {}
          newOrder.forEach((key) => {
            newColumns[key] = columns[key]
          })
          setColumns(newColumns)
        }
        return
      }

      const activeContainer = findContainer(active.id)
      const overContainer = findContainer(over.id)

      // Handle item reordering within the same column
      if (
        activeContainer &&
        overContainer &&
        activeContainer === overContainer
      ) {
        const container = activeContainer
        const activeIndex = columns[container].findIndex(
          (item: T) => getItemValue(item) === active.id
        )
        const overIndex = columns[container].findIndex(
          (item: T) => getItemValue(item) === over.id
        )

        if (activeIndex !== overIndex) {
          setColumns({
            ...columns,
            [container]: arrayMove(columns[container], activeIndex, overIndex),
          })
        }
      }
    },
    [
      columnIds,
      columns,
      findContainer,
      getItemValue,
      isColumn,
      setColumns,
      onMove,
    ]
  )

  const contextValue = useMemo(
    () => ({
      columns,
      setColumns,
      getItemId: getItemValue,
      columnIds,
      activeId,
      setActiveId,
      findContainer,
      isColumn,
      modifiers,
    }),
    [
      columns,
      setColumns,
      getItemValue,
      columnIds,
      activeId,
      findContainer,
      isColumn,
      modifiers,
    ]
  )

  const Comp = asChild ? Slot.Root : "div"

  return (
    <KanbanContext.Provider value={contextValue}>
      <DndContext
        sensors={sensors}
        modifiers={modifiers}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.Always,
          },
        }}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <Comp
          data-slot="kanban"
          data-dragging={activeId !== null}
          className={cn(activeId !== null && "cursor-grabbing!", className)}
          {...props}
        >
          {children}
        </Comp>
      </DndContext>
    </KanbanContext.Provider>
  )
}

export interface KanbanBoardProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

function KanbanBoard({
  className,
  asChild = false,
  children,
  ...props
}: KanbanBoardProps) {
  const { columnIds } = useContext(KanbanContext)
  const Comp = asChild ? Slot.Root : "div"

  return (
    <SortableContext items={columnIds} strategy={rectSortingStrategy}>
      <Comp
        data-slot="kanban-board"
        className={cn("grid auto-rows-fr gap-4 sm:grid-cols-3", className)}
        {...props}
      >
        {children}
      </Comp>
    </SortableContext>
  )
}

export interface KanbanColumnProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  disabled?: boolean
  asChild?: boolean
}

function KanbanColumn({
  value,
  className,
  asChild = false,
  disabled,
  children,
  ...props
}: KanbanColumnProps) {
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

  const { activeId, isColumn } = useContext(KanbanContext)
  const isColumnDragging = activeId ? isColumn(activeId) : false

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  } as CSSProperties

  const Comp = asChild ? Slot.Root : "div"

  if (isOverlay) {
    return (
      <ColumnContext.Provider
        value={{
          attributes: {} as DraggableAttributes,
          listeners: undefined,
          isDragging: true,
          disabled: false,
        }}
      >
        <Comp
          data-slot="kanban-column"
          data-value={value}
          data-dragging={true}
          className={cn("group/kanban-column flex flex-col", className)}
          {...props}
        >
          {children}
        </Comp>
      </ColumnContext.Provider>
    )
  }

  return (
    <ColumnContext.Provider
      value={{ attributes, listeners, isDragging: isColumnDragging, disabled }}
    >
      <Comp
        data-slot="kanban-column"
        data-value={value}
        data-dragging={isSortableDragging}
        data-disabled={disabled}
        ref={setNodeRef}
        style={style}
        className={cn(
          "group/kanban-column flex flex-col",
          isSortableDragging && "z-50 opacity-50",
          disabled && "opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    </ColumnContext.Provider>
  )
}

export interface KanbanColumnHandleProps extends HTMLAttributes<HTMLDivElement> {
  cursor?: boolean
  asChild?: boolean
}

function KanbanColumnHandle({
  className,
  asChild = false,
  cursor = true,
  children,
  ...props
}: KanbanColumnHandleProps) {
  const { attributes, listeners, isDragging, disabled } =
    useContext(ColumnContext)

  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="kanban-column-handle"
      data-dragging={isDragging}
      data-disabled={disabled}
      {...attributes}
      {...listeners}
      className={cn(
        "opacity-0 transition-opacity group-hover/kanban-column:opacity-100",
        cursor && (isDragging ? "cursor-grabbing!" : "cursor-grab!"),
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export interface KanbanItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  disabled?: boolean
  asChild?: boolean
}

function KanbanItem({
  value,
  className,
  asChild = false,
  disabled,
  children,
  ...props
}: KanbanItemProps) {
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

  const { activeId, isColumn } = useContext(KanbanContext)
  const isItemDragging = activeId ? !isColumn(activeId) : false

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  } as CSSProperties

  const Comp = asChild ? Slot.Root : "div"

  if (isOverlay) {
    return (
      <ItemContext.Provider
        value={{ listeners: undefined, isDragging: true, disabled: false }}
      >
        <Comp
          data-slot="kanban-item"
          data-value={value}
          data-dragging={true}
          className={cn(className)}
          {...props}
        >
          {children}
        </Comp>
      </ItemContext.Provider>
    )
  }

  return (
    <ItemContext.Provider
      value={{ listeners, isDragging: isItemDragging, disabled }}
    >
      <Comp
        data-slot="kanban-item"
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
    </ItemContext.Provider>
  )
}

export interface KanbanItemHandleProps extends HTMLAttributes<HTMLDivElement> {
  cursor?: boolean
  asChild?: boolean
}

function KanbanItemHandle({
  className,
  asChild = false,
  cursor = true,
  children,
  ...props
}: KanbanItemHandleProps) {
  const { listeners, isDragging, disabled } = useContext(ItemContext)

  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="kanban-item-handle"
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

export interface KanbanColumnContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  asChild?: boolean
}

function KanbanColumnContent({
  value,
  className,
  asChild = false,
  children,
  ...props
}: KanbanColumnContentProps) {
  const { columns, getItemId } = useContext(KanbanContext)

  const itemIds = useMemo(
    () => columns[value].map(getItemId),
    [columns, getItemId, value]
  )

  const Comp = asChild ? Slot.Root : "div"

  return (
    <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
      <Comp
        data-slot="kanban-column-content"
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        {children}
      </Comp>
    </SortableContext>
  )
}

export interface KanbanOverlayProps extends Omit<
  React.ComponentProps<typeof DragOverlay>,
  "children"
> {
  children?:
    | ReactNode
    | ((params: {
        value: UniqueIdentifier
        variant: "column" | "item"
      }) => ReactNode)
}

function KanbanOverlay({ children, className, ...props }: KanbanOverlayProps) {
  const { activeId, isColumn, modifiers } = useContext(KanbanContext)
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => setMounted(true), [])

  const variant = activeId ? (isColumn(activeId) ? "column" : "item") : "item"

  const content =
    activeId && children
      ? typeof children === "function"
        ? children({ value: activeId, variant })
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

export {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanColumnContent,
  KanbanOverlay,
}
```

### Kanban board with placeholder overlay (`c-kanban-1`)

Target: `components/examples/c-kanban-1.tsx`

Kanban board with placeholder overlay

```tsx
"use client"

import { ComponentProps, useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/reui/kanban"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface Task {
  id: string
  title: string
  priority: "low" | "medium" | "high"
  description?: string
  assignee?: string
  assigneeAvatar?: string
  dueDate?: string
}

const COLUMN_TITLES: Record<string, string> = {
  backlog: "Backlog",
  inProgress: "In Progress",
  review: "Review",
  done: "Done",
}

interface TaskCardProps extends Omit<
  ComponentProps<typeof KanbanItem>,
  "value" | "children"
> {
  task: Task
  asHandle?: boolean
  isOverlay?: boolean
}

function TaskCard({ task, asHandle, isOverlay, ...props }: TaskCardProps) {
  const cardContent = (
    <Card>
      <CardContent className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="line-clamp-1 text-sm font-medium">{task.title}</span>
          <Badge
            variant={
              task.priority === "high"
                ? "destructive-light"
                : task.priority === "medium"
                  ? "primary-light"
                  : "warning-light"
            }
            className="pointer-events-none h-5 shrink-0 rounded-sm px-1.5 text-xs capitalize"
          >
            {task.priority}
          </Badge>
        </div>
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          {task.assignee && (
            <div className="flex items-center gap-1">
              <Avatar className="size-4">
                <AvatarImage src={task.assigneeAvatar} />
                <AvatarFallback>{task.assignee.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="line-clamp-1">{task.assignee}</span>
            </div>
          )}
          {task.dueDate && (
            <time className="text-[10px] whitespace-nowrap tabular-nums">
              {task.dueDate}
            </time>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <KanbanItem value={task.id} {...props}>
      {asHandle && !isOverlay ? (
        <KanbanItemHandle>{cardContent}</KanbanItemHandle>
      ) : (
        cardContent
      )}
    </KanbanItem>
  )
}

interface TaskColumnProps extends Omit<
  ComponentProps<typeof KanbanColumn>,
  "children"
> {
  tasks: Task[]
  isOverlay?: boolean
}

function TaskColumn({ value, tasks, isOverlay, ...props }: TaskColumnProps) {
  return (
    <KanbanColumn value={value} {...props}>
      <Card className="mb-2.5">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold">
              {COLUMN_TITLES[value]}
            </span>
            <Badge variant="outline">{tasks.length}</Badge>
          </div>
          <KanbanColumnHandle asChild>
            <Button size="icon-xs" variant="ghost">
              <IconPlaceholder
                lucide="GripVerticalIcon"
                tabler="IconGripVertical"
                hugeicons="DragDropVerticalIcon"
                phosphor="DotsSixVerticalIcon"
                remixicon="RiDraggable"
              />
            </Button>
          </KanbanColumnHandle>
        </CardHeader>
        <CardContent>
          <KanbanColumnContent value={value} className="flex flex-col gap-2.5">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                asHandle={!isOverlay}
                isOverlay={isOverlay}
              />
            ))}
          </KanbanColumnContent>
        </CardContent>
      </Card>
    </KanbanColumn>
  )
}

export function Pattern() {
  const [columns, setColumns] = useState<Record<string, Task[]>>({
    backlog: [
      {
        id: "1",
        title: "Add authentication",
        priority: "high",
        assignee: "Alex Johnson",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
        dueDate: "Jan 10, 2025",
      },
      {
        id: "2",
        title: "Create API endpoints",
        priority: "medium",
        assignee: "Sarah Chen",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
        dueDate: "Jan 15, 2025",
      },
      {
        id: "3",
        title: "Write documentation",
        priority: "low",
        assignee: "Michael Rodriguez",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
        dueDate: "Jan 20, 2025",
      },
    ],
    inProgress: [
      {
        id: "4",
        title: "Design system updates",
        priority: "high",
        assignee: "Emma Wilson",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
        dueDate: "Aug 25, 2025",
      },
      {
        id: "5",
        title: "Implement dark mode",
        priority: "medium",
        assignee: "David Kim",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
        dueDate: "Aug 25, 2025",
      },
    ],
    done: [
      {
        id: "7",
        title: "Setup project",
        priority: "high",
        assignee: "Aron Thompson",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
        dueDate: "Sep 25, 2025",
      },
      {
        id: "8",
        title: "Initial commit",
        priority: "low",
        assignee: "James Brown",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
        dueDate: "Sep 20, 2025",
      },
    ],
  })

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid auto-rows-fr grid-cols-3">
        {Object.entries(columns).map(([columnValue, tasks]) => (
          <TaskColumn key={columnValue} value={columnValue} tasks={tasks} />
        ))}
      </KanbanBoard>
      <KanbanOverlay className="bg-muted/10 rounded-md border-2 border-dashed" />
    </Kanban>
  )
}
```

### Kanban board with dynamic overlay (`c-kanban-2`)

Target: `components/examples/c-kanban-2.tsx`

Kanban board with dynamic overlay

```tsx
"use client"

import { ComponentProps, useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/reui/kanban"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface Task {
  id: string
  title: string
  priority: "low" | "medium" | "high"
  description?: string
  assignee?: string
  assigneeAvatar?: string
  dueDate?: string
}

const COLUMN_TITLES: Record<string, string> = {
  backlog: "Backlog",
  inProgress: "In Progress",
  review: "Review",
  done: "Done",
}

interface TaskCardProps extends Omit<
  ComponentProps<typeof KanbanItem>,
  "value" | "children"
> {
  task: Task
  asHandle?: boolean
  isOverlay?: boolean
}

function TaskCard({ task, asHandle, isOverlay, ...props }: TaskCardProps) {
  const cardContent = (
    <Card>
      <CardContent className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="line-clamp-1 text-sm font-medium">{task.title}</span>
          <Badge
            variant={
              task.priority === "high"
                ? "destructive-outline"
                : task.priority === "medium"
                  ? "primary-outline"
                  : "warning-outline"
            }
            className="pointer-events-none h-5 shrink-0 rounded-sm px-1.5 text-[11px] capitalize"
          >
            {task.priority}
          </Badge>
        </div>
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          {task.assignee && (
            <div className="flex items-center gap-1">
              <Avatar className="size-4">
                <AvatarImage src={task.assigneeAvatar} />
                <AvatarFallback>{task.assignee.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="line-clamp-1">{task.assignee}</span>
            </div>
          )}
          {task.dueDate && (
            <time className="text-[10px] whitespace-nowrap tabular-nums">
              {task.dueDate}
            </time>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <KanbanItem value={task.id} {...props}>
      {asHandle && !isOverlay ? (
        <KanbanItemHandle>{cardContent}</KanbanItemHandle>
      ) : (
        cardContent
      )}
    </KanbanItem>
  )
}

interface TaskColumnProps extends Omit<
  ComponentProps<typeof KanbanColumn>,
  "children"
> {
  tasks: Task[]
  isOverlay?: boolean
}

function TaskColumn({ value, tasks, isOverlay, ...props }: TaskColumnProps) {
  return (
    <KanbanColumn value={value} {...props}>
      <Card className="mb-2.5">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold">
              {COLUMN_TITLES[value]}
            </span>
            <Badge variant="outline">{tasks.length}</Badge>
          </div>
          <KanbanColumnHandle asChild>
            <Button size="icon-xs" variant="ghost">
              <IconPlaceholder
                lucide="GripVerticalIcon"
                tabler="IconGripVertical"
                hugeicons="DragDropVerticalIcon"
                phosphor="DotsSixVerticalIcon"
                remixicon="RiDraggable"
              />
            </Button>
          </KanbanColumnHandle>
        </CardHeader>
        <CardContent>
          <KanbanColumnContent
            value={value}
            className="flex flex-col gap-2.5 p-0.5"
          >
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} asHandle={!isOverlay} />
            ))}
          </KanbanColumnContent>
        </CardContent>
      </Card>
    </KanbanColumn>
  )
}

export function Pattern() {
  const [columns, setColumns] = useState<Record<string, Task[]>>({
    backlog: [
      {
        id: "1",
        title: "Add authentication",
        priority: "high",
        assignee: "Alex Johnson",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
        dueDate: "Jan 10, 2025",
      },
      {
        id: "2",
        title: "Create API endpoints",
        priority: "medium",
        assignee: "Sarah Chen",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
        dueDate: "Jan 15, 2025",
      },
      {
        id: "3",
        title: "Write documentation",
        priority: "low",
        assignee: "Michael Rodriguez",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
        dueDate: "Jan 20, 2025",
      },
    ],
    inProgress: [
      {
        id: "4",
        title: "Design system updates",
        priority: "high",
        assignee: "Emma Wilson",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
        dueDate: "Aug 25, 2025",
      },
      {
        id: "5",
        title: "Implement dark mode",
        priority: "medium",
        assignee: "David Kim",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
        dueDate: "Aug 25, 2025",
      },
    ],
    done: [
      {
        id: "7",
        title: "Setup project",
        priority: "high",
        assignee: "Aron Thompson",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
        dueDate: "Sep 25, 2025",
      },
      {
        id: "8",
        title: "Initial commit",
        priority: "low",
        assignee: "James Brown",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
        dueDate: "Sep 20, 2025",
      },
    ],
  })

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid auto-rows-fr grid-cols-3">
        {Object.entries(columns).map(([columnValue, tasks]) => (
          <TaskColumn key={columnValue} value={columnValue} tasks={tasks} />
        ))}
      </KanbanBoard>
      <KanbanOverlay>
        {({ value, variant }) => {
          if (variant === "column") {
            const tasks = columns[value] ?? []
            return <TaskColumn value={String(value)} tasks={tasks} isOverlay />
          }

          const task = Object.values(columns)
            .flat()
            .find((task) => task.id === value)

          if (!task) return null

          return <TaskCard task={task} isOverlay />
        }}
      </KanbanOverlay>
    </Kanban>
  )
}
```

### Kanban board with frame columns (`c-kanban-3`)

Target: `components/examples/c-kanban-3.tsx`

Kanban board with frame columns

```tsx
"use client"

import { ComponentProps, useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/reui/kanban"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface Task {
  id: string
  title: string
  label: string
  labelVariant:
    | "primary-light"
    | "success-light"
    | "warning-light"
    | "destructive-light"
    | "info-light"
}

const COLUMNS: Record<string, { title: string; icon: React.ReactNode }> = {
  todo: {
    title: "To Do",
    icon: (
      <IconPlaceholder
        lucide="CircleIcon"
        tabler="IconCircle"
        hugeicons="CircleIcon"
        phosphor="CircleIcon"
        remixicon="RiCircleLine"
        className="size-4"
      />
    ),
  },
  doing: {
    title: "In Progress",
    icon: (
      <IconPlaceholder
        lucide="CircleDot"
        tabler="IconCircleDot"
        hugeicons="RefreshDotIcon"
        phosphor="DotsThreeCircleIcon"
        remixicon="RiRecordCircleLine"
        className="text-muted-foreground size-4"
      />
    ),
  },
  done: {
    title: "Done",
    icon: (
      <IconPlaceholder
        lucide="CircleCheckIcon"
        tabler="IconCircleCheck"
        hugeicons="CheckmarkCircle01Icon"
        phosphor="CheckCircleIcon"
        remixicon="RiCheckboxCircleLine"
        className="size-4"
      />
    ),
  },
}

function TaskCard({
  task,
  asHandle,
  ...props
}: { task: Task; asHandle?: boolean } & Omit<
  ComponentProps<typeof KanbanItem>,
  "value" | "children"
>) {
  const content = (
    <Frame variant="ghost" spacing="sm" className="p-0">
      <FramePanel className="p-3">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">{task.title}</span>
          <Badge variant={task.labelVariant} size="sm" className="w-fit">
            {task.label}
          </Badge>
        </div>
      </FramePanel>
    </Frame>
  )

  return (
    <KanbanItem value={task.id} {...props}>
      {asHandle ? <KanbanItemHandle>{content}</KanbanItemHandle> : content}
    </KanbanItem>
  )
}

export function Pattern() {
  const [columns, setColumns] = useState<Record<string, Task[]>>({
    todo: [
      {
        id: "1",
        title: "Design landing page",
        label: "Design",
        labelVariant: "info-light",
      },
      {
        id: "2",
        title: "Set up CI/CD pipeline",
        label: "DevOps",
        labelVariant: "warning-light",
      },
      {
        id: "3",
        title: "Write unit tests",
        label: "Testing",
        labelVariant: "success-light",
      },
    ],
    doing: [
      {
        id: "4",
        title: "Implement auth flow",
        label: "Backend",
        labelVariant: "primary-light",
      },
      {
        id: "5",
        title: "Create component library",
        label: "Frontend",
        labelVariant: "destructive-light",
      },
    ],
    done: [
      {
        id: "6",
        title: "Project kickoff",
        label: "Planning",
        labelVariant: "info-light",
      },
    ],
  })

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid auto-rows-fr grid-cols-3">
        {Object.entries(columns).map(([columnId, tasks]) => {
          const col = COLUMNS[columnId]
          return (
            <KanbanColumn key={columnId} value={columnId}>
              <Frame spacing="sm" className="h-full">
                <FrameHeader className="flex flex-row items-center gap-2">
                  {col.icon}
                  <FrameTitle>{col.title}</FrameTitle>
                  <Badge variant="outline" size="sm" className="ml-auto">
                    {tasks.length}
                  </Badge>
                </FrameHeader>
                <KanbanColumnContent
                  value={columnId}
                  className="flex flex-col gap-2 p-0.5"
                >
                  {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} asHandle />
                  ))}
                </KanbanColumnContent>
              </Frame>
            </KanbanColumn>
          )
        })}
      </KanbanBoard>
      <KanbanOverlay className="bg-muted/10 rounded-md border-2 border-dashed" />
    </Kanban>
  )
}
```

### Minimal kanban with stacked frame (`c-kanban-4`)

Target: `components/examples/c-kanban-4.tsx`

Minimal kanban with stacked frame

```tsx
"use client"

import { ComponentProps, useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/reui/kanban"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface Task {
  id: string
  title: string
  assignee: string
  assigneeAvatar: string
  progress: number
}

function TaskCard({
  task,
  asHandle,
  ...props
}: { task: Task; asHandle?: boolean } & Omit<
  ComponentProps<typeof KanbanItem>,
  "value" | "children"
>) {
  const content = (
    <Frame variant="ghost" spacing="xs" className="p-0">
      <FramePanel className="space-y-3 p-3">
        <p className="text-sm font-medium">{task.title}</p>
        <Progress value={task.progress} className="h-1" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Avatar className="size-5">
              <AvatarImage src={task.assigneeAvatar} alt={task.assignee} />
              <AvatarFallback className="text-[9px]">
                {task.assignee.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-xs">
              {task.assignee}
            </span>
          </div>
          <span className="text-muted-foreground text-xs">
            {task.progress}%
          </span>
        </div>
      </FramePanel>
    </Frame>
  )

  return (
    <KanbanItem value={task.id} {...props}>
      {asHandle ? <KanbanItemHandle>{content}</KanbanItemHandle> : content}
    </KanbanItem>
  )
}

export function Pattern() {
  const [columns, setColumns] = useState<Record<string, Task[]>>({
    planning: [
      {
        id: "1",
        title: "Research competitors",
        assignee: "Alex J.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
        progress: 20,
      },
    ],
    active: [
      {
        id: "2",
        title: "Build dashboard",
        assignee: "Sarah C.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
        progress: 65,
      },
      {
        id: "3",
        title: "API integration",
        assignee: "David K.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
        progress: 40,
      },
    ],
    completed: [
      {
        id: "4",
        title: "Setup repository",
        assignee: "Emma W.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
        progress: 100,
      },
    ],
  })

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid auto-rows-fr grid-cols-3">
        {Object.entries(columns).map(([columnId, tasks]) => (
          <KanbanColumn key={columnId} value={columnId}>
            <Frame stacked spacing="sm" className="h-full">
              <FrameHeader>
                <div className="flex items-center justify-between">
                  <FrameTitle className="capitalize">{columnId}</FrameTitle>
                  <Badge variant="outline" size="sm">
                    {tasks.length}
                  </Badge>
                </div>
                <FrameDescription>
                  {columnId === "planning" && "Tasks being scoped"}
                  {columnId === "active" && "Currently in development"}
                  {columnId === "completed" && "Finished and deployed"}
                </FrameDescription>
              </FrameHeader>
              <KanbanColumnContent
                value={columnId}
                className="flex flex-col gap-2 p-0.5"
              >
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} asHandle />
                ))}
              </KanbanColumnContent>
            </Frame>
          </KanbanColumn>
        ))}
      </KanbanBoard>
      <KanbanOverlay className="bg-muted/10 rounded-md border-2 border-dashed" />
    </Kanban>
  )
}
```

### Feature roadmap kanban with progress (`c-kanban-5`)

Target: `components/examples/c-kanban-5.tsx`

Feature roadmap kanban with progress

```tsx
"use client"

import { ComponentProps, useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/reui/kanban"

import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface Feature {
  id: string
  title: string
  description: string
  progress: number
  votes: number
}

const COLUMNS: Record<string, { title: string; color: string }> = {
  planned: { title: "Planned", color: "bg-blue-500" },
  building: { title: "Building", color: "bg-yellow-500" },
  testing: { title: "Testing", color: "bg-purple-500" },
  shipped: { title: "Shipped", color: "bg-green-500" },
}

function FeatureCard({
  feature,
  asHandle,
  ...props
}: { feature: Feature; asHandle?: boolean } & Omit<
  ComponentProps<typeof KanbanItem>,
  "value" | "children"
>) {
  const content = (
    <Frame variant="ghost" spacing="sm" className="p-0">
      <FramePanel className="p-3">
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-medium">{feature.title}</span>
          <p className="text-muted-foreground line-clamp-2 text-xs">
            {feature.description}
          </p>
          <Progress value={feature.progress} className="h-1.5" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-[10px] tabular-nums">
              {feature.progress}% complete
            </span>
            <div className="flex items-center gap-1">
              <IconPlaceholder
                lucide="ArrowUpIcon"
                tabler="IconArrowUp"
                hugeicons="ArrowUp02Icon"
                phosphor="ArrowUpIcon"
                remixicon="RiArrowUpLine"
                className="text-muted-foreground size-3"
              />
              <span className="text-muted-foreground text-xs tabular-nums">
                {feature.votes}
              </span>
            </div>
          </div>
        </div>
      </FramePanel>
    </Frame>
  )

  return (
    <KanbanItem value={feature.id} {...props}>
      {asHandle ? <KanbanItemHandle>{content}</KanbanItemHandle> : content}
    </KanbanItem>
  )
}

export function Pattern() {
  const [columns, setColumns] = useState<Record<string, Feature[]>>({
    planned: [
      {
        id: "f1",
        title: "AI-powered search",
        description: "Natural language search across all content",
        progress: 0,
        votes: 142,
      },
      {
        id: "f2",
        title: "Custom webhooks",
        description: "User-configurable webhook endpoints",
        progress: 0,
        votes: 98,
      },
    ],
    building: [
      {
        id: "f3",
        title: "Real-time collaboration",
        description: "Multi-user editing with presence indicators",
        progress: 65,
        votes: 234,
      },
      {
        id: "f4",
        title: "API v2 migration",
        description: "RESTful API with OpenAPI 3.0 spec",
        progress: 40,
        votes: 176,
      },
    ],
    shipped: [
      {
        id: "f6",
        title: "Dark mode",
        description: "System-aware theme with manual override",
        progress: 100,
        votes: 456,
      },
      {
        id: "f7",
        title: "Export to CSV",
        description: "Bulk data export with custom fields",
        progress: 100,
        votes: 189,
      },
    ],
  })

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid grid-cols-3">
        {Object.entries(columns).map(([colId, features]) => {
          const col = COLUMNS[colId]
          return (
            <KanbanColumn key={colId} value={colId}>
              <Frame spacing="sm" className="h-full">
                <FrameHeader className="flex flex-row items-center gap-2">
                  <div className={cn("size-2 rounded-full", col.color)} />
                  <FrameTitle className="capitalize">{col.title}</FrameTitle>
                  <Badge variant="outline" size="sm" className="ml-auto">
                    {features.length}
                  </Badge>
                </FrameHeader>
                <KanbanColumnContent
                  value={colId}
                  className="flex flex-col gap-2 p-0.5"
                >
                  {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} asHandle />
                  ))}
                </KanbanColumnContent>
              </Frame>
            </KanbanColumn>
          )
        })}
      </KanbanBoard>
      <KanbanOverlay className="bg-muted/10 rounded-md border-2 border-dashed" />
    </Kanban>
  )
}
```
