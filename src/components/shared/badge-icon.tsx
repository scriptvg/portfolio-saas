import { Badge } from "@/components/ui/badge"
import { TechnologyIcon } from "@/components/modules/technologies/technology-icon"

export function BadgeIcon({ icon, color }: { icon: string, color: string }) {
    return (
        <Badge variant="outline" className="font-mono text-xs py-1 px-1 rounded-none">
            <TechnologyIcon icon={icon} color={color} className="size-3.5 shrink-0" />
            <span className="sr-only">{icon}</span>
        </Badge>
    )
}