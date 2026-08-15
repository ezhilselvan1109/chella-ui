import type { ReactNode, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { toastVariants } from "./Toast.variants";

export type ToastVariant = "default" | "success" | "warning" | "danger" | "info";
export type ToastPlacement =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export interface ToastAction {
  label: string;
  onClick: () => void;
  altText?: string;
}

export interface ToastData {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
  action?: ToastAction;
  onClose?: () => void;
}

export interface ToastProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof toastVariants> {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  action?: ToastAction;
  onClose?: () => void;
}

export interface ToastProviderProps {
  children: ReactNode;
  placement?: ToastPlacement;
  maxToasts?: number;
}

export interface ToastContextValue {
  toasts: ToastData[];
  toast: {
    (options: Omit<ToastData, "id">): string;
    success: (title: ReactNode, description?: ReactNode) => string;
    error: (title: ReactNode, description?: ReactNode) => string;
    warning: (title: ReactNode, description?: ReactNode) => string;
    info: (title: ReactNode, description?: ReactNode) => string;
    dismiss: (id: string) => void;
    clear: () => void;
  };
}
