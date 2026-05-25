---
id: issue-09
title: Cuadrar radios sueltos — alinear app al lenguaje squared (R4)
status: hecho
priority: media
type: refactor
area: frontend-dashboard
register: product
route: "(transversal)"
skills:
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/tailwind-v4-shadcn/SKILL.md
  - portfolio-saas/.agents/skills/design-taste-frontend/SKILL.md
impeccable_commands:
  - audit
  - polish
---

# Issue 09 — Cuadrar radios sueltos (lenguaje squared)

> Detectado al ratificar el contrato ([`issue-04.md`](./issue-04.md)). El lenguaje del SaaS es **cuadrado** (`rounded-none`), pero hay `rounded-sm/md/lg/xl/2xl` sueltos en la capa de app que rompen la consistencia (regla **R4** de `PAGE-LAYOUT.md`). Este issue los cuadra. Es independiente de los issues de redibujo de página (05–08) pero comparte criterio.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-09` |
| **Título** | Cuadrar radios sueltos — alinear app al lenguaje squared |
| **Estado** | `hecho` |
| **Prioridad** | `media` |
| **Tipo** | `refactor` |
| **Register** | `product` |
| **Área** | Frontend — Dashboard (transversal) |
| **Ruta** | Transversal |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`issue-04.md`](./issue-04.md) + `ai/context/PAGE-LAYOUT.md` §R4 | Regla de radio |
| 3 | `../../docs/learnings.md` | Regla del espejo si se tocara `components/ui/` |

---

## Resumen

**Problema:** `components/ui/` es consistentemente cuadrado (121 `rounded-none` vs 16 `rounded-*`, todos `rounded-full` legítimos), pero la capa de app introduce `rounded-sm/md/lg/xl/2xl` en superficies rectangulares, rompiendo el lenguaje (R4).

**Resultado:** Cero `rounded-{sm,md,lg,xl,2xl}` en superficies rectangulares de la app. Se conserva `rounded-full` en elementos circulares (avatares, puntos, thumbs).

---

## Alcance

### En alcance — cuadrar estos `rounded-*` (snapshot 2026-05-24; reverificar antes de tocar)

- [ ] `src/pages/auth/index.tsx:75` (`rounded-xl`), `:190` (`rounded-2xl`)
- [ ] `src/features/app/components/nav-user.tsx:130,161,163` (`rounded-lg`)
- [ ] `src/features/settings/components/integration-card.tsx:28,33` (`rounded-md`)
- [ ] `src/features/settings/components/oauth-provider-row.tsx:38` (`rounded-lg`), `:40` (`rounded-md`)
- [ ] `src/features/settings/components/settings-save-bar.tsx:32` (`rounded-md`)
- [ ] `src/features/settings/components/theme-selector.tsx:37,89,141` (`rounded-md/lg`), `:48,54` (`rounded-sm`) — **conservar** los `rounded-full` de los swatches de tema
- [ ] `src/features/settings/components/webhook-deliveries-dialog.tsx:99` (`rounded-md`)
- [ ] `src/features/settings/components/webhook-form-dialog.tsx:179,285` (`rounded-md`)
- [ ] `src/components/modules/projects/columns.tsx:91,96` (`rounded-md`) — **conservar** `:172` `rounded-full`
- [ ] `src/components/modules/projects/project-dialog.tsx:294,297` (`rounded-md`)
- [ ] `src/components/modules/projects/project-row-details.tsx:45` (`rounded-lg`)

### Conservar (NO tocar — circulares legítimos)

- `rounded-full` en `avatar.tsx`, `dot.tsx`, `radio-group.tsx`, `switch.tsx`, `time-line.tsx`, swatches de `theme-selector.tsx`, avatares de `columns.tsx`, `experience/columns.tsx:146`.

### Fuera de alcance

- Cambiar primitivos de `components/ui/` (ya están cuadrados). Si algún caso lo exigiera, aplicar regla del espejo con `portfolio-web` y documentarlo.
- Redibujo de páginas (05–08).

---

## Criterios de aceptación

- [ ] `grep -rE "rounded-(sm|md|lg|xl|2xl|3xl|4xl)" src/pages src/features src/components/modules src/components/shared` solo devuelve `rounded-full` (o nada).
- [ ] `rounded-full` de elementos circulares intacto.
- [ ] Sin regresión visual más allá del cuadrado intencional.
- [ ] `pnpm typecheck` / `pnpm test` pasan; lint de archivos tocados sin errores nuevos.
- [ ] Dark mode revisado en avatares/cards afectados.

---

## Definición de hecho

- [ ] Criterios de aceptación completos.
- [ ] `status: hecho` en frontmatter.
- [ ] Screenshots de superficies afectadas si el cambio es perceptible.
