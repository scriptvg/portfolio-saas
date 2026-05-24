# Table (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

17 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-table-1` | Basic table. | registry:block | Basic table. |
| `c-table-2` | Table with footer. | registry:block | Table with footer. |
| `c-table-3` | Table in card with status badges. | registry:block | Table in card with status badges. |
| `c-table-4` | Table card with actions column. | registry:block | Table card with actions column. |
| `c-table-5` | Table with interactive elements. | registry:block | Table with interactive elements. |
| `c-table-6` | Team members table with avatars, roles, and status | registry:block | Team members table with avatars, roles, and status |
| `c-table-7` | Orders table with customer info and payment status | registry:block | Orders table with customer info and payment status |
| `c-table-8` | Projects table with team avatars and status | registry:block | Projects table with team avatars and status |
| `c-table-9` | Activity log table with user avatars and timestamps | registry:block | Activity log table with user avatars and timestamps |
| `c-table-10` | Subscriptions table with plan badges and billing info | registry:block | Subscriptions table with plan badges and billing info |
| `c-table-11` | Product inventory table with stock badges and prices | registry:block | Product inventory table with stock badges and prices |
| `c-table-12` | API keys table with permission badges and actions | registry:block | API keys table with permission badges and actions |
| `c-table-13` | File manager table with owners and sharing badges | registry:block | File manager table with owners and sharing badges |
| `c-table-14` | Issues table with priority, assignee, and labels | registry:block | Issues table with priority, assignee, and labels |
| `c-table-15` | Leaderboard table with rank, score, and level badges | registry:block | Leaderboard table with rank, score, and level badges |
| `c-table-16` | Vertical table with employee profile details | registry:block | Vertical table with employee profile details |
| `c-table-17` | Vertical table with server configuration details | registry:block | Vertical table with server configuration details |

## Source

### Basic table. (`c-table-1`)

Target: `components/examples/c-table-1.tsx`

Basic table.

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="text-sm font-medium">
                {invoice.invoice}
              </TableCell>
              <TableCell className="text-sm">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-sm">{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right text-sm">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Table with footer. (`c-table-2`)

Target: `components/examples/c-table-2.tsx`

Table with footer.

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  { invoice: "INV001", status: "Paid", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", amount: "$350.00" },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right font-bold">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
```

### Table in card with status badges. (`c-table-3`)

Target: `components/examples/c-table-3.tsx`

Table in card with status badges.

```tsx
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tasks = [
  {
    id: "1",
    name: "Design homepage",
    status: "Completed",
    statusColor: "bg-green-500/10 text-green-700",
  },
  {
    id: "2",
    name: "Implement API",
    status: "In Progress",
    statusColor: "bg-yellow-500/10 text-yellow-700",
  },
  {
    id: "3",
    name: "Write tests",
    status: "Pending",
    statusColor: "bg-gray-500/10 text-gray-700",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <Card className="p-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.name}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${task.statusColor}`}
                    >
                      {task.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Table card with actions column. (`c-table-4`)

Target: `components/examples/c-table-4.tsx`

Table card with actions column.

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const products = [
  { id: "1", name: "Wireless Mouse", price: "$29.99" },
  { id: "2", name: "Mechanical Keyboard", price: "$129.99" },
  { id: "3", name: "USB-C Hub", price: "$49.99" },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <Card className="p-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <IconPlaceholder
                            lucide="MoreHorizontalIcon"
                            tabler="IconDots"
                            hugeicons="MoreHorizontalCircle01Icon"
                            phosphor="DotsThreeIcon"
                            remixicon="RiMoreLine"
                          />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Table with interactive elements. (`c-table-5`)

Target: `components/examples/c-table-5.tsx`

Table with interactive elements.

```tsx
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const items = [
  { id: "1", name: "Item Alpha", quantity: 1, price: "$10.00" },
  { id: "2", name: "Item Beta", quantity: 2, price: "$20.00" },
  { id: "3", name: "Item Gamma", quantity: 1, price: "$30.00" },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <Card className="p-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      defaultValue={item.quantity}
                      className="h-8 w-20"
                      min="0"
                    />
                  </TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Team members table with avatars, roles, and status (`c-table-6`)

Target: `components/examples/c-table-6.tsx`

Team members table with avatars, roles, and status

```tsx
import { Badge } from "@/components/reui/badge"
import { Frame, FramePanel } from "@/components/reui/frame"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const members = [
  {
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    role: "Admin",
    roleVariant: "default" as const,
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    name: "Marcus Johnson",
    email: "marcus@example.com",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    role: "Developer",
    roleVariant: "info-light" as const,
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    name: "Emily Park",
    email: "emily@example.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    role: "Designer",
    roleVariant: "warning-light" as const,
    status: "Away",
    statusVariant: "warning-light" as const,
  },
  {
    name: "David Kim",
    email: "david@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
    role: "Viewer",
    roleVariant: "outline" as const,
    status: "Offline",
    statusVariant: "outline" as const,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Frame spacing="xs">
        <FramePanel className="p-0!">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.email}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {member.name}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {member.email}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={member.roleVariant} size="sm">
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={member.statusVariant} size="sm">
                      {member.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Orders table with customer info and payment status (`c-table-7`)

Target: `components/examples/c-table-7.tsx`

Orders table with customer info and payment status

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    email: "olivia@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    amount: "$1,999.00",
    status: "Paid",
    statusVariant: "success" as const,
    date: "Feb 1, 2025",
  },
  {
    id: "#3209",
    customer: "Jackson Lee",
    email: "jackson@example.com",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    amount: "$39.00",
    status: "Pending",
    statusVariant: "warning" as const,
    date: "Jan 28, 2025",
  },
  {
    id: "#3208",
    customer: "Isabella Nguyen",
    email: "isabella@example.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    amount: "$299.00",
    status: "Paid",
    statusVariant: "success" as const,
    date: "Jan 25, 2025",
  },
  {
    id: "#3207",
    customer: "William Kim",
    email: "will@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
    amount: "$99.00",
    status: "Refunded",
    statusVariant: "destructive-light" as const,
    date: "Jan 22, 2025",
  },
  {
    id: "#3206",
    customer: "Sofia Davis",
    email: "sofia@example.com",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    amount: "$2,500.00",
    status: "Paid",
    statusVariant: "success" as const,
    date: "Jan 18, 2025",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-mono text-sm">{order.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarImage src={order.avatar} alt={order.customer} />
                    <AvatarFallback>
                      {order.customer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {order.customer}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {order.date}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={order.statusVariant} size="sm">
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-sm font-medium">
                {order.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Projects table with team avatars and status (`c-table-8`)

Target: `components/examples/c-table-8.tsx`

Projects table with team avatars and status

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const projects = [
  {
    name: "Website Redesign",
    description: "Landing page and marketing site",
    status: "In Progress",
    statusVariant: "info-light" as const,
    team: [
      {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
        fallback: "SC",
      },
      {
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
        fallback: "MJ",
      },
      {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
        fallback: "EP",
      },
    ],
    extra: 2,
    dueDate: "Mar 15",
  },
  {
    name: "Mobile App v2",
    description: "iOS and Android release",
    status: "Review",
    statusVariant: "warning-light" as const,
    team: [
      {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
        fallback: "DK",
      },
      {
        src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
        fallback: "SD",
      },
    ],
    extra: 0,
    dueDate: "Apr 1",
  },
  {
    name: "API Integration",
    description: "Third-party payment gateway",
    status: "Completed",
    statusVariant: "success-light" as const,
    team: [
      {
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
        fallback: "MJ",
      },
    ],
    extra: 0,
    dueDate: "Feb 28",
  },
  {
    name: "Analytics Dashboard",
    description: "Real-time metrics and reporting",
    status: "Planning",
    statusVariant: "outline" as const,
    team: [
      {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
        fallback: "SC",
      },
      {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
        fallback: "DK",
      },
      {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
        fallback: "EP",
      },
    ],
    extra: 4,
    dueDate: "May 10",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Due</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="bg-muted rounded-sm flex size-8 shrink-0 items-center justify-center">
                    <IconPlaceholder
                      lucide="FolderIcon"
                      tabler="IconFolder"
                      hugeicons="FolderIcon"
                      phosphor="FolderIcon"
                      remixicon="RiFolderLine"
                      className="text-muted-foreground size-4"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{project.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {project.description}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={project.statusVariant} size="sm">
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>
                <AvatarGroup>
                  {project.team.map((member) => (
                    <Avatar key={member.fallback} size="sm">
                      <AvatarImage src={member.src} alt={member.fallback} />
                      <AvatarFallback>{member.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                  {project.extra > 0 && (
                    <AvatarGroupCount>
                      <span className="text-muted-foreground text-[0.625rem]">
                        +{project.extra}
                      </span>
                    </AvatarGroupCount>
                  )}
                </AvatarGroup>
              </TableCell>
              <TableCell className="text-muted-foreground text-right text-sm">
                {project.dueDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Activity log table with user avatars and timestamps (`c-table-9`)

Target: `components/examples/c-table-9.tsx`

Activity log table with user avatars and timestamps

```tsx
import { Badge } from "@/components/reui/badge"
import { Frame, FramePanel } from "@/components/reui/frame"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const activities = [
  {
    user: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    action: "Deployed",
    target: "production",
    badge: "success" as const,
    timestamp: "2 minutes ago",
  },
  {
    user: "Marcus Johnson",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    action: "Merged",
    target: "feat/auth-flow",
    badge: "info" as const,
    timestamp: "15 minutes ago",
  },
  {
    user: "Emily Park",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    action: "Commented",
    target: "PR #284",
    badge: "outline" as const,
    timestamp: "1 hour ago",
  },
  {
    user: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
    action: "Reverted",
    target: "hotfix/api-crash",
    badge: "destructive" as const,
    timestamp: "3 hours ago",
  },
  {
    user: "Sofia Davis",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    action: "Created",
    target: "issue #512",
    badge: "secondary" as const,
    timestamp: "5 hours ago",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Frame spacing="xs">
        <FramePanel className="p-0!">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Target</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarImage
                          src={activity.avatar}
                          alt={activity.user}
                        />
                        <AvatarFallback>
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {activity.user}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={activity.badge} size="sm">
                      {activity.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {activity.target}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-right text-sm">
                    {activity.timestamp}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Subscriptions table with plan badges and billing info (`c-table-10`)

Target: `components/examples/c-table-10.tsx`

Subscriptions table with plan badges and billing info

```tsx
import { Badge } from "@/components/reui/badge"
import { Frame, FramePanel } from "@/components/reui/frame"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const subscriptions = [
  {
    service: "Vercel Pro",
    plan: "Pro",
    planVariant: "default" as const,
    billing: "$20/mo",
    nextBilling: "Mar 1, 2025",
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    service: "GitHub Enterprise",
    plan: "Enterprise",
    planVariant: "info" as const,
    billing: "$21/user/mo",
    nextBilling: "Mar 15, 2025",
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    service: "Figma Organization",
    plan: "Organization",
    planVariant: "warning-light" as const,
    billing: "$45/editor/mo",
    nextBilling: "Apr 1, 2025",
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    service: "Slack Business+",
    plan: "Business+",
    planVariant: "secondary" as const,
    billing: "$12.50/user/mo",
    nextBilling: "—",
    status: "Cancelled",
    statusVariant: "destructive-light" as const,
  },
  {
    service: "Linear Standard",
    plan: "Standard",
    planVariant: "outline" as const,
    billing: "$8/user/mo",
    nextBilling: "Mar 20, 2025",
    status: "Trial",
    statusVariant: "info-light" as const,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Billing</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions.map((sub) => (
            <TableRow key={sub.service}>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{sub.service}</span>
                  <span className="text-muted-foreground text-xs">
                    Next: {sub.nextBilling}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={sub.planVariant} size="sm">
                  {sub.plan}
                </Badge>
              </TableCell>
              <TableCell className="text-sm">{sub.billing}</TableCell>
              <TableCell>
                <Badge variant={sub.statusVariant} size="sm">
                  {sub.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="h-7">
                  <IconPlaceholder
                    lucide="SettingsIcon"
                    tabler="IconSettings"
                    hugeicons="SettingsIcon"
                    phosphor="GearIcon"
                    remixicon="RiSettings3Line"
                    className="size-3.5"
                    aria-hidden="true"
                  />
                  Manage
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Product inventory table with stock badges and prices (`c-table-11`)

Target: `components/examples/c-table-11.tsx`

Product inventory table with stock badges and prices

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const products = [
  {
    name: "Ergonomic Desk Chair",
    sku: "FRN-001",
    category: "Furniture",
    price: "$549.00",
    stock: 124,
    stockStatus: "In Stock",
    stockVariant: "success-light" as const,
  },
  {
    name: "Wireless Noise-Canceling Headphones",
    sku: "AUD-042",
    category: "Audio",
    price: "$349.99",
    stock: 8,
    stockStatus: "Low Stock",
    stockVariant: "warning-light" as const,
  },
  {
    name: '4K Ultra HD Monitor 32"',
    sku: "DSP-019",
    category: "Displays",
    price: "$799.00",
    stock: 0,
    stockStatus: "Out of Stock",
    stockVariant: "destructive-light" as const,
  },
  {
    name: "Mechanical Keyboard RGB",
    sku: "INP-087",
    category: "Input",
    price: "$179.99",
    stock: 56,
    stockStatus: "In Stock",
    stockVariant: "success-light" as const,
  },
  {
    name: "USB-C Docking Station",
    sku: "ACC-033",
    category: "Accessories",
    price: "$249.00",
    stock: 3,
    stockStatus: "Low Stock",
    stockVariant: "warning-light" as const,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="bg-muted rounded-sm flex size-9 shrink-0 items-center justify-center">
                    <IconPlaceholder
                      lucide="PackageIcon"
                      tabler="IconPackage"
                      hugeicons="Package01Icon"
                      phosphor="PackageIcon"
                      remixicon="RiBox3Line"
                      className="text-muted-foreground size-4"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{product.name}</span>
                    <span className="text-muted-foreground tru font-mono text-xs">
                      {product.sku}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {product.category}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant={product.stockVariant} size="sm">
                    {product.stockStatus}
                  </Badge>
                  <span className="text-muted-foreground text-xs">
                    ({product.stock})
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right text-sm font-medium">
                {product.price}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <IconPlaceholder
                        lucide="MoreHorizontalIcon"
                        tabler="IconDots"
                        hugeicons="MoreHorizontalCircle01Icon"
                        phosphor="DotsThreeIcon"
                        remixicon="RiMoreLine"
                      />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Restock</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Archive
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### API keys table with permission badges and actions (`c-table-12`)

Target: `components/examples/c-table-12.tsx`

API keys table with permission badges and actions

```tsx
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const apiKeys = [
  {
    name: "Production API",
    token: "sk_live_••••••••4f3a",
    permissions: ["read", "write"],
    lastUsed: "2 minutes ago",
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    name: "Staging API",
    token: "sk_test_••••••••8b2c",
    permissions: ["read", "write", "admin"],
    lastUsed: "1 hour ago",
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    name: "CI/CD Pipeline",
    token: "sk_ci_••••••••1d9e",
    permissions: ["read"],
    lastUsed: "3 days ago",
    status: "Active",
    statusVariant: "success-light" as const,
  },
  {
    name: "Legacy Integration",
    token: "sk_old_••••••••7a5f",
    permissions: ["read", "write"],
    lastUsed: "30 days ago",
    status: "Expired",
    statusVariant: "destructive-light" as const,
  },
]

const permissionVariant: Record<
  string,
  "outline" | "info-light" | "warning-light"
> = {
  read: "outline",
  write: "info-light",
  admin: "warning-light",
}

export function Pattern() {
  return (
    <Card className="mx-auto flex w-full max-w-2xl p-0">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Key</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((key) => (
              <TableRow key={key.name}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{key.name}</span>
                    <span className="text-muted-foreground text-xs">
                      Last used: {key.lastUsed}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">
                    {key.token}
                  </code>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {key.permissions.map((perm) => (
                      <Badge
                        key={perm}
                        variant={permissionVariant[perm] ?? "outline"}
                        size="xs"
                      >
                        {perm}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={key.statusVariant} size="sm">
                    {key.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="size-7">
                      <IconPlaceholder
                        lucide="CopyIcon"
                        tabler="IconCopy"
                        hugeicons="Copy01Icon"
                        phosphor="CopyIcon"
                        remixicon="RiFileCopyLine"
                        className="size-3.5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Copy key</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="size-7">
                      <IconPlaceholder
                        lucide="RotateCcwIcon"
                        tabler="IconRotate2"
                        hugeicons="Refresh04Icon"
                        phosphor="ArrowCounterClockwiseIcon"
                        remixicon="RiRestartLine"
                        className="size-3.5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Regenerate key</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
```

### File manager table with owners and sharing badges (`c-table-13`)

Target: `components/examples/c-table-13.tsx`

File manager table with owners and sharing badges

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const files = [
  {
    name: "Q4 Financial Report.pdf",
    icon: (
      <IconPlaceholder
        lucide="FileTextIcon"
        tabler="IconFileText"
        hugeicons="File02Icon"
        phosphor="FileTextIcon"
        remixicon="RiFileTextLine"
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "2.4 MB",
    owner: "Sarah Chen",
    ownerAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    sharing: "Team",
    sharingVariant: "info-light" as const,
    modified: "2 hours ago",
  },
  {
    name: "Brand Guidelines",
    icon: (
      <IconPlaceholder
        lucide="FolderIcon"
        tabler="IconFolder"
        hugeicons="FolderIcon"
        phosphor="FolderIcon"
        remixicon="RiFolderLine"
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "—",
    owner: "Emily Park",
    ownerAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    sharing: "Public",
    sharingVariant: "success-light" as const,
    modified: "1 day ago",
  },
  {
    name: "Product Roadmap 2025.xlsx",
    icon: (
      <IconPlaceholder
        lucide="FileSpreadsheetIcon"
        tabler="IconFileSpreadsheet"
        hugeicons="GoogleSheetIcon"
        phosphor="FileTextIcon"
        remixicon="RiFileTextLine"
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "856 KB",
    owner: "Marcus Johnson",
    ownerAvatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    sharing: "Private",
    sharingVariant: "outline" as const,
    modified: "3 days ago",
  },
  {
    name: "App Screenshots",
    icon: (
      <IconPlaceholder
        lucide="ImageIcon"
        tabler="IconPhoto"
        hugeicons="ImageIcon"
        phosphor="ImageIcon"
        remixicon="RiImageLine"
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "48.2 MB",
    owner: "David Kim",
    ownerAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
    sharing: "Team",
    sharingVariant: "info-light" as const,
    modified: "1 week ago",
  },
  {
    name: "Architecture Diagram.fig",
    icon: (
      <IconPlaceholder
        lucide="PenToolIcon"
        tabler="IconEdit"
        hugeicons="PenTool03Icon"
        phosphor="PenNibIcon"
        remixicon="RiPenNibLine"
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "12.8 MB",
    owner: "Sofia Davis",
    ownerAvatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    sharing: "Restricted",
    sharingVariant: "warning-light" as const,
    modified: "2 weeks ago",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Sharing</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="text-right">Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.name}>
              <TableCell>
                <div className="flex items-center gap-3">
                  {file.icon}
                  <span className="text-sm font-medium">{file.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarImage src={file.ownerAvatar} alt={file.owner} />
                    <AvatarFallback>
                      {file.owner
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{file.owner}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={file.sharingVariant} size="sm">
                  {file.sharing}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {file.size}
              </TableCell>
              <TableCell className="text-muted-foreground text-right text-sm">
                {file.modified}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Issues table with priority, assignee, and labels (`c-table-14`)

Target: `components/examples/c-table-14.tsx`

Issues table with priority, assignee, and labels

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const issues = [
  {
    id: "ISS-421",
    title: "Login page returns 500 on mobile",
    priority: "Critical",
    priorityVariant: "destructive" as const,
    priorityIcon: (
      <IconPlaceholder
        lucide="ArrowUpIcon"
        tabler="IconArrowUp"
        hugeicons="ArrowUp02Icon"
        phosphor="ArrowUpIcon"
        remixicon="RiArrowUpLine"
        className="size-3"
        aria-hidden="true"
      />
    ),
    label: "Bug",
    labelVariant: "destructive-light" as const,
    assignee: "Sarah Chen",
    assigneeAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    status: "Open",
    statusVariant: "info-light" as const,
  },
  {
    id: "ISS-420",
    title: "Add dark mode support",
    priority: "High",
    priorityVariant: "warning" as const,
    priorityIcon: (
      <IconPlaceholder
        lucide="ArrowUpIcon"
        tabler="IconArrowUp"
        hugeicons="ArrowUp02Icon"
        phosphor="ArrowUpIcon"
        remixicon="RiArrowUpLine"
        className="size-3"
        aria-hidden="true"
      />
    ),
    label: "Feature",
    labelVariant: "info-light" as const,
    assignee: "Marcus Johnson",
    assigneeAvatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    status: "In Progress",
    statusVariant: "warning-light" as const,
  },
  {
    id: "ISS-419",
    title: "Update user onboarding flow",
    priority: "Medium",
    priorityVariant: "info" as const,
    priorityIcon: (
      <IconPlaceholder
        lucide="ArrowRightIcon"
        tabler="IconArrowRight"
        hugeicons="ArrowRight02Icon"
        phosphor="ArrowRightIcon"
        remixicon="RiArrowRightLine"
        className="size-3"
        aria-hidden="true"
      />
    ),
    label: "Improvement",
    labelVariant: "success-light" as const,
    assignee: "Emily Park",
    assigneeAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    status: "In Review",
    statusVariant: "info-light" as const,
  },
  {
    id: "ISS-418",
    title: "Refactor API rate limiter module",
    priority: "Low",
    priorityVariant: "secondary" as const,
    priorityIcon: (
      <IconPlaceholder
        lucide="ArrowDownIcon"
        tabler="IconArrowDown"
        hugeicons="ArrowDown02Icon"
        phosphor="ArrowDownIcon"
        remixicon="RiArrowDownLine"
        className="size-3"
        aria-hidden="true"
      />
    ),
    label: "Tech Debt",
    labelVariant: "outline" as const,
    assignee: "David Kim",
    assigneeAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
    status: "Closed",
    statusVariant: "success-light" as const,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Card className="p-0">
        <CardContent className="overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">ID</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell className="text-muted-foreground font-mono text-xs">
                    {issue.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-medium">
                        {issue.title}
                      </span>
                      <Badge variant="outline" size="xs">
                        {issue.label}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <AvatarImage
                          src={issue.assigneeAvatar}
                          alt={issue.assignee}
                        />
                        <AvatarFallback>
                          {issue.assignee
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{issue.assignee}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={issue.statusVariant} size="sm">
                      {issue.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Leaderboard table with rank, score, and level badges (`c-table-15`)

Target: `components/examples/c-table-15.tsx`

Leaderboard table with rank, score, and level badges

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

const leaders = [
  {
    rank: 1,
    name: "Sarah Chen",
    handle: "@sarahchen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
    score: 12840,
    change: "+320",
    changeUp: true,
    level: "Diamond",
    levelVariant: "info" as const,
  },
  {
    rank: 2,
    name: "Marcus Johnson",
    handle: "@marcusj",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    score: 11250,
    change: "+180",
    changeUp: true,
    level: "Platinum",
    levelVariant: "default" as const,
  },
  {
    rank: 3,
    name: "Emily Park",
    handle: "@emilyp",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80",
    score: 10890,
    change: "-45",
    changeUp: false,
    level: "Platinum",
    levelVariant: "default" as const,
  },
  {
    rank: 4,
    name: "David Kim",
    handle: "@davidk",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80",
    score: 9420,
    change: "+520",
    changeUp: true,
    level: "Gold",
    levelVariant: "warning" as const,
  },
  {
    rank: 5,
    name: "Sofia Davis",
    handle: "@sofiad",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    score: 8750,
    change: "+90",
    changeUp: true,
    level: "Gold",
    levelVariant: "warning" as const,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead>Player</TableHead>
            <TableHead>Level</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaders.map((leader) => (
            <TableRow key={leader.rank}>
              <TableCell className="text-center text-sm font-bold">
                {leader.rank}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarImage src={leader.avatar} alt={leader.name} />
                    <AvatarFallback>
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{leader.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {leader.handle}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={leader.levelVariant} size="sm">
                  {leader.level}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-mono text-sm font-medium">
                {leader.score.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                <span className="inline-flex items-center gap-0.5 text-sm">
                  {leader.changeUp ? (
                    <IconPlaceholder
                      lucide="TrendingUpIcon"
                      tabler="IconTrendingUp"
                      hugeicons="TradeUpIcon"
                      phosphor="TrendUpIcon"
                      remixicon="RiArrowRightUpLongLine"
                      aria-hidden="true"
                      className="text-success size-3.5"
                    />
                  ) : (
                    <IconPlaceholder
                      lucide="TrendingDownIcon"
                      tabler="IconTrendingDown"
                      hugeicons="TradeDownIcon"
                      phosphor="TrendDownIcon"
                      remixicon="RiArrowRightDownLongLine"
                      aria-hidden="true"
                      className="text-destructive size-3.5"
                    />
                  )}
                  <span
                    className={
                      leader.changeUp ? "text-success" : "text-destructive"
                    }
                  >
                    {leader.change}
                  </span>
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Vertical table with employee profile details (`c-table-16`)

Target: `components/examples/c-table-16.tsx`

Vertical table with employee profile details

```tsx
import { Badge } from "@/components/reui/badge"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <div className="bg-background overflow-hidden rounded-lg border">
        <Table>
          <TableBody>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 w-40 py-2 text-sm font-medium">
                Employee
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                      alt="Sarah Chen"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-medium">Sarah Chen</span>
                    <span className="text-muted-foreground text-xs">
                      Lead Product Designer
                    </span>
                  </div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                Department
              </TableCell>
              <TableCell className="py-2 text-sm">
                Design & User Experience
              </TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                Email
              </TableCell>
              <TableCell className="text-primary py-2 text-sm">
                sarah.chen@acmecorp.com
              </TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                Location
              </TableCell>
              <TableCell className="py-2 text-sm">San Francisco, CA</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                Status
              </TableCell>
              <TableCell className="py-2">
                <Badge variant="success-light" size="sm">
                  Active
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                Start Date
              </TableCell>
              <TableCell className="py-2 text-sm">March 15, 2022</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                Reports To
              </TableCell>
              <TableCell className="py-2 text-sm">
                James Rodriguez, VP of Design
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
```

### Vertical table with server configuration details (`c-table-17`)

Target: `components/examples/c-table-17.tsx`

Vertical table with server configuration details

```tsx
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <Frame spacing="sm">
        <FrameHeader className="px-2!">
          <FrameTitle>Droplet Status</FrameTitle>
          <FrameDescription>
            Primary production server{" "}
            <Badge variant="outline" size="sm">
              prod-api-us-east-1
            </Badge>
          </FrameDescription>
        </FrameHeader>
        <FramePanel className="p-0!">
          <Table>
            <TableBody>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 w-40 py-2 text-sm font-medium">
                  Status
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Operational
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Instance Type
                </TableCell>
                <TableCell className="py-2">
                  <span className="font-mono text-sm">c6g.2xlarge</span>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Region
                </TableCell>
                <TableCell className="py-2 text-sm">
                  US East (N. Virginia)
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  CPU Usage
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted h-2 w-24 overflow-hidden rounded-full">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: "42%" }}
                      />
                    </div>
                    <span className="text-muted-foreground text-sm">42%</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Memory
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted h-2 w-24 overflow-hidden rounded-full">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: "67%" }}
                      />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      10.7 / 16 GB
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Uptime
                </TableCell>
                <TableCell className="py-2 text-sm">
                  47 days, 12 hours
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  OS
                </TableCell>
                <TableCell className="py-2 text-sm">
                  Amazon Linux 2023
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Tags
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" size="sm">
                      production
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      api
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      critical
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FramePanel>
      </Frame>
    </div>
  )
}
```
