import { cva } from "class-variance-authority";
export const tagVariants = cva("inline-flex items-center font-sans font-medium transition-all select-none border border-transparent shrink-0 leading-none", {
    variants: {
        variant: {
            default: "bg-muted text-muted-foreground hover:bg-muted/80",
            primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
            warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20",
            danger: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 hover:bg-rose-500/20",
            info: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20 hover:bg-sky-500/20",
            outline: "bg-transparent border-border text-foreground hover:bg-muted/50",
        },
        size: {
            small: "h-5 text-[11px] px-2 gap-1.5",
            medium: "h-6 text-xs px-2.5 gap-1.5",
            large: "h-7 text-sm px-3 gap-2",
        },
        shape: {
            rounded: "rounded-chella-md",
            pill: "rounded-full",
            square: "rounded-none",
        },
        selectable: {
            true: "cursor-pointer active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
            false: "",
        },
        selected: {
            true: "bg-primary text-primary-foreground border-primary shadow-xs hover:bg-primary/90",
            false: "",
        },
        disabled: {
            true: "opacity-50 pointer-events-none cursor-not-allowed",
            false: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "medium",
        shape: "rounded",
        selectable: false,
        selected: false,
        disabled: false,
    },
});
export const tagCloseButtonVariants = cva("inline-flex items-center justify-center rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10 text-current transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-ring");
