import { cva } from "class-variance-authority";

export const ratingVariants = cva("inline-flex items-center select-none font-sans", {
  variants: {
    size: {
      small: "gap-1 text-xs [&>button>svg]:size-3.5 [&>span>svg]:size-3.5",
      medium: "gap-1.5 text-sm [&>button>svg]:size-5 [&>span>svg]:size-5",
      large: "gap-2 text-base [&>button>svg]:size-6 [&>span>svg]:size-6",
    },
    disabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    disabled: false,
  },
});

export const ratingItemVariants = cva(
  "inline-flex items-center justify-center p-0.5 rounded-chella-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
  {
    variants: {
      color: {
        yellow: "text-yellow-400 fill-yellow-400",
        amber: "text-amber-500 fill-amber-500",
        primary: "text-primary fill-primary",
        emerald: "text-emerald-500 fill-emerald-500",
        default: "text-amber-400 fill-amber-400",
      },
      readOnly: {
        true: "cursor-default pointer-events-none",
        false: "hover:scale-110 active:scale-95",
      },
    },
    defaultVariants: {
      color: "default",
      readOnly: false,
    },
  }
);
