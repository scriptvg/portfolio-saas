import * as React from "react"

import {
  resolveAiError,
  streamChat,
  type ChatMessage,
  type StreamChatOptions,
} from "@/lib/api/ai"

type StreamOpts = Omit<StreamChatOptions, "onToken" | "signal">

export interface UseAiStream {
  /** Texto acumulado del stream en curso/último. */
  text: string
  isStreaming: boolean
  error: string | null
  /** Arranca un nuevo stream; cancela cualquiera anterior. */
  start: (messages: ChatMessage[], opts?: StreamOpts) => Promise<void>
  /** Cancela el stream en curso. */
  cancel: () => void
  /** Limpia texto y error (p. ej. al cerrar el panel). */
  reset: () => void
}

/**
 * Hook para consumir `streamChat` con estado de UI. Gestiona cancelación vía
 * `AbortController` y aborta al desmontar.
 */
export function useAiStream(): UseAiStream {
  const [text, setText] = React.useState("")
  const [isStreaming, setIsStreaming] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const abortRef = React.useRef<AbortController | null>(null)

  const start = React.useCallback(
    async (messages: ChatMessage[], opts?: StreamOpts) => {
      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller

      setText("")
      setError(null)
      setIsStreaming(true)

      try {
        await streamChat(messages, {
          ...opts,
          signal: controller.signal,
          onToken: (delta) => setText((prev) => prev + delta),
        })
      } catch (e) {
        if (controller.signal.aborted) {
          return
        }
        setError(resolveAiError(e))
      } finally {
        if (abortRef.current === controller) {
          setIsStreaming(false)
        }
      }
    },
    []
  )

  const cancel = React.useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    setIsStreaming(false)
  }, [])

  const reset = React.useCallback(() => {
    setText("")
    setError(null)
  }, [])

  React.useEffect(() => {
    return () => abortRef.current?.abort()
  }, [])

  return { text, isStreaming, error, start, cancel, reset }
}
