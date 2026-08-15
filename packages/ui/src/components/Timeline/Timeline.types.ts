import type { ReactNode, HTMLAttributes, OlHTMLAttributes, LiHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { timelineVariants, timelinePointVariants } from "./Timeline.variants";

export type TimelineMode = "left" | "right" | "alternate";
export type TimelineStatus = "default" | "primary" | "success" | "warning" | "danger" | "processing";
export type TimelineSize = "small" | "medium" | "large";

export interface TimelineItemData {
  title: ReactNode;
  description?: ReactNode;
  time?: ReactNode;
  status?: TimelineStatus;
  icon?: ReactNode;
}

export interface TimelineProps
  extends OlHTMLAttributes<HTMLOListElement>,
    VariantProps<typeof timelineVariants> {
  mode?: TimelineMode;
  items?: TimelineItemData[];
  children?: ReactNode;
}

export interface TimelineContextValue {
  mode: TimelineMode;
}

export interface TimelineItemProps
  extends LiHTMLAttributes<HTMLLIElement> {
  status?: TimelineStatus;
  size?: TimelineSize;
  icon?: ReactNode;
  isLast?: boolean;
  children: ReactNode;
}

export interface TimelinePointProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelinePointVariants> {
  status?: TimelineStatus;
  size?: TimelineSize;
  children?: ReactNode;
}

export interface TimelineConnectorProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface TimelineContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TimelineTimeProps extends HTMLAttributes<HTMLTimeElement> {
  children: ReactNode;
}

export interface TimelineTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export interface TimelineDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
