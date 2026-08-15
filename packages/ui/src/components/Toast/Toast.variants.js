import { cva } from "class-variance-authority";
export const toastVariants = cva("pointer-events-auto relative flex w-full max-w-sm items-start gap-3 rounded-chellaa-lg border p-4 shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-top-2 font-sans select-none", {
    variants: {
        variant: {
            default: "border-border bg-card text-card-foreground shadow-lg",
            success: "border-success/30 bg-card text-card-foreground shadow-success/5 [&>svg]:text-success",
            warning: "border-warning/30 bg-card text-card-foreground shadow-warning/5 [&>svg]:text-warning",
            danger: "border-danger/30 bg-card text-card-foreground shadow-danger/5 [&>svg]:text-danger",
            info: "border-primary/30 bg-card text-card-foreground shadow-primary/5 [&>svg]:text-primary",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const toastContainerVariants = cva("fixed z-50 flex flex-col gap-2.5 p-4 pointer-events-none max-h-screen overflow-hidden", {
    variants: {
        placement: {
            "top-right": "top-0 right-0 items-end",
            "top-left": "top-0 left-0 items-start",
            "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
            "bottom-right": "bottom-0 right-0 items-end",
            "bottom-left": "bottom-0 left-0 items-start",
            "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
        },
    },
    defaultVariants: {
        placement: "top-right",
    },
});
