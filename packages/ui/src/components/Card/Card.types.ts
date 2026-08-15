import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { cardVariants } from "./Card.variants";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: ReactNode;
  variant?: "elevated" | "outlined" | "flat";
  hoverable?: boolean;
}
