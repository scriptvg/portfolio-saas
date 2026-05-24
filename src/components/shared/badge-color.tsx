import { Badge } from "@/components/ui/badge"
import { Dot } from "@/components/ui/dot"

export function BadgeColor({ 
    color, 
    showLabel = true 
}: { 
    color: string 
    showLabel?: boolean 
}) {
    return (
        <Badge variant="outline" className="font-mono text-xs">
            <Dot
                variant="secondary"
                size="sm"
                style={{ backgroundColor: color }}
                effect="none"
                className="-ml-1"
            />
            <span className={showLabel ? "block" : "hidden"}>{color}</span>
        </Badge>
    )
}