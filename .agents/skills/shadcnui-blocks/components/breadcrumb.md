# Breadcrumb (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/breadcrumb](https://www.shadcnui-blocks.com/components/breadcrumb).
15 variant(s). Install base UI with `pnpm dlx shadcn@latest add breadcrumb` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `breadcrumb-01` | Default Breadcrumb | A default breadcrumb component |
| `breadcrumb-02` | Breadcrumb with Slash Separator | A breadcrumb with slash separator component |
| `breadcrumb-03` | Breadcrumb with Chevrons Separator | A breadcrumb with chevrons separator component |
| `breadcrumb-04` | Breadcrumb with Dot Separator | A breadcrumb with dot separator component |
| `breadcrumb-05` | Breadcrumb with Icon | A breadcrumb with icon component |
| `breadcrumb-06` | Breadcrumb with Icon (Alternate) | An alternate breadcrumb with icon component |
| `breadcrumb-07` | Breadcrumb with Icon and Label | A breadcrumb with icon and label component |
| `breadcrumb-08` | Breadcrumb with Icon and Label (Alternate) | An alternate breadcrumb with icon and label component |
| `breadcrumb-09` | Breadcrumb with Background | A breadcrumb with background component |
| `breadcrumb-10` | Breadcrumb with Tab Active | A breadcrumb with tab active component |
| `breadcrumb-11` | Tabs Breadcrumb | A tabs breadcrumb component |
| `breadcrumb-12` | Tabs Outline Breadcrumb | A tabs outline breadcrumb component |
| `breadcrumb-13` | Breadcrumb with Dropdown | A breadcrumb with dropdown component |
| `breadcrumb-14` | Collapsed Breadcrumb | A collapsed breadcrumb component |
| `breadcrumb-15` | Steps Breadcrumb | A steps breadcrumb component |

## Variant source

### Default Breadcrumb (`breadcrumb-01`)

A default breadcrumb component

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsDemo;
```

### Breadcrumb with Slash Separator (`breadcrumb-02`)

A breadcrumb with slash separator component

```tsx
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsWithSlashSeparator = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsWithSlashSeparator;
```

### Breadcrumb with Chevrons Separator (`breadcrumb-03`)

A breadcrumb with chevrons separator component

```tsx
import { ChevronsRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsWithChevronsSeparator = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsWithChevronsSeparator;
```

### Breadcrumb with Dot Separator (`breadcrumb-04`)

A breadcrumb with dot separator component

```tsx
import { Dot } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsWithDotSeparator = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Dot />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Dot />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsWithDotSeparator;
```

### Breadcrumb with Icon (`breadcrumb-05`)

A breadcrumb with icon component

```tsx
import { ChevronsRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsWithIcon = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsWithIcon;
```

### Breadcrumb with Icon (Alternate) (`breadcrumb-06`)

An alternate breadcrumb with icon component

```tsx
import { ChevronsRight, Component, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsWithIcon = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">
            <Component className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsWithIcon;
```

### Breadcrumb with Icon and Label (`breadcrumb-07`)

A breadcrumb with icon and label component

```tsx
import { ChevronsRight, Component, Home, Route } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsWithIconAndLabel = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">
            <Component className="mr-1 inline h-4 w-4" /> Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Route className="mr-1 inline h-4 w-4" /> Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsWithIconAndLabel;
```

### Breadcrumb with Icon and Label (Alternate) (`breadcrumb-08`)

An alternate breadcrumb with icon and label component

```tsx
import { ChevronsRight, Component, Home, Route } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsSteps = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-5!">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <div className="flex flex-col items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">
            <div className="flex flex-col items-center gap-1">
              <Component className="h-4 w-4" />
              Components
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <div className="flex flex-col items-center gap-1">
              <Route className="h-4 w-4" />
              Breadcrumb
            </div>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsSteps;
```

### Breadcrumb with Background (`breadcrumb-09`)

A breadcrumb with background component

```tsx
import { ChevronsRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbsWithBackground = () => {
  return (
    <Breadcrumb className="rounded-lg bg-secondary px-3 py-1.5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsWithBackground;
```

### Breadcrumb with Tab Active (`breadcrumb-10`)

A breadcrumb with tab active component

```tsx
import { ChevronsRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbTabActiveDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Badge className="rounded-full shadow-none">Breadcrumb</Badge>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbTabActiveDemo;
```

### Tabs Breadcrumb (`breadcrumb-11`)

A tabs breadcrumb component

```tsx
import { ChevronsRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbTabsDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Badge
              className="rounded-full font-medium shadow-none"
              variant="secondary"
            >
              Home
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">
            <Badge
              className="rounded-full font-medium shadow-none"
              variant="secondary"
            >
              Components
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Badge className="rounded-full shadow-none">Breadcrumb</Badge>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbTabsDemo;
```

### Tabs Outline Breadcrumb (`breadcrumb-12`)

A tabs outline breadcrumb component

```tsx
import { ChevronsRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbTabsOutline = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Badge
              className="rounded-full font-medium shadow-none"
              variant="outline"
            >
              Home
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">
            <Badge
              className="rounded-full font-medium shadow-none"
              variant="outline"
            >
              Components
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Badge className="rounded-full shadow-none">Breadcrumb</Badge>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbTabsOutline;
```

### Breadcrumb with Dropdown (`breadcrumb-13`)

A breadcrumb with dropdown component

```tsx
import { ChevronDown, ChevronsRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BreadcrumbWithDropdown() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Components
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

### Collapsed Breadcrumb (`breadcrumb-14`)

A collapsed breadcrumb component

```tsx
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BreadcrumbCollapsed() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

### Steps Breadcrumb (`breadcrumb-15`)

A steps breadcrumb component

```tsx
import { Package, ShoppingCart, Store, Truck } from "lucide-react";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const steps = [
  {
    label: "Store",
    href: "#/store",
    icon: Store,
  },
  {
    label: "Delivery Tracking",
    href: "#/delivery-tracking",
    icon: Truck,
  },
  {
    label: "Cart",
    href: "#/cart",
    icon: ShoppingCart,
  },
  {
    label: "Package",
    href: "#/package",
    icon: Package,
    active: true,
  },
];

const BreadcrumbsSteps = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {steps.map((step, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {step.active ? (
                <BreadcrumbPage>
                  <step.icon className="h-5 w-5" />
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={step.href}>
                  <step.icon className="h-5 w-5" />
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index !== steps.length - 1 && (
              <li
                aria-hidden="true"
                className="inline-block h-[2px] w-[40px] bg-muted"
                role="presentation"
              />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsSteps;
```
