import { z } from "zod"

import { TECHNOLOGY_ICON_IDS_TUPLE } from "@/lib/technology-icon-options"

/** Alineado con el body de la API (`technologyBodySchema`). */
export const technologyFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .max(255, "Máximo 255 caracteres"),
  icon: z.enum(TECHNOLOGY_ICON_IDS_TUPLE, {
    error: "Elige un icono de la lista",
  }),
  color: z
    .string()
    .trim()
    .min(1, "El color es obligatorio")
    .max(255, "Máximo 255 caracteres"),
})

export type TechnologyFormValues = z.infer<typeof technologyFormSchema>

export const technologyFormDefaults: TechnologyFormValues = {
  name: "",
  icon: "react",
  color: "oklch(0.205 0 0)",
}
