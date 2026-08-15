import { cva } from "class-variance-authority";
export const spinnerVariants = cva("animate-spin shrink-0 select-none", {
    variants: {
        variant: {
            default: "text-foreground",
            primary: "text-primary",
            secondary: "text-secondary-foreground",
            success: "text-success",
            warning: "text-warning",
            danger: "text-danger",
            info: "text-info",
            white: "text-white",
        },
        size: {
            xs: "size-3",
            small: "size-4",
            medium: "size-6",
            large: "size-8",
            xl: "size-12",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium",
    },
});
export const spinnerTrackVariants = cva("opacity-25");
export const spinnerIndicatorVariants = cva("opacity-75");
