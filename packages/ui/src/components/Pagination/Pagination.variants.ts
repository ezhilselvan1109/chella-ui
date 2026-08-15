import { cva } from "class-variance-authority";

export const paginationVariants = cva("font-sans select-none flex justify-center", {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-base",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const paginationContentVariants = cva("flex flex-wrap items-center gap-1");

export const paginationItemVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-chellaa-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      variant: {
        default: "hover:bg-muted text-foreground",
        outline: "border border-border hover:bg-muted text-foreground",
        ghost: "hover:bg-muted/60 text-muted-foreground hover:text-foreground",
        pills: "rounded-full hover:bg-muted text-foreground",
      },
      size: {
        small: "h-7 min-w-7 px-2 text-xs",
        medium: "h-8 min-w-8 px-2.5 text-xs",
        large: "h-10 min-w-10 px-3.5 text-sm",
      },
      active: {
        true: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs font-semibold cursor-default",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      active: false,
    },
  }
);

export const paginationEllipsisVariants = cva(
  "inline-flex items-center justify-center text-muted-foreground h-8 w-8"
);
