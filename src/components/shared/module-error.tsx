import { AlertCircleIcon, RefreshCwIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface ModuleErrorProps {
  title: string
  error: unknown
  onRetry: () => void
}

export function ModuleError({ title, error, onRetry }: ModuleErrorProps) {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {error instanceof Error ? error.message : "Error desconocido"}
      </AlertDescription>
      <AlertAction>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onRetry}
          aria-label="Reintentar carga"
        >
          <RefreshCwIcon className="size-3.5" />
          Reintentar
        </Button>
      </AlertAction>
    </Alert>
  )
}
