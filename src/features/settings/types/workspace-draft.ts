export type WorkspaceLink = {
  id: string
  label: string
  url: string
}

export type WorkspaceDraft = {
  publicName: string
  tagline: string
  bio: string
  avatarUrl: string
  slug: string
  status: "draft" | "published"
  links: WorkspaceLink[]
  metaTitle: string
  metaDescription: string
}

export const WORKSPACE_DRAFT_KEY = "portfolio-saas:workspace-draft"

export const DEFAULT_WORKSPACE_DRAFT: WorkspaceDraft = {
  publicName: "Allan Vélez",
  tagline: "Desarrollador full-stack",
  bio: "Portafolio web con proyectos, experiencias y tecnologías.",
  avatarUrl: "",
  slug: "allan-velez",
  status: "draft",
  links: [
    { id: "github", label: "GitHub", url: "https://github.com/scriptvg/Portafolio-Web" },
    { id: "web", label: "Sitio web", url: "https://cv-kromm.netlify.app/" },
  ],
  metaTitle: "Allan Vélez · Portfolio",
  metaDescription: "Portafolio web con proyectos y experiencia profesional.",
}

export const PUBLIC_SITE_URL =
  import.meta.env.VITE_PUBLIC_SITE_URL ?? "https://cv-kromm.netlify.app"
