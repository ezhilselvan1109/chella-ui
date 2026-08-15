import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, useState, } from "react";
import { cn } from "../../utils/cn";
import { useId } from "../../hooks/useId";
import { textareaVariants } from "./Textarea.variants";
export const Textarea = forwardRef(({ className, variant = "default", size = "medium", resize = "vertical", label, description, error, showCount = false, autoResize = false, maxLength, value: controlledValue, defaultValue = "", onChange, disabled = false, required = false, id: customId, rows = 3, ...props }, forwardedRef) => {
    const textareaId = useId("textarea", customId);
    const descriptionId = `${textareaId}-desc`;
    const errorId = `${textareaId}-error`;
    const countId = `${textareaId}-count`;
    const internalRef = useRef(null);
    const [internalValue, setInternalValue] = useState(String(defaultValue ?? ""));
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? String(controlledValue ?? "") : internalValue;
    const currentLength = currentValue.length;
    const hasError = Boolean(error);
    // Merge internal and external refs
    const setMergedRef = (el) => {
        internalRef.current = el;
        if (typeof forwardedRef === "function") {
            forwardedRef(el);
        }
        else if (forwardedRef) {
            forwardedRef.current = el;
        }
    };
    // Auto-resize effect on content changes
    const adjustHeight = () => {
        if (autoResize && internalRef.current) {
            internalRef.current.style.height = "auto";
            internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;
        }
    };
    useEffect(() => {
        adjustHeight();
    }, [currentValue, autoResize]);
    const handleChange = (e) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        onChange?.(e);
        adjustHeight();
    };
    const describedBy = [
        hasError ? errorId : undefined,
        description ? descriptionId : undefined,
        showCount ? countId : undefined,
    ]
        .filter(Boolean)
        .join(" ") || undefined;
    return (_jsxs("div", { className: cn("w-full space-y-1.5 font-sans", className), children: [(label || showCount) && (_jsxs("div", { className: "flex items-center justify-between", children: [label && (_jsxs("label", { htmlFor: textareaId, className: cn("text-xs font-semibold tracking-wide text-foreground/90 select-none block", disabled && "opacity-50 cursor-not-allowed", hasError && "text-danger"), children: [label, required && _jsx("span", { className: "ml-1 text-danger font-bold", children: "*" })] })), showCount && (_jsxs("span", { id: countId, className: cn("text-[11px] font-mono text-muted-foreground ml-auto", maxLength && currentLength >= maxLength && "text-danger font-bold"), "aria-live": "polite", children: [currentLength, maxLength ? ` / ${maxLength}` : ""] }))] })), _jsx("textarea", { ref: setMergedRef, id: textareaId, rows: rows, value: controlledValue, defaultValue: isControlled ? undefined : defaultValue, maxLength: maxLength, disabled: disabled, required: required, onChange: handleChange, "aria-invalid": hasError, "aria-describedby": describedBy, className: cn(textareaVariants({
                    variant,
                    size,
                    resize: autoResize ? "none" : resize,
                    hasError,
                })), ...props }), description && (_jsx("p", { id: descriptionId, className: "text-xs text-muted-foreground", children: description })), error && (_jsx("p", { id: errorId, role: "alert", className: "text-xs font-medium text-danger animate-fade-in", children: error }))] }));
});
Textarea.displayName = "Textarea";
