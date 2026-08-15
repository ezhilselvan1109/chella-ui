import {
  createContext,
  useContext,
  forwardRef,
  useMemo,
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from "react";
import { cn } from "../../utils/cn";
import { useId } from "../../hooks/useId";
import {
  formFieldVariants,
  formLabelVariants,
} from "./FormField.variants";
import type {
  FormFieldProps,
  FormLabelProps,
  FormControlProps,
  FormHelpTextProps,
  FormErrorProps,
  FormFieldContextValue,
} from "./FormField.types";
import { useFormContext } from "./Form";

export const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormField() {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error("FormField compound components must be rendered inside <FormField>");
  }
  return context;
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, required: explicitRequired, ...props }, ref) => {
    const context = useContext(FormFieldContext);
    const required = explicitRequired !== undefined ? explicitRequired : context?.required;
    const size = context?.size || "medium";
    const fieldId = context?.fieldId;
    const labelId = context?.labelId;

    return (
      <label
        ref={ref}
        id={labelId}
        htmlFor={fieldId}
        className={cn(formLabelVariants({ size }), className)}
        {...props}
      >
        {children}
        {required && (
          <span aria-hidden="true" className="text-danger ml-0.5 font-bold">
            *
          </span>
        )}
      </label>
    );
  }
);
FormLabel.displayName = "FormLabel";

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ className, children, ...props }, ref) => {
    const { fieldId, errorId, helpTextId, hasError } = useFormField();

    const describedBy = [helpTextId, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <div ref={ref} className={cn("chellaa-form-field-control-wrap w-full", className)} {...props}>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child;

          const childElement = child as ReactElement<{
            id?: string;
            "aria-describedby"?: string;
            "aria-invalid"?: string | boolean;
          }>;
          return cloneElement(childElement, {
            id: childElement.props.id || fieldId,
            "aria-describedby": childElement.props["aria-describedby"] || describedBy,
            "aria-invalid": childElement.props["aria-invalid"] ?? (hasError ? "true" : undefined),
          });
        })}
      </div>
    );
  }
);
FormControl.displayName = "FormControl";

export const FormHelpText = forwardRef<HTMLParagraphElement, FormHelpTextProps>(
  ({ className, children, ...props }, ref) => {
    const { helpTextId } = useFormField();

    return (
      <p
        ref={ref}
        id={helpTextId}
        className={cn("text-xs text-muted-foreground leading-normal font-sans", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
FormHelpText.displayName = "FormHelpText";

export const FormError = forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, children, ...props }, ref) => {
    const { errorId } = useFormField();

    return (
      <p
        ref={ref}
        id={errorId}
        role="alert"
        className={cn("text-xs text-danger font-medium leading-normal font-sans", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
FormError.displayName = "FormError";

const FormFieldRoot = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      id: customId,
      label,
      required = false,
      disabled = false,
      error,
      helpText,
      size: explicitSize,
      children,
      ...props
    },
    ref
  ) => {
    const formContext = useFormContext();
    const size = explicitSize || formContext?.size || "medium";

    const fieldId = useId("field", customId);
    const labelId = `${fieldId}-label`;
    const errorId = `${fieldId}-error`;
    const helpTextId = `${fieldId}-help`;

    const contextValue: FormFieldContextValue = useMemo(
      () => ({
        fieldId,
        labelId,
        errorId,
        helpTextId,
        hasError: Boolean(error),
        required,
        disabled,
        size,
      }),
      [fieldId, labelId, errorId, helpTextId, error, required, disabled, size]
    );

    return (
      <FormFieldContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(formFieldVariants({ size }), className)}
          {...props}
        >
          {label && <FormLabel>{label}</FormLabel>}
          {/* If compound FormControl is not passed, automatically wrap children in FormControl */}
          <FormControl>{children}</FormControl>
          {helpText && !error && <FormHelpText>{helpText}</FormHelpText>}
          {error && <FormError>{error}</FormError>}
        </div>
      </FormFieldContext.Provider>
    );
  }
);

FormFieldRoot.displayName = "FormField";

export const FormField = Object.assign(FormFieldRoot, {
  Label: FormLabel,
  Control: FormControl,
  HelpText: FormHelpText,
  Error: FormError,
});
