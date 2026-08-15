import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { radioGroupVariants } from "./Radio.variants";

export interface RadioGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof radioGroupVariants> {
  /**
   * Controlled selected radio value.
   */
  value?: string;

  /**
   * Initial selected radio value for uncontrolled mode.
   */
  defaultValue?: string;

  /**
   * Callback fired when the selected radio value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * Form submission input name for all child radio options.
   */
  name?: string;

  /**
   * Disables all radio options in the group.
   */
  disabled?: boolean;

  /**
   * Marks selection within the group as mandatory for form submission.
   */
  required?: boolean;

  /**
   * Group heading / legend label.
   */
  label?: ReactNode;

  /**
   * Group subtitle / helper text.
   */
  description?: ReactNode;

  /**
   * Group validation error message.
   */
  error?: ReactNode;

  /**
   * Size token applied to all radio options in the group.
   */
  size?: "small" | "medium" | "large";

  /**
   * Child Radio elements.
   */
  children?: ReactNode;
}
