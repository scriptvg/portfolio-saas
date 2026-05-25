import { apiRequest } from "@/lib/api/client"
import type { ExperienceTechnology } from "@/lib/api/experiences"

// Re-exportamos el tipo compartido para evitar duplicacion
export type { ExperienceTechnology }

export type EducationRow = {
  id: string
  institution: string
  degree: string
  fieldOfStudy: string | null
  period: string
  description: string | null
  sortOrder: number
  createdAt: string
  updatedAt: string
  technologies: ExperienceTechnology[]
}

export type EducationBody = {
  institution: string
  degree: string
  fieldOfStudy?: string
  period: string
  description?: string
  sortOrder?: number
  technologyIds: string[]
}

export async function listEducation(): Promise<EducationRow[]> {
  return apiRequest({ method: "GET", url: "/education" })
}

export async function createEducation(
  body: EducationBody
): Promise<EducationRow> {
  return apiRequest({ method: "POST", url: "/education", data: body })
}

export async function replaceEducation(
  id: string,
  body: EducationBody
): Promise<EducationRow> {
  return apiRequest({ method: "PUT", url: `/education/${id}`, data: body })
}

export async function deleteEducation(id: string): Promise<{ id: string }> {
  return apiRequest({ method: "DELETE", url: `/education/${id}` })
}
