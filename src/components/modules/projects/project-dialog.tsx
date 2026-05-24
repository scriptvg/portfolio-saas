import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { ImagePlusIcon, UploadCloudIcon, XIcon } from "lucide-react"

import {
  PROJECT_IMAGE_ACCEPT_MIMES,
  PROJECT_IMAGE_MAX_BYTES,
  uploadProjectImage,
  type ProjectRow,
} from "@/lib/api/projects"
import { hasWriteAuthorization } from "@/lib/api/client"
import {
  projectFormDefaults,
  projectFormSchema,
  projectFormValuesToBody,
  type ProjectFormValues,
} from "@/lib/schemas/project-form"
import {
  useCreateProjectMutation,
  useUpdateProjectMutation,
} from "@/lib/queries/projects"
import { slugify } from "@/lib/slug"
import { useIsMobile } from "@/hooks/use-mobile"
import { TechnologyPicker } from "@/components/shared/technology-picker"

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
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"

export interface ProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "create" | "edit"
  project: ProjectRow | null
}

export function ProjectDialog({
  open,
  onOpenChange,
  mode,
  project,
}: ProjectDialogProps) {
  const isMobile = useIsMobile()
  const slugTouchedRef = React.useRef(false)

  const [overlayNode, setOverlayNode] = React.useState<HTMLDivElement | null>(
    null
  )
  const overlayRef = React.useCallback((node: HTMLDivElement | null) => {
    setOverlayNode(node)
  }, [])

  const createProjectMutation = useCreateProjectMutation()
  const updateProjectMutation = useUpdateProjectMutation()

  const imageInputRef = React.useRef<HTMLInputElement>(null)
  const [imageUploading, setImageUploading] = React.useState(false)
  const [imageUrlOpen, setImageUrlOpen] = React.useState(false)

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: projectFormDefaults,
  })

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = form

  const imageUrl = watch("imageUrl")

  React.useEffect(() => {
    if (!open) {
      slugTouchedRef.current = false
      setImageUrlOpen(false)
      return
    }

    if (mode === "edit" && project) {
      reset({
        slug: project.slug,
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        liveUrl: project.liveUrl ?? "",
        githubUrl: project.githubUrl ?? "",
        sortOrder: project.sortOrder,
        technologyIds: project.technologies.map((tech) => tech.id),
      })
      slugTouchedRef.current = true
    } else {
      reset(projectFormDefaults)
      slugTouchedRef.current = false
    }
  }, [open, mode, project?.id, reset])

  async function handleImageFile(file: File | null | undefined) {
    if (!file) return
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para subir imágenes."
      )
      return
    }
    if (file.size > PROJECT_IMAGE_MAX_BYTES) {
      toast.error("La imagen supera 8 MB. Comprime o elige otra.")
      return
    }
    if (
      !PROJECT_IMAGE_ACCEPT_MIMES.includes(
        file.type as (typeof PROJECT_IMAGE_ACCEPT_MIMES)[number]
      )
    ) {
      toast.error("Formato no permitido. Usa JPG, PNG, WebP o GIF.")
      return
    }
    setImageUploading(true)
    try {
      const { url } = await uploadProjectImage(file)
      setValue("imageUrl", url, { shouldValidate: true })
      toast.success("Imagen subida")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo subir la imagen")
    } finally {
      setImageUploading(false)
    }
  }

  function handleOpenChange(next: boolean) {
    if (!next) {
      reset(projectFormDefaults)
      slugTouchedRef.current = false
    }
    onOpenChange(next)
  }

  const onValidSubmit = async (values: ProjectFormValues) => {
    if (!hasWriteAuthorization()) {
      toast.error(
        "Inicia sesión en el panel o define VITE_API_ADMIN_SECRET (igual que API_ADMIN_SECRET) para guardar proyectos."
      )
      return
    }

    const body = projectFormValuesToBody(values)

    try {
      if (mode === "edit") {
        if (!project) {
          return
        }
        await updateProjectMutation.mutateAsync({ id: project.id, body })
        toast.success("Proyecto actualizado")
      } else {
        await createProjectMutation.mutateAsync(body)
        toast.success("Proyecto creado")
      }
      reset(projectFormDefaults)
      slugTouchedRef.current = false
      onOpenChange(false)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al guardar")
    }
  }

  const isSaving =
    createProjectMutation.isPending || updateProjectMutation.isPending

  const title = mode === "edit" ? "Editar proyecto" : "Añadir proyecto"
  const description =
    mode === "edit"
      ? "Actualiza los datos del proyecto."
      : "Añade un proyecto al portfolio público."

  const fields = (
    <FieldSet className="py-4">
      <FieldGroup>
        <Field data-invalid={errors.title ? "true" : undefined}>
          <FieldLabel htmlFor="project-title">Título</FieldLabel>
          <FieldContent>
            <Input
              id="project-title"
              autoComplete="off"
              aria-invalid={!!errors.title}
              className={errors.title ? "border-destructive" : undefined}
              {...register("title", {
                onChange: (event) => {
                  if (mode === "create" && !slugTouchedRef.current) {
                    setValue("slug", slugify(event.target.value), {
                      shouldValidate: true,
                    })
                  }
                },
              })}
            />
            <FieldError errors={[errors.title]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.slug ? "true" : undefined}>
          <FieldLabel htmlFor="project-slug">Slug</FieldLabel>
          <FieldContent>
            <Input
              id="project-slug"
              className={`font-mono ${errors.slug ? "border-destructive" : ""}`}
              aria-invalid={!!errors.slug}
              autoComplete="off"
              {...register("slug", {
                onChange: () => {
                  slugTouchedRef.current = true
                },
              })}
            />
            <FieldError errors={[errors.slug]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.description ? "true" : undefined}>
          <FieldLabel htmlFor="project-description">Descripción</FieldLabel>
          <FieldContent>
            <Textarea
              id="project-description"
              rows={4}
              aria-invalid={!!errors.description}
              className={errors.description ? "border-destructive" : undefined}
              {...register("description")}
            />
            <FieldError errors={[errors.description]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.imageUrl ? "true" : undefined}>
          <FieldLabel htmlFor="project-image-file">
            Imagen del proyecto
          </FieldLabel>
          <FieldContent>
            <input
              ref={imageInputRef}
              id="project-image-file"
              type="file"
              accept={PROJECT_IMAGE_ACCEPT_MIMES.join(",")}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                void handleImageFile(file)
                if (imageInputRef.current) {
                  imageInputRef.current.value = ""
                }
              }}
            />
            <div className="flex items-start gap-3">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt=""
                  className="size-20 shrink-0 rounded-none border object-cover"
                />
              ) : (
                <div className="flex size-20 shrink-0 items-center justify-center rounded-none border border-dashed text-muted-foreground">
                  <ImagePlusIcon className="size-5" />
                </div>
              )}
              <div className="flex flex-1 flex-wrap items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => imageInputRef.current?.click()}
                  disabled={imageUploading}
                >
                  {imageUploading ? (
                    <Spinner className="size-4" />
                  ) : imageUrl ? (
                    <UploadCloudIcon className="size-4" />
                  ) : (
                    <ImagePlusIcon className="size-4" />
                  )}
                  {imageUrl ? "Cambiar imagen" : "Subir imagen"}
                </Button>
                {imageUrl ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setValue("imageUrl", "", { shouldValidate: true })
                    }
                    disabled={imageUploading}
                  >
                    <XIcon className="size-4" />
                    Quitar
                  </Button>
                ) : null}
                <span className="basis-full text-xs text-muted-foreground">
                  JPG, PNG, WebP o GIF. Máximo 8 MB.
                </span>
              </div>
            </div>
            <div className="mt-2">
              {imageUrlOpen ? (
                <div className="space-y-1">
                  <Input
                    id="project-image"
                    type="url"
                    placeholder="https://…"
                    aria-invalid={!!errors.imageUrl}
                    className={
                      errors.imageUrl ? "border-destructive" : undefined
                    }
                    {...register("imageUrl")}
                  />
                  <button
                    type="button"
                    className="text-xs text-muted-foreground hover:underline"
                    onClick={() => setImageUrlOpen(false)}
                  >
                    Ocultar URL
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:underline"
                  onClick={() => setImageUrlOpen(true)}
                >
                  ¿Prefieres pegar una URL? (opcional)
                </button>
              )}
            </div>
            <FieldError errors={[errors.imageUrl]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.liveUrl ? "true" : undefined}>
          <FieldLabel htmlFor="project-live">URL en vivo (opcional)</FieldLabel>
          <FieldContent>
            <Input
              id="project-live"
              type="url"
              placeholder="https://…"
              aria-invalid={!!errors.liveUrl}
              className={errors.liveUrl ? "border-destructive" : undefined}
              {...register("liveUrl")}
            />
            <FieldError errors={[errors.liveUrl]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.githubUrl ? "true" : undefined}>
          <FieldLabel htmlFor="project-github">GitHub (opcional)</FieldLabel>
          <FieldContent>
            <Input
              id="project-github"
              type="url"
              placeholder="https://github.com/…"
              aria-invalid={!!errors.githubUrl}
              className={errors.githubUrl ? "border-destructive" : undefined}
              {...register("githubUrl")}
            />
            <FieldError errors={[errors.githubUrl]} />
          </FieldContent>
        </Field>

        <Field data-invalid={errors.sortOrder ? "true" : undefined}>
          <FieldLabel htmlFor="project-sort">Orden</FieldLabel>
          <FieldContent>
            <Input
              id="project-sort"
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
          <FieldLabel htmlFor="project-technologies">Tecnologías</FieldLabel>
          <FieldContent>
            <Controller
              name="technologyIds"
              control={control}
              render={({ field }) => (
                <TechnologyPicker
                  inputId="project-technologies"
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
      <DialogContent ref={overlayRef} size="xl">
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
