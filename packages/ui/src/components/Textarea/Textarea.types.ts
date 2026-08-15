import type { TextareaHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { textareaVariants } from "./Textarea.variants";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  /**
   * Accessible label displayed above the textarea.
   */
  label?: ReactNode;

  /**
   * Explanatory helper text displayed below the textarea.
   */
  description?: ReactNode;

  /**
   * Error message displayed below the textarea. When present, marks input as invalid.
   */
  error?: ReactNode;

  /**
   * Whether to display the character count indicator.
   * @default false
   */
  showCount?: boolean;

  /**
   * Enables automatic height adjustment as the user types content.
   * @default false
   */
  autoResize?: boolean;

  /**
   * Textarea sizing.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * Visual textarea variant.
   * @default "default"
   */
  variant?: "default" | "filled" | "flushed";

  /**
   * Resizing mode for the textarea.
   * @default "vertical"
   */
  resize?: "none" | "vertical" | "horizontal" | "both";
}
