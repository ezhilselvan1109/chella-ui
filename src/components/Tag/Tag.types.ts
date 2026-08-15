import type { ReactNode, HTMLAttributes, MouseEvent } from "react";
import type { VariantProps } from "class-variance-authority";
import type { tagVariants } from "./Tag.variants";

export type TagVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

export type TagSize = "small" | "medium" | "large";
export type TagShape = "rounded" | "pill" | "square";

export interface TagProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  variant?: TagVariant;
  size?: TagSize;
  shape?: TagShape;
  closable?: boolean;
  selectable?: boolean;
  selected?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  avatar?: ReactNode;
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
  onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}
