# Collapsible (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/collapsible](https://www.shadcnui-blocks.com/components/collapsible).
4 variant(s). Install base UI with `pnpm dlx shadcn@latest add collapsible` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `collapsible-01` | Default Collapsible | A default collapsible component |
| `collapsible-02` | Show More Collapsible | A collapsible component with show more functionality |
| `collapsible-03` | File Tree Collapsible | A collapsible component for displaying file trees |
| `collapsible-04` | Filters Collapsible | A collapsible component for filter options |

## Variant source

### Default Collapsible (`collapsible-01`)

A default collapsible component

```tsx
"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      className="w-[350px] space-y-2"
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="font-semibold text-sm">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="ghost">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
```

### Show More Collapsible (`collapsible-02`)

A collapsible component with show more functionality

```tsx
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ShowMoreCollapsible() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      className="w-full max-w-xs space-y-2"
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="flex items-center gap-2" key={index}>
          <div className="h-10 w-10 shrink-0 rounded-full bg-accent" />
          <div className="flex w-full flex-col gap-1.5">
            <div className="h-2.5 w-[40%] rounded-lg bg-accent" />
            <div className="h-2.5 w-full rounded-lg bg-accent" />
          </div>
        </div>
      ))}
      <CollapsibleContent className="space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex items-center gap-2" key={index + 2}>
            <div className="h-10 w-10 shrink-0 rounded-full bg-accent" />
            <div className="flex w-full flex-col gap-1.5">
              <div className="h-2.5 w-[40%] rounded-lg bg-accent" />
              <div className="h-2.5 w-full rounded-lg bg-accent" />
            </div>
          </div>
        ))}
      </CollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button
          className="mt-4! data-[state=open]:hidden"
          size="sm"
          variant="outline"
        >
          Show more <ChevronDown />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleTrigger asChild>
        <Button
          className="mt-4! hidden data-[state=open]:inline-flex"
          size="sm"
          variant="outline"
        >
          Show less <ChevronUp />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
```

### File Tree Collapsible (`collapsible-03`)

A collapsible component for displaying file trees

```tsx
"use client";

import { ChevronRight, FileIcon, FolderIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FileTreeItem {
  name: string;
  type: "folder" | "file";
  children?: FileTreeItem[];
}

const fileTree: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "button.tsx", type: "file" },
          { name: "input.tsx", type: "file" },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "favicon.ico", type: "file" },
      { name: "index.html", type: "file" },
    ],
  },
  {
    name: "package.json",
    type: "file",
  },
];

export default function FileTree() {
  return (
    <div className="w-[350px] rounded-lg bg-accent p-4">
      <div className="-ml-4 w-full">
        {fileTree.map((treeItem) => (
          <FileTreeItem key={treeItem.name} {...treeItem} />
        ))}
      </div>
    </div>
  );
}

const FileTreeItem = ({ name, type, children }: FileTreeItem) => {
  if (type === "file") {
    return (
      <div className="flex items-center gap-2 py-1 pl-10">
        <FileIcon className="h-4 w-4" /> {name}
      </div>
    );
  }

  return (
    <Collapsible className="pl-4">
      <CollapsibleTrigger className="group flex w-full items-center gap-2 py-1">
        <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
        <span className="flex items-center gap-2">
          <FolderIcon className="h-4 w-4 fill-current" /> {name}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {children?.map((child) => (
          <FileTreeItem key={child.name} {...child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
```

### Filters Collapsible (`collapsible-04`)

A collapsible component for filter options

```tsx
"use client";

import {
  ChevronDown,
  CircleDollarSign,
  type LucideIcon,
  Star,
  Tag,
} from "lucide-react";
import { type ReactNode, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PriceRange {
  from: number;
  to: number;
}

const CollapsibleFilters = () => {
  return (
    <div className="w-full max-w-xs divide-y">
      <PriceRangeFilter />
      <CategoryFilter />
      <RatingFilter />
    </div>
  );
};

const MIN_PRICE = 0;
const MAX_PRICE = 1000;
function PriceRangeFilter() {
  const [value, setValue] = useState<PriceRange>({
    from: MIN_PRICE,
    to: MAX_PRICE,
  });

  const handleChange = (newValue: PriceRange) => {
    setValue(newValue);
  };

  return (
    <CollapsibleFilter icon={CircleDollarSign} title="Price Range">
      <div className="flex justify-between space-x-4">
        <Input
          className="w-20"
          onChange={(e) =>
            handleChange({ from: +e.target.value, to: value.to })
          }
          type="number"
          // onBlur={handleBlur}
          value={value.from}
        />
        <Input
          className="w-20"
          onChange={(e) =>
            handleChange({ from: value.from, to: +e.target.value })
          }
          type="number"
          // onBlur={handleBlur}
          value={value.to}
        />
      </div>
      <Slider
        className="mt-4 mb-3 w-full"
        max={MAX_PRICE}
        min={MIN_PRICE}
        onValueChange={([from, to]) => handleChange({ from, to })}
        step={10}
        value={[value.from, value.to]}
      />
    </CollapsibleFilter>
  );
}

function RatingFilter() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  return (
    <CollapsibleFilter icon={Star} title="Rating">
      <div className="mb-1 flex space-x-1">
        {[1, 2, 3, 4, 5].map((ratingValue) => (
          <Star
            className={`h-6 w-6 cursor-pointer ${
              (
                hoveredRating !== null
                  ? hoveredRating >= ratingValue
                  : rating !== null && rating >= ratingValue
              )
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
            key={ratingValue}
            onClick={() =>
              setRating(ratingValue === rating ? null : ratingValue)
            }
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(null)}
          />
        ))}
      </div>
    </CollapsibleFilter>
  );
}

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Toys",
];
function CategoryFilter() {
  return (
    <CollapsibleFilter icon={Tag} title="Category">
      {categories.map((category) => (
        <div className="mb-2 flex items-center space-x-3" key={category}>
          <Checkbox id={category} />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </CollapsibleFilter>
  );
}

const CollapsibleFilter = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}) => (
  <Collapsible defaultOpen>
    <CollapsibleTrigger className="group flex w-full items-center justify-between py-3">
      <h3 className="flex items-center gap-2 font-semibold text-sm">
        {!!Icon && <Icon className="h-5 w-5" />} {title}
      </h3>
      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    <CollapsibleContent className="pt-1 pb-3">{children}</CollapsibleContent>
  </Collapsible>
);

export default CollapsibleFilters;
```
