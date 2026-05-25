import * as React from "react"
import { SparklesIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import type { ChatMessage } from "@/lib/api/ai"
import { useAiStream } from "@/hooks/use-ai-stream"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface AiAssistProps {
  /** Construye los mensajes a enviar al modelo según el valor/contexto actual. */
  buildMessages: () => ChatMessage[]
  /** Recibe el texto generado al pulsar «Aplicar». */
  onApply: (text: string) => void
  /** Texto del botón disparador. */
  label?: string
  /** Opciones de generación (model, temperature, maxTokens). */
  options?: { model?: string; temperature?: number; maxTokens?: number }
  disabled?: boolean
  className?: string
}

/**
 * Botón reutilizable de asistencia con IA sobre un campo de texto. Al abrirse
 * genera contenido en streaming y ofrece aplicar/descartar/regenerar. Respeta
 * el lenguaje cuadrado del SaaS (los primitivos ya son `rounded-none`).
 */
export function AiAssist({
  buildMessages,
  onApply,
  label = "Generar con IA",
  options,
  disabled,
  className,
}: AiAssistProps) {
  const [open, setOpen] = React.useState(false)
  const { text, isStreaming, error, start, cancel, reset } = useAiStream()

  const generate = React.useCallback(() => {
    void start(buildMessages(), options)
  }, [start, buildMessages, options])

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (next) {
      generate()
    } else {
      cancel()
      reset()
    }
  }

  function handleApply() {
    onApply(text)
    setOpen(false)
    cancel()
    reset()
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={disabled}
          className={cn("w-fit gap-1.5", className)}
        >
          <SparklesIcon className="size-3.5" />
          {label}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-80 space-y-3">
        <div className="max-h-60 min-h-16 overflow-y-auto text-sm whitespace-pre-wrap">
          {isStreaming && !text ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Spinner className="size-4" />
              Generando…
            </div>
          ) : error ? (
            <p className="text-sm text-destructive">{error}</p>
          ) : text ? (
            <span>
              {text}
              {isStreaming ? (
                <span className="ml-0.5 animate-pulse">▍</span>
              ) : null}
            </span>
          ) : (
            <p className="text-muted-foreground">Sin contenido todavía.</p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {isStreaming ? (
            <Button type="button" variant="ghost" size="sm" onClick={cancel}>
              Detener
            </Button>
          ) : (
            <Button type="button" variant="ghost" size="sm" onClick={generate}>
              Regenerar
            </Button>
          )}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleOpenChange(false)}
          >
            Descartar
          </Button>
          <Button
            type="button"
            size="sm"
            disabled={isStreaming || !text || Boolean(error)}
            onClick={handleApply}
          >
            Aplicar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
