import { NavLink } from "react-router-dom"
import {
  ArrowRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  FolderKanbanIcon,
  GraduationCapIcon,
  SettingsIcon,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useTechnologiesQuery } from "@/lib/queries/technologies"
import { useExperiencesQuery } from "@/lib/queries/experiences"
import { useEducationQuery } from "@/lib/queries/education"
import { useProjectsQuery } from "@/lib/queries/projects"
import { Page, PageContent, PageHeader } from "@/components/page"
import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Skeleton } from "@/components/ui/skeleton"

interface ModuleRow {
  to: string
  label: string
  hint: string
  icon: LucideIcon
  count: number | undefined
  loading: boolean
  error: boolean
}

export function DashboardHomePage() {
  const technologies = useTechnologiesQuery()
  const experiences = useExperiencesQuery()
  const education = useEducationQuery()
  const projects = useProjectsQuery()

  const rows: ModuleRow[] = [
    {
      to: "/dashboard/technologies",
      label: "Tecnologías",
      hint: "Catálogo referenciado por proyectos y experiencias",
      icon: BookOpenIcon,
      count: technologies.data?.length,
      loading: technologies.isPending,
      error: technologies.isError,
    },
    {
      to: "/dashboard/experiences",
      label: "Experiencias",
      hint: "Puestos, empresas y periodos del portfolio público",
      icon: BriefcaseIcon,
      count: experiences.data?.length,
      loading: experiences.isPending,
      error: experiences.isError,
    },
    {
      to: "/dashboard/education",
      label: "Educación",
      hint: "Titulaciones, instituciones y periodos del portfolio público",
      icon: GraduationCapIcon,
      count: education.data?.length,
      loading: education.isPending,
      error: education.isError,
    },
    {
      to: "/dashboard/projects",
      label: "Proyectos",
      hint: "Proyectos públicos con stack, links y descripción",
      icon: FolderKanbanIcon,
      count: projects.data?.length,
      loading: projects.isPending,
      error: projects.isError,
    },
    {
      to: "/dashboard/settings",
      label: "Configuración",
      hint: "Workspace, panel, datos personales e integraciones",
      icon: SettingsIcon,
      count: undefined,
      loading: false,
      error: false,
    },
  ]

  return (
    <Page className="space-y-2">
      <PageHeader>
        <h1 className="text-2xl font-semibold tracking-tight">Inicio</h1>
        <p className="text-sm text-muted-foreground">
          Resumen del panel. Selecciona un módulo para gestionar su contenido.
        </p>
      </PageHeader>

      <PageContent>
        <ItemGroup>
          {rows.map((row) => (
            <Item key={row.to} variant="outline" asChild>
              <NavLink to={row.to} className="group">
                <ItemMedia variant="icon">
                  <row.icon className="text-muted-foreground" />
                </ItemMedia>

                <ItemContent>
                  <ItemTitle>{row.label}</ItemTitle>
                  <ItemDescription>{row.hint}</ItemDescription>
                </ItemContent>

                <ItemActions>
                  <CountIndicator row={row} />
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  />
                </ItemActions>
              </NavLink>
            </Item>
          ))}
        </ItemGroup>
      </PageContent>
    </Page>
  )
}

function CountIndicator({ row }: { row: ModuleRow }) {
  if (row.loading) {
    return <Skeleton className="h-4 w-6" />
  }

  if (row.error) {
    return <Badge variant="destructive">error</Badge>
  }

  if (row.count === undefined) {
    return null
  }

  return (
    <Badge variant="outline" className={cn("font-mono text-xs tabular-nums")}>
      {row.count}
    </Badge>
  )
}
