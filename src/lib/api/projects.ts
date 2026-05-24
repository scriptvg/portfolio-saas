import { apiRequest } from "@/lib/api/client"

export type ProjectTechnology = {
  id: string
  name: string
  icon: string
  color: string
}

export type ProjectRow = {
  id: string
  slug: string
  title: string
  description: string
  imageUrl: string
  liveUrl: string | null
  githubUrl: string | null
  sortOrder: number
  githubRepoId: number | null
  githubFullName: string | null
  createdAt: string
  updatedAt: string
  technologies: ProjectTechnology[]
}

export type ProjectBody = {
  slug: string
  title: string
  description: string
  imageUrl?: string
  liveUrl?: string | null
  githubUrl?: string | null
  sortOrder?: number
  technologyIds: string[]
}

export async function listProjects(): Promise<ProjectRow[]> {
  return apiRequest({ method: "GET", url: "/projects" })
}

export async function createProject(body: ProjectBody): Promise<ProjectRow> {
  return apiRequest({ method: "POST", url: "/projects", data: body })
}

export async function replaceProject(
  id: string,
  body: ProjectBody
): Promise<ProjectRow> {
  return apiRequest({ method: "PUT", url: `/projects/${id}`, data: body })
}

export async function deleteProject(id: string): Promise<{ id: string }> {
  return apiRequest({ method: "DELETE", url: `/projects/${id}` })
}

export const PROJECT_IMAGE_MAX_BYTES = 8 * 1024 * 1024
export const PROJECT_IMAGE_ACCEPT_MIMES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const

export async function uploadProjectImage(file: File): Promise<{ url: string }> {
  if (file.size > PROJECT_IMAGE_MAX_BYTES) {
    throw new Error("La imagen supera el tamaño máximo (8 MB).")
  }
  if (
    !PROJECT_IMAGE_ACCEPT_MIMES.includes(
      file.type as (typeof PROJECT_IMAGE_ACCEPT_MIMES)[number]
    )
  ) {
    throw new Error("Formato no permitido. Usa JPG, PNG, WebP o GIF.")
  }

  const formData = new FormData()
  formData.append("image", file)

  return apiRequest({
    method: "POST",
    url: "/projects/images",
    data: formData,
  })
}
