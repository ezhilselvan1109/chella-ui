import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden font-semibold select-none bg-muted text-muted-foreground transition-all font-sans",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-[10px]",
        small: "w-8 h-8 text-xs",
        medium: "w-10 h-10 text-sm",
        large: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg",
        "2xl": "w-20 h-20 text-xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-chellaa-md",
      },
    },
    defaultVariants: {
      size: "medium",
      shape: "circle",
    },
  }
);

export const avatarStatusVariants = cva(
  "absolute block rounded-full ring-2 ring-background",
  {
    variants: {
      status: {
        online: "bg-success",
        offline: "bg-muted-foreground",
        busy: "bg-danger",
        away: "bg-warning",
      },
      size: {
        xs: "w-1.5 h-1.5",
        small: "w-2 h-2",
        medium: "w-2.5 h-2.5",
        large: "w-3 h-3",
        xl: "w-3.5 h-3.5",
        "2xl": "w-4 h-4",
      },
      placement: {
        "bottom-right": "bottom-0 right-0",
        "top-right": "top-0 right-0",
      },
    },
    defaultVariants: {
      status: "online",
      size: "medium",
      placement: "bottom-right",
    },
  }
);

export const avatarGroupVariants = cva("flex items-center font-sans", {
  variants: {
    spacing: {
      tight: "-space-x-3",
      normal: "-space-x-2",
      loose: "-space-x-1",
    },
  },
  defaultVariants: {
    spacing: "normal",
  },
});
