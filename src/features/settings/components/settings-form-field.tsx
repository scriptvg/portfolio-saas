import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type SettingsFormFieldProps = {
  label: string
  description?: string
  htmlFor?: string
  children: React.ReactNode
  className?: string
}

export function SettingsFormField({
  label,
  description,
  htmlFor,
  children,
  className,
}: SettingsFormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="space-y-1">
        <Label htmlFor={htmlFor}>{label}</Label>
        {description ? (
          <p className="text-xs/relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  )
}
