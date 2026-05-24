import { z } from "zod"

import type { ProjectBody } from "@/lib/api/projects"

const slugSchema = z
  .string()
  .trim()
  .min(1, "El slug es obligatorio")
  .max(64, "Máximo 64 caracteres")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Solo minúsculas, números y guiones (ej. mi-proyecto)"
  )

const optionalUrlSchema = z
  .string()
  .trim()
  .max(512, "Máximo 512 caracteres")
  .refine(
    (value) => value === "" || z.string().url().safeParse(value).success,
    "URL inválida"
  )

/** Alineado con `projectBodySchema` de la API. */
export const projectFormSchema = z.object({
  slug: slugSchema,
  title: z
    .string()
    .trim()
    .min(1, "El título es obligatorio")
    .max(255, "Máximo 255 caracteres"),
  description: z
    .string()
    .trim()
    .min(1, "La descripción es obligatoria")
    .max(2000, "Máximo 2000 caracteres"),
  imageUrl: z
    .string()
    .trim()
    .max(512, "Máximo 512 caracteres"),
  liveUrl: optionalUrlSchema,
  githubUrl: optionalUrlSchema,
  sortOrder: z
    .number({ error: "El orden es obligatorio" })
    .int("Debe ser un entero")
    .min(0, "Mínimo 0"),
  technologyIds: z.array(
    z
      .string()
      .min(1)
      .max(36)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  ),
})

export type ProjectFormValues = z.infer<typeof projectFormSchema>

export const projectFormDefaults: ProjectFormValues = {
  slug: "",
  title: "",
  description: "",
  imageUrl: "",
  liveUrl: "",
  githubUrl: "",
  sortOrder: 0,
  technologyIds: [],
}

export function projectFormValuesToBody(values: ProjectFormValues): ProjectBody {
  return {
    slug: values.slug,
    title: values.title,
    description: values.description,
    imageUrl: values.imageUrl,
    liveUrl: values.liveUrl || "",
    githubUrl: values.githubUrl || "",
    sortOrder: values.sortOrder,
    technologyIds: values.technologyIds,
  }
}
