# Empty (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

20 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-empty-1` | Basic empty state | registry:block | Basic empty state |
| `c-empty-2` | Search empty state | registry:block | Search empty state |
| `c-empty-3` | Empty state with search input | registry:block | Empty state with search input |
| `c-empty-4` | Empty state with add button | registry:block | Empty state with add button |
| `c-empty-5` | Document empty state | registry:block | Document empty state |
| `c-empty-6` | Dashed upload empty state | registry:block | Dashed upload empty state |
| `c-empty-7` | Inbox empty state | registry:block | Inbox empty state |
| `c-empty-8` | Team members empty state | registry:block | Team members empty state |
| `c-empty-9` | No notifications empty state | registry:block | No notifications empty state |
| `c-empty-10` | No data analytics empty state | registry:block | No data analytics empty state |
| `c-empty-11` | Bookmarks empty state | registry:block | Bookmarks empty state |
| `c-empty-12` | Tasks empty state | registry:block | Tasks empty state |
| `c-empty-13` | No automations empty state with toggle illustration | registry:block | No automations empty state with toggle illustration |
| `c-empty-14` | Comments empty state with isometric board illustration | registry:block | Comments empty state with isometric board illustration |
| `c-empty-15` | No products empty state with stacked cards and blur effect | registry:block | No products empty state with stacked cards and blur effect |
| `c-empty-16` | Search empty state with stacked file cards illustration | registry:block | Search empty state with stacked file cards illustration |
| `c-empty-17` | No messages empty state with chat bubbles illustration | registry:block | No messages empty state with chat bubbles illustration |
| `c-empty-18` | No payments empty state with credit card illustration | registry:block | No payments empty state with credit card illustration |
| `c-empty-19` | No integrations empty state with connected nodes illustration | registry:block | No integrations empty state with connected nodes illustration |
| `c-empty-20` | No events empty state with calendar illustration | registry:block | No events empty state with calendar illustration |

## Source

### Basic empty state (`c-empty-1`)

Target: `components/examples/c-empty-1.tsx`

Basic empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any projects yet. Get started by creating
            your first project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button asChild>
              <a href="#">Create project</a>
            </Button>
            <Button variant="outline">Import project</Button>
          </div>
          <Button variant="link" asChild className="text-muted-foreground">
            <a href="#">
              Learn more{" "}
              <IconPlaceholder
                lucide="ArrowUpRightIcon"
                tabler="IconArrowUpRight"
                hugeicons="ArrowUpRight01Icon"
                phosphor="ArrowUpRightIcon"
                remixicon="RiArrowRightUpLine"
              />
            </a>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Search empty state (`c-empty-2`)

Target: `components/examples/c-empty-2.tsx`

Search empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Empty className="bg-muted">
        <EmptyHeader>
          <EmptyTitle>No results found</EmptyTitle>
          <EmptyDescription>
            No results found for your search. Try adjusting your search terms.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Try again</Button>
          <Button variant="link" asChild className="text-muted-foreground">
            <a href="#">
              Learn more{" "}
              <IconPlaceholder
                lucide="ArrowUpRightIcon"
                tabler="IconArrowUpRight"
                hugeicons="ArrowUpRight01Icon"
                phosphor="ArrowUpRightIcon"
                remixicon="RiArrowRightUpLine"
              />
            </a>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Empty state with search input (`c-empty-3`)

Target: `components/examples/c-empty-3.tsx`

Empty state with search input

```tsx
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Empty className="border">
        <EmptyHeader>
          <EmptyTitle>404 — Not Found</EmptyTitle>
          <EmptyDescription>
            The page you&apos;re looking for doesn&apos;t exist. Try searching
            for what you need below.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <InputGroup className="w-3/4">
            <InputGroupInput placeholder="Try searching for pages…" />
            <InputGroupAddon>
              <IconPlaceholder
                lucide="CircleDashedIcon"
                tabler="IconCircleDashed"
                hugeicons="DashedLineCircleIcon"
                phosphor="CircleDashedIcon"
                remixicon="RiLoaderLine"
              />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>/</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <EmptyDescription>
            Need help? <a href="#">Contact support</a>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Empty state with add button (`c-empty-4`)

Target: `components/examples/c-empty-4.tsx`

Empty state with add button

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconPlaceholder
              lucide="FolderIcon"
              tabler="IconFolder"
              hugeicons="FolderIcon"
              phosphor="FolderIcon"
              remixicon="RiFolderLine"
            />
          </EmptyMedia>
          <EmptyTitle>Nothing to see here</EmptyTitle>
          <EmptyDescription>
            No posts have been created yet. Get started by{" "}
            <a href="#">creating your first post</a>.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline">
            <IconPlaceholder
              lucide="PlusIcon"
              tabler="IconPlus"
              hugeicons="PlusSignIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
              data-icon="inline-start"
            />
            New Post
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Document empty state (`c-empty-5`)

Target: `components/examples/c-empty-5.tsx`

Document empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>
            A list of your recently opened documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <IconPlaceholder
                  lucide="FileIcon"
                  tabler="IconFile"
                  hugeicons="FileEmpty02Icon"
                  phosphor="FileIcon"
                  remixicon="RiFileLine"
                />
              </EmptyMedia>
              <EmptyTitle>No documents yet</EmptyTitle>
              <EmptyDescription>
                You haven&apos;t opened any documents recently.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">Create Document</Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Dashed upload empty state (`c-empty-6`)

Target: `components/examples/c-empty-6.tsx`

Dashed upload empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="w-full max-w-md border border-dashed py-12">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconPlaceholder
              lucide="CloudUploadIcon"
              tabler="IconCloudUpload"
              hugeicons="CloudUploadIcon"
              phosphor="CloudArrowUpIcon"
              remixicon="RiUploadCloud2Line"
            />
          </EmptyMedia>
          <EmptyTitle>Upload files</EmptyTitle>
          <EmptyDescription>
            Drag and drop files here, or click to browse.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            <IconPlaceholder
              lucide="PlusIcon"
              tabler="IconPlus"
              hugeicons="PlusSignIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
              data-icon="inline-start"
            />
            Browse Files
          </Button>
          <EmptyDescription className="text-xs">
            PNG, JPG, SVG up to 10MB
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Inbox empty state (`c-empty-7`)

Target: `components/examples/c-empty-7.tsx`

Inbox empty state

```tsx
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-16">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconPlaceholder
              lucide="InboxIcon"
              tabler="IconInbox"
              hugeicons="InboxIcon"
              phosphor="TrayIcon"
              remixicon="RiInboxLine"
            />
          </EmptyMedia>
          <EmptyTitle>Inbox zero</EmptyTitle>
          <EmptyDescription>
            You&apos;re all caught up. No new messages.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
```

### Team members empty state (`c-empty-8`)

Target: `components/examples/c-empty-8.tsx`

Team members empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Manage your team and their permissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <IconPlaceholder
                  lucide="UsersIcon"
                  tabler="IconUsers"
                  hugeicons="UserMultiple02Icon"
                  phosphor="UsersIcon"
                  remixicon="RiGroupLine"
                />
              </EmptyMedia>
              <EmptyTitle>No team members</EmptyTitle>
              <EmptyDescription>
                Invite people to collaborate on this project.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">
                <IconPlaceholder
                  lucide="UserPlusIcon"
                  tabler="IconUserPlus"
                  hugeicons="UserAdd01Icon"
                  phosphor="UserPlusIcon"
                  remixicon="RiUserAddLine"
                  data-icon="inline-start"
                />
                Invite People
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
    </div>
  )
}
```

### No notifications empty state (`c-empty-9`)

Target: `components/examples/c-empty-9.tsx`

No notifications empty state

```tsx
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="bg-muted py-16">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconPlaceholder
              lucide="BellOffIcon"
              tabler="IconBellOff"
              hugeicons="NotificationOff03Icon"
              phosphor="BellSlashIcon"
              remixicon="RiNotificationOffLine"
            />
          </EmptyMedia>
          <EmptyTitle>No notifications</EmptyTitle>
          <EmptyDescription>
            When you get notifications, they&apos;ll show up here.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
```

### No data analytics empty state (`c-empty-10`)

Target: `components/examples/c-empty-10.tsx`

No data analytics empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="border py-12">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconPlaceholder
              lucide="BarChart3Icon"
              tabler="IconChartBar"
              hugeicons="ChartBarLineIcon"
              phosphor="ChartBarIcon"
              remixicon="RiBarChartBoxLine"
            />
          </EmptyMedia>
          <EmptyTitle>No data yet</EmptyTitle>
          <EmptyDescription>
            Once your project starts receiving traffic, analytics will appear
            here.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button size="sm">Connect Data Source</Button>
            <Button variant="outline" size="sm">
              View Docs
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Bookmarks empty state (`c-empty-11`)

Target: `components/examples/c-empty-11.tsx`

Bookmarks empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-16">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconPlaceholder
              lucide="BookmarkIcon"
              tabler="IconBookmark"
              hugeicons="Bookmark02Icon"
              phosphor="BookmarkSimpleIcon"
              remixicon="RiBookmarkLine"
            />
          </EmptyMedia>
          <EmptyTitle>No bookmarks</EmptyTitle>
          <EmptyDescription>
            Items you bookmark will be saved here for quick access.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            Browse Items
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Tasks empty state (`c-empty-12`)

Target: `components/examples/c-empty-12.tsx`

Tasks empty state

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
          <CardDescription>Track and manage your to-dos.</CardDescription>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <IconPlaceholder
                  lucide="CircleCheckIcon"
                  tabler="IconCircleCheck"
                  hugeicons="CheckmarkCircle01Icon"
                  phosphor="CheckCircleIcon"
                  remixicon="RiCheckboxCircleLine"
                />
              </EmptyMedia>
              <EmptyTitle>All clear</EmptyTitle>
              <EmptyDescription>
                You have no pending tasks. Enjoy the downtime or create a new
                one.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" variant="outline">
                <IconPlaceholder
                  lucide="PlusIcon"
                  tabler="IconPlus"
                  hugeicons="PlusSignIcon"
                  phosphor="PlusIcon"
                  remixicon="RiAddLine"
                  data-icon="inline-start"
                />
                New Task
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
    </div>
  )
}
```

### No automations empty state with toggle illustration (`c-empty-13`)

Target: `components/examples/c-empty-13.tsx`

No automations empty state with toggle illustration

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function AutomationIllustration() {
  return (
    <svg
      width="200"
      height="120"
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left connection line with arrow */}
      <path
        d="M30 60 L68 60"
        className="stroke-muted-foreground/30"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#arrowhead)"
      />
      <polygon
        points="66,56 74,60 66,64"
        className="fill-muted-foreground/30"
      />

      {/* Toggle body */}
      <rect
        x="76"
        y="42"
        width="56"
        height="36"
        rx="18"
        className="stroke-primary/60 fill-primary/5 dark:fill-primary/10"
        strokeWidth="2"
      />
      {/* Toggle circle */}
      <circle cx="94" cy="60" r="12" className="fill-primary/40" />
      <circle cx="94" cy="60" r="6" className="fill-primary" />

      {/* Right connection line */}
      <path
        d="M134 60 Q150 60 158 48"
        className="stroke-muted-foreground/30"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="162" cy="44" r="3" className="fill-muted-foreground/20" />

      {/* Bottom right connection */}
      <path
        d="M134 60 Q150 60 158 72"
        className="stroke-muted-foreground/30"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="162" cy="76" r="3" className="fill-muted-foreground/20" />

      {/* Decorative dots */}
      <circle cx="22" cy="60" r="2" className="fill-muted-foreground/20" />
      <circle cx="174" cy="44" r="2" className="fill-muted-foreground/15" />
      <circle cx="174" cy="76" r="2" className="fill-muted-foreground/15" />
    </svg>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <AutomationIllustration />
          </EmptyMedia>
          <EmptyTitle>No automations yet</EmptyTitle>
          <EmptyDescription>
            Hook up your favorite tools and let the automation magic begin.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Create new automation</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### Comments empty state with isometric board illustration (`c-empty-14`)

Target: `components/examples/c-empty-14.tsx`

Comments empty state with isometric board illustration

```tsx
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function BoardIllustration() {
  return (
    <svg
      width="180"
      height="160"
      viewBox="0 0 180 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Shadow */}
      <ellipse
        cx="90"
        cy="148"
        rx="60"
        ry="8"
        className="fill-muted-foreground/8 dark:fill-muted-foreground/5"
      />

      {/* Isometric board - back face */}
      <path
        d="M30 40 L90 10 L160 45 L100 75 Z"
        className="fill-muted/80 dark:fill-muted/40 stroke-border"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Board - front face */}
      <path
        d="M30 40 L100 75 L100 110 L30 75 Z"
        className="fill-muted dark:fill-muted/60 stroke-border"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Board - right face */}
      <path
        d="M100 75 L160 45 L160 80 L100 110 Z"
        className="fill-background stroke-border"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Content lines on the board surface - isometric */}
      {/* Row 1 */}
      <circle cx="62" cy="35" r="4" className="fill-primary/20" />
      <line
        x1="72"
        y1="33"
        x2="105"
        y2="17"
        className="stroke-muted-foreground/20"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="110"
        y1="15"
        x2="130"
        y2="5"
        className="stroke-muted-foreground/15"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Row 2 */}
      <circle cx="55" cy="50" r="4" className="fill-primary/30" />
      <line
        x1="65"
        y1="48"
        x2="100"
        y2="31"
        className="stroke-muted-foreground/20"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="105"
        y1="29"
        x2="135"
        y2="14"
        className="stroke-muted-foreground/12"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Row 3 */}
      <circle cx="48" cy="65" r="4" className="fill-destructive/25" />
      <line
        x1="58"
        y1="63"
        x2="88"
        y2="48"
        className="stroke-muted-foreground/18"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <BoardIllustration />
          </EmptyMedia>
          <EmptyTitle>Be the first to share a thought</EmptyTitle>
          <EmptyDescription>
            Drop a comment on the canvas to get the conversation started.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
```

### No products empty state with stacked cards and blur effect (`c-empty-15`)

Target: `components/examples/c-empty-15.tsx`

No products empty state with stacked cards and blur effect

```tsx
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function StackedCardsIllustration() {
  return (
    <div className="relative h-24 w-52" aria-hidden="true">
      {/* Back card */}
      <div className="bg-muted/60 dark:bg-muted/30 border-border/50 absolute inset-x-6 top-0 h-6 rounded-t-lg border" />
      {/* Middle card */}
      <div className="bg-muted/80 dark:bg-muted/50 border-border/60 absolute inset-x-3 top-3 h-6 rounded-t-lg border" />
      {/* Front card */}
      <div className="bg-background border-border absolute inset-x-0 top-6 flex h-16 items-center gap-3 rounded-lg border px-4 shadow-sm">
        <div className="bg-muted size-8 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="bg-muted h-2.5 w-3/4 rounded" />
          <div className="bg-muted/60 h-2 w-1/2 rounded" />
        </div>
      </div>
      {/* Fade overlay */}
      <div className="from-background/0 via-background/60 to-background pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-b" />
    </div>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <StackedCardsIllustration />
          </EmptyMedia>
          <EmptyTitle>No products</EmptyTitle>
          <EmptyDescription>
            No data here yet. We will notify you when there&apos;s an update.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
```

### Search empty state with stacked file cards illustration (`c-empty-16`)

Target: `components/examples/c-empty-16.tsx`

Search empty state with stacked file cards illustration

```tsx
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function SearchCardsIllustration() {
  return (
    <div className="relative h-32 w-56" aria-hidden="true">
      {/* Bottom card */}
      <div className="bg-muted/50 dark:bg-muted/25 border-border/40 absolute right-6 bottom-4 left-6 flex h-12 items-center gap-2.5 rounded-lg border px-3">
        <div className="bg-muted-foreground/10 size-5 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="bg-muted-foreground/10 h-2 w-full rounded" />
          <div className="bg-muted-foreground/8 h-2 w-2/3 rounded" />
        </div>
      </div>
      {/* Middle card */}
      <div className="bg-muted/70 dark:bg-muted/40 border-border/50 absolute right-3 bottom-8 left-3 flex h-12 items-center gap-2.5 rounded-lg border px-3">
        <div className="bg-muted-foreground/12 size-5 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="bg-muted-foreground/12 h-2 w-full rounded" />
          <div className="bg-muted-foreground/10 h-2 w-3/4 rounded" />
        </div>
      </div>
      {/* Front card */}
      <div className="bg-background border-border absolute inset-x-0 bottom-12 flex h-14 items-center gap-3 rounded-lg border px-3.5 shadow-sm">
        <div className="bg-muted size-7 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="bg-muted h-2.5 w-full rounded" />
          <div className="bg-muted/70 h-2 w-3/5 rounded" />
        </div>
      </div>
      {/* Fade */}
      <div className="from-background/0 to-background pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-b" />
    </div>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <SearchCardsIllustration />
          </EmptyMedia>
          <EmptyTitle>Looking for something?</EmptyTitle>
          <EmptyDescription>
            Type a keyword and we&apos;ll search through files, folders, #tags,
            and transcripts.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
```

### No messages empty state with chat bubbles illustration (`c-empty-17`)

Target: `components/examples/c-empty-17.tsx`

No messages empty state with chat bubbles illustration

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function ChatIllustration() {
  return (
    <svg
      width="180"
      height="120"
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left bubble */}
      <rect
        x="20"
        y="20"
        width="80"
        height="44"
        rx="12"
        className="fill-muted dark:fill-muted/60 stroke-border"
        strokeWidth="1.5"
      />
      {/* Left bubble tail */}
      <path
        d="M36 64 L32 76 L48 64"
        className="fill-muted dark:fill-muted/60 stroke-border"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Left bubble text lines */}
      <rect
        x="32"
        y="32"
        width="48"
        height="4"
        rx="2"
        className="fill-muted-foreground/20"
      />
      <rect
        x="32"
        y="42"
        width="36"
        height="4"
        rx="2"
        className="fill-muted-foreground/15"
      />
      {/* Left bubble avatar dot */}
      <circle cx="32" cy="52" r="3" className="fill-muted-foreground/12" />

      {/* Right bubble */}
      <rect
        x="80"
        y="50"
        width="80"
        height="40"
        rx="12"
        className="fill-primary/10 dark:fill-primary/15 stroke-primary/30"
        strokeWidth="1.5"
      />
      {/* Right bubble tail */}
      <path
        d="M144 90 L148 100 L132 90"
        className="fill-primary/10 dark:fill-primary/15 stroke-primary/30"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Right bubble text lines */}
      <rect
        x="92"
        y="62"
        width="52"
        height="4"
        rx="2"
        className="fill-primary/20"
      />
      <rect
        x="92"
        y="72"
        width="32"
        height="4"
        rx="2"
        className="fill-primary/15"
      />

      {/* Decorative dots */}
      <circle cx="14" cy="46" r="2" className="fill-muted-foreground/10" />
      <circle cx="168" cy="66" r="2" className="fill-primary/15" />
      <circle cx="110" cy="16" r="2.5" className="fill-muted-foreground/10" />
    </svg>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <ChatIllustration />
          </EmptyMedia>
          <EmptyTitle>No messages yet</EmptyTitle>
          <EmptyDescription>
            Start a conversation with your team. Messages will appear here.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Send a message</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### No payments empty state with credit card illustration (`c-empty-18`)

Target: `components/examples/c-empty-18.tsx`

No payments empty state with credit card illustration

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function CreditCardIllustration() {
  return (
    <svg
      width="200"
      height="130"
      viewBox="0 0 200 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Shadow card behind */}
      <rect
        x="48"
        y="12"
        width="120"
        height="78"
        rx="10"
        className="fill-muted/50 dark:fill-muted/25"
        transform="rotate(6 108 51)"
      />

      {/* Main card */}
      <rect
        x="36"
        y="18"
        width="128"
        height="82"
        rx="10"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />

      {/* Chip */}
      <rect
        x="52"
        y="38"
        width="22"
        height="16"
        rx="3"
        className="fill-muted-foreground/15 stroke-muted-foreground/20"
        strokeWidth="1"
      />
      {/* Chip lines */}
      <line
        x1="52"
        y1="46"
        x2="74"
        y2="46"
        className="stroke-muted-foreground/15"
        strokeWidth="0.8"
      />
      <line
        x1="63"
        y1="38"
        x2="63"
        y2="54"
        className="stroke-muted-foreground/15"
        strokeWidth="0.8"
      />

      {/* Contactless icon */}
      <g className="stroke-muted-foreground/20" strokeWidth="1.5" fill="none">
        <path d="M84 42 Q87 46 84 50" strokeLinecap="round" />
        <path d="M88 40 Q92 46 88 52" strokeLinecap="round" />
        <path d="M92 38 Q97 46 92 54" strokeLinecap="round" />
      </g>

      {/* Card number dots */}
      <g className="fill-muted-foreground/20">
        <circle cx="56" cy="68" r="2" />
        <circle cx="64" cy="68" r="2" />
        <circle cx="72" cy="68" r="2" />
        <circle cx="80" cy="68" r="2" />
      </g>
      <g className="fill-muted-foreground/15">
        <circle cx="94" cy="68" r="2" />
        <circle cx="102" cy="68" r="2" />
        <circle cx="110" cy="68" r="2" />
        <circle cx="118" cy="68" r="2" />
      </g>

      {/* Bottom info lines */}
      <rect
        x="52"
        y="80"
        width="40"
        height="3"
        rx="1.5"
        className="fill-muted-foreground/12"
      />
      <rect
        x="120"
        y="80"
        width="28"
        height="3"
        rx="1.5"
        className="fill-muted-foreground/12"
      />

      {/* Card network logo placeholder */}
      <circle cx="140" cy="88" r="6" className="fill-muted-foreground/8" />
      <circle cx="150" cy="88" r="6" className="fill-muted-foreground/12" />

      {/* Floating decorative elements */}
      <circle cx="26" cy="50" r="3" className="fill-primary/10" />
      <circle cx="180" cy="40" r="2" className="fill-primary/10" />
      <path
        d="M174 70 L178 66 L178 74 Z"
        className="fill-muted-foreground/10"
      />
    </svg>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <CreditCardIllustration />
          </EmptyMedia>
          <EmptyTitle>No payment methods</EmptyTitle>
          <EmptyDescription>
            Add a payment method to start making transactions securely.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Add payment method</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### No integrations empty state with connected nodes illustration (`c-empty-19`)

Target: `components/examples/c-empty-19.tsx`

No integrations empty state with connected nodes illustration

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function NodesIllustration() {
  return (
    <svg
      width="200"
      height="120"
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Connection lines */}
      <line
        x1="100"
        y1="60"
        x2="44"
        y2="30"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="100"
        y1="60"
        x2="44"
        y2="90"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="100"
        y1="60"
        x2="156"
        y2="30"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="100"
        y1="60"
        x2="156"
        y2="90"
        className="stroke-border"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Center node */}
      <circle
        cx="100"
        cy="60"
        r="18"
        className="fill-primary/10 dark:fill-primary/15 stroke-primary/40"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="60" r="6" className="fill-primary/30" />
      <circle cx="100" cy="60" r="2.5" className="fill-primary" />

      {/* Top-left node */}
      <circle
        cx="44"
        cy="30"
        r="14"
        className="fill-muted dark:fill-muted/60 stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="37"
        y="26"
        width="14"
        height="3"
        rx="1.5"
        className="fill-muted-foreground/20"
      />
      <rect
        x="40"
        y="32"
        width="8"
        height="2"
        rx="1"
        className="fill-muted-foreground/12"
      />

      {/* Bottom-left node */}
      <circle
        cx="44"
        cy="90"
        r="14"
        className="fill-muted dark:fill-muted/60 stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="37"
        y="86"
        width="14"
        height="3"
        rx="1.5"
        className="fill-muted-foreground/20"
      />
      <rect
        x="40"
        y="92"
        width="8"
        height="2"
        rx="1"
        className="fill-muted-foreground/12"
      />

      {/* Top-right node */}
      <circle
        cx="156"
        cy="30"
        r="14"
        className="fill-muted dark:fill-muted/60 stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="149"
        y="26"
        width="14"
        height="3"
        rx="1.5"
        className="fill-muted-foreground/20"
      />
      <rect
        x="152"
        y="32"
        width="8"
        height="2"
        rx="1"
        className="fill-muted-foreground/12"
      />

      {/* Bottom-right node */}
      <circle
        cx="156"
        cy="90"
        r="14"
        className="fill-muted dark:fill-muted/60 stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="149"
        y="86"
        width="14"
        height="3"
        rx="1.5"
        className="fill-muted-foreground/20"
      />
      <rect
        x="152"
        y="92"
        width="8"
        height="2"
        rx="1"
        className="fill-muted-foreground/12"
      />

      {/* Small floating dots */}
      <circle cx="72" cy="40" r="2" className="fill-primary/15" />
      <circle cx="128" cy="80" r="2" className="fill-primary/15" />
      <circle cx="72" cy="80" r="1.5" className="fill-muted-foreground/10" />
      <circle cx="128" cy="40" r="1.5" className="fill-muted-foreground/10" />
    </svg>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <NodesIllustration />
          </EmptyMedia>
          <EmptyTitle>No integrations</EmptyTitle>
          <EmptyDescription>
            Connect your tools and services to streamline your workflow.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button>Browse integrations</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```

### No events empty state with calendar illustration (`c-empty-20`)

Target: `components/examples/c-empty-20.tsx`

No events empty state with calendar illustration

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function CalendarIllustration() {
  return (
    <svg
      width="160"
      height="140"
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Calendar body */}
      <rect
        x="24"
        y="28"
        width="112"
        height="96"
        rx="10"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />

      {/* Calendar header bar */}
      <rect
        x="24"
        y="28"
        width="112"
        height="24"
        rx="10"
        className="fill-muted dark:fill-muted/60"
      />
      <rect
        x="24"
        y="42"
        width="112"
        height="10"
        className="fill-muted dark:fill-muted/60"
      />

      {/* Calendar hooks */}
      <line
        x1="56"
        y1="20"
        x2="56"
        y2="36"
        className="stroke-muted-foreground/30"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="104"
        y1="20"
        x2="104"
        y2="36"
        className="stroke-muted-foreground/30"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Day dots - row 1 */}
      <circle cx="48" cy="68" r="4" className="fill-muted-foreground/10" />
      <circle cx="68" cy="68" r="4" className="fill-muted-foreground/10" />
      <circle cx="88" cy="68" r="4" className="fill-muted-foreground/10" />
      <circle cx="108" cy="68" r="4" className="fill-muted-foreground/10" />

      {/* Day dots - row 2 */}
      <circle cx="48" cy="86" r="4" className="fill-muted-foreground/10" />
      <circle cx="68" cy="86" r="4" className="fill-muted-foreground/10" />
      <circle cx="88" cy="86" r="4" className="fill-primary/25" />
      <circle cx="88" cy="86" r="2" className="fill-primary" />
      <circle cx="108" cy="86" r="4" className="fill-muted-foreground/10" />

      {/* Day dots - row 3 */}
      <circle cx="48" cy="104" r="4" className="fill-muted-foreground/10" />
      <circle cx="68" cy="104" r="4" className="fill-muted-foreground/10" />
      <circle cx="88" cy="104" r="4" className="fill-muted-foreground/10" />
      <circle cx="108" cy="104" r="4" className="fill-muted-foreground/10" />

      {/* Floating decoration */}
      <circle cx="14" cy="70" r="2" className="fill-muted-foreground/10" />
      <circle cx="148" cy="56" r="2.5" className="fill-primary/10" />
      <circle cx="146" cy="100" r="1.5" className="fill-muted-foreground/8" />
    </svg>
  )
}

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-4">
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia>
            <CalendarIllustration />
          </EmptyMedia>
          <EmptyTitle>No upcoming events</EmptyTitle>
          <EmptyDescription>
            Your schedule is clear. Create an event to get started.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Create event</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
```
