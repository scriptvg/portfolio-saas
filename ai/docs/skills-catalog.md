---
title: Catálogo de skills
status: active
updated: 2026-05-19
audience: both
summary: Skills instaladas en portfolio-saas, prioridad de uso y rutas bajo .agents/skills/.
---

# Catálogo de skills

Binarios en [`.agents/skills/`](../../.agents/skills/). Lock: [`skills-lock.json`](../../skills-lock.json).

## Prioridad por tipo de tarea

| Tarea | Skills (en orden) |
| --- | --- |
| UI dashboard / módulo | impeccable → shadcn → reui → shadcnui-blocks → tailwind-v4-shadcn |
| Formularios | react-hook-form → zod → shadcn |
| Tabla / listado | react-best-practices → composition-patterns |
| Build / env | vite |
| Accesibilidad | accessibility |
| Refinar sin cambiar registro | design-taste-frontend |

## Stack — uso frecuente

| Skill | Ruta | Cuándo |
| --- | --- | --- |
| react-hook-form | [`.agents/skills/react-hook-form/SKILL.md`](../../.agents/skills/react-hook-form/SKILL.md) | `useForm`, arrays, shadcn Form |
| zod | [`.agents/skills/zod/SKILL.md`](../../.agents/skills/zod/SKILL.md) | Schemas, `safeParse`, infer |
| composition-patterns | [`.agents/skills/composition-patterns/SKILL.md`](../../.agents/skills/composition-patterns/SKILL.md) | Tabs, compound components |
| react-best-practices | [`.agents/skills/react-best-practices/SKILL.md`](../../.agents/skills/react-best-practices/SKILL.md) | Performance, fetching |
| vite | [`.agents/skills/vite/SKILL.md`](../../.agents/skills/vite/SKILL.md) | `vite.config`, plugins |
| shadcn | [`.agents/skills/shadcn/SKILL.md`](../../.agents/skills/shadcn/SKILL.md) | Añadir/fix UI components |
| reui | [`.agents/skills/reui/SKILL.md`](../../.agents/skills/reui/SKILL.md) | Blocks ReUI (filters, kanban, data-grid, 50+ categorías) desde [reui.io](https://reui.io/components) |
| shadcnui-blocks | [`.agents/skills/shadcnui-blocks/SKILL.md`](../../.agents/skills/shadcnui-blocks/SKILL.md) | Variantes UI (accordion, alert, button, …) desde [shadcnui-blocks.com](https://www.shadcnui-blocks.com) |
| tailwind-v4-shadcn | [`.agents/skills/tailwind-v4-shadcn/SKILL.md`](../../.agents/skills/tailwind-v4-shadcn/SKILL.md) | Tokens, dark mode v4 |
| tailwind-css-patterns | [`.agents/skills/tailwind-css-patterns/SKILL.md`](../../.agents/skills/tailwind-css-patterns/SKILL.md) | Layouts responsive |
| accessibility | [`.agents/skills/accessibility/SKILL.md`](../../.agents/skills/accessibility/SKILL.md) | WCAG, a11y audit |
| typescript-advanced-types | [`.agents/skills/typescript-advanced-types/SKILL.md`](../../.agents/skills/typescript-advanced-types/SKILL.md) | Tipos complejos |

## UI / diseño

| Skill | Origen | Cuándo | Notas |
| --- | --- | --- | --- |
| impeccable | pbakaus/impeccable | Product UI, audit, polish | **Default** para este SaaS |
| design-taste-frontend | Leonxlnx/taste-skill | Jerarquía, densidad | No sustituye impeccable |
| frontend-design | anthropics/skills | UI genérica creativa | Solo si issue lo pide |
| redesign-existing-projects | taste-skill | Upgrade sin romper UX | Refactors visuales |
| high-end-visual-design | taste-skill | Look “agency” | **No** es el estilo actual |
| minimalist-ui | taste-skill | Editorial pastel | **No** es el estilo actual |
| industrial-brutalist-ui | taste-skill | Terminal / blueprint | Solo badges API afines |
| gpt-taste | taste-skill | Editorial + GSAP | Fuera de alcance dashboard |
| brandkit | taste-skill | Identidad / marketing | Para portfolio-web, no admin |
| stitch-design-taste | taste-skill | DESIGN.md systems | Referencia opcional |
| image-to-code | taste-skill | Mock → código | Con mock en issue |
| imagegen-frontend-web | taste-skill | Generar mocks web | Diseño previo |
| imagegen-frontend-mobile | taste-skill | Mocks móvil | N/A en este app |
| full-output-enforcement | taste-skill | Output completo | Tareas largas de código |

## Backend (referencia)

| Skill | Cuándo |
| --- | --- |
| nodejs-backend-patterns | Si tocas API en mismo repo |
| nodejs-best-practices | Decisiones Node |

## Instalación

```bash
cd portfolio-saas
npx skills add <owner/repo> --yes
```

Tras instalar: actualizar este catálogo y la tabla en [`../AGENTS.md`](../AGENTS.md) si cambia el flujo principal.

## Changelog

| Fecha | Cambio |
| --- | --- |
| 2026-05-19 | Skill `reui` (~737 blocks desde reui.io registry) |
| 2026-05-19 | Skill `shadcnui-blocks` (27 componentes scrapeados desde shadcnui-blocks.com) |
| 2026-05-19 | Catálogo inicial; taste-skill + impeccable en proyecto |
