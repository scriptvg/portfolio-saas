import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

const dotVariants = cva(
    "size-2.5 rounded-full",
    {
        variants: {
            variant: {
                default: "bg-primary",
                secondary: "bg-secondary",
                destructive: "bg-destructive",
                outline: "bg-border",
            },
            size: {
                default: "size-2.5",
                sm: "size-2",
                lg: "size-3",
            },
            shape: {
                default: "rounded-full",
                square: "rounded-none",
            },
            effect: {
                default: "animate-pulse",
                none: "",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            shape: "default",
            effect: "default",
        },
    }
)

function Dot({
    className,
    variant = "default",
    asChild = false,
    size = "default",
    shape = "default",
    effect = "default",
    ...props
}:
    React.ComponentProps<"div"> &
    VariantProps<typeof dotVariants> &
    { asChild?: boolean }) {
    const Comp = asChild ? Slot.Root : "div"
    return (
        <Comp
            data-slot="dot"
            data-variant={variant}
            data-size={size}
            data-shape={shape}
            data-effect={effect}
            className={cn(dotVariants({ variant, size, shape, effect }), className)}
            {...props}
        />
    )
}

export { Dot, dotVariants }