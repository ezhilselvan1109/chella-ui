import { cva } from "class-variance-authority";
export const formVariants = cva("w-full font-sans", {
    variants: {
        layout: {
            vertical: "space-y-4",
            horizontal: "space-y-4 [&_.chella-form-field]:grid [&_.chella-form-field]:grid-cols-3 [&_.chella-form-field]:gap-4 [&_.chella-form-field-label]:col-span-1 [&_.chella-form-field-label]:pt-2 [&_.chella-form-field-control-wrap]:col-span-2",
            inline: "flex flex-wrap items-end gap-4",
        },
    },
    defaultVariants: {
        layout: "vertical",
    },
});
export const formFieldVariants = cva("chella-form-field w-full font-sans space-y-1.5", {
    variants: {
        size: {
            small: "text-xs space-y-1",
            medium: "text-sm space-y-1.5",
            large: "text-base space-y-2",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
export const formLabelVariants = cva("chella-form-field-label block font-semibold text-foreground select-none cursor-pointer transition-colors leading-tight", {
    variants: {
        size: {
            small: "text-xs",
            medium: "text-xs font-semibold",
            large: "text-sm font-semibold",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
