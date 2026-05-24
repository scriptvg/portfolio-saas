---
title: AI — índice del proyecto
status: active
updated: 2026-05-19
audience: both
summary: Punto de entrada único para agentes, skills, contexto de diseño y documentación AI de portfolio-saas.
---

# AI — portfolio-saas

Carpeta exclusiva para todo lo relacionado con **agentes, skills y contexto de diseño**. Referénciala en prompts como `@portfolio-saas/ai/` o rutas concretas bajo `ai/`.

## Mapa rápido

| Qué necesitas | Ruta |
| --- | --- |
| Instrucciones para agentes | [`AGENTS.md`](./AGENTS.md) |
| Producto y usuarios (impeccable) | [`context/PRODUCT.md`](./context/PRODUCT.md) |
| Tokens y estilo visual | [`context/DESIGN.md`](./context/DESIGN.md) |
| Convenciones de código + AI | [`docs/conventions.md`](./docs/conventions.md) |
| Guía de estilo UI | [`docs/style-guide.md`](./docs/style-guide.md) |
| Catálogo de skills | [`docs/skills-catalog.md`](./docs/skills-catalog.md) |
| Plantilla para nuevos docs | [`docs/_template.md`](./docs/_template.md) |
| Roadmap (qué construir) | [`../roadmap/`](../roadmap/) |
| Skills instaladas (binarios) | [`../.agents/skills/`](../.agents/skills/) |
| Lock de instalación (`npx skills`) | [`../skills-lock.json`](../skills-lock.json) |

## Jerarquía de lectura

1. Issue en `roadmap/issues/` (alcance y DoD).
2. [`AGENTS.md`](./AGENTS.md) (flujo y prioridades).
3. [`context/`](./context/) si el trabajo es UI.
4. Skills listadas en el issue → ver [`docs/skills-catalog.md`](./docs/skills-catalog.md).

## Instalar skills

Desde la raíz de `portfolio-saas`:

```bash
npx skills add <owner/repo> --yes
```

Las skills se instalan en `.agents/skills/` (convención del CLI). Actualiza el catálogo en `docs/skills-catalog.md` tras cada instalación.

## Contexto impeccable

Variables de entorno opcional:

```bash
IMPECCABLE_CONTEXT_DIR=ai/context
```

Sin variable, impeccable resuelve también `.agents/context/` si existe enlace o copia; la fuente canónica es `ai/context/`.

## Estructura

```
ai/
├── AGENTS.md           # Entrada principal para agentes
├── README.md           # Este índice
├── context/            # PRODUCT.md, DESIGN.md
└── docs/               # Guías y plantillas
```

Los artefactos ejecutables de skills (scripts, `SKILL.md` de terceros) permanecen en `.agents/skills/` por compatibilidad con `npx skills`.
