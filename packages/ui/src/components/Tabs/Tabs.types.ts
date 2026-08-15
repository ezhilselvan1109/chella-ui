import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  tabsListVariants,
  tabsTriggerVariants,
} from "./Tabs.variants";

export type TabsVariant = "line" | "pill" | "card";
export type TabsOrientation = "horizontal" | "vertical";
export type TabsSize = "small" | "medium" | "large";

export interface TabItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}

export interface TabsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange">,
    VariantProps<typeof tabsListVariants> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: TabsVariant;
  orientation?: TabsOrientation;
  size?: TabsSize;
  items?: TabItem[];
  children?: ReactNode;
}

export interface TabsListProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {
  children: ReactNode;
}

export interface TabsTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabsTriggerVariants> {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  variant: TabsVariant;
  orientation: TabsOrientation;
  size: TabsSize;
  tabsId: string;
}
