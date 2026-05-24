import * as React from "react"
import { useLocation } from "react-router-dom"
import { BriefcaseIcon } from "lucide-react"

import { useExperiencesQuery } from "@/lib/queries/experiences"
import {
  SidebarCollapsibleMenu,
  SidebarCollapsibleSubLink,
  SidebarCollapsibleSubText,
} from "@/components/dashboard/sidebar-collapsible-menu"

export function ExperiencesSidebarMenu() {
  const { pathname, hash } = useLocation()
  const experiencesActive = pathname.startsWith("/dashboard/experiences")

  const { data: experiences = [], isPending } = useExperiencesQuery()

  const sortedExperiences = React.useMemo(
    () =>
      [...experiences].sort(
        (a, b) =>
          a.sortOrder - b.sortOrder ||
          a.title.localeCompare(b.title, "es")
      ),
    [experiences]
  )

  return (
    <SidebarCollapsibleMenu
      label="Experiencias"
      icon={BriefcaseIcon}
      isActive={experiencesActive}
      defaultOpen={experiencesActive}
    >
      <SidebarCollapsibleSubLink
        to="/dashboard/experiences"
        label="Todas"
        end
        isActive={experiencesActive && hash === ""}
      />

      {isPending ? (
        <SidebarCollapsibleSubText>Cargando…</SidebarCollapsibleSubText>
      ) : sortedExperiences.length === 0 ? (
        <SidebarCollapsibleSubText>Sin experiencias</SidebarCollapsibleSubText>
      ) : (
        sortedExperiences.map((experience) => {
          const experienceHash = `#exp-${experience.id}`

          return (
            <SidebarCollapsibleSubLink
              key={experience.id}
              to={`/dashboard/experiences${experienceHash}`}
              label={experience.title}
              isActive={hash === experienceHash}
            />
          )
        })
      )}
    </SidebarCollapsibleMenu>
  )
}
