---
title: Contrato de layout de página — portfolio-saas
status: active
updated: 2026-05-24
audience: agents
summary: Anatomía obligatoria de página, reglas R1–R7, primitivas compartidas y decisiones de diseño fundacionales para el dashboard.
---

# PAGE-LAYOUT — Contrato de layout de página

> **Estado:** `active` — contrato ratificado (2026-05-24). Las decisiones D1–D4 quedaron confirmadas (incluida la corrección clave: lenguaje **cuadrado**, R4). Issues 04–09 cerrados. Ver `issue-04.md`.
>
> **Issues que dependen de este documento:** `issue-05` (GitHub), `issue-06` (Workspace), `issue-07` (Inicio), `issue-08` (Settings shell + audit CRUD).

---

## 1. Anatomía obligatoria

Toda página bajo `/dashboard` debe seguir exactamente esta estructura:

```
<Page>
  ├── <ModuleHeader .../>          ← módulos CRUD y módulos respaldados por API
  │     (o)
  │   <PageHeader>...</PageHeader> ← páginas no-CRUD (Inicio, futuros dashboards)
  │
  └── <PageContent>...</PageContent>  ← zona de contenido (tabla, formulario, grid)
```

Regla: **exactamente un `<h1>` por árbol de página**, ubicado siempre dentro del componente header (ModuleHeader o PageHeader). Ningún otro componente renderiza `<h1>`.

---

## 2. Reglas

### R1 — Un solo `<h1>` por página

**Regla:** Cada página tiene exactamente un `<h1>`. Sub-secciones usan `<h2>` / `<h3>`. Los títulos de tabs y secciones anidadas no deben repetir el encabezado de la página.

**Estado actual (2026-05-24):**

- CRUD (Tecnologías, Proyectos, Experiencias): cumple — `ModuleHeader` renderiza el único `<h1>`.
- Settings: cumple — corregido en `issue-08` (2026-05-24). "Configuración" pasó a eyebrow `<p text-xs>`; el título de la tab activa es el único `<h1>` por superficie.

---

### R2 — Ritmo vertical único

**Regla:** El espaciado vertical entre header y contenido está fijado en el patrón canónico CRUD: `<Page className="space-y-2">`. No usar `space-y-8` ni `gap-6` ad-hoc en el contenedor raíz de página.

**Propuesta (a ratificar):** Estandarizar en torno al patrón CRUD (`space-y-2` en `Page`). Inicio debe bajar de `space-y-8` a `space-y-2`. Este cambio se ejecuta en `issue-07`.

**Por qué no se fija en la primitiva `Page`:** La primitiva `Page` es un `div` neutro (`className=""`) por diseño; el `space-y-2` lo pasan los consumidores vía `className`. Fijarlo en la primitiva afectaría a todos los consumidores, incluidos los que necesitan layout diferente (Settings con tabs). Se documenta la convención aquí y se deja el espaciado en los consumidores para mantener cero regresión en CRUD.

**Estado actual:**

- CRUD: `<Page className="space-y-2">` — patron canónico.
- Inicio: `<Page className="space-y-8">` — divergente; se corrige en `issue-07`.

---

### R3 — Header según tipo de página

**Regla:**

| Tipo de página                                     | Componente header | Notas                                                                                       |
| -------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| Módulo CRUD (Tecnologías, Proyectos, Experiencias) | `ModuleHeader`    | Con `endpoint`, badges GET/POST/PUT/PATCH/DELETE, CTA crear                                 |
| Módulo API no-CRUD (GitHub, futuras integraciones) | `ModuleHeader`    | Con `endpoint`, badges relevantes; CTA opcional                                             |
| Página sin API propia (Inicio)                     | `PageHeader`      | Misma tipografía: `text-2xl font-semibold tracking-tight` + `text-sm text-muted-foreground` |

**Estado actual:**

- CRUD: cumple.
- GitHub: no usa `ModuleHeader` pese a ser módulo API — se corrige en `issue-05`.
- Inicio: usa `PageHeader` — correcto en principio, pero con `space-y-8` divergente.

---

### R4 — Lenguaje cuadrado (squared / sin radio)

**Regla:** El lenguaje visual del SaaS es **cuadrado**. Todas las superficies rectangulares (cards, listas, badges, inputs, dialogs, botones) usan `rounded-none`. Los primitivos de `components/ui/` ya están así (`card`, `badge`, `button`, `data-table`, `item`, `input`, `dialog` → `rounded-none`). **Prohibido introducir `rounded-sm/md/lg/xl/2xl` en superficies rectangulares.**

**Excepción documentada:** `rounded-full` está permitido **solo** para elementos genuinamente circulares: avatares (`avatar`), puntos/indicadores (`dot`, timeline), thumbs de `switch` y `radio-group`. No es una excepción para "suavizar" rectángulos.

> **Nota:** Los tokens `--radius` existen en `index.css` (heredados del preset shadcn radix-lyra) pero los componentes están sobreescritos a `rounded-none`. `DESIGN.md` describía radios redondeados por error — corregido. **No** te guíes por `--radius` para decidir el radio de una superficie nueva: usa `rounded-none`.

**Estado actual (2026-05-24):**

- `components/ui/`: cumple — 121 `rounded-none` vs 16 `rounded-*` (todos `rounded-full` legítimos).
- App layer: incumple parcialmente — hay `rounded-sm/md/lg/xl/2xl` sueltos en `auth`, `nav-user`, varios `settings/components`, `integration-card`, `project-dialog` y `columns`. Se cuadran en `issue-09`.
- GitHub: su `rounded-none` es **correcto** y alineado al lenguaje — NO se "arregla" en issue-05.

---

### R5 — Cuatro estados obligatorios

**Regla:** Cada superficie de datos implementa los cuatro estados: loading (skeleton vía `DataTable loading={true}`), empty (`DataTable empty={...}`), error (`ModuleError`), success. No crear skeletons inline propios salvo justificación documentada en el componente.

**Componentes canónicos:**

```tsx
// Estado loading + success + empty: via DataTable
<DataTable
  loading={isLoading}
  columns={columns}
  data={rows}
  empty={{
    icon: SomeIcon,
    title: "No se encontraron items",
    description: "Descripcion de la accion a realizar.",
    onAction: openCreateDialog,
    actionLabel: "Añadir item",
  }}
/>

// Estado error: via ModuleError (fuera del DataTable, a nivel PageContent)
{isError ? (
  <ModuleError
    title="No se pudieron cargar los items"
    error={error}
    onRetry={() => { void refetch() }}
  />
) : (
  <DataTable ... />
)}
```

**Estado actual:**

- CRUD: cumple — patrón implementado en las 3 páginas canónicas.
- GitHub: usa skeletons inline propios — se corrige en `issue-05`.

---

### R6 — Badges de datos

**Regla:** Badges de datos usan `Badge variant="outline"` (cuadrado, R4). `font-mono` solo para valores técnicos (counts, endpoints, API URLs, códigos de lenguaje). Badges decorativos (nombres, estados legibles) usan tipografía normal.

**Estado actual:**

- CRUD: cumple — usa `EndpointBadge` solo en headers de módulo.
- GitHub: usa `rounded-none` en badges (**correcto** por R4); revisar solo el uso de `font-mono` decorativo y el tamaño `text-[10px]` ad-hoc en issue-05.

---

### R7 — Tabs de Settings: layout por sección

**Regla:**

- Default: `layout="stack"` en `SettingsItemSection`.
- `layout="split"` solo para bloques con descripción larga + control compacto a la derecha.
- **Consistencia obligatoria dentro de la misma tab:** no mezclar `split` y `stack` en tabs adyacentes sin justificación explícita en el código.

**Propuesta (a ratificar):** Default `stack`; `split` solo cuando mejore la legibilidad del par descripcion/control. Se ejecuta y consolida en `issue-06`.

**Estado actual:** Workspace mezcla `split` (Identidad, Publicación) y `stack` (Enlaces, SEO) sin consistencia — se corrige en `issue-06`.

---

## 3. Primitivas compartidas

### `Page` / `PageHeader` / `PageContent` — `src/components/page.tsx`

```tsx
// Contrato de uso canónico (patron CRUD)
<Page className="space-y-2">
  <ModuleHeader ... />
  <PageContent>
    {/* tabla, lista, grid */}
  </PageContent>
</Page>
```

**`Page`:** div neutro. El espaciado vertical (`space-y-2`) lo pasa el consumidor vía `className`. Mantener neutro para no bloquear casos como Settings con tabs que necesitan layout propio.

**`PageHeader`:** `space-y-1 p-4 md:p-6`. Usado por `ModuleHeader` y directamente por páginas no-CRUD. No modificar el padding sin revisar todos los consumidores.

**`PageContent`:** `space-y-2 px-4`. Padding horizontal alineado con `PageHeader`. El `space-y-2` interno separa sub-secciones de contenido.

---

### `ModuleHeader` — `src/components/shared/module.tsx`

**Props actuales (contrato estable):**

```tsx
interface ModuleHeaderProps {
  title: string // obligatorio: h1 de la página
  description: string // obligatorio: descripción bajo el título
  endpoint?: string // opcional: ruta API para los badges
  onCreate?: () => void // opcional: callback para el botón CTA
  createLabel?: string // opcional: texto del botón (default: "Añadir {title}")
  mediaSlot?: React.ReactNode // opcional: slot de media/avatar/acción (issue-05: avatar GitHub)
}
```

**Cambios aplicados en este issue (retro-compatibles):**

- `endpoint` pasa a ser **opcional** (antes era obligatorio). Si se omite, los endpoint badges no se renderizan. Los 3 consumidores CRUD siguen pasando `endpoint` — sin regresión.
- `onCreate` pasa a ser **opcional** (antes era obligatorio). Si se omite, el botón CTA no se renderiza. Los 3 consumidores CRUD siguen pasando `onCreate` — sin regresión.
- `mediaSlot` es una prop **nueva y opcional** (`React.ReactNode`). Si se omite (como en los 3 CRUD actuales), no renderiza nada. Issue-05 lo usará para el avatar de GitHub.

**Uso canónico CRUD (sin cambio visible):**

```tsx
<ModuleHeader
  title="Tecnologías"
  endpoint="/technologies"
  description="Mantén el catálogo de tecnologías que referencian proyectos y experiencias."
  createLabel="Añadir tecnología"
  onCreate={openCreateDialog}
/>
```

**Uso futuro — módulo sin CTA y con slot de media (issue-05):**

```tsx
<ModuleHeader
  title="GitHub"
  endpoint="/github/profile"
  description="Perfil y repositorios públicos del propietario."
  mediaSlot={<GitHubAvatarWidget username={profile.username} />}
  // sin onCreate — no hay formulario de creación
/>
```

**Uso futuro — página no-CRUD sin endpoint ni CTA:**

Para páginas tipo Inicio que no tienen API propia, usar directamente `PageHeader` (no `ModuleHeader`):

```tsx
<Page className="space-y-2">
  <PageHeader>
    <h1 className="text-2xl font-semibold tracking-tight">Inicio</h1>
    <p className="text-sm text-muted-foreground">
      Vista general del portfolio.
    </p>
  </PageHeader>
  <PageContent>{/* contenido */}</PageContent>
</Page>
```

---

## 4. Patron completo de módulo CRUD (referencia canónica)

Las tres páginas CRUD son la implementación de referencia del contrato. Auditadas en `issue-08` (2026-05-24) y confirmadas como conformes a R1–R6:

| Página       | Archivo                           |
| ------------ | --------------------------------- |
| Tecnologías  | `src/pages/technologies-page.tsx` |
| Proyectos    | `src/pages/projects-page.tsx`     |
| Experiencias | `src/pages/experiences-page.tsx`  |

El siguiente ejemplo es la estructura completa de una página CRUD conforme al contrato. Basado en las tres páginas anteriores.

```tsx
export function ExampleCrudPage() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [deleteTarget, setDeleteTarget] = React.useState<ItemRow | null>(null)

  const {
    data: items = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useItemsQuery()

  const openCreateDialog = React.useCallback(() => {
    setDialogOpen(true)
  }, [])

  return (
    // R2: space-y-2 en el contenedor raíz
    <Page className="space-y-2">
      {/* R1: único h1 via ModuleHeader */}
      {/* R3: ModuleHeader para módulos CRUD */}
      <ModuleHeader
        title="Items"
        endpoint="/items"
        description="Descripcion del modulo visible bajo el titulo."
        createLabel="Añadir item"
        onCreate={openCreateDialog}
      />

      <PageContent>
        {/* R5: estado error separado del DataTable */}
        {isError ? (
          <ModuleError
            title="No se pudieron cargar los items"
            error={error}
            onRetry={() => {
              void refetch()
            }}
          />
        ) : (
          // R5: estados loading + empty + success via DataTable
          <DataTable
            loading={isLoading}
            columns={columns}
            data={items}
            onRowClick={openRowDetails}
            empty={{
              icon: SomeIcon,
              title: "No se encontraron items",
              description: "Añade un item para verlo aquí.",
              onAction: openCreateDialog,
              actionLabel: "Añadir item",
            }}
          />
        )}
      </PageContent>

      {/* Dialogs fuera de PageContent — no afectan el layout */}
      <ItemFormOverlay open={dialogOpen} onOpenChange={setDialogOpen} />
      <ItemAlertDialog
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null)
        }}
        item={deleteTarget}
      />
    </Page>
  )
}
```

---

## 5. Decisiones pendientes de ratificacion

Estas decisiones estan implementadas con los defaults propuestos en este issue pero requieren ratificacion:

| #   | Pregunta                                     | Default implementado                                                        | Estado                  |
| --- | -------------------------------------------- | --------------------------------------------------------------------------- | ----------------------- |
| D1  | Ritmo vertical base                          | `space-y-2` (patron CRUD). Inicio baja a `space-y-2` en `issue-07`          | Ratificado |
| D2  | `ModuleHeader` para GitHub                   | Si — via `mediaSlot` opcional y `onCreate` opcional                         | Ratificado |
| D3  | Quitar `<h2>` redundante en tabs de Settings | Si — implementado en `issue-08` (2026-05-24)                                | Ratificado              |
| D4  | Split vs stack en Settings                   | Default `stack`; `split` solo consistente por tab — ejecucion en `issue-06` | Ratificado |

---

## 6. Lo que este contrato NO cubre

- Tokens de color y tipografia — ver `DESIGN.md`.
- Componentes de datos individuales (`DataTable`, `Item`, `Badge`) — ver componentes en `src/components/ui/`.
- Auth flow y rutas — ver `src/router/index.tsx`.
- Settings shell (tabs, `SettingsLayout`) — ver `issue-08`.
- Workspace page — ver `issue-06`.
- Inicio page — ver `issue-07`.
- GitHub page — ver `issue-05`.
