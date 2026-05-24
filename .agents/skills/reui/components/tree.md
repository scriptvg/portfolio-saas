# Tree (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

8 entr(y/ies).

> Includes the base `@reui/{slug}` primitive plus `c-{slug}-*` demo blocks.

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `tree` | Tree | registry:ui | deps: @headless-tree/core, radix-ui |
| `c-tree-1` | Basic tree. | registry:block | Basic tree. |
| `c-tree-2` | Tree with indented lines. | registry:block | Tree with indented lines. |
| `c-tree-3` | Tree with custom indent. | registry:block | Tree with custom indent. |
| `c-tree-4` | Tree with custom indent. | registry:block | Tree with custom indent. |
| `c-tree-5` | File explorer tree with type icons | registry:block | File explorer tree with type icons |
| `c-tree-6` | Organization chart tree with avatars | registry:block | Organization chart tree with avatars |
| `c-tree-7` | Permissions tree with checkboxes | registry:block | Permissions tree with checkboxes |

## Source

### Tree (`tree`)

Target: `components/reui/tree.tsx`

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {
  ButtonHTMLAttributes,
  createContext,
  CSSProperties,
  Fragment,
  HTMLAttributes,
  useContext,
} from "react"
import { ItemInstance } from "@headless-tree/core"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

type ToggleIconType = "chevron" | "plus-minus"

interface TreeContextValue<T = any> {
  indent: number
  currentItem?: ItemInstance<T>
  tree?: any
  toggleIconType?: ToggleIconType
}

const TreeContext = createContext<TreeContextValue>({
  indent: 20,
  currentItem: undefined,
  tree: undefined,
  toggleIconType: "plus-minus",
})

function useTreeContext<T = any>() {
  return useContext(TreeContext) as TreeContextValue<T>
}

interface TreeProps extends HTMLAttributes<HTMLDivElement> {
  indent?: number
  tree?: any
  toggleIconType?: ToggleIconType
  asChild?: boolean
}

function Tree({
  indent = 20,
  tree,
  className,
  toggleIconType = "chevron",
  asChild = false,
  ...props
}: TreeProps) {
  const containerProps =
    tree && typeof tree.getContainerProps === "function"
      ? tree.getContainerProps()
      : {}
  const mergedProps = { ...props, ...containerProps }

  // Extract style from mergedProps to merge with our custom styles
  const { style: propStyle, ...otherProps } = mergedProps

  // Merge styles
  const mergedStyle = {
    ...propStyle,
    "--tree-indent": `${indent}px`,
  } as CSSProperties

  const Comp = asChild ? Slot.Root : "div"

  return (
    <TreeContext.Provider value={{ indent, tree, toggleIconType }}>
      <Comp
        data-slot="tree"
        style={mergedStyle}
        className={cn("flex flex-col", className)}
        {...otherProps}
      />
    </TreeContext.Provider>
  )
}

interface TreeItemProps<T = any> extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "indent"
> {
  item: ItemInstance<T>
  indent?: number
  asChild?: boolean
}

function TreeItem<T = any>({
  item,
  className,
  asChild = false,
  children,
  ...props
}: TreeItemProps<T>) {
  const parentContext = useTreeContext<T>()
  const { indent } = parentContext

  const itemProps = typeof item.getProps === "function" ? item.getProps() : {}
  const mergedProps = { ...props, children, ...itemProps }

  // Extract style from mergedProps to merge with our custom styles
  const { style: propStyle, ...otherProps } = mergedProps

  // Merge styles
  const mergedStyle = {
    ...propStyle,
    "--tree-padding": `${item.getItemMeta().level * indent}px`,
  } as CSSProperties

  const defaultProps = {
    "data-slot": "tree-item",
    style: mergedStyle,
    className: cn(
      "z-10 ps-(--tree-padding) outline-hidden select-none not-last:pb-0.5 focus:z-20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    "data-focus":
      typeof item.isFocused === "function"
        ? item.isFocused() || false
        : undefined,
    "data-folder":
      typeof item.isFolder === "function"
        ? item.isFolder() || false
        : undefined,
    "data-selected":
      typeof item.isSelected === "function"
        ? item.isSelected() || false
        : undefined,
    "data-drag-target":
      typeof item.isDragTarget === "function"
        ? item.isDragTarget() || false
        : undefined,
    "data-search-match":
      typeof item.isMatchingSearch === "function"
        ? item.isMatchingSearch() || false
        : undefined,
    "aria-expanded": item.isExpanded(),
  }

  const Comp = asChild ? Slot.Root : "button"

  return (
    <TreeContext.Provider value={{ ...parentContext, currentItem: item }}>
      <Comp {...defaultProps} {...otherProps}>
        {children}
      </Comp>
    </TreeContext.Provider>
  )
}

interface TreeItemLabelProps<T = any> extends HTMLAttributes<HTMLSpanElement> {
  item?: ItemInstance<T>
  asChild?: boolean
}

function TreeItemLabel<T = any>({
  item: propItem,
  children,
  className,
  asChild = false,
  ...props
}: TreeItemLabelProps<T>) {
  const { currentItem, toggleIconType } = useTreeContext<T>()
  const item = propItem || currentItem

  if (!item) {
    console.warn("TreeItemLabel: No item provided via props or context")
    return null
  }

  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="tree-item-label"
      className={cn(
        "in-focus-visible:ring-ring/50 bg-background hover:bg-accent in-data-[selected=true]:bg-accent in-data-[selected=true]:text-accent-foreground in-data-[drag-target=true]:bg-accent flex items-center gap-1 transition-colors not-in-data-[folder=true]:ps-7 in-focus-visible:ring-[3px] in-data-[search-match=true]:bg-blue-50! [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "rounded-sm",
        "py-1.5",
        "px-2",
        "text-sm",
        className
      )}
      {...props}
    >
      <Fragment>
        {item.isFolder() &&
          (toggleIconType === "plus-minus" ? (
            item.isExpanded() ? (
              <IconPlaceholder
                lucide="MinusIcon"
                tabler="IconMinus"
                hugeicons="MinusSignIcon"
                phosphor="MinusIcon"
                remixicon="RiSubtractLine"
                className="text-muted-foreground size-3.5"
                stroke="currentColor"
                strokeWidth="1"
              />
            ) : (
              <IconPlaceholder
                lucide="PlusIcon"
                tabler="IconPlus"
                hugeicons="PlusSignIcon"
                phosphor="PlusIcon"
                remixicon="RiAddLine"
                className="text-muted-foreground size-3.5"
                stroke="currentColor"
                strokeWidth="1"
              />
            )
          ) : (
            <IconPlaceholder
              lucide="ChevronDownIcon"
              tabler="IconChevronDown"
              hugeicons="ArrowDown01Icon"
              phosphor="CaretDownIcon"
              remixicon="RiArrowDownSLine"
              className="text-muted-foreground size-4 in-aria-[expanded=false]:-rotate-90"
            />
          ))}
        {children ||
          (typeof item.getItemName === "function" ? item.getItemName() : null)}
      </Fragment>
    </Comp>
  )
}

function TreeDragLine({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const { tree } = useTreeContext()

  if (!tree || typeof tree.getDragLineStyle !== "function") {
    console.warn(
      "TreeDragLine: No tree provided via context or tree does not have getDragLineStyle method"
    )
    return null
  }

  const dragLine = tree.getDragLineStyle()
  return (
    <div
      style={dragLine}
      className={cn(
        "bg-primary before:bg-background before:border-primary absolute z-30 -mt-px h-0.5 w-[unset] before:absolute before:-top-[3px] before:left-0 before:size-2 before:border-2",
        "before:rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Tree, TreeItem, TreeItemLabel, TreeDragLine }
```

### Basic tree. (`c-tree-1`)

Target: `components/examples/c-tree-1.tsx`

Basic tree.

```tsx
"use client"

import {
  Tree,
  TreeItem,
  TreeItemLabel,
} from "@/components/reui/tree"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

interface Item {
  name: string
  children?: string[]
}

const items: Record<string, Item> = {
  crm: {
    name: "CRM",
    children: ["leads", "accounts", "activities", "support"],
  },
  leads: {
    name: "Leads",
    children: ["new-lead", "contacted-lead", "qualified-lead"],
  },
  "new-lead": { name: "New Lead" },
  "contacted-lead": { name: "Contacted Lead" },
  "qualified-lead": { name: "Qualified Lead" },
  accounts: {
    name: "Accounts",
    children: ["acme-corp", "globex-inc"],
  },
  "acme-corp": {
    name: "Acme Corp",
    children: ["acme-contacts", "acme-opportunities"],
  },
  "acme-contacts": {
    name: "Contacts",
    children: ["john-smith", "jane-doe"],
  },
  "john-smith": { name: "John Smith" },
  "jane-doe": { name: "Jane Doe" },
  "acme-opportunities": {
    name: "Opportunities",
    children: ["website-redesign", "annual-maintenance"],
  },
  "website-redesign": { name: "Website Redesign" },
  "annual-maintenance": { name: "Annual Maintenance" },
  "globex-inc": {
    name: "Globex Inc",
    children: ["globex-contacts", "globex-opportunities"],
  },
  "globex-contacts": {
    name: "Contacts",
    children: ["alice-johnson"],
  },
  "alice-johnson": { name: "Alice Johnson" },
  "globex-opportunities": {
    name: "Opportunities",
    children: ["cloud-migration"],
  },
  "cloud-migration": { name: "Cloud Migration" },
  activities: {
    name: "Activities",
    children: ["calls", "meetings", "emails"],
  },
  calls: { name: "Calls" },
  meetings: { name: "Meetings" },
  emails: { name: "Emails" },
  support: {
    name: "Support",
    children: ["open-tickets", "closed-tickets"],
  },
  "open-tickets": { name: "Open Tickets" },
  "closed-tickets": { name: "Closed Tickets" },
}

const indent = 20

export function Pattern() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["leads", "accounts", "activities"],
    },
    indent,
    rootItemId: "crm",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="mx-auto w-full grow place-self-start lg:w-xs">
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => {
          return (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel />
            </TreeItem>
          )
        })}
      </Tree>
    </div>
  )
}
```

### Tree with indented lines. (`c-tree-2`)

Target: `components/examples/c-tree-2.tsx`

Tree with indented lines.

```tsx
"use client"

import {
  Tree,
  TreeItem,
  TreeItemLabel,
} from "@/components/reui/tree"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

interface Item {
  name: string
  children?: string[]
}

const items: Record<string, Item> = {
  crm: {
    name: "CRM",
    children: ["leads", "accounts", "activities", "support"],
  },
  leads: {
    name: "Leads",
    children: ["new-lead", "contacted-lead", "qualified-lead"],
  },
  "new-lead": { name: "New Lead" },
  "contacted-lead": { name: "Contacted Lead" },
  "qualified-lead": { name: "Qualified Lead" },
  accounts: {
    name: "Accounts",
    children: ["acme-corp", "globex-inc"],
  },
  "acme-corp": {
    name: "Acme Corp",
    children: ["acme-contacts", "acme-opportunities"],
  },
  "acme-contacts": {
    name: "Contacts",
    children: ["john-smith", "jane-doe"],
  },
  "john-smith": { name: "John Smith" },
  "jane-doe": { name: "Jane Doe" },
  "acme-opportunities": {
    name: "Opportunities",
    children: ["website-redesign", "annual-maintenance"],
  },
  "website-redesign": { name: "Website Redesign" },
  "annual-maintenance": { name: "Annual Maintenance" },
  "globex-inc": {
    name: "Globex Inc",
    children: ["globex-contacts", "globex-opportunities"],
  },
  "globex-contacts": {
    name: "Contacts",
    children: ["alice-johnson"],
  },
  "alice-johnson": { name: "Alice Johnson" },
  "globex-opportunities": {
    name: "Opportunities",
    children: ["cloud-migration"],
  },
  "cloud-migration": { name: "Cloud Migration" },
  activities: {
    name: "Activities",
    children: ["calls", "meetings", "emails"],
  },
  calls: { name: "Calls" },
  meetings: { name: "Meetings" },
  emails: { name: "Emails" },
  support: {
    name: "Support",
    children: ["open-tickets", "closed-tickets"],
  },
  "open-tickets": { name: "Open Tickets" },
  "closed-tickets": { name: "Closed Tickets" },
}

const indent = 20

export function Pattern() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["leads", "accounts", "activities"],
    },
    indent,
    rootItemId: "crm",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="mx-auto w-full grow place-self-start lg:w-xs">
      <Tree
        className="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
        indent={indent}
        tree={tree}
      >
        {tree.getItems().map((item) => {
          return (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel />
            </TreeItem>
          )
        })}
      </Tree>
    </div>
  )
}
```

### Tree with custom indent. (`c-tree-3`)

Target: `components/examples/c-tree-3.tsx`

Tree with custom indent.

```tsx
"use client"

import {
  Tree,
  TreeItem,
  TreeItemLabel,
} from "@/components/reui/tree"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface Item {
  name: string
  children?: string[]
}

const items: Record<string, Item> = {
  crm: {
    name: "CRM",
    children: ["leads", "accounts", "activities", "support"],
  },
  leads: {
    name: "Leads",
    children: ["new-lead", "contacted-lead", "qualified-lead"],
  },
  "new-lead": { name: "New Lead" },
  "contacted-lead": { name: "Contacted Lead" },
  "qualified-lead": { name: "Qualified Lead" },
  accounts: {
    name: "Accounts",
    children: ["acme-corp", "globex-inc"],
  },
  "acme-corp": {
    name: "Acme Corp",
    children: ["acme-contacts", "acme-opportunities"],
  },
  "acme-contacts": {
    name: "Contacts",
    children: ["john-smith", "jane-doe"],
  },
  "john-smith": { name: "John Smith" },
  "jane-doe": { name: "Jane Doe" },
  "acme-opportunities": {
    name: "Opportunities",
    children: ["website-redesign", "annual-maintenance"],
  },
  "website-redesign": { name: "Website Redesign" },
  "annual-maintenance": { name: "Annual Maintenance" },
  "globex-inc": {
    name: "Globex Inc",
    children: ["globex-contacts", "globex-opportunities"],
  },
  "globex-contacts": {
    name: "Contacts",
    children: ["alice-johnson"],
  },
  "alice-johnson": { name: "Alice Johnson" },
  "globex-opportunities": {
    name: "Opportunities",
    children: ["cloud-migration"],
  },
  "cloud-migration": { name: "Cloud Migration" },
  activities: {
    name: "Activities",
    children: ["calls", "meetings", "emails"],
  },
  calls: { name: "Calls" },
  meetings: { name: "Meetings" },
  emails: { name: "Emails" },
  support: {
    name: "Support",
    children: ["open-tickets", "closed-tickets"],
  },
  "open-tickets": { name: "Open Tickets" },
  "closed-tickets": { name: "Closed Tickets" },
}

const indent = 20

export function Pattern() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["leads", "accounts", "activities"],
    },
    indent,
    rootItemId: "crm",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="mx-auto w-full grow place-self-start lg:w-xs">
      <Tree
        className="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
        indent={indent}
        tree={tree}
      >
        {tree.getItems().map((item) => {
          return (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel className="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10">
                <span className="flex items-center gap-2">
                  {item.isFolder() ? (
                    item.isExpanded() ? (
                      <IconPlaceholder
                        lucide="FolderOpenIcon"
                        tabler="IconFolderOpen"
                        hugeicons="FolderOpenIcon"
                        phosphor="FolderOpenIcon"
                        remixicon="RiFolderOpenLine"
                        className="text-muted-foreground pointer-events-none size-4"
                      />
                    ) : (
                      <IconPlaceholder
                        lucide="FolderIcon"
                        tabler="IconFolder"
                        hugeicons="FolderIcon"
                        phosphor="FolderIcon"
                        remixicon="RiFolderLine"
                        className="text-muted-foreground pointer-events-none size-4"
                      />
                    )
                  ) : (
                    <IconPlaceholder
                      lucide="FileIcon"
                      tabler="IconFile"
                      hugeicons="FileEmpty02Icon"
                      phosphor="FileIcon"
                      remixicon="RiFileLine"
                      className="text-muted-foreground pointer-events-none size-4"
                    />
                  )}
                  {item.getItemName()}
                </span>
              </TreeItemLabel>
            </TreeItem>
          )
        })}
      </Tree>
    </div>
  )
}
```

### Tree with custom indent. (`c-tree-4`)

Target: `components/examples/c-tree-4.tsx`

Tree with custom indent.

```tsx
"use client"

import {
  Tree,
  TreeItem,
  TreeItemLabel,
} from "@/components/reui/tree"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface Item {
  name: string
  children?: string[]
}

const items: Record<string, Item> = {
  crm: {
    name: "CRM",
    children: ["leads", "accounts", "activities", "support"],
  },
  leads: {
    name: "Leads",
    children: ["new-lead", "contacted-lead", "qualified-lead"],
  },
  "new-lead": { name: "New Lead" },
  "contacted-lead": { name: "Contacted Lead" },
  "qualified-lead": { name: "Qualified Lead" },
  accounts: {
    name: "Accounts",
    children: ["acme-corp", "globex-inc"],
  },
  "acme-corp": {
    name: "Acme Corp",
    children: ["acme-contacts", "acme-opportunities"],
  },
  "acme-contacts": {
    name: "Contacts",
    children: ["john-smith", "jane-doe"],
  },
  "john-smith": { name: "John Smith" },
  "jane-doe": { name: "Jane Doe" },
  "acme-opportunities": {
    name: "Opportunities",
    children: ["website-redesign", "annual-maintenance"],
  },
  "website-redesign": { name: "Website Redesign" },
  "annual-maintenance": { name: "Annual Maintenance" },
  "globex-inc": {
    name: "Globex Inc",
    children: ["globex-contacts", "globex-opportunities"],
  },
  "globex-contacts": {
    name: "Contacts",
    children: ["alice-johnson"],
  },
  "alice-johnson": { name: "Alice Johnson" },
  "globex-opportunities": {
    name: "Opportunities",
    children: ["cloud-migration"],
  },
  "cloud-migration": { name: "Cloud Migration" },
  activities: {
    name: "Activities",
    children: ["calls", "meetings", "emails"],
  },
  calls: { name: "Calls" },
  meetings: { name: "Meetings" },
  emails: { name: "Emails" },
  support: {
    name: "Support",
    children: ["open-tickets", "closed-tickets"],
  },
  "open-tickets": { name: "Open Tickets" },
  "closed-tickets": { name: "Closed Tickets" },
}

const indent = 20

export function Pattern() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["leads", "accounts", "activities"],
    },
    indent,
    rootItemId: "crm",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="mx-auto w-full grow place-self-start lg:w-xs">
      <Tree
        className="relative before:absolute before:inset-0 before:-ms-1.25 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
        indent={indent}
        tree={tree}
        toggleIconType="plus-minus"
      >
        {tree.getItems().map((item) => {
          return (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel className="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10">
                <span className="ms-1 flex items-center gap-2">
                  {item.isFolder() ? (
                    item.isExpanded() ? (
                      <IconPlaceholder
                        lucide="FolderOpenIcon"
                        tabler="IconFolderOpen"
                        hugeicons="FolderOpenIcon"
                        phosphor="FolderOpenIcon"
                        remixicon="RiFolderOpenLine"
                        className="text-muted-foreground pointer-events-none size-4"
                      />
                    ) : (
                      <IconPlaceholder
                        lucide="FolderIcon"
                        tabler="IconFolder"
                        hugeicons="FolderIcon"
                        phosphor="FolderIcon"
                        remixicon="RiFolderLine"
                        className="text-muted-foreground pointer-events-none size-4"
                      />
                    )
                  ) : (
                    <IconPlaceholder
                      lucide="FileIcon"
                      tabler="IconFile"
                      hugeicons="FileEmpty02Icon"
                      phosphor="FileIcon"
                      remixicon="RiFileLine"
                      className="text-muted-foreground pointer-events-none size-4"
                    />
                  )}
                  {item.getItemName()}
                </span>
              </TreeItemLabel>
            </TreeItem>
          )
        })}
      </Tree>
    </div>
  )
}
```

### File explorer tree with type icons (`c-tree-5`)

Target: `components/examples/c-tree-5.tsx`

File explorer tree with type icons

```tsx
"use client"

import {
  Tree,
  TreeItem,
  TreeItemLabel,
} from "@/components/reui/tree"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"

interface FileItem {
  name: string
  children?: string[]
  type?: "folder" | "ts" | "tsx" | "css" | "json" | "md" | "config"
}

const items: Record<string, FileItem> = {
  root: {
    name: "my-project",
    children: ["src", "public", "package-json", "readme", "tsconfig"],
  },
  src: {
    name: "src",
    children: ["app", "components", "lib", "globals-css"],
    type: "folder",
  },
  app: {
    name: "app",
    children: ["page-tsx", "layout-tsx", "loading-tsx"],
    type: "folder",
  },
  "page-tsx": { name: "page.tsx", type: "tsx" },
  "layout-tsx": { name: "layout.tsx", type: "tsx" },
  "loading-tsx": { name: "loading.tsx", type: "tsx" },
  components: {
    name: "components",
    children: ["button-tsx", "card-tsx", "dialog-tsx"],
    type: "folder",
  },
  "button-tsx": { name: "button.tsx", type: "tsx" },
  "card-tsx": { name: "card.tsx", type: "tsx" },
  "dialog-tsx": { name: "dialog.tsx", type: "tsx" },
  lib: { name: "lib", children: ["utils-ts", "api-ts"], type: "folder" },
  "utils-ts": { name: "utils.ts", type: "ts" },
  "api-ts": { name: "api.ts", type: "ts" },
  "globals-css": { name: "globals.css", type: "css" },
  public: { name: "public", children: ["favicon"], type: "folder" },
  favicon: { name: "favicon.ico", type: "config" },
  "package-json": { name: "package.json", type: "json" },
  readme: { name: "README.md", type: "md" },
  tsconfig: { name: "tsconfig.json", type: "json" },
}

const getFileIcon = (type?: string, isExpanded?: boolean) => {
  if (!type || type === "folder") {
    return isExpanded ? (
      <IconPlaceholder
        lucide="FolderOpenIcon"
        tabler="IconFolderOpen"
        hugeicons="FolderOpenIcon"
        phosphor="FolderOpenIcon"
        remixicon="RiFolderOpenLine"
        className="pointer-events-none size-4 text-amber-500"
      />
    ) : (
      <IconPlaceholder
        lucide="FolderIcon"
        tabler="IconFolder"
        hugeicons="FolderIcon"
        phosphor="FolderIcon"
        remixicon="RiFolderLine"
        className="pointer-events-none size-4 text-amber-500"
      />
    )
  }
  if (type === "tsx" || type === "ts") {
    return (
      <IconPlaceholder
        lucide="FileCodeIcon"
        tabler="IconFileCode"
        hugeicons="FileScriptIcon"
        phosphor="FileCodeIcon"
        remixicon="RiFileCodeLine"
        className="pointer-events-none size-4 text-blue-500"
      />
    )
  }
  if (type === "css") {
    return (
      <IconPlaceholder
        lucide="PaletteIcon"
        tabler="IconPalette"
        hugeicons="PaintBoardIcon"
        phosphor="PaletteIcon"
        remixicon="RiPaletteLine"
        className="pointer-events-none size-4 text-purple-500"
      />
    )
  }
  if (type === "json") {
    return (
      <IconPlaceholder
        lucide="BracesIcon"
        tabler="IconBraces"
        hugeicons="CodeIcon"
        phosphor="BracketsCurly"
        remixicon="RiBracesLine"
        className="pointer-events-none size-4 text-yellow-500"
      />
    )
  }
  if (type === "md") {
    return (
      <IconPlaceholder
        lucide="FileTextIcon"
        tabler="IconFileText"
        hugeicons="File02Icon"
        phosphor="FileTextIcon"
        remixicon="RiFileTextLine"
        className="text-muted-foreground pointer-events-none size-4"
      />
    )
  }
  return (
    <IconPlaceholder
      lucide="FileIcon"
      tabler="IconFile"
      hugeicons="FileEmpty02Icon"
      phosphor="FileIcon"
      remixicon="RiFileLine"
      className="text-muted-foreground pointer-events-none size-4"
    />
  )
}

const indent = 20

export function Pattern() {
  const tree = useTree<FileItem>({
    initialState: {
      expandedItems: ["src", "app", "components"],
    },
    indent,
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="mx-auto w-full grow place-self-start lg:w-xs">
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => (
          <TreeItem key={item.getId()} item={item}>
            <TreeItemLabel className="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10">
              <span className="flex items-center gap-2">
                {getFileIcon(item.getItemData().type, item.isExpanded())}
                {item.getItemName()}
              </span>
            </TreeItemLabel>
          </TreeItem>
        ))}
      </Tree>
    </div>
  )
}
```

### Organization chart tree with avatars (`c-tree-6`)

Target: `components/examples/c-tree-6.tsx`

Organization chart tree with avatars

```tsx
"use client"

import {
  Tree,
  TreeItem,
  TreeItemLabel,
} from "@/components/reui/tree"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface OrgItem {
  name: string
  role?: string
  avatar?: string
  children?: string[]
}

const items: Record<string, OrgItem> = {
  company: { name: "Acme Inc.", children: ["ceo"] },
  ceo: {
    name: "Sarah Chen",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    children: ["cto", "coo", "cfo"],
  },
  cto: {
    name: "Alex Johnson",
    role: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    children: ["eng-lead", "design-lead"],
  },
  coo: {
    name: "Emma Wilson",
    role: "COO",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    children: ["ops-mgr", "hr-mgr"],
  },
  cfo: {
    name: "David Kim",
    role: "CFO",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80",
    children: ["finance-mgr"],
  },
  "eng-lead": {
    name: "Michael Rodriguez",
    role: "Engineering Lead",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
    children: ["dev-1", "dev-2"],
  },
  "design-lead": {
    name: "Lisa Park",
    role: "Design Lead",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80",
  },
  "ops-mgr": {
    name: "James Brown",
    role: "Operations Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80",
  },
  "hr-mgr": {
    name: "Amy Taylor",
    role: "HR Manager",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80",
  },
  "finance-mgr": {
    name: "Robert Davis",
    role: "Finance Manager",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80",
  },
  "dev-1": {
    name: "Tom Harris",
    role: "Senior Developer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80",
  },
  "dev-2": {
    name: "Nina Patel",
    role: "Developer",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80",
  },
}

const indent = 24

export function Pattern() {
  const tree = useTree<OrgItem>({
    initialState: {
      expandedItems: ["ceo", "cto"],
    },
    indent,
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="mx-auto w-full grow place-self-start lg:w-xs">
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => {
          const data = item.getItemData()
          const initials = data.name
            .split(" ")
            .map((n) => n[0])
            .join("")

          return (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel className="gap-2 py-1">
                <Avatar className="size-6 shrink-0">
                  <AvatarImage src={data.avatar} alt={data.name} />
                  <AvatarFallback className="text-[9px]">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="flex flex-col items-start">
                  <span className="text-sm leading-tight">{data.name}</span>
                  {data.role && (
                    <span className="text-muted-foreground text-[10px] leading-tight">
                      {data.role}
                    </span>
                  )}
                </span>
              </TreeItemLabel>
            </TreeItem>
          )
        })}
      </Tree>
    </div>
  )
}
```

### Permissions tree with checkboxes (`c-tree-7`)

Target: `components/examples/c-tree-7.tsx`

Permissions tree with checkboxes

```tsx
"use client"

import { useState } from "react"
import {
  Tree,
  TreeItem,
  TreeItemLabel,
} from "@/components/reui/tree"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"

import { Checkbox } from "@/components/ui/checkbox"

interface PermissionItem {
  name: string
  children?: string[]
}

const items: Record<string, PermissionItem> = {
  permissions: {
    name: "All Permissions",
    children: ["users", "content", "billing", "api"],
  },
  users: {
    name: "User Management",
    children: ["users-view", "users-create", "users-edit", "users-delete"],
  },
  "users-view": { name: "View users" },
  "users-create": { name: "Create users" },
  "users-edit": { name: "Edit users" },
  "users-delete": { name: "Delete users" },
  content: {
    name: "Content Management",
    children: ["content-view", "content-publish", "content-delete"],
  },
  "content-view": { name: "View content" },
  "content-publish": { name: "Publish content" },
  "content-delete": { name: "Delete content" },
  billing: { name: "Billing", children: ["billing-view", "billing-manage"] },
  "billing-view": { name: "View invoices" },
  "billing-manage": { name: "Manage subscriptions" },
  api: { name: "API Access", children: ["api-read", "api-write"] },
  "api-read": { name: "Read access" },
  "api-write": { name: "Write access" },
}

const indent = 24

export function Pattern() {
  const [checked, setChecked] = useState<Set<string>>(
    new Set([
      "users-view",
      "content-view",
      "content-publish",
      "billing-view",
      "api-read",
    ])
  )

  const togglePermission = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const tree = useTree<PermissionItem>({
    initialState: {
      expandedItems: ["users", "content"],
    },
    indent,
    rootItemId: "permissions",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="mx-auto w-full grow place-self-start lg:w-xs">
      <Tree
        indent={indent}
        tree={tree}
        toggleIconType="plus-minus"
        className=""
      >
        {tree.getItems().map((item) => {
          const id = item.getId()
          const isLeaf = !item.isFolder()

          return (
            <TreeItem key={id} item={item} asChild>
              <div>
                <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                  <span className="flex items-center gap-2">
                    {isLeaf && (
                      <Checkbox
                        checked={checked.has(id)}
                        onCheckedChange={() => togglePermission(id)}
                        className="size-3.5 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </div>
            </TreeItem>
          )
        })}
      </Tree>
    </div>
  )
}
```
