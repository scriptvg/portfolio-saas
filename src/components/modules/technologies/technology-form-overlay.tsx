import * as React from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import type { TechnologyRow } from "@/lib/api/technologies"
import { hasWriteAuthorization } from "@/lib/api/client"
import {
  technologyFormDefaults,
  technologyFormSchema,
  type TechnologyFormValues,
} from "@/lib/schemas/technology-form"
import {
  TECHNOLOGY_ICON_GROUPS,
  TECHNOLOGY_ICON_MAP,
  resolveTechnologyIconId,
} from "@/lib/technology-icon-options"
import {
  useCreateTechnologyMutation,
  useUpdateTechnologyMutation,
} from "@/lib/queries/technologies"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { ColorInput } from "@/components/shared/color-input"


export interface TechnologyFormOverlayProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "create" | "edit"
  technology: TechnologyRow | null
}

export function TechnologyFormOverlay({
  open,
  onOpenChange,
  mode,
  technology,
}: TechnologyFormOverlayProps) {
  const isMobile = useIsMobile()
  const createTechnologyMutation = useCreateTechnologyMutation()
  const updateTechnologyMutation = useUpdateTechnologyMutation()

  const form = useForm<TechnologyFormValues>({
    resolver: zodResolver(technologyFormSchema),
    defaultValues: technologyFormDefaults,
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
    if (mode === "edit" && technology) {
      reset({
        name: technology.name,
        icon:
          resolveTechnologyIconId(technology.icon) ??
          technologyFormDefaults.icon,
        color: technology.color,
      })
    } else {
      reset(technologyFormDefaults)
    }
  }, [
    open,
    mode,
    technology?.id,
    technology?.name,
    technology?.icon,
    technology?.color,
    reset,
  ])

  function handleOpenChange(next: boolean) {
    if (!next) {
      reset(technologyFormDefaults)
    }
    onOpenChange(next)
  }

  const onValidSubmit = async (values: TechnologyFormValues) => {
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para guardar tecnologías."
      )
      return
    }

    try {
      if (mode === "edit") {
        if (!technology) {
          return
        }
        await updateTechnologyMutation.mutateAsync({
          id: technology.id,
          body: {
            name: values.name,
            icon: values.icon,
            color: values.color,
          },
        })
        toast.success("Tecnología actualizada")
      } else {
        await createTechnologyMutation.mutateAsync({
          name: values.name,
          icon: values.icon,
          color: values.color,
        })
        toast.success("Tecnología creada")
      }

      reset(technologyFormDefaults)
      onOpenChange(false)
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Error al guardar"
      )
    }
  }

  const isSaving =
    createTechnologyMutation.isPending || updateTechnologyMutation.isPending

  const title =
    mode === "edit" ? "Editar tecnología" : "Añadir tecnología"

  const description =
    mode === "edit" ? "Edita la tecnología actual." : "Añade una nueva tecnología."

  const fields = (
    <FieldSet className="py-4">
      <FieldGroup>
        <Field data-invalid={errors.name ? "true" : undefined}>
          <FieldLabel htmlFor="tech-name">Nombre</FieldLabel>
          <FieldContent>
            <Input
              id="tech-name"
              aria-invalid={!!errors.name}
              className={errors.name ? "border-destructive" : undefined}
              autoComplete="off"
              {...register("name")}
            />
            <FieldError errors={[errors.name]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.icon ? "true" : undefined}>
          <FieldLabel htmlFor="tech-icon">Icono</FieldLabel>
          <FieldContent>
            <Controller
              name="icon"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="tech-icon"
                    className={cn(
                      "h-9 w-full min-w-0 border-input bg-transparent shadow-xs dark:bg-input/30",
                      errors.icon &&
                      "border-destructive aria-invalid:ring-destructive/20"
                    )}
                    aria-invalid={!!errors.icon}
                  >
                    <SelectValue placeholder="Elige un icono" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    side="bottom"
                    className="max-h-72 min-w-[var(--radix-select-trigger-width)]"
                  >
                    {TECHNOLOGY_ICON_GROUPS.map(({ category, options }) => (
                      <SelectGroup key={category}>
                        <SelectLabel>{category}</SelectLabel>
                        {options.map(({ id, label }) => {
                          const Icon = TECHNOLOGY_ICON_MAP[id]
                          return (
                            <SelectItem key={id} value={id}>
                              <Icon className="size-4 shrink-0 text-foreground" />
                              <span>{label}</span>
                            </SelectItem>
                          )
                        })}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError errors={[errors.icon]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.color ? "true" : undefined}>
          <FieldLabel htmlFor="tech-color">Color</FieldLabel>
          <FieldContent>
            <Controller
              name="color"
              control={control}
              render={({ field }) => (
                <ColorInput
                  value={field.value ?? technologyFormDefaults.color}
                  onChange={field.onChange}
                  placeholder="#336699"
                />
              )}
            />
            <FieldError errors={[errors.color]} />
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
        <DrawerContent>
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
      <DialogContent>
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
