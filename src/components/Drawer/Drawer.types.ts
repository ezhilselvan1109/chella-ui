import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { drawerContentVariants } from "./Drawer.variants";

export type DrawerPosition = "right" | "left" | "top" | "bottom";
export type DrawerSize = "small" | "medium" | "large" | "full";

export interface DrawerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerContentVariants> {
  open: boolean;
  onClose: () => void;
  position?: DrawerPosition;
  size?: DrawerSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  children: ReactNode;
}

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DrawerTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export interface DrawerDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DrawerContextValue {
  onClose: () => void;
  titleId: string;
  descriptionId: string;
  showCloseButton: boolean;
}
