import { cva } from "class-variance-authority";
export const accordionVariants = cva("w-full font-sans", {
    variants: {
        variant: {
            default: "divide-y divide-border border-y border-border",
            bordered: "divide-y divide-border rounded-chellaa-lg border border-border overflow-hidden",
            separated: "space-y-2.5",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const accordionItemVariants = cva("transition-colors", {
    variants: {
        variant: {
            default: "",
            bordered: "bg-card px-4",
            separated: "rounded-chellaa-lg border border-border bg-card px-4 shadow-xs",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const accordionTriggerVariants = cva("flex w-full items-center justify-between py-4 text-xs font-semibold text-foreground transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-left select-none [&[data-state=open]>svg]:rotate-180", {
    variants: {
        size: {
            small: "py-2.5 text-xs",
            medium: "py-3.5 text-xs font-semibold",
            large: "py-4 text-sm font-bold",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
export const accordionContentVariants = cva("overflow-hidden text-xs text-muted-foreground transition-all duration-200 animate-in fade-in-0 pb-4 pt-0 leading-relaxed font-sans");
