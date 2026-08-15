import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { checkboxBoxVariants } from "./Checkbox.variants";
import { Check, Minus } from "lucide-react";
export const Checkbox = forwardRef(({ className, size = "medium", checked: controlledChecked, defaultChecked = false, onCheckedChange, onChange, indeterminate = false, disabled = false, required = false, id: customId, name, value, label, description, error, children, ...props }, forwardedRef) => {
    const inputId = useId("checkbox", customId);
    const descriptionId = `${inputId}-desc`;
    const errorId = `${inputId}-error`;
    const internalRef = useRef(null);
    const [checked, setChecked] = useControlled({
        controlled: controlledChecked,
        default: defaultChecked,
        name: "Checkbox",
        state: "checked",
    });
    const isChecked = Boolean(checked);
    const isIndeterminate = Boolean(indeterminate);
    const hasError = Boolean(error);
    const labelContent = label ?? children;
    // Synchronize native DOM input ref with forwarded ref and indeterminate property
    useEffect(() => {
        const el = internalRef.current;
        if (el) {
            el.indeterminate = isIndeterminate;
        }
    }, [isIndeterminate]);
    const setMergedRef = (el) => {
        internalRef.current = el;
        if (typeof forwardedRef === "function") {
            forwardedRef(el);
        }
        else if (forwardedRef) {
            forwardedRef.current = el;
        }
    };
    const handleChange = (e) => {
        if (disabled)
            return;
        const nextChecked = isIndeterminate ? true : e.target.checked;
        setChecked(nextChecked);
        onCheckedChange?.(nextChecked);
        onChange?.(e);
    };
    // Determine state variant
    const stateVariant = hasError
        ? isChecked
            ? "errorChecked"
            : "error"
        : isIndeterminate
            ? "indeterminate"
            : isChecked
                ? "checked"
                : "unchecked";
    const describedBy = [
        hasError ? errorId : undefined,
        description ? descriptionId : undefined,
    ]
        .filter(Boolean)
        .join(" ") || undefined;
    return (_jsxs("div", { className: cn("inline-flex items-start gap-2.5 font-sans", className), children: [_jsxs("div", { className: "relative flex items-center justify-center mt-0.5", children: [_jsx("input", { ref: setMergedRef, id: inputId, type: "checkbox", name: name, value: value, checked: isChecked, disabled: disabled, required: required, onChange: handleChange, "aria-invalid": hasError, "aria-describedby": describedBy, className: "peer sr-only", ...props }), _jsx("label", { htmlFor: inputId, className: cn(checkboxBoxVariants({ size, state: stateVariant, disabled }), "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"), children: isIndeterminate ? (_jsx(Minus, { className: cn("stroke-[3] transition-transform duration-150 scale-100", size === "small" && "w-2.5 h-2.5", size === "medium" && "w-3 h-3", size === "large" && "w-3.5 h-3.5"), "aria-hidden": "true" })) : isChecked ? (_jsx(Check, { className: cn("stroke-[3] transition-transform duration-150 scale-100", size === "small" && "w-2.5 h-2.5", size === "medium" && "w-3 h-3", size === "large" && "w-3.5 h-3.5"), "aria-hidden": "true" })) : null })] }), (labelContent || description || error) && (_jsxs("div", { className: "flex flex-col select-none", children: [labelContent && (_jsxs("label", { htmlFor: inputId, className: cn("font-medium leading-none text-foreground cursor-pointer", size === "small" && "text-xs pt-0.5", size === "medium" && "text-sm pt-0.5", size === "large" && "text-base pt-0.5", disabled && "opacity-50 cursor-not-allowed", hasError && "text-danger"), children: [labelContent, required && _jsx("span", { className: "ml-1 text-danger font-bold", children: "*" })] })), description && (_jsx("p", { id: descriptionId, className: cn("text-muted-foreground mt-1", size === "small" && "text-[11px]", size === "medium" && "text-xs", size === "large" && "text-sm", disabled && "opacity-50"), children: description })), error && (_jsx("p", { id: errorId, role: "alert", className: cn("text-danger font-medium mt-1 animate-fade-in", size === "small" && "text-[11px]", size === "medium" && "text-xs", size === "large" && "text-sm"), children: error }))] }))] }));
});
Checkbox.displayName = "Checkbox";
