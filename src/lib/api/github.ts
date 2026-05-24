import { apiRequest } from "@/lib/api/client"

export type GitHubProfileSnapshot = {
  login: string
  id: number
  name: string | null
  avatarUrl: string
  htmlUrl: string
  bio: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  publicRepos: number
  publicGists: number
  followers: number
  following: number
  createdAt: string
}

export type GitHubIntegrationPublic = {
  userId: string
  tokenPreview: string
  githubLogin: string
  githubId: number
  scopes: string
  profile: GitHubProfileSnapshot
  connectedAt: string
  lastSyncedAt: string
}

export type GitHubIntegrationStatus =
  | { connected: false }
  | { connected: true; integration: GitHubIntegrationPublic }

export type GitHubRepoSummary = {
  id: number
  name: string
  full_name: string
  owner: { login: string; avatar_url: string }
  private: boolean
  html_url: string
  description: string | null
  fork: boolean
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  archived: boolean
  topics: string[]
  default_branch: string
  pushed_at: string
  created_at: string
  updated_at: string
}

export type GitHubRepoDetails = {
  repo: GitHubRepoSummary
  languages: Record<string, number>
  topics: string[]
  matchedTechnologyIds: string[]
}

export type ListReposParams = {
  visibility?: "all" | "public" | "private"
  sort?: "created" | "updated" | "pushed" | "full_name"
  direction?: "asc" | "desc"
  perPage?: number
  page?: number
  search?: string
}

export type ImportRepoBody = {
  owner: string
  repo: string
  title?: string
  description?: string
  imageUrl?: string
  slug?: string
}

const BASE = "/integrations/github"

export function getGithubStatus(): Promise<GitHubIntegrationStatus> {
  return apiRequest({ url: `${BASE}/status`, method: "GET" })
}

export function connectGithub(
  token: string
): Promise<{ integration: GitHubIntegrationPublic }> {
  return apiRequest({
    url: `${BASE}/connect`,
    method: "POST",
    data: { token },
  })
}

export function disconnectGithub(): Promise<{ ok: true }> {
  return apiRequest({ url: `${BASE}/disconnect`, method: "DELETE" })
}

export function refreshGithubProfile(): Promise<{
  integration: GitHubIntegrationPublic
}> {
  return apiRequest({ url: `${BASE}/refresh`, method: "POST" })
}

export function listGithubRepos(
  params: ListReposParams = {}
): Promise<GitHubRepoSummary[]> {
  return apiRequest({
    url: `${BASE}/repos`,
    method: "GET",
    params,
  })
}

export function getGithubRepoDetails(
  owner: string,
  repo: string
): Promise<GitHubRepoDetails> {
  return apiRequest({
    url: `${BASE}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`,
    method: "GET",
  })
}

export function importGithubRepo(body: ImportRepoBody) {
  return apiRequest<{
    id: string
    slug: string
    title: string
  }>({
    url: `${BASE}/import-repo`,
    method: "POST",
    data: body,
  })
}

export type LinkRepoBody = {
  owner: string
  repo: string
  projectId: string
  overwriteTitle?: boolean
  overwriteDescription?: boolean
  overwriteImage?: boolean
  overwriteGithubUrl?: boolean
  overwriteLiveUrl?: boolean
  mergeTechnologies?: boolean
}

export function linkGithubRepo(body: LinkRepoBody) {
  return apiRequest<{
    id: string
    slug: string
    title: string
    githubFullName: string | null
  }>({
    url: `${BASE}/link-repo`,
    method: "POST",
    data: body,
  })
}
