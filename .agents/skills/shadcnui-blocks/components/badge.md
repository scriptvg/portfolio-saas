# Badge (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/badge](https://www.shadcnui-blocks.com/components/badge).
17 variant(s). Install base UI with `pnpm dlx shadcn@latest add badge` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `badge-01` | Default Badge | A default badge component |
| `badge-02` | Secondary Badge | A secondary badge component |
| `badge-03` | Outline Badge | An outline badge component |
| `badge-04` | Destructive Badge | A destructive badge component |
| `badge-05` | Rounded Badge | A rounded badge component |
| `badge-06` | Gradient Badge | A gradient badge component |
| `badge-07` | Gradient Outline Badge | A gradient outline badge component |
| `badge-08` | Soft Badge | A soft badge component |
| `badge-09` | Status Badge | A status badge component |
| `badge-10` | Badge with Image | A badge with image component |
| `badge-11` | Badge with Icon | A badge with icon component |
| `badge-12` | Clickable Badge | A clickable badge component |
| `badge-13` | Clickable Link Badge | A clickable link badge component |
| `badge-14` | Badge with number | A badge with number component |
| `badge-15` | Plan features with badge | A plan features with badge component |
| `badge-16` | Tabs with badge | A tabs with badge component |
| `badge-17` | Icon button | An icon button component |

## Variant source

### Default Badge (`badge-01`)

A default badge component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeDemo = () => {
  return <Badge>Default</Badge>;
};

export default BadgeDemo;
```

### Secondary Badge (`badge-02`)

A secondary badge component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeSecondaryDemo = () => {
  return <Badge variant="secondary">Secondary</Badge>;
};

export default BadgeSecondaryDemo;
```

### Outline Badge (`badge-03`)

An outline badge component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeOutlineDemo = () => {
  return <Badge variant="outline">Outline</Badge>;
};

export default BadgeOutlineDemo;
```

### Destructive Badge (`badge-04`)

A destructive badge component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeDestructiveDemo = () => {
  return <Badge variant="destructive">Destructive</Badge>;
};

export default BadgeDestructiveDemo;
```

### Rounded Badge (`badge-05`)

A rounded badge component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeRoundedDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Badge className="rounded-none">Rectangular</Badge>
      <Badge className="rounded">Rounded</Badge>
      <Badge>Default</Badge>
    </div>
  );
};

export default BadgeRoundedDemo;
```

### Gradient Badge (`badge-06`)

A gradient badge component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeGradientDemo = () => {
  return (
    <Badge className="rounded-full border-none bg-linear-to-r from-sky-500 to-indigo-600 text-white">
      Gradient
    </Badge>
  );
};

export default BadgeGradientDemo;
```

### Gradient Outline Badge (`badge-07`)

A gradient outline badge component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeGradientOutlineDemo = () => {
  return (
    <div className="flex items-center justify-center rounded-full bg-linear-to-r from-sky-400 to-indigo-600 p-0.5">
      <Badge className="rounded-full border-none bg-background text-foreground">
        Gradient Outline
      </Badge>
    </div>
  );
};

export default BadgeGradientOutlineDemo;
```

### Soft Badge (`badge-08`)

A soft badge component

```tsx
import { Badge } from "@/components/ui/badge";

const SoftBadgeDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="gap-1.5 bg-amber-600/10 text-amber-500 shadow-none hover:bg-amber-600/10 dark:bg-amber-600/20">
        <div className="h-1.5 w-1.5 rounded-full bg-amber-500" /> In Progress
      </Badge>
      <Badge className="gap-1.5" variant="destructive">
        <div className="h-1.5 w-1.5 rounded-full bg-red-400" /> Blocked
      </Badge>
      <Badge className="gap-1.5 bg-emerald-600/10 text-emerald-500 shadow-none hover:bg-emerald-600/10 dark:bg-emerald-600/20">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Done
      </Badge>
    </div>
  );
};

export default SoftBadgeDemo;
```

### Status Badge (`badge-09`)

A status badge component

```tsx
import { Badge } from "@/components/ui/badge";

const StatusBadgeDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="gap-1.5 border-amber-600/40 bg-amber-600/10 text-amber-500 shadow-none hover:bg-amber-600/10 dark:bg-amber-600/20">
        <div className="size-1.5 rounded-full bg-amber-500" /> In Progress
      </Badge>
      <Badge className="gap-1.5 border-destructive/30" variant="destructive">
        <div className="size-1.5 rounded-full bg-red-400" /> Blocked
      </Badge>
      <Badge className="gap-1.5 border-emerald-600/40 bg-emerald-600/10 text-emerald-500 shadow-none hover:bg-emerald-600/10 dark:bg-emerald-600/20">
        <div className="size-1.5 rounded-full bg-emerald-500" /> Done
      </Badge>
    </div>
  );
};

export default StatusBadgeDemo;
```

### Badge with Image (`badge-10`)

A badge with image component

```tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const BadgeWithImageDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="h-7 gap-1.5 rounded-full pl-0.75" variant="outline">
        <Image
          alt=""
          className="aspect-square rounded-full"
          height={20}
          src="https://github.com/shadcn.png"
          width={20}
        />
        shadcn
      </Badge>
      <Badge className="h-7 gap-1.5 rounded-full pr-0.75" variant="outline">
        shadcn
        <Image
          alt=""
          className="h-5 w-5 rounded-full"
          height={20}
          src="https://github.com/shadcn.png"
          width={20}
        />
      </Badge>
    </div>
  );
};

export default BadgeWithImageDemo;
```

### Badge with Icon (`badge-11`)

A badge with icon component

```tsx
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BadgeWithIconDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>
        <ArrowLeftIcon className="h-4 w-4" />
        Left
      </Badge>
      <Badge>
        Right
        <ArrowRightIcon className="h-4 w-4" />
      </Badge>
      <Badge variant="destructive">
        Remove
        <XIcon className="h-4 w-4" />
      </Badge>
    </div>
  );
};

export default BadgeWithIconDemo;
```

### Clickable Badge (`badge-12`)

A clickable badge component

```tsx
import { badgeVariants } from "@/components/ui/badge";

const ClickableBadgeDemo = () => {
  return (
    <button
      className={badgeVariants({
        className: "cursor-pointer select-none focus:ring-offset-1",
      })}
    >
      Clickable
    </button>
  );
};

export default ClickableBadgeDemo;
```

### Clickable Link Badge (`badge-13`)

A clickable link badge component

```tsx
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const ClickableLinkBadgeDemo = () => {
  return (
    <Badge asChild className="h-7 gap-1.5 pl-0.75" variant="outline">
      <Link href="https://github.com/shadcn" target="_blank">
        <Image
          alt=""
          className="h-5 w-5 rounded-full"
          height={20}
          src="https://github.com/shadcn.png"
          width={20}
        />
        shadcn
      </Link>
    </Badge>
  );
};

export default ClickableLinkBadgeDemo;
```

### Badge with number (`badge-14`)

A badge with number component

```tsx
import { Badge } from "@/components/ui/badge";

const BadgeWithNumber = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="gap-2">
        Projects <span className="opacity-70">6</span>
      </Badge>
      <Badge className="gap-2" variant="outline">
        Members <span className="text-muted-foreground">11</span>
      </Badge>
      <Badge className="gap-2" variant="secondary">
        Tasks <span className="text-muted-foreground">7</span>
      </Badge>
    </div>
  );
};

export default BadgeWithNumber;
```

### Plan features with badge (`badge-15`)

A plan features with badge component

```tsx
import { CheckIcon, FlaskConicalIcon, SparklesIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Unlimited Projects",
  },
  {
    title: "Custom Integrations",
    isNew: true,
  },
  {
    title: "Advanced Analytics",
    isExperimental: true,
  },
  {
    title: "Priority Support",
  },
  {
    title: "Team Collaboration",
  },
];

const PlanFeaturesWithBadge = () => {
  return (
    <ul className="space-y-2.5">
      {features.map((feature) => (
        <li className="flex items-center gap-2 text-sm" key={feature.title}>
          <CheckIcon className="size-4" />
          {feature.title}
          {feature.isExperimental && (
            <Badge
              className="ms-1 border-amber-600/30 bg-amber-600/10 text-amber-600 dark:bg-amber-600/15"
              variant="outline"
            >
              <FlaskConicalIcon /> Experimental
            </Badge>
          )}
          {feature.isNew && (
            <Badge
              className="ms-1 border-blue-600/30 bg-blue-600/10 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400"
              variant="outline"
            >
              <SparklesIcon /> New
            </Badge>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PlanFeaturesWithBadge;
```

### Tabs with badge (`badge-16`)

A tabs with badge component

```tsx
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    name: "Profile",
    value: "profile",
  },
  {
    name: "Projects",
    value: "projects",
    count: "10",
  },
  {
    name: "Messages",
    value: "messages",
    count: "5",
  },
  {
    name: "Settings",
    value: "settings",
  },
];

const TabsWithBadge = () => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList>
        {tabs.map((feature) => (
          <TabsTrigger key={feature.value} value={feature.value}>
            {feature.name}
            {feature.count && (
              <Badge className="min-w-5.5 px-1">{feature.count}</Badge>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabsWithBadge;
```

### Icon button (`badge-17`)

An icon button component

```tsx
import { Bell, MailIcon, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BadgeDemo = () => {
  return (
    <div className="flex items-center gap-5">
      <Button className="relative" size="icon" variant="outline">
        <Bell />
        <Badge className="absolute top-0 right-0 min-w-5.5 translate-x-1/2 -translate-y-1/2 px-1">
          2
        </Badge>
      </Button>
      <Button className="relative" size="icon" variant="outline">
        <MailIcon />
        <Badge
          className="absolute top-0 right-0 min-w-5.5 translate-x-1/2 -translate-y-1/2 px-1"
          variant="destructive"
        >
          @
        </Badge>
      </Button>
      <Button className="relative rounded-full" size="icon" variant="outline">
        <MessageSquare />
        <Badge
          className="absolute -top-2 -right-2 min-w-4.5 px-0.75 py-0.25"
          variant="destructive"
        >
          @
        </Badge>
      </Button>
    </div>
  );
};

export default BadgeDemo;
```
