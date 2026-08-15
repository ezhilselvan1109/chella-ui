import { cva } from "class-variance-authority";
export const tabsListVariants = cva("inline-flex items-center text-muted-foreground font-sans", {
    variants: {
        variant: {
            line: "border-b border-border gap-6 w-full justify-start",
            pill: "bg-muted/70 p-1 rounded-chellaa-lg gap-1 border border-border/60",
            card: "bg-card border border-border rounded-chellaa-lg p-1 gap-1 shadow-xs",
        },
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col items-stretch border-r border-border border-b-0 w-auto gap-1",
        },
    },
    defaultVariants: {
        variant: "line",
        orientation: "horizontal",
    },
});
export const tabsTriggerVariants = cva("inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer", {
    variants: {
        variant: {
            line: "relative pb-3 pt-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary font-semibold -mb-px",
            pill: "rounded-chellaa-md px-3 py-1.5 text-muted-foreground hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs font-semibold",
            card: "rounded-chellaa-md px-3 py-1.5 text-muted-foreground hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xs font-semibold",
        },
        size: {
            small: "text-xs px-2.5 py-1",
            medium: "text-xs px-3.5 py-1.5",
            large: "text-sm px-4 py-2",
        },
    },
    defaultVariants: {
        variant: "line",
        size: "medium",
    },
});
export const tabsContentVariants = cva("mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-sans", {
    variants: {
        orientation: {
            horizontal: "w-full",
            vertical: "flex-1 pl-4 mt-0",
        },
    },
    defaultVariants: {
        orientation: "horizontal",
    },
});
