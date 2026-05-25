import type { ChatMessage } from "@/lib/api/ai"

/**
 * Prompts centralizados para las superficies con IA del dashboard.
 *
 * Cada builder devuelve los `ChatMessage[]` listos para `streamChat`. Mantener
 * los prompts aquí (y no inline en los componentes) facilita afinarlos,
 * versionarlos y reutilizarlos. Para una superficie nueva (descripción de
 * proyecto, experiencia, SEO, traducción…) añade su builder en este archivo.
 */

/** Normaliza un campo opcional para interpolar en el prompt sin "undefined". */
function field(value: string | undefined | null, fallback: string): string {
  const v = value?.trim()
  return v ? v : fallback
}

export interface BioPromptInput {
  publicName: string
  tagline: string
  bio: string
}

/**
 * Bio pública del portfolio (Workspace). Redacta o pule una bio breve a partir
 * del nombre y el rol del propietario.
 */
export function buildBioPrompt({
  publicName,
  tagline,
  bio,
}: BioPromptInput): ChatMessage[] {
  return [
    {
      role: "system",
      content: [
        "Eres un redactor profesional que escribe la biografía breve de un portfolio personal.",
        "Reglas estrictas:",
        "- Responde ÚNICAMENTE con el texto de la bio: sin comillas, sin encabezados, sin opciones ni explicaciones.",
        "- En español, tono profesional y cercano.",
        "- 1 o 2 frases, máximo ~280 caracteres.",
        "- Si la bio actual ya es buena, púlela; si está vacía, créala a partir del nombre y el rol.",
      ].join("\n"),
    },
    {
      role: "user",
      content: [
        `Nombre público: ${field(publicName, "(sin nombre)")}.`,
        `Rol/tagline: ${field(tagline, "(sin rol)")}.`,
        `Bio actual: ${field(bio, "(vacía)")}.`,
        "Redacta o mejora la bio siguiendo las reglas.",
      ].join(" "),
    },
  ]
}
