import { cva } from "class-variance-authority";
export const drawerOverlayVariants = cva("fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in-0", {
    variants: {
        open: {
            true: "opacity-100",
            false: "opacity-0 pointer-events-none",
        },
    },
    defaultVariants: {
        open: true,
    },
});
export const drawerContentVariants = cva("fixed z-50 flex flex-col bg-card text-card-foreground shadow-2xl border-border transition-transform duration-300 ease-in-out font-sans", {
    variants: {
        position: {
            right: "inset-y-0 right-0 h-full border-l animate-in slide-in-from-right",
            left: "inset-y-0 left-0 h-full border-r animate-in slide-in-from-left",
            top: "inset-x-0 top-0 w-full border-b animate-in slide-in-from-top",
            bottom: "inset-x-0 bottom-0 w-full border-t animate-in slide-in-from-bottom",
        },
        size: {
            small: "",
            medium: "",
            large: "",
            full: "",
        },
    },
    compoundVariants: [
        // Right / Left sizes
        { position: ["right", "left"], size: "small", className: "w-full max-w-sm" },
        { position: ["right", "left"], size: "medium", className: "w-full max-w-md" },
        { position: ["right", "left"], size: "large", className: "w-full max-w-xl" },
        { position: ["right", "left"], size: "full", className: "w-screen max-w-none" },
        // Top / Bottom sizes
        { position: ["top", "bottom"], size: "small", className: "max-h-64" },
        { position: ["top", "bottom"], size: "medium", className: "max-h-96" },
        { position: ["top", "bottom"], size: "large", className: "max-h-[80vh]" },
        { position: ["top", "bottom"], size: "full", className: "h-screen max-h-none" },
    ],
    defaultVariants: {
        position: "right",
        size: "medium",
    },
});
