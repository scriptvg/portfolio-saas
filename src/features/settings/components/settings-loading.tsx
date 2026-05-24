import { Skeleton } from "@/components/ui/skeleton"

export function SettingsLoading() {
  return (
    <div className="space-y-8" aria-busy="true" aria-live="polite">
      {Array.from({ length: 2 }).map((_, sectionIdx) => (
        <section
          key={sectionIdx}
          className="space-y-3 border-b pb-6 last:border-b-0 last:pb-0"
        >
          <header className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-64" />
          </header>
          <div className="space-y-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </section>
      ))}
    </div>
  )
}
