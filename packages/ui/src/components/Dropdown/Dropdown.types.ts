import type { ReactNode, HTMLAttributes, MouseEvent } from "react";
import type { VariantProps } from "class-variance-authority";
import type { dropdownMenuVariants, dropdownItemVariants } from "./Dropdown.variants";

export interface DropdownMenuItem {
  /**
   * Unique identifier for the item.
   */
  key: string;

  /**
   * Text label or JSX content.
   */
  label?: ReactNode;

  /**
   * Optional leading icon.
   */
  icon?: ReactNode;

  /**
   * Whether this item represents a divider line.
   */
  divider?: boolean;

  /**
   * Whether this item is disabled.
   */
  disabled?: boolean;

  /**
   * Style variant (e.g. "danger" for destructive actions).
   */
  variant?: "default" | "danger";

  /**
   * Callback fired when item is clicked.
   */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof dropdownMenuVariants> {
  /**
   * Trigger element that toggles the dropdown on click.
   */
  trigger: ReactNode;

  /**
   * Declarative array of menu items.
   */
  items?: DropdownMenuItem[];

  /**
   * Custom child elements if using compound/custom items.
   */
  children?: ReactNode;

  /**
   * Placement alignment of the menu relative to the trigger.
   * @default "bottom-start"
   */
  placement?:
    | "bottom-start"
    | "bottom-end"
    | "bottom"
    | "top-start"
    | "top-end"
    | "top";

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
   * Whether to close the dropdown when a menu item is clicked.
   * @default true
   */
  closeOnSelect?: boolean;

  /**
   * Disables the dropdown from opening.
   * @default false
   */
  disabled?: boolean;
}

export interface DropdownItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownItemVariants> {
  icon?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "danger";
  children?: ReactNode;
}
