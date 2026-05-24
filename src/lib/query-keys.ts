export const queryKeys = {
  technologies: ["technologies"] as const,
  technology: (id: string) => [...queryKeys.technologies, id] as const,
  experiences: ["experiences"] as const,
  experience: (id: string) => [...queryKeys.experiences, id] as const,
  projects: ["projects"] as const,
  project: (id: string) => [...queryKeys.projects, id] as const,
  webhooks: ["webhooks"] as const,
  webhookEvents: ["webhooks", "events"] as const,
  webhookDeliveries: (id: string) =>
    ["webhooks", id, "deliveries"] as const,
  githubStatus: ["github", "status"] as const,
  githubRepos: (params: Record<string, unknown> = {}) =>
    ["github", "repos", params] as const,
  githubRepoDetails: (owner: string, repo: string) =>
    ["github", "repos", owner, repo] as const,
}
