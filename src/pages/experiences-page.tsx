import * as React from "react"
import { useLocation } from "react-router-dom"
import { BriefcaseIcon } from "lucide-react"

import type { ExperienceRow } from "@/lib/api/experiences"
import { useExperiencesQuery } from "@/lib/queries/experiences"

import { ExperienceDialog } from "@/components/experience-dialog"
import { ExperienceAlertDialog } from "@/components/experience-alert-dialog"
import { Page, PageContent } from "@/components/page"
import { DataTable } from "@/components/ui/data-table"
import { ResponsiveDetails } from "@/components/ui/responsive-details"
import { getExperienceColumns } from "@/components/modules/experience/columns"
import { experienceRowDetails } from "@/components/modules/experience/experience-row-details"
import { ModuleHeader } from "@/components/shared/module"
import { ModuleError } from "@/components/shared/module-error"
import { Button } from "@/components/ui/button"

export function ExperiencesPage() {
  const { hash } = useLocation()
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [dialogMode, setDialogMode] = React.useState<"create" | "edit">("create")
  const [editExperience, setEditExperience] =
    React.useState<ExperienceRow | null>(null)
  const [deleteTarget, setDeleteTarget] =
    React.useState<ExperienceRow | null>(null)
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [detailsRow, setDetailsRow] =
    React.useState<ExperienceRow | null>(null)

  const {
    data: rows = [],
    isPending,
    isError,
    error,
    refetch,
  } = useExperiencesQuery()

  const sortedRows = React.useMemo(
    () =>
      [...rows].sort((a, b) => {
        if (a.sortOrder !== b.sortOrder) {
          return a.sortOrder - b.sortOrder
        }
        return a.createdAt.localeCompare(b.createdAt)
      }),
    [rows]
  )

  React.useEffect(() => {
    if (!hash || isPending) {
      return
    }
    const target = document.querySelector(hash)
    target?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [hash, isPending, sortedRows.length])

  const openEditDialog = React.useCallback((experience: ExperienceRow) => {
    setDialogMode("edit")
    setEditExperience(experience)
    setDialogOpen(true)
  }, [])

  const openDeleteDialog = React.useCallback((experience: ExperienceRow) => {
    setDeleteTarget(experience)
  }, [])

  const openRowDetails = React.useCallback((experience: ExperienceRow) => {
    setDetailsRow(experience)
    setDetailsOpen(true)
  }, [])

  const closeRowDetails = React.useCallback(() => {
    setDetailsOpen(false)
    setDetailsRow(null)
  }, [])

  const columns = React.useMemo(
    () =>
      getExperienceColumns({
        onEdit: openEditDialog,
        onDelete: openDeleteDialog,
      }),
    [openEditDialog, openDeleteDialog]
  )

  return (
    <Page className="space-y-2">
      <ModuleHeader
        title="Experiencias"
        endpoint="/experiences"
        description="Registra puestos, empresas y periodos que aparecerán en el portfolio público."
        createLabel="Añadir experiencia"
        onCreate={() => {
          setDialogMode("create")
          setEditExperience(null)
          setDialogOpen(true)
        }}
      />

      <PageContent>
        {isError ? (
          <ModuleError
            title="No se pudieron cargar las experiencias"
            error={error}
            onRetry={() => {
              void refetch()
            }}
          />
        ) : (
          <DataTable
            loading={isPending}
            columns={columns}
            data={sortedRows}
            onRowClick={openRowDetails}
            empty={{
              icon: BriefcaseIcon,
              title: "No se encontraron experiencias",
              description:
                "Añade experiencias laborales o formativas y asígnales tecnologías del catálogo.",
              actionLabel: "Añadir experiencia",
              onAction: () => {
                setDialogMode("create")
                setEditExperience(null)
                setDialogOpen(true)
              },
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
          title={experienceRowDetails.title(detailsRow)}
          description={experienceRowDetails.description?.(detailsRow)}
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
          {experienceRowDetails.render(detailsRow)}
        </ResponsiveDetails>
      ) : null}

      <ExperienceDialog
        open={dialogOpen}
        onOpenChange={(nextOpen) => {
          setDialogOpen(nextOpen)
          if (!nextOpen) {
            setEditExperience(null)
          }
        }}
        mode={dialogMode}
        experience={editExperience}
      />

      <ExperienceAlertDialog
        experience={deleteTarget}
        open={deleteTarget !== null}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setDeleteTarget(null)
          }
        }}
      />
    </Page>
  )
}
