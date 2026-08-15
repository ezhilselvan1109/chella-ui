import { cva } from "class-variance-authority";
export const checkboxBoxVariants = cva("relative inline-flex items-center justify-center shrink-0 border transition-all select-none rounded-chellaa-sm font-medium", {
    variants: {
        size: {
            small: "w-3.5 h-3.5",
            medium: "w-4 h-4",
            large: "w-5 h-5",
        },
        state: {
            unchecked: "bg-background border-input hover:border-primary/60",
            checked: "bg-primary border-primary text-primary-foreground",
            indeterminate: "bg-primary border-primary text-primary-foreground",
            error: "bg-background border-danger hover:border-danger/80",
            errorChecked: "bg-danger border-danger text-danger-foreground",
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
