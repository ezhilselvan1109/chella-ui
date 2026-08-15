import { cva } from "class-variance-authority";

export const kbdVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium rounded-chellaa-sm select-none border transition-colors leading-none",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground border-border shadow-[0_1px_0_1px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_0_1px_rgba(255,255,255,0.08)]",
        outline: "bg-transparent text-foreground border-border",
        subtle: "bg-muted/60 text-muted-foreground border-transparent",
        ghost: "bg-transparent text-muted-foreground border-transparent",
      },
      size: {
        xs: "h-4 min-w-[1rem] px-1 text-[10px]",
        small: "h-5 min-w-[1.25rem] px-1.5 text-[11px]",
        medium: "h-6 min-w-[1.5rem] px-2 text-xs",
        large: "h-7 min-w-[1.75rem] px-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);
