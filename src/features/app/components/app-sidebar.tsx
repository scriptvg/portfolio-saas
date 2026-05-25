import { useLocation } from "react-router-dom"
import { useAuth } from "@/auth/auth-context"

import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

import {
  SquareTerminalIcon,
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  FolderKanbanIcon,
  GraduationCapIcon,
  SettingsIcon,
} from "lucide-react"
import { SiGithub } from "react-icons/si"
import { NavUser } from "./nav-user"

export function AppSidebar() {
  const { pathname } = useLocation()
  const { user, signOut } = useAuth()
  const homeActive = pathname === "/dashboard" || pathname === "/dashboard/"
  const techActive = pathname.startsWith("/dashboard/technologies")
  const settingsActive = pathname.startsWith("/dashboard/settings")
  const experiencesActive = pathname.startsWith("/dashboard/experiences")
  const educationActive = pathname.startsWith("/dashboard/education")
  const projectsActive = pathname.startsWith("/dashboard/projects")
  const githubActive = pathname.startsWith("/dashboard/github")

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link to="/">
                <SquareTerminalIcon className="size-5!" />
                <span className="text-base font-semibold tracking-tight">
                  Portfolio admin
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Inicio"
                  isActive={homeActive}
                >
                  <NavLink to="/dashboard" end>
                    <HomeIcon />
                    <span>Inicio</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Tecnologías"
                  isActive={techActive}
                >
                  <NavLink to="/dashboard/technologies">
                    <BookOpenIcon />
                    <span>Tecnologías</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Experiencias"
                  isActive={experiencesActive}
                >
                  <NavLink to="/dashboard/experiences">
                    <BriefcaseIcon />
                    <span>Experiencias</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Educación"
                  isActive={educationActive}
                >
                  <NavLink to="/dashboard/education">
                    <GraduationCapIcon />
                    <span>Educación</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Proyectos"
                  isActive={projectsActive}
                >
                  <NavLink to="/dashboard/projects">
                    <FolderKanbanIcon />
                    <span>Proyectos</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="GitHub"
                  isActive={githubActive}
                >
                  <NavLink to="/dashboard/github">
                    <SiGithub />
                    <span>GitHub</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Configuración"
              isActive={settingsActive}
            >
              <NavLink to="/dashboard/settings">
                <SettingsIcon />
                <span>Configuración</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {user ? <NavUser user={user} signOut={signOut} /> : null}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
