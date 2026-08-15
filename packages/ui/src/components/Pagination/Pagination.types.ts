import type {
  ReactNode,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  paginationVariants,
  paginationItemVariants,
} from "./Pagination.variants";

export type PaginationVariant = "default" | "outline" | "ghost" | "pills";
export type PaginationSize = "small" | "medium" | "large";

export interface PaginationProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof paginationVariants> {
  page?: number;
  defaultPage?: number;
  totalPages?: number;
  siblingCount?: number;
  showEdges?: boolean;
  showPrevNext?: boolean;
  variant?: PaginationVariant;
  size?: PaginationSize;
  disabled?: boolean;
  onPageChange?: (page: number) => void;
  children?: ReactNode;
}

export interface PaginationContextValue {
  variant: PaginationVariant;
  size: PaginationSize;
  disabled: boolean;
}

export interface PaginationContentProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export interface PaginationItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationItemVariants> {
  active?: boolean;
  children: ReactNode;
}

export interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export interface PaginationEllipsisProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}
