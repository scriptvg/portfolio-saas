# Item (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

12 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-item-1` | Basic item with title and description | registry:block | Basic item with title and description |
| `c-item-2` | Items with icon media and action buttons | registry:block | Items with icon media and action buttons |
| `c-item-3` | User item with avatar, info, and follow button | registry:block | User item with avatar, info, and follow button |
| `c-item-4` | Clickable navigation items with icons and chevron | registry:block | Clickable navigation items with icons and chevron |
| `c-item-5` | Item group with status badges | registry:block | Item group with status badges |
| `c-item-6` | File items with icon media, size, and actions | registry:block | File items with icon media, size, and actions |
| `c-item-7` | Items with keyboard shortcuts | registry:block | Items with keyboard shortcuts |
| `c-item-8` | Small-size items with badges | registry:block | Small-size items with badges |
| `c-item-9` | Team members with roles and multiple actions | registry:block | Team members with roles and multiple actions |
| `c-item-10` | Item with header and footer sections | registry:block | Item with header and footer sections |
| `c-item-11` | Integration items with connect actions | registry:block | Integration items with connect actions |
| `c-item-12` | Activity feed items with avatars and actions | registry:block | Activity feed items with avatars and actions |

## Source

### Basic item with title and description (`c-item-1`)

Target: `components/examples/c-item-1.tsx`

Basic item with title and description

```tsx
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-2">
      <Item>
        <ItemContent>
          <ItemTitle>Default Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Item</ItemTitle>
          <ItemDescription>
            An outlined item with visible border.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Item</ItemTitle>
          <ItemDescription>
            A muted item with subtle background.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
```

### Items with icon media and action buttons (`c-item-2`)

Target: `components/examples/c-item-2.tsx`

Items with icon media and action buttons

```tsx
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-2">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconPlaceholder
            lucide="MailIcon"
            tabler="IconMail"
            hugeicons="MailIcon"
            phosphor="EnvelopeIcon"
            remixicon="RiMailLine"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Email Notifications</ItemTitle>
          <ItemDescription>Receive updates via email</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconPlaceholder
            lucide="BellIcon"
            tabler="IconBell"
            hugeicons="NotificationIcon"
            phosphor="BellIcon"
            remixicon="RiNotificationLine"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Push Notifications</ItemTitle>
          <ItemDescription>Get notified on your device</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Enable</Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

### User item with avatar, info, and follow button (`c-item-3`)

Target: `components/examples/c-item-3.tsx`

User item with avatar, info, and follow button

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-2">
      <Item variant="outline" size="xs">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
              alt="Alex Johnson"
            />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Alex Johnson</ItemTitle>
          <ItemDescription>Senior Software Engineer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Follow
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
              alt="Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Sarah Chen</ItemTitle>
          <ItemDescription>Product Designer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Following</Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

### Clickable navigation items with icons and chevron (`c-item-4`)

Target: `components/examples/c-item-4.tsx`

Clickable navigation items with icons and chevron

```tsx
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col">
      <ItemGroup className="gap-0">
        <Item asChild size="xs">
          <a href="#">
            <ItemMedia variant="icon">
              <IconPlaceholder
                lucide="UserIcon"
                tabler="IconUser"
                hugeicons="UserIcon"
                phosphor="UserIcon"
                remixicon="RiUserLine"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Profile</ItemTitle>
              <ItemDescription>Manage your account details</ItemDescription>
            </ItemContent>
            <ItemActions>
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                className="text-muted-foreground size-4"
              />
            </ItemActions>
          </a>
        </Item>
        <ItemSeparator />
        <Item asChild size="xs">
          <a href="#">
            <ItemMedia variant="icon">
              <IconPlaceholder
                lucide="ShieldIcon"
                tabler="IconShield"
                hugeicons="Shield01Icon"
                phosphor="ShieldIcon"
                remixicon="RiShieldLine"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Security</ItemTitle>
              <ItemDescription>Password and two-factor auth</ItemDescription>
            </ItemContent>
            <ItemActions>
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                className="text-muted-foreground size-4"
              />
            </ItemActions>
          </a>
        </Item>
        <ItemSeparator />
        <Item asChild size="xs">
          <a href="#">
            <ItemMedia variant="icon">
              <IconPlaceholder
                lucide="CreditCardIcon"
                tabler="IconCreditCard"
                hugeicons="CreditCardIcon"
                phosphor="CreditCardIcon"
                remixicon="RiBankCardLine"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Billing</ItemTitle>
              <ItemDescription>Plans, invoices, and payment</ItemDescription>
            </ItemContent>
            <ItemActions>
              <IconPlaceholder
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
                hugeicons="ArrowRight01Icon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                className="text-muted-foreground size-4"
              />
            </ItemActions>
          </a>
        </Item>
      </ItemGroup>
    </div>
  )
}
```

### Item group with status badges (`c-item-5`)

Target: `components/examples/c-item-5.tsx`

Item group with status badges

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col">
      <ItemGroup>
        <Item variant="outline" size="xs">
          <ItemMedia>
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                alt="Sarah Chen"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Sarah Chen</ItemTitle>
            <ItemDescription>Team Lead</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="success" size="sm">
              Online
            </Badge>
          </ItemActions>
        </Item>
        <Item variant="outline" size="xs">
          <ItemMedia>
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                alt="Alex Johnson"
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Alex Johnson</ItemTitle>
            <ItemDescription>Developer</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="warning" size="sm">
              Away
            </Badge>
          </ItemActions>
        </Item>
        <Item variant="outline" size="xs">
          <ItemMedia>
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"
                alt="David Kim"
              />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>David Kim</ItemTitle>
            <ItemDescription>Designer</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="outline" size="sm">
              Offline
            </Badge>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  )
}
```

### File items with icon media, size, and actions (`c-item-6`)

Target: `components/examples/c-item-6.tsx`

File items with icon media, size, and actions

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-2">
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <IconPlaceholder
            lucide="FileTextIcon"
            tabler="IconFileText"
            hugeicons="File02Icon"
            phosphor="FileTextIcon"
            remixicon="RiFileTextLine"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Quarterly Report.pdf</ItemTitle>
          <ItemDescription>2.4 MB &middot; Updated 2 hours ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="success-light" size="sm">
            Final
          </Badge>
          <Button variant="outline" size="sm" className="ml-2">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <IconPlaceholder
            lucide="FileSpreadsheetIcon"
            tabler="IconFileSpreadsheet"
            hugeicons="GoogleSheetIcon"
            phosphor="FileTextIcon"
            remixicon="RiFileTextLine"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Budget 2025.xlsx</ItemTitle>
          <ItemDescription>856 KB &middot; Updated yesterday</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="warning-light" size="sm">
            Draft
          </Badge>
          <Button variant="outline" size="sm" className="ml-2">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <IconPlaceholder
            lucide="ImageIcon"
            tabler="IconPhoto"
            hugeicons="ImageIcon"
            phosphor="ImageIcon"
            remixicon="RiImageLine"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Hero Banner.png</ItemTitle>
          <ItemDescription>4.1 MB &middot; Updated 3 days ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="info-light" size="sm">
            Review
          </Badge>
          <Button variant="outline" size="sm" className="ml-2">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

### Items with keyboard shortcuts (`c-item-7`)

Target: `components/examples/c-item-7.tsx`

Items with keyboard shortcuts

```tsx
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd } from "@/components/ui/kbd"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const commands = [
  {
    icon: (
      <IconPlaceholder
        lucide="SearchIcon"
        tabler="IconSearch"
        hugeicons="Search01Icon"
        phosphor="MagnifyingGlassIcon"
        remixicon="RiSearchLine"
      />
    ),
    label: "Search",
    shortcut: "⌘K",
  },
  {
    icon: (
      <IconPlaceholder
        lucide="PlusIcon"
        tabler="IconPlus"
        hugeicons="PlusSignIcon"
        phosphor="PlusIcon"
        remixicon="RiAddLine"
      />
    ),
    label: "New File",
    shortcut: "⌘N",
  },
  {
    icon: (
      <IconPlaceholder
        lucide="SaveIcon"
        tabler="IconDeviceFloppy"
        hugeicons="FloppyDiskIcon"
        phosphor="FloppyDiskIcon"
        remixicon="RiSaveLine"
      />
    ),
    label: "Save",
    shortcut: "⌘S",
  },
  {
    icon: (
      <IconPlaceholder
        lucide="SettingsIcon"
        tabler="IconSettings"
        hugeicons="SettingsIcon"
        phosphor="GearIcon"
        remixicon="RiSettings3Line"
      />
    ),
    label: "Settings",
    shortcut: "⌘,",
  },
  {
    icon: (
      <IconPlaceholder
        lucide="LogOutIcon"
        tabler="IconLogout"
        hugeicons="LogoutSquare01Icon"
        phosphor="SignOutIcon"
        remixicon="RiLogoutBoxRLine"
      />
    ),
    label: "Sign Out",
    shortcut: "⌘Q",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-64 flex-col gap-0.5">
      {commands.map((cmd) => (
        <Item key={cmd.label} asChild size="xs">
          <a href="#">
            <ItemMedia variant="icon">{cmd.icon}</ItemMedia>
            <ItemContent>
              <ItemTitle>{cmd.label}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <Kbd>{cmd.shortcut}</Kbd>
            </ItemActions>
          </a>
        </Item>
      ))}
    </div>
  )
}
```

### Small-size items with badges (`c-item-8`)

Target: `components/examples/c-item-8.tsx`

Small-size items with badges

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const menuItems = [
  {
    icon: (
      <IconPlaceholder
        lucide="InboxIcon"
        tabler="IconInbox"
        hugeicons="InboxIcon"
        phosphor="TrayIcon"
        remixicon="RiInboxLine"
      />
    ),
    label: "Inbox",
    count: 12,
  },
  {
    icon: (
      <IconPlaceholder
        lucide="SendIcon"
        tabler="IconSend"
        hugeicons="SentIcon"
        phosphor="PaperPlaneTiltIcon"
        remixicon="RiSendInsLine"
      />
    ),
    label: "Sent",
    count: 0,
  },
  {
    icon: (
      <IconPlaceholder
        lucide="FileIcon"
        tabler="IconFile"
        hugeicons="FileEmpty02Icon"
        phosphor="FileIcon"
        remixicon="RiFileLine"
      />
    ),
    label: "Drafts",
    count: 3,
  },
  {
    icon: (
      <IconPlaceholder
        lucide="ArchiveIcon"
        tabler="IconArchive"
        hugeicons="Archive02Icon"
        phosphor="ArchiveIcon"
        remixicon="RiArchiveLine"
      />
    ),
    label: "Archive",
    count: 0,
  },
  {
    icon: (
      <IconPlaceholder
        lucide="Trash2Icon"
        tabler="IconTrash"
        hugeicons="Delete02Icon"
        phosphor="TrashIcon"
        remixicon="RiDeleteBinLine"
      />
    ),
    label: "Trash",
    count: 0,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-64 flex-col gap-0.5">
      {menuItems.map((item) => (
        <Item key={item.label} size="xs" asChild>
          <a href="#">
            <ItemMedia variant="icon">{item.icon}</ItemMedia>
            <ItemContent>
              <ItemTitle>{item.label}</ItemTitle>
            </ItemContent>
            {item.count > 1 && (
              <ItemActions>
                <Badge
                  variant="success-light"
                  className="rounded-full"
                  size="xs"
                >
                  {item.count}
                </Badge>
              </ItemActions>
            )}
          </a>
        </Item>
      ))}
    </div>
  )
}
```

### Team members with roles and multiple actions (`c-item-9`)

Target: `components/examples/c-item-9.tsx`

Team members with roles and multiple actions

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const members = [
  {
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    role: "Admin",
    roleVariant: "default" as const,
  },
  {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    role: "Editor",
    roleVariant: "info-light" as const,
  },
  {
    name: "Emily Park",
    email: "emily@example.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    role: "Viewer",
    roleVariant: "outline" as const,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col">
      <ItemGroup>
        {members.map((member, index) => (
          <div key={member.email}>
            <Item variant="outline" size="xs">
              <ItemMedia>
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{member.name}</ItemTitle>
                <ItemDescription>{member.email}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Badge variant={member.roleVariant} size="sm">
                  {member.role}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-1 size-7">
                      <IconPlaceholder
                        lucide="MoreHorizontalIcon"
                        tabler="IconDots"
                        hugeicons="MoreHorizontalCircle01Icon"
                        phosphor="DotsThreeIcon"
                        remixicon="RiMoreLine"
                      />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Change Role</DropdownMenuItem>
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ItemActions>
            </Item>
          </div>
        ))}
      </ItemGroup>
    </div>
  )
}
```

### Item with header and footer sections (`c-item-10`)

Target: `components/examples/c-item-10.tsx`

Item with header and footer sections

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-3">
      <Item variant="outline">
        <ItemHeader>
          <div className="flex items-center gap-2">
            <IconPlaceholder
              lucide="FolderIcon"
              tabler="IconFolder"
              hugeicons="FolderIcon"
              phosphor="FolderIcon"
              remixicon="RiFolderLine"
              className="text-muted-foreground size-3.5"
              aria-hidden="true"
            />
            <span className="text-muted-foreground text-xs">Project</span>
          </div>
          <Badge variant="info-light" size="xs">
            In Progress
          </Badge>
        </ItemHeader>
        <ItemContent>
          <ItemTitle>Website Redesign</ItemTitle>
          <ItemDescription>
            Complete overhaul of the marketing site with a focus on conversion
            optimization and modern design patterns.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
        <ItemFooter>
          <AvatarGroup>
            <Avatar size="sm">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                alt="SC"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                alt="AJ"
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"
                alt="EP"
              />
              <AvatarFallback>EP</AvatarFallback>
            </Avatar>
          </AvatarGroup>
          <div className="flex items-center gap-2">
            <Progress value={65} className="w-20" />
            <span className="text-muted-foreground text-xs">65%</span>
          </div>
        </ItemFooter>
      </Item>
    </div>
  )
}
```

### Integration items with connect actions (`c-item-11`)

Target: `components/examples/c-item-11.tsx`

Integration items with connect actions

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col">
      <ItemGroup>
        <Item variant="outline" size="xs">
          <ItemMedia variant="icon">
            <IconPlaceholder
              lucide="GitBranchIcon"
              tabler="IconGitBranch"
              hugeicons="GitBranchIcon"
              phosphor="GitBranchIcon"
              remixicon="RiGitBranchLine"
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>GitHub</ItemTitle>
            <ItemDescription>
              Connect repositories and sync code
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="success-light" size="sm">
              Connected
            </Badge>
          </ItemActions>
        </Item>
        <Item variant="outline" size="xs">
          <ItemMedia variant="icon">
            <IconPlaceholder
              lucide="FigmaIcon"
              tabler="IconBrandFigma"
              hugeicons="FigmaIcon"
              phosphor="FigmaLogoIcon"
              remixicon="RiFigmaLine"
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Figma</ItemTitle>
            <ItemDescription>
              Import designs and sync components
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="success-light" size="sm">
              Connected
            </Badge>
          </ItemActions>
        </Item>
        <Item variant="outline" size="xs">
          <ItemMedia variant="icon">
            <IconPlaceholder
              lucide="SlackIcon"
              tabler="IconBrandSlack"
              hugeicons="SlackIcon"
              phosphor="SlackLogoIcon"
              remixicon="RiSlackLine"
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Slack</ItemTitle>
            <ItemDescription>Send notifications to channels</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Connect
            </Button>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  )
}
```

### Activity feed items with avatars and actions (`c-item-12`)

Target: `components/examples/c-item-12.tsx`

Activity feed items with avatars and actions

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const activities = [
  {
    name: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    action: "deployed",
    target: "v2.4.1 to production",
    badge: "success-light" as const,
    time: "5 min ago",
  },
  {
    name: "Marcus Johnson",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    action: "merged",
    target: "feat/dark-mode into main",
    badge: "info-light" as const,
    time: "32 min ago",
  },
  {
    name: "Emily Park",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    action: "opened",
    target: "issue #284: Fix mobile nav",
    badge: "warning-light" as const,
    time: "1 hour ago",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col">
      <ItemGroup>
        {activities.map((activity, index) => (
          <div key={index}>
            <Item variant="outline" size="xs">
              <ItemMedia>
                <Avatar size="sm">
                  <AvatarImage src={activity.avatar} alt={activity.name} />
                  <AvatarFallback>
                    {activity.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{activity.name}</ItemTitle>
                <ItemDescription>
                  <Badge
                    variant={activity.badge}
                    size="xs"
                    className="mr-1 align-text-top"
                  >
                    {activity.action}
                  </Badge>
                  {activity.target}
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {activity.time}
                </span>
              </ItemActions>
            </Item>
          </div>
        ))}
      </ItemGroup>
    </div>
  )
}
```
