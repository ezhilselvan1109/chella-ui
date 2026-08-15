import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  emptyStateVariants,
  emptyStateIconVariants,
  emptyStateTitleVariants,
  emptyStateDescriptionVariants,
} from "./EmptyState.variants";

export type EmptyStateVariant = "default" | "card" | "dashed";
export type EmptyStateSize = "small" | "medium" | "large";

export interface EmptyStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof emptyStateVariants> {
  variant?: EmptyStateVariant;
  size?: EmptyStateSize;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
}

export interface EmptyStateContextValue {
  size: EmptyStateSize;
}

export interface EmptyStateIconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateIconVariants> {
  children: ReactNode;
}

export interface EmptyStateTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof emptyStateTitleVariants> {
  children: ReactNode;
}

export interface EmptyStateDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof emptyStateDescriptionVariants> {
  children: ReactNode;
}

export interface EmptyStateActionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
