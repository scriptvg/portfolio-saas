import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  createTechnology,
  deleteTechnology,
  getTechnology,
  listTechnologies,
  replaceTechnology,
} from "@/lib/api/technologies"
import { queryKeys } from "@/lib/query-keys"

export function useTechnologiesQuery() {
  return useQuery({
    queryKey: queryKeys.technologies,
    queryFn: () => listTechnologies(),
  })
}

export function useTechnologyQuery(id: string) {
  return useQuery({
    queryKey: queryKeys.technology(id),
    queryFn: () => getTechnology(id),
  })
}

export function useCreateTechnologyMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: { name: string; icon: string; color: string }) =>
      createTechnology(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.technologies })
    },
  })
}

export function useUpdateTechnologyMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: {
      id: string
      body: { name: string; icon: string; color: string }
    }) => replaceTechnology(vars.id, vars.body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.technologies })
    },
  })
}

export function useDeleteTechnologyMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (vars: { id: string }) => deleteTechnology(vars.id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.technologies })
    },
  })
}
