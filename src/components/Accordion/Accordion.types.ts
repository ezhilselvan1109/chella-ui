import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { accordionVariants, accordionTriggerVariants } from "./Accordion.variants";

export type AccordionType = "single" | "multiple";
export type AccordionVariant = "default" | "bordered" | "separated";
export type AccordionSize = "small" | "medium" | "large";

export interface AccordionItemData {
  value: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange">,
    VariantProps<typeof accordionVariants> {
  type?: AccordionType;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  variant?: AccordionVariant;
  size?: AccordionSize;
  items?: AccordionItemData[];
  children?: ReactNode;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export interface AccordionTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof accordionTriggerVariants> {
  children: ReactNode;
  hideIcon?: boolean;
}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface AccordionContextValue {
  type: AccordionType;
  value: string[];
  toggleItem: (itemValue: string) => void;
  variant: AccordionVariant;
  size: AccordionSize;
  accordionId: string;
}

export interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  disabled: boolean;
  itemId: string;
}
