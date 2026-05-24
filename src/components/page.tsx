import { cn } from "@/lib/utils"
import type React from "react"

function Page({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />
}

function PageHeader({ className, ...props }: React.ComponentProps<"header">) {
  return <header className={cn("space-y-1 p-4 md:p-6", className)} {...props} />
}

function PageContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-2 px-4", className)} {...props} />
}

export { Page, PageHeader, PageContent }
