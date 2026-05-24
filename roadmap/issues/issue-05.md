---
id: issue-05
title: GitHub — alinear al contrato de layout (radio, header, estados)
status: todo
priority: alta
type: redesign
area: frontend-dashboard
register: product
route: /dashboard/github
skills:
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/impeccable/SKILL.md
  - portfolio-saas/.agents/skills/design-taste-frontend/SKILL.md
  - portfolio-saas/.agents/skills/shadcn/SKILL.md
  - portfolio-saas/.agents/skills/tailwind-v4-shadcn/SKILL.md
impeccable_commands:
  - audit
  - craft
  - polish
---

# Issue 05 — GitHub: alinear al contrato de layout

> Depende de [`issue-04.md`](./issue-04.md) (contrato ratificado). GitHub es la página con **mayor divergencia** visual del dashboard. Este issue la realinea al patrón sin cambiar su funcionalidad (listado, filtros, import individual y bulk).

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-05` |
| **Título** | GitHub: alinear al contrato de layout |
| **Estado** | `todo` |
| **Prioridad** | `alta` |
| **Tipo** | `redesign` |
| **Register** | `product` |
| **Área** | Frontend — Dashboard |
| **Ruta** | `/dashboard/github` |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`issue-04.md`](./issue-04.md) + `ai/context/PAGE-LAYOUT.md` | Contrato a aplicar |
| 3 | [`../../ai/context/DESIGN.md`](../../ai/context/DESIGN.md) | Radio, badges, estados |
| 4 | [`../../.agents/skills/design-taste-frontend/SKILL.md`](../../.agents/skills/design-taste-frontend/SKILL.md) | Refinar densidad sin cambiar registro |

**Comandos impeccable:** `audit` → `craft` → `polish`.

---

## Resumen

> **Corrección 2026-05-24:** el lenguaje del SaaS es **cuadrado** (`rounded-none`), no redondeado. El `rounded-none` de GitHub es **correcto** y NO se toca. La primera versión de este issue pedía "redondear" por error de `DESIGN.md`; ya corregido (ver `PAGE-LAYOUT.md` R4).

**Problema:** `src/pages/github-page.tsx` rompe el contrato en estos frentes (el radio NO es uno de ellos):

1. **Sin `ModuleHeader`** pese a ser módulo de API: header custom con avatar suelto y sin endpoint badges (R3). Ahora `ModuleHeader` acepta `mediaSlot` + `onCreate` opcionales (issue-04) → el avatar va en `mediaSlot`.
2. **Skeletons inline a mano** en `ReposList` en vez del patrón compartido (R5).
3. **Cards bespoke** con barra de acento lateral, `bg-card/70`, `hover:shadow-md` — tratamiento de elevación/borde que no aparece en ninguna otra superficie (revisar coherencia, **manteniendo `rounded-none`**).
4. Badges con `font-mono` decorativo y `text-[10px]` ad-hoc (R6) — revisar tipografía/tamaño, no el radio.

**Resultado:** GitHub usa el header de módulo del contrato (con avatar en `mediaSlot`), estados compartidos y un tratamiento de borde/elevación coherente con el resto **conservando el lenguaje cuadrado**, y mantiene: búsqueda, filtros (visibilidad, sort, lenguaje, forks/archived/no-enlazados), selección múltiple e import bulk.

---

## Alcance

### En alcance

- [ ] Header: adoptar `ModuleHeader` con título, descripción, endpoint badges del módulo GitHub y el avatar/perfil en `mediaSlot` (prop añadida en issue-04). Sin `onCreate` (no hay creación).
- [ ] **Mantener `rounded-none`** en cards, badges y skeletons (es el lenguaje correcto, R4). NO redondear.
- [ ] Reemplazar skeletons inline por skeleton coherente con el resto (mantienen `rounded-none`).
- [ ] Revisar el tratamiento bespoke de las cards (barra de acento lateral, `bg-card/70`, `hover:shadow-md`): alinear borde/elevación al resto **sin** cambiar el radio; conservar la barra de acento solo si se justifica como patrón reutilizable.
- [ ] Estados empty/error vía `Empty` + `ModuleError` (ya usa `ModuleError`; unificar el empty con el resto).
- [ ] Badges de meta (lenguaje, stars, forks, push) con `Badge variant="outline"` cuadrado; `font-mono` solo en valores numéricos/técnicos; revisar el `text-[10px]` ad-hoc.
- [ ] Conservar accesibilidad existente (cards seleccionables con `role`/`aria-pressed`/teclado).

### Fuera de alcance

- Cambiar la lógica de import (individual o bulk) o las queries `useGithubReposQuery`/`useImportGithubRepoMutation`.
- Estado "no conectado" → solo alinear estilos, no el flujo.
- Tocar `components/ui/` salvo necesidad; si se toca, regla del espejo con web.

---

## Estado actual en código

| Recurso | Ubicación | Nota |
| --- | --- | --- |
| Página | `src/pages/github-page.tsx` | header custom, filtros inline, `ReposList` interno |
| Cards de repo | `github-page.tsx:480-641` | `rounded-none`, barra de acento, `bg-card/70` |
| Skeletons | `github-page.tsx:389-409` | inline, `rounded-none` |
| Dialog import | `src/components/github/github-import-repo-dialog.tsx` | no se toca su lógica |

---

## Criterios de aceptación

- [ ] Header de GitHub usa `ModuleHeader` con avatar en `mediaSlot` (no header ad-hoc).
- [ ] Se mantiene el lenguaje cuadrado (`rounded-none`); no se introduce ningún `rounded-*`.
- [ ] Estados loading/empty/error coherentes con el resto del dashboard.
- [ ] Funcionalidad intacta: búsqueda, los 3 selects, los 3 checkboxes, selección múltiple, import individual y bulk.
- [ ] Accesibilidad de selección preservada (teclado + `aria-pressed`).
- [ ] `pnpm typecheck` / `pnpm lint` (de los archivos tocados) / `pnpm test` pasan.
- [ ] Dark mode revisado.
- [ ] Screenshots antes/después en el PR.

---

## Riesgos y decisiones

| # | Pregunta | Decisión |
| --- | --- | --- |
| 1 | ¿Migrar lista de repos a `DataTable` o mantener cards? | **Mantener cards** (cuadradas, R4), solo alineando borde/elevación. Menos disruptivo y conserva la riqueza por-repo. Migrar a DataTable queda como opción futura si se quiere más densidad. |
| 2 | ¿Mostrar endpoint badges de GitHub? | Según contrato (R3); confirmar qué endpoints exponer (p. ej. `/github/...`). |

---

## Definición de hecho

- [ ] Criterios de aceptación completos.
- [ ] Sin regresión funcional (smoke de filtros + import).
- [ ] `status: hecho` en frontmatter.
- [ ] Screenshots en PR (light + dark).
