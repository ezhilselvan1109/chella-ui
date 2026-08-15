import type {
  ReactNode,
  HTMLAttributes,
  AnchorHTMLAttributes,
  OlHTMLAttributes,
  LiHTMLAttributes,
} from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  breadcrumbVariants,
  breadcrumbListVariants,
} from "./Breadcrumb.variants";

export type BreadcrumbSize = "small" | "medium" | "large";

export interface BreadcrumbItemData {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  active?: boolean;
}

export interface BreadcrumbProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbVariants> {
  separator?: ReactNode;
  size?: BreadcrumbSize;
  items?: BreadcrumbItemData[];
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  children?: ReactNode;
}

export interface BreadcrumbContextValue {
  separator: ReactNode;
  size: BreadcrumbSize;
}

export interface BreadcrumbListProps
  extends OlHTMLAttributes<HTMLOListElement>,
    VariantProps<typeof breadcrumbListVariants> {
  children: ReactNode;
}

export interface BreadcrumbItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export interface BreadcrumbLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  children: ReactNode;
}

export interface BreadcrumbPageProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export interface BreadcrumbSeparatorProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
}

export interface BreadcrumbEllipsisProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}
