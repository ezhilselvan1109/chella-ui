import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center font-medium rounded-full transition-colors select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-secondary text-secondary-foreground border border-border",
        success: "bg-success/15 text-success border border-success/25",
        warning: "bg-warning/15 text-amber-600 dark:text-warning border border-warning/25",
        danger: "bg-danger/15 text-danger border border-danger/25",
        outline: "bg-transparent text-foreground border border-border",
      },
      size: {
        small: "px-2 py-0.5 text-[10px] gap-1",
        medium: "px-2.5 py-0.5 text-xs gap-1.5",
        large: "px-3 py-1 text-sm gap-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);
