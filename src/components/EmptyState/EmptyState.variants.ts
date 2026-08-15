import { cva } from "class-variance-authority";

export const emptyStateVariants = cva(
  "flex flex-col items-center justify-center text-center font-sans select-none rounded-chella-lg transition-all",
  {
    variants: {
      variant: {
        default: "p-8",
        card: "p-8 bg-card border border-border text-card-foreground shadow-xs",
        dashed: "p-8 border-2 border-dashed border-border/80 bg-muted/20 hover:border-primary/50",
      },
      size: {
        small: "p-6 max-w-sm",
        medium: "p-8 max-w-md",
        large: "p-12 max-w-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

export const emptyStateIconVariants = cva(
  "flex items-center justify-center rounded-full bg-muted text-muted-foreground mb-4 shrink-0 transition-colors",
  {
    variants: {
      size: {
        small: "size-10 [&>svg]:size-5",
        medium: "size-12 [&>svg]:size-6",
        large: "size-16 [&>svg]:size-8",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export const emptyStateTitleVariants = cva("font-bold text-foreground tracking-tight leading-tight", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const emptyStateDescriptionVariants = cva(
  "text-muted-foreground leading-relaxed mt-1.5 max-w-xs sm:max-w-sm",
  {
    variants: {
      size: {
        small: "text-xs",
        medium: "text-xs",
        large: "text-sm",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);
