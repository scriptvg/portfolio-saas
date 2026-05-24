import * as React from "react"

import { fetchMe, signIn } from "@/lib/api/auth"
import { onSessionInvalidated } from "@/lib/api/client"
import {
  clearAccessToken,
  hasPersistedSession,
  setAccessToken,
} from "@/lib/api/storage"

import type { AuthUser } from "./types"

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  bootstrapping: boolean
  signInWithCredentials: (email: string, password: string) => Promise<void>
  signInWithToken: (token: string) => Promise<void>
  signOut: () => void
  refreshUser: () => Promise<void>
}

const AuthContext = React.createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null)
  const [bootstrapping, setBootstrapping] = React.useState(hasPersistedSession)

  const clearSession = React.useCallback(() => {
    clearAccessToken()
    setUser(null)
  }, [])

  React.useEffect(() => onSessionInvalidated(clearSession), [clearSession])

  React.useEffect(() => {
    if (!hasPersistedSession()) {
      setBootstrapping(false)
      return
    }

    fetchMe()
      .then(setUser)
      .catch(() => {
        clearSession()
      })
      .finally(() => {
        setBootstrapping(false)
      })
  }, [clearSession])

  const signInWithCredentials = React.useCallback(
    async (email: string, password: string) => {
      const { token, user: signedInUser } = await signIn(email, password)
      setAccessToken(token)
      setUser(signedInUser)
    },
    []
  )

  const signInWithToken = React.useCallback(async (token: string) => {
    setAccessToken(token)
    const me = await fetchMe()
    setUser(me)
  }, [])

  const signOut = React.useCallback(() => {
    clearSession()
  }, [clearSession])

  const refreshUser = React.useCallback(async () => {
    if (!hasPersistedSession()) {
      return
    }
    const me = await fetchMe()
    setUser(me)
  }, [])

  const value = React.useMemo(
    () => ({
      user,
      isAuthenticated: user !== null,
      bootstrapping,
      signInWithCredentials,
      signInWithToken,
      signOut,
      refreshUser,
    }),
    [
      user,
      bootstrapping,
      signInWithCredentials,
      signInWithToken,
      signOut,
      refreshUser,
    ]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = React.useContext(AuthContext)
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return ctx
}
