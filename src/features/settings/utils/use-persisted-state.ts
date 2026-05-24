import * as React from "react"

export function readStoredJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function writeStoredJson<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore quota / private mode
  }
}

export function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = React.useState<T>(() =>
    readStoredJson(key, initialValue)
  )

  const setPersisted = React.useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next
        writeStoredJson(key, resolved)
        return resolved
      })
    },
    [key]
  )

  return [value, setPersisted] as const
}
