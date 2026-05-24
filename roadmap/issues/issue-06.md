---
id: issue-06
title: Settings/Workspace — consistencia split/stack y densidad de la tab
status: todo
priority: media
type: redesign
area: frontend-dashboard
register: product
route: /dashboard/settings/workspace
skills:
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/composition-patterns/SKILL.md
  - portfolio-saas/.agents/skills/impeccable/SKILL.md
  - portfolio-saas/.agents/skills/design-taste-frontend/SKILL.md
impeccable_commands:
  - audit
  - polish
---

# Issue 06 — Settings/Workspace: consistencia split/stack

> Depende de [`issue-04.md`](./issue-04.md). Es la tab que el usuario señaló como "se sale del diseño del resto de páginas". El objetivo es alinear su densidad interna a la regla R7 del contrato, sin tocar la lógica de guardado ni de avatar.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-06` |
| **Título** | Settings/Workspace: consistencia split/stack y densidad |
| **Estado** | `todo` |
| **Prioridad** | `media` |
| **Tipo** | `redesign` |
| **Register** | `product` |
| **Área** | Frontend — Dashboard / Settings |
| **Ruta** | `/dashboard/settings/workspace` |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`issue-04.md`](./issue-04.md) §R7 + `ai/context/PAGE-LAYOUT.md` | Regla split/stack |
| 3 | [`issue-02.md`](./issue-02.md) | Origen de `layout="split"` en `SettingsItemSection` |
| 4 | [`../../.agents/skills/composition-patterns/SKILL.md`](../../.agents/skills/composition-patterns/SKILL.md) | Variantes opt-in coherentes |

**Comandos impeccable:** `audit` → `polish`.

---

## Resumen

**Problema:** `src/features/settings/pages/workspace.tsx` mezcla layouts dentro de la misma tab: "Identidad pública" y "Publicación" usan `layout="split"` (2-col), mientras "Enlaces" y "SEO" usan `stack` (1-col). Esa mezcla hace que la tab "salte" respecto al resto de tabs de Settings, que son todas `stack`. Además el bloque SEO es colapsable (toggle Mostrar/Ocultar), patrón que no aparece en otras tabs.

**Resultado:** Workspace adopta un layout coherente según R7 (un criterio único de cuándo aplicar split, aplicado de forma consistente en toda la tab), alineado con el resto de tabs. La detección de _dirty_, el save bar y el flujo de avatar (upload/delete) siguen funcionando exactamente igual.

---

## Alcance

### En alcance

- [ ] Aplicar R7: decidir un criterio único de split/stack para la tab y aplicarlo consistentemente a las 4 secciones (Identidad, Enlaces, Publicación, SEO).
- [ ] Revisar el bloque SEO colapsable: o se mantiene como patrón intencional documentado, o se alinea al resto (decisión en §Riesgos).
- [ ] Verificar densidad/ritmo vertical (`space-y-6` de la tab) contra las otras tabs de Settings.
- [ ] Dark mode + foco visible en inputs/avatar.

### Fuera de alcance

- Cambiar `usePatchWorkspaceMutation`, `useUploadWorkspaceAvatarMutation`, `useDeleteWorkspaceAvatarMutation` ni el contrato de `WorkspaceDraft`.
- Tocar `SettingsItemSection` salvo ajuste menor retro-compatible (su API `layout` ya existe desde issue-02).
- Añadir/quitar campos del workspace.

---

## Estado actual en código

| Recurso | Ubicación | Nota |
| --- | --- | --- |
| Página | `src/features/settings/pages/workspace.tsx` | mezcla split (Identidad `:210`, Publicación `:380`) y stack (Enlaces `:334`, SEO `:413`) |
| Sección | `src/features/settings/components/item-section.tsx` | `layout: "stack" \| "split"` (no cambiar API) |
| Save bar | `src/features/settings/components/settings-save-bar.tsx` | depende de `dirty` calculado en `workspace.tsx:68` |

> ⚠️ El cálculo de `dirty` y `syncFromServer` (`workspace.tsx:61-155`) es sensible: cualquier refactor debe preservar que avatar upload/delete **no** marquen dirty falsamente. Hay además un error de lint `set-state-in-effect` preexistente en `workspace.tsx:63` que se aborda en [`issue-03.md`](./issue-03.md), no aquí.

---

## Criterios de aceptación

- [ ] La tab Workspace aplica un criterio split/stack único y consistente (R7).
- [ ] Coherencia visual con las otras 5 tabs de Settings (densidad y ritmo).
- [ ] Save bar detecta dirty correctamente tras el cambio.
- [ ] Avatar upload/delete no marca dirty falso y sigue funcionando.
- [ ] `pnpm typecheck` / `pnpm test` pasan; lint de archivos tocados sin errores nuevos.
- [ ] Dark mode OK.
- [ ] Screenshots de las 6 tabs (light + dark) mostrando la coherencia.

---

## Riesgos y decisiones

| # | Pregunta | Decisión |
| --- | --- | --- |
| 1 | ¿SEO colapsable se mantiene? | _Pendiente_ — evaluar si aporta o rompe consistencia; por defecto alinear a las demás secciones salvo justificación. |
| 2 | ¿Split o stack como base de la tab? | Según R7 del contrato; confirmar tras issue-04. |
| 3 | ¿Riesgo en dirty/avatar? | Alto: smoke manual obligatorio de guardado y avatar tras el cambio. |

---

## Definición de hecho

- [ ] Criterios de aceptación completos.
- [ ] Smoke: guardar workspace, descartar, subir y quitar avatar.
- [ ] `status: hecho` en frontmatter.
- [ ] Screenshots en PR.
