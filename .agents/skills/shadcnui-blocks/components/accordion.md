# Accordion (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/accordion](https://www.shadcnui-blocks.com/components/accordion).
12 variant(s). Install base UI with `pnpm dlx shadcn@latest add accordion` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `accordion-01` | Default Accordion | A default accordion component |
| `accordion-02` | Outline Accordion | An outline styled accordion |
| `accordion-03` | Box Accordion | A box styled accordion |
| `accordion-04` | Contained Accordion | A contained accordion component |
| `accordion-05` | Box Contained Accordion | A box-contained accordion component |
| `accordion-06` | Tabs Accordion | A tabs-styled accordion component |
| `accordion-07` | Highlight Active Item Accordion | An accordion that highlights the active item |
| `accordion-08` | Multiple Expanded at a time Accordion | An accordion that allows multiple items to be expanded at once |
| `accordion-09` | Expand Icon Accordion | An accordion with a custom expand icon |
| `accordion-10` | Icon Accordion | An accordion with icons |
| `accordion-11` | Media Content Accordion | An accordion with media content |
| `accordion-12` | Disabled Item Accordion | An accordion with disabled items |

## Variant source

### Default Accordion (`accordion-01`)

A default accordion component

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionDemo() {
  return (
    <Accordion className="my-4 w-full max-w-lg" collapsible type="single">
      {items.map(({ title, content }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Outline Accordion (`accordion-02`)

An outline styled accordion

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionOutlineDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg space-y-2"
      collapsible
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="rounded-md border px-4 last:border-b"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Box Accordion (`accordion-03`)

A box styled accordion

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionBoxDemo() {
  return (
    <Accordion className="my-4 w-full max-w-lg" collapsible type="single">
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="border not-last:border-b-0 px-4 first:rounded-t-md last:rounded-b-md last:border-b"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Contained Accordion (`accordion-04`)

A contained accordion component

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionContainedDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg space-y-2"
      collapsible
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="rounded-md border-none bg-secondary px-4"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Box Contained Accordion (`accordion-05`)

A box-contained accordion component

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionBoxContainedDemo() {
  return (
    <Accordion className="my-4 w-full max-w-lg" collapsible type="single">
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="bg-muted px-4 first:rounded-t-md last:rounded-b-md last:border-none"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Tabs Accordion (`accordion-06`)

A tabs-styled accordion component

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionTabsDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg space-y-2"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="rounded-md border-none px-4 data-[state=open]:bg-secondary"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="data-[state=closed]:py-2">
            {title}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Highlight Active Item Accordion (`accordion-07`)

An accordion that highlights the active item

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionHighlightActiveItemDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="data-[state=open]:border-indigo-600 data-[state=open]:border-b-2 dark:data-[state=open]:border-indigo-500"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="data-[state=open]:text-indigo-600 dark:data-[state=open]:text-indigo-500">
            {title}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Multiple Expanded at a time Accordion (`accordion-08`)

An accordion that allows multiple items to be expanded at once

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionMultipleOpenDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      defaultValue={["item-0", "item-1"]}
      type="multiple"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Expand Icon Accordion (`accordion-09`)

An accordion with a custom expand icon

```tsx
import { Plus } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
  },
];

export default function AccordionDefaultOpenDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium text-sm transition-all hover:underline [&[data-state=open]>svg]:rotate-45">
              {title}
              <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Icon Accordion (`accordion-10`)

An accordion with icons

```tsx
import { RotateCcw, ShoppingCart, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
    icon: ShoppingCart,
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
    icon: Truck,
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
    icon: RotateCcw,
  },
];

export default function AccordionIconDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content, icon: Icon }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className="flex items-start gap-3">
              <Icon />
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-9">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Media Content Accordion (`accordion-11`)

An accordion with media content

```tsx
import { RotateCcw, ShoppingCart, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
    icon: ShoppingCart,
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
    icon: Truck,
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
    icon: RotateCcw,
  },
];

export default function AccordionMediaContentDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content, icon: Icon }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className="flex items-start gap-3">
              <Icon />
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="relative pl-9">
            <div className="absolute top-0 bottom-3 left-3 w-px border-l border-dashed" />

            {content}
            <div className="mt-4 aspect-18/9 w-full rounded-xl bg-muted" />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### Disabled Item Accordion (`accordion-12`)

An accordion with disabled items

```tsx
import { RotateCcw, ShoppingCart, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
    icon: ShoppingCart,
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
    icon: Truck,
    disabled: true,
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
    icon: RotateCcw,
  },
];

export default function AccordionItemDisabledDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content, icon: Icon, disabled }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger
            className={cn({
              "opacity-50": disabled,
            })}
            disabled={disabled}
          >
            <div className="flex items-start gap-3">
              <Icon />
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-9">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```
