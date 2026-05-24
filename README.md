# portfolio-saas

Dashboard privado del ecosistema **portfolio**. Permite al administrador crear/editar el contenido (proyectos, experiencias, tecnologías, workspace, settings) que después renderiza `portfolio-web`.

- **Framework:** Vite 7 + React 19.2.4
- **Routing:** React Router 7
- **Estilos:** Tailwind 4 + tw-animate-css
- **Componentes:** shadcn/ui (radix + base-ui), phosphor-icons, lucide-react
- **Formularios:** `react-hook-form` + `zod` (`@hookform/resolvers`)
- **Estado servidor:** `@tanstack/react-query` + `@tanstack/react-table`
- **HTTP:** `axios`

## Requisitos

- Node.js 20 LTS o 22 LTS
- pnpm 10.x
- `portfolio-api` corriendo (en local: `http://localhost:9000`)

## Quickstart

```bash
cp .env.example .env
pnpm install
pnpm dev          # http://localhost:5173
```

## Variables de entorno

```env
# Backend
VITE_API_URL=http://localhost:9000

# Opcional dev/scripts. NUNCA en producción — se bundlea al cliente.
# VITE_API_ADMIN_SECRET=
```

> Las `VITE_*` se bundlean al navegador. No metas secretos reales aquí.

## Scripts

| Script | Para qué |
|---|---|
| `pnpm dev` | Vite dev server :5173 |
| `pnpm build` | `tsc -b && vite build` → `dist/` |
| `pnpm preview` | sirve `dist/` para revisión local |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm format` | Prettier (escribe `**/*.{ts,tsx}`) |
| `pnpm format:check` | Prettier check sobre `src/` |
| `pnpm test` | Vitest una vuelta |
| `pnpm test:watch` | Vitest watch |
| `pnpm test:coverage` | cobertura V8 |
| `pnpm scrape:shadcnui-blocks` | scrape de bloques shadcn (script auxiliar) |
| `pnpm scrape:reui` | scrape de componentes reui (script auxiliar) |

## Estructura

```
portfolio-saas/
├── src/
│   ├── auth/                  estado y guards de auth
│   ├── pages/                 entry pages (mapeadas en router/)
│   │   └── auth/
│   ├── router/                config de React Router 7
│   ├── components/
│   │   ├── auth/              login / signup
│   │   ├── dashboard/         layout privado
│   │   ├── github/            integración con módulo github-integration del api
│   │   ├── modules/           CRUDs por dominio
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   └── technologies/
│   │   ├── shared/            transversales
│   │   └── ui/                shadcn/ui (duplicado con portfolio-web)
│   ├── features/
│   │   ├── app/{components,layout}/
│   │   └── settings/{api,components,hooks,layout,pages,types,utils}/
│   ├── hooks/                 hooks transversales
│   ├── lib/
│   │   ├── api/               cliente HTTP por dominio
│   │   ├── queries/           keys + helpers de react-query
│   │   └── schemas/           schemas zod
│   └── assets/
├── public/
├── index.html
├── vite.config.ts
└── components.json            config shadcn
```

## Autenticación

El dashboard usa JWT bearer. Flujo:

1. Usuario hace clic en "Login con GitHub/Google" o introduce email+password.
2. `portfolio-api` valida y emite un JWT (`JWT_SECRET`).
3. El dashboard lo guarda y lo envía en `Authorization: Bearer <token>` en cada request.

Ver el diagrama completo en [`../docs/architecture.md`](../docs/architecture.md) → Flujo de autenticación.

## Despliegue

Ver [`../docs/deployment.md`](../docs/deployment.md) — sección `portfolio-saas`. Build estático con SPA fallback.

## Notas

- Sin tests automatizados aún (ver deuda en `../docs/architecture.md`).
- Componentes `src/components/ui/` están duplicados con `portfolio-web/components/ui/`. Cualquier cambio debe replicarse en ambos.
- Hub de contexto IA: [`ai/AGENTS.md`](./ai/AGENTS.md).
