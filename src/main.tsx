import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import App from "./App.tsx"
import "./index.css"
import { AuthProvider } from "@/auth/auth-context.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import {
  applyPanelLayout,
  DEFAULT_PANEL_PREFS,
  PANEL_PREFS_KEY,
} from "@/features/settings/types"
import { readStoredJson } from "@/features/settings/utils/use-persisted-state"
import { Toaster } from "@/components/ui/sonner.tsx"
import { TooltipProvider } from "@/components/ui/tooltip.tsx"

applyPanelLayout(
  readStoredJson(PANEL_PREFS_KEY, DEFAULT_PANEL_PREFS).layout
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
  },
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider delayDuration={0}>
          <AuthProvider>
            <App />
            <Toaster richColors position="top-center" />
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
