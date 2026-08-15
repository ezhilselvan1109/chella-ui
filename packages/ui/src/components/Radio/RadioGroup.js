import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { RadioGroupContext } from "./RadioGroup.context";
import { radioGroupVariants } from "./Radio.variants";
export const RadioGroup = forwardRef(({ className, value: controlledValue, defaultValue, onValueChange, name: nameProp, disabled = false, required = false, orientation = "vertical", size = "medium", label, description, error, children, id: customId, ...props }, ref) => {
    const groupId = useId("radiogroup", customId);
    const autoName = useId("radiogroup-name", nameProp);
    const labelId = `${groupId}-label`;
    const descriptionId = `${groupId}-desc`;
    const errorId = `${groupId}-error`;
    const [value, setValue] = useControlled({
        controlled: controlledValue,
        default: defaultValue,
        name: "RadioGroup",
        state: "value",
    });
    const handleValueChange = (newValue) => {
        setValue(newValue);
        onValueChange?.(newValue);
    };
    const contextValue = useMemo(() => ({
        name: autoName,
        value,
        onValueChange: handleValueChange,
        disabled,
        required,
        size,
    }), [autoName, value, disabled, required, size]);
    const hasError = Boolean(error);
    const describedBy = [
        hasError ? errorId : undefined,
        description ? descriptionId : undefined,
    ]
        .filter(Boolean)
        .join(" ") || undefined;
    return (_jsx(RadioGroupContext.Provider, { value: contextValue, children: _jsxs("div", { ref: ref, id: groupId, role: "radiogroup", "aria-labelledby": label ? labelId : undefined, "aria-describedby": describedBy, "aria-invalid": hasError, "aria-required": required, "aria-orientation": orientation ?? "vertical", className: cn("space-y-2 font-sans", className), ...props, children: [label && (_jsxs("div", { id: labelId, className: "text-xs font-semibold tracking-wide text-foreground/90 select-none", children: [label, required && _jsx("span", { className: "ml-1 text-danger font-bold", children: "*" })] })), _jsx("div", { className: cn(radioGroupVariants({ orientation })), children: children }), description && (_jsx("p", { id: descriptionId, className: "text-xs text-muted-foreground mt-1", children: description })), error && (_jsx("p", { id: errorId, role: "alert", className: "text-xs font-medium text-danger mt-1 animate-fade-in", children: error }))] }) }));
});
RadioGroup.displayName = "RadioGroup";
