import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { ratingVariants } from "./Rating.variants";

export type RatingSize = "small" | "medium" | "large";
export type RatingColor = "default" | "yellow" | "amber" | "primary" | "emerald";

export interface RatingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof ratingVariants> {
  value?: number;
  defaultValue?: number;
  max?: number;
  precision?: 1 | 0.5;
  readOnly?: boolean;
  disabled?: boolean;
  size?: RatingSize;
  color?: RatingColor;
  showValueText?: boolean;
  icon?: ReactNode;
  emptyIcon?: ReactNode;
  onChange?: (value: number) => void;
  onHoverChange?: (value: number | null) => void;
}
