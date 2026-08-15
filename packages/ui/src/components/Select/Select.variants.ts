import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva(
  "relative flex items-center justify-between w-full rounded-chellaa-md border border-input bg-background text-foreground text-left transition-all duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-ring/20 shadow-xs cursor-pointer select-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        small: "min-h-8 text-xs px-2.5 py-1 gap-1.5",
        medium: "min-h-10 text-sm px-3 py-1.5 gap-2",
        large: "min-h-12 text-base px-4 py-2 gap-2.5",
      },
      hasError: {
        true: "border-danger focus:border-danger focus:ring-danger/20",
        false: "",
      },
      isOpen: {
        true: "border-primary ring-2 ring-ring/20",
        false: "",
      },
    },
    defaultVariants: {
      size: "medium",
      hasError: false,
      isOpen: false,
    },
  }
);

export const selectDropdownVariants = cva(
  "absolute z-50 w-full mt-1.5 max-h-60 overflow-auto rounded-chellaa-md border border-border bg-popover text-popover-foreground shadow-lg animate-fade-in p-1 focus:outline-none"
);

export const selectOptionVariants = cva(
  "relative flex items-center justify-between w-full px-2.5 py-2 text-sm rounded-chellaa-sm cursor-pointer select-none transition-colors outline-none",
  {
    variants: {
      isSelected: {
        true: "bg-primary/10 text-primary font-semibold",
        false: "hover:bg-muted text-foreground",
      },
      isHighlighted: {
        true: "bg-muted",
        false: "",
      },
      isDisabled: {
        true: "opacity-40 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      isSelected: false,
      isHighlighted: false,
      isDisabled: false,
    },
  }
);
