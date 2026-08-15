import type { ReactNode, HTMLAttributes, ImgHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  avatarVariants,
  avatarGroupVariants,
} from "./Avatar.variants";

export type AvatarSize = "xs" | "small" | "medium" | "large" | "xl" | "2xl";
export type AvatarShape = "circle" | "square" | "rounded";
export type AvatarStatus = "online" | "offline" | "busy" | "away";
export type AvatarStatusPlacement = "bottom-right" | "top-right";

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  name?: string;
  icon?: ReactNode;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  statusPlacement?: AvatarStatusPlacement;
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
  bordered?: boolean;
}

export interface AvatarGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {
  max?: number;
  size?: AvatarSize;
  shape?: AvatarShape;
  bordered?: boolean;
  spacing?: "tight" | "normal" | "loose";
  children: ReactNode;
}
