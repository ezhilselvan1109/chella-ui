import type { ReactNode } from "react";

export interface SelectOptionItem {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: ReactNode;
  description?: string;
}

export interface SelectProps {
  /**
   * The options list for direct declarative usage.
   */
  options?: SelectOptionItem[];

  /**
   * Controlled selected value (string for single, string[] for multiple).
   */
  value?: string | string[];

  /**
   * Default selected value for uncontrolled usage.
   */
  defaultValue?: string | string[];

  /**
   * Callback fired when value changes.
   */
  onChange?: (value: string | string[]) => void;

  /**
   * Placeholder displayed when no option is selected.
   * @default "Select an option..."
   */
  placeholder?: string;

  /**
   * Accessible label displayed above the select trigger.
   */
  label?: ReactNode;

  /**
   * Explanatory helper text displayed below the select trigger.
   */
  helperText?: ReactNode;

  /**
   * Error message displayed below the select trigger.
   */
  error?: ReactNode;

  /**
   * Enables multi-selection mode with removable tags.
   * @default false
   */
  multiple?: boolean;

  /**
   * Enables searching/filtering within options.
   * @default false
   */
  searchable?: boolean;

  /**
   * Search input placeholder.
   * @default "Search options..."
   */
  searchPlaceholder?: string;

  /**
   * Sizing of the trigger.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * Disables the select component.
   * @default false
   */
  disabled?: boolean;

  /**
   * Shows loading state.
   * @default false
   */
  loading?: boolean;

  /**
   * Allows clearing selection.
   * @default false
   */
  clearable?: boolean;

  /**
   * Custom trigger className.
   */
  className?: string;

  /**
   * Children for compound component usage.
   */
  children?: ReactNode;
}

export interface SelectContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedValue: string | string[];
  selectOption: (value: string) => void;
  multiple: boolean;
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
  size: "small" | "medium" | "large";
  disabled: boolean;
  registerOption: (option: SelectOptionItem) => () => void;
  options: SelectOptionItem[];
}
