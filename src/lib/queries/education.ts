import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  createEducation,
  deleteEducation,
  listEducation,
  replaceEducation,
  type EducationBody,
} from "@/lib/api/education"
import { queryKeys } from "@/lib/query-keys"

export function useEducationQuery() {
  return useQuery({
    queryKey: queryKeys.education,
    queryFn: () => listEducation(),
  })
}

export function useCreateEducationMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: EducationBody) => createEducation(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.education })
    },
  })
}

export function useUpdateEducationMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: { id: string; body: EducationBody }) =>
      replaceEducation(vars.id, vars.body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.education })
    },
  })
}

export function useDeleteEducationMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: { id: string }) => deleteEducation(vars.id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.education })
    },
  })
}
