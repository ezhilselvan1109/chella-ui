import { cva } from "class-variance-authority";
export const skeletonVariants = cva("bg-muted shrink-0 font-sans select-none overflow-hidden", {
    variants: {
        variant: {
            text: "h-4 w-full rounded-chella-sm",
            circular: "rounded-full",
            rectangular: "rounded-none",
            rounded: "rounded-chella-lg",
        },
        animation: {
            pulse: "animate-pulse",
            wave: "relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-foreground/5 before:to-transparent",
            none: "",
        },
    },
    defaultVariants: {
        variant: "text",
        animation: "pulse",
    },
});
