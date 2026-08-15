import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full rounded-chella-md text-foreground placeholder:text-muted-foreground transition-all duration-150 outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-input bg-background focus:border-primary focus:ring-2 focus:ring-ring/20 shadow-xs",
        filled:
          "border border-transparent bg-muted/60 hover:bg-muted/80 focus:bg-background focus:border-primary focus:ring-2 focus:ring-ring/20",
        flushed:
          "border-b border-input rounded-none px-0 bg-transparent focus:border-primary focus:ring-0",
      },
      size: {
        small: "h-8 text-xs px-2.5",
        medium: "h-10 text-sm px-3",
        large: "h-12 text-base px-4",
      },
      hasError: {
        true: "border-danger focus:border-danger focus:ring-danger/20",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      hasError: false,
    },
  }
);
