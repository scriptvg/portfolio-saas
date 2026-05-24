# Switch (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/switch](https://www.shadcnui-blocks.com/components/switch).
7 variant(s). Install base UI with `pnpm dlx shadcn@latest add switch` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `switch-01` | Default Switch | A default switch component |
| `switch-02` | Switch with Label | A switch component with a label |
| `switch-03` | Disabled Switch | A disabled switch component |
| `switch-04` | Switch Colors | A switch component with different colors |
| `switch-05` | Switch Sizes | A switch component with different sizes |
| `switch-06` | Controlled Switch | A controlled switch component |
| `switch-07` | Switch Customization | A customized switch component |

## Variant source

### Default Switch (`switch-01`)

A default switch component

```tsx
import { Switch } from "@/components/ui/switch";

const SwitchDemo = () => {
  return <Switch />;
};

export default SwitchDemo;
```

### Switch with Label (`switch-02`)

A switch component with a label

```tsx
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchWithLabelDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch id="enable-feature" />
      <Label htmlFor="enable-feature">Enable Feature</Label>
    </div>
  );
};

export default SwitchWithLabelDemo;
```

### Disabled Switch (`switch-03`)

A disabled switch component

```tsx
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const DisabledSwitchDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch disabled id="enable-feature-disabled" />
      <Label htmlFor="enable-feature-disabled">Enable Feature</Label>
    </div>
  );
};

export default DisabledSwitchDemo;
```

### Switch Colors (`switch-04`)

A switch component with different colors

```tsx
import { Switch } from "@/components/ui/switch";

const SwitchColorsDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked />
      <Switch className="data-[state=checked]:bg-green-500" defaultChecked />
      <Switch className="data-[state=checked]:bg-indigo-500" defaultChecked />
      <Switch className="data-[state=checked]:bg-rose-500" defaultChecked />
    </div>
  );
};

export default SwitchColorsDemo;
```

### Switch Sizes (`switch-05`)

A switch component with different sizes

```tsx
import { Switch as SwitchPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace the `Switch` component in `@components/ui/switch` with below component and use it here to support custom size.
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    thumbClassName?: string;
  }
>(({ className, thumbClassName, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        thumbClassName
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

const SwitchSizesDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked />
      <Switch className="h-6 w-10" defaultChecked thumbClassName="h-5 w-5" />
      <Switch
        className="h-7 w-12"
        defaultChecked
        thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
      />
      <Switch
        className="h-8 w-14"
        defaultChecked
        thumbClassName="h-7 w-7 data-[state=checked]:translate-x-6"
      />
    </div>
  );
};

export default SwitchSizesDemo;
```

### Controlled Switch (`switch-06`)

A controlled switch component

```tsx
"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const ControlledSwitchDemo = () => {
  const [checked, setChecked] = useState<boolean>();

  return <Switch checked={checked} onCheckedChange={setChecked} />;
};

export default ControlledSwitchDemo;
```

### Switch Customization (`switch-07`)

A customized switch component

```tsx
"use client";

import { MoonIcon, SunMediumIcon } from "lucide-react";
import { Switch as SwitchPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "@/lib/utils";

// Replace the `Switch` component in `@components/ui/switch` with below component and use it here to support this customization.
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    icon?: React.ReactNode;
    thumbClassName?: string;
  }
>(({ className, icon, thumbClassName, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none flex h-4 w-4 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        thumbClassName
      )}
    >
      {icon ? icon : null}
    </SwitchPrimitive.Thumb>
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

const SwitchCustomizationDemo = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <Switch
      checked={isDarkMode}
      className="h-7 w-12"
      icon={
        isDarkMode ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunMediumIcon className="h-4 w-4" />
        )
      }
      onCheckedChange={setIsDarkMode}
      thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
    />
  );
};

export default SwitchCustomizationDemo;
```
