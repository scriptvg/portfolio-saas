
---
title: Convenciones — código y agentes
status: active
updated: 2026-05-19
audience: both
summary: Estructura de carpetas, naming, patrones CRUD y reglas para agentes en portfolio-saas.
---

# Convenciones

## Estructura `src/`

| Ruta | Contenido |
| --- | --- |
| `components/ui/` | shadcn primitivos |
| `components/page/` | `Page`, `PageHeader`, `PageContent` |
| `components/dashboard/` | Shell, sidebar, nav usuario |
| `components/modules/<entidad>/` | Header, columns, forms, cards del módulo |
| `components/shared/` | Piezas reutilizables (`ModuleHeader`, badges) |
| `pages/` | Páginas enrutadas |
| `lib/api/` | Cliente y tipos API |
| `lib/queries/` | TanStack Query hooks |
| `auth/` | Contexto y flujo de sesión |
| `router/` | Definición de rutas |

## Patrón de módulo CRUD

1. `*-page.tsx` en `pages/` — estado de diálogos, query, composición.
2. `ModuleHeader` o header específico con endpoint badges.
3. `DataTable` + `columns.tsx` o lista con `Item`.
4. Formulario: overlay/dialog + RHF + Zod.
5. Eliminar: `AlertDialog` de confirmación.

## TypeScript y API

- Tipos de fila desde `lib/api/<entidad>`.
- Mutaciones invalidan queries del módulo.
- Errores de API → toast + UI de error reutilizable si existe.

## Estilos

- Tailwind + tokens semánticos (`bg-background`, `text-muted-foreground`).
- No hardcodear colores hex salvo datos dinámicos (p. ej. color de tecnología).
- Clases utilitarias; evitar CSS ad hoc salvo `index.css` para tokens.

## Documentación AI

- Nuevos docs bajo `ai/docs/` usando [`_template.md`](./_template.md).
- Contexto de producto/diseño solo en `ai/context/`.
- No duplicar reglas de skills; enlazar a `.agents/skills/<name>/SKILL.md`.

## Commits y issues

- Implementar según issue en `roadmap/issues/`.
- No ampliar alcance fuera del issue sin acuerdo.
- Actualizar checkboxes del issue al cerrar.

## Referencias

| Recurso | Ruta |
| --- | --- |
| Agentes | [`../AGENTS.md`](../AGENTS.md) |
| Estilo visual | [`./style-guide.md`](./style-guide.md) |
| Roadmap | [`../../roadmap/AGENTS.md`](../../roadmap/AGENTS.md) |
