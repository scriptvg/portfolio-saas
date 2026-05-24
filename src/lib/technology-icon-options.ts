import type { IconType } from "react-icons"

import {
  SiAxios,
  SiCloudflare,
  SiCss,
  SiCypress,
  SiDocker,
  SiDrizzle,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLangchain,
  SiLaravel,
  SiLinux,
  SiMaterialdesign,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenai,
  SiPaypal,
  SiPhp,
  SiPostgresql,
  SiPnpm,
  SiPrettier,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSqlite,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiSage,
  SiOdoo,
  SiDjango,
  SiBootstrap,
  SiJquery,
  SiMoodle,
  SiReactrouter,
  SiReplit,
} from "react-icons/si"

import { LuBoxes, LuDatabase, LuBlocks } from "react-icons/lu"
/* import { TbBrandPlaywright } from "react-icons/tb" */

/**
 * IDs persistentes usados en DB y portfolio-web.
 */
export const TECHNOLOGY_ICON_IDS = [
  // Frontend
  "react",
  "nextjs",
  "vite",
  "typescript",
  "javascript",
  "html5",
  "css",
  "tailwind",
  "redux",
  "zustand",

  // UI
  "shadcn/ui",
  "radix-ui",
  "mui",
  "materialdesign",
  "framer-motion",
  "bootstrap",
  "jquery",
  "react-router",
  "base-ui",

  // Backend
  "nodejs",
  "express",
  "nestjs",
  "python",
  "django",
  "fastapi",
  "php",
  "laravel",

  // Database / ORM
  "postgresql",
  "mysql",
  "mongodb",
  "sqlite",
  "redis",
  "prisma",
  "drizzle",
  "supabase",
  "firebase",
  "sage",
  "sql",

  // Infra / DevOps
  "docker",
  "linux",
  "nginx",
  "github-actions",
  "vercel",
  "cloudflare",
  "replit",

  // Testing
  "jest",
  "vitest",
  "cypress",
/*   "playwright", */

  // APIs / AI
  "openai",
  "langchain",
  "graphql",
  "trpc",
  "axios",
  "stripe",
  "paypal",
  "jwt",
  "tanstack-query",
  "odoo",
  "moodle",
  // Tooling
  "git",
  "pnpm",
  "turborepo",
  "eslint",
  "prettier",
] as const

export type TechnologyIconId = (typeof TECHNOLOGY_ICON_IDS)[number]

export const TECHNOLOGY_ICON_IDS_TUPLE =
  TECHNOLOGY_ICON_IDS as unknown as [
    TechnologyIconId,
    ...TechnologyIconId[],
  ]

export const TECHNOLOGY_ICON_LABELS = {
  // Frontend
  react: "React",
  nextjs: "Next.js",
  vite: "Vite",
  typescript: "TypeScript",
  javascript: "JavaScript",
  html5: "HTML5",
  css: "CSS",
  tailwind: "Tailwind CSS",
  redux: "Redux",
  zustand: "Zustand",

  // UI
  "shadcn/ui": "shadcn/ui",
  "radix-ui": "Radix UI",
  mui: "MUI",
  materialdesign: "Material Design",
  "framer-motion": "Framer Motion",
  bootstrap: "Bootstrap",
  jquery: "jQuery",
  "react-router": "React Router",
  "base-ui": "Base UI",

  // Backend
  nodejs: "Node.js",
  express: "Express",
  nestjs: "NestJS",
  python: "Python",
  django: "Django",
  fastapi: "FastAPI",
  php: "PHP",
  laravel: "Laravel",

  // Database / ORM
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  mongodb: "MongoDB",
  sqlite: "SQLite",
  redis: "Redis",
  prisma: "Prisma",
  drizzle: "Drizzle ORM",
  supabase: "Supabase",
  firebase: "Firebase",
  sql: "SQL",

  // Infra / DevOps
  docker: "Docker",
  linux: "Linux",
  nginx: "Nginx",
  "github-actions": "GitHub Actions",
  vercel: "Vercel",
  cloudflare: "Cloudflare",
  replit: "Replit",

  // Testing
  jest: "Jest",
  vitest: "Vitest",
  cypress: "Cypress",
  /* playwright: "Playwright", */

  // APIs / AI
  openai: "OpenAI",
  langchain: "LangChain",
  graphql: "GraphQL",
  trpc: "tRPC",
  axios: "Axios",
  stripe: "Stripe",
  paypal: "PayPal",
  jwt: "JWT",
  "tanstack-query": "TanStack Query",
  sage: "Sage",
  odoo: "Odoo",
  moodle: "Moodle",
  // Tooling
  git: "Git",
  pnpm: "pnpm",
  turborepo: "Turborepo",
  eslint: "ESLint",
  prettier: "Prettier",
} satisfies Record<TechnologyIconId, string>

/**
 * Iconos cuyo logotipo oficial es blanco o negro y por tanto requieren
 * `currentColor` (que se adapta al tema claro/oscuro) en lugar del color
 * almacenado en BD. Mantener sincronizado con `portfolio-web`.
 */
export const MONOCHROME_TECHNOLOGY_ICON_IDS = new Set<TechnologyIconId>([
  "nextjs",
  "vercel",
  "openai",
  "shadcn/ui",
  "github-actions",
  "express",
  "framer-motion",
])

export function isMonochromeTechnologyIcon(id: TechnologyIconId): boolean {
  return MONOCHROME_TECHNOLOGY_ICON_IDS.has(id)
}

export const TECHNOLOGY_ICON_MAP = {
  // Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  vite: SiVite,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  zustand: LuBoxes,

  // UI
  "shadcn/ui": SiShadcnui,
  "radix-ui": SiRadixui,
  mui: SiMui,
  materialdesign: SiMaterialdesign,
  "framer-motion": SiFramer,
  bootstrap: SiBootstrap,
  jquery: SiJquery,
  "react-router": SiReactrouter,
  "base-ui": LuBlocks,

  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  python: SiPython,
  django: SiDjango,
  fastapi: SiFastapi,
  php: SiPhp,
  laravel: SiLaravel,

  // Database / ORM
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  redis: SiRedis,
  prisma: SiPrisma,
  drizzle: SiDrizzle,
  supabase: SiSupabase,
  firebase: SiFirebase,
  sql: LuDatabase,

  // Infra / DevOps
  docker: SiDocker,
  linux: SiLinux,
  nginx: SiNginx,
  "github-actions": SiGithubactions,
  vercel: SiVercel,
  cloudflare: SiCloudflare,
  replit: SiReplit,

  // Testing
  jest: SiJest,
  vitest: SiVitest,
  cypress: SiCypress,
  /* playwright: TbBrandPlaywright, */

  // APIs / AI
  openai: SiOpenai,
  langchain: SiLangchain,
  graphql: SiGraphql,
  trpc: SiTrpc,
  axios: SiAxios,
  stripe: SiStripe,
  paypal: SiPaypal,
  jwt: SiJsonwebtokens,
  "tanstack-query": SiReactquery,
  sage: SiSage,
  odoo: SiOdoo,
  moodle: SiMoodle,

  // Tooling
  git: SiGit,
  pnpm: SiPnpm,
  turborepo: SiTurborepo,
  eslint: SiEslint,
  prettier: SiPrettier,
} satisfies Record<TechnologyIconId, IconType>

export const TECHNOLOGY_ICON_OPTIONS: {
  id: TechnologyIconId
  label: string
}[] = TECHNOLOGY_ICON_IDS.map((id) => ({
  id,
  label: TECHNOLOGY_ICON_LABELS[id],
}))

export const TECHNOLOGY_ICON_GROUPS: {
  category: string
  options: { id: TechnologyIconId; label: string }[]
}[] = [
  {
    category: "Frontend",
    options: (
      [
        "react",
        "nextjs",
        "vite",
        "typescript",
        "javascript",
        "html5",
        "css",
        "tailwind",
        "redux",
        "zustand",
      ] as const
    ).map((id) => ({ id, label: TECHNOLOGY_ICON_LABELS[id] })),
  },
  {
    category: "UI",
    options: (
      [
        "shadcn/ui",
        "radix-ui",
        "mui",
        "materialdesign",
        "framer-motion",
        "bootstrap",
        "jquery",
        "react-router",
        "base-ui",
      ] as const
    ).map((id) => ({ id, label: TECHNOLOGY_ICON_LABELS[id] })),
  },
  {
    category: "Backend",
    options: (
      [
        "nodejs",
        "express",
        "nestjs",
        "python",
        "django",
        "fastapi",
        "php",
        "laravel",
      ] as const
    ).map((id) => ({ id, label: TECHNOLOGY_ICON_LABELS[id] })),
  },
  {
    category: "Database / ORM",
    options: (
      [
        "postgresql",
        "mysql",
        "mongodb",
        "sqlite",
        "redis",
        "prisma",
        "drizzle",
        "supabase",
        "firebase",
        "sage",
        "sql",
      ] as const
    ).map((id) => ({ id, label: TECHNOLOGY_ICON_LABELS[id] })),
  },
  {
    category: "Infra / DevOps",
    options: (
      [
        "docker",
        "linux",
        "nginx",
        "github-actions",
        "vercel",
        "cloudflare",
        "replit",
      ] as const
    ).map((id) => ({ id, label: TECHNOLOGY_ICON_LABELS[id] })),
  },
  {
    category: "Testing",
    options: (["jest", "vitest", "cypress"] as const).map((id) => ({
      id,
      label: TECHNOLOGY_ICON_LABELS[id],
    })),
  },
  {
    category: "APIs / AI",
    options: (
      [
        "openai",
        "langchain",
        "graphql",
        "trpc",
        "axios",
        "stripe",
        "paypal",
        "jwt",
        "tanstack-query",
        "odoo",
        "moodle",
      ] as const
    ).map((id) => ({ id, label: TECHNOLOGY_ICON_LABELS[id] })),
  },
  {
    category: "Tooling",
    options: (
      ["git", "pnpm", "turborepo", "eslint", "prettier"] as const
    ).map((id) => ({ id, label: TECHNOLOGY_ICON_LABELS[id] })),
  },
]

/**
 * Compatibilidad legacy.
 */
const LEGACY_ICON_KEYS: Record<string, TechnologyIconId> = {
  tailwindcss: "tailwind",
  nodedotjs: "nodejs",
  reactquery: "tanstack-query",
  jsonwebtokens: "jwt",
  radixui: "radix-ui",
  shadcnui: "shadcn/ui",
  database: "sql",
  baseui: "base-ui",
  reactrouter: "react-router",
}

export function resolveTechnologyIconId(
  stored: string
): TechnologyIconId | null {
  if ((TECHNOLOGY_ICON_IDS as readonly string[]).includes(stored)) {
    return stored as TechnologyIconId
  }

  return LEGACY_ICON_KEYS[stored] ?? null
}

export function getTechnologyIconComponent(
  icon: string
): IconType {
  const id = resolveTechnologyIconId(icon)

  return id
    ? TECHNOLOGY_ICON_MAP[id]
    : SiReact
}