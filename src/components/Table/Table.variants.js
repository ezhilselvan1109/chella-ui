import { cva } from "class-variance-authority";
export const tableVariants = cva("w-full text-left text-sm text-foreground border-collapse", {
    variants: {
        size: {
            small: "[&_th]:py-2.5 [&_th]:px-3 [&_td]:py-2.5 [&_td]:px-3 text-xs",
            medium: "[&_th]:py-3.5 [&_th]:px-5 [&_td]:py-3.5 [&_td]:px-5 text-sm",
            large: "[&_th]:py-4.5 [&_th]:px-6 [&_td]:py-4.5 [&_td]:px-6 text-base",
        },
        bordered: {
            true: "border border-border [&_th]:border [&_th]:border-border [&_td]:border [&_td]:border-border",
            false: "[&_tr]:border-b [&_tr]:border-border",
        },
        striped: {
            true: "[&_tbody_tr:nth-child(even)]:bg-muted/30",
            false: "",
        },
    },
    defaultVariants: {
        size: "medium",
        bordered: false,
        striped: false,
    },
});
