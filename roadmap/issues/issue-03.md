---
id: issue-03
title: Limpieza de errores de lint repo-wide (react-hooks + no-explicit-any)
status: todo
priority: media
type: refactor
area: frontend
register: product
route: ""
skills:
  - portfolio-saas/.agents/skills/react-best-practices/SKILL.md
impeccable_commands: []
---

# Issue 03 — Limpieza de errores de lint repo-wide

> Detectado al cerrar [`issue-02.md`](./issue-02.md). `pnpm lint` no pasa en la baseline del repo: 12 errores repartidos por varias áreas, **ninguno introducido por issue-02**. Este issue los limpia para devolver el repo a `lint` verde. El drift de **formato** (74 archivos) es un problema distinto y se aborda en `TICKET-013` (prettier global), no aquí.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-03` |
| **Título** | Limpieza de errores de lint repo-wide |
| **Estado** | `todo` |
| **Prioridad** | `media` |
| **Tipo** | `refactor` |
| **Área** | Frontend — cross |
| **Ruta** | n/a (transversal) |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

**Leer antes de implementar** (en orden):

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`../../ai/AGENTS.md`](../../ai/AGENTS.md) | Jerarquía de contexto |
| 3 | [`../../.agents/skills/react-best-practices/SKILL.md`](../../.agents/skills/react-best-practices/SKILL.md) | Patrón correcto para `set-state-in-effect` |
| 4 | `../../docs/learnings.md` | Antes de tocar `components/ui/` (regla del espejo) |

---

## Resumen

**Problema:** `pnpm lint` falla con 12 errores en la baseline del repo. Se mezclan tres reglas:

1. `react-hooks/set-state-in-effect` — `setState` síncrono dentro de un `useEffect`, que puede causar renders en cascada. Es el grueso.
2. `@typescript-eslint/no-explicit-any` — `any` explícito en `data-table.tsx`.
3. `react-hooks` "Cannot create components during render" — componente creado durante el render en `technology-icon.tsx`.

**Resultado:** `pnpm lint` pasa en verde sin silenciar reglas (salvo justificación inline documentada). Cada fix preserva el comportamiento observable (especialmente la detección de _dirty_ en forms y la sincronización de drafts).

---

## Alcance

### En alcance

Errores a resolver (snapshot 2026-05-24 — reverificar con `pnpm lint` antes de empezar):

- [ ] `src/auth/auth-context.tsx:38` — `set-state-in-effect`
- [ ] `src/components/dashboard/sidebar-collapsible-menu.tsx:46` — `set-state-in-effect`
- [ ] `src/components/github/github-import-repo-dialog.tsx:88` — `set-state-in-effect`
- [ ] `src/components/modules/projects/project-dialog.tsx:104` — `set-state-in-effect`
- [ ] `src/components/modules/technologies/technology-icon.tsx:22,27` — "Cannot create components during render"
- [ ] `src/components/ui/carousel.tsx:96` — `set-state-in-effect` ⚠️ **espejo con web**
- [ ] `src/components/ui/data-table.tsx:83` — `no-explicit-any` (×2) ⚠️ **espejo con web**
- [ ] `src/features/settings/components/edit-profile-dialog.tsx:39` — `set-state-in-effect`
- [ ] `src/features/settings/components/webhook-form-dialog.tsx:64` — `set-state-in-effect`
- [ ] `src/features/settings/pages/workspace.tsx:63` — `set-state-in-effect` ⚠️ no regresionar detección de _dirty_
- [ ] `src/hooks/use-mobile.ts:14` — `set-state-in-effect`
- [ ] `src/pages/oauth-callback-page.tsx:17` — `set-state-in-effect`

### Fuera de alcance

- Drift de formato (prettier, 74 archivos) → `TICKET-013`.
- Warnings de `react-refresh/only-export-components` en `src/router/index.tsx` (no son errores; mover los lazy loaders a archivo aparte es refactor opcional separado).
- Cualquier cambio funcional no necesario para resolver el lint.

---

## Riesgos y decisiones

| # | Pregunta | Decisión |
| --- | --- | --- |
| 1 | ¿Silenciar reglas con `eslint-disable`? | Solo como último recurso y con comentario justificando el porqué (regla de `../../CLAUDE.md`). Preferir el fix correcto. |
| 2 | ¿Tocar `components/ui/` (carousel, data-table)? | Sí, pero aplicando la **regla del espejo**: replicar el fix idéntico en `portfolio-web/components/ui/`. El reviewer marca `❌` si solo se toca uno. |
| 3 | ¿Riesgo en `workspace.tsx`? | Alto: el effect alimenta la detección de _dirty_ del save bar. Verificar manualmente que dirty/save siguen funcionando tras el fix. |

---

## Criterios de aceptación

- [ ] `pnpm lint` pasa sin errores (warnings aceptables si documentados)
- [ ] `pnpm typecheck` sigue pasando
- [ ] `pnpm test` sigue pasando
- [ ] Sin `eslint-disable` nuevos salvo con comentario justificando
- [ ] Cambios en `components/ui/` replicados en `portfolio-web` (regla del espejo)
- [ ] Smoke: forms con detección de _dirty_ (Workspace, dialogs) siguen funcionando

---

## Definición de hecho

- [ ] Checklist de aceptación completo
- [ ] `pnpm lint` verde
- [ ] `status: hecho` en el frontmatter
- [ ] Cambios de `components/ui/` espejados en web
