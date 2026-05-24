if (!import.meta.env.VITE_API_URL) {
  throw new Error("VITE_API_URL is required")
}

export const env = {
  API_URL: import.meta.env.VITE_API_URL.replace(/\/$/, ""),
  ADMIN_SECRET: import.meta.env.VITE_API_ADMIN_SECRET,
}
