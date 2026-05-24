# Tabs (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

9 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-tabs-1` | Basic tabs. | registry:block | Basic tabs. |
| `c-tabs-2` | Tabs with line variant. | registry:block | Tabs with line variant. |
| `c-tabs-3` | Tabs with vertical orientation. | registry:block | Tabs with vertical orientation. |
| `c-tabs-4` | Tabs with vertical orientation and line variant. | registry:block | Tabs with vertical orientation and line variant. |
| `c-tabs-5` | Tabs with icons. | registry:block | Tabs with icons. |
| `c-tabs-6` | Tabs with icons | registry:block | Tabs with icons |
| `c-tabs-7` | Tabs with badge counts | registry:block | Tabs with badge counts |
| `c-tabs-8` | Tabs with icons and line variant | registry:block | Tabs with icons and line variant |
| `c-tabs-9` | Segmented control tabs | registry:block | Segmented control tabs |

## Source

### Basic tabs. (`c-tabs-1`)

Target: `components/examples/c-tabs-1.tsx`

Basic tabs.

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Account</CardTitle>
              <CardDescription className="text-sm">
                Update your account information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">
                  Name
                </Label>
                <Input id="name" defaultValue="Sarah Johnson" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm">
                  Username
                </Label>
                <Input id="username" defaultValue="@sarahj" className="h-9" />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Password</CardTitle>
              <CardDescription className="text-sm">
                Change your password here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current" className="text-sm">
                  Current password
                </Label>
                <Input id="current" type="password" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new" className="text-sm">
                  New password
                </Label>
                <Input id="new" type="password" className="h-9" />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Update password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Tabs with line variant. (`c-tabs-2`)

Target: `components/examples/c-tabs-2.tsx`

Tabs with line variant.

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList variant="line" className="mb-3.5 w-full">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Account</CardTitle>
              <CardDescription className="text-sm">
                Update your account information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="underline-name" className="text-sm">
                  Name
                </Label>
                <Input
                  id="underline-name"
                  defaultValue="Alex Chen"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="underline-email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="underline-email"
                  type="email"
                  defaultValue="alex.chen@example.com"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Password</CardTitle>
              <CardDescription className="text-sm">
                Change your password here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="underline-current" className="text-sm">
                  Current password
                </Label>
                <Input id="underline-current" type="password" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="underline-new" className="text-sm">
                  New password
                </Label>
                <Input id="underline-new" type="password" className="h-9" />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Update password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Settings</CardTitle>
              <CardDescription className="text-sm">
                Manage your preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="underline-theme" className="text-sm">
                  Theme
                </Label>
                <Input
                  id="underline-theme"
                  defaultValue="Light"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="underline-language" className="text-sm">
                  Language
                </Label>
                <Input
                  id="underline-language"
                  defaultValue="English"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Tabs with vertical orientation. (`c-tabs-3`)

Target: `components/examples/c-tabs-3.tsx`

Tabs with vertical orientation.

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Pattern() {
  return (
    <div className="w-full max-w-lg">
      <Tabs defaultValue="account" orientation="vertical" className="gap-5">
        <TabsList className="w-40 shrink-0">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Account</CardTitle>
              <CardDescription className="text-sm">
                Update your account information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vertical-name" className="text-sm">
                  Name
                </Label>
                <Input
                  id="vertical-name"
                  defaultValue="Emma Wilson"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vertical-email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="vertical-email"
                  type="email"
                  defaultValue="emma.wilson@example.com"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Password</CardTitle>
              <CardDescription className="text-sm">
                Change your password here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vertical-current" className="text-sm">
                  Current password
                </Label>
                <Input id="vertical-current" type="password" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vertical-new" className="text-sm">
                  New password
                </Label>
                <Input id="vertical-new" type="password" className="h-9" />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Update password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Settings</CardTitle>
              <CardDescription className="text-sm">
                Manage your preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vertical-theme" className="text-sm">
                  Theme
                </Label>
                <Input
                  id="vertical-theme"
                  defaultValue="Light"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vertical-language" className="text-sm">
                  Language
                </Label>
                <Input
                  id="vertical-language"
                  defaultValue="English"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Tabs with vertical orientation and line variant. (`c-tabs-4`)

Target: `components/examples/c-tabs-4.tsx`

Tabs with vertical orientation and line variant.

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Pattern() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-6">
      <Tabs defaultValue="account" orientation="vertical" className="gap-5">
        <TabsList variant="line" className="w-40 shrink-0">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Account</CardTitle>
              <CardDescription className="text-sm">
                Update your account information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="underline-vertical-name" className="text-sm">
                  Name
                </Label>
                <Input
                  id="underline-vertical-name"
                  defaultValue="Michael Brown"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="underline-vertical-email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="underline-vertical-email"
                  type="email"
                  defaultValue="michael.brown@example.com"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Password</CardTitle>
              <CardDescription className="text-sm">
                Change your password here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="underline-vertical-current" className="text-sm">
                  Current password
                </Label>
                <Input
                  id="underline-vertical-current"
                  type="password"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="underline-vertical-new" className="text-sm">
                  New password
                </Label>
                <Input
                  id="underline-vertical-new"
                  type="password"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Update password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Settings</CardTitle>
              <CardDescription className="text-sm">
                Manage your preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="underline-vertical-theme" className="text-sm">
                  Theme
                </Label>
                <Input
                  id="underline-vertical-theme"
                  defaultValue="Light"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="underline-vertical-language"
                  className="text-sm"
                >
                  Language
                </Label>
                <Input
                  id="underline-vertical-language"
                  defaultValue="English"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Tabs with icons. (`c-tabs-5`)

Target: `components/examples/c-tabs-5.tsx`

Tabs with icons.

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">
            <IconPlaceholder
              lucide="UserIcon"
              tabler="IconUser"
              hugeicons="UserIcon"
              phosphor="UserIcon"
              remixicon="RiUserLine"
            />
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            <IconPlaceholder
              lucide="LockIcon"
              tabler="IconLock"
              hugeicons="SquareLock01Icon"
              phosphor="LockSimpleIcon"
              remixicon="RiLockLine"
            />
            Password
          </TabsTrigger>
          <TabsTrigger value="settings">
            <IconPlaceholder
              lucide="SettingsIcon"
              tabler="IconSettings"
              hugeicons="SettingsIcon"
              phosphor="GearIcon"
              remixicon="RiSettings3Line"
            />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Account</CardTitle>
              <CardDescription className="text-sm">
                Update your account information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="icons-name" className="text-sm">
                  Name
                </Label>
                <Input
                  id="icons-name"
                  defaultValue="Sarah Johnson"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icons-email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="icons-email"
                  type="email"
                  defaultValue="sarah.johnson@example.com"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Password</CardTitle>
              <CardDescription className="text-sm">
                Change your password here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="icons-current" className="text-sm">
                  Current password
                </Label>
                <Input id="icons-current" type="password" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icons-new" className="text-sm">
                  New password
                </Label>
                <Input id="icons-new" type="password" className="h-9" />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Update password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Settings</CardTitle>
              <CardDescription className="text-sm">
                Manage your preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="icons-theme" className="text-sm">
                  Theme
                </Label>
                <Input id="icons-theme" defaultValue="Light" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icons-language" className="text-sm">
                  Language
                </Label>
                <Input
                  id="icons-language"
                  defaultValue="English"
                  className="h-9"
                />
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button size="sm">Save settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Tabs with icons (`c-tabs-6`)

Target: `components/examples/c-tabs-6.tsx`

Tabs with icons

```tsx
import { Card, CardContent } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Tabs defaultValue="overview">
        <TabsList className="w-full">
          <TabsTrigger value="overview">
            <IconPlaceholder
              lucide="LayoutDashboardIcon"
              tabler="IconLayoutDashboard"
              hugeicons="DashboardSquare02Icon"
              phosphor="LayoutIcon"
              remixicon="RiDashboardLine"
              className="size-4"
            />
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <IconPlaceholder
              lucide="BarChart3Icon"
              tabler="IconChartBar"
              hugeicons="ChartBarLineIcon"
              phosphor="ChartBarIcon"
              remixicon="RiBarChartBoxLine"
              className="size-4"
            />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <IconPlaceholder
              lucide="SettingsIcon"
              tabler="IconSettings"
              hugeicons="SettingsIcon"
              phosphor="GearIcon"
              remixicon="RiSettings3Line"
              className="size-4"
            />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardContent>Overview dashboard content goes here.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardContent>Analytics charts and metrics.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardContent>Application settings and preferences.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Tabs with badge counts (`c-tabs-7`)

Target: `components/examples/c-tabs-7.tsx`

Tabs with badge counts

```tsx
import { Badge } from "@/components/reui/badge"

import { Card, CardContent } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Pattern() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Tabs defaultValue="inbox">
        <TabsList variant="line" className="mb-3.5 w-full">
          <TabsTrigger value="inbox" className="gap-2">
            Inbox
            <Badge variant="primary-light" size="sm">
              12
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="drafts" className="gap-2">
            Drafts
            <Badge variant="info-light" size="sm">
              3
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="sent" className="gap-2">
            Sent
          </TabsTrigger>
          <TabsTrigger value="spam" className="gap-2">
            Spam
            <Badge variant="destructive-light" size="sm">
              24
            </Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="inbox">
          <Card>
            <CardContent>12 unread messages in your inbox.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="drafts">
          <Card>
            <CardContent>3 drafts waiting to be sent.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sent">
          <Card>
            <CardContent>All sent messages appear here.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="spam">
          <Card>
            <CardContent>24 spam messages detected.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Tabs with icons and line variant (`c-tabs-8`)

Target: `components/examples/c-tabs-8.tsx`

Tabs with icons and line variant

```tsx
import { Badge } from "@/components/reui/badge"

import { Card, CardContent } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$9",
    description: "For individuals and small projects",
    icon: (
      <IconPlaceholder
        lucide="UserIcon"
        tabler="IconUser"
        hugeicons="UserIcon"
        phosphor="UserIcon"
        remixicon="RiUserLine"
        className="size-5"
      />
    ),
    tablerIcon: "IconUser",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    description: "For growing teams and businesses",
    icon: (
      <IconPlaceholder
        lucide="ZapIcon"
        tabler="IconBolt"
        hugeicons="ZapIcon"
        phosphor="LightningIcon"
        remixicon="RiFlashlightLine"
        className="size-5"
      />
    ),
    tablerIcon: "IconBolt",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99",
    description: "For large organizations",
    icon: (
      <IconPlaceholder
        lucide="BuildingIcon"
        tabler="IconBuilding"
        hugeicons="Building01Icon"
        phosphor="BuildingsIcon"
        remixicon="RiBuildingLine"
        className="size-5"
      />
    ),
    tablerIcon: "IconBuilding",
  },
]

export function Pattern() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Tabs defaultValue="projects" orientation="vertical" className="gap-5">
        <TabsList variant="line" className="w-48 shrink-0">
          <TabsTrigger value="projects" className="justify-start gap-2">
            <IconPlaceholder
              lucide="FolderIcon"
              tabler="IconFolder"
              hugeicons="FolderIcon"
              phosphor="FolderIcon"
              remixicon="RiFolderLine"
              className="size-4"
            />
            Projects
            <Badge variant="secondary" size="sm" className="ml-auto">
              8
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="tasks" className="justify-start gap-2">
            <IconPlaceholder
              lucide="CheckSquareIcon"
              tabler="IconCheckbox"
              hugeicons="CheckListIcon"
              phosphor="CheckSquareIcon"
              remixicon="RiCheckboxLine"
              className="size-4"
            />
            Tasks
            <Badge variant="primary-light" size="sm" className="ml-auto">
              24
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="team" className="justify-start gap-2">
            <IconPlaceholder
              lucide="UsersIcon"
              tabler="IconUsers"
              hugeicons="UserGroupIcon"
              phosphor="UsersIcon"
              remixicon="RiGroupLine"
              className="size-4"
            />
            Team
          </TabsTrigger>
          <TabsTrigger value="reports" className="justify-start gap-2">
            <IconPlaceholder
              lucide="FileTextIcon"
              tabler="IconFileText"
              hugeicons="File02Icon"
              phosphor="FileTextIcon"
              remixicon="RiFileTextLine"
              className="size-4"
            />
            Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <Card>
            <CardContent>
              <h3 className="text-foreground mb-2 font-semibold">
                Active Projects
              </h3>
              <p>8 projects are currently in progress across your workspace.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks">
          <Card>
            <CardContent>
              <h3 className="text-foreground mb-2 font-semibold">
                Pending Tasks
              </h3>
              <p>24 tasks need your attention this week.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardContent>
              <h3 className="text-foreground mb-2 font-semibold">
                Team Members
              </h3>
              <p>Manage your team and their access permissions.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardContent>
              <h3 className="text-foreground mb-2 font-semibold">Reports</h3>
              <p>View generated reports and export data.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

### Segmented control tabs (`c-tabs-9`)

Target: `components/examples/c-tabs-9.tsx`

Segmented control tabs

```tsx
"use client"

import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [period, setPeriod] = useState("monthly")

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-6">
      <Tabs value={period} onValueChange={setPeriod}>
        <TabsList className="w-full">
          <TabsTrigger value="daily" className="gap-1.5">
            <IconPlaceholder
              lucide="CalendarIcon"
              tabler="IconCalendar"
              hugeicons="Calendar04Icon"
              phosphor="CalendarBlankIcon"
              remixicon="RiCalendarLine"
              className="size-3.5"
            />
            Daily
          </TabsTrigger>
          <TabsTrigger value="weekly" className="gap-1.5">
            <IconPlaceholder
              lucide="SquareCheckIcon"
              tabler="IconSquareCheck"
              hugeicons="CheckmarkSquare02Icon"
              phosphor="CheckSquareIcon"
              remixicon="RiCheckboxLine"
              className="size-4"
            />
            Weekly
          </TabsTrigger>
          <TabsTrigger value="monthly" className="gap-1.5">
            <IconPlaceholder
              lucide="UsersIcon"
              tabler="IconUsers"
              hugeicons="UserMultiple02Icon"
              phosphor="UsersIcon"
              remixicon="RiGroupLine"
              className="size-4"
            />
            Monthly
          </TabsTrigger>
          <TabsTrigger value="yearly" className="gap-1.5">
            <IconPlaceholder
              lucide="CalendarClockIcon"
              tabler="IconCalendarTime"
              hugeicons="Calendar02Icon"
              phosphor="CalendarCheckIcon"
              remixicon="RiCalendarTodoLine"
              className="size-3.5"
            />
            Yearly
          </TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <Card>
            <CardContent className="text-center">
              <p className="text-3xl font-bold">1,284</p>
              <p className="text-muted-foreground mt-1 text-sm">
                Visitors today
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly">
          <Card>
            <CardContent className="text-center">
              <p className="text-3xl font-bold">8,942</p>
              <p className="text-muted-foreground mt-1 text-sm">
                Visitors this week
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly">
          <Card>
            <CardContent className="text-center">
              <p className="text-3xl font-bold">32,156</p>
              <p className="text-muted-foreground mt-1 text-sm">
                Visitors this month
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="yearly">
          <Card>
            <CardContent className="text-center">
              <p className="text-3xl font-bold">384,721</p>
              <p className="text-muted-foreground mt-1 text-sm">
                Visitors this year
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```
