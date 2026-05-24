import { apiRequest } from "@/lib/api/client"

export type TechnologyRow = {
  id: string
  name: string
  icon: string
  color: string
  createdAt: string
  updatedAt: string
}

export async function listTechnologies(): Promise<TechnologyRow[]> {
  return apiRequest({
    method: "GET",
    url: "/technologies",
  })
}

export async function getTechnology(id: string): Promise<TechnologyRow> {
  return apiRequest({
    method: "GET",
    url: `/technologies/${id}`,
  })
}

export async function createTechnology(body: {
  name: string
  icon: string
  color: string
}): Promise<TechnologyRow> {
  return apiRequest({
    method: "POST",
    url: "/technologies",
    data: body,
  })
}

export async function replaceTechnology(
  id: string,
  body: { name: string; icon: string; color: string }
): Promise<TechnologyRow> {
  return apiRequest({
    method: "PUT",
    url: `/technologies/${id}`,
    data: body,
  })
}

export async function deleteTechnology(id: string): Promise<{ id: string }> {
  return apiRequest({
    method: "DELETE",
    url: `/technologies/${id}`,
  })
}
