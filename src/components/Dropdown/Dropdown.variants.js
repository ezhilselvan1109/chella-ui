import { cva } from "class-variance-authority";
export const dropdownMenuVariants = cva("z-50 min-w-[180px] overflow-hidden rounded-chella-md border border-border bg-popover text-popover-foreground shadow-lg p-1 outline-none transition-all duration-150 animate-in fade-in-0 zoom-in-95 font-sans select-none", {
    variants: {
        placement: {
            "bottom-start": "top-full left-0 mt-1.5",
            "bottom-end": "top-full right-0 mt-1.5",
            bottom: "top-full left-1/2 -translate-x-1/2 mt-1.5",
            "top-start": "bottom-full left-0 mb-1.5",
            "top-end": "bottom-full right-0 mb-1.5",
            top: "bottom-full left-1/2 -translate-x-1/2 mb-1.5",
        },
    },
    defaultVariants: {
        placement: "bottom-start",
    },
});
export const dropdownItemVariants = cva("relative flex cursor-pointer items-center gap-2 rounded-chella-sm px-2.5 py-1.5 text-xs font-medium outline-none transition-colors select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", {
    variants: {
        variant: {
            default: "text-foreground hover:bg-muted focus:bg-muted",
            danger: "text-danger hover:bg-danger/10 focus:bg-danger/10 hover:text-danger",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
