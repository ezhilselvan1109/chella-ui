import type { ReactNode, HTMLAttributes, InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { commandVariants, commandItemVariants } from "./Command.variants";

export type CommandSize = "small" | "medium" | "large";

export interface CommandContextValue {
  search: string;
  setSearch: (query: string) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  registerItem: (id: string, textValue: string, onSelect?: () => void) => () => void;
  items: Array<{ id: string; textValue: string; onSelect?: () => void }>;
}

export interface CommandProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof commandVariants> {
  size?: CommandSize;
  children: ReactNode;
}

export interface CommandDialogProps extends CommandProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface CommandInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  value?: string;
  onValueChange?: (search: string) => void;
}

export interface CommandListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CommandEmptyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CommandGroupProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  children: ReactNode;
}

export interface CommandItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof commandItemVariants> {
  value?: string;
  disabled?: boolean;
  onSelect?: () => void;
  icon?: ReactNode;
  shortcut?: string | string[];
  children: ReactNode;
}

export type CommandSeparatorProps = HTMLAttributes<HTMLDivElement>;
