import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { modalDialogVariants } from "./Modal.variants";

export interface ModalProps extends VariantProps<typeof modalDialogVariants> {
  /**
   * Whether the modal is open or closed.
   */
  open: boolean;

  /**
   * Callback fired when modal requests to be closed.
   */
  onClose: () => void;

  /**
   * Primary title displayed in the modal header.
   */
  title?: ReactNode;

  /**
   * Subtitle or description displayed below the title.
   */
  description?: ReactNode;

  /**
   * Modal content body.
   */
  children?: ReactNode;

  /**
   * Action buttons rendered in modal footer.
   */
  footer?: ReactNode;

  /**
   * Sizing of the modal dialog window.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "full";

  /**
   * Closes the modal when pressing the Escape key.
   * @default true
   */
  closeOnEsc?: boolean;

  /**
   * Closes the modal when clicking on the backdrop overlay.
   * @default true
   */
  closeOnBackdropClick?: boolean;

  /**
   * Shows a close 'X' button in the top right corner.
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Custom className for the modal content dialog.
   */
  className?: string;

  /**
   * Custom className for the backdrop overlay.
   */
  backdropClassName?: string;
}

export interface ModalContextValue {
  onClose: () => void;
  titleId: string;
  descriptionId: string;
}
