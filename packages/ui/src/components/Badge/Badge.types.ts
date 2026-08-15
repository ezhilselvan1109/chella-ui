import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./Badge.variants";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  dot?: boolean;
  removable?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
}
