import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  "w-full rounded-chellaa-md text-foreground placeholder:text-muted-foreground transition-all duration-150 outline-none disabled:cursor-not-allowed disabled:opacity-50 font-sans",
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
        small: "text-xs px-2.5 py-1.5 min-h-[60px]",
        medium: "text-sm px-3 py-2 min-h-[80px]",
        large: "text-base px-4 py-3 min-h-[120px]",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
      hasError: {
        true: "border-danger focus:border-danger focus:ring-danger/20",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      resize: "vertical",
      hasError: false,
    },
  }
);
