"use client"

import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "./button"
import { ScrollArea, ScrollBar } from "./scroll-area"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty"

import { Skeleton } from "./skeleton"
import { cn } from "@/lib/utils"
import { XIcon, type LucideIcon } from "lucide-react"

function isRowInteractionTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false
  }

  return Boolean(
    target.closest(
      'button, a, input, select, textarea, label, [role="button"], [role="menuitem"], [data-slot="dropdown-menu-trigger"]'
    )
  )
}

interface DataTableState {
  icon?: LucideIcon
  title?: string
  description?: string
  onAction?: () => void
  actionLabel?: string
}

export interface DataTableRowDetails<TData> {
  title: (row: TData) => string
  description?: (row: TData) => string
  render: (row: TData) => React.ReactNode
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]

  loading?: boolean
  error?: boolean

  empty?: DataTableState
  errorState?: DataTableState

  containerClassName?: string

  skeletonRows?: number

  /** Al hacer clic en una fila (el padre controla el dialog/drawer) */
  onRowClick?: (row: TData) => void
}

interface DataTableSkeletonProps {
  columns: ColumnDef<any, any>[]
  rows?: number
}

interface DataTablePaginationProps {
  pageIndex: number
  pageCount: number
  canPreviousPage: boolean
  canNextPage: boolean
  onPageChange: (page: number) => void
}

interface DataTableStateRowProps {
  columnsLength: number
  icon?: LucideIcon
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

function DataTableSkeleton({
  columns,
  rows = 10,
}: DataTableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {columns.map((_, columnIndex) => (
            <TableCell key={columnIndex}>
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  )
}

function DataTableStateRow({
  columnsLength,
  icon: Icon = XIcon,
  title,
  description,
  actionLabel,
  onAction,
}: DataTableStateRowProps) {
  return (
    <TableRow>
      <TableCell colSpan={columnsLength} className="h-64">
        <Empty>
          <EmptyMedia>
            <Icon className="size-5" />
          </EmptyMedia>

          <EmptyHeader>
            <EmptyTitle>{title}</EmptyTitle>

            <EmptyDescription>{description}</EmptyDescription>
          </EmptyHeader>

          {(actionLabel || onAction) && (
            <EmptyContent>
              <Button onClick={onAction}>
                {actionLabel ?? "Volver a intentar"}
              </Button>
            </EmptyContent>
          )}
        </Empty>
      </TableCell>
    </TableRow>
  )
}

function DataTablePagination({
  pageIndex,
  pageCount,
  canPreviousPage,
  canNextPage,
  onPageChange,
}: DataTablePaginationProps) {
  if (pageCount <= 1) return null

  const generatePages = () => {
    const pages: (number | "...")[] = []

    if (pageCount <= 7) {
      return Array.from({ length: pageCount }, (_, i) => i)
    }

    pages.push(0)

    if (pageIndex > 2) {
      pages.push("...")
    }

    const start = Math.max(1, pageIndex - 1)
    const end = Math.min(pageCount - 2, pageIndex + 1)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (pageIndex < pageCount - 3) {
      pages.push("...")
    }

    pages.push(pageCount - 1)

    return pages
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 py-4">
      <Button
        variant="outline"
        disabled={!canPreviousPage}
        onClick={() => onPageChange(0)}
      >
        Primera
      </Button>

      {generatePages().map((page, index) =>
        page === "..." ? (
          <div
            key={`ellipsis-${index}`}
            className="text-muted-foreground px-2"
          >
            ...
          </div>
        ) : (
          <Button
            key={page}
            variant={page === pageIndex ? "default" : "outline"}
            onClick={() => onPageChange(page)}
          >
            {page + 1}
          </Button>
        )
      )}

      <Button
        variant="outline"
        disabled={!canNextPage}
        onClick={() => onPageChange(pageCount - 1)}
      >
        Última
      </Button>
    </div>
  )
}

export function DataTable<TData, TValue>({
  columns,
  data,

  loading = false,
  error = false,

  empty,
  errorState,

  containerClassName,

  skeletonRows = 10,

  onRowClick,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  const rows = table.getRowModel().rows

  const pageIndex = table.getState().pagination.pageIndex
  const pageCount = table.getPageCount()

  return (
    <div className="space-y-4">
      <ScrollArea
        className={cn(
          "w-full rounded-none border",
          "[&_[data-slot=table-container]]:overflow-visible",
          containerClassName
        )}
      >
        <Table className="border-separate border-spacing-0">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "bg-background/95 sticky top-0 z-2 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60"
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {error ? (
              <DataTableStateRow
                columnsLength={columns.length}
                icon={errorState?.icon}
                title={
                  errorState?.title ??
                  "No se pudieron cargar los datos"
                }
                description={
                  errorState?.description ??
                  "Ocurrió un error al obtener los datos."
                }
                actionLabel={errorState?.actionLabel}
                onAction={errorState?.onAction}
              />
            ) : loading ? (
              <DataTableSkeleton
                columns={columns}
                rows={skeletonRows}
              />
            ) : rows.length ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={
                    row.getIsSelected()
                      ? "selected"
                      : undefined
                  }
                  className={cn(
                    onRowClick &&
                      "cursor-pointer hover:bg-muted/50 focus-visible:bg-muted/50"
                  )}
                  tabIndex={onRowClick ? 0 : undefined}
                  onClick={(event) => {
                    if (!onRowClick || isRowInteractionTarget(event.target)) {
                      return
                    }
                    onRowClick(row.original)
                  }}
                  onKeyDown={(event) => {
                    if (
                      !onRowClick ||
                      (event.key !== "Enter" && event.key !== " ")
                    ) {
                      return
                    }
                    event.preventDefault()
                    onRowClick(row.original)
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <DataTableStateRow
                columnsLength={columns.length}
                icon={empty?.icon}
                title={
                  empty?.title ??
                  "No se encontraron resultados"
                }
                description={
                  empty?.description ??
                  "No se encontraron resultados."
                }
                actionLabel={empty?.actionLabel}
                onAction={empty?.onAction}
              />
            )}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <DataTablePagination
        pageIndex={pageIndex}
        pageCount={pageCount}
        canPreviousPage={table.getCanPreviousPage()}
        canNextPage={table.getCanNextPage()}
        onPageChange={table.setPageIndex}
      />
    </div>
  )
}