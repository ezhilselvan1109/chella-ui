import { cva } from "class-variance-authority";

export const radioCircleVariants = cva(
  "relative inline-flex items-center justify-center shrink-0 border transition-all duration-150 select-none rounded-full font-medium",
  {
    variants: {
      size: {
        small: "w-3.5 h-3.5",
        medium: "w-4 h-4",
        large: "w-5 h-5",
      },
      state: {
        unchecked: "bg-background border-input hover:border-primary/60",
        checked: "bg-background border-primary",
        error: "bg-background border-danger hover:border-danger/80",
        errorChecked: "bg-background border-danger",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      size: "medium",
      state: "unchecked",
      disabled: false,
    },
  }
);

export const radioDotVariants = cva(
  "rounded-full transition-transform duration-150 ease-in-out pointer-events-none",
  {
    variants: {
      size: {
        small: "w-1.5 h-1.5",
        medium: "w-2 h-2",
        large: "w-2.5 h-2.5",
      },
      checked: {
        true: "scale-100",
        false: "scale-0",
      },
      hasError: {
        true: "bg-danger",
        false: "bg-primary",
      },
    },
    defaultVariants: {
      size: "medium",
      checked: false,
      hasError: false,
    },
  }
);

export const radioGroupVariants = cva("font-sans w-full", {
  variants: {
    orientation: {
      vertical: "flex flex-col gap-2.5",
      horizontal: "flex flex-row flex-wrap gap-4",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});
