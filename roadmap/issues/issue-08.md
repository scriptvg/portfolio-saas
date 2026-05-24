---
id: issue-08
title: Settings shell (jerarquía h1/h2) + audit de consistencia CRUD
status: todo
priority: media
type: redesign
area: frontend-dashboard
register: product
route: /dashboard/settings
skills:
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/composition-patterns/SKILL.md
  - portfolio-saas/.agents/skills/accessibility/SKILL.md
  - portfolio-saas/.agents/skills/impeccable/SKILL.md
impeccable_commands:
  - audit
  - polish
---

# Issue 08 — Settings shell + audit de consistencia CRUD

> Depende de [`issue-04.md`](./issue-04.md). Dos objetivos: (1) corregir la jerarquía de títulos duplicada del shell de Settings (R1), y (2) auditar que los 3 módulos CRUD siguen siendo la línea base del contrato y dejarlos como referencia explícita.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-08` |
| **Título** | Settings shell + audit de consistencia CRUD |
| **Estado** | `todo` |
| **Prioridad** | `media` |
| **Tipo** | `redesign` |
| **Register** | `product` |
| **Área** | Frontend — Dashboard |
| **Ruta** | `/dashboard/settings/*` + módulos CRUD |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`issue-04.md`](./issue-04.md) §R1 + `ai/context/PAGE-LAYOUT.md` | Jerarquía de títulos |
| 3 | [`../../.agents/skills/accessibility/SKILL.md`](../../.agents/skills/accessibility/SKILL.md) | Estructura de headings, foco |

**Comandos impeccable:** `audit` → `polish`.

---

## Resumen

**Problema (shell):** `src/features/settings/layout/index.tsx` renderiza un `<h1>` "Configuración" (`:24`) **y además** un `<h2>` por tab (`:56`) con su descripción, duplicando jerarquía y descripción para el usuario. Viola R1 (un encabezado claro por superficie).

**Problema (CRUD):** Las 3 páginas CRUD son la línea base correcta, pero no están marcadas como tal en ningún sitio; conviene un audit ligero que confirme que no han divergido y enlazarlas desde el contrato como referencia.

**Resultado:** Settings shell con jerarquía de títulos limpia (un encabezado dominante, sin h1+h2 redundante). Audit CRUD documentado: confirmación de que Tecnologías/Proyectos/Experiencias cumplen el contrato, con fixes menores si alguno se hubiera desviado.

---

## Alcance

### En alcance — Settings shell

- [ ] Resolver la duplicación h1/h2 con la **opción "Tab como h1" (ratificada por el usuario)**: degradar "Configuración" a un _eyebrow_/contexto (p. ej. `Configuración ›` como label pequeño), y promover el título de la tab activa a `<h1>` único de la superficie. Cada tab se siente como su propia página.
  - `layout/index.tsx:24` — "Configuración" deja de ser `<h1>` y pasa a eyebrow (texto pequeño, p. ej. `text-xs text-muted-foreground` o breadcrumb).
  - `layout/index.tsx:56` — el `{active.label}` por tab pasa de `<h2>` a `<h1 className="text-2xl font-semibold tracking-tight">`, y su descripción queda debajo.
- [ ] Verificar que el header sticky y el `ScrollArea` de tabs siguen funcionando tras el cambio.
- [ ] Foco visible al tabular por las 6 tabs (no regresionar la a11y de issue-02).
- [ ] Confirmar que sigue habiendo **exactamente un `<h1>`** por superficie (R1).

### En alcance — Audit CRUD

- [ ] Revisar `technologies-page.tsx`, `projects-page.tsx`, `experiences-page.tsx` contra el contrato (R1–R6).
- [ ] Fixes menores solo si hay divergencia real (no rediseñar).
- [ ] Enlazar las 3 páginas desde `ai/context/PAGE-LAYOUT.md` como referencia canónica.

### Fuera de alcance

- Cambiar la navegación de tabs o las rutas (issue-02 ya las dejó).
- Lógica de las páginas CRUD (queries, dialogs, columnas).

---

## Estado actual en código

| Recurso | Ubicación | Nota |
| --- | --- | --- |
| Shell Settings | `src/features/settings/layout/index.tsx` | h1 `:24` + h2 por tab `:56` (duplicado) |
| Tab defs | `src/features/settings/utils/settings-tabs.ts` | label + description por tab |
| CRUD (línea base) | `src/pages/{technologies,projects,experiences}-page.tsx` | patrón canónico |

---

## Criterios de aceptación

- [ ] Settings shell sin duplicación de encabezado (R1).
- [ ] Header sticky + tabs scrollables siguen OK; foco visible preservado.
- [ ] Audit CRUD documentado en el PR (cumplen / fixes aplicados).
- [ ] `PAGE-LAYOUT.md` enlaza las 3 páginas CRUD como referencia.
- [ ] `pnpm typecheck` / `pnpm test` pasan; lint de archivos tocados sin errores nuevos.
- [ ] Dark mode + a11y revisados.
- [ ] Screenshots de Settings (light + dark) en el PR.

---

## Riesgos y decisiones

| # | Pregunta | Decisión |
| --- | --- | --- |
| 1 | ¿Cómo resolver h1/h2? | **Ratificado (usuario, 2026-05-24): opción "Tab como h1".** "Configuración" → eyebrow/contexto; título de la tab activa → `<h1>` único. |
| 2 | ¿Tocar CRUD? | Solo si hay divergencia real; por defecto son la referencia. |

---

## Definición de hecho

- [ ] Criterios de aceptación completos.
- [ ] `status: hecho` en frontmatter.
- [ ] Screenshots en PR.
