import { lazy, Suspense } from "react"
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"

import { ProtectedRoute, RootRedirect } from "@/components/auth/protected-route"
import { Spinner } from "@/components/ui/spinner"
import { AppLayout } from "@/features/app/layout/app-layout"
import { AuthErrorPage } from "@/pages/auth-error-page"
import { AuthLinkedPage } from "@/pages/auth-linked-page"
import LoginPage from "@/pages/auth"
import { OAuthCallbackPage } from "@/pages/oauth-callback-page"
import { SettingsLayout } from "@/features/settings"

const DashboardHomePage = lazy(() =>
  import("@/pages/dashboard-home-page").then((m) => ({
    default: m.DashboardHomePage,
  }))
)
const TechnologiesPage = lazy(() =>
  import("@/pages/technologies-page").then((m) => ({
    default: m.TechnologiesPage,
  }))
)
const ExperiencesPage = lazy(() =>
  import("@/pages/experiences-page").then((m) => ({
    default: m.ExperiencesPage,
  }))
)
const ProjectsPage = lazy(() =>
  import("@/pages/projects-page").then((m) => ({ default: m.ProjectsPage }))
)
const GithubPage = lazy(() =>
  import("@/pages/github-page").then((m) => ({ default: m.GithubPage }))
)

const GeneralSettings = lazy(() =>
  import("@/features/settings").then((m) => ({ default: m.GeneralSettings }))
)
const WorkspaceSettings = lazy(() =>
  import("@/features/settings").then((m) => ({ default: m.WorkspaceSettings }))
)
const PrivacySettings = lazy(() =>
  import("@/features/settings").then((m) => ({ default: m.PrivacySettings }))
)
const NotificationsSettings = lazy(() =>
  import("@/features/settings").then((m) => ({
    default: m.NotificationsSettings,
  }))
)
const IntegrationsSettings = lazy(() =>
  import("@/features/settings").then((m) => ({
    default: m.IntegrationsSettings,
  }))
)
const TeamSettings = lazy(() =>
  import("@/features/settings").then((m) => ({ default: m.TeamSettings }))
)

function LoadingFallback() {
  return (
    <div className="flex h-full min-h-[50vh] items-center justify-center">
      <Spinner className="size-8 text-muted-foreground" />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/callback",
    element: <OAuthCallbackPage />,
  },
  {
    path: "/auth/linked",
    element: <AuthLinkedPage />,
  },
  {
    path: "/auth/error",
    element: <AuthErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <DashboardHomePage />,
          },
          {
            path: "technologies",
            element: <TechnologiesPage />,
          },
          {
            path: "experiences",
            element: <ExperiencesPage />,
          },
          {
            path: "projects",
            element: <ProjectsPage />,
          },
          {
            path: "github",
            element: <GithubPage />,
          },
          {
            path: "settings",
            element: <SettingsLayout />,
            children: [
              {
                index: true,
                element: <Navigate to="general" replace />,
              },
              {
                path: "general",
                element: <GeneralSettings />,
              },
              {
                path: "workspace",
                element: <WorkspaceSettings />,
              },
              {
                path: "privacy",
                element: <PrivacySettings />,
              },
              {
                path: "notifications",
                element: <NotificationsSettings />,
              },
              {
                path: "integrations",
                element: <IntegrationsSettings />,
              },
              {
                path: "team",
                element: <TeamSettings />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <RootRedirect />,
  },
])
