import { cva } from "class-variance-authority";
export const breadcrumbVariants = cva("font-sans select-none", {
    variants: {
        size: {
            small: "text-xs",
            medium: "text-sm",
            large: "text-base",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
export const breadcrumbListVariants = cva("flex flex-wrap items-center gap-1.5 break-words text-muted-foreground", {
    variants: {
        size: {
            small: "gap-1",
            medium: "gap-1.5",
            large: "gap-2",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
export const breadcrumbItemVariants = cva("inline-flex items-center gap-1.5");
export const breadcrumbLinkVariants = cva("transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-xs");
export const breadcrumbPageVariants = cva("font-medium text-foreground cursor-default");
export const breadcrumbSeparatorVariants = cva("text-muted-foreground/60 shrink-0 [&>svg]:size-3.5");
