# Pagination (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

15 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-pagination-1` | Basic pagination. | registry:block | Basic pagination. |
| `c-pagination-2` | Pagination without labels. | registry:block | Pagination without labels. |
| `c-pagination-3` | Pagination with hover effect. | registry:block | Pagination with hover effect. |
| `c-pagination-4` | Pagination with circle buttons. | registry:block | Pagination with circle buttons. |
| `c-pagination-5` | Pagination with go-to-page input | registry:block | Pagination with go-to-page input |
| `c-pagination-6` | Numbered pagination in card | registry:block | Numbered pagination in card |
| `c-pagination-7` | Pagination with arrows buttons | registry:block | Pagination with arrows buttons |
| `c-pagination-8` | Pagination with page info on center | registry:block | Pagination with page info on center |
| `c-pagination-9` | Pagination with page info on left | registry:block | Pagination with page info on left |
| `c-pagination-10` | Pagination with ellipsis indicator | registry:block | Pagination with ellipsis indicator |
| `c-pagination-11` | Pagination with outline style buttons | registry:block | Pagination with outline style buttons |
| `c-pagination-12` | Rows per page select with range info and first/prev/next/last icons | registry:block | Rows per page select with range info and first/prev/next/last icons |
| `c-pagination-13` | Pagination with page select dropdown and first/last navigation | registry:block | Pagination with page select dropdown and first/last navigation |
| `c-pagination-14` | Numbered pagination with go-to-page input | registry:block | Numbered pagination with go-to-page input |
| `c-pagination-15` | Pagination with page info, numbered pages, ellipsis, and per-page select | registry:block | Pagination with page info, numbered pages, ellipsis, and per-page select |

## Source

### Basic pagination. (`c-pagination-1`)

Target: `components/examples/c-pagination-1.tsx`

Basic pagination.

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination without labels. (`c-pagination-2`)

Target: `components/examples/c-pagination-2.tsx`

Pagination without labels.

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to previous page" size="icon">
            <IconPlaceholder
              lucide="ChevronLeftIcon"
              tabler="IconChevronLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="CaretLeftIcon"
              remixicon="RiArrowLeftSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to next page" size="icon">
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with hover effect. (`c-pagination-3`)

Target: `components/examples/c-pagination-3.tsx`

Pagination with hover effect.

```tsx
"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="hover:border-border hover:border!"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="hover:border-border hover:border!"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with circle buttons. (`c-pagination-4`)

Target: `components/examples/c-pagination-4.tsx`

Pagination with circle buttons.

```tsx
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="rounded-full" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="rounded-full">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive className={cn("rounded-full")}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="rounded-full">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="rounded-full" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with go-to-page input (`c-pagination-5`)

Target: `components/examples/c-pagination-5.tsx`

Pagination with go-to-page input

```tsx
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination className="w-full max-w-xs">
      <PaginationContent className="justify-between gap-4">
        <PaginationItem className="flex items-center gap-1">
          <PaginationLink href="#" size="icon" aria-label="Go to previous page">
            <IconPlaceholder
              lucide="ChevronLeftIcon"
              tabler="IconChevronLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="CaretLeftIcon"
              remixicon="RiArrowLeftSLine"
              className="size-4"
            />
          </PaginationLink>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
          <PaginationLink href="#">2</PaginationLink>
          <PaginationLink href="#">3</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink href="#" size="icon" aria-label="Go to next page">
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            Go to page
          </span>
          <Input
            type="number"
            min={1}
            max={10}
            defaultValue={1}
            className="h-9 w-14 text-center"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Numbered pagination in card (`c-pagination-6`)

Target: `components/examples/c-pagination-6.tsx`

Numbered pagination in card

```tsx
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="p-2">
      <CardContent className="p-0">
        <Pagination>
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon"
                aria-label="Go to previous page"
                className="hover:bg-muted h-8 w-8 rounded-full"
              >
                <IconPlaceholder
                  lucide="ChevronLeftIcon"
                  tabler="IconChevronLeft"
                  hugeicons="ArrowLeft01Icon"
                  phosphor="CaretLeftIcon"
                  remixicon="RiArrowLeftSLine"
                  className="size-4"
                />
              </PaginationLink>
            </PaginationItem>

            {[1, 2, 3].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page === 1}
                  className={
                    page === 1
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-muted"
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            {[10, 11, 12].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink href="#">{page}</PaginationLink>
              </PaginationItem>
            ))}

            {/* Next */}
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon"
                aria-label="Go to next page"
                className="hover:bg-muted h-8 w-8 rounded-full"
              >
                <IconPlaceholder
                  lucide="ChevronRightIcon"
                  tabler="IconChevronRight"
                  hugeicons="ArrowRight01Icon"
                  phosphor="CaretRightIcon"
                  remixicon="RiArrowRightSLine"
                  className="size-4"
                />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  )
}
```

### Pagination with arrows buttons (`c-pagination-7`)

Target: `components/examples/c-pagination-7.tsx`

Pagination with arrows buttons

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination className="w-full max-w-xs">
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationLink href="#" size="default" className="gap-2">
            <IconPlaceholder
              lucide="ArrowLeftIcon"
              tabler="IconArrowLeft"
              hugeicons="ArrowLeft02Icon"
              phosphor="ArrowLeftIcon"
              remixicon="RiArrowLeftLine"
              className="size-4"
            />
            Previous
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default" className="gap-2">
            Next
            <IconPlaceholder
              lucide="ArrowRightIcon"
              tabler="IconArrowRight"
              hugeicons="ArrowRight02Icon"
              phosphor="ArrowRightIcon"
              remixicon="RiArrowRightLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with page info on center (`c-pagination-8`)

Target: `components/examples/c-pagination-8.tsx`

Pagination with page info on center

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination className="w-full max-w-xs">
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationLink href="#" size="icon" aria-label="Go to previous page">
            <IconPlaceholder
              lucide="ChevronLeftIcon"
              tabler="IconChevronLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="CaretLeftIcon"
              remixicon="RiArrowLeftSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <span className="text-muted-foreground text-xs">
            Page <span className="text-foreground font-medium">1</span> of{" "}
            <span className="text-foreground font-medium">10</span>
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="icon" aria-label="Go to next page">
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with page info on left (`c-pagination-9`)

Target: `components/examples/c-pagination-9.tsx`

Pagination with page info on left

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Pattern() {
  return (
    <Pagination className="w-full max-w-xs">
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <span className="text-muted-foreground text-xs">
            Page <span className="text-foreground font-medium">1</span> of{" "}
            <span className="text-foreground font-medium">10</span>
          </span>
        </PaginationItem>
        <PaginationItem className="flex gap-1">
          <PaginationPrevious href="#" />
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with ellipsis indicator (`c-pagination-10`)

Target: `components/examples/c-pagination-10.tsx`

Pagination with ellipsis indicator

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with outline style buttons (`c-pagination-11`)

Target: `components/examples/c-pagination-11.tsx`

Pagination with outline style buttons

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent className="rounded-md gap-0 overflow-hidden border">
        <PaginationItem>
          <PaginationLink
            href="#"
            size="icon"
            aria-label="Go to previous page"
            className="border-border rounded-none border-0 border-e"
          >
            <IconPlaceholder
              lucide="ChevronLeftIcon"
              tabler="IconChevronLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="CaretLeftIcon"
              remixicon="RiArrowLeftSLine"
            />
          </PaginationLink>
        </PaginationItem>

        {
          /* Page numbers */
          Array.from({ length: 4 }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={index === 2}
                className="data-[active=true]:bg-muted border-border rounded-none border-0 border-e"
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))
        }

        <PaginationItem className="border-border border-0 border-e">
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            size="icon"
            aria-label="Go to next page"
            className="rounded-none border-0"
          >
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
            />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Rows per page select with range info and first/prev/next/last icons (`c-pagination-12`)

Target: `components/examples/c-pagination-12.tsx`

Rows per page select with range info and first/prev/next/last icons

```tsx
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <PaginationItem className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            Rows per page
          </span>
          <NativeSelect className="w-18" defaultValue="25">
            <NativeSelectOption value="10">10</NativeSelectOption>
            <NativeSelectOption value="25">25</NativeSelectOption>
            <NativeSelectOption value="50">50</NativeSelectOption>
            <NativeSelectOption value="100">100</NativeSelectOption>
          </NativeSelect>
        </PaginationItem>
        <PaginationItem className="flex items-center gap-3">
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            1-25 of 100
          </span>
          <div className="flex gap-1">
            <PaginationLink href="#" size="icon" aria-label="Go to first page">
              <IconPlaceholder
                lucide="ChevronFirstIcon"
                tabler="IconChevronLeftPipe"
                hugeicons="ArrowLeft03Icon"
                phosphor="CaretLineLeftIcon"
                remixicon="RiSkipLeftLine"
                className="size-4"
              />
            </PaginationLink>
            <PaginationLink
              href="#"
              size="icon"
              aria-label="Go to previous page"
            >
              <IconPlaceholder
                lucide="ChevronLeftIcon"
                tabler="IconChevronLeft"
                hugeicons="ArrowLeft01Icon"
                phosphor="CaretLeftIcon"
                remixicon="RiArrowLeftSLine"
                className="size-4"
              />
            </PaginationLink>
            <PaginationLink href="#" size="icon" aria-label="Go to next page">
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                className="size-4"
              />
            </PaginationLink>
            <PaginationLink href="#" size="icon" aria-label="Go to last page">
              <IconPlaceholder
                lucide="ChevronLastIcon"
                tabler="IconChevronRightPipe"
                hugeicons="ArrowRight03Icon"
                phosphor="CaretLineRightIcon"
                remixicon="RiSkipRightLine"
                className="size-4"
              />
            </PaginationLink>
          </div>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with page select dropdown and first/last navigation (`c-pagination-13`)

Target: `components/examples/c-pagination-13.tsx`

Pagination with page select dropdown and first/last navigation

```tsx
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" size="icon" aria-label="Go to first page">
            <IconPlaceholder
              lucide="ChevronFirstIcon"
              tabler="IconChevronLeftPipe"
              hugeicons="ArrowLeft03Icon"
              phosphor="CaretLineLeftIcon"
              remixicon="RiSkipLeftLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="icon" aria-label="Go to previous page">
            <IconPlaceholder
              lucide="ChevronLeftIcon"
              tabler="IconChevronLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="CaretLeftIcon"
              remixicon="RiArrowLeftSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <NativeSelect className="w-26" defaultValue="1">
            <NativeSelectOption value="1">Page 1</NativeSelectOption>
            <NativeSelectOption value="2">Page 2</NativeSelectOption>
            <NativeSelectOption value="3">Page 3</NativeSelectOption>
            <NativeSelectOption value="4">Page 4</NativeSelectOption>
            <NativeSelectOption value="5">Page 5</NativeSelectOption>
            <NativeSelectOption value="6">Page 6</NativeSelectOption>
            <NativeSelectOption value="7">Page 7</NativeSelectOption>
            <NativeSelectOption value="8">Page 8</NativeSelectOption>
            <NativeSelectOption value="9">Page 9</NativeSelectOption>
            <NativeSelectOption value="10">Page 10</NativeSelectOption>
          </NativeSelect>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="icon" aria-label="Go to next page">
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="icon" aria-label="Go to last page">
            <IconPlaceholder
              lucide="ChevronLastIcon"
              tabler="IconChevronRightPipe"
              hugeicons="ArrowRight03Icon"
              phosphor="CaretLineRightIcon"
              remixicon="RiSkipRightLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Numbered pagination with go-to-page input (`c-pagination-14`)

Target: `components/examples/c-pagination-14.tsx`

Numbered pagination with go-to-page input

```tsx
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <PaginationItem className="flex items-center gap-1">
          <PaginationLink href="#" size="icon" aria-label="Go to previous page">
            <IconPlaceholder
              lucide="ChevronLeftIcon"
              tabler="IconChevronLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="CaretLeftIcon"
              remixicon="RiArrowLeftSLine"
              className="size-4"
            />
          </PaginationLink>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
          <PaginationLink href="#">2</PaginationLink>
          <PaginationLink href="#">3</PaginationLink>
          <PaginationLink href="#">4</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink href="#" size="icon" aria-label="Go to next page">
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              className="size-4"
            />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            Go to page
          </span>
          <Input
            type="number"
            min={1}
            max={10}
            defaultValue={1}
            className="h-9 w-16 text-center"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

### Pagination with page info, numbered pages, ellipsis, and per-page select (`c-pagination-15`)

Target: `components/examples/c-pagination-15.tsx`

Pagination with page info, numbered pages, ellipsis, and per-page select

```tsx
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <span className="text-muted-foreground text-sm">
            Page <span className="text-foreground font-medium">1</span> of{" "}
            <span className="text-foreground font-medium">10</span>
          </span>
        </PaginationItem>
        <PaginationItem className="flex items-center gap-1">
          <PaginationPrevious href="#" />
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
          <PaginationLink href="#">2</PaginationLink>
          <PaginationLink href="#">3</PaginationLink>
          <PaginationLink href="#">4</PaginationLink>
          <PaginationEllipsis />
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationItem>
          <NativeSelect className="w-28">
            <NativeSelectOption value="10">10 / page</NativeSelectOption>
            <NativeSelectOption value="20">20 / page</NativeSelectOption>
            <NativeSelectOption value="50">50 / page</NativeSelectOption>
            <NativeSelectOption value="100">100 / page</NativeSelectOption>
          </NativeSelect>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```
