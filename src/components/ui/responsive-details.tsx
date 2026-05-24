"use client"

import * as React from "react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "./button"

export interface ResponsiveDetailsProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
  footer?: React.ReactNode
}

export function ResponsiveDetails({
  open,
  onOpenChange,
  title,
  description,
  footer,
  children,
  className,
  contentClassName,
}: ResponsiveDetailsProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Drawer direction="bottom" open={open} onOpenChange={onOpenChange}>
        <DrawerContent
          className={cn(
            "flex data-[vaul-drawer-direction=bottom]:max-h-[85vh] flex-col gap-0 p-0",
            className
          )}
        >
          <DrawerHeader className="border-b px-4 pt-4 pb-3 text-left">
            <DrawerTitle>{title}</DrawerTitle>
            {description ? (
              <DrawerDescription>{description}</DrawerDescription>
            ) : null}
          </DrawerHeader>
          <div
            className={cn(
              "min-h-0 flex-1 overflow-y-auto px-4 py-4",
              contentClassName
            )}
          >
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "gap-0 overflow-hidden p-0 sm:max-w-2xl max-h-[90vh]",
          className
        )}
      >
        <DialogHeader className="border-b p-4 pb-3">
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        <div
          className={cn(
            "max-h-[calc(90vh-5rem)] overflow-y-auto p-4",
            contentClassName
          )}
        >
          {children}
        </div>
      {footer && (
        <DialogFooter className="border-t p-4">
          {footer}
          <DialogClose asChild>
            <Button variant="outline">Cerrar</Button>
          </DialogClose>
        </DialogFooter>
      )}
      </DialogContent>
    </Dialog>
  )
}
