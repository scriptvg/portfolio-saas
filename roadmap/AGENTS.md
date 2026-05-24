# Roadmap — instrucciones para agentes

Este directorio define **qué construir** y en qué orden. El código vive en `portfolio-saas/src/`; las reglas de implementación viven en [`../ai/`](../ai/).

## Antes de codificar

1. Leer el issue asignado en `roadmap/issues/issue-XX.md` (estado, alcance, criterios de aceptación).
2. Confirmar que el issue está `en progreso` o pedir confirmación si sigue en `borrador`.
3. Cargar skills según la sección **Agentes y skills** del issue (no improvisar patrones que ya están documentados).

## Jerarquía de contexto

| Prioridad | Fuente | Uso |
| --- | --- | --- |
| 1 | `roadmap/issues/issue-XX.md` | Alcance, rutas, APIs, DoD |
| 2 | `portfolio-saas/ai/context/` | PRODUCT.md, DESIGN.md (register product) |
| 3 | `portfolio-saas/.agents/skills/*` | Stack del app (RHF, Zod, React, Vite, composición) |
| 4 | `portfolio-saas/.agents/skills/impeccable/*` | UI producto: layout, forms, settings, polish, audit |
| 5 | Referencias en `roadmap/issues/references/` | Capturas y mocks visuales |

Rutas relativas a la raíz del monorepo `portfolio/` salvo que el issue indique `portfolio-saas/` explícitamente.

## Registro de diseño (issues de UI)

Issues marcados con `register: product` (dashboard, settings, admin):

- Ejecutar **impeccable** con registro **product** (`reference/product.md`).
- Cargar `ai/context/PRODUCT.md` y `ai/context/DESIGN.md` (o `IMPECCABLE_CONTEXT_DIR=ai/context`) antes de implementar.
- Si no existen, seguir el issue + referencias visuales; opcional: `impeccable teach` / `impeccable document` en sesión aparte.

Comandos útiles por fase:

| Fase | Comando impeccable | Referencia |
| --- | --- | --- |
| Alinear layout / IA | `shape` | `reference/spatial-design.md`, `reference/layout.md` |
| Implementar UI | `craft` | `reference/craft.md` |
| Revisión pre-merge | `audit` o `critique` | `reference/audit.md`, `reference/critique.md` |
| Detalle final | `polish` | `reference/polish.md` |
| Formularios / estados | `harden` | `reference/harden.md` |

## Issues de formularios (este repo)

Cuando el issue toque formularios (p. ej. settings, auth):

1. `portfolio-saas/.agents/skills/react-hook-form/SKILL.md`
2. `portfolio-saas/.agents/skills/zod/SKILL.md`
3. Referencias obligatorias para shadcn:
   - `react-hook-form/references/integ-shadcn-form-import.md`
   - `react-hook-form/references/integ-shadcn-select-wiring.md`
4. `composition-patterns/SKILL.md` si el issue introduce `SettingsLayout`, tabs o compound components.

## Flujo de trabajo

```
issue-XX.md → skills listadas → implementar en src/ → checklist del issue → PR
```

Al cerrar un issue:

- Marcar checkboxes y estado `hecho` en el markdown del issue.
- Adjuntar en el PR: screenshots + gaps de API para issues hijos.
- No ampliar alcance más allá de **Fuera de alcance** del issue.

## Crear un issue nuevo

Copiar `roadmap/issues/_template.md` → `issue-NN.md`, rellenar frontmatter y sección **Agentes y skills**.
