import { cva } from "class-variance-authority";
export const popoverContentVariants = cva("z-50 rounded-chellaa-lg border border-border bg-popover text-popover-foreground shadow-xl outline-none transition-all duration-200 animate-in fade-in-0 zoom-in-95 font-sans p-4", {
    variants: {
        placement: {
            top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
            "top-start": "bottom-full left-0 mb-2",
            "top-end": "bottom-full right-0 mb-2",
            bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
            "bottom-start": "top-full left-0 mt-2",
            "bottom-end": "top-full right-0 mt-2",
            left: "right-full top-1/2 -translate-y-1/2 mr-2",
            right: "left-full top-1/2 -translate-y-1/2 ml-2",
        },
    },
    defaultVariants: {
        placement: "bottom-start",
    },
});
