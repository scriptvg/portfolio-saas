# Table (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/table](https://www.shadcnui-blocks.com/components/table).
11 variant(s). Install base UI with `pnpm dlx shadcn@latest add table` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `table-01` | Default Table | A default table component |
| `table-02` | Bordered Table | A bordered table component |
| `table-03` | Striped Rows Table | A table with striped rows |
| `table-04` | Rounded Corners Table | A table with rounded corners |
| `table-05` | Table with Pagination | A table with pagination |
| `table-06` | Sticky Header Table | A table with sticky header |
| `table-07` | Sticky Columns Table | A table with sticky columns |
| `table-08` | Overflow Scroll Table | A table with overflow scroll |
| `table-09` | Data Table | A data table component |
| `table-10` | Data Table Density | A data table with density controls |
| `table-11` | Columns Visibility Table | A table with columns visibility control |

## Variant source

### Default Table (`table-01`)

A default table component

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
```

### Bordered Table (`table-02`)

A bordered table component

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function BorderedTableDemo() {
  return (
    <Table className="border">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="last:border-r-0 [&>th]:border-r">
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            className="last:border-r-0 [&>td]:border-r"
            key={invoice.invoice}
          >
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="*:border-r last:border-r-0">
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
```

### Striped Rows Table (`table-03`)

A table with striped rows

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
  },
];

export default function BorderedTableDemo() {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="pl-4">ID</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price (USD)</TableHead>
          <TableHead>Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow className="odd:bg-muted/50" key={product.id}>
            <TableCell className="pl-4">{product.id}</TableCell>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.rating}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Rounded Corners Table (`table-04`)

A table with rounded corners

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
  },
];

export default function RoundedCornersTableDemo() {
  return (
    <div className="w-full overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow className="odd:bg-muted/50" key={product.id}>
              <TableCell className="pl-4">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```

### Table with Pagination (`table-05`)

A table with pagination

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
  },
];

export default function TableWithPaginationDemo() {
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price (USD)</TableHead>
              <TableHead>Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow className="odd:bg-muted/50" key={product.id}>
                <TableCell className="pl-4">{product.id}</TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-4">
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
    </div>
  );
}
```

### Sticky Header Table (`table-06`)

A table with sticky header

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
    stockQuantity: 120,
    supplier: "SoundTech Ltd",
    dateAdded: "2024-01-15",
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
    stockQuantity: 200,
    supplier: "FitGear Inc",
    dateAdded: "2024-01-20",
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
    stockQuantity: 80,
    supplier: "HomeBrew Supplies",
    dateAdded: "2024-02-05",
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
    stockQuantity: 150,
    supplier: "RunWell Co.",
    dateAdded: "2024-03-15",
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
    stockQuantity: 60,
    supplier: "TechTime",
    dateAdded: "2024-04-10",
  },
  {
    id: 106,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 45.0,
    rating: 4.3,
    stockQuantity: 95,
    supplier: "GamePro Gear",
    dateAdded: "2024-04-22",
  },
  {
    id: 107,
    name: "Blender",
    category: "Kitchen Appliances",
    price: 55.0,
    rating: 4.4,
    stockQuantity: 110,
    supplier: "KitchenEssentials",
    dateAdded: "2024-05-05",
  },
  {
    id: 108,
    name: "Electric Kettle",
    category: "Kitchen Appliances",
    price: 30.0,
    rating: 4.1,
    stockQuantity: 130,
    supplier: "HomeEssentials",
    dateAdded: "2024-05-18",
  },
  {
    id: 109,
    name: "Office Chair",
    category: "Furniture",
    price: 150.0,
    rating: 4.6,
    stockQuantity: 50,
    supplier: "FurniPro",
    dateAdded: "2024-06-01",
  },
  {
    id: 110,
    name: "LED Desk Lamp",
    category: "Lighting",
    price: 20.0,
    rating: 4.5,
    stockQuantity: 210,
    supplier: "BrightLight",
    dateAdded: "2024-06-10",
  },
];

export default function StickyHeaderTableDemo() {
  return (
    <div className="grid w-full [&>div]:max-h-[300px] [&>div]:rounded [&>div]:border">
      <Table>
        <TableHeader>
          <TableRow className="sticky top-0 bg-background *:whitespace-nowrap after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']">
            <TableHead className="pl-4">ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Stock Quantity</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Date Added</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden">
          {products.map((product) => (
            <TableRow
              className="*:whitespace-nowrap odd:bg-muted/50"
              key={product.id}
            >
              <TableCell className="pl-4">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.stockQuantity}</TableCell>
              <TableCell>{product.supplier}</TableCell>
              <TableCell>{product.dateAdded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```

### Sticky Columns Table (`table-07`)

A table with sticky columns

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
    stockQuantity: 120,
    supplier: "SoundTech Ltd",
    dateAdded: "2024-01-15",
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
    stockQuantity: 200,
    supplier: "FitGear Inc",
    dateAdded: "2024-01-20",
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
    stockQuantity: 80,
    supplier: "HomeBrew Supplies",
    dateAdded: "2024-02-05",
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
    stockQuantity: 150,
    supplier: "RunWell Co.",
    dateAdded: "2024-03-15",
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
    stockQuantity: 60,
    supplier: "TechTime",
    dateAdded: "2024-04-10",
  },
  {
    id: 106,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 45.0,
    rating: 4.3,
    stockQuantity: 95,
    supplier: "GamePro Gear",
    dateAdded: "2024-04-22",
  },
  {
    id: 107,
    name: "Blender",
    category: "Kitchen Appliances",
    price: 55.0,
    rating: 4.4,
    stockQuantity: 110,
    supplier: "KitchenEssentials",
    dateAdded: "2024-05-05",
  },
  {
    id: 108,
    name: "Electric Kettle",
    category: "Kitchen Appliances",
    price: 30.0,
    rating: 4.1,
    stockQuantity: 130,
    supplier: "HomeEssentials",
    dateAdded: "2024-05-18",
  },
  {
    id: 109,
    name: "Office Chair",
    category: "Furniture",
    price: 150.0,
    rating: 4.6,
    stockQuantity: 50,
    supplier: "FurniPro",
    dateAdded: "2024-06-01",
  },
  {
    id: 110,
    name: "LED Desk Lamp",
    category: "Lighting",
    price: 20.0,
    rating: 4.5,
    stockQuantity: 210,
    supplier: "BrightLight",
    dateAdded: "2024-06-10",
  },
];

export default function StickyColumnsTableDemo() {
  return (
    <div className="grid w-full [&>div]:max-h-[300px] [&>div]:rounded [&>div]:border">
      <Table>
        <TableHeader>
          <TableRow className="*:whitespace-nowrap hover:bg-background">
            <TableHead className="sticky left-0 min-w-[50px] bg-background pl-4">
              ID
            </TableHead>
            <TableHead className="sticky left-[50px] bg-background">
              Product Name
            </TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Stock Quantity</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Date Added</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden">
          {products.map((product) => (
            <TableRow
              className="group odd:bg-muted [&>td]:whitespace-nowrap hover:[&>td]:bg-blue-100 dark:hover:[&>td]:bg-blue-400"
              key={product.id}
            >
              <TableCell className="sticky left-0 bg-background pl-4 group-odd:bg-muted group-hover:bg-blue-100">
                {product.id}
              </TableCell>
              <TableCell className="sticky left-[50px] bg-background font-medium group-odd:bg-muted group-hover:bg-blue-100">
                {product.name}
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.stockQuantity}</TableCell>
              <TableCell>{product.supplier}</TableCell>
              <TableCell>{product.dateAdded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```

### Overflow Scroll Table (`table-08`)

A table with overflow scroll

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
    stockQuantity: 120,
    supplier: "SoundTech Ltd",
    dateAdded: "2024-01-15",
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
    stockQuantity: 200,
    supplier: "FitGear Inc",
    dateAdded: "2024-01-20",
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
    stockQuantity: 80,
    supplier: "HomeBrew Supplies",
    dateAdded: "2024-02-05",
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
    stockQuantity: 150,
    supplier: "RunWell Co.",
    dateAdded: "2024-03-15",
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
    stockQuantity: 60,
    supplier: "TechTime",
    dateAdded: "2024-04-10",
  },
  {
    id: 106,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 45.0,
    rating: 4.3,
    stockQuantity: 95,
    supplier: "GamePro Gear",
    dateAdded: "2024-04-22",
  },
  {
    id: 107,
    name: "Blender",
    category: "Kitchen Appliances",
    price: 55.0,
    rating: 4.4,
    stockQuantity: 110,
    supplier: "KitchenEssentials",
    dateAdded: "2024-05-05",
  },
  {
    id: 108,
    name: "Electric Kettle",
    category: "Kitchen Appliances",
    price: 30.0,
    rating: 4.1,
    stockQuantity: 130,
    supplier: "HomeEssentials",
    dateAdded: "2024-05-18",
  },
  {
    id: 109,
    name: "Office Chair",
    category: "Furniture",
    price: 150.0,
    rating: 4.6,
    stockQuantity: 50,
    supplier: "FurniPro",
    dateAdded: "2024-06-01",
  },
  {
    id: 110,
    name: "LED Desk Lamp",
    category: "Lighting",
    price: 20.0,
    rating: 4.5,
    stockQuantity: 210,
    supplier: "BrightLight",
    dateAdded: "2024-06-10",
  },
];

export default function TableOverflowScrollDemo() {
  return (
    <div className="grid w-full [&>div]:max-h-[300px] [&>div]:rounded [&>div]:border">
      <Table>
        <TableHeader>
          <TableRow className="*:whitespace-nowrap">
            <TableHead className="pl-4">ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Stock Quantity</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Date Added</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden">
          {products.map((product) => (
            <TableRow
              className="*:whitespace-nowrap odd:bg-muted/50"
              key={product.id}
            >
              <TableCell className="pl-4">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.stockQuantity}</TableCell>
              <TableCell>{product.supplier}</TableCell>
              <TableCell>{product.dateAdded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```

### Data Table (`table-09`)

A data table component

```tsx
"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          className="max-w-sm"
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    checked={column.getIsVisible()}
                    className="capitalize"
                    key={column.id}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
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
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
```

### Data Table Density (`table-10`)

A data table with density controls

```tsx
"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Rows2, Rows3, Rows4 } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDensityDemo() {
  const [density, setDensity] = React.useState<string>();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          className="max-w-sm"
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        />

        <Select onValueChange={setDensity} value={density}>
          <SelectTrigger className="ml-auto w-[180px]">
            <SelectValue placeholder="Density" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Density</SelectLabel>
              <SelectItem value="compact">
                <div className="flex items-center gap-2">
                  <Rows4 className="h-4 w-4" />
                  Compact
                </div>
              </SelectItem>
              <SelectItem className="flex items-center gap-2" value="standard">
                <div className="flex items-center gap-2">
                  <Rows3 className="h-4 w-4" /> Standard
                </div>
              </SelectItem>
              <SelectItem className="flex items-center gap-2" value="flexible">
                <div className="flex items-center gap-2">
                  <Rows2 className="h-4 w-4" />
                  Flexible
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table
          className={cn({
            "[&_td]:py-px [&_th]:py-px": density === "compact",
            "[&_td]:py-1 [&_th]:py-1": density === "standard",
            "[&_td]:py-2 [&_th]:py-1": density === "flexible",
          })}
        >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
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
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
```

### Columns Visibility Table (`table-11`)

A table with columns visibility control

```tsx
"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  Columns3,
  MoreHorizontal,
  RefreshCcw,
  SearchIcon,
} from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableColumnsVisibilityDemo() {
  const [searchQuery, setSearchQuery] = React.useState<string>();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          className="max-w-sm"
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              <Columns3 /> Columns <ChevronDown className="ml-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="relative">
              <Input
                className="pl-8"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="Search"
                value={searchQuery}
              />
              <SearchIcon className="absolute inset-y-0 left-2 my-auto h-4 w-4" />
            </div>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                if (
                  searchQuery &&
                  !column.id.toLowerCase().includes(searchQuery.toLowerCase())
                ) {
                  return null;
                }

                return (
                  <DropdownMenuCheckboxItem
                    checked={column.getIsVisible()}
                    className="capitalize"
                    key={column.id}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                    onSelect={(e) => e.preventDefault()}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                table.resetColumnVisibility();
                setSearchQuery("");
              }}
            >
              <RefreshCcw /> Reset
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
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
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
```
