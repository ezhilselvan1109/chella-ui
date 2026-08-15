import { cva } from "class-variance-authority";

export const dividerVariants = cva("shrink-0 border-border font-sans select-none", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full min-h-[1rem] border-l inline-block align-middle",
    },
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    spacing: {
      none: "my-0 mx-0",
      small: "",
      medium: "",
      large: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", spacing: "small", className: "my-2" },
    { orientation: "horizontal", spacing: "medium", className: "my-4" },
    { orientation: "horizontal", spacing: "large", className: "my-6" },

    { orientation: "vertical", spacing: "small", className: "mx-2" },
    { orientation: "vertical", spacing: "medium", className: "mx-4" },
    { orientation: "vertical", spacing: "large", className: "mx-6" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
    spacing: "medium",
  },
});

export const dividerLabelVariants = cva(
  "flex items-center w-full font-sans select-none text-xs text-muted-foreground",
  {
    variants: {
      spacing: {
        none: "my-0",
        small: "my-2",
        medium: "my-4",
        large: "my-6",
      },
      align: {
        center: "before:flex-1 after:flex-1",
        start: "before:w-6 after:flex-1",
        end: "before:flex-1 after:w-6",
      },
      variant: {
        solid: "before:border-t before:border-solid before:border-border after:border-t after:border-solid after:border-border",
        dashed: "before:border-t before:border-dashed before:border-border after:border-t after:border-dashed after:border-border",
        dotted: "before:border-t before:border-dotted before:border-border after:border-t after:border-dotted after:border-border",
      },
    },
    defaultVariants: {
      spacing: "medium",
      align: "center",
      variant: "solid",
    },
  }
);
