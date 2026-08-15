import { cva } from "class-variance-authority";
export const cardVariants = cva("rounded-chellaa-lg bg-card text-card-foreground transition-all duration-200 overflow-hidden", {
    variants: {
        variant: {
            elevated: "border border-border/60 shadow-md",
            outlined: "border border-border shadow-xs",
            flat: "border-none bg-muted/40",
        },
        hoverable: {
            true: "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
            false: "",
        },
    },
    defaultVariants: {
        variant: "outlined",
        hoverable: false,
    },
});
