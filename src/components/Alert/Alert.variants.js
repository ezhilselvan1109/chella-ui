import { cva } from "class-variance-authority";
export const alertVariants = cva("relative w-full rounded-chella-lg p-4 font-sans select-none flex items-start gap-3 transition-all", {
    variants: {
        variant: {
            default: "",
            info: "",
            success: "",
            warning: "",
            danger: "",
        },
        styleVariant: {
            subtle: "",
            outline: "border bg-card",
            solid: "text-white shadow-xs",
        },
    },
    compoundVariants: [
        // Subtle
        { variant: "default", styleVariant: "subtle", className: "bg-muted/80 text-foreground border border-border" },
        { variant: "info", styleVariant: "subtle", className: "bg-info/10 text-info border border-info/20 [&_p]:text-info/80" },
        { variant: "success", styleVariant: "subtle", className: "bg-success/10 text-success border border-success/20 [&_p]:text-success/80" },
        { variant: "warning", styleVariant: "subtle", className: "bg-warning/10 text-warning border border-warning/20 [&_p]:text-warning/80" },
        { variant: "danger", styleVariant: "subtle", className: "bg-danger/10 text-danger border border-danger/20 [&_p]:text-danger/80" },
        // Outline
        { variant: "default", styleVariant: "outline", className: "border-border text-foreground [&_p]:text-muted-foreground" },
        { variant: "info", styleVariant: "outline", className: "border-info/40 text-info [&_p]:text-muted-foreground" },
        { variant: "success", styleVariant: "outline", className: "border-success/40 text-success [&_p]:text-muted-foreground" },
        { variant: "warning", styleVariant: "outline", className: "border-warning/40 text-warning [&_p]:text-muted-foreground" },
        { variant: "danger", styleVariant: "outline", className: "border-danger/40 text-danger [&_p]:text-muted-foreground" },
        // Solid
        { variant: "default", styleVariant: "solid", className: "bg-foreground text-background [&_p]:text-background/80" },
        { variant: "info", styleVariant: "solid", className: "bg-info text-info-foreground [&_p]:text-info-foreground/85" },
        { variant: "success", styleVariant: "solid", className: "bg-success text-success-foreground [&_p]:text-success-foreground/85" },
        { variant: "warning", styleVariant: "solid", className: "bg-warning text-warning-foreground [&_p]:text-warning-foreground/85" },
        { variant: "danger", styleVariant: "solid", className: "bg-danger text-danger-foreground [&_p]:text-danger-foreground/85" },
    ],
    defaultVariants: {
        variant: "info",
        styleVariant: "subtle",
    },
});
