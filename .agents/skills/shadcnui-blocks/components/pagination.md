# Pagination (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/pagination](https://www.shadcnui-blocks.com/components/pagination).
15 variant(s). Install base UI with `pnpm dlx shadcn@latest add pagination` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `pagination-01` | Default Pagination | A default pagination component |
| `pagination-02` | Pagination with Primary Buttons | A pagination component with primary button styling |
| `pagination-03` | Pagination with Secondary Buttons | A pagination component with secondary button styling |
| `pagination-04` | Pagination with Rounded Buttons | A pagination component with rounded button styling |
| `pagination-05` | Pagination with Icon | A pagination component with icons |
| `pagination-06` | Pagination with First/Last Page | A pagination component with first and last page navigation |
| `pagination-07` | Bordered Pagination | A pagination component with bordered styling |
| `pagination-08` | Tabs Pagination | A pagination component with tabs styling |
| `pagination-09` | Secondary Tabs Pagination | A pagination component with secondary tabs styling |
| `pagination-10` | Pagination with Icon and Label | A pagination component with icons and labels |
| `pagination-11` | Numberless Pagination | A pagination component without page numbers |
| `pagination-12` | Numberless Pagination with Text | A pagination component without numbers but with text |
| `pagination-13` | Pagination with Ellipsis | A pagination component with ellipsis for long page ranges |
| `pagination-14` | Table Pagination | A pagination component designed for tables |
| `pagination-15` | Pagination with text | A pagination component with text |

## Variant source

### Default Pagination (`pagination-01`)

A default pagination component

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationDemo() {
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
  );
}
```

### Pagination with Primary Buttons (`pagination-02`)

A pagination component with primary button styling

```tsx
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationWithPrimaryButton() {
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
          <PaginationLink
            className={cn(
              "shadow-none! hover:text-primary-foreground! dark:bg-primary dark:hover:bg-primary/90",
              buttonVariants({
                variant: "default",
                size: "icon",
              })
            )}
            href="#"
            isActive
          >
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
  );
}
```

### Pagination with Secondary Buttons (`pagination-03`)

A pagination component with secondary button styling

```tsx
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationWithSecondaryButton() {
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
          <PaginationLink
            className={cn(
              "border-none! shadow-none! hover:text-secondary-foreground!",
              buttonVariants({
                variant: "secondary",
                size: "icon",
              })
            )}
            href="#"
            isActive
          >
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
  );
}
```

### Pagination with Rounded Buttons (`pagination-04`)

A pagination component with rounded button styling

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const pages = [1, 2, 3];

export default function PaginationWithRoundedButton() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className="rounded-full"
              href={`#${page}`}
              isActive={page === 2}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Pagination with Icon (`pagination-05`)

A pagination component with icons

```tsx
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function PaginationWithIcon() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink aria-label="Go to previous page" href="#" size="icon">
            <ChevronsLeft className="h-4 w-4" />
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
          <PaginationLink aria-label="Go to next page" href="#" size="icon">
            <ChevronsRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Pagination with First/Last Page (`pagination-06`)

A pagination component with first and last page navigation

```tsx
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function PaginationWithFirstAndLastPageNavigation() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink aria-label="Go to first page" href="#" size="icon">
            <ChevronFirst className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink aria-label="Go to previous page" href="#" size="icon">
            <ChevronLeft className="h-4 w-4" />
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
          <PaginationLink aria-label="Go to next page" href="#" size="icon">
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink aria-label="Go to last page" href="#" size="icon">
            <ChevronLast className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Bordered Pagination (`pagination-07`)

A pagination component with bordered styling

```tsx
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const pages = [1, 2, 3];

export default function PaginationBordered() {
  return (
    <Pagination>
      <PaginationContent className="gap-0 divide-x overflow-hidden rounded-lg border">
        <PaginationItem>
          <PaginationPrevious className="rounded-none" href="#" />
        </PaginationItem>
        {pages.map((page) => {
          const isActive = page === 2;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                className={cn(
                  {
                    [buttonVariants({
                      variant: "default",
                      className:
                        "hover:text-primary-foreground! dark:bg-primary dark:hover:bg-primary/90",
                    })]: isActive,
                  },
                  "rounded-none border-none"
                )}
                href={`#${page}`}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext className="rounded-none" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Tabs Pagination (`pagination-08`)

A pagination component with tabs styling

```tsx
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const pages = [1, 2, 3];

export default function PaginationTabs() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="border" href="#" />
        </PaginationItem>

        {pages.map((page) => {
          const isActive = page === 2;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                className={cn({
                  [buttonVariants({
                    variant: "default",
                    className:
                      "shadow-none! hover:text-primary-foreground! dark:bg-primary dark:hover:bg-primary/90",
                  })]: isActive,
                  border: !isActive,
                })}
                href={`#${page}`}
                isActive={page === 2}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext className="border" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Secondary Tabs Pagination (`pagination-09`)

A pagination component with secondary tabs styling

```tsx
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const pages = [1, 2, 3];

export default function PaginationTabsSecondary() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="bg-secondary text-secondary-foreground"
            href="#"
          />
        </PaginationItem>

        {pages.map((page) => {
          const isActive = page === 2;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                className={cn({
                  [buttonVariants({
                    variant: "default",
                    className:
                      "shadow-none! hover:text-primary-foreground! dark:bg-primary dark:hover:bg-primary/90",
                  })]: isActive,
                  "bg-secondary text-secondary-foreground": !isActive,
                })}
                href={`#${page}`}
                isActive={page === 2}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            className="bg-secondary text-secondary-foreground"
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Pagination with Icon and Label (`pagination-10`)

A pagination component with icons and labels

```tsx
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function PaginationWithIconAndLabel() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            aria-label="Go to previous page"
            className="gap-1 pl-2.5"
            href="#"
            size="default"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span>Previous</span>
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
          <PaginationLink
            aria-label="Go to next page"
            className="gap-1 pr-2.5"
            href="#"
            size="default"
          >
            <span>Next</span>
            <ChevronsRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Numberless Pagination (`pagination-11`)

A pagination component without page numbers

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationNumberless() {
  return (
    <Pagination>
      <PaginationContent className="gap-0 divide-x overflow-hidden rounded-lg border">
        <PaginationItem>
          <PaginationPrevious className="rounded-none" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className="rounded-none" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Numberless Pagination with Text (`pagination-12`)

A pagination component without numbers but with text

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationNumberless() {
  return (
    <div className="w-full max-w-xs">
      <Pagination className="w-full">
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious className="border" href="#" />
          </PaginationItem>
          <PaginationItem>
            <span className="text-muted-foreground text-sm">Page 1 of 21</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="border" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
```

### Pagination with Ellipsis (`pagination-13`)

A pagination component with ellipsis for long page ranges

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationWithEllipsis() {
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
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### Table Pagination (`pagination-14`)

A pagination component designed for tables

```tsx
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TablePagination() {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page] = React.useState(1);
  const TOTAL_ITEMS = 100;

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Label className="whitespace-nowrap">Rows per page:</Label>
        <Select
          onValueChange={(rowsPerPage) => setRowsPerPage(+rowsPerPage)}
          value={rowsPerPage.toString()}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="whitespace-nowrap text-muted-foreground text-sm">
          {(page - 1) * rowsPerPage + 1}-{page * rowsPerPage} of {TOTAL_ITEMS}
        </span>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                aria-label="Go to previous page"
                disabled={page === 1}
                size="icon"
                variant="ghost"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                aria-label="Go to next page"
                disabled={page * rowsPerPage >= TOTAL_ITEMS}
                size="icon"
                variant="ghost"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
```

### Pagination with text (`pagination-15`)

A pagination component with text

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationDemo() {
  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3">
      <p className="flex-1 whitespace-nowrap text-muted-foreground text-sm">
        Showing 5 results
      </p>

      <Pagination className="justify-end">
        <PaginationContent className="gap-0 divide-x overflow-hidden rounded-lg border">
          <PaginationItem>
            <PaginationPrevious
              className="rounded-none *:[span]:hidden"
              href="#"
              size="icon-sm"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="rounded-none *:[span]:hidden"
              href="#"
              size="icon-sm"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
```
