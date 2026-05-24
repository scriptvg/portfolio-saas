# Menubar (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

5 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-menubar-1` | Basic menubar. | registry:block | Basic menubar. |
| `c-menubar-2` | Menubar with dropdown submenus. | registry:block | Menubar with dropdown submenus. |
| `c-menubar-3` | Menubar with checkbox & radio items. | registry:block | Menubar with checkbox & radio items. |
| `c-menubar-4` | Menubar with icons. | registry:block | Menubar with icons. |
| `c-menubar-5` | Menubar for formatting and media. | registry:block | Menubar for formatting and media. |

## Source

### Basic menubar. (`c-menubar-1`)

Target: `components/examples/c-menubar-1.tsx`

Basic menubar.

```tsx
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print… <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
```

### Menubar with dropdown submenus. (`c-menubar-2`)

Target: `components/examples/c-menubar-2.tsx`

Menubar with dropdown submenus.

```tsx
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print… <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Find…</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
```

### Menubar with checkbox & radio items. (`c-menubar-3`)

Target: `components/examples/c-menubar-3.tsx`

Menubar with checkbox & radio items.

```tsx
"use client"

import { useState } from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Pattern() {
  const [theme, setTheme] = useState("system")

  return (
    <div className="flex items-center justify-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-64">
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Theme</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">Light</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
              <MenubarRadioItem value="system">System</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
```

### Menubar with icons. (`c-menubar-4`)

Target: `components/examples/c-menubar-4.tsx`

Menubar with icons.

```tsx
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <IconPlaceholder
                lucide="FileIcon"
                tabler="IconFile"
                hugeicons="FileEmpty02Icon"
                phosphor="FileIcon"
                remixicon="RiFileLine"
              />
              New File <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                lucide="FolderIcon"
                tabler="IconFolder"
                hugeicons="FolderIcon"
                phosphor="FolderIcon"
                remixicon="RiFolderLine"
              />
              Open Folder
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <IconPlaceholder
                lucide="SaveIcon"
                tabler="IconDeviceFloppy"
                hugeicons="FloppyDiskIcon"
                phosphor="FloppyDiskIcon"
                remixicon="RiSaveLine"
              />
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <IconPlaceholder
                  lucide="UserIcon"
                  tabler="IconUser"
                  hugeicons="UserIcon"
                  phosphor="UserIcon"
                  remixicon="RiUserLine"
                />
                Profile
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="destructive">
                <IconPlaceholder
                  lucide="LogOutIcon"
                  tabler="IconLogout"
                  hugeicons="LogoutSquare01Icon"
                  phosphor="SignOutIcon"
                  remixicon="RiLogoutBoxRLine"
                />
                Sign out
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
```

### Menubar for formatting and media. (`c-menubar-5`)

Target: `components/examples/c-menubar-5.tsx`

Menubar for formatting and media.

```tsx
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <IconPlaceholder
                lucide="BoldIcon"
                tabler="IconBold"
                hugeicons="TextBoldIcon"
                phosphor="TextBIcon"
                remixicon="RiBold"
              />
              Bold <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                lucide="ItalicIcon"
                tabler="IconItalic"
                hugeicons="TextItalicIcon"
                phosphor="TextItalicIcon"
                remixicon="RiItalic"
              />
              Italic <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Strikethrough</MenubarCheckboxItem>
            <MenubarCheckboxItem>Code</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <IconPlaceholder
                  lucide="ImageIcon"
                  tabler="IconPhoto"
                  hugeicons="ImageIcon"
                  phosphor="ImageIcon"
                  remixicon="RiImageLine"
                />
                Media
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Image</MenubarItem>
                <MenubarItem>Video</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <IconPlaceholder
                lucide="LinkIcon"
                tabler="IconLink"
                hugeicons="Link01Icon"
                phosphor="LinkIcon"
                remixicon="RiLinkM"
              />
              Link <MenubarShortcut>⌘K</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
```
