import { cva } from "class-variance-authority";
export const switchTrackVariants = cva("relative inline-flex items-center shrink-0 border transition-colors duration-200 ease-in-out rounded-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", {
    variants: {
        size: {
            small: "w-7 h-4 p-0.5",
            medium: "w-9 h-5 p-0.5",
            large: "w-11 h-6 p-0.5",
        },
        state: {
            unchecked: "bg-muted/80 border-border hover:bg-muted",
            checked: "bg-primary border-primary",
            error: "bg-muted/80 border-danger hover:border-danger/80",
            errorChecked: "bg-danger border-danger",
        },
        disabled: {
            true: "opacity-50 cursor-not-allowed",
            false: "cursor-pointer",
        },
    },
    defaultVariants: {
        size: "medium",
        state: "unchecked",
        disabled: false,
    },
});
export const switchThumbVariants = cva("pointer-events-none block rounded-full bg-background shadow-xs transition-transform duration-200 ease-in-out motion-reduce:transition-none ring-0", {
    variants: {
        size: {
            small: "w-3 h-3",
            medium: "w-4 h-4",
            large: "w-5 h-5",
        },
        checked: {
            true: "",
            false: "translate-x-0",
        },
    },
    compoundVariants: [
        {
            size: "small",
            checked: true,
            className: "translate-x-3",
        },
        {
            size: "medium",
            checked: true,
            className: "translate-x-4",
        },
        {
            size: "large",
            checked: true,
            className: "translate-x-5",
        },
    ],
    defaultVariants: {
        size: "medium",
        checked: false,
    },
});
