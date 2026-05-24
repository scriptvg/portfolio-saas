---
title: Instrucciones para agentes — portfolio-saas
status: active
updated: 2026-05-19
audience: agents
summary: Flujo de trabajo, jerarquía de contexto, skills y convenciones del admin React (Vite).
---

# portfolio-saas — agentes

App React (Vite) del monorepo `portfolio`. **Todo el contexto AI vive bajo `ai/`** — empieza por [`README.md`](./README.md).

## Antes de implementar

1. Leer el issue en [`../roadmap/issues/`](../roadmap/issues/) (estado, alcance, DoD).
2. Cargar [`context/PRODUCT.md`](./context/PRODUCT.md) y [`context/DESIGN.md`](./context/DESIGN.md) en tareas de UI.
3. Usar solo las skills indicadas en el issue o en [`docs/skills-catalog.md`](./docs/skills-catalog.md).

## Jerarquía de contexto

| Prioridad | Fuente | Uso |
| --- | --- | --- |
| 1 | `roadmap/issues/issue-XX.md` | Alcance, rutas, APIs, criterios de aceptación |
| 2 | `ai/context/PRODUCT.md`, `DESIGN.md` | Registro product, tono, tokens |
| 3 | `ai/docs/conventions.md`, `style-guide.md` | Código y UI del proyecto |
| 4 | `.agents/skills/*` | Reglas de stack y diseño (RHF, Zod, shadcn, impeccable, …) |
| 5 | `roadmap/issues/references/` | Capturas y mocks |

## Roadmap

| Recurso | Ruta |
| --- | --- |
| Instrucciones roadmap | [`../roadmap/AGENTS.md`](../roadmap/AGENTS.md) |
| Issues | [`../roadmap/issues/`](../roadmap/issues/) |
| Plantilla | [`../roadmap/issues/_template.md`](../roadmap/issues/_template.md) |

## Skills — stack (prioridad alta)

| Skill | Ruta | Cuándo |
| --- | --- | --- |
| react-hook-form | [`.agents/skills/react-hook-form/SKILL.md`](../.agents/skills/react-hook-form/SKILL.md) | Formularios, shadcn Form |
| zod | [`.agents/skills/zod/SKILL.md`](../.agents/skills/zod/SKILL.md) | Schemas, validación |
| composition-patterns | [`.agents/skills/composition-patterns/SKILL.md`](../.agents/skills/composition-patterns/SKILL.md) | Tabs, compound components |
| react-best-practices | [`.agents/skills/react-best-practices/SKILL.md`](../.agents/skills/react-best-practices/SKILL.md) | Rendimiento, data fetching |
| vite | [`.agents/skills/vite/SKILL.md`](../.agents/skills/vite/SKILL.md) | Config, build, env |
| shadcn | [`.agents/skills/shadcn/SKILL.md`](../.agents/skills/shadcn/SKILL.md) | Componentes UI |
| tailwind-v4-shadcn | [`.agents/skills/tailwind-v4-shadcn/SKILL.md`](../.agents/skills/tailwind-v4-shadcn/SKILL.md) | Tokens, dark mode |

## Skills — UI producto

| Skill | Ruta | Cuándo |
| --- | --- | --- |
| impeccable | [`.agents/skills/impeccable/SKILL.md`](../.agents/skills/impeccable/SKILL.md) | Dashboard, settings, tablas, polish, audit |
| design-taste-frontend | [`.agents/skills/design-taste-frontend/SKILL.md`](../.agents/skills/design-taste-frontend/SKILL.md) | Refinar jerarquía sin cambiar registro |
| accessibility | [`.agents/skills/accessibility/SKILL.md`](../.agents/skills/accessibility/SKILL.md) | WCAG, teclado, screen readers |

Catálogo completo: [`docs/skills-catalog.md`](./docs/skills-catalog.md).

### impeccable — registro product

- Cargar contexto: `IMPECCABLE_CONTEXT_DIR=ai/context` o archivos en `ai/context/`.
- Register: **product** → [`.agents/skills/impeccable/reference/product.md`](../.agents/skills/impeccable/reference/product.md).
- No aplicar estilos de marketing (brandkit, gpt-taste, industrial-brutalist) salvo issue explícito.

## Convenciones de código

Ver [`docs/conventions.md`](./docs/conventions.md). Resumen:

- UI shadcn: `src/components/ui/`
- Páginas / layout: `src/components/page`, `src/components/dashboard/`
- Módulos CRUD: `src/components/modules/<entidad>/`
- Rutas: `src/router/index.tsx`
- Auth / API: `src/auth/`, `src/lib/api/`
- Copy de usuario en **español**, salvo que el issue indique otro idioma

## Issues de formularios

1. react-hook-form + zod (skills arriba).
2. Referencias shadcn: `react-hook-form/references/integ-shadcn-form-import.md`, `integ-shadcn-select-wiring.md`.
3. composition-patterns si hay tabs o `SettingsLayout`.

## Flujo

```
issue → ai/context (si UI) → skills del issue → src/ → checklist issue → PR
```
