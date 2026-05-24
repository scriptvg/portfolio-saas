/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string | undefined
  readonly VITE_API_ADMIN_SECRET: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
