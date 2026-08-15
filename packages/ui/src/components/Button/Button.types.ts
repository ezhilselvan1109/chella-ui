import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./Button.variants";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * The visual style variant of the button.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "danger" | "ghost" | "outline" | "link";

  /**
   * The size of the button.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * Shows a loading spinner and disables user interaction.
   * @default false
   */
  loading?: boolean;

  /**
   * Sets the button to occupy the full width of its parent container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Icon or element to display before the button content.
   */
  leftIcon?: ReactNode;

  /**
   * Icon or element to display after the button content.
   */
  rightIcon?: ReactNode;
}
