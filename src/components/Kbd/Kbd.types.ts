import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { kbdVariants } from "./Kbd.variants";

export type KbdVariant = "default" | "outline" | "subtle" | "ghost";
export type KbdSize = "xs" | "small" | "medium" | "large";

export interface KbdProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {
  variant?: KbdVariant;
  size?: KbdSize;
  keys?: string[];
  separator?: string;
  children?: ReactNode;
}

export interface KbdGroupProps extends HTMLAttributes<HTMLDivElement> {
  size?: KbdSize;
  variant?: KbdVariant;
  separator?: string;
  children: ReactNode;
}
