import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { progressTrackVariants, progressIndicatorVariants } from "./Progress.variants";
export const Progress = forwardRef(({ className, value = 0, max = 100, showLabel = false, label, formatValue, size = "medium", variant = "default", indeterminate = false, striped = false, animated = false, ...props }, ref) => {
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = max > 0 ? Math.round((clampedValue / max) * 100) : 0;
    const displayValue = formatValue ? formatValue(clampedValue, max) : `${percentage}%`;
    return (_jsxs("div", { ref: ref, className: cn("w-full space-y-1.5 font-sans", className), ...props, children: [showLabel && (_jsxs("div", { className: "flex justify-between items-center text-xs font-semibold text-foreground select-none", children: [_jsx("span", { children: label || "Progress" }), _jsx("span", { className: "text-muted-foreground font-mono", children: displayValue })] })), _jsx("div", { role: "progressbar", "aria-valuenow": indeterminate ? undefined : clampedValue, "aria-valuemin": 0, "aria-valuemax": max, "aria-valuetext": indeterminate ? "Loading..." : `${percentage}%`, className: cn(progressTrackVariants({ size })), children: _jsx("div", { style: { width: indeterminate ? undefined : `${percentage}%` }, className: cn(progressIndicatorVariants({
                        variant,
                        indeterminate,
                        striped,
                        animated,
                    })) }) })] }));
});
Progress.displayName = "Progress";
