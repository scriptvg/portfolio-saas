# Issues del roadmap

Cada archivo `issue-NN.md` es la **fuente de verdad** para un cambio planificado en `portfolio-saas`.

## Archivos

| Archivo | Propósito |
| --- | --- |
| `_template.md` | Plantilla para nuevos issues |
| `issue-01.md` | Rediseño Settings (Workspace + Team) |
| `issue-02.md` | Settings: Team tab, layout 2-columnas y audit a11y |
| `issue-03.md` | Limpieza de errores de lint repo-wide |
| `issue-04.md` | **Fundacional** — Contrato de layout de página (patrón visual único) |
| `issue-05.md` | GitHub: alinear al contrato (radio, header, estados) |
| `issue-06.md` | Settings/Workspace: consistencia split/stack |
| `issue-07.md` | Inicio: alinear header y spacing al contrato |
| `issue-08.md` | Settings shell (jerarquía h1/h2) + audit CRUD |
| `issue-09.md` | Cuadrar radios sueltos — alinear app al lenguaje squared |
| `issue-10.md` | Fundamentos IA — cliente Ollama, hook de streaming y asistente de texto |
| `references/` | Capturas y assets visuales del issue |

> **Tanda UI/UX (consistencia visual):** `issue-04` es fundacional y define el contrato de layout; `issue-05`–`09` se alinean a él. Orden sugerido: 04 → (05, 06, 07, 08, 09 en paralelo). `issue-09` (radios) es independiente del redibujo y puede ir en cualquier momento.
>
> **Lenguaje visual = cuadrado (`rounded-none`).** No introducir `rounded-*` salvo `rounded-full` en circulares. `DESIGN.md` describía radios redondeados por error; corregido el 2026-05-24 (ver `PAGE-LAYOUT.md` R4).

## Convenciones

- **ID:** `issue-01`, `issue-02`, … (cero-padding de 2 dígitos).
- **Estado:** `borrador` → `en progreso` → `en revisión` → `hecho`.
- **Skills:** rutas bajo `portfolio-saas/.agents/skills/`; contexto en `portfolio-saas/ai/context/`.
- **Agentes:** leer [`../../ai/AGENTS.md`](../../ai/AGENTS.md) y [`../AGENTS.md`](../AGENTS.md) antes de implementar.

## Referencias visuales

Colocar PNG/WebP en `references/` con nombres descriptivos:

```
references/
  settings-workspace.png
  settings-team-members.png
```

Enlazar desde el issue con rutas relativas: `references/settings-workspace.png`.

## Para agentes

1. Abrir el issue.
2. Seguir **Agentes y skills** y **Plan de implementación**.
3. Respetar **Fuera de alcance**.
4. Actualizar checkboxes al completar tareas.
