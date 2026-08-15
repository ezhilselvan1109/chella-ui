import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { statCardVariants, statCardTrendVariants } from "./StatCard.variants";

export type StatCardVariant = "default" | "elevated" | "outline" | "subtle";
export type StatTrendDirection = "up" | "down" | "neutral";

export interface StatTrendData {
  value: ReactNode;
  direction?: StatTrendDirection;
  label?: ReactNode;
}

export interface StatCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof statCardVariants> {
  title?: ReactNode;
  value?: ReactNode;
  icon?: ReactNode;
  trend?: StatTrendData;
  description?: ReactNode;
  variant?: StatCardVariant;
  hoverable?: boolean;
  children?: ReactNode;
}

export interface StatCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface StatCardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export interface StatCardValueProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface StatCardTrendProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardTrendVariants> {
  direction?: StatTrendDirection;
  value?: ReactNode;
  label?: ReactNode;
  children?: ReactNode;
}

export interface StatCardIconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
