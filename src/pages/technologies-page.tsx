import * as React from "react"

import type { TechnologyRow } from "@/lib/api/technologies"
import { useTechnologiesQuery } from "@/lib/queries/technologies"

import { TechnologieAlertDialog } from "@/components/modules/technologies/technologie-alert-dialog"
import { TechnologyFormOverlay } from "@/components/modules/technologies/technology-form-overlay"
import { getTechnologyColumns } from "@/components/modules/technologies/columns"
import { technologyRowDetails } from "@/components/modules/technologies/technology-row-details"
import { ModuleError } from "@/components/shared/module-error"
import { Page, PageContent } from "@/components/page"
import { ModuleHeader } from "@/components/shared/module"
import { DataTable } from "@/components/ui/data-table"
import { ResponsiveDetails } from "@/components/ui/responsive-details"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

export function TechnologiesPage() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [dialogMode, setDialogMode] =
    React.useState<"create" | "edit">("create")
  const [selectedTechnology, setSelectedTechnology] =
    React.useState<TechnologyRow | null>(null)
  const [deleteTarget, setDeleteTarget] =
    React.useState<TechnologyRow | null>(null)
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [detailsRow, setDetailsRow] =
    React.useState<TechnologyRow | null>(null)

  const {
    data: technologies = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useTechnologiesQuery()

  const openCreateDialog = React.useCallback(() => {
    setDialogMode("create")
    setSelectedTechnology(null)
    setDialogOpen(true)
  }, [])

  const openEditDialog = React.useCallback((technology: TechnologyRow) => {
    setDialogMode("edit")
    setSelectedTechnology(technology)
    setDialogOpen(true)
  }, [])

  const openDeleteDialog = React.useCallback((technology: TechnologyRow) => {
    setDeleteTarget(technology)
  }, [])

  const openRowDetails = React.useCallback((technology: TechnologyRow) => {
    setDetailsRow(technology)
    setDetailsOpen(true)
  }, [])

  const closeRowDetails = React.useCallback(() => {
    setDetailsOpen(false)
    setDetailsRow(null)
  }, [])

  const columns = React.useMemo(
    () =>
      getTechnologyColumns({
        onEdit: openEditDialog,
        onDelete: openDeleteDialog,
      }),
    [openEditDialog, openDeleteDialog]
  )

  return (
    <Page className="space-y-2">
      <ModuleHeader
        title="Tecnologías"
        endpoint="/technologies"
        description="Mantén el catálogo de tecnologías que referencian proyectos y experiencias."
        createLabel="Añadir tecnología"
        onCreate={openCreateDialog}
      />

      <PageContent>
        {isError ? (
          <ModuleError
            title="No se pudieron cargar las tecnologías"
            error={error}
            onRetry={() => {
              void refetch()
            }}
          />
        ) : (

              <DataTable
                loading={isLoading}
                columns={columns}
                data={technologies}
                onRowClick={openRowDetails}
                empty={{
                  icon: XIcon,
                  title: "No se encontraron tecnologías",
                  description: "Añade una tecnología para verla aquí.",
                  onAction: openCreateDialog,
                  actionLabel: "Añadir tecnología",
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
          title={technologyRowDetails.title(detailsRow)}
          description={technologyRowDetails.description?.(detailsRow)}
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
          {technologyRowDetails.render(detailsRow)}
        </ResponsiveDetails>
      ) : null}

      <TechnologyFormOverlay
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open)
          if (!open) {
            setSelectedTechnology(null)
          }
        }}
        mode={dialogMode}
        technology={selectedTechnology}
      />

      <TechnologieAlertDialog
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) {
            setDeleteTarget(null)
          }
        }}
        technology={deleteTarget}
      />
    </Page>
  )
}
