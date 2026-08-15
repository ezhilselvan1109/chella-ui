import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { spinnerVariants } from "./Spinner.variants";

export type SpinnerSize = "xs" | "small" | "medium" | "large" | "xl";
export type SpinnerVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "white";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  showLabel?: boolean;
  thickness?: number;
}
