import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { checkboxBoxVariants } from "./Checkbox.variants";

export interface CheckboxProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "checked" | "defaultChecked" | "onChange" | "value" | "disabled"
    >,
    VariantProps<typeof checkboxBoxVariants> {
  /**
   * Whether the checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * Controlled checked state of the checkbox.
   */
  checked?: boolean;

  /**
   * Initial checked state for uncontrolled usage.
   */
  defaultChecked?: boolean;

  /**
   * Callback fired when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Native change event callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Form submission value.
   */
  value?: string | number | readonly string[];

  /**
   * Label displayed alongside the checkbox.
   */
  label?: ReactNode;

  /**
   * Subtitle / descriptive helper text.
   */
  description?: ReactNode;

  /**
   * Validation error message text.
   */
  error?: ReactNode;

  /**
   * Visual and DOM indeterminate state (e.g. for parent select-all controls).
   */
  indeterminate?: boolean;

  /**
   * Label content if passed as children.
   */
  children?: ReactNode;
}
