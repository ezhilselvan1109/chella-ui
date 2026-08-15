import { cva } from "class-variance-authority";
export const timelineVariants = cva("relative flex flex-col font-sans select-none", {
    variants: {
        mode: {
            left: "space-y-6",
            right: "space-y-6 items-end",
            alternate: "space-y-6",
        },
    },
    defaultVariants: {
        mode: "left",
    },
});
export const timelineItemVariants = cva("relative flex gap-4 text-xs group", {
    variants: {
        mode: {
            left: "flex-row text-left",
            right: "flex-row-reverse text-right",
            alternate: "flex-row",
        },
    },
    defaultVariants: {
        mode: "left",
    },
});
export const timelinePointVariants = cva("relative z-10 flex items-center justify-center rounded-full shrink-0 border-2 transition-colors", {
    variants: {
        status: {
            default: "border-muted-foreground/40 bg-background text-muted-foreground",
            primary: "border-primary bg-primary text-primary-foreground",
            success: "border-emerald-500 bg-emerald-500 text-white",
            warning: "border-amber-500 bg-amber-500 text-white",
            danger: "border-rose-500 bg-rose-500 text-white",
            processing: "border-primary bg-background text-primary animate-pulse",
        },
        size: {
            small: "size-4 text-[10px] [&>svg]:size-2.5",
            medium: "size-6 text-xs [&>svg]:size-3.5",
            large: "size-8 text-sm [&>svg]:size-4",
        },
    },
    defaultVariants: {
        status: "default",
        size: "medium",
    },
});
