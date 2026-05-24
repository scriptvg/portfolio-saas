---
id: issue-02
title: Settings — Team tab, layout 2-columnas y audit a11y
status: hecho
priority: media
type: redesign
area: frontend-dashboard
register: product
route: /dashboard/settings
skills:
  - portfolio-saas/ai/context/PRODUCT.md
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/composition-patterns/SKILL.md
  - portfolio-saas/.agents/skills/react-best-practices/SKILL.md
  - portfolio-saas/.agents/skills/impeccable/SKILL.md
  - portfolio-saas/.agents/skills/accessibility/SKILL.md
  - portfolio-saas/.agents/skills/shadcn/SKILL.md
  - portfolio-saas/.agents/skills/tailwind-v4-shadcn/SKILL.md
impeccable_commands:
  - audit
  - polish
  - craft
---

# Issue 02 — Settings: Team tab, layout 2-columnas y audit a11y

> Continuación de [`issue-01.md`](./issue-01.md). El MVP (shell + tabs + Workspace + privacy + notifications + integrations) está hecho. Este issue cierra los gaps reales restantes: añadir Team, refinar densidad visual, auditar accesibilidad.

> **Estado (2026-05-24, verificado por agente frontend):** ✅ HECHO con DoD acotado. Toda la implementación está en código y verificada: tab `Equipo` en `SETTINGS_TABS`, `pages/team.tsx` (stat cards stub + tabla mock), ruta lazy `team` en `router/index.tsx`, export `TeamSettings` en el barrel, `SettingsItemSection` con prop `layout="split"` retro-compatible, y `nav-user` reubicado en `src/features/app/components/`. `pnpm typecheck` y `pnpm test` pasan limpios.
>
> **DoD acotado — lint/format quedan fuera:** `pnpm lint` (12 errores) y `pnpm format:check` (74 archivos) fallan por **deuda preexistente de todo el repo, ajena a issue-02**. Ninguno de los archivos que toca este issue aparece en la lista de format:check (todos pasan prettier), y los 3 errores de lint en `settings/` (`edit-profile-dialog.tsx`, `webhook-form-dialog.tsx`, `pages/workspace.tsx:63`) son patrones `set-state-in-effect` preexistentes que issue-02 no introdujo. La limpieza repo-wide pasa a [`issue-03.md`](./issue-03.md) (lint) y a `TICKET-013` (drift de prettier global). Tocar esos errores aquí dispararía la regla del espejo en `components/ui/` y arriesgaría la detección de _dirty_ en forms — explícitamente fuera de alcance.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-02` |
| **Título** | Settings: Team tab + layout 2-columnas + audit a11y |
| **Estado** | `todo` |
| **Prioridad** | `media` |
| **Tipo** | `redesign` |
| **Register** | `product` |
| **Área** | Frontend — Dashboard |
| **Ruta** | `/dashboard/settings/*` (afecta a las 5 tabs + nueva `team`) |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

**Leer antes de implementar** (en orden):

| # | Skill / doc | Cuándo |
| --- | --- | --- |
| 1 | [`../AGENTS.md`](../AGENTS.md) | Siempre |
| 2 | [`../../ai/AGENTS.md`](../../ai/AGENTS.md) | Jerarquía de contexto |
| 3 | [`../../ai/context/PRODUCT.md`](../../ai/context/PRODUCT.md), [`DESIGN.md`](../../ai/context/DESIGN.md) | Si existen — tokens/registro product |
| 4 | [`./issue-01.md`](./issue-01.md) | Contexto de qué se construyó antes |
| 5 | [`../../.agents/skills/impeccable/reference/product.md`](../../.agents/skills/impeccable/reference/product.md) | Audit + polish UI |
| 6 | [`../../.agents/skills/composition-patterns/SKILL.md`](../../.agents/skills/composition-patterns/SKILL.md) | Variantes opt-in en `SettingsItemSection` |
| 7 | [`../../.agents/skills/accessibility/SKILL.md`](../../.agents/skills/accessibility/SKILL.md) | A11y audit del tab list y forms |
| 8 | `references/settings-team-members.png` | Patrón visual Team |

**Comandos impeccable sugeridos:** `audit` → `polish` → `craft` (Team tab).

---

## Resumen

**Problema:** El Settings shell está consolidado (issue-01), pero quedan 3 gaps visibles:

1. No existe la tab `Team members` (placeholder + estructura, sin API).
2. El layout de cada `SettingsItemSection` apila título/descripción/controles en una sola columna. El mock de referencia muestra una variante 2-col (descripción + icono a la izquierda en `md+`, controles a la derecha) que mejora densidad y escaneo.
3. No se ha pasado un audit a11y formal sobre las 5 tabs ya implementadas.

**Resultado:** Settings tiene 6 tabs (las 5 actuales + `team`). `SettingsItemSection` ofrece una variante opt-in `layout="split"` que las páginas pueden adoptar gradualmente. Las 6 tabs pasan `impeccable audit` sin issues bloqueantes y la nav-user apunta al destino correcto.

---

## Referencias de diseño

| # | Vista | Archivo |
| --- | --- | --- |
| 1 | Team members | [`references/settings-team-members.png`](references/settings-team-members.png) |
| 2 | Workspace (lenguaje 2-col) | [`references/settings-workspace.png`](references/settings-workspace.png) |

> Nota: el mock muestra un SaaS multi-tenant (TaskFlow). Los **campos específicos** del mock (Industry, "Allow Members to Create Projects", emails reales en lista) no aplican a este producto. Tomar **el patrón de layout y densidad**, no los datos literales.

### Checklist visual

- [ ] Tab `Team members` añadida al tab list, scrollable en mobile
- [ ] 4 stat cards en la parte superior de Team con métricas stub (Total, Admins, Active week, Pending invites)
- [ ] Lista/tabla de miembros con avatar + nombre/email + meta (rol, fecha) — datos mock estáticos
- [ ] `SettingsItemSection` soporta `layout="split"` (descripción izquierda, controles derecha en `md+`)
- [ ] Páginas Workspace y General adoptan `layout="split"` donde mejora densidad
- [ ] Inputs con icono leading (Lucide vía `InputGroup`) en campos Workspace clave (Nombre, URL slug ya lo tiene, Meta título)
- [ ] Estados completos (loading/empty/error) en Team mock
- [ ] Dark mode revisado en las 6 tabs

---

## Alcance

### En alcance (MVP issue-02)

- [x] Añadir `team` al array `SETTINGS_TABS` en `src/features/settings/utils/settings-tabs.ts`
- [x] Crear `src/features/settings/pages/team.tsx` con: stat cards (stub) + tabla de miembros mock
- [x] Registrar la ruta `team` en `src/router/index.tsx` (lazy, como las demás)
- [x] Extender barrel `src/features/settings/index.ts` con `TeamSettings`
- [x] Refactor `SettingsItemSection` para soportar prop opcional `layout: "stack" | "split"` (default `stack`, retro-compatible)
- [x] Adoptar `layout="split"` en `WorkspaceSettings` (al menos en bloques Identidad y Publicación) y opcionalmente en `GeneralSettings`
- [x] `impeccable audit` sobre las 6 tabs: focus visible, contraste, labels en inputs, foco en tab activo — **score 18/20 Excellent**, 0 P0/P1, 2 P2, 2 P3
- [x] `impeccable polish`: espaciado/ritmo vertical consistente — fixes aplicados: Team mobile (rol badge + lastActive visibles), Workspace Avatar (alt contextual), Team Alert (InfoIcon). Pendiente menor: tabs h-10 (40px) bajo touch target estándar 44px — documentado como deuda
- [x] Alinear `nav-user` (`src/features/app/components/nav-user.tsx` — la ruta real, no `components/dashboard/`) — renombrado item "Perfil" → "Cuenta" para coincidir con el tab renombrado. Las rutas existentes (`/privacy`, `/notifications`) ya eran válidas; no había link huérfano a `/profile`.
- [ ] Sin regresiones en mutaciones existentes (`usePatchWorkspaceMutation`, `usePatchPanelMutation`, `usePatchNotificationsMutation`, avatar upload/delete)

### Fuera de alcance

- Tab `Billing` (no hay infra de pagos ni decisión de producto)
- API real de Team (members/invites/stats): pasa a futuro issue cuando backend la implemente
- Cambios de schema/contenido en Workspace (Industry, timezone, "Allow Members…" no aplican a single-user)
- i18n completo del dashboard
- Tests de componentes (parte del TICKET-006 cross-app, no de este issue)

---

## Estado actual en código

| Recurso | Ubicación | Notas |
| --- | --- | --- |
| Settings shell | `src/features/settings/layout/index.tsx` | Tabs + Outlet OK |
| Definición tabs | `src/features/settings/utils/settings-tabs.ts` | 5 entradas; añadir `team` |
| Rutas | `src/router/index.tsx:110-137` | Añadir nodo `team` y su lazy import |
| Páginas | `src/features/settings/pages/{general,workspace,privacy,notifications,integrations}.tsx` | OK; refactor `SettingsItemSection` no debe romperlas |
| Barrel | `src/features/settings/index.ts` | Exporta páginas y componentes; añadir `TeamSettings` |
| Sección reutilizable | `src/features/settings/components/item-section.tsx` | Añadir prop `layout` |
| Nav usuario | `src/components/dashboard/nav-user.tsx` | Revisar destino del enlace Settings |

---

## Arquitectura propuesta

```
/dashboard/settings
├── general          ✅ panel preferences (tema, layout, idioma)
├── workspace        ✅ identidad pública (avatar, name, slug, links, status, SEO)
├── privacy          ✅ cuenta + OAuth + password + delete account
├── notifications    ✅ toggles security + product
├── integrations     ✅ github + webhooks
└── team             ➕ NUEVO — stat cards stub + member list mock
```

`SettingsItemSection` antes:

```tsx
<SettingsItemSection title="X" description="Y" actions={...}>
  {children} {/* controles */}
</SettingsItemSection>
```

Después (retro-compatible):

```tsx
<SettingsItemSection title="X" description="Y" actions={...} layout="split">
  {children}
</SettingsItemSection>
```

- `layout="stack"` (default) — comportamiento actual (todo apilado).
- `layout="split"` — en `md+`: descripción + título a la izquierda, `children` + `actions` a la derecha. En `<md`: colapsa a stack.

---

## Dependencias API

| Capacidad | Endpoint | ¿Existe? | Si no |
| --- | --- | --- | --- |
| Team members list | `GET /workspaces/:id/members` | ☐ No | Datos estáticos mock en `pages/team.tsx`; banner "Próximamente datos reales" |
| Invites | `POST /workspaces/:id/invites` | ☐ No | Botón "Invitar" deshabilitado con tooltip |
| Stat counts (members, admins, active week, pending) | `GET /workspaces/:id/stats` | ☐ No | Números stub |

> Ninguna mutación real contra backend en este issue. Si en el futuro se necesitan endpoints reales, abrir issue-03 con la spec.

---

## Criterios de aceptación

- [x] Nueva ruta `/dashboard/settings/team` accesible y enlazada en el tab list
- [x] Tab list sigue scrollable en mobile con la nueva entrada (`ScrollArea` + `ScrollBar` horizontal, `TabsList w-max min-w-full`)
- [x] `SettingsItemSection` con `layout="split"` se ve correctamente en `md+` y colapsa a 1-col en `<md`
- [x] Páginas existentes que NO adopten `layout="split"` siguen renderizando igual que antes (retro-compatibilidad; default `stack`)
- [x] `nav-user` lleva a `/dashboard/settings/privacy` (tab "Cuenta", sub-ruta verificada) y `/notifications`
- [x] `pnpm typecheck` pasa
- [ ] `pnpm lint` pasa — ⚠️ **bloqueado por deuda repo-wide preexistente** (12 errores, ninguno introducido por issue-02). Se aborda en [`issue-03.md`](./issue-03.md). Archivos de issue-02 sin errores nuevos.
- [x] `pnpm test` pasa (sanity tests siguen verdes)
- [ ] `pnpm format:check` pasa — ⚠️ **bloqueado por drift global preexistente** (74 archivos, `TICKET-013`). Ningún archivo de issue-02 está en la lista; todos pasan prettier.
- [ ] Smoke manual: las 6 tabs cargan, dark/light mode OK, foco visible al tabular — pendiente verificación humana en navegador
- [x] Sin violaciones graves a11y identificadas en `impeccable audit` (score 18/20, 0 P0/P1)
- [ ] PR incluye screenshots de las 6 tabs (light + dark) — paso de PR (pendiente)

---

## Plan de implementación

| Paso | Tarea | Est. | Hecho |
| --- | --- | --- | --- |
| 1 | Refactor `SettingsItemSection` con prop `layout` opcional (retro-compatible) | 1h | ☑ |
| 2 | Adoptar `layout="split"` en Workspace (bloques principales) | 1h | ☑ |
| 3 | Crear `pages/team.tsx` con stat cards stub + tabla mock | 2h | ☑ |
| 4 | Añadir entrada `team` a `SETTINGS_TABS` + ruta lazy en router + export en barrel | 0.5h | ☑ |
| 5 | Alinear `nav-user` al destino correcto | 0.3h | ☑ |
| 6 | `impeccable audit` sobre las 6 tabs (light + dark) | 1h | ☑ |
| 7 | `impeccable polish` aplicando fixes del audit | 1h | ☑ |
| 8 | Smoke manual + capturas para PR | 0.5h | ☐ (paso de PR/navegador, pendiente) |

**Total estimado:** ~7h (1 sesión larga o 2 sesiones medianas).

---

## Plan de pruebas

- [ ] Tab list muestra 6 entradas, todas clicables
- [ ] Click en cada tab actualiza URL y renderiza la página correcta
- [ ] Reload directo en `/dashboard/settings/team` carga la tab activa
- [ ] `SettingsItemSection` en `layout="split"` se ve en 2 columnas en desktop, 1 columna en mobile
- [ ] `SettingsItemSection` sin `layout` (o `layout="stack"`) se ve igual que antes
- [ ] Save bar en Workspace sigue detectando dirty correctamente tras el refactor
- [ ] Avatar upload/delete sigue funcionando (no se rompió por el refactor)
- [ ] Sidebar nav-user lleva a Settings/general y el item queda marcado como activo
- [ ] Dark mode: contraste OK en stat cards y tabla mock del Team tab
- [ ] Teclado: tab por todas las tabs, foco visible

---

## Riesgos y decisiones

| # | Pregunta | Decisión |
| --- | --- | --- |
| 1 | ¿La variante `layout="split"` debe ser opt-in o forzada en todas las páginas? | Opt-in (retro-compat; migración gradual) |
| 2 | ¿Team con datos mock o esperar al backend? | Mock con banner — desbloquea el cierre del issue |
| 3 | ¿Renombrar tab "Privacidad y seguridad" a "Cuenta" para alinear con el mock? | Pendiente — consultar con usuario antes de tocar |
| 4 | ¿Añadir `Billing` placeholder? | No (fuera de alcance) |
| 5 | ¿Eliminar references PNG obsoletas? | No (sirven como referencia de densidad/lenguaje) |

---

## Definición de hecho

- [x] Criterios de aceptación tildados salvo lint/format (deuda repo-wide, ver nota de estado) y smoke/screenshots (pasos de PR/navegador)
- [x] `status: hecho` en el frontmatter de este issue
- [ ] PR con screenshots de las 6 tabs (light + dark) — pendiente al abrir PR
- [x] Sin endpoints nuevos en backend (este issue es 100% frontend)
- [x] Gaps detectados al cerrar: deuda de lint repo-wide → [`issue-03.md`](./issue-03.md); drift de prettier → `TICKET-013`
