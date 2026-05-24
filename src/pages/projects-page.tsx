import * as React from "react"
import { FolderKanbanIcon } from "lucide-react"

import type { ProjectRow } from "@/lib/api/projects"
import { useProjectsQuery } from "@/lib/queries/projects"

import { Page, PageContent } from "@/components/page"
import { ModuleHeader } from "@/components/shared/module"
import { DataTable } from "@/components/ui/data-table"
import { ResponsiveDetails } from "@/components/ui/responsive-details"
import { Button } from "@/components/ui/button"
import { getProjectColumns } from "@/components/modules/projects/columns"
import { projectRowDetails } from "@/components/modules/projects/project-row-details"
import { ProjectAlertDialog } from "@/components/modules/projects/project-alert-dialog"
import { ProjectDialog } from "@/components/modules/projects/project-dialog"
import { ModuleError } from "@/components/shared/module-error"

export function ProjectsPage() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [dialogMode, setDialogMode] = React.useState<"create" | "edit">("create")
  const [selectedProject, setSelectedProject] = React.useState<ProjectRow | null>(
    null
  )
  const [deleteTarget, setDeleteTarget] = React.useState<ProjectRow | null>(null)
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [detailsRow, setDetailsRow] = React.useState<ProjectRow | null>(null)

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useProjectsQuery()

  const sortedProjects = React.useMemo(
    () =>
      [...projects].sort((a, b) => {
        if (a.sortOrder !== b.sortOrder) {
          return a.sortOrder - b.sortOrder
        }
        return a.createdAt.localeCompare(b.createdAt)
      }),
    [projects]
  )

  const openCreateDialog = React.useCallback(() => {
    setDialogMode("create")
    setSelectedProject(null)
    setDialogOpen(true)
  }, [])

  const openEditDialog = React.useCallback((project: ProjectRow) => {
    setDialogMode("edit")
    setSelectedProject(project)
    setDialogOpen(true)
  }, [])

  const openDeleteDialog = React.useCallback((project: ProjectRow) => {
    setDeleteTarget(project)
  }, [])

  const openRowDetails = React.useCallback((project: ProjectRow) => {
    setDetailsRow(project)
    setDetailsOpen(true)
  }, [])

  const closeRowDetails = React.useCallback(() => {
    setDetailsOpen(false)
    setDetailsRow(null)
  }, [])

  const columns = React.useMemo(
    () =>
      getProjectColumns({
        onEdit: openEditDialog,
        onDelete: openDeleteDialog,
      }),
    [openEditDialog, openDeleteDialog]
  )

  return (
    <Page className="space-y-2">
      <ModuleHeader
        title="Proyectos"
        endpoint="/projects"
        description="Cataloga los proyectos públicos con su stack, links y descripción."
        createLabel="Añadir proyecto"
        onCreate={openCreateDialog}
      />

      <PageContent>
        {isError ? (
          <ModuleError
            title="No se pudieron cargar los proyectos"
            error={error}
            onRetry={() => {
              void refetch()
            }}
          />
        ) : (
          <DataTable
            loading={isLoading}
            columns={columns}
            data={sortedProjects}
            onRowClick={openRowDetails}
            empty={{
              icon: FolderKanbanIcon,
              title: "No se encontraron proyectos",
              description:
                "Añade un proyecto con imagen, enlaces y tecnologías del catálogo.",
              actionLabel: "Añadir proyecto",
              onAction: openCreateDialog,
            }}
          />
        )}
      </PageContent>

      {detailsRow ? (
        <ResponsiveDetails
          open={detailsOpen}
          onOpenChange={(open) => {
            setDetailsOpen(open)
            if (!open) {
              setDetailsRow(null)
            }
          }}
          title={projectRowDetails.title(detailsRow)}
          description={projectRowDetails.description?.(detailsRow)}
          footer={
            <Button
              variant="outline"
              onClick={() => {
                closeRowDetails()
                openEditDialog(detailsRow)
              }}
            >
              Editar
            </Button>
          }
        >
          {projectRowDetails.render(detailsRow)}
        </ResponsiveDetails>
      ) : null}

      <ProjectDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open)
          if (!open) {
            setSelectedProject(null)
          }
        }}
        mode={dialogMode}
        project={selectedProject}
      />

      <ProjectAlertDialog
        project={deleteTarget}
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) {
            setDeleteTarget(null)
          }
        }}
      />
    </Page>
  )
}
