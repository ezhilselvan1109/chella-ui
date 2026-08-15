import type {
  ReactNode,
  HTMLAttributes,
  FormHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  formVariants,
  formFieldVariants,
  formLabelVariants,
} from "./FormField.variants";

export type FormLayout = "vertical" | "horizontal" | "inline";
export type FormFieldSize = "small" | "medium" | "large";

export interface FormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  layout?: FormLayout;
  size?: FormFieldSize;
  children: ReactNode;
}

export interface FormContextValue {
  layout: FormLayout;
  size: FormFieldSize;
}

export interface FormFieldProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formFieldVariants> {
  id?: string;
  label?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: ReactNode;
  helpText?: ReactNode;
  size?: FormFieldSize;
  children?: ReactNode;
}

export interface FormFieldContextValue {
  fieldId: string;
  labelId: string;
  errorId: string;
  helpTextId: string;
  hasError: boolean;
  required: boolean;
  disabled: boolean;
  size: FormFieldSize;
}

export interface FormLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof formLabelVariants> {
  required?: boolean;
  children: ReactNode;
}

export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface FormHelpTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export interface FormErrorProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
