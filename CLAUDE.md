---
title: Instrucciones para Claude — portfolio-saas
audience: claude
role: frontend
updated: 2026-05-22
---

# portfolio-saas — entrada para Claude

> **Lectura obligatoria al arrancar:**
> - `../CLAUDE.md` — protocolo cross-app entre los 3 agentes (backend, frontend, reviewer)
> - `../docs/conventions.md` — convenciones del ecosistema
> - `../docs/learnings.md` — errores recurrentes registrados por el reviewer (consulta antes de cada ticket)
> - `ai/AGENTS.md` — **hub canónico de contexto AI para este repo** (skills, roadmap, jerarquía de contexto)

**Empieza por [`ai/AGENTS.md`](./ai/AGENTS.md).** Allí está el flujo completo, las skills habilitadas, el roadmap de issues y las convenciones específicas de saas.

## Resumen rápido (no sustituye `ai/AGENTS.md`)

- **Stack:** Vite 7 + React 19 + React Router 7 + Tailwind 4 + Zod 4
- **Path alias:** `@/*` → `src/`
- **Auth:** JWT bearer en header `Authorization`
- **Idioma de copy de usuario:** español (salvo que el issue indique otro)

## Reglas que NO pueden romperse

1. **No tocar backend** ni `portfolio-web/`. Si una tarea exige cambios coordinados allí, lo señalo y dejo el cambio al otro agente.
2. **Sync con web:** si edito `src/components/ui/<algo>`, debo aplicar el mismo cambio en `portfolio-web/components/ui/<algo>` (regla del espejo, ver `../CLAUDE.md`). El reviewer marca `❌ bloqueante` si solo se toca uno.
3. **Sin secretos en `VITE_*`** — se bundlean al cliente.
4. **Sin cross-project tsconfig reference** a `portfolio-web` (ticket 010).
5. **Mantener code splitting por ruta** con `lazy()` + `Suspense` (ticket 008 ya implementado — no regresar a imports síncronos en `src/router/`).
6. **Conventional Commits**, branch `feat/<scope>-<nombre>` desde `master`, no mergear sin review aprobada.

## Antes de pedir review

- [ ] `pnpm typecheck` pasa
- [ ] `pnpm lint` pasa
- [ ] `pnpm format:check` pasa (CI ya corre `format:check` desde ticket 024 — no regresionar a `format`)
- [ ] Sin `console.log` en código de producción
- [ ] Sin secretos en `VITE_*`
- [ ] Si tocaste `components/ui/`: sincronizado con web
- [ ] Rutas nuevas con `lazy()` + `Suspense`
- [ ] Leíste `../docs/learnings.md`
