---
id: issue-01
title: Rediseño página Configuración — layout SaaS con tabs
status: hecho
priority: alta
type: redesign
area: frontend-dashboard
register: product
route: /dashboard/settings
skills:
  - portfolio-saas/ai/context/PRODUCT.md
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/react-hook-form/SKILL.md
  - portfolio-saas/.agents/skills/zod/SKILL.md
  - portfolio-saas/.agents/skills/composition-patterns/SKILL.md
  - portfolio-saas/.agents/skills/react-best-practices/SKILL.md
  - portfolio-saas/.agents/skills/impeccable/SKILL.md
impeccable_commands:
  - shape
  - craft
  - audit
  - polish
  - harden
---

> **Estado (2026-05-22, verificado por agente frontend):** ✅ HECHO con caveats. El MVP de este issue (shell + tabs + rutas anidadas + Workspace UI) ya está implementado en `src/features/settings/`. La estructura final, sin embargo, difiere del literal del issue: hay **5 tabs** (`general` / `workspace` / `privacy` / `notifications` / `integrations`) en lugar de 3 (`general` / `workspace` / `team`), y el contenido "perfil + OAuth + contraseña" vive en `privacy.tsx` en lugar de `general.tsx`. La arquitectura actual se considera la nueva línea base. Los gaps reales que quedan pasan a [`issue-02.md`](./issue-02.md).
>
> **Lo que el issue pedía vs lo que se construyó:**
>
> | Pedido en issue-01 | Realidad en código | Estado |
> |---|---|---|
> | `SettingsLayout` + tabs + `<Outlet>` | `src/features/settings/layout/index.tsx` | ✅ |
> | 3 tabs (general / workspace / team) | 5 tabs (general / workspace / privacy / notifications / integrations) | ⚠️ Diverge — nueva base |
> | General: perfil + OAuth + contraseña | `pages/privacy.tsx` (no `general.tsx`) | ⚠️ En `privacy` |
> | General actual hace panel preferences | `pages/general.tsx` con tema/layout/idioma/confirm-delete | ➕ Extra, no estaba en issue |
> | Workspace: logo + info + preferences (semana/timezone) | `pages/workspace.tsx` con avatar + identidad pública + slug + links + status + SEO | ⚠️ Distintos campos (multi-tenant no aplica a producto) |
> | Team tab (fase 2) | No existe | ❌ Pasa a issue-02 |
> | Rutas anidadas + redirect index→general | `src/router/index.tsx:110-137` | ✅ |
> | Componentes `settings-section` etc. | `src/features/settings/components/` (SettingsItemSection, SettingsFormField, SettingsSaveBar, SettingsLoading, SettingsDangerZone, SettingsRowItem, SettingsToggleRow) | ✅ |
> | `Notifications` con toggles | `pages/notifications.tsx` wired a `usePatchNotificationsMutation` | ➕ Extra |
> | `Integrations` con GitHub + webhooks | `pages/integrations.tsx` con `GithubIntegrationSection` + `WebhooksSection` | ➕ Extra |
>
> **Gaps que pasan a `issue-02`:** Team tab (placeholder sin API), layout 2-columnas opt-in en `SettingsItemSection`, iconos leading en inputs donde aplique, impeccable audit + polish sobre las 5 tabs, alinear enlace de `nav-user` a `/dashboard/settings/general`.
>
> El contenido original del issue se preserva intacto debajo como histórico.

---

# Issue 01 — Rediseño de Configuración (Settings) estilo SaaS

> Migrar `settings-page.tsx` a un shell con **tabs**, secciones tipo **Workspace** y (fase 2) **Team members**, según referencias en `references/`.

**Instrucciones para agentes:** [`../../ai/AGENTS.md`](../../ai/AGENTS.md) · **Roadmap:** [`../AGENTS.md`](../AGENTS.md) · **UI:** [`.agents/skills/impeccable/SKILL.md`](../../.agents/skills/impeccable/SKILL.md)

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-01` |
| **Título** | Rediseño página Configuración — layout con tabs y secciones Workspace / Team |
| **Estado** | `borrador` |
| **Prioridad** | `alta` |
| **Tipo** | `redesign` |
| **Register** | `product` (settings panel; ver impeccable `reference/product.md`) |
| **Área** | Frontend — Dashboard |
| **Ruta actual** | `/dashboard/settings` |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Agentes y skills

### Orden de lectura (obligatorio)

| # | Recurso | Motivo |
| --- | --- | --- |
| 1 | [`../../ai/AGENTS.md`](../../ai/AGENTS.md) | Flujo agentes + jerarquía de contexto |
| 2 | [`../../ai/context/PRODUCT.md`](../../ai/context/PRODUCT.md), [`DESIGN.md`](../../ai/context/DESIGN.md) | Registro product y tokens |
| 3 | Este archivo | Alcance, rutas, DoD |
| 4 | [impeccable `reference/product.md`](../../.agents/skills/impeccable/reference/product.md) | Tabs, forms, densidad, familiaridad SaaS |
| 5 | [`references/settings-workspace.png`](references/settings-workspace.png) | Mock Workspace |
| 6 | [`references/settings-team-members.png`](references/settings-team-members.png) | Mock Team (fase 2) |

### Skills `portfolio-saas/.agents`

| Skill | Aplicación en este issue |
| --- | --- |
| [`skills/composition-patterns/SKILL.md`](../../.agents/skills/composition-patterns/SKILL.md) | `SettingsLayout`, tabs, `SettingsSection`; evitar boolean props |
| [`skills/react-hook-form/SKILL.md`](../../.agents/skills/react-hook-form/SKILL.md) | Migrar `LinkPasswordSection`; forms Workspace |
| [`skills/zod/SKILL.md`](../../.agents/skills/zod/SKILL.md) | Schemas workspace + contraseña existente |
| [`skills/react-best-practices/SKILL.md`](../../.agents/skills/react-best-practices/SKILL.md) | Re-renders en tabs; lazy de rutas si aplica |

**Reglas RHF concretas** (settings ya usa shadcn `Field` + RHF):

- `skills/react-hook-form/references/integ-shadcn-form-import.md` — no importar `Form` de RHF
- `skills/react-hook-form/references/integ-shadcn-select-wiring.md` — selects Industry / timezone
- `skills/react-hook-form/references/formcfg-default-values.md`
- `skills/react-hook-form/references/valid-resolver-caching.md` — mantener `zodResolver` estable

### Skill impeccable (local)

| Comando / ref | Cuándo |
| --- | --- |
| `impeccable shape` | Definir IA: tabs, header, grid 2 columnas vs cards apiladas |
| `impeccable craft` | Implementar páginas según referencias |
| `impeccable harden` | OAuth edge cases, validación, estados vacío/error |
| `impeccable audit` | Pre-PR: contraste, labels, responsive |
| `impeccable polish` | Espaciado, alineación, micro-detalle |
| `reference/layout.md`, `reference/spatial-design.md` | Ritmo vertical, secciones |
| `reference/harden.md` | Formularios y errores |

**Anti-patrones impeccable a evitar en este rediseño** (shared + product):

- Cards idénticas en grid repetitivo sin jerarquía
- Nested cards dentro de cards
- Reinventar tabs/modales si el patrón estándar basta
- Gradient text, side-stripe borders, glassmorphism decorativo

---

## Resumen

Reemplazar la página monolítica (`SettingsPage` en `src/pages/settings-page.tsx`) por **Settings** con tabs horizontales, bloques label-izquierda / campos-derecha en cards, y vistas **Workspace** + **Team members** alineadas al mock.

| | Hoy | Objetivo |
| --- | --- | --- |
| Estructura | Cards apiladas (perfil, OAuth, contraseña) | Shell + tabs + rutas anidadas |
| Jerarquía | Un solo `<h1>` | Título + tab bar + secciones con descripción lateral |
| Workspace / Team | No existe | UI según PNG (API mock donde falte backend) |

---

## Referencias de diseño

| # | Vista | Archivo |
| --- | --- | --- |
| 1 | Workspace (logo, info, preferencias) | [`references/settings-workspace.png`](references/settings-workspace.png) |
| 2 | Team members (métricas + lista) | [`references/settings-team-members.png`](references/settings-team-members.png) |

### Checklist visual (product register)

- [x] Sidebar dashboard existente — **no** rediseñar (`dashboard-layout.tsx`)
- [x] Título **Configuración** prominente en área principal
- [x] Tabs horizontales (activo: negrita + underline)
- [ ] Toolbar secundaria donde aplique: búsqueda, `Status`, `Sort` (Team)
- [ ] Cards con borde suave sobre fondo `muted` / gris claro
- [ ] Formulario **2 columnas** en `md+`: descripción \| controles
- [ ] Inputs con icono leading (Lucide), radius consistente con `ui/input`
- [x] Iconografía outline única (Lucide)
- [x] Estados interactivos completos: hover, focus, disabled, loading, error

---

## Alcance

### En alcance (MVP)

- [x] `SettingsLayout` + tabs + rutas anidadas (`react-router` `Outlet`)
- [ ] Tab **General** / **Cuenta**: perfil, OAuth, contraseña (paridad funcional con hoy)
- [ ] Tab **Workspace**: UI según mock (mock data si no hay API)
- [x] Componentes: `settings-tabs`, `settings-section`, `settings-page-header`
- [x] Responsive: tabs scrollables; 1 columna en `< md`
- [x] A11y: `role="tablist"`, foco visible, labels

### Fase 2

- [ ] Tab **Team members**: 4 stat cards + lista
- [ ] Tabs placeholder: Privacidad, Notificaciones, Billing, Integraciones → “Próximamente”

### Fuera de alcance

- Rediseño completo del sidebar
- Backend workspace / invites / roles (solo documentar gaps)
- i18n completo
- Billing / pagos reales

---

## Estado actual en código

| Recurso | Ubicación |
| --- | --- |
| Página | `src/pages/settings-page.tsx` |
| Router | `src/router/index.tsx` → `settings` |
| Layout | `src/components/dashboard/dashboard-layout.tsx` |
| Nav usuario | `src/components/dashboard/nav-user.tsx` (enlace `/dashboard/settings/profile` — **alinear** con nuevas rutas) |
| UI | `src/components/ui/*`, `src/components/page` |

**Preservar sin regresión:**

- `useAuth` + `GET /auth/me`
- `prepareOAuthLink` / `unlinkOAuth` (Google, GitHub)
- `linkPassword` + schema Zod existente
- `sonner` toasts

---

## Arquitectura propuesta

```
/dashboard/settings
├── index → redirect → general
├── general     → perfil, OAuth, contraseña
├── workspace   → logo, info, preferencias
└── team        → métricas + lista (fase 2)
```

```
src/pages/settings/
  settings-layout.tsx
  settings-general-page.tsx
  settings-workspace-page.tsx
  settings-team-page.tsx      # fase 2
src/components/settings/
  settings-tabs.tsx
  settings-section.tsx
  settings-page-header.tsx
```

**Decisión de routing** (marcar una):

- [x] Rutas anidadas + `Outlet` (recomendado; deep links)
- [ ] Tabs + estado local sin URL
- [ ] Otra: ___

---

## Especificación por tab

### General / Cuenta

| Sección | Contenido | Implementación |
| --- | --- | --- |
| Perfil | Nombre, correo | Extraer de cards actuales |
| Acceso | Google, GitHub | `OAuthProviderRow` |
| Contraseña | Link password | `LinkPasswordSection` + Zod |

- [ ] Paridad funcional OAuth
- [ ] Patrón `SettingsSection` (2 columnas) como Workspace

### Workspace

| Sección | Campos | Datos |
| --- | --- | --- |
| Logo | Avatar, nombre, plan, fecha, Upload | mock / API: ___ |
| Information | Nombre, URL slug, Industry, Description | mock / API: ___ |
| Preferences | Semana, idioma, timezone, toggle proyectos | mock / API: ___ |

- [ ] Layout desktop = mock
- [ ] Loading / vacío / error si hay fetch
- [ ] Upload: UI only ☐ · API ☐

### Team members (fase 2)

| Bloque | Contenido |
| --- | --- |
| Stats | Total, Admins, Active week, Pending invites |
| Lista | Avatar, nombre, email, tareas, rol, fecha, actividad |
| Header | Search, Status, Sort |

---

## Dependencias API

| Capacidad | Endpoint | ¿Existe? | Si no |
| --- | --- | --- | --- |
| Workspace profile | `PATCH /workspaces/:id` | ☐ | Mock + issue API |
| Logo upload | `POST /upload` | ☐ | Botón disabled + tooltip |
| Members list | `GET .../members` | ☐ | Estáticos fase 2 |
| Invites | `POST .../invites` | ☐ | Fuera de MVP |

---

## Criterios de aceptación

- [x] `/dashboard/settings` → redirect a `/dashboard/settings/general`
- [x] URL sincronizada con tab activo
- [ ] Visual alineado con `references/*.png` (tolerancia razonable al design system shadcn)
- [ ] OAuth y sidebar/nav sin regresiones
- [ ] `npm run build` y lint OK
- [ ] Sin violaciones graves a11y (labels, contraste tabs)

---

## Plan de implementación

| Paso | Tarea | Skills | Hecho |
| --- | --- | --- | --- |
| 1 | `impeccable shape` + rutas + `SettingsLayout` | composition, impeccable | ☐ |
| 2 | Extraer General desde `settings-page.tsx` | RHF, zod | ☐ |
| 3 | Workspace UI + schemas Zod | RHF, shadcn integ | ☐ |
| 4 | Alinear `nav-user` links | — | ☐ |
| 5 | Team (fase 2) | impeccable craft | ☐ |
| 6 | `impeccable audit` + `polish` + capturas PR | impeccable | ☐ |

---

## Plan de pruebas

- [ ] OAuth: link/unlink sin bloqueo de cuenta
- [ ] Contraseña: errores Zod visibles
- [ ] Sidebar activo en cualquier sub-ruta `settings/*`
- [ ] Mobile: tabs + formulario legibles
- [ ] Deep link `/dashboard/settings/workspace`

---

## Riesgos y decisiones

| # | Pregunta | Decisión |
| --- | --- | --- |
| 1 | Copy: “Configuración” vs “Settings” | _pendiente_ |
| 2 | Workspace: usuario vs tenant | _pendiente_ |
| 3 | Redirect desde `/dashboard/settings` único | redirect → `general` |
| 4 | `nav-user` → `/settings/profile` obsoleto | unificar a `general` |
| 5 | `PRODUCT.md` / `DESIGN.md` inexistentes | usar mock + impeccable product |

---

## Definición de hecho

- [ ] Checklists de este issue completados
- [ ] `status: hecho` en frontmatter
- [ ] PR con screenshots General + Workspace
- [ ] Gaps API listados para `issue-02` (si aplica)
- [ ] Opcional: salida `impeccable audit` en `.impeccable/` referenciada en PR
