import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { radioCircleVariants } from "./Radio.variants";

export interface RadioProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "checked" | "defaultChecked" | "onChange" | "value" | "disabled"
    >,
    VariantProps<typeof radioCircleVariants> {
  /**
   * The unique form value of this radio option.
   */
  value: string;

  /**
   * Controlled checked state of the radio (used primarily in standalone mode).
   */
  checked?: boolean;

  /**
   * Initial checked state for standalone uncontrolled usage.
   */
  defaultChecked?: boolean;

  /**
   * Callback fired when the radio is selected.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Native change event callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Whether the radio option is disabled.
   */
  disabled?: boolean;

  /**
   * Label displayed alongside the radio circle.
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
   * Label content if passed as children.
   */
  children?: ReactNode;
}
