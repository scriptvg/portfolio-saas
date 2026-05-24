---
title: Diseño — portfolio-saas
status: active
updated: 2026-05-19
audience: agents
summary: Tokens y patrones visuales; shadcn radix-lyra neutral, Inter + JetBrains Mono headings, register product restrained.
---

# DESIGN — portfolio-saas

## Sistema base

| Aspecto     | Valor                                                                                  |
| ----------- | -------------------------------------------------------------------------------------- |
| UI kit      | shadcn/ui, preset **radix-lyra**                                                       |
| Base color  | **neutral** (`components.json`)                                                        |
| Tokens      | CSS variables OKLCH en `src/index.css`                                                 |
| Iconos UI   | Phosphor (`@phosphor-icons/react` en `components/ui/`); app puede seguir usando Lucide |
| Modo oscuro | Clase `.dark` en root                                                                  |

## Tipografía

- **Sans:** Inter Variable (`@fontsource-variable/inter`) — cuerpo UI.
- **Mono / headings:** JetBrains Mono Variable (`@fontsource-variable/jetbrains-mono`) — `--font-heading` en Lyra.
- Títulos de módulo: `text-2xl font-semibold tracking-tight`.
- Descripciones: `text-sm text-muted-foreground`.
- **Mono** solo en badges técnicos (endpoints, códigos de color, API URL en login): `font-mono text-xs`.

## Color

- Paleta **neutra restrained** — primary casi achromático; sin acento de marca saturado global.
- Semánticos: `destructive`, estados hover en acciones (verde editar, rojo eliminar en ghost buttons).
- Sidebar: capa `bg-sidebar` distinta del contenido; borde `border-sidebar-border`.
- Charts: escala de grises en tokens `--chart-*`.

## Radio y elevación

- **Lenguaje cuadrado (squared).** Todas las superficies rectangulares (cards, badges, inputs, dialogs, botones, listas) usan `rounded-none`. Los primitivos de `components/ui/` ya están sobreescritos a `rounded-none`.
- `rounded-full` permitido **solo** en elementos circulares (avatares, puntos, thumbs de switch/radio).
- Los tokens `--radius: 0.625rem` (+ escala `sm`–`4xl`) existen en `index.css` heredados del preset shadcn, pero **están anulados** por el override a `rounded-none`. No usar `--radius` como guía de radio para superficies nuevas.
- Elevación: `shadow-sm` o `ring-1 ring-foreground/10` — sin sombras dramáticas.
- Contrato completo de layout de página: [`PAGE-LAYOUT.md`](./PAGE-LAYOUT.md) (regla **R4**).

## Layout

- **Sidebar** colapsable a icono (`collapsible="icon"`).
- Header sticky ~49px en `SidebarInset`.
- Contenido: `gap-4`; opción layout fijo `max-w-7xl` según settings.
- Módulos: `ModuleHeader` + `Page` / `PageContent` + `DataTable` o lista `Item`.

> **Contrato de layout de página:** anatomia, reglas R1–R7 (ritmo vertical, h1 unico, tipos de header, radio del sistema, cuatro estados, badges, settings tabs) y ejemplos de código están documentados en [`PAGE-LAYOUT.md`](./PAGE-LAYOUT.md). Este archivo (DESIGN.md) cubre tokens; PAGE-LAYOUT.md cubre la estructura.

## Componentes clave

| Patrón                  | Uso                                             |
| ----------------------- | ----------------------------------------------- |
| `ModuleHeader`          | Título, descripción, endpoint badges, CTA crear |
| `EndpointBadge`         | `variant="outline"`, `rounded-none`, mono       |
| `DataTable`             | Listados con sort/filter según módulo           |
| `TechnologyFormOverlay` | Formulario en overlay/dialog                    |
| `Item` + `ItemActions`  | Vista lista alternativa                         |

## Motion

- Transiciones Radix por defecto (`animate-in`, `fade`, `zoom`) en overlays.
- Sin GSAP, sin scroll pinning, sin animaciones decorativas en dashboard.

## Accesibilidad

- `aria-label` en icon buttons.
- Contraste según tokens shadcn; revisar con skill `accessibility` en cambios grandes.

## Skills alineadas

| Mantener estilo                 | Evitar como default                   |
| ------------------------------- | ------------------------------------- |
| impeccable (product)            | brandkit, gpt-taste                   |
| shadcn, tailwind-v4-shadcn      | industrial-brutalist-ui               |
| design-taste-frontend (ajustes) | minimalist-ui, high-end-visual-design |

## Archivos fuente de verdad

- Tokens: `src/index.css`
- Config shadcn: `components.json`
- Layout shell: `src/components/dashboard/dashboard-layout.tsx`
