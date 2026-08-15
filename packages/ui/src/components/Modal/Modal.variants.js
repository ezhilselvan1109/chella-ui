import { cva } from "class-variance-authority";
export const modalBackdropVariants = cva("fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto transition-opacity duration-200");
export const modalDialogVariants = cva("relative w-full rounded-chellaa-lg border border-border bg-card text-card-foreground shadow-2xl transition-all duration-200 outline-none animate-fade-in my-auto flex flex-col", {
    variants: {
        size: {
            small: "max-w-sm",
            medium: "max-w-lg",
            large: "max-w-2xl",
            full: "max-w-5xl h-[90vh]",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
