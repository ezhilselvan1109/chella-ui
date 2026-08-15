import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { alertVariants } from "./Alert.variants";

export type AlertVariant = "default" | "info" | "success" | "warning" | "danger";
export type AlertStyleVariant = "subtle" | "outline" | "solid";

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof alertVariants> {
  variant?: AlertVariant;
  styleVariant?: AlertStyleVariant;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode | boolean;
  closable?: boolean;
  onClose?: () => void;
  action?: ReactNode;
  children?: ReactNode;
}

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
