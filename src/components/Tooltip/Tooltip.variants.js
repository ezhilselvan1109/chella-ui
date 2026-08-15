import { cva } from "class-variance-authority";
export const tooltipContentVariants = cva("z-50 overflow-hidden rounded-chella-sm px-2.5 py-1 text-xs font-medium shadow-md transition-all duration-150 animate-in fade-in-0 zoom-in-95 pointer-events-none select-none font-sans", {
    variants: {
        variant: {
            default: "bg-foreground text-background",
            dark: "bg-neutral-900 text-neutral-50 border border-neutral-800",
            light: "bg-background text-foreground border border-border shadow-lg",
            primary: "bg-primary text-primary-foreground",
        },
        placement: {
            top: "bottom-full left-1/2 -translate-x-1/2 mb-1.5",
            bottom: "top-full left-1/2 -translate-x-1/2 mt-1.5",
            left: "right-full top-1/2 -translate-y-1/2 mr-1.5",
            right: "left-full top-1/2 -translate-y-1/2 ml-1.5",
        },
    },
    defaultVariants: {
        variant: "default",
        placement: "top",
    },
});
export const tooltipArrowVariants = cva("absolute w-2 h-2 rotate-45 pointer-events-none", {
    variants: {
        variant: {
            default: "bg-foreground",
            dark: "bg-neutral-900",
            light: "bg-background border border-border",
            primary: "bg-primary",
        },
        placement: {
            top: "bottom-[-4px] left-1/2 -translate-x-1/2",
            bottom: "top-[-4px] left-1/2 -translate-x-1/2",
            left: "right-[-4px] top-1/2 -translate-y-1/2",
            right: "left-[-4px] top-1/2 -translate-y-1/2",
        },
    },
    defaultVariants: {
        variant: "default",
        placement: "top",
    },
});
