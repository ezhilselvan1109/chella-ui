import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { bannerVariants } from "./Banner.variants";

export type BannerVariant =
  | "default"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "gradient";

export type BannerPosition = "static" | "top" | "bottom";

export interface BannerProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof bannerVariants> {
  variant?: BannerVariant;
  position?: BannerPosition;
  icon?: ReactNode;
  badge?: ReactNode;
  action?: ReactNode;
  closable?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
