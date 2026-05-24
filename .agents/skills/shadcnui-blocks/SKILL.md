---
name: shadcnui-blocks
description: >-
  Curated shadcn/ui component variants scraped from shadcnui-blocks.com registry.
  Use when implementing accordions, alerts, buttons, forms, or other UI patterns
  that match the site's customized demos. Prefer these references over inventing
  layouts from scratch. Re-scrape with node scripts/scrape-shadcnui-blocks-skills.mjs.
---

# shadcnui-blocks component skills

Reference implementations from [shadcnui-blocks.com](https://www.shadcnui-blocks.com) (registry API: `/r/{slug}-{nn}.json`).

## Project adaptation

- Imports: `@/registry/ui/*` → `@/components/ui/*`
- Place copied demos under `src/components/examples/shadcnui-blocks/` if you vendor files
- Match existing `shadcn` and `tailwind-v4-shadcn` skills for tokens and composition rules
- Run `pnpm dlx shadcn@latest add <component>` for any `registryDependencies`

## Components

| Component | Reference | Variants |
| --- | --- | --- |
| Accordion | [`components/accordion.md`](./components/accordion.md) | 12 |
| Alert | [`components/alert.md`](./components/alert.md) | 10 |
| Alert Dialog | [`components/alert-dialog.md`](./components/alert-dialog.md) | 6 |
| Avatar | [`components/avatar.md`](./components/avatar.md) | 16 |
| Badge | [`components/badge.md`](./components/badge.md) | 17 |
| Breadcrumb | [`components/breadcrumb.md`](./components/breadcrumb.md) | 15 |
| Button | [`components/button.md`](./components/button.md) | 23 |
| Card | [`components/card.md`](./components/card.md) | 8 |
| Carousel | [`components/carousel.md`](./components/carousel.md) | 11 |
| Checkbox | [`components/checkbox.md`](./components/checkbox.md) | 16 |
| Collapsible | [`components/collapsible.md`](./components/collapsible.md) | 4 |
| Dropdown Menu | [`components/dropdown-menu.md`](./components/dropdown-menu.md) | 8 |
| Input | [`components/input.md`](./components/input.md) | 12 |
| Input Otp | [`components/input-otp.md`](./components/input-otp.md) | 7 |
| Navigation Menu | [`components/navigation-menu.md`](./components/navigation-menu.md) | 8 |
| Pagination | [`components/pagination.md`](./components/pagination.md) | 15 |
| Progress | [`components/progress.md`](./components/progress.md) | 12 |
| Radio Group | [`components/radio-group.md`](./components/radio-group.md) | 9 |
| Select | [`components/select.md`](./components/select.md) | 12 |
| Separator | [`components/separator.md`](./components/separator.md) | 6 |
| Slider | [`components/slider.md`](./components/slider.md) | 15 |
| Spinner | [`components/spinner.md`](./components/spinner.md) | 11 |
| Switch | [`components/switch.md`](./components/switch.md) | 7 |
| Table | [`components/table.md`](./components/table.md) | 11 |
| Tabs | [`components/tabs.md`](./components/tabs.md) | 18 |
| Textarea | [`components/textarea.md`](./components/textarea.md) | 7 |
| Tooltip | [`components/tooltip.md`](./components/tooltip.md) | 7 |

## Refresh data

```bash
node scripts/scrape-shadcnui-blocks-skills.mjs --all
node scripts/scrape-shadcnui-blocks-skills.mjs accordion alert
```
