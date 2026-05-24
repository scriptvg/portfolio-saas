# Radio Group (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/radio-group](https://www.shadcnui-blocks.com/components/radio-group).
9 variant(s). Install base UI with `pnpm dlx shadcn@latest add radio-group` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `radio-group-01` | Default Radio Group | A default radio group component |
| `radio-group-02` | Horizontal Radio Group | A radio group component with horizontal layout |
| `radio-group-03` | Disabled Radio Group | A radio group component with disabled options |
| `radio-group-04` | Radio Group with Custom Colors | A radio group component with custom color options |
| `radio-group-05` | Radio Group with Custom Size | A radio group component with custom size options |
| `radio-group-06` | Radio Group with Variant Styling | A radio group component with variant styling options |
| `radio-group-07` | Radio Group with Cards (Style 1) | A radio group component with card-style options (style 1) |
| `radio-group-08` | Radio Group with Cards (Style 2) | A radio group component with card-style options (style 2) |
| `radio-group-09` | Radio Group with Cards (Style 3) | A radio group component with card-style options (style 3) |

## Variant source

### Default Radio Group (`radio-group-01`)

A default radio group component

```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r1" value="default" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r2" value="comfortable" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r3" value="compact" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
```

### Horizontal Radio Group (`radio-group-02`)

A radio group component with horizontal layout

```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupOrientationDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup
        className="flex items-center gap-3"
        defaultValue="comfortable"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r1-horizontal" value="default" />
          <Label htmlFor="r1-horizontal">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r2-horizontal" value="comfortable" />
          <Label htmlFor="r2-horizontal">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r3-horizontal" value="compact" />
          <Label htmlFor="r3-horizontal">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
```

### Disabled Radio Group (`radio-group-03`)

A radio group component with disabled options

```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDisabledDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup defaultValue="comfortable" disabled>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r1-disabled" value="default" />
          <Label htmlFor="r1-disabled">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r2-disabled" value="comfortable" />
          <Label htmlFor="r2-disabled">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="r3-disabled" value="compact" />
          <Label htmlFor="r3-disabled">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
```

### Radio Group with Custom Colors (`radio-group-04`)

A radio group component with custom color options

```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupColorDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup className="flex items-center gap-3" defaultValue="indigo">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-green-500 data-checked:border-green-500 data-checked:bg-green-500 dark:data-checked:border-green-500 dark:data-checked:bg-green-500"
            id="color-green"
            value="green"
          />
          <Label htmlFor="color-green">Green</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-indigo-500 data-checked:border-indigo-500 data-checked:bg-indigo-500 dark:data-checked:border-indigo-500 dark:data-checked:bg-indigo-500"
            id="color-indigo"
            value="indigo"
          />
          <Label htmlFor="color-indigo">Indigo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-rose-500 data-checked:border-rose-500 data-checked:bg-rose-500 dark:data-checked:border-rose-500 dark:data-checked:bg-rose-500"
            id="color-rose"
            value="rose"
          />
          <Label htmlFor="color-rose">Rose</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
```

### Radio Group with Custom Size (`radio-group-05`)

A radio group component with custom size options

```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupSizeDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup className="flex items-center gap-3" defaultValue="default">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="size-default" value="default" />
          <Label htmlFor="size-default">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="h-5 w-5 [&_[data-slot=radio-group-indicator]_span]:size-2.5"
            id="size-medium"
            value="medium"
          />
          <Label htmlFor="size-medium">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="h-6 w-6 [&_[data-slot=radio-group-indicator]_span]:size-3"
            id="size-large"
            value="big"
          />
          <Label htmlFor="size-large">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
```

### Radio Group with Variant Styling (`radio-group-06`)

A radio group component with variant styling options

```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupVariantDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup className="flex items-center gap-3" defaultValue="default">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-indigo-500 data-checked:border-indigo-500 data-checked:bg-indigo-500 dark:data-checked:border-indigo-500 dark:data-checked:bg-indigo-500"
            id="variant-default"
            value="default"
          />
          <Label htmlFor="variant-default">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-indigo-500 border-none bg-indigo-500/25 data-checked:bg-indigo-500/25 dark:bg-indigo-500/30 dark:data-checked:bg-indigo-500/30 [&_[data-slot=radio-group-indicator]_span]:bg-indigo-500"
            id="variant-soft"
            value="soft"
          />
          <Label htmlFor="variant-soft">Soft</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
```

### Radio Group with Cards (Style 1) (`radio-group-07`)

A radio group component with card-style options (style 1)

```tsx
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

const options = [
  {
    value: "4gb",
    label: "4GB + 64GB",
  },
  {
    value: "6gb",
    label: "6GB + 128GB",
  },
  {
    value: "8gb",
    label: "8GB + 128GB",
  },
];

const RadioCardsDemo = () => {
  return (
    <RadioGroupPrimitive.Root
      className="grid w-full max-w-md grid-cols-3 gap-3"
      defaultValue={options[0].value}
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          className="rounded-lg px-3 py-1 ring-[1px] ring-border data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
          key={option.value}
          value={option.value}
        >
          <span className="font-semibold tracking-tight">{option.label}</span>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioCardsDemo;
```

### Radio Group with Cards (Style 2) (`radio-group-08`)

A radio group component with card-style options (style 2)

```tsx
import { CircleCheck, CpuIcon } from "lucide-react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const options = [
  {
    value: "4-core",
    label: "4-core CPU",
    description: "32 GB RAM",
  },
  {
    value: "6-core",
    label: "6-core CPU",
    description: "32 GB RAM",
  },
  {
    value: "8-core",
    label: "8-core CPU",
    description: "32 GB RAM",
  },
];

const RadioCardsDemo = () => {
  return (
    <RadioGroupPrimitive.Root
      className="grid w-full max-w-md grid-cols-3 gap-4"
      defaultValue={options[0].value}
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          className={cn(
            "group relative rounded-lg px-4 py-3 text-start ring-[1px] ring-border",
            "data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
          )}
          key={option.value}
          value={option.value}
        >
          <CircleCheck className="absolute top-0 right-0 h-6 w-6 translate-x-1/2 -translate-y-1/2 fill-blue-500 stroke-white text-primary group-data-[state=unchecked]:hidden" />

          <CpuIcon className="mb-2.5 text-muted-foreground" />
          <span className="font-semibold tracking-tight">{option.label}</span>
          <p className="text-xs">{option.description}</p>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioCardsDemo;
```

### Radio Group with Cards (Style 3) (`radio-group-09`)

A radio group component with card-style options (style 3)

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioCardsDemo = () => {
  return (
    <Card className="max-w-xs shadow-xs">
      <CardHeader>
        <CardTitle>Plan Options</CardTitle>
        <CardDescription>
          Select your preferred subscription plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="standard">
          <div className="mb-4 flex items-start space-x-2">
            <RadioGroupItem id="free" value="free" />
            <Label className="flex flex-col items-start" htmlFor="free">
              <span className="font-semibold">Free</span>
              <span className="text-muted-foreground text-sm">
                Basic features, no cost
              </span>
            </Label>
          </div>
          <div className="mb-4 flex items-start space-x-2">
            <RadioGroupItem id="standard" value="standard" />
            <Label className="flex flex-col items-start" htmlFor="standard">
              <span className="font-semibold">Standard</span>
              <span className="text-muted-foreground text-sm">
                Advanced features, $9.99/month
              </span>
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem id="premium" value="premium" />
            <Label className="flex flex-col items-start" htmlFor="premium">
              <span className="font-semibold">Premium</span>
              <span className="text-muted-foreground text-sm">
                All features, $19.99/month
              </span>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default RadioCardsDemo;
```
