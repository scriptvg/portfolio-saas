# Command (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

8 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-command-1` | Basic command | registry:block | Basic command |
| `c-command-2` | Command with shortcuts | registry:block | Command with shortcuts |
| `c-command-3` | Command with groups | registry:block | Command with groups |
| `c-command-4` | Command with many groups | registry:block | Command with many groups |
| `c-command-5` | File search command palette | registry:block | File search command palette |
| `c-command-6` | User search command with avatars | registry:block | User search command with avatars |
| `c-command-7` | Action palette with keyboard shortcuts | registry:block | Action palette with keyboard shortcuts |
| `c-command-8` | Command with recent and favorites sections | registry:block | Command with recent and favorites sections |

## Source

### Basic command (`c-command-1`)

Target: `components/examples/c-command-1.tsx`

Basic command

```tsx
import { Card, CardContent } from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <CardContent className="p-0">
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <IconPlaceholder
                  lucide="CalendarIcon"
                  tabler="IconCalendarEvent"
                  hugeicons="Calendar04Icon"
                  phosphor="CalendarBlankIcon"
                  remixicon="RiCalendarLine"
                />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="SmileIcon"
                  tabler="IconMoodSmile"
                  hugeicons="SmileIcon"
                  phosphor="SmileyIcon"
                  remixicon="RiEmotionHappyLine"
                />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <IconPlaceholder
                  lucide="CalculatorIcon"
                  tabler="IconCalculator"
                  hugeicons="Calculator01Icon"
                  phosphor="CalculatorIcon"
                  remixicon="RiCalculatorLine"
                />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <IconPlaceholder
                  lucide="UserIcon"
                  tabler="IconUser"
                  hugeicons="UserIcon"
                  phosphor="UserIcon"
                  remixicon="RiUserLine"
                />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CreditCardIcon"
                  tabler="IconCreditCard"
                  hugeicons="CreditCardIcon"
                  phosphor="CreditCardIcon"
                  remixicon="RiBankCardLine"
                />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="SettingsIcon"
                  tabler="IconSettings"
                  hugeicons="SettingsIcon"
                  phosphor="GearIcon"
                  remixicon="RiSettings3Line"
                />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CardContent>
    </Card>
  )
}
```

### Command with shortcuts (`c-command-2`)

Target: `components/examples/c-command-2.tsx`

Command with shortcuts

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Command
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Settings">
              <CommandItem>
                <IconPlaceholder
                  lucide="UserIcon"
                  tabler="IconUser"
                  hugeicons="UserIcon"
                  phosphor="UserIcon"
                  remixicon="RiUserLine"
                />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CreditCardIcon"
                  tabler="IconCreditCard"
                  hugeicons="CreditCardIcon"
                  phosphor="CreditCardIcon"
                  remixicon="RiBankCardLine"
                />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="SettingsIcon"
                  tabler="IconSettings"
                  hugeicons="SettingsIcon"
                  phosphor="GearIcon"
                  remixicon="RiSettings3Line"
                />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
```

### Command with groups (`c-command-3`)

Target: `components/examples/c-command-3.tsx`

Command with groups

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Command
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <IconPlaceholder
                  lucide="CalendarIcon"
                  tabler="IconCalendarEvent"
                  hugeicons="Calendar04Icon"
                  phosphor="CalendarBlankIcon"
                  remixicon="RiCalendarLine"
                />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="SmileIcon"
                  tabler="IconMoodSmile"
                  hugeicons="SmileIcon"
                  phosphor="SmileyIcon"
                  remixicon="RiEmotionHappyLine"
                />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CalculatorIcon"
                  tabler="IconCalculator"
                  hugeicons="Calculator01Icon"
                  phosphor="CalculatorIcon"
                  remixicon="RiCalculatorLine"
                />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <IconPlaceholder
                  lucide="UserIcon"
                  tabler="IconUser"
                  hugeicons="UserIcon"
                  phosphor="UserIcon"
                  remixicon="RiUserLine"
                />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CreditCardIcon"
                  tabler="IconCreditCard"
                  hugeicons="CreditCardIcon"
                  phosphor="CreditCardIcon"
                  remixicon="RiBankCardLine"
                />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="SettingsIcon"
                  tabler="IconSettings"
                  hugeicons="SettingsIcon"
                  phosphor="GearIcon"
                  remixicon="RiSettings3Line"
                />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
```

### Command with many groups (`c-command-4`)

Target: `components/examples/c-command-4.tsx`

Command with many groups

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Command
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem>
                <IconPlaceholder
                  lucide="HouseIcon"
                  tabler="IconHome"
                  hugeicons="Home03Icon"
                  phosphor="HouseIcon"
                  remixicon="RiHome5Line"
                />
                <span>Home</span>
                <CommandShortcut>⌘H</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="InboxIcon"
                  tabler="IconInbox"
                  hugeicons="InboxIcon"
                  phosphor="TrayIcon"
                  remixicon="RiInboxLine"
                />
                <span>Inbox</span>
                <CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="FileTextIcon"
                  tabler="IconFileText"
                  hugeicons="File02Icon"
                  phosphor="FileTextIcon"
                  remixicon="RiFileTextLine"
                />
                <span>Documents</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="FolderIcon"
                  tabler="IconFolder"
                  hugeicons="FolderIcon"
                  phosphor="FolderIcon"
                  remixicon="RiFolderLine"
                />
                <span>Folders</span>
                <CommandShortcut>⌘F</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>
                <IconPlaceholder
                  lucide="PlusIcon"
                  tabler="IconPlus"
                  hugeicons="PlusSignIcon"
                  phosphor="PlusIcon"
                  remixicon="RiAddLine"
                />
                <span>New File</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="FolderPlusIcon"
                  tabler="IconFolderPlus"
                  hugeicons="FolderAddIcon"
                  phosphor="FolderPlusIcon"
                  remixicon="RiFolderAddLine"
                />
                <span>New Folder</span>
                <CommandShortcut>⇧⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CopyIcon"
                  tabler="IconCopy"
                  hugeicons="CopyIcon"
                  phosphor="CopyIcon"
                  remixicon="RiFileCopyLine"
                />
                <span>Copy</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ScissorsIcon"
                  tabler="IconScissors"
                  hugeicons="ScissorIcon"
                  phosphor="ScissorsIcon"
                  remixicon="RiScissorsLine"
                />
                <span>Cut</span>
                <CommandShortcut>⌘X</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ClipboardIcon"
                  tabler="IconClipboard"
                  hugeicons="ClipboardIcon"
                  phosphor="ClipboardIcon"
                  remixicon="RiClipboardLine"
                />
                <span>Paste</span>
                <CommandShortcut>⌘V</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="TrashIcon"
                  tabler="IconTrash"
                  hugeicons="DeleteIcon"
                  phosphor="TrashIcon"
                  remixicon="RiDeleteBinLine"
                />
                <span>Delete</span>
                <CommandShortcut>⌫</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="View">
              <CommandItem>
                <IconPlaceholder
                  lucide="LayoutGridIcon"
                  tabler="IconLayoutGrid"
                  hugeicons="GridViewIcon"
                  phosphor="SquaresFourIcon"
                  remixicon="RiGalleryView2"
                />
                <span>Grid View</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ListIcon"
                  tabler="IconList"
                  hugeicons="Menu01Icon"
                  phosphor="ListIcon"
                  remixicon="RiListUnordered"
                />
                <span>List View</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ZoomInIcon"
                  tabler="IconZoomIn"
                  hugeicons="SearchAddIcon"
                  phosphor="MagnifyingGlassPlusIcon"
                  remixicon="RiZoomInLine"
                />
                <span>Zoom In</span>
                <CommandShortcut>⌘+</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ZoomOutIcon"
                  tabler="IconZoomOut"
                  hugeicons="SearchMinusIcon"
                  phosphor="MagnifyingGlassMinusIcon"
                  remixicon="RiZoomOutLine"
                />
                <span>Zoom Out</span>
                <CommandShortcut>⌘-</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem>
                <IconPlaceholder
                  lucide="UserIcon"
                  tabler="IconUser"
                  hugeicons="UserIcon"
                  phosphor="UserIcon"
                  remixicon="RiUserLine"
                />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CreditCardIcon"
                  tabler="IconCreditCard"
                  hugeicons="CreditCardIcon"
                  phosphor="CreditCardIcon"
                  remixicon="RiBankCardLine"
                />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="SettingsIcon"
                  tabler="IconSettings"
                  hugeicons="SettingsIcon"
                  phosphor="GearIcon"
                  remixicon="RiSettings3Line"
                />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="BellIcon"
                  tabler="IconBell"
                  hugeicons="NotificationIcon"
                  phosphor="BellIcon"
                  remixicon="RiNotificationLine"
                />
                <span>Notifications</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="HelpCircleIcon"
                  tabler="IconHelpCircle"
                  hugeicons="HelpCircleIcon"
                  phosphor="QuestionIcon"
                  remixicon="RiQuestionLine"
                />
                <span>Help & Support</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tools">
              <CommandItem>
                <IconPlaceholder
                  lucide="CalculatorIcon"
                  tabler="IconCalculator"
                  hugeicons="Calculator01Icon"
                  phosphor="CalculatorIcon"
                  remixicon="RiCalculatorLine"
                />
                <span>Calculator</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CalendarIcon"
                  tabler="IconCalendarEvent"
                  hugeicons="Calendar04Icon"
                  phosphor="CalendarBlankIcon"
                  remixicon="RiCalendarLine"
                />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ImageIcon"
                  tabler="IconPhoto"
                  hugeicons="ImageIcon"
                  phosphor="ImageIcon"
                  remixicon="RiImageLine"
                />
                <span>Image Editor</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="CodeIcon"
                  tabler="IconCode"
                  hugeicons="CodeSimpleIcon"
                  phosphor="CodeIcon"
                  remixicon="RiCodeLine"
                />
                <span>Code Editor</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
```

### File search command palette (`c-command-5`)

Target: `components/examples/c-command-5.tsx`

File search command palette

```tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const files = [
  { name: "page.tsx", path: "src/app/page.tsx", type: "tsx" },
  { name: "layout.tsx", path: "src/app/layout.tsx", type: "tsx" },
  { name: "globals.css", path: "src/styles/globals.css", type: "css" },
  { name: "utils.ts", path: "src/lib/utils.ts", type: "ts" },
  { name: "api.ts", path: "src/lib/api.ts", type: "ts" },
  { name: "button.tsx", path: "src/components/ui/button.tsx", type: "tsx" },
  { name: "package.json", path: "package.json", type: "json" },
  { name: "README.md", path: "README.md", type: "md" },
]

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline" className="w-52">
        <IconPlaceholder
          lucide="SearchIcon"
          tabler="IconSearch"
          hugeicons="Search01Icon"
          phosphor="MagnifyingGlassIcon"
          remixicon="RiSearchLine"
          className="size-4"
        />
        Search files...
        <Kbd className="ml-auto">⌘K</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Search files by name..." />
          <CommandList>
            <CommandEmpty>No files found.</CommandEmpty>
            <CommandGroup heading="Files">
              {files.map((file) => (
                <CommandItem key={file.path} className="gap-2.5">
                  <IconPlaceholder
                    lucide="FileIcon"
                    tabler="IconFile"
                    hugeicons="FileEmpty02Icon"
                    phosphor="FileIcon"
                    remixicon="RiFileLine"
                    className="size-4 shrink-0"
                  />
                  <div className="flex flex-1 items-center gap-2">
                    <span className="font-medium">{file.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {file.path}
                    </span>
                  </div>
                  <div className="ml-auto" data-slot="command-shortcut">
                    <Badge variant="outline" size="sm">
                      {file.type}
                    </Badge>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
```

### User search command with avatars (`c-command-6`)

Target: `components/examples/c-command-6.tsx`

User search command with avatars

```tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const users = [
  {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    role: "Admin",
  },
  {
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    role: "Editor",
  },
  {
    name: "David Kim",
    email: "david@example.com",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
    role: "Viewer",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
    role: "Admin",
  },
  {
    name: "Michael Rodriguez",
    email: "michael@example.com",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    role: "Editor",
  },
]

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Search Users
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Search by name or email..." />
          <CommandList>
            <CommandEmpty>No users found.</CommandEmpty>
            <CommandGroup heading="Team Members">
              {users.map((user) => (
                <CommandItem key={user.email} className="gap-2 py-2">
                  <Avatar className="size-6 shrink-0">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-xs">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {user.email}
                    </span>
                  </div>
                  <div className="ml-auto" data-slot="command-shortcut">
                    <Badge
                      variant={
                        user.role === "Admin"
                          ? "primary-light"
                          : user.role === "Editor"
                            ? "info-light"
                            : "success-light"
                      }
                      size="sm"
                    >
                      {user.role}
                    </Badge>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
```

### Action palette with keyboard shortcuts (`c-command-7`)

Target: `components/examples/c-command-7.tsx`

Action palette with keyboard shortcuts

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Quick Actions
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="What do you need?" />
          <CommandList>
            <CommandEmpty>No actions found.</CommandEmpty>
            <CommandGroup heading="Create">
              <CommandItem>
                <IconPlaceholder
                  lucide="PlusIcon"
                  tabler="IconPlus"
                  hugeicons="PlusSignIcon"
                  phosphor="PlusIcon"
                  remixicon="RiAddLine"
                />
                <span>New Project</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="FileTextIcon"
                  tabler="IconFileText"
                  hugeicons="File02Icon"
                  phosphor="FileTextIcon"
                  remixicon="RiFileTextLine"
                />
                <span>New Document</span>
                <CommandShortcut>⌘⇧N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="UserPlusIcon"
                  tabler="IconUserPlus"
                  hugeicons="UserAdd01Icon"
                  phosphor="UserPlusIcon"
                  remixicon="RiUserAddLine"
                />
                <span>Invite Member</span>
                <CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Navigate">
              <CommandItem>
                <IconPlaceholder
                  lucide="HouseIcon"
                  tabler="IconHome"
                  hugeicons="Home03Icon"
                  phosphor="HouseIcon"
                  remixicon="RiHome5Line"
                />
                <span>Go to Dashboard</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="InboxIcon"
                  tabler="IconInbox"
                  hugeicons="InboxIcon"
                  phosphor="TrayIcon"
                  remixicon="RiInboxLine"
                />
                <span>Go to Inbox</span>
                <CommandShortcut>⌘⇧I</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="System">
              <CommandItem>
                <IconPlaceholder
                  lucide="MoonIcon"
                  tabler="IconMoon"
                  hugeicons="Moon02Icon"
                  phosphor="MoonIcon"
                  remixicon="RiMoonLine"
                />
                <span>Toggle Dark Mode</span>
                <CommandShortcut>⌘⇧D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="LogOutIcon"
                  tabler="IconLogout"
                  hugeicons="LogoutSquare01Icon"
                  phosphor="SignOutIcon"
                  remixicon="RiLogoutBoxRLine"
                />
                <span>Sign Out</span>
                <CommandShortcut>⌘Q</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
```

### Command with recent and favorites sections (`c-command-8`)

Target: `components/examples/c-command-8.tsx`

Command with recent and favorites sections

```tsx
"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Search Everything
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Search or jump to..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Favorites">
              <CommandItem>
                <IconPlaceholder
                  lucide="StarIcon"
                  tabler="IconStar"
                  hugeicons="StarIcon"
                  phosphor="StarIcon"
                  remixicon="RiStarLine"
                  className="text-yellow-500"
                />
                <span>Design System</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="StarIcon"
                  tabler="IconStar"
                  hugeicons="StarIcon"
                  phosphor="StarIcon"
                  remixicon="RiStarLine"
                  className="text-yellow-500"
                />
                <span>API Documentation</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent">
              <CommandItem>
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  className="text-muted-foreground"
                />
                <span>Dashboard Analytics</span>
                <div className="ml-auto" data-slot="command-shortcut">
                  <span>2m ago</span>
                </div>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  className="text-muted-foreground"
                />
                <span>User Settings</span>
                <div className="ml-auto" data-slot="command-shortcut">
                  <span>15m ago</span>
                </div>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  className="text-muted-foreground"
                />
                <div className="flex flex-1 items-center justify-between">
                  <span>Team Members</span>
                  <div className="ml-auto" data-slot="command-shortcut">
                    <span>1h ago</span>
                  </div>
                </div>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="ClockIcon"
                  tabler="IconClock"
                  hugeicons="ClockIcon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  className="text-muted-foreground"
                />
                <span>Billing & Plans</span>
                <div className="ml-auto" data-slot="command-shortcut">
                  <span>2h ago</span>
                </div>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Quick Links">
              <CommandItem>
                <IconPlaceholder
                  lucide="BookOpenIcon"
                  tabler="IconBook"
                  hugeicons="BookOpen01Icon"
                  phosphor="BookOpenIcon"
                  remixicon="RiBookOpenLine"
                />
                <span>Documentation</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="LifeBuoyIcon"
                  tabler="IconLifebuoy"
                  hugeicons="LifebuoyIcon"
                  phosphor="LifebuoyIcon"
                  remixicon="RiLifebuoyLine"
                />
                <span>Help & Support</span>
              </CommandItem>
              <CommandItem>
                <IconPlaceholder
                  lucide="MessageSquareIcon"
                  tabler="IconMessageDots"
                  hugeicons="Message02Icon"
                  phosphor="ChatIcon"
                  remixicon="RiChat4Line"
                />
                <span>Contact Us</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
```
