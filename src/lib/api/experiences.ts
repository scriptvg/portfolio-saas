import { apiRequest } from "@/lib/api/client"

export type ExperienceTechnology = {
  id: string
  name: string
  icon: string
  color: string
}

export const EMPLOYMENT_TYPES = [
  "full_time",
  "part_time",
  "internship",
  "contract",
  "freelance",
  "volunteer",
  "bootcamp",
] as const

export type EmploymentType = (typeof EMPLOYMENT_TYPES)[number]

export const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  full_time: "Tiempo completo",
  part_time: "Medio tiempo",
  internship: "Pasantía",
  contract: "Contrato",
  freelance: "Freelance",
  volunteer: "Voluntariado",
  bootcamp: "Bootcamp",
}

export type ExperienceRow = {
  id: string
  title: string
  position: string
  employmentType: EmploymentType
  company: string
  period: string
  description: string
  sortOrder: number
  createdAt: string
  updatedAt: string
  technologies: ExperienceTechnology[]
}

export type ExperienceBody = {
  title: string
  position: string
  employmentType: EmploymentType
  company: string
  period: string
  description: string
  sortOrder?: number
  technologyIds: string[]
}

export async function listExperiences(): Promise<ExperienceRow[]> {
  return apiRequest({ method: "GET", url: "/experiences" })
}

export async function createExperience(
  body: ExperienceBody
): Promise<ExperienceRow> {
  return apiRequest({ method: "POST", url: "/experiences", data: body })
}

export async function replaceExperience(
  id: string,
  body: ExperienceBody
): Promise<ExperienceRow> {
  return apiRequest({ method: "PUT", url: `/experiences/${id}`, data: body })
}

export async function deleteExperience(id: string): Promise<{ id: string }> {
  return apiRequest({ method: "DELETE", url: `/experiences/${id}` })
}
