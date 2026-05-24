# Checkbox (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/checkbox](https://www.shadcnui-blocks.com/components/checkbox).
16 variant(s). Install base UI with `pnpm dlx shadcn@latest add checkbox` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `checkbox-01` | Checkbox with Text | A checkbox with text component |
| `checkbox-02` | Disabled Checkbox | A disabled checkbox component |
| `checkbox-03` | Indeterminate Checkbox | An indeterminate checkbox component |
| `checkbox-04` | Horizontal Checkbox Group | A horizontal checkbox group component |
| `checkbox-05` | Vertical Checkbox Group | A vertical checkbox group component |
| `checkbox-06` | Controlled Checkbox | A controlled checkbox component |
| `checkbox-07` | Checkbox Colors | Different colors of checkbox component |
| `checkbox-08` | Checkbox Sizes | Different sizes of checkbox component |
| `checkbox-09` | Icon Checkbox | A checkbox with custom icon component |
| `checkbox-10` | Multi Color Picker Checkbox | A multi color picker checkbox component |
| `checkbox-11` | Card Checkbox | A card checkbox component |
| `checkbox-12` | Checkbox with Form | A checkbox with form component |
| `checkbox-13` | Roles | A roles component |
| `checkbox-14` | Countries | A countries component |
| `checkbox-15` | Working Days | A working days component |
| `checkbox-16` | Notification Settings | A notification settings component |

## Variant source

### Checkbox with Text (`checkbox-01`)

A checkbox with text component

```tsx
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxWithTextDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="terms"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
```

### Disabled Checkbox (`checkbox-02`)

A disabled checkbox component

```tsx
import { Checkbox } from "@/components/ui/checkbox";

export default function DisabledCheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox disabled id="terms-disabled" />
      <label
        className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="terms-disabled"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
```

### Indeterminate Checkbox (`checkbox-03`)

An indeterminate checkbox component

```tsx
"use client";

import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "@/lib/utils";

// Replace the `Checkbox` component in `@components/ui/checkbox` with below component and use it here to support indeterminate.
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    className={cn(
      "group peer h-4 w-4 shrink-0 rounded border border-primary shadow-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground",
      className
    )}
    ref={ref}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <MinusIcon className="hidden h-4 w-4 group-data-[state=indeterminate]:block" />
      <CheckIcon className="hidden h-4 w-4 group-data-[state=checked]:block" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default function IndeterminateCheckboxDemo() {
  const [checked, setChecked] = React.useState<
    Record<string, CheckboxPrimitive.CheckedState>
  >({
    child1: true,
    child2: false,
  });

  const handleCheckedChange = (
    name: string,
    checked: CheckboxPrimitive.CheckedState
  ) => {
    setChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleParentCheckedChange = (
    checked: CheckboxPrimitive.CheckedState
  ) => {
    setChecked({
      child1: checked,
      child2: checked,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Checkbox
          checked={
            checked.child1 === checked.child2 ? checked.child1 : "indeterminate"
          }
          id="parent"
          onCheckedChange={handleParentCheckedChange}
        />
        <label
          className="ml-2 font-medium text-sm leading-none"
          htmlFor="parent"
        >
          Parent
        </label>
      </div>
      <div className="space-y-2 pl-6">
        <div className="flex items-center">
          <Checkbox
            checked={checked.child1}
            id="child1"
            onCheckedChange={(checked) =>
              handleCheckedChange("child1", checked)
            }
          />
          <label
            className="ml-2 font-medium text-sm leading-none"
            htmlFor="child1"
          >
            Child 1
          </label>
        </div>
        <div className="flex items-center">
          <Checkbox
            checked={checked.child2}
            id="child2"
            onCheckedChange={(checked) =>
              handleCheckedChange("child2", checked)
            }
          />
          <label
            className="ml-2 font-medium text-sm leading-none"
            htmlFor="child2"
          >
            Child 2
          </label>
        </div>
      </div>
    </div>
  );
}
```

### Horizontal Checkbox Group (`checkbox-04`)

A horizontal checkbox group component

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const technologies = [
  {
    name: "react",
    label: "React",
  },
  {
    name: "next",
    label: "Next",
  },
  {
    name: "node",
    label: "Node",
  },
  {
    name: "remix",
    label: "Remix",
  },
];

export default function CheckboxHorizontalGroupDemo() {
  return (
    <div>
      <Label className="font-semibold">Technologies</Label>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {technologies.map(({ name, label }) => (
          <div className="flex items-center gap-2" key={name}>
            <Checkbox id={name} />
            <label
              className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor={name}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Vertical Checkbox Group (`checkbox-05`)

A vertical checkbox group component

```tsx
import { Beer, IceCreamBowl, Pizza, Sandwich } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const options = [
  {
    name: "pizza",
    label: "Pizza",
    icon: Pizza,
    defaultChecked: true,
  },
  {
    name: "sandwich",
    label: "Sandwich",
    icon: Sandwich,
    defaultChecked: true,
  },
  {
    name: "beer",
    label: "Beer",
    icon: Beer,
  },
  {
    name: "ice-cream",
    label: "Ice Cream",
    icon: IceCreamBowl,
  },
];

export default function CheckboxVerticalGroupDemo() {
  return (
    <div className="mt-2 flex flex-col items-start gap-4">
      {options.map(({ name, label, icon: Icon, defaultChecked }) => (
        <div className="flex items-center gap-4" key={name}>
          <Checkbox defaultChecked={defaultChecked} id={`${name}-vertical`} />
          <label
            className="flex items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor={`${name}-vertical`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}
```

### Controlled Checkbox (`checkbox-06`)

A controlled checkbox component

```tsx
"use client";

import type { Checkbox as CheckboxPrimitive } from "radix-ui";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function ControlledCheckboxDemo() {
  const [checked, setChecked] = useState<CheckboxPrimitive.CheckedState>(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        id="terms-controlled"
        onCheckedChange={setChecked}
      />
      <label
        className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="terms-controlled"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
```

### Checkbox Colors (`checkbox-07`)

Different colors of checkbox component

```tsx
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxColorsDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox defaultChecked />
      <Checkbox
        className="data-[state=checked]:border-destructive data-[state=checked]:bg-destructive dark:text-foreground"
        defaultChecked
      />
      <Checkbox
        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 dark:text-foreground"
        defaultChecked
      />
      <Checkbox
        className="data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600 dark:text-foreground"
        defaultChecked
      />
    </div>
  );
}
```

### Checkbox Sizes (`checkbox-08`)

Different sizes of checkbox component

```tsx
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxSizesDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox defaultChecked />
      <Checkbox
        className="h-5 w-5 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive dark:text-foreground"
        defaultChecked
      />
      <Checkbox
        className="h-6 w-6 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 dark:text-foreground"
        defaultChecked
      />
      <Checkbox
        className="h-7 w-7 data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600 dark:text-foreground"
        defaultChecked
      />
    </div>
  );
}
```

### Icon Checkbox (`checkbox-09`)

A checkbox with custom icon component

```tsx
import { BookmarkIcon, CheckIcon, Heart, StarIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "@/lib/utils";

// Replace the `Checkbox` component in `@components/ui/checkbox` with below component and use it here to support custom icon.
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    icon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
  }
>(({ className, icon, checkedIcon, ...props }, ref) => (
  <>
    <CheckboxPrimitive.Root
      className={cn("peer group", className)}
      ref={ref}
      {...props}
    >
      <span className="group-data-[state=checked]:hidden">{icon}</span>
      <span className="group-data-[state=unchecked]:hidden">{checkedIcon}</span>

      {!checkedIcon && (
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <CheckIcon className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      )}
    </CheckboxPrimitive.Root>
  </>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default function CheckboxIconDemo() {
  return (
    <div className="flex items-center space-x-3">
      <Checkbox
        checkedIcon={<Heart className="fill-rose-500 stroke-rose-500" />}
        defaultChecked
        icon={<Heart />}
      />
      <Checkbox
        checkedIcon={<BookmarkIcon className="fill-primary" />}
        defaultChecked
        icon={<BookmarkIcon />}
      />
      <Checkbox
        checkedIcon={<StarIcon className="fill-yellow-400 stroke-yellow-400" />}
        defaultChecked
        icon={<StarIcon />}
      />
    </div>
  );
}
```

### Multi Color Picker Checkbox (`checkbox-10`)

A multi color picker checkbox component

```tsx
import { CircleCheck } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const colors = ["indigo", "rose", "sky", "green", "orange"];

const CheckboxCardDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {colors.map((color) => (
        <CheckboxPrimitive.Root
          className={cn("h-8 w-8 rounded-full", {
            "bg-indigo-500 text-indigo-500": color === "indigo",
            "bg-rose-500 text-rose-500": color === "rose",
            "bg-sky-500 text-sky-500": color === "sky",
            "bg-green-500 text-green-500": color === "green",
            "bg-orange-500 text-orange-500": color === "orange",
          })}
          defaultChecked={color === "indigo"}
          key={color}
        >
          <CheckboxPrimitive.Indicator className="flex h-full w-full items-center justify-center">
            <CircleCheck className="h-5 w-5 fill-white stroke-current" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      ))}
    </div>
  );
};

export default CheckboxCardDemo;
```

### Card Checkbox (`checkbox-11`)

A card checkbox component

```tsx
import { CircleCheck, Ruler, Smile, SwatchBook } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

const options = [
  {
    label: "Colors",
    value: "colors",
    icon: SwatchBook,
    defaultChecked: true,
  },
  {
    label: "Emojis",
    value: "emojis",
    icon: Smile,
  },
  {
    label: "Spacing",
    value: "spacing",
    icon: Ruler,
  },
];

const CheckboxCardDemo = () => {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-3">
      {options.map((option) => (
        <CheckboxPrimitive.Root
          className="relative rounded-lg border border-dashed px-4 py-3 text-start text-muted-foreground data-[state=checked]:border-primary data-[state=checked]:border-solid data-[state=checked]:bg-primary/4 data-[state=checked]:text-primary data-[state=checked]:ring dark:data-[state=checked]:ring-transparent"
          defaultChecked={option.defaultChecked}
          key={option.value}
        >
          <option.icon className="mb-3" />
          <span className="font-medium tracking-tight">{option.label}</span>

          <CheckboxPrimitive.Indicator className="absolute top-2 right-2">
            <CircleCheck className="fill-primary text-primary-foreground" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      ))}
    </div>
  );
};

export default CheckboxCardDemo;
```

### Checkbox with Form (`checkbox-12`)

A checkbox with form component

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface CheckboxWithFormProps<K> {
  name: keyof K & string;
  title?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
}

export function CheckboxWithForm<K>({
  title,
  description,
  name,
  disabled,
  className,
}: CheckboxWithFormProps<K>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex w-full items-start gap-4">
          <FormControl>
            <Checkbox
              id={name}
              {...field}
              checked={field.value}
              className={className}
              disabled={disabled}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="flex flex-col gap-1.5">
            {title && <FormLabel htmlFor={name}>{title}</FormLabel>}
            {description && <FormDescription>{description}</FormDescription>}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const schema = z.object({
  isAdmin: z.boolean(),
});

type schemaType = z.infer<typeof schema>;

export default function CheckboxWithFormDemo() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      isAdmin: false,
    },
    mode: "onBlur",
  });

  const onSubmit = (data: schemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="w-full space-y-4 px-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CheckboxWithForm<schemaType>
          description="This role has access to all the features of the application."
          name="isAdmin"
          title="Admin role"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Roles (`checkbox-13`)

A roles component

```tsx
"use client";

import {
  EyeIcon,
  PencilIcon,
  ShieldIcon,
  UserCircleIcon,
  UserIcon,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox13() {
  return (
    <div className="w-full max-w-xs space-y-3 rounded-lg border p-4">
      {roles.map((role) => (
        <label
          className="flex items-center justify-between gap-2"
          htmlFor={role.value}
          key={role.value}
        >
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-md bg-muted">
              <role.icon className="size-4.5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-sm">{role.name}</span>
              <span className="text-muted-foreground text-sm">
                {role.description}
              </span>
            </div>
          </div>
          <Checkbox
            defaultChecked={role.defaultChecked}
            id={role.value}
            value={role.value}
          />
        </label>
      ))}
    </div>
  );
}
const roles = [
  {
    name: "Administrator",
    value: "administrator",
    description: "Full system access",
    icon: ShieldIcon,
    defaultChecked: true,
  },
  {
    name: "Editor",
    value: "editor",
    description: "Content management only",
    icon: PencilIcon,
  },
  {
    name: "Moderator",
    value: "moderator",
    description: "User content moderation",
    icon: EyeIcon,
    defaultChecked: true,
  },
  {
    name: "User",
    value: "user",
    description: "Basic feature access",
    icon: UserIcon,
  },
  {
    name: "Viewer",
    value: "viewer",
    description: "Read-only permissions",
    icon: EyeIcon,
  },
  {
    name: "Guest",
    value: "guest",
    description: "Limited public access",
    icon: UserCircleIcon,
  },
];
```

### Countries (`checkbox-14`)

A countries component

```tsx
"use client";

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox14() {
  return (
    <div>
      <Label className="ps-1 font-medium">Countries</Label>
      <div className="mt-2.5 rounded-lg border bg-muted/30">
        <ScrollArea className="h-60">
          <div className="space-y-2 p-4">
            {countries.map((country, index) => (
              <label
                className="flex items-center justify-between gap-6"
                htmlFor={country.value}
                key={country.value}
              >
                <span className="text-sm">
                  {country.flag}&nbsp;&nbsp;{country.label}
                </span>
                <Checkbox
                  className="bg-background"
                  defaultChecked={index < 3}
                  id={country.value}
                  value={country.value}
                />
              </label>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
const countries = [
  { label: "United States", value: "us", flag: "🇺🇸" },
  { label: "Canada", value: "ca", flag: "🇨🇦" },
  { label: "United Kingdom", value: "uk", flag: "🇬🇧" },
  { label: "Germany", value: "de", flag: "🇩🇪" },
  { label: "France", value: "fr", flag: "🇫🇷" },
  { label: "Japan", value: "jp", flag: "🇯🇵" },
  { label: "Australia", value: "au", flag: "🇦🇺" },
  { label: "Brazil", value: "br", flag: "🇧🇷" },
  { label: "India", value: "in", flag: "🇮🇳" },
  { label: "China", value: "cn", flag: "🇨🇳" },
  { label: "South Korea", value: "kr", flag: "🇰🇷" },
  { label: "Italy", value: "it", flag: "🇮🇹" },
  { label: "Spain", value: "es", flag: "🇪🇸" },
  { label: "Netherlands", value: "nl", flag: "🇳🇱" },
  { label: "Sweden", value: "se", flag: "🇸🇪" },
  { label: "Norway", value: "no", flag: "🇳🇴" },
  { label: "Switzerland", value: "ch", flag: "🇨🇭" },
  { label: "Mexico", value: "mx", flag: "🇲🇽" },
  { label: "Argentina", value: "ar", flag: "🇦🇷" },
  { label: "South Africa", value: "za", flag: "🇿🇦" },
];
```

### Working Days (`checkbox-15`)

A working days component

```tsx
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const days = [
  { label: "M", value: "monday" },
  { label: "T", value: "tuesday" },
  { label: "W", value: "wednesday" },
  { label: "T", value: "thursday" },
  { label: "F", value: "friday" },
  { label: "S", value: "saturday" },
  { label: "S", value: "sunday" },
];

const CheckboxCardDemo = () => {
  return (
    <div>
      <Label className="ps-1 font-medium text-foreground/80">
        Select Working Days
      </Label>
      <div className="mt-3.5 flex flex-wrap items-center gap-2 rounded-lg bg-muted/50 px-4 py-3">
        {days.map((day) => (
          <CheckboxPrimitive.Root
            className={cn(
              "size-9 cursor-pointer rounded-full border bg-background text-sm transition-colors",
              "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            )}
            defaultChecked={day.value === "monday" || day.value === "tuesday"}
            key={day.value}
          >
            {day.label}
          </CheckboxPrimitive.Root>
        ))}
      </div>
    </div>
  );
};

export default CheckboxCardDemo;
```

### Notification Settings (`checkbox-16`)

A notification settings component

```tsx
"use client";

import {
  Bell,
  CalendarCheck,
  CalendarCog,
  CalendarPlus,
  CalendarX,
  type LucideIcon,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

interface NotificationType {
  label: string;
  value: string;
  icon: LucideIcon;
}

export default function Checkbox16() {
  return (
    <div>
      <Label className="ps-1 font-medium">Notification Settings</Label>
      <div className="mt-2.5 rounded-lg border bg-muted/30">
        <ScrollArea className="h-64">
          <table className="w-full">
            <thead className="sticky top-0 z-1 rounded-t-lg bg-muted/80 backdrop-blur-sm">
              <tr className="rounded-t-lg border-b *:first:rounded-tl-lg *:last:rounded-tr-lg">
                <th className="p-3 text-left font-medium text-muted-foreground text-xs">
                  Notification Type
                </th>
                <th className="w-16 p-3 font-medium text-muted-foreground text-xs">
                  In-App
                </th>
                <th className="w-16 p-3 font-medium text-muted-foreground text-xs">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {notificationTypes.map((notificationType, index) => (
                <tr
                  className="border-b last:border-b-0"
                  key={notificationType.value}
                >
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      <notificationType.icon className="size-4 text-muted-foreground" />
                      <span className="text-sm">{notificationType.label}</span>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <Checkbox
                      className="bg-background"
                      defaultChecked={index < 3}
                      id={`${notificationType.value}-in-app`}
                      value={`${notificationType.value}-in-app`}
                    />
                  </td>
                  <td className="p-3 text-center">
                    <Checkbox
                      className="bg-background"
                      defaultChecked={index < 3}
                      id={`${notificationType.value}-email`}
                      value={`${notificationType.value}-email`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </div>
  );
}

const notificationTypes: NotificationType[] = [
  { label: "New Booking", value: "new-booking", icon: CalendarPlus },
  { label: "Booking Cancelled", value: "booking-cancelled", icon: CalendarX },
  { label: "Booking Updated", value: "booking-updated", icon: CalendarCog },
  { label: "Booking Reminder", value: "booking-reminder-1", icon: Bell },
  {
    label: "Booking Confirmation",
    value: "booking-confirmation",
    icon: CalendarCheck,
  },
  { label: "Payment Reminder", value: "payment-reminder", icon: Bell },
  { label: "Upcoming Reminder", value: "upcoming-reminder", icon: Bell },
];
```
