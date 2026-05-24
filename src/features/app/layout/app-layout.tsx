import * as React from "react"
import { Outlet } from "react-router-dom"

import { useAuth } from "@/auth/auth-context"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { applyPanelLayout } from "@/features/settings/types"
import { useSettingsQuery } from "@/features/settings/hooks/use-settings-queries"

/* import { HeaderUserMenu } from "@/features/app/components/nav-user" */
import { AppSidebar } from "@/features/app/components/app-sidebar"

export function AppLayout() {
  const { user, /* signOut */ } = useAuth()
  const { data: settings } = useSettingsQuery(!!user)

  React.useEffect(() => {
    if (settings?.panel.layout) {
      applyPanelLayout(settings.panel.layout)
    }
  }, [settings?.panel.layout])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-[49px] shrink-0 items-center gap-2 border-b bg-sidebar transition-[width,height] duration-200 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[49px]">
          <SidebarTrigger
            className="ml-4 group-has-data-[collapsible=icon]/sidebar-wrapper:ml-2"
            size="icon-lg"
            aria-label="Alternar barra lateral"
          />
{/*           {user ? (
            <div className="mr-4 ml-auto">
              <HeaderUserMenu user={user} signOut={signOut} />
            </div>
          ) : null} */}
        </header>
        <div
          className={cn(
            "mb-2 flex min-w-0 flex-1 flex-col gap-4",
            settings?.panel.layout === "fixed" && "mx-auto w-full max-w-7xl"
          )}
        >
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
