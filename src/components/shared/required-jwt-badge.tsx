import { Badge } from "@/components/ui/badge"
import { LockIcon, LockOpenIcon } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function RequiredJwtBadge({
  isRequired = false,
}: {
  isRequired?: boolean
}) {
  return (
    <Tooltip>
      <TooltipTrigger >
        <Badge  variant="outline" className="px-1.5 py-0.5">
          {isRequired ? <LockOpenIcon /> : <LockIcon />}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isRequired ? "Public" : "Required"}</p>
      </TooltipContent>
    </Tooltip>
  )
}
