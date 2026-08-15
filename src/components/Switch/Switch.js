import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { switchTrackVariants, switchThumbVariants } from "./Switch.variants";
export const Switch = forwardRef(({ className, size = "medium", checked: controlledChecked, defaultChecked = false, onCheckedChange, onChange, disabled = false, required = false, id: customId, name, value, label, description, error, children, ...props }, ref) => {
    const inputId = useId("switch", customId);
    const descriptionId = `${inputId}-desc`;
    const errorId = `${inputId}-error`;
    const [checked, setChecked] = useControlled({
        controlled: controlledChecked,
        default: defaultChecked,
        name: "Switch",
        state: "checked",
    });
    const isChecked = Boolean(checked);
    const hasError = Boolean(error);
    const labelContent = label ?? children;
    const handleChange = (e) => {
        if (disabled)
            return;
        const nextChecked = e.target.checked;
        setChecked(nextChecked);
        onCheckedChange?.(nextChecked);
        onChange?.(e);
    };
    // Determine track state variant
    const stateVariant = hasError
        ? isChecked
            ? "errorChecked"
            : "error"
        : isChecked
            ? "checked"
            : "unchecked";
    const describedBy = [
        hasError ? errorId : undefined,
        description ? descriptionId : undefined,
    ]
        .filter(Boolean)
        .join(" ") || undefined;
    return (_jsxs("div", { className: cn("inline-flex items-start gap-3 font-sans", className), children: [_jsxs("div", { className: "relative flex items-center justify-center mt-0.5", children: [_jsx("input", { ref: ref, id: inputId, type: "checkbox", role: "switch", name: name, value: value, checked: isChecked, disabled: disabled, required: required, onChange: handleChange, "aria-checked": isChecked, "aria-invalid": hasError, "aria-describedby": describedBy, className: "peer sr-only", ...props }), _jsx("label", { htmlFor: inputId, className: cn(switchTrackVariants({ size, state: stateVariant, disabled }), "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"), children: _jsx("span", { className: cn(switchThumbVariants({ size, checked: isChecked })), "aria-hidden": "true" }) })] }), (labelContent || description || error) && (_jsxs("div", { className: "flex flex-col select-none", children: [labelContent && (_jsxs("label", { htmlFor: inputId, className: cn("font-medium leading-none text-foreground cursor-pointer", size === "small" && "text-xs pt-0.5", size === "medium" && "text-sm pt-0.5", size === "large" && "text-base pt-0.5", disabled && "opacity-50 cursor-not-allowed", hasError && "text-danger"), children: [labelContent, required && _jsx("span", { className: "ml-1 text-danger font-bold", children: "*" })] })), description && (_jsx("p", { id: descriptionId, className: cn("text-muted-foreground mt-1", size === "small" && "text-[11px]", size === "medium" && "text-xs", size === "large" && "text-sm", disabled && "opacity-50"), children: description })), error && (_jsx("p", { id: errorId, role: "alert", className: cn("text-danger font-medium mt-1 animate-fade-in", size === "small" && "text-[11px]", size === "medium" && "text-xs", size === "large" && "text-sm"), children: error }))] }))] }));
});
Switch.displayName = "Switch";
