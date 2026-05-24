---
id: issue-04
title: Contrato de layout de página — patrón visual único del dashboard
status: todo
priority: alta
type: redesign
area: frontend-dashboard
register: product
route: "(transversal — todas las páginas de /dashboard)"
skills:
  - portfolio-saas/ai/context/PRODUCT.md
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/impeccable/SKILL.md
  - portfolio-saas/.agents/skills/design-taste-frontend/SKILL.md
  - portfolio-saas/.agents/skills/composition-patterns/SKILL.md
  - portfolio-saas/.agents/skills/tailwind-v4-shadcn/SKILL.md
impeccable_commands:
  - shape
  - craft
  - audit
---

# Issue 04 — Contrato de layout de página (fundacional)

> **Fundacional.** Este issue NO redibuja ninguna página: define el **contrato de layout** que el resto de páginas debe seguir, y crea/ajusta las primitivas compartidas (`Page`, `PageHeader`, `ModuleHeader`) para que ese contrato sea fácil de cumplir. Los issues [`issue-05`](./issue-05.md) (GitHub), [`issue-06`](./issue-06.md) (Workspace), [`issue-07`](./issue-07.md) (Inicio) e [`issue-08`](./issue-08.md) (Settings shell + audit CRUD) **dependen de este** y se alinean a él.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-04` |
| **Título** | Contrato de layout de página — patrón visual único |
| **Estado** | `todo` |
| **Prioridad** | `alta` (bloquea 05–08) |
| **Tipo** | `redesign` (foundation) |
| **Register** | `product` |
| **Área** | Frontend — Dashboard (transversal) |
| **Ruta** | Todas las de `/dashboard` |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

**Leer antes de implementar** (en orden):

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`../../ai/context/DESIGN.md`](../../ai/context/DESIGN.md) | Tokens, tipografía, radio/elevación, layout |
| 3 | [`../../ai/context/PRODUCT.md`](../../ai/context/PRODUCT.md) | Principios: consistencia, densidad, estados completos |
| 4 | [`../../.agents/skills/impeccable/reference/product.md`](../../.agents/skills/impeccable/reference/product.md) | Register product |
| 5 | `../../docs/learnings.md` | Regla del espejo antes de tocar `components/ui/` |

---

## Resumen

**Problema:** No existe un contrato de layout de página escrito. Los 3 módulos CRUD (Tecnologías, Proyectos, Experiencias) comparten un patrón sólido vía `ModuleHeader` + `DataTable`, pero Inicio, GitHub y Settings/Workspace improvisan headers, spacing, estilo de cards y jerarquía de títulos. `DESIGN.md` cubre tokens pero no la **anatomía obligatoria** de una página.

**Resultado:** Un documento de contrato (`ai/context/PAGE-LAYOUT.md`) + primitivas compartidas alineadas, de modo que cualquier página nueva o existente tenga una única forma correcta de construirse. Cero cambios visuales de regresión en las páginas que ya cumplen (CRUD).

---

## El contrato (propuesta a ratificar)

### 1. Anatomía obligatoria

```
<Page>                              ← contenedor de página; ritmo vertical único
  ├── <ModuleHeader …/>  o  <PageHeader>…</PageHeader>   ← zona header (exactamente UN <h1>)
  └── <PageContent>…</PageContent>                        ← zona de contenido
</Page>
```

### 2. Reglas

| # | Regla | Estado hoy |
| --- | --- | --- |
| R1 | **Un solo `<h1>` por página.** Sub-secciones usan `<h2>`/`<h3>`. | ❌ Settings: h1 "Configuración" + h2 por tab (duplica jerarquía) |
| R2 | **Ritmo vertical único** entre header y contenido. Base: `Page` sin spacing propio arbitrario; el ritmo lo aportan `PageHeader`/`PageContent`. Eliminar la divergencia `space-y-2` (CRUD) vs `space-y-8` (Inicio). | ❌ Inicio usa `space-y-8`, CRUD `space-y-2` |
| R3 | **Header según tipo:** módulos respaldados por API (CRUD, GitHub) → `ModuleHeader` (con endpoint badges). Páginas no-CRUD (Inicio) → `PageHeader` con la misma tipografía (`text-2xl font-semibold tracking-tight` + `text-sm text-muted-foreground`). | ❌ GitHub no usa `ModuleHeader` pese a ser módulo API |
| R4 | **Radio del sistema.** Cards/listas/badges de datos respetan `--radius` (`rounded-lg`/`rounded-xl`). **Prohibido `rounded-none`** en superficies de contenido. Excepción documentada: `EndpointBadge` (rounded-none mono por diseño). | ❌ GitHub abusa de `rounded-none` |
| R5 | **Cuatro estados obligatorios:** loading (skeleton), empty (`Empty`), error (`ModuleError`), success. Reutilizar `DataTable`/`Empty`/`ModuleError`, no skeletons a mano salvo justificación. | ⚠️ GitHub usa skeletons inline propios |
| R6 | **Badges de datos:** `Badge variant="outline"` con radio del sistema; `font-mono` solo en valores técnicos (counts, lenguajes, fechas técnicas). | ⚠️ GitHub mezcla `rounded-none` + mono en badges decorativos |
| R7 | **Tabs de Settings:** default `layout="stack"` en `SettingsItemSection`; `layout="split"` solo para bloques con descripción larga + control compacto, aplicado de forma **consistente** (no mezclar split/stack arbitrariamente dentro de la misma tab). | ❌ Workspace mezcla split (Identidad, Publicación) y stack (Enlaces, SEO) |

### 3. Primitivas a alinear (sin romper API actual)

- `src/components/page.tsx` — `Page`, `PageHeader`, `PageContent`. Hoy `Page` es un `div` neutro; el spacing lo ponen los consumidores ad-hoc. Definir el ritmo aquí y documentar.
- `src/components/shared/module.tsx` — `ModuleHeader`. Confirmar que sirve para GitHub (avatar/acción secundaria) sin forzar el CTA "crear".

---

## Alcance

### En alcance

- [ ] Crear `src/../ai/context/PAGE-LAYOUT.md` con el contrato ratificado (anatomía + R1–R7 + ejemplos).
- [ ] Documentar el ritmo vertical en `Page`/`PageContent` (`src/components/page.tsx`) y, si procede, fijarlo en la primitiva en vez de en cada consumidor — **sin** regresión visual en CRUD.
- [ ] Evaluar `ModuleHeader` para soportar un slot de acción/medios opcional (avatar GitHub) y CTA opcional, manteniendo retro-compatibilidad con las 3 páginas CRUD.
- [ ] Añadir nota cruzada en `ai/context/DESIGN.md` apuntando a `PAGE-LAYOUT.md` como contrato de layout.
- [ ] No tocar visualmente las páginas que ya cumplen (CRUD): solo refactor invisible si la primitiva cambia.

### Fuera de alcance

- Redibujar GitHub / Workspace / Inicio / Settings shell → issues 05–08.
- Cambios de tokens en `src/index.css` (el contrato usa los existentes).
- Nuevos componentes `components/ui/` (si se necesitara alguno, aplicar regla del espejo y documentarlo).

---

## Estado actual en código

| Recurso | Ubicación | Nota |
| --- | --- | --- |
| Primitivas de página | `src/components/page.tsx` | `Page` div neutro; `PageHeader` `space-y-1 p-4 md:p-6`; `PageContent` `space-y-2 px-4` |
| Header de módulo | `src/components/shared/module.tsx` | `ModuleHeader` con endpoint+JWT badges y CTA obligatorio |
| Patrón canónico (referencia) | `src/pages/technologies-page.tsx`, `projects-page.tsx`, `experiences-page.tsx` | `Page space-y-2` → `ModuleHeader` → `PageContent` → `DataTable` |
| Tokens / radio | `src/index.css` | `--radius: 0.625rem` |

---

## Criterios de aceptación

- [ ] `ai/context/PAGE-LAYOUT.md` existe y describe anatomía + R1–R7 con ejemplos de código.
- [ ] `DESIGN.md` enlaza a `PAGE-LAYOUT.md`.
- [ ] Las 3 páginas CRUD se ven **idénticas** antes/después (sin regresión visual).
- [ ] `pnpm typecheck` pasa.
- [ ] `pnpm test` pasa.
- [ ] Si se tocó `Page`/`ModuleHeader`, los consumidores compilan sin cambios de API rotos.

---

## Riesgos y decisiones

| # | Pregunta | Decisión propuesta (ratificar) |
| --- | --- | --- |
| 1 | ¿Ritmo vertical base? | Estandarizar en torno al patrón CRUD (`space-y-2` en `Page` + ritmo interno de `PageContent`). Inicio baja de `space-y-8`. |
| 2 | ¿`ModuleHeader` para GitHub? | Sí, con slot de medios/acción opcional y CTA opcional. Alternativa: header plano alineado. Decidir en issue-05. |
| 3 | ¿Quitar h2 redundante en tabs de Settings? | Sí: el shell mantiene un único `<h1>`; las tabs no repiten encabezado. Detalle en issue-08. |
| 4 | ¿Split vs stack default en Settings? | Default `stack`; `split` solo consistente por tab. Detalle en issue-06. |

---

## Definición de hecho

- [ ] Contrato documentado y enlazado desde `DESIGN.md`.
- [ ] Primitivas alineadas sin regresión en CRUD.
- [ ] `status: hecho` en frontmatter.
- [ ] Issues 05–08 pueden referenciar `PAGE-LAYOUT.md` como fuente de verdad.
