import { Page, PageContent, PageHeader } from "@/components/page"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  SETTINGS_TABS,
  getActiveSettingsTab,
  getSettingsTab,
} from "@/features/settings/utils/settings-tabs"

import { Link, Outlet, useLocation } from "react-router-dom"

export function SettingsLayout() {
  const { pathname } = useLocation()
  const activeTab = getActiveSettingsTab(pathname)
  const active = getSettingsTab(activeTab)

  return (
    <Page className="w-full pb-2">
      <Tabs value={activeTab} className="flex flex-col">
        <PageHeader className="sticky top-[49px] z-10 space-y-4 bg-background pb-0">
          <p className="text-xs font-medium text-muted-foreground">
            Configuración ›
          </p>

          <ScrollArea className="w-full">
            <TabsList
              variant="line"
              className="h-10 w-max min-w-full justify-start rounded-none border-b bg-transparent p-0"
            >
              {SETTINGS_TABS.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  asChild
                  className="shrink-0 rounded-none px-3"
                >
                  <Link to={tab.segment}>{tab.label}</Link>
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </PageHeader>

        <PageContent className="pt-6 pb-8">
          <section className="space-y-8">
            <header className="space-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                {active?.label ?? "Configuración"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {active.description}
              </p>
            </header>

            <Outlet />
          </section>
        </PageContent>
      </Tabs>
    </Page>
  )
}
