---
title: Producto — portfolio-saas
status: active
updated: 2026-05-19
audience: agents
summary: Admin del portfolio personal; register product (dashboard SaaS), no marketing site.
---

# PRODUCT — portfolio-saas

## Qué es

Panel de administración (**React + Vite**) para gestionar el contenido del portfolio público: tecnologías, experiencias, proyectos, ajustes de workspace y panel. Conecta con `portfolio-api`.

## Usuarios

| Persona | Necesidad |
| --- | --- |
| Propietario del portfolio | CRUD rápido, confianza, sin fricción |
| Agente / desarrollador | Patrones predecibles, endpoints visibles, formularios consistentes |

## Registro de diseño

**Product UI** (impeccable register: product). Familiaridad tipo Linear / Notion / Stripe Dashboard — la herramienta debe desaparecer en la tarea.

## Tono y copy

- Idioma UI: **español** (labels, toasts, empty states, errores).
- Tono: directo, profesional, sin marketing fluff.
- Términos técnicos permitidos donde aportan claridad (p. ej. métodos HTTP en badges de endpoint).

## Principios

1. **Consistencia entre módulos** — Mismo header de módulo, tabla o lista, diálogos de confirmación, formularios overlay.
2. **Densidad útil** — Tablas y listas para datos; cards solo cuando el issue lo pida.
3. **API visible en desarrollo** — Badges `GET` / `POST` / `PUT` / `DELETE` en headers de módulo (patrón establecido).
4. **Estados completos** — loading, empty, error, success en cada superficie de datos.
5. **No reinventar patrones** — Sidebar + inset, shadcn, DataTable; no layouts experimentales sin issue.

## Anti-referencias

- Landing pages editoriales, hero gigantes, scroll storytelling (gpt-taste, brandkit).
- Estética terminal / brutalista industrial como look principal.
- Gradientes decorativos, glassmorphism pesado, fuentes display en UI de datos.
- Copy en inglés en superficies de usuario salvo issue explícito.

## Módulos actuales (referencia)

| Módulo | Ruta dashboard |
| --- | --- |
| Inicio | `/dashboard` |
| Tecnologías | `/dashboard/technologies` |
| Experiencias | `/dashboard/experiences` |
| Proyectos | `/dashboard/projects` |
| Configuración | `/dashboard/settings` |

## Éxito

Un usuario recurrente completa CRUD sin releer ayuda; un agente implementa un módulo nuevo copiando el patrón de tecnologías sin contradecir este documento.
