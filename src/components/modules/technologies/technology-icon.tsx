import {
  getTechnologyIconComponent,
  isMonochromeTechnologyIcon,
  resolveTechnologyIconId,
} from "@/lib/technology-icon-options"
import { cn } from "@/lib/utils"

export function TechnologyIcon({
  icon,
  className,
  color,
}: {
  icon: string
  className?: string
  /**
   * Color almacenado en BD. Solo se aplica a logos policromáticos.
   * Los monocromáticos (OpenAI, shadcn/ui, Next.js, Vercel, GitHub…)
   * heredan `currentColor` del padre para adaptarse al tema claro/oscuro.
   */
  color?: string
}) {
  const Icon = getTechnologyIconComponent(icon)
  const resolvedId = resolveTechnologyIconId(icon)
  const monochrome = resolvedId ? isMonochromeTechnologyIcon(resolvedId) : false

  return (
    <Icon
      aria-label={icon}
      style={monochrome ? undefined : { color }}
      className={cn("shrink-0", className)}
    />
  )
}
