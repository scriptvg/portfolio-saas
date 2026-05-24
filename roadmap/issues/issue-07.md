---
id: issue-07
title: Inicio — alinear header y spacing al contrato de layout
status: todo
priority: baja
type: redesign
area: frontend-dashboard
register: product
route: /dashboard
skills:
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/impeccable/SKILL.md
  - portfolio-saas/.agents/skills/design-taste-frontend/SKILL.md
impeccable_commands:
  - audit
  - polish
---

# Issue 07 — Inicio: alinear al contrato de layout

> Depende de [`issue-04.md`](./issue-04.md). El hub de módulos (`/dashboard`) funciona bien pero diverge en header y spacing. Ajuste menor de alineación, no rediseño.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-07` |
| **Título** | Inicio: alinear header y spacing al contrato |
| **Estado** | `todo` |
| **Prioridad** | `baja` |
| **Tipo** | `redesign` |
| **Register** | `product` |
| **Área** | Frontend — Dashboard |
| **Ruta** | `/dashboard` |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`issue-04.md`](./issue-04.md) + `ai/context/PAGE-LAYOUT.md` | Contrato a aplicar |
| 3 | [`../../ai/context/DESIGN.md`](../../ai/context/DESIGN.md) | Tipografía header, Item list |

**Comandos impeccable:** `audit` → `polish`.

---

## Resumen

**Problema:** `src/pages/dashboard-home-page.tsx` usa `Page space-y-8` (vs `space-y-2` del resto, R2) y un `PageHeader` plano sin alinear del todo a la tipografía/ritmo del contrato. El contenido (`ItemGroup` de cards-enlace con count badges) es correcto y debe conservarse.

**Resultado:** Inicio respeta el ritmo vertical del contrato y el patrón de header de páginas no-CRUD, conservando el hub de módulos (cards con conteo, estados loading/error del count).

---

## Alcance

### En alcance

- [ ] Ajustar el spacing de `Page` al ritmo del contrato (R2): quitar `space-y-8` ad-hoc.
- [ ] Alinear el `PageHeader` al patrón de header no-CRUD del contrato (tipografía y ritmo).
- [ ] Verificar que las cards-enlace (`Item variant="outline"`) y los badges de conteo respetan radio del sistema y estados (loading skeleton, error badge ya presentes).
- [ ] Dark mode + foco visible al tabular por las cards-enlace.

### Fuera de alcance

- Añadir métricas/charts nuevos al hub (sería un issue aparte).
- Cambiar las queries usadas para los conteos.

---

## Estado actual en código

| Recurso | Ubicación | Nota |
| --- | --- | --- |
| Página | `src/pages/dashboard-home-page.tsx` | `Page space-y-8`; `PageHeader` plano; `ItemGroup` de 4 enlaces |
| Count indicator | `dashboard-home-page.tsx:121-146` | skeleton/error/badge — conservar |

---

## Criterios de aceptación

- [ ] Ritmo vertical de Inicio coherente con el resto (sin `space-y-8` ad-hoc).
- [ ] Header alineado al patrón no-CRUD del contrato.
- [ ] Cards-enlace y count badges con radio del sistema; estados intactos.
- [ ] `pnpm typecheck` / `pnpm test` pasan; lint de archivos tocados sin errores nuevos.
- [ ] Dark mode OK.
- [ ] Screenshot antes/después.

---

## Riesgos y decisiones

| # | Pregunta | Decisión |
| --- | --- | --- |
| 1 | ¿Mantener Inicio como lista o evolucionar a dashboard con métricas? | Mantener lista en este issue; métricas → futuro issue si se decide. |

---

## Definición de hecho

- [ ] Criterios de aceptación completos.
- [ ] `status: hecho` en frontmatter.
- [ ] Screenshot en PR.
