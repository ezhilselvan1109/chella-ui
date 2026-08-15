import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { tooltipContentVariants } from "./Tooltip.variants";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipContentVariants> {
  /**
   * The content displayed inside the tooltip bubble.
   */
  content: ReactNode;

  /**
   * The interactive element that triggers the tooltip on hover or focus.
   */
  children: ReactNode;

  /**
   * Placement orientation relative to the trigger element.
   * @default "top"
   */
  placement?: "top" | "bottom" | "left" | "right";

  /**
   * Visual theme variant.
   * @default "default"
   */
  variant?: "default" | "dark" | "light" | "primary";

  /**
   * Whether to render a small directional arrow pointer.
   * @default true
   */
  arrow?: boolean;

  /**
   * Delay in milliseconds before displaying the tooltip on hover/focus.
   * @default 100
   */
  delayDuration?: number;

  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Initial open state for uncontrolled mode.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Callback fired when open state changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Disables the tooltip from appearing.
   * @default false
   */
  disabled?: boolean;
}
