import { apiRequest, getApiBase } from "@/lib/api/client"
import { ApiClientError, isApiClientError } from "@/lib/api/errors"
import { getAccessToken } from "@/lib/api/storage"

export type ChatRole = "system" | "user" | "assistant" | "tool"

export interface ChatMessage {
  role: ChatRole
  content: string
}

export interface StreamChatOptions {
  model?: string
  temperature?: number
  maxTokens?: number
  signal?: AbortSignal
  /** Se invoca con cada fragmento incremental de texto. */
  onToken: (delta: string) => void
}

/** Fragmento del stream tal como lo emite el backend (`ChatStreamChunk`). */
interface ChatStreamChunk {
  delta: string
  done: boolean
}

const connectError =
  "No se pudo conectar con el motor de IA. ¿Está el servidor (y Ollama) en marcha?"

function parseSseBlock(block: string): { event?: string; data: string } {
  let event: string | undefined
  let data = ""
  for (const line of block.split("\n")) {
    if (line.startsWith("event:")) {
      event = line.slice(6).trim()
    } else if (line.startsWith("data:")) {
      data += line.slice(5).trim()
    }
  }
  return { event, data }
}

/**
 * Chat en streaming contra `POST /api/v1/ai/chat`.
 *
 * El endpoint responde **SSE** (excepción deliberada a la envoltura JSON), así
 * que se consume con `fetch` + `ReadableStream` — `EventSource` no sirve porque
 * no admite POST ni cabeceras (`Authorization`).
 *
 * NOTA: este `fetch` NO pasa por el interceptor de refresh de axios. Si el
 * access token expira a mitad, devuelve 401 sin auto-refresh; se traduce a un
 * `ApiClientError` con `statusCode: 401` para que la UI lo muestre.
 */
export async function streamChat(
  messages: ChatMessage[],
  { onToken, signal, ...opts }: StreamChatOptions
): Promise<void> {
  const token = getAccessToken()
  let res: Response
  try {
    res = await fetch(`${getApiBase()}/api/v1/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ messages, stream: true, ...opts }),
      credentials: "include",
      signal,
    })
  } catch (e) {
    if (e instanceof DOMException && e.name === "AbortError") {
      throw e
    }
    throw new ApiClientError(connectError)
  }

  if (!res.ok || !res.body) {
    let message = `Error HTTP ${res.status}`
    try {
      const body = (await res.json()) as { message?: string }
      if (body?.message) {
        message = body.message
      }
    } catch {
      // respuesta sin JSON; se mantiene el mensaje por defecto
    }
    throw new ApiClientError(message, res.status)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ""

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })

    let sep: number
    while ((sep = buffer.indexOf("\n\n")) !== -1) {
      const block = buffer.slice(0, sep)
      buffer = buffer.slice(sep + 2)
      if (!block.trim()) continue

      const { event, data } = parseSseBlock(block)
      if (event === "error") {
        const msg = safeJson<{ message?: string }>(data)?.message
        throw new ApiClientError(msg || "Error del motor de IA")
      }
      if (data === "[DONE]") {
        return
      }
      const chunk = safeJson<ChatStreamChunk>(data)
      if (chunk?.delta) {
        onToken(chunk.delta)
      }
    }
  }
}

function safeJson<T>(raw: string): T | null {
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export interface EmbedResponse {
  model: string
  embeddings: number[][]
}

/** Embeddings vía `POST /api/v1/ai/embeddings` (no streaming, envoltura normal). */
export function embed(
  input: string | string[],
  opts?: { model?: string }
): Promise<EmbedResponse> {
  return apiRequest<EmbedResponse>({
    method: "POST",
    url: "/ai/embeddings",
    data: { input, ...opts },
  })
}

/**
 * Comprueba si el proveedor de IA (Ollama) está disponible.
 * Devuelve `true` si `GET /ai/health` responde OK, `false` si falla.
 */
export async function isAiAvailable(): Promise<boolean> {
  try {
    // El health del proveedor está en `GET /api/v1/ai` (raíz del router de IA),
    // no en `/ai/health`. Devuelve 503 (success:false → throw) si Ollama no es
    // reachable.
    await apiRequest<unknown>({ method: "GET", url: "/ai" })
    return true
  } catch {
    return false
  }
}

/** Traduce un error de IA a un mensaje en español para la UI. */
export function resolveAiError(error: unknown): string {
  if (isApiClientError(error)) {
    if (error.statusCode === 429) {
      return "Demasiadas peticiones a la IA. Espera un momento y reintenta."
    }
    if (error.statusCode === 401 || error.statusCode === 403) {
      return "Tu sesión expiró. Recarga e inicia sesión de nuevo."
    }
    return error.message
  }
  return "Ocurrió un error inesperado con la IA. Inténtalo de nuevo."
}
