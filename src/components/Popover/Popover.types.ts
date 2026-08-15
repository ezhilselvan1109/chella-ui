import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { popoverContentVariants } from "./Popover.variants";

export interface PopoverProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof popoverContentVariants> {
  /**
   * The rich interactive content displayed inside the popover card.
   */
  content: ReactNode;

  /**
   * The trigger element that toggles the popover on click.
   */
  children: ReactNode;

  /**
   * Placement alignment of the popover relative to the trigger.
   * @default "bottom-start"
   */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "right";

  /**
   * Controlled open state of the popover.
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
   * Whether clicking outside the popover closes it.
   * @default true
   */
  closeOnOutsideClick?: boolean;

  /**
   * Whether pressing Escape closes the popover.
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Whether to render a close button in the top right.
   * @default false
   */
  showCloseButton?: boolean;

  /**
   * Custom width class or style for the popover content.
   */
  contentClassName?: string;

  /**
   * Disables the popover from opening.
   * @default false
   */
  disabled?: boolean;
}
