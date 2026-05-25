---
id: issue-10
title: Fundamentos IA — cliente Ollama, hook de streaming y asistente de texto reutilizable
status: hecho
priority: media
type: feature
area: frontend-dashboard
register: product
route: "(transversal — campos de texto del dashboard)"
skills:
  - portfolio-saas/ai/context/PRODUCT.md
  - portfolio-saas/ai/context/DESIGN.md
  - portfolio-saas/.agents/skills/react-best-practices/SKILL.md
  - portfolio-saas/.agents/skills/shadcn/SKILL.md
  - portfolio-saas/.agents/skills/tailwind-v4-shadcn/SKILL.md
  - portfolio-saas/.agents/skills/composition-patterns/SKILL.md
impeccable_commands:
  - shape
  - craft
---

# Issue 10 — Fundamentos IA (cliente + hook + asistente de texto)

> Primer paso de la integración de Ollama en el saas. Construye la **base reutilizable** que habilita el resto de ideas (descripciones de proyecto, bio/SEO, reescritura, traducción). NO incluye tool-calling, embeddings persistidos ni chat de dashboard (issues futuros).

---

## Metadatos

| Campo | Valor |
| --- | --- |
| **ID** | `issue-10` |
| **Título** | Fundamentos IA — cliente + hook + asistente de texto |
| **Estado** | `hecho` |
| **Prioridad** | `media` |
| **Tipo** | `feature` |
| **Área** | Frontend — Dashboard (transversal) |
| **Ruta** | Campos de texto del dashboard (piloto: 1 superficie) |
| **Asignado** | _@usuario_ |
| **Fecha objetivo** | _YYYY-MM-DD_ |

---

## Resumen

**Problema:** El backend ya expone un motor IA (Ollama) en `/api/v1/ai/*` (chat con streaming SSE + tool-calling, embeddings, health), tras JWT y `aiLimiter` (20/min). El saas **no lo consume**.

**Resultado:** Una base reutilizable —cliente API, hook de streaming y un componente "✨ AI assist"— y su **integración en una (1) superficie piloto** para demostrarla. Con esto, futuras integraciones (descripción de proyecto, bio, SEO, traducción) se reducen a colocar el componente.

---

## Capacidades backend disponibles (no inventar otras)

| Endpoint | Uso |
| --- | --- |
| `POST /api/v1/ai/chat` | `{ messages[], model?, temperature?, maxTokens?, stream, tools? }`. Con `stream:true` → **SSE**. |
| `POST /api/v1/ai/embeddings` | `{ input: string \| string[], model? }`. |
| `GET /api/v1/ai/health` | Estado del proveedor (Ollama puede no estar arriba). |

Todos requieren JWT y caen bajo `aiLimiter` (20/min).

---

## Alcance

### En alcance (MVP)

- [ ] `src/lib/api/ai.ts`:
  - `streamChat(messages, opts, { onToken, signal })` — consume **SSE sobre POST con Bearer** vía `fetch` + `ReadableStream` (NO `EventSource`; no soporta POST/headers). Parsea `event: ... / data: {...}` y emite tokens.
  - `embed(input, opts)` — vía el `apiRequest`/axios existente (no streaming).
  - `getAiHealth()` — para deshabilitar la UI si Ollama no está disponible.
- [ ] Hook `src/hooks/use-ai-stream.ts` (o `src/features/ai/...`): expone `{ text, isStreaming, error, start(messages), cancel() }` con `AbortController`.
- [ ] Componente reutilizable "AI assist" (cuadrado, R4; copy en español): botón ✨ + acción(es) sobre un valor de texto (al menos "Generar/Mejorar"), con streaming visible y **Aplicar / Descartar**. Estados loading/empty/error completos. Accesible (aria, foco, teclado).
- [ ] **Integración piloto en UNA superficie** (elige la más representativa: descripción de proyecto en `ProjectDialog`, o bio del Workspace). NO cablear todas las superficies — eso es seguimiento.

### Fuera de alcance

- Tool-calling / function-calling.
- Embeddings persistidos / búsqueda semántica.
- Chat de dashboard.
- Cablear la IA en todas las superficies (solo el piloto).

---

## Riesgos y decisiones

| # | Tema | Decisión |
| --- | --- | --- |
| 1 | **SSE vs interceptor de refresh** | El `fetch` de streaming NO pasa por el interceptor axios → si el access token expira a mitad, da 401 sin auto-refresh. MVP: manejar el 401 con estado de error claro ("sesión expirada, reintenta"); como mejora, refrescar proactivamente antes de stream. No bloquear el MVP por esto. |
| 2 | Ollama caído | Usar `GET /ai/health` para deshabilitar el botón con tooltip si el proveedor no responde, en vez de fallar feo. |
| 3 | Rate limit (20/min) | Un 429 del `aiLimiter` debe mostrarse como "demasiadas peticiones, espera" (reutilizar el patrón de `resolveOAuthError`). |
| 4 | Superficie piloto | Una sola; el agente elige (proyecto o workspace) y lo justifica. |

---

## Criterios de aceptación

- [ ] `streamChat` muestra tokens en vivo en la superficie piloto.
- [ ] `Aplicar` vuelca el resultado al campo; `Descartar` lo cierra sin tocar el valor.
- [ ] Estados loading/empty/error (incl. 429 y Ollama caído) cubiertos.
- [ ] Lenguaje **cuadrado** (`rounded-none`), copy en español, accesible.
- [ ] `pnpm typecheck`, `pnpm lint` (sin errores nuevos), `pnpm test` pasan.
- [ ] Sin secretos en `VITE_*`. No rompe la envoltura `{success,message,statusCode,data}` (el chat es excepción SSE).
- [ ] Si tocas `components/ui/`: regla del espejo con web.

---

## Definición de hecho

- [ ] Criterios de aceptación completos.
- [ ] `status: hecho` en frontmatter.
- [ ] Demo de la superficie piloto (screenshot o gif) en el PR.
- [ ] Seguimiento listado: qué superficies adoptarán el componente después.
