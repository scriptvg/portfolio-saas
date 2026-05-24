import * as React from "react"
import { NavLink } from "react-router-dom"
import { ChevronRightIcon, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export interface SidebarCollapsibleMenuProps {
  label: string
  icon: LucideIcon
  tooltip?: string
  isActive?: boolean
  /** Abre el collapsible al montar si la ruta está activa. */
  defaultOpen?: boolean
  /** Mantiene abierto el collapsible mientras `isActive` sea true. */
  openWhenActive?: boolean
  className?: string
  children: React.ReactNode
}

export function SidebarCollapsibleMenu({
  label,
  icon: Icon,
  tooltip,
  isActive = false,
  defaultOpen,
  openWhenActive = true,
  className,
  children,
}: SidebarCollapsibleMenuProps) {
  const [open, setOpen] = React.useState(defaultOpen ?? isActive)

  React.useEffect(() => {
    if (openWhenActive && isActive) {
      setOpen(true)
    }
  }, [isActive, openWhenActive])

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("group/collapsible", className)}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={tooltip ?? label} isActive={isActive}>
            <Icon />
            <span>{label}</span>
            <ChevronRightIcon className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>{children}</SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export interface SidebarCollapsibleSubLinkProps {
  to: string
  label: string
  isActive?: boolean
  end?: boolean
}

export function SidebarCollapsibleSubLink({
  to,
  label,
  isActive,
  end,
}: SidebarCollapsibleSubLinkProps) {
  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild isActive={isActive}>
        <NavLink to={to} end={end}>
          <span className="truncate">{label}</span>
        </NavLink>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  )
}

export function SidebarCollapsibleSubText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <SidebarMenuSubItem>
      <span
        className={cn(
          "px-2 py-1 text-xs text-muted-foreground",
          className
        )}
      >
        {children}
      </span>
    </SidebarMenuSubItem>
  )
}
