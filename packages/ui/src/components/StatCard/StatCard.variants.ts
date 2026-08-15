import { cva } from "class-variance-authority";

export const statCardVariants = cva(
  "p-6 rounded-chellaa-lg border font-sans select-none transition-all flex flex-col justify-between",
  {
    variants: {
      variant: {
        default: "bg-card border-border text-card-foreground shadow-xs",
        elevated: "bg-card border-border text-card-foreground shadow-md hover:shadow-lg",
        outline: "bg-transparent border-border text-foreground",
        subtle: "bg-muted/40 border-transparent text-foreground",
      },
      hoverable: {
        true: "hover:border-primary/50 hover:-translate-y-0.5 cursor-pointer transition-transform duration-200",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hoverable: false,
    },
  }
);

export const statCardTrendVariants = cva("inline-flex items-center gap-1 text-xs font-semibold mt-2", {
  variants: {
    direction: {
      up: "text-emerald-600 dark:text-emerald-400",
      down: "text-rose-600 dark:text-rose-400",
      neutral: "text-muted-foreground",
    },
  },
  defaultVariants: {
    direction: "neutral",
  },
});
