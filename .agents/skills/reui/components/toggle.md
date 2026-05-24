# Toggle (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

14 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-toggle-1` | Basic toggle. | registry:block | Basic toggle. |
| `c-toggle-2` | Toggle buttons with outline variant. | registry:block | Toggle buttons with outline variant. |
| `c-toggle-3` | Toggle buttons in different sizes. | registry:block | Toggle buttons in different sizes. |
| `c-toggle-4` | Toggle with button and icon. | registry:block | Toggle with button and icon. |
| `c-toggle-5` | Disabled toggle. | registry:block | Disabled toggle. |
| `c-toggle-6` | Toggle with icon. | registry:block | Toggle with icon. |
| `c-toggle-7` | Toggle with notification count badge | registry:block | Toggle with notification count badge |
| `c-toggle-8` | Toggle size variants showcase | registry:block | Toggle size variants showcase |
| `c-toggle-9` | Toggle with icon swap on press | registry:block | Toggle with icon swap on press |
| `c-toggle-10` | Toggle with text label that changes | registry:block | Toggle with text label that changes |
| `c-toggle-11` | Social media reaction toggles | registry:block | Social media reaction toggles |
| `c-toggle-12` | Toggle with tooltip | registry:block | Toggle with tooltip |
| `c-toggle-13` | Disabled toggle states | registry:block | Disabled toggle states |
| `c-toggle-14` | Toggle as mute/unmute button | registry:block | Toggle as mute/unmute button |

## Source

### Basic toggle. (`c-toggle-1`)

Target: `components/examples/c-toggle-1.tsx`

Basic toggle.

```tsx
import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle aria-label="Toggle bold" defaultPressed>
        <IconPlaceholder
          lucide="BoldIcon"
          tabler="IconBold"
          hugeicons="TextBoldIcon"
          phosphor="TextBIcon"
          remixicon="RiBold"
        />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <IconPlaceholder
          lucide="ItalicIcon"
          tabler="IconItalic"
          hugeicons="TextItalicIcon"
          phosphor="TextItalicIcon"
          remixicon="RiItalic"
        />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <IconPlaceholder
          lucide="UnderlineIcon"
          tabler="IconUnderline"
          hugeicons="TextUnderlineIcon"
          phosphor="TextUnderlineIcon"
          remixicon="RiUnderline"
        />
      </Toggle>
    </div>
  )
}
```

### Toggle buttons with outline variant. (`c-toggle-2`)

Target: `components/examples/c-toggle-2.tsx`

Toggle buttons with outline variant.

```tsx
import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <IconPlaceholder
          lucide="ItalicIcon"
          tabler="IconItalic"
          hugeicons="TextItalicIcon"
          phosphor="TextItalicIcon"
          remixicon="RiItalic"
        />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <IconPlaceholder
          lucide="BoldIcon"
          tabler="IconBold"
          hugeicons="TextBoldIcon"
          phosphor="TextBIcon"
          remixicon="RiBold"
        />
        Bold
      </Toggle>
    </div>
  )
}
```

### Toggle buttons in different sizes. (`c-toggle-3`)

Target: `components/examples/c-toggle-3.tsx`

Toggle buttons in different sizes.

```tsx
import { Toggle } from "@/components/ui/toggle"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle variant="outline" size="sm" aria-label="Small toggle">
        Small
      </Toggle>
      <Toggle variant="outline" size="default" aria-label="Default toggle">
        Default
      </Toggle>
      <Toggle variant="outline" size="lg" aria-label="Large toggle">
        Large
      </Toggle>
    </div>
  )
}
```

### Toggle with button and icon. (`c-toggle-4`)

Target: `components/examples/c-toggle-4.tsx`

Toggle with button and icon.

```tsx
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline">
          Button
        </Button>
        <Toggle variant="outline" size="sm" aria-label="Small toggle">
          Toggle
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <IconPlaceholder
            lucide="BoldIcon"
            tabler="IconBold"
            hugeicons="TextBoldIcon"
            phosphor="TextBIcon"
            remixicon="RiBold"
          />
        </Button>
        <Toggle variant="outline" aria-label="Toggle bold icon">
          <IconPlaceholder
            lucide="BoldIcon"
            tabler="IconBold"
            hugeicons="TextBoldIcon"
            phosphor="TextBIcon"
            remixicon="RiBold"
          />
        </Toggle>
      </div>
    </div>
  )
}
```

### Disabled toggle. (`c-toggle-5`)

Target: `components/examples/c-toggle-5.tsx`

Disabled toggle.

```tsx
import { Toggle } from "@/components/ui/toggle"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle aria-label="Disabled toggle" disabled>
        Disabled
      </Toggle>
      <Toggle variant="outline" aria-label="Disabled outline toggle" disabled>
        Disabled
      </Toggle>
    </div>
  )
}
```

### Toggle with icon. (`c-toggle-6`)

Target: `components/examples/c-toggle-6.tsx`

Toggle with icon.

```tsx
import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Toggle variant="outline" aria-label="Toggle bookmark">
        <IconPlaceholder
          lucide="BookmarkIcon"
          tabler="IconBookmark"
          hugeicons="Bookmark02Icon"
          phosphor="BookmarkSimpleIcon"
          remixicon="RiBookmarkLine"
          className="group-data-[state=on]/toggle:fill-accent-foreground"
        />
        Bookmark
      </Toggle>
    </div>
  )
}
```

### Toggle with notification count badge (`c-toggle-7`)

Target: `components/examples/c-toggle-7.tsx`

Toggle with notification count badge

```tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"

import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <Toggle
        aria-label="Toggle notifications"
        pressed={pressed}
        onPressedChange={setPressed}
      >
        <div className="relative">
          <IconPlaceholder
            lucide="BellIcon"
            tabler="IconBell"
            hugeicons="NotificationIcon"
            phosphor="BellIcon"
            remixicon="RiNotificationLine"
          />
          {!pressed && (
            <Badge
              variant="destructive"
              size="xs"
              className="absolute -top-2 -right-2 rounded-full!"
            >
              3
            </Badge>
          )}
        </div>
      </Toggle>
    </div>
  )
}
```

### Toggle size variants showcase (`c-toggle-8`)

Target: `components/examples/c-toggle-8.tsx`

Toggle size variants showcase

```tsx
import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Small</span>
        <Toggle variant="outline" size="sm" aria-label="Toggle star small">
          <IconPlaceholder
            lucide="StarIcon"
            tabler="IconStar"
            hugeicons="StarIcon"
            phosphor="StarIcon"
            remixicon="RiStarLine"
          />
        </Toggle>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Default</span>
        <Toggle
          variant="outline"
          size="default"
          aria-label="Toggle star default"
        >
          <IconPlaceholder
            lucide="StarIcon"
            tabler="IconStar"
            hugeicons="StarIcon"
            phosphor="StarIcon"
            remixicon="RiStarLine"
          />
        </Toggle>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Large</span>
        <Toggle variant="outline" size="lg" aria-label="Toggle star large">
          <IconPlaceholder
            lucide="StarIcon"
            tabler="IconStar"
            hugeicons="StarIcon"
            phosphor="StarIcon"
            remixicon="RiStarLine"
          />
        </Toggle>
      </div>
    </div>
  )
}
```

### Toggle with icon swap on press (`c-toggle-9`)

Target: `components/examples/c-toggle-9.tsx`

Toggle with icon swap on press

```tsx
"use client"

import { useState } from "react"

import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <Toggle
        aria-label="Toggle favorite"
        pressed={pressed}
        onPressedChange={setPressed}
      >
        {pressed ? (
          <IconPlaceholder
            lucide="HeartIcon"
            tabler="IconHeart"
            hugeicons="FavouriteIcon"
            phosphor="HeartIcon"
            remixicon="RiHeartLine"
            className="fill-current"
          />
        ) : (
          <IconPlaceholder
            lucide="HeartIcon"
            tabler="IconHeart"
            hugeicons="FavouriteIcon"
            phosphor="HeartIcon"
            remixicon="RiHeartLine"
          />
        )}
      </Toggle>
    </div>
  )
}
```

### Toggle with text label that changes (`c-toggle-10`)

Target: `components/examples/c-toggle-10.tsx`

Toggle with text label that changes

```tsx
"use client"

import { useState } from "react"

import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <Toggle
        variant="outline"
        aria-label="Toggle bookmark"
        pressed={pressed}
        onPressedChange={setPressed}
      >
        {pressed ? (
          <IconPlaceholder
            lucide="BookmarkCheckIcon"
            tabler="IconBookmark"
            hugeicons="BookmarkCheck02Icon"
            phosphor="BookmarkSimpleIcon"
            remixicon="RiBookmarkLine"
            className="fill-current"
          />
        ) : (
          <IconPlaceholder
            lucide="BookmarkIcon"
            tabler="IconBookmark"
            hugeicons="Bookmark02Icon"
            phosphor="BookmarkSimpleIcon"
            remixicon="RiBookmarkLine"
          />
        )}
        {pressed ? "Bookmarked" : "Bookmark"}
      </Toggle>
    </div>
  )
}
```

### Social media reaction toggles (`c-toggle-11`)

Target: `components/examples/c-toggle-11.tsx`

Social media reaction toggles

```tsx
"use client"

import { useState } from "react"

import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [liked, setLiked] = useState(false)
  const [retweeted, setRetweeted] = useState(false)
  const [shared, setShared] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle
        variant="outline"
        aria-label="Like"
        pressed={liked}
        onPressedChange={setLiked}
      >
        <IconPlaceholder
          lucide="HeartIcon"
          tabler="IconHeart"
          hugeicons="FavouriteIcon"
          phosphor="HeartIcon"
          remixicon="RiHeartLine"
        />
        {liked ? 13 : 12}
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Retweet"
        pressed={retweeted}
        onPressedChange={setRetweeted}
      >
        <IconPlaceholder
          lucide="Repeat2Icon"
          tabler="IconRepeat"
          hugeicons="RepeatIcon"
          phosphor="RepeatIcon"
          remixicon="RiRepeatLine"
        />
        {retweeted ? 6 : 5}
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Share"
        pressed={shared}
        onPressedChange={setShared}
      >
        <IconPlaceholder
          lucide="Share2Icon"
          tabler="IconShare"
          hugeicons="Share08Icon"
          phosphor="ShareNetworkIcon"
          remixicon="RiStackshareLine"
        />
        {shared ? 4 : 3}
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Bookmark"
        pressed={bookmarked}
        onPressedChange={setBookmarked}
      >
        <IconPlaceholder
          lucide="BookmarkIcon"
          tabler="IconBookmark"
          hugeicons="Bookmark02Icon"
          phosphor="BookmarkSimpleIcon"
          remixicon="RiBookmarkLine"
        />
        {bookmarked ? 9 : 8}
      </Toggle>
    </div>
  )
}
```

### Toggle with tooltip (`c-toggle-12`)

Target: `components/examples/c-toggle-12.tsx`

Toggle with tooltip

```tsx
import { Toggle } from "@/components/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle variant="outline" aria-label="Pin to sidebar">
              <IconPlaceholder
                lucide="PinIcon"
                tabler="IconPin"
                hugeicons="Pin02Icon"
                phosphor="PushPinIcon"
                remixicon="RiPushpinLine"
              />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Pin to sidebar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
```

### Disabled toggle states (`c-toggle-13`)

Target: `components/examples/c-toggle-13.tsx`

Disabled toggle states

```tsx
import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle aria-label="Enabled default">
        <IconPlaceholder
          lucide="BoldIcon"
          tabler="IconBold"
          hugeicons="TextBoldIcon"
          phosphor="TextBIcon"
          remixicon="RiBold"
        />
      </Toggle>
      <Toggle variant="outline" aria-label="Enabled outline">
        <IconPlaceholder
          lucide="ItalicIcon"
          tabler="IconItalic"
          hugeicons="TextItalicIcon"
          phosphor="TextItalicIcon"
          remixicon="RiItalic"
        />
      </Toggle>
      <Toggle disabled aria-label="Disabled default">
        <IconPlaceholder
          lucide="UnderlineIcon"
          tabler="IconUnderline"
          hugeicons="TextUnderlineIcon"
          phosphor="TextUnderlineIcon"
          remixicon="RiUnderline"
        />
      </Toggle>
      <Toggle variant="outline" disabled aria-label="Disabled outline">
        <IconPlaceholder
          lucide="StrikethroughIcon"
          tabler="IconStrikethrough"
          hugeicons="TextStrikethroughIcon"
          phosphor="TextStrikethroughIcon"
          remixicon="RiStrikethrough"
        />
      </Toggle>
    </div>
  )
}
```

### Toggle as mute/unmute button (`c-toggle-14`)

Target: `components/examples/c-toggle-14.tsx`

Toggle as mute/unmute button

```tsx
"use client"

import { useState } from "react"

import { Toggle } from "@/components/ui/toggle"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export function Pattern() {
  const [muted, setMuted] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <Toggle
        size="lg"
        variant="outline"
        aria-label="Toggle mute"
        pressed={muted}
        onPressedChange={setMuted}
      >
        {muted ? (
          <IconPlaceholder
            lucide="VolumeOffIcon"
            tabler="IconVolumeOff"
            hugeicons="VolumeOffIcon"
            phosphor="SpeakerSlashIcon"
            remixicon="RiVolumeOffVibrateLine"
          />
        ) : (
          <IconPlaceholder
            lucide="Volume2Icon"
            tabler="IconVolume"
            hugeicons="VolumeHighIcon"
            phosphor="SpeakerHighIcon"
            remixicon="RiVolumeUpLine"
          />
        )}
        {muted ? "Muted" : "Sound"}
      </Toggle>
    </div>
  )
}
```
