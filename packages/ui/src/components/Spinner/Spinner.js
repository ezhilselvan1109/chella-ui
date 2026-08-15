import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { spinnerVariants, spinnerTrackVariants, spinnerIndicatorVariants, } from "./Spinner.variants";
export const Spinner = forwardRef(({ className, size = "medium", variant = "primary", label = "Loading...", showLabel = false, thickness = 4, ...props }, ref) => {
    const svgElement = (_jsxs("svg", { "aria-hidden": !showLabel ? "true" : undefined, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: cn(spinnerVariants({ variant, size }), !showLabel && className), children: [_jsx("circle", { className: spinnerTrackVariants(), cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: thickness }), _jsx("path", { className: spinnerIndicatorVariants(), fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }));
    if (showLabel) {
        return (_jsxs("div", { ref: ref, role: "status", className: cn("inline-flex items-center gap-2 font-sans select-none", className), ...props, children: [svgElement, _jsx("span", { className: "text-xs font-medium text-foreground leading-none", children: label }), _jsx("span", { className: "sr-only", children: label })] }));
    }
    return (_jsxs("div", { ref: ref, role: "status", className: "inline-flex items-center justify-center font-sans select-none", ...props, children: [svgElement, _jsx("span", { className: "sr-only", children: label })] }));
});
Spinner.displayName = "Spinner";
