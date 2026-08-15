import { cva } from "class-variance-authority";

export const progressTrackVariants = cva(
  "w-full overflow-hidden rounded-full bg-muted select-none font-sans",
  {
    variants: {
      size: {
        small: "h-1.5",
        medium: "h-2.5",
        large: "h-4",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export const progressIndicatorVariants = cva(
  "h-full rounded-full transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-success",
        warning: "bg-warning",
        danger: "bg-danger",
        info: "bg-info",
        gradient: "bg-gradient-to-r from-primary via-info to-success",
      },
      indeterminate: {
        true: "w-full animate-[progress-indeterminate_1.5s_infinite_linear] origin-left",
        false: "",
      },
      striped: {
        true: "bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
        false: "",
      },
      animated: {
        true: "animate-[progress-stripes_1s_linear_infinite]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      indeterminate: false,
      striped: false,
      animated: false,
    },
  }
);

export const circularProgressVariants = cva("relative inline-flex items-center justify-center font-sans select-none", {
  variants: {
    variant: {
      default: "text-primary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
      info: "text-info",
      gradient: "text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
