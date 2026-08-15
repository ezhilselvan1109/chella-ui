import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { dividerVariants } from "./Divider.variants";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed" | "dotted";
export type DividerSpacing = "none" | "small" | "medium" | "large";
export type DividerAlign = "start" | "center" | "end";

export interface DividerProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  spacing?: DividerSpacing;
  align?: DividerAlign;
  decorative?: boolean;
  children?: ReactNode;
}
