import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, Children, cloneElement, isValidElement, } from "react";
import { cn } from "../../utils/cn";
import { useId } from "../../hooks/useId";
import { formFieldVariants, formLabelVariants, } from "./FormField.variants";
import { useFormContext } from "./Form";
export const FormFieldContext = createContext(null);
export function useFormField() {
    const context = useContext(FormFieldContext);
    if (!context) {
        throw new Error("FormField compound components must be rendered inside <FormField>");
    }
    return context;
}
export const FormLabel = forwardRef(({ className, children, required: explicitRequired, ...props }, ref) => {
    const context = useContext(FormFieldContext);
    const required = explicitRequired !== undefined ? explicitRequired : context?.required;
    const size = context?.size || "medium";
    const fieldId = context?.fieldId;
    const labelId = context?.labelId;
    return (_jsxs("label", { ref: ref, id: labelId, htmlFor: fieldId, className: cn(formLabelVariants({ size }), className), ...props, children: [children, required && (_jsx("span", { "aria-hidden": "true", className: "text-danger ml-0.5 font-bold", children: "*" }))] }));
});
FormLabel.displayName = "FormLabel";
export const FormControl = forwardRef(({ className, children, ...props }, ref) => {
    const { fieldId, errorId, helpTextId, hasError } = useFormField();
    const describedBy = [helpTextId, hasError ? errorId : null]
        .filter(Boolean)
        .join(" ") || undefined;
    return (_jsx("div", { ref: ref, className: cn("chella-form-field-control-wrap w-full", className), ...props, children: Children.map(children, (child) => {
            if (!isValidElement(child))
                return child;
            const childElement = child;
            return cloneElement(childElement, {
                id: childElement.props.id || fieldId,
                "aria-describedby": childElement.props["aria-describedby"] || describedBy,
                "aria-invalid": childElement.props["aria-invalid"] ?? (hasError ? "true" : undefined),
            });
        }) }));
});
FormControl.displayName = "FormControl";
export const FormHelpText = forwardRef(({ className, children, ...props }, ref) => {
    const { helpTextId } = useFormField();
    return (_jsx("p", { ref: ref, id: helpTextId, className: cn("text-xs text-muted-foreground leading-normal font-sans", className), ...props, children: children }));
});
FormHelpText.displayName = "FormHelpText";
export const FormError = forwardRef(({ className, children, ...props }, ref) => {
    const { errorId } = useFormField();
    return (_jsx("p", { ref: ref, id: errorId, role: "alert", className: cn("text-xs text-danger font-medium leading-normal font-sans", className), ...props, children: children }));
});
FormError.displayName = "FormError";
const FormFieldRoot = forwardRef(({ className, id: customId, label, required = false, disabled = false, error, helpText, size: explicitSize, children, ...props }, ref) => {
    const formContext = useFormContext();
    const size = explicitSize || formContext?.size || "medium";
    const fieldId = useId("field", customId);
    const labelId = `${fieldId}-label`;
    const errorId = `${fieldId}-error`;
    const helpTextId = `${fieldId}-help`;
    const contextValue = useMemo(() => ({
        fieldId,
        labelId,
        errorId,
        helpTextId,
        hasError: Boolean(error),
        required,
        disabled,
        size,
    }), [fieldId, labelId, errorId, helpTextId, error, required, disabled, size]);
    return (_jsx(FormFieldContext.Provider, { value: contextValue, children: _jsxs("div", { ref: ref, className: cn(formFieldVariants({ size }), className), ...props, children: [label && _jsx(FormLabel, { children: label }), _jsx(FormControl, { children: children }), helpText && !error && _jsx(FormHelpText, { children: helpText }), error && _jsx(FormError, { children: error })] }) }));
});
FormFieldRoot.displayName = "FormField";
export const FormField = Object.assign(FormFieldRoot, {
    Label: FormLabel,
    Control: FormControl,
    HelpText: FormHelpText,
    Error: FormError,
});
