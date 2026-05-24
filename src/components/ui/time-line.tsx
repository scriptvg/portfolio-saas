"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Timeline({ className, ...props }: React.ComponentProps<"ol">) {
    return (
        <ol
            data-slot="timeline"
            className={cn("group/timeline flex flex-col", className)}
            {...props}
        />
    )
}

function TimelineItem({
    className,
    ...props
}: React.ComponentProps<"li">) {
    return (
        <li
            data-slot="timeline-item"
            className={cn(
                "group/timeline-item relative pl-8 pb-12 last:pb-0",
                className
            )}
            {...props}
        />
    )
}

function TimelineDot({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div data-slot="timeline-dot" className={cn("group/timeline-dot absolute top-0 -left-[5px] z-1 size-3 rounded-full border-2 border-primary bg-background", className)} {...props} />
    )
}

function TimelineLine({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div data-slot="timeline-line" className={cn("group/timeline-line z-0 absolute left-0 top-0 h-full w-px bg-border", className)} {...props} />
    )
}

function TimelineSeparator({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="timeline-separator"
            className={cn(
                "group/timeline-separator absolute z-0 top-[14px] left-0 h-full",
                className
            )}
            {...props}
        />
    )
}

function TimelineContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="timeline-content"
            className={cn("group/timeline-content space-y-3", className)}
            {...props}
        />
    )
}

export { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineDot, TimelineLine }
