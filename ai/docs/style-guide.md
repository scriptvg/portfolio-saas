---
title: Guía de estilo UI
status: active
updated: 2026-05-19
audience: both
summary: Registro product restrained; shadcn neutral, Inter, sidebar admin, badges API mono.
---

# Guía de estilo UI

Resumen ejecutivo del look & feel. Detalle de tokens en [`../context/DESIGN.md`](../context/DESIGN.md).

## Identidad

**Admin SaaS neutro** — herramienta de trabajo, no sitio de marketing. Referentes: dashboards familiares (Notion settings, Linear, Stripe).

## Paleta y tipografía

- Neutros OKLCH, primary oscuro en light / claro en dark.
- **Inter** para toda la UI; **mono** solo en elementos de API/dev.

## Patrones visuales

| Elemento | Tratamiento |
| --- | --- |
| Sidebar | Fondo `sidebar`, borde inferior en header de marca |
| Página módulo | Título 2xl + descripción muted + fila de badges endpoint |
| Tabla | `DataTable` shadcn, acciones ghost con color semántico |
| Formularios | Labels estándar, errores `destructive`, overlay modal |
| Login | Card centrada en `bg-muted/30`, sin ilustraciones hero |

## Badges de endpoint

```tsx
// Patrón establecido — no redondear como pills genéricos
<Badge variant="outline" className="font-mono text-xs py-1 px-1 rounded-none">
```

## Dark mode

Respetar variables `.dark`; acento sidebar primary con matiz azul solo en dark (`sidebar-primary`).

## Qué no hacer

- Gradientes de fondo en dashboard.
- Tipografía display en títulos de módulo.
- Cards anidadas “card dentro de card” sin jerarquía clara.
- Cambiar a estética brutalista o editorial sin issue.

## Skills recomendadas

| Tarea | Skill |
| --- | --- |
| Nuevo módulo UI | impeccable → `craft` |
| Componente shadcn | shadcn |
| Ajuste tokens | tailwind-v4-shadcn |
| Revisión pre-merge | impeccable → `audit` |

Ver [`skills-catalog.md`](./skills-catalog.md).
