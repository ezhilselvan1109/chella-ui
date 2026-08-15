import { cva } from "class-variance-authority";

export const commandVariants = cva(
  "flex h-full w-full flex-col overflow-hidden rounded-chellaa-lg bg-popover text-popover-foreground border border-border shadow-lg font-sans",
  {
    variants: {
      size: {
        small: "max-w-md",
        medium: "max-w-lg",
        large: "max-w-2xl",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export const commandInputVariants = cva(
  "flex h-11 w-full rounded-chellaa-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 font-sans"
);

export const commandItemVariants = cva(
  "relative flex cursor-pointer select-none items-center gap-2.5 rounded-chellaa-sm px-2.5 py-2 text-xs outline-hidden transition-colors data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
  {
    variants: {
      active: {
        true: "bg-primary/10 text-primary font-medium",
        false: "hover:bg-muted text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
