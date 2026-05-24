import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  connectGithub,
  disconnectGithub,
  getGithubRepoDetails,
  getGithubStatus,
  importGithubRepo,
  linkGithubRepo,
  listGithubRepos,
  refreshGithubProfile,
  type ImportRepoBody,
  type LinkRepoBody,
  type ListReposParams,
} from "@/lib/api/github"
import { queryKeys } from "@/lib/query-keys"

export function useGithubStatusQuery() {
  return useQuery({
    queryKey: queryKeys.githubStatus,
    queryFn: () => getGithubStatus(),
  })
}

export function useGithubReposQuery(
  params: ListReposParams,
  enabled = true
) {
  return useQuery({
    queryKey: queryKeys.githubRepos(params),
    queryFn: () => listGithubRepos(params),
    enabled,
  })
}

export function useGithubRepoDetailsQuery(
  owner: string | null,
  repo: string | null
) {
  return useQuery({
    queryKey:
      owner && repo
        ? queryKeys.githubRepoDetails(owner, repo)
        : ["github", "repos", "disabled"],
    queryFn: () => getGithubRepoDetails(owner as string, repo as string),
    enabled: !!owner && !!repo,
  })
}

export function useConnectGithubMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (token: string) => connectGithub(token),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.githubStatus })
    },
  })
}

export function useDisconnectGithubMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => disconnectGithub(),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.githubStatus })
      void queryClient.invalidateQueries({ queryKey: ["github", "repos"] })
    },
  })
}

export function useRefreshGithubProfileMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => refreshGithubProfile(),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.githubStatus })
    },
  })
}

export function useImportGithubRepoMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: ImportRepoBody) => importGithubRepo(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.projects })
    },
  })
}

export function useLinkGithubRepoMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: LinkRepoBody) => linkGithubRepo(body),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.projects })
    },
  })
}
