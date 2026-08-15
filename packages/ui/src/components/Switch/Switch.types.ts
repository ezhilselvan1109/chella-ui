import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { switchTrackVariants } from "./Switch.variants";

export interface SwitchProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "checked" | "defaultChecked" | "onChange" | "value" | "disabled"
    >,
    VariantProps<typeof switchTrackVariants> {
  /**
   * Whether the switch is disabled.
   */
  disabled?: boolean;

  /**
   * Controlled checked state of the switch.
   */
  checked?: boolean;

  /**
   * Initial checked state for uncontrolled usage.
   */
  defaultChecked?: boolean;

  /**
   * Callback fired when the switch state changes.
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
   * Label displayed alongside the switch.
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
