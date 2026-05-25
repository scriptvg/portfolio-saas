import * as React from "react"
import { useLocation } from "react-router-dom"
import { GraduationCapIcon } from "lucide-react"

import type { EducationRow } from "@/lib/api/education"
import { useEducationQuery } from "@/lib/queries/education"

import { EducationDialog } from "@/components/education-dialog"
import { EducationAlertDialog } from "@/components/education-alert-dialog"
import { Page, PageContent } from "@/components/page"
import { DataTable } from "@/components/ui/data-table"
import { ResponsiveDetails } from "@/components/ui/responsive-details"
import { getEducationColumns } from "@/components/modules/education/columns"
import { educationRowDetails } from "@/components/modules/education/education-row-details"
import { ModuleHeader } from "@/components/shared/module"
import { ModuleError } from "@/components/shared/module-error"
import { Button } from "@/components/ui/button"

export function EducationPage() {
  const { hash } = useLocation()
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [dialogMode, setDialogMode] = React.useState<"create" | "edit">(
    "create"
  )
  const [editEducation, setEditEducation] = React.useState<EducationRow | null>(
    null
  )
  const [deleteTarget, setDeleteTarget] = React.useState<EducationRow | null>(
    null
  )
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [detailsRow, setDetailsRow] = React.useState<EducationRow | null>(null)

  const {
    data: rows = [],
    isPending,
    isError,
    error,
    refetch,
  } = useEducationQuery()

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

  const openEditDialog = React.useCallback((education: EducationRow) => {
    setDialogMode("edit")
    setEditEducation(education)
    setDialogOpen(true)
  }, [])

  const openDeleteDialog = React.useCallback((education: EducationRow) => {
    setDeleteTarget(education)
  }, [])

  const openRowDetails = React.useCallback((education: EducationRow) => {
    setDetailsRow(education)
    setDetailsOpen(true)
  }, [])

  const closeRowDetails = React.useCallback(() => {
    setDetailsOpen(false)
    setDetailsRow(null)
  }, [])

  const columns = React.useMemo(
    () =>
      getEducationColumns({
        onEdit: openEditDialog,
        onDelete: openDeleteDialog,
      }),
    [openEditDialog, openDeleteDialog]
  )

  return (
    <Page className="space-y-2">
      <ModuleHeader
        title="Educación"
        endpoint="/education"
        description="Registra titulaciones, instituciones y periodos que aparecerán en el portfolio público."
        createLabel="Añadir educación"
        onCreate={() => {
          setDialogMode("create")
          setEditEducation(null)
          setDialogOpen(true)
        }}
      />

      <PageContent>
        {isError ? (
          <ModuleError
            title="No se pudieron cargar las entradas de educación"
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
              icon: GraduationCapIcon,
              title: "No se encontraron entradas de educación",
              description:
                "Añade titulaciones o cursos y asígnales tecnologías del catálogo.",
              actionLabel: "Añadir educación",
              onAction: () => {
                setDialogMode("create")
                setEditEducation(null)
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
          title={educationRowDetails.title(detailsRow)}
          description={educationRowDetails.description?.(detailsRow)}
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
          {educationRowDetails.render(detailsRow)}
        </ResponsiveDetails>
      ) : null}

      <EducationDialog
        open={dialogOpen}
        onOpenChange={(nextOpen) => {
          setDialogOpen(nextOpen)
          if (!nextOpen) {
            setEditEducation(null)
          }
        }}
        mode={dialogMode}
        education={editEducation}
      />

      <EducationAlertDialog
        education={deleteTarget}
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
