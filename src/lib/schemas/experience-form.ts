import { z } from "zod"

import { EMPLOYMENT_TYPES } from "@/lib/api/experiences"

/** Alineado con el body de la API (`experienceBodySchema`). */
export const experienceFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "El título es obligatorio")
    .max(255, "Máximo 255 caracteres"),
  position: z
    .string()
    .trim()
    .min(1, "El puesto es obligatorio")
    .max(255, "Máximo 255 caracteres"),
  employmentType: z.enum(EMPLOYMENT_TYPES, {
    error: "Selecciona el tipo de empleo",
  }),
  company: z
    .string()
    .trim()
    .min(1, "La empresa es obligatoria")
    .max(255, "Máximo 255 caracteres"),
  period: z
    .string()
    .trim()
    .min(1, "El periodo es obligatorio")
    .max(255, "Máximo 255 caracteres"),
  description: z
    .string()
    .trim()
    .min(1, "La descripción es obligatoria")
    .max(2000, "Máximo 2000 caracteres"),
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

export type ExperienceFormValues = z.infer<typeof experienceFormSchema>

export const experienceFormDefaults: ExperienceFormValues = {
  title: "",
  position: "",
  employmentType: "full_time",
  company: "",
  period: "",
  description: "",
  sortOrder: 0,
  technologyIds: [],
}
