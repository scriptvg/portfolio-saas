import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import type { EducationRow } from "@/lib/api/education"
import { hasWriteAuthorization } from "@/lib/api/client"
import {
  educationFormDefaults,
  educationFormSchema,
  type EducationFormValues,
} from "@/lib/schemas/education-form"
import {
  useCreateEducationMutation,
  useUpdateEducationMutation,
} from "@/lib/queries/education"
import { useIsMobile } from "@/hooks/use-mobile"
import { TechnologyPicker } from "@/components/shared/technology-picker"

import { Button } from "./ui/button"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"
import { Spinner } from "./ui/spinner"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export interface EducationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "create" | "edit"
  education: EducationRow | null
}

export function EducationDialog({
  open,
  onOpenChange,
  mode,
  education,
}: EducationDialogProps) {
  const isMobile = useIsMobile()

  const [overlayNode, setOverlayNode] = React.useState<HTMLDivElement | null>(
    null
  )

  const overlayRef = React.useCallback((node: HTMLDivElement | null) => {
    setOverlayNode(node)
  }, [])

  const createEducationMutation = useCreateEducationMutation()
  const updateEducationMutation = useUpdateEducationMutation()

  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: educationFormDefaults,
  })

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = form

  React.useEffect(() => {
    if (!open) {
      return
    }

    if (mode === "edit" && education) {
      reset({
        institution: education.institution,
        degree: education.degree,
        fieldOfStudy: education.fieldOfStudy ?? "",
        period: education.period,
        description: education.description ?? "",
        sortOrder: education.sortOrder,
        technologyIds: education.technologies.map((tech) => tech.id),
      })
    } else {
      reset(educationFormDefaults)
    }
  }, [open, mode, education?.id, reset])

  function handleOpenChange(next: boolean) {
    if (!next) {
      reset(educationFormDefaults)
    }

    onOpenChange(next)
  }

  const onValidSubmit = async (values: EducationFormValues) => {
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para guardar entradas de educación."
      )

      return
    }

    const body = {
      institution: values.institution,
      degree: values.degree,
      fieldOfStudy: values.fieldOfStudy || undefined,
      period: values.period,
      description: values.description || undefined,
      sortOrder: values.sortOrder,
      technologyIds: values.technologyIds,
    }

    try {
      if (mode === "edit") {
        if (!education) {
          return
        }

        await updateEducationMutation.mutateAsync({
          id: education.id,
          body,
        })

        toast.success("Educación actualizada")
      } else {
        await createEducationMutation.mutateAsync(body)

        toast.success("Educación creada")
      }

      reset(educationFormDefaults)

      onOpenChange(false)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al guardar")
    }
  }

  const isSaving =
    createEducationMutation.isPending || updateEducationMutation.isPending

  const title = mode === "edit" ? "Editar educación" : "Añadir educación"

  const description =
    mode === "edit"
      ? "Edita la entrada de educación actual."
      : "Añade una nueva entrada de educación."

  const fields = (
    <FieldSet className="py-4">
      <FieldGroup>
        <Field data-invalid={errors.institution ? "true" : undefined}>
          <FieldLabel htmlFor="edu-institution">Institución</FieldLabel>
          <FieldContent>
            <Input
              id="edu-institution"
              aria-invalid={!!errors.institution}
              className={errors.institution ? "border-destructive" : undefined}
              autoComplete="off"
              placeholder="Ej: Universidad Politécnica de Madrid"
              {...register("institution")}
            />
            <FieldError errors={[errors.institution]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.degree ? "true" : undefined}>
          <FieldLabel htmlFor="edu-degree">Título / Grado</FieldLabel>
          <FieldContent>
            <Input
              id="edu-degree"
              aria-invalid={!!errors.degree}
              className={errors.degree ? "border-destructive" : undefined}
              autoComplete="off"
              placeholder="Ej: Grado en Ingeniería Informática"
              {...register("degree")}
            />
            <FieldError errors={[errors.degree]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.fieldOfStudy ? "true" : undefined}>
          <FieldLabel htmlFor="edu-field-of-study">
            Campo de estudio{" "}
            <span className="text-xs text-muted-foreground">(opcional)</span>
          </FieldLabel>
          <FieldContent>
            <Input
              id="edu-field-of-study"
              aria-invalid={!!errors.fieldOfStudy}
              className={errors.fieldOfStudy ? "border-destructive" : undefined}
              autoComplete="off"
              placeholder="Ej: Desarrollo de software"
              {...register("fieldOfStudy")}
            />
            <FieldError errors={[errors.fieldOfStudy]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.period ? "true" : undefined}>
          <FieldLabel htmlFor="edu-period">Periodo</FieldLabel>
          <FieldContent>
            <Input
              id="edu-period"
              aria-invalid={!!errors.period}
              className={errors.period ? "border-destructive" : undefined}
              autoComplete="off"
              placeholder="Ej: Sep 2018 - Jun 2022"
              {...register("period")}
            />
            <FieldError errors={[errors.period]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.description ? "true" : undefined}>
          <FieldLabel htmlFor="edu-description">
            Descripción{" "}
            <span className="text-xs text-muted-foreground">(opcional)</span>
          </FieldLabel>
          <FieldContent>
            <Textarea
              id="edu-description"
              rows={4}
              aria-invalid={!!errors.description}
              className={errors.description ? "border-destructive" : undefined}
              {...register("description")}
            />
            <FieldError errors={[errors.description]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.sortOrder ? "true" : undefined}>
          <FieldLabel htmlFor="edu-sort">Orden</FieldLabel>
          <FieldContent>
            <Input
              id="edu-sort"
              type="number"
              min={0}
              step={1}
              aria-invalid={!!errors.sortOrder}
              className={errors.sortOrder ? "border-destructive" : undefined}
              {...register("sortOrder", { valueAsNumber: true })}
            />
            <FieldError errors={[errors.sortOrder]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.technologyIds ? "true" : undefined}>
          <FieldLabel htmlFor="edu-technologies">Tecnologías</FieldLabel>
          <FieldContent>
            <Controller
              name="technologyIds"
              control={control}
              render={({ field }) => (
                <TechnologyPicker
                  inputId="edu-technologies"
                  value={field.value}
                  onChange={field.onChange}
                  invalid={!!errors.technologyIds}
                  portalContainer={overlayNode}
                />
              )}
            />
            <FieldError errors={[errors.technologyIds]} />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  )

  const footer = (
    <>
      <Button
        type="button"
        variant="outline"
        disabled={isSaving}
        onClick={() => handleOpenChange(false)}
      >
        Cancelar
      </Button>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? <Spinner className="size-3.5" /> : null}
        {isSaving ? "Guardando…" : "Guardar"}
      </Button>
    </>
  )

  if (isMobile) {
    return (
      <Drawer direction="bottom" open={open} onOpenChange={handleOpenChange}>
        <DrawerContent ref={overlayRef}>
          <form
            className="flex min-h-0 flex-1 flex-col"
            onSubmit={handleSubmit(onValidSubmit)}
          >
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>{fields}</DrawerBody>
            <DrawerFooter>{footer}</DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent ref={overlayRef} size="lg">
        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={handleSubmit(onValidSubmit)}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <DialogBody>{fields}</DialogBody>
          <DialogFooter>{footer}</DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
