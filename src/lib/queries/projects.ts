import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  createProject,
  deleteProject,
  listProjects,
  replaceProject,
  type ProjectBody,
} from "@/lib/api/projects"
import { queryKeys } from "@/lib/query-keys"

export function useProjectsQuery() {
  return useQuery({
    queryKey: queryKeys.projects,
    queryFn: () => listProjects(),
  })
}

export function useCreateProjectMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ProjectBody) => createProject(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.projects })
    },
  })
}

export function useUpdateProjectMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: { id: string; body: ProjectBody }) =>
      replaceProject(vars.id, vars.body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.projects })
    },
  })
}

export function useDeleteProjectMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: { id: string }) => deleteProject(vars.id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.projects })
    },
  })
}
