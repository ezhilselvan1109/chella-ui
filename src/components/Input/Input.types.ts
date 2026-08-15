import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./Input.variants";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
    VariantProps<typeof inputVariants> {
  /**
   * Accessible label displayed above the input.
   */
  label?: ReactNode;

  /**
   * Explanatory helper text displayed below the input.
   */
  helperText?: ReactNode;

  /**
   * Error message displayed below the input. When present, marks input as invalid.
   */
  error?: ReactNode;

  /**
   * Element or icon displayed inside the input on the left.
   */
  prefix?: ReactNode;

  /**
   * Element or icon displayed inside the input on the right.
   */
  suffix?: ReactNode;

  /**
   * Allows clearing the input value with a single click.
   * @default false
   */
  clearable?: boolean;

  /**
   * Callback fired when the clear button is clicked.
   */
  onClear?: () => void;

  /**
   * Displays a loading spinner inside the input.
   * @default false
   */
  loading?: boolean;

  /**
   * Input sizing.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * Visual input variant.
   * @default "default"
   */
  variant?: "default" | "filled" | "flushed";
}
