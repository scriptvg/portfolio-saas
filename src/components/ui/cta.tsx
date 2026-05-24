import { cn } from "@/lib/utils"
import { ArrowRightIcon, type LucideIcon } from "lucide-react"
import React from "react"

import { Button } from "./button"

function CTAWrapper({
  className,
  ...props
}: React.ComponentProps<"div"> & {
  className?: string
}) {
  return (
    <div
      data-slot="cta-root"
      className={cn(
        "section-rhythm-tight border-t border-border px-6",
        className
      )}
      {...props}
    />
  )
}

function CTATitle({
  className,
  ...props
}: React.ComponentProps<"h2"> & {
  className?: string
}) {
  return (
    <h2
      className={cn("display-title text-2xl sm:text-3xl", className)}
      {...props}
    />
  )
}

function CTADescription({
  className,
  ...props
}: React.ComponentProps<"p"> & {
  className?: string
}) {
  return (
    <p
      className={cn(
        "prose-width text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base",
        className
      )}
      {...props}
    />
  )
}

function CTAButton({
  icon: Icon = ArrowRightIcon,
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Button> & {
  icon?: LucideIcon
  children: React.ReactNode
}) {
  return (
    <Button size="lg" className={cn("gap-2", className)} asChild={asChild} {...props}>
      {asChild ? (
        children
      ) : (
        <>
          {children}
          <Icon className="size-4" aria-hidden />
        </>
      )}
    </Button>
  )
}

export { CTAWrapper, CTATitle, CTAButton, CTADescription }
