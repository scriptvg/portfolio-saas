import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

const methodTone: Record<Method, string> = {
  GET: "text-green-500 dark:text-green-400",
  POST: "text-amber-500 dark:text-amber-400",
  PUT: "text-blue-500 dark:text-blue-400",
  PATCH: "text-yellow-500 dark:text-yellow-400",
  DELETE: "text-destructive dark:text-destructive-foreground",
}

export function EndpointBadge({
  endpoint,
  method,
  children
}: {
    endpoint: string
    method: Method
    children?: React.ReactNode
}) {
  return (
    <Badge
      variant="outline"
      className="gap-1.5 rounded-none px-1.5 py-0.5 font-mono text-xs"
    >
      <span className={cn("font-semibold", methodTone[method])}>{method}</span>
      <span className="text-muted-foreground">{endpoint}</span>
      {children}
    </Badge>
  )
}
