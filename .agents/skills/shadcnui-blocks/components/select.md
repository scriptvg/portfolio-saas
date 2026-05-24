# Select (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/select](https://www.shadcnui-blocks.com/components/select).
12 variant(s). Install base UI with `pnpm dlx shadcn@latest add select` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `select-01` | Default Select | A default select component |
| `select-02` | Select with Background Color | A select component with custom background color |
| `select-03` | Ghost Select | A select component with ghost styling |
| `select-04` | Select with Custom Dropdown Icon | A select component with custom dropdown icon |
| `select-05` | Select with Custom Shape | A select component with custom shape styling |
| `select-06` | Select with Icon | A select component with icon integration |
| `select-07` | Select with Form Integration | A select component integrated with form handling |
| `select-08` | Theme Selector Select | A select component for theme selection |
| `select-09` | Select with Custom Menu Position | A select component with custom menu position |
| `select-10` | Scrollable Select | A select component with scrollable options |
| `select-11` | Controlled Select | A controlled select component |
| `select-12` | Select with Auto-Complete | A select component with auto-complete functionality |

## Variant source

### Default Select (`select-01`)

A default select component

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Select with Background Color (`select-02`)

A select component with custom background color

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectBackgroundColorDemo() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger className="w-44 border-none bg-primary/25 text-primary shadow-none dark:text-white">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="[&_div:focus]:bg-primary [&_div:focus_*]:text-white!">
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Ghost Select (`select-03`)

A select component with ghost styling

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectGhostDemo() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger className="w-44 border-none shadow-none hover:bg-accent">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Select with Custom Dropdown Icon (`select-04`)

A select component with custom dropdown icon

```tsx
import { ChevronDown } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

export default function SelectWithCustomDropdownIconDemo() {
  return (
    <Select>
      <SelectPrimitive.Trigger
        className={cn(
          "flex h-8 w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          "w-44"
        )}
      >
        <SelectValue placeholder="Select a fruit" />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Select with Custom Shape (`select-05`)

A select component with custom shape styling

```tsx
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectShapeDemo() {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="w-28">
        <Label className="mb-2 block">Rectangular</Label>
        <Select defaultValue="apple">
          <SelectTrigger className="rounded-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-28">
        <Label className="mb-2 block">Circular</Label>
        <Select defaultValue="apple">
          <SelectTrigger className="rounded-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
```

### Select with Icon (`select-06`)

A select component with icon integration

```tsx
"use client";

import {
  AppleIcon,
  BananaIcon,
  CherryIcon,
  CitrusIcon,
  GrapeIcon,
} from "lucide-react";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fruits = [
  { value: "apple", label: "Apple", icon: AppleIcon },
  { value: "banana", label: "Banana", icon: BananaIcon },
  { value: "cherry", label: "Cherry", icon: CherryIcon },
  { value: "grapes", label: "Grapes", icon: GrapeIcon },
  { value: "citrus", label: "Citrus", icon: CitrusIcon },
];

export default function SelectWithIconDemo() {
  const [value, setValue] = React.useState("apple");

  return (
    <Select onValueChange={setValue} value={value}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4">
          <SelectValue placeholder="Select a fruit" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              <div className="flex items-center gap-2">
                <fruit.icon className="h-4 w-4" /> {fruit.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Select with Form Integration (`select-07`)

A select component integrated with form handling

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { SelectHTMLAttributes } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COUNTRIES: OptionType[] = [
  { id: "us", name: "United States" },
  { id: "uk", name: "United Kingdom" },
  { id: "ca", name: "Canada" },
  { id: "au", name: "Australia" },
  { id: "fr", name: "France" },
  { id: "de", name: "Germany" },
  { id: "jp", name: "Japan" },
  { id: "br", name: "Brazil" },
];

const schema = z.object({
  country: z.string().min(1, "Country is required"),
});

type schemaType = z.infer<typeof schema>;

export default function SelectWithFormDemo() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: schemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="mx-auto w-full max-w-sm space-y-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <SelectWithForm<schemaType>
          name="country"
          options={COUNTRIES}
          title="Select country"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

interface OptionType {
  id: string;
  name: string;
}

type SelectWithFormProps<K> = {
  name: keyof K & string;
  title?: string;
  className?: string;
  options: OptionType[];
} & Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children" | "onValueChange" | "value" | "defaultValue" | "dir"
>;

export function SelectWithForm<K>({
  title,
  name,
  className,
  options,
  ...props
}: SelectWithFormProps<K>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {title && <FormLabel htmlFor={name}>{title}</FormLabel>}
          <Select {...field} {...props} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger
                className={cn(
                  "w-full aria-invalid:border-destructive aria-invalid:ring-destructive",
                  className
                )}
                id={name}
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              <SelectGroup>
                {options.map((item) => (
                  <SelectItem key={`${name}_${item.id}`} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
```

### Theme Selector Select (`select-08`)

A select component for theme selection

```tsx
"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ThemeSelector() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Select onValueChange={setTheme} value={resolvedTheme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>
          <SelectItem value="light">
            <div className="flex items-center gap-2">
              <SunIcon className="h-4 w-4" />
              Light
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex items-center gap-2">
              <MoonIcon className="h-4 w-4" />
              Dark
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Select with Custom Menu Position (`select-09`)

A select component with custom menu position

```tsx
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectMenuPositionDemo() {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2">
      <div className="grow">
        <Label className="mb-2 block">Popper (Default)</Label>
        <Select defaultValue="apple">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grow">
        <Label className="mb-2 block">Item Aligned</Label>
        <Select defaultValue="apple">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
```

### Scrollable Select (`select-10`)

A select component with scrollable options

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Controlled Select (`select-11`)

A controlled select component

```tsx
"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ControlledSelectDemo() {
  const [value, setValue] = React.useState("blueberry");

  return (
    <Select onValueChange={setValue} value={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

### Select with Auto-Complete (`select-12`)

A select component with auto-complete functionality

```tsx
"use client";

import { X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { useCallback, useMemo } from "react";

type Country = Record<"value" | "label", string>;

const COUNTRIES = [
  {
    value: "us",
    label: "United States",
  },
  {
    value: "uk",
    label: "United Kingdom",
  },
  {
    value: "ca",
    label: "Canada",
  },
  {
    value: "au",
    label: "Australia",
  },
  {
    value: "fr",
    label: "France",
  },
  {
    value: "de",
    label: "Germany",
  },
  {
    value: "jp",
    label: "Japan",
  },
  {
    value: "br",
    label: "Brazil",
  },
] satisfies Country[];

export default function FancyMultiSelect() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Country[]>([COUNTRIES[1]]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = useCallback((country: Country) => {
    setSelected((prev) => prev.filter((s) => s.value !== country.value));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && inputValue === '' && selected.length > 0) {
        setSelected((prev) => prev.slice(0, -1));
      }
    },
    [selected, inputValue]
  );

  const filteredCountries = useMemo(
    () => COUNTRIES.filter((country) => !selected.includes(country)),
    [selected]
  );

  return (
    <div className="w-full">
      <Command className="overflow-visible">
        <div className="rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-1">
            {selected.map((country) => {
              return (
                <Badge
                  key={country.value}
                  variant="secondary"
                  className="select-none"
                >
                  {country.label}
                  <X
                    className="size-3 text-muted-foreground hover:text-foreground ml-2 cursor-pointer"
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    onClick={() => {
                      handleUnselect(country);
                    }}
                  />
                </Badge>
              );
            })}
            <CommandPrimitive.Input
              onKeyDown={handleKeyDown}
              onValueChange={setInputValue}
              value={inputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder="Select countries..."
              className="ml-2 flex-1 bg-transparent outline-hidden placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && !!filteredCountries.length && (
              <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-hidden">
                <CommandGroup className="h-full overflow-auto">
                  {filteredCountries.map((country) => {
                    return (
                      <CommandItem
                        key={country.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        onSelect={() => {
                          setInputValue("");
                          setSelected((prev) => [...prev, country]);
                        }}
                        className={"cursor-pointer"}
                      >
                        {country.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </div>
            )}
          </CommandList>
        </div>
      </Command>
    </div>
  );
}
```
