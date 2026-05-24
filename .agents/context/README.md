---
title: Contexto de producto y diseño
status: active
updated: 2026-05-19
audience: agents
summary: Archivos canónicos para impeccable y agentes de UI en portfolio-saas.
---

# Contexto — `ai/context/`

Fuente canónica de **PRODUCT.md** y **DESIGN.md** para este proyecto.

## Archivos

| Archivo | Propósito |
| --- | --- |
| [`PRODUCT.md`](./PRODUCT.md) | Usuarios, tono, anti-referencias, principios de producto |
| [`DESIGN.md`](./DESIGN.md) | Tokens, tipografía, color, componentes, motion |

## Uso con impeccable

```bash
# Desde portfolio-saas/
IMPECCABLE_CONTEXT_DIR=ai/context npx impeccable craft
```

O dejar que el loader resuelva vía `.agents/context/` (enlace al mismo directorio).

## Mantenimiento

Actualizar `updated` en frontmatter al cambiar decisiones. Cambios de tokens en código (`src/index.css`) deben reflejarse en `DESIGN.md`.
