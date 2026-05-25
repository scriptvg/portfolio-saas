import { z } from "zod"

/** Alineado con el body de la API (`educationBodySchema`). */
export const educationFormSchema = z.object({
  institution: z
    .string()
    .trim()
    .min(1, "La institución es obligatoria")
    .max(255, "Máximo 255 caracteres"),
  degree: z
    .string()
    .trim()
    .min(1, "El título o grado es obligatorio")
    .max(255, "Máximo 255 caracteres"),
  fieldOfStudy: z
    .string()
    .trim()
    .max(255, "Máximo 255 caracteres")
    .optional()
    .or(z.literal("")),
  period: z
    .string()
    .trim()
    .min(1, "El periodo es obligatorio")
    .max(255, "Máximo 255 caracteres"),
  description: z
    .string()
    .trim()
    .max(2000, "Máximo 2000 caracteres")
    .optional()
    .or(z.literal("")),
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

export type EducationFormValues = z.infer<typeof educationFormSchema>

export const educationFormDefaults: EducationFormValues = {
  institution: "",
  degree: "",
  fieldOfStudy: "",
  period: "",
  description: "",
  sortOrder: 0,
  technologyIds: [],
}
