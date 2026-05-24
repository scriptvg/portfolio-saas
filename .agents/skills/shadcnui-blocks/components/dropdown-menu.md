# Dropdown Menu (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/dropdown-menu](https://www.shadcnui-blocks.com/components/dropdown-menu).
8 variant(s). Install base UI with `pnpm dlx shadcn@latest add dropdown-menu` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `dropdown-menu-01` | Default Dropdown Menu | A default dropdown menu component |
| `dropdown-menu-02` | Dropdown Menu with Icon | A dropdown menu with icon component |
| `dropdown-menu-03` | Dropdown Menu with Checkboxes | A dropdown menu with checkboxes component |
| `dropdown-menu-04` | Dropdown Menu with Radio Group | A dropdown menu with radio group component |
| `dropdown-menu-05` | Dropdown Menu with Sub Menu | A dropdown menu with sub menu component |
| `dropdown-menu-06` | Dropdown Menu with Shortcuts | A dropdown menu with keyboard shortcuts component |
| `dropdown-menu-07` | Complex Dropdown Menu | A complex dropdown menu component |
| `dropdown-menu-08` | Workspace Switcher Dropdown Menu | A workspace switcher dropdown menu component |

## Variant source

### Default Dropdown Menu (`dropdown-menu-01`)

A default dropdown menu component

```tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Dropdown Menu with Icon (`dropdown-menu-02`)

A dropdown menu with icon component

```tsx
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuWithIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="h-4 w-4" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <LogOut className="h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Dropdown Menu with Checkboxes (`dropdown-menu-03`)

A dropdown menu with checkboxes component

```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tags = ["Sport", "Music", "Food", "Travel", "Tech", "Science", "Art"];

export default function DropdownMenuWithCheckboxes() {
  const [selectedTags, setSelectedTags] = useState<string[]>([
    tags[0],
    tags[4],
  ]);

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Tags</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Select Tags</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tags.map((tag) => (
          <DropdownMenuCheckboxItem
            checked={selectedTags.includes(tag)}
            key={tag}
            onCheckedChange={(checked) => handleTagChange(tag, checked)}
            // Prevent the dropdown menu from closing when the checkbox is clicked
            onSelect={(e) => e.preventDefault()}
          >
            {tag}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Dropdown Menu with Radio Group (`dropdown-menu-04`)

A dropdown menu with radio group component

```tsx
"use client";
import { ChevronDown, ChevronsUp, ChevronUp, Equal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuWithRadioGroup() {
  const [priority, setPriority] = useState("highest");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Set Priority</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Set Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={setPriority} value={priority}>
          <DropdownMenuRadioItem value="highest">
            <ChevronsUp className="mr-2 h-4 w-4 text-destructive" /> Highest
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">
            <ChevronUp className="mr-2 h-4 w-4 text-orange-500" /> High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">
            <Equal className="mr-2 h-4 w-4 text-yellow-500" /> Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">
            <ChevronDown className="mr-2 h-4 w-4 text-green-600" /> Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Dropdown Menu with Sub Menu (`dropdown-menu-05`)

A dropdown menu with sub menu component

```tsx
import {
  Copy,
  Ellipsis,
  ExternalLink,
  Eye,
  MessageCircle,
  Search,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuWithSubMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-full">
        <DropdownMenuItem>
          <Eye /> Open conversation details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User /> View full profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MessageCircle /> Start conversation
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Copy className="size-4 text-muted-foreground" />
            Copy
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Copy name</DropdownMenuItem>
            <DropdownMenuItem>Copy email</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <Search /> Search in conversation
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ExternalLink /> Open in new window
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Dropdown Menu with Shortcuts (`dropdown-menu-06`)

A dropdown menu with keyboard shortcuts component

```tsx
import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuWithShortcuts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuItem>
          New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Incognito Window <DropdownMenuShortcut>⌘⇧N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>History</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-40">
            <DropdownMenuItem>
              History <DropdownMenuShortcut>⌘Y</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Grouped History</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          Downloads <DropdownMenuShortcut>⌥⇧L</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Delete browsing data <DropdownMenuShortcut>⇧⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Complex Dropdown Menu (`dropdown-menu-07`)

A complex dropdown menu component

```tsx
import {
  Bolt,
  ExternalLink,
  Filter,
  LogIn,
  LogOut,
  Rocket,
  Settings2,
  User,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ComplexDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div className="flex flex-col text-start">
          <p className="font-medium text-sm">My Workspace</p>
          <p className="text-muted-foreground text-xs">myworkspace.slack.com</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-72">
        <DropdownMenuItem className="py-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="ml-1 flex flex-col">
            <p className="font-medium text-sm">My Workspace</p>
            <p className="text-muted-foreground text-xs">
              myworkspace.slack.com
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-col items-start">
          <div className="flex items-center gap-1">
            <Rocket className="mr-1 h-[18px] w-[18px]" />
            <span className="font-medium leading-none">Upgrade</span>
          </div>
          <p className="text-muted-foreground">
            You&apos;re on a free version of Slack.
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-1" /> Invite people
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings2 className="mr-1" /> Preferences
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Filter className="mr-1" />
            Filter sidebar
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Activity</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem checked>
                  All activity
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Unread messaged only
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Mentions only
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Customize by section
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>People</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem checked>
                  Everyone
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Without external people
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Including external people
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Bolt className="mr-1" />
            Tools & settings
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-52">
            <DropdownMenuLabel>Tools</DropdownMenuLabel>
            <DropdownMenuItem>Customize workspace</DropdownMenuItem>
            <DropdownMenuItem>Workspace builder</DropdownMenuItem>
            <DropdownMenuItem>
              Workspace analytics <ExternalLink className="ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Administration</DropdownMenuLabel>
            <DropdownMenuItem>Manage apps</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogIn className="mr-1" /> Sign in on mobile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-1" /> Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Workspace Switcher Dropdown Menu (`dropdown-menu-08`)

A workspace switcher dropdown menu component

```tsx
"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const workspaces = [
  {
    id: 1,
    name: "Workspace 1",
    createdBy: "abc@example.com",
  },
  {
    id: 2,
    name: "Workspace 2",
    createdBy: "def@example.com",
  },
  {
    id: 3,
    name: "Workspace 3",
    createdBy: "ghi@example.com",
  },
];

export default function WorkspaceSwitcher() {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2.5">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
            {selectedWorkspace.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 text-start leading-none">
          <span className="max-w-[17ch] truncate font-semibold text-sm leading-none">
            {selectedWorkspace.name}
          </span>
          <span className="max-w-[20ch] truncate text-muted-foreground text-xs">
            {selectedWorkspace.createdBy}
          </span>
        </div>
        <ChevronsUpDown className="ml-6 h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onClick={() => setSelectedWorkspace(workspace)}
          >
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 rounded-md">
                <AvatarFallback className="rounded-md bg-primary/10 text-foreground">
                  {workspace.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span>{workspace.name}</span>
                <span className="text-muted-foreground text-xs">
                  {workspace.createdBy}
                </span>
              </div>
            </div>
            {selectedWorkspace.id === workspace.id && (
              <Check className="ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
