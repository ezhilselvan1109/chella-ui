import type { ReactNode, HTMLAttributes, SVGAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  progressTrackVariants,
  progressIndicatorVariants,
  circularProgressVariants,
} from "./Progress.variants";

export type ProgressSize = "small" | "medium" | "large";
export type ProgressVariant = "default" | "success" | "warning" | "danger" | "info" | "gradient";

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressTrackVariants>,
    VariantProps<typeof progressIndicatorVariants> {
  value?: number;
  max?: number;
  showLabel?: boolean;
  label?: ReactNode;
  formatValue?: (value: number, max: number) => ReactNode;
  size?: ProgressSize;
  variant?: ProgressVariant;
  indeterminate?: boolean;
  striped?: boolean;
  animated?: boolean;
}

export interface CircularProgressProps
  extends Omit<SVGAttributes<SVGSVGElement>, "size">,
    VariantProps<typeof circularProgressVariants> {
  value?: number;
  max?: number;
  size?: ProgressSize | number;
  strokeWidth?: number;
  variant?: ProgressVariant;
  indeterminate?: boolean;
  showLabel?: boolean;
  formatValue?: (value: number, max: number) => ReactNode;
  label?: ReactNode;
  trackClassName?: string;
  indicatorClassName?: string;
}
