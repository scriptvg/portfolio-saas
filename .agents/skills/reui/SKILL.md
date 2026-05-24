---
name: reui
description: >-
  ReUI shadcn registry — 1000+ component blocks from reui.io (Keenthemes).
  Use for data grids, filters, kanban, steppers, and styled shadcn patterns.
  Install via pnpm dlx shadcn@latest add @reui/{name}. Re-scrape with
  node scripts/scrape-reui-skills.mjs.
---

# ReUI component skills

Reference from [reui.io](https://reui.io/components) — registry API `https://reui.io/r/default/{name}.json`.

**744** variants across **50** categories (scraped style: `default`).

## Setup (once per project)

```json
{
  "registries": {
    "@reui": "https://reui.io/r/{style}/{name}.json"
  }
}
```

```bash
pnpm dlx shadcn@latest add @reui/c-accordion-1
pnpm dlx shadcn@latest add @reui/filters
```

## Project notes

- Demos use `export function Pattern()` — rename when vendoring into your app
- Custom primitives live under `@/components/reui/*` after install
- Pair with `shadcn`, `shadcnui-blocks`, and `tailwind-v4-shadcn` skills

## Components

| Component | Reference | Variants |
| --- | --- | --- |
| Accordion | [`components/accordion.md`](./components/accordion.md) | 11 |
| Alert | [`components/alert.md`](./components/alert.md) | 20 |
| Autocomplete | [`components/autocomplete.md`](./components/autocomplete.md) | 12 |
| Avatar | [`components/avatar.md`](./components/avatar.md) | 35 |
| Badge | [`components/badge.md`](./components/badge.md) | 25 |
| Breadcrumb | [`components/breadcrumb.md`](./components/breadcrumb.md) | 15 |
| Button | [`components/button.md`](./components/button.md) | 61 |
| Calendar | [`components/calendar.md`](./components/calendar.md) | 30 |
| Card | [`components/card.md`](./components/card.md) | 18 |
| Carousel | [`components/carousel.md`](./components/carousel.md) | 11 |
| Chart | [`components/chart.md`](./components/chart.md) | 25 |
| Checkbox | [`components/checkbox.md`](./components/checkbox.md) | 22 |
| Collapsible | [`components/collapsible.md`](./components/collapsible.md) | 10 |
| Combobox | [`components/combobox.md`](./components/combobox.md) | 20 |
| Command | [`components/command.md`](./components/command.md) | 8 |
| Dialog | [`components/dialog.md`](./components/dialog.md) | 10 |
| Drawer | [`components/drawer.md`](./components/drawer.md) | 5 |
| Empty | [`components/empty.md`](./components/empty.md) | 20 |
| Field | [`components/field.md`](./components/field.md) | 11 |
| Filters | [`components/filters.md`](./components/filters.md) | 10 |
| Frame | [`components/frame.md`](./components/frame.md) | 18 |
| Input | [`components/input.md`](./components/input.md) | 31 |
| Item | [`components/item.md`](./components/item.md) | 12 |
| Kanban | [`components/kanban.md`](./components/kanban.md) | 6 |
| Kbd | [`components/kbd.md`](./components/kbd.md) | 6 |
| Label | [`components/label.md`](./components/label.md) | 13 |
| Menubar | [`components/menubar.md`](./components/menubar.md) | 5 |
| Pagination | [`components/pagination.md`](./components/pagination.md) | 15 |
| Popover | [`components/popover.md`](./components/popover.md) | 11 |
| Progress | [`components/progress.md`](./components/progress.md) | 8 |
| Rating | [`components/rating.md`](./components/rating.md) | 9 |
| Resizable | [`components/resizable.md`](./components/resizable.md) | 10 |
| Scrollspy | [`components/scrollspy.md`](./components/scrollspy.md) | 2 |
| Select | [`components/select.md`](./components/select.md) | 33 |
| Separator | [`components/separator.md`](./components/separator.md) | 6 |
| Sheet | [`components/sheet.md`](./components/sheet.md) | 4 |
| Skeleton | [`components/skeleton.md`](./components/skeleton.md) | 10 |
| Slider | [`components/slider.md`](./components/slider.md) | 12 |
| Sonner | [`components/sonner.md`](./components/sonner.md) | 21 |
| Sortable | [`components/sortable.md`](./components/sortable.md) | 8 |
| Spinner | [`components/spinner.md`](./components/spinner.md) | 12 |
| Stepper | [`components/stepper.md`](./components/stepper.md) | 16 |
| Switch | [`components/switch.md`](./components/switch.md) | 14 |
| Table | [`components/table.md`](./components/table.md) | 17 |
| Tabs | [`components/tabs.md`](./components/tabs.md) | 9 |
| Textarea | [`components/textarea.md`](./components/textarea.md) | 6 |
| Timeline | [`components/timeline.md`](./components/timeline.md) | 13 |
| Toggle | [`components/toggle.md`](./components/toggle.md) | 14 |
| Tooltip | [`components/tooltip.md`](./components/tooltip.md) | 16 |
| Tree | [`components/tree.md`](./components/tree.md) | 8 |

## Refresh

```bash
node scripts/scrape-reui-skills.mjs --all
node scripts/scrape-reui-skills.mjs --discover
node scripts/scrape-reui-skills.mjs accordion button filters
```
