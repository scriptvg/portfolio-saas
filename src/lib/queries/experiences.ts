import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  createExperience,
  deleteExperience,
  listExperiences,
  replaceExperience,
  type ExperienceBody,
} from "@/lib/api/experiences"
import { queryKeys } from "@/lib/query-keys"

export function useExperiencesQuery() {
  return useQuery({
    queryKey: queryKeys.experiences,
    queryFn: () => listExperiences(),
  })
}

export function useCreateExperienceMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ExperienceBody) => createExperience(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.experiences })
    },
  })
}

export function useUpdateExperienceMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: { id: string; body: ExperienceBody }) =>
      replaceExperience(vars.id, vars.body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.experiences })
    },
  })
}

export function useDeleteExperienceMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: { id: string }) => deleteExperience(vars.id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.experiences })
    },
  })
}
