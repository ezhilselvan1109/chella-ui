import { cva } from "class-variance-authority";
export const buttonVariants = cva("inline-flex items-center justify-center font-medium rounded-chella-md transition-all duration-150 select-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
    variants: {
        variant: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-border bg-background hover:bg-secondary hover:text-secondary-foreground",
            ghost: "hover:bg-secondary hover:text-secondary-foreground",
            danger: "bg-danger text-danger-foreground hover:bg-danger/90 shadow-sm",
            link: "text-primary underline-offset-4 hover:underline p-0 h-auto active:scale-100",
        },
        size: {
            small: "h-8 px-3 text-xs gap-1.5",
            medium: "h-10 px-4 text-sm gap-2",
            large: "h-12 px-6 text-base gap-2.5",
        },
        fullWidth: {
            true: "w-full",
            false: "w-auto",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium",
        fullWidth: false,
    },
});
