import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import type { ExperienceRow } from "@/lib/api/experiences"
import {
  EMPLOYMENT_TYPES,
  EMPLOYMENT_TYPE_LABELS,
} from "@/lib/api/experiences"
import { hasWriteAuthorization } from "@/lib/api/client"
import {
  experienceFormDefaults,
  experienceFormSchema,
  type ExperienceFormValues,
} from "@/lib/schemas/experience-form"
import {
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
} from "@/lib/queries/experiences"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"

import { DatePicker } from "./ui/date-picker"
import { format } from "date-fns"

export interface ExperienceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "create" | "edit"
  experience: ExperienceRow | null
}

export function ExperienceDialog({
  open,
  onOpenChange,
  mode,
  experience,
}: ExperienceDialogProps) {
  const isMobile = useIsMobile()

  const [overlayNode, setOverlayNode] = React.useState<HTMLDivElement | null>(
    null
  )

  const overlayRef = React.useCallback((node: HTMLDivElement | null) => {
    setOverlayNode(node)
  }, [])

  const createExperienceMutation = useCreateExperienceMutation()
  const updateExperienceMutation = useUpdateExperienceMutation()

  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: experienceFormDefaults,
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

    if (mode === "edit" && experience) {
      reset({
        title: experience.title,
        position: experience.position,
        employmentType: experience.employmentType,
        company: experience.company,
        period: experience.period,
        description: experience.description,
        sortOrder: experience.sortOrder,
        technologyIds: experience.technologies.map((tech) => tech.id),
      })
    } else {
      reset(experienceFormDefaults)
    }
  }, [open, mode, experience?.id, reset])

  function handleOpenChange(next: boolean) {
    if (!next) {
      reset(experienceFormDefaults)
    }

    onOpenChange(next)
  }

  const onValidSubmit = async (values: ExperienceFormValues) => {
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para guardar experiencias."
      )

      return
    }

    const body = {
      title: values.title,
      position: values.position,
      employmentType: values.employmentType,
      company: values.company,
      period: values.period,
      description: values.description,
      sortOrder: values.sortOrder,
      technologyIds: values.technologyIds,
    }

    try {
      if (mode === "edit") {
        if (!experience) {
          return
        }

        await updateExperienceMutation.mutateAsync({
          id: experience.id,
          body,
        })

        toast.success("Experiencia actualizada")
      } else {
        await createExperienceMutation.mutateAsync(body)

        toast.success("Experiencia creada")
      }

      reset(experienceFormDefaults)

      onOpenChange(false)
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Error al guardar"
      )
    }
  }

  const isSaving =
    createExperienceMutation.isPending || updateExperienceMutation.isPending

  const title = mode === "edit" ? "Editar experiencia" : "Añadir experiencia"

  const description =
    mode === "edit"
      ? "Edita la experiencia actual."
      : "Añade una nueva experiencia."

  const fields = (
    <FieldSet className="py-4">
      <FieldGroup>
        <Controller name="title" control={control} render={({ field, fieldState }) => (
          <Field data-invalid={errors.title ? "true" : undefined}>
            <FieldLabel htmlFor="exp-title">Título</FieldLabel>
            <FieldContent>
              <Input id="exp-title"
                aria-invalid={!!fieldState.invalid}
                className={fieldState.invalid ? "border-destructive" : undefined}
                autoComplete="off"
                {...field}
              />
              <FieldError errors={[fieldState.error ? { message: fieldState.error.message } : undefined]} />
            </FieldContent>
          </Field>
        )} />

        <Field data-invalid={errors.position ? "true" : undefined}>
          <FieldLabel htmlFor="exp-position">Puesto</FieldLabel>
          <FieldContent>
            <Input
              id="exp-position"
              aria-invalid={!!errors.position}
              className={errors.position ? "border-destructive" : undefined}
              autoComplete="off"
              placeholder="Ej: Junior Full Stack Developer"
              {...register("position")}
            />
            <FieldError errors={[errors.position]} />
          </FieldContent>
        </Field>

        <Controller
          name="employmentType"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid ? "true" : undefined}>
              <FieldLabel htmlFor="exp-employment-type">
                Tipo de empleo
              </FieldLabel>
              <FieldContent>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="exp-employment-type"
                    aria-invalid={!!fieldState.invalid}
                    className={
                      fieldState.invalid ? "border-destructive" : undefined
                    }
                  >
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {EMPLOYMENT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {EMPLOYMENT_TYPE_LABELS[type]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError
                  errors={[
                    fieldState.error
                      ? { message: fieldState.error.message }
                      : undefined,
                  ]}
                />
              </FieldContent>
            </Field>
          )}
        />

        <Field data-invalid={errors.company ? "true" : undefined}>
          <FieldLabel htmlFor="exp-company">Empresa</FieldLabel>
          <FieldContent>
            <Input
              id="exp-company"
              aria-invalid={!!errors.company}
              className={errors.company ? "border-destructive" : undefined}
              autoComplete="off"
              {...register("company")}
            />
            <FieldError errors={[errors.company]} />
          </FieldContent>
        </Field>

        <Controller
          name="period"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid ? "true" : undefined}>
              <FieldLabel>Periodo</FieldLabel>
              <FieldContent>
                <DatePicker
                  aria-invalid={!!fieldState.invalid}
                  numberOfMonths={isMobile ? 1 : 2}
                  portalContainer={overlayNode}
                  onChange={(range) => {
                    if (!range?.from) return field.onChange("")
                    const from = format(range.from, "MMM yyyy")
                    const to = range.to ? format(range.to, "MMM yyyy") : "Present"
                    field.onChange(`${from} - ${to}`)
                  }}
                />
                <FieldError errors={[fieldState.error ? { message: fieldState.error.message } : undefined]} />
              </FieldContent>
            </Field>
          )}
        />

        <Field data-invalid={errors.description ? "true" : undefined}>
          <FieldLabel htmlFor="exp-description">Descripción</FieldLabel>
          <FieldContent>
            <Textarea
              id="exp-description"
              rows={4}
              aria-invalid={!!errors.description}
              className={
                errors.description ? "border-destructive" : undefined
              }
              {...register("description")}
            />
            <FieldError errors={[errors.description]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.sortOrder ? "true" : undefined}>
          <FieldLabel htmlFor="exp-sort">Orden</FieldLabel>
          <FieldContent>
            <Input
              id="exp-sort"
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
          <FieldLabel htmlFor="exp-technologies">Tecnologías</FieldLabel>
          <FieldContent>
            <Controller
              name="technologyIds"
              control={control}
              render={({ field }) => (
                <TechnologyPicker
                  inputId="exp-technologies"
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
