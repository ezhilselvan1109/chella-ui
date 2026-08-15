import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { dividerVariants, dividerLabelVariants, } from "./Divider.variants";
export const Divider = forwardRef(({ className, orientation = "horizontal", variant = "solid", spacing = "medium", align = "center", decorative = true, children, ...props }, ref) => {
    // If text/label is supplied and horizontal, render label layout
    if (children && orientation === "horizontal") {
        return (_jsx("div", { ref: ref, role: decorative ? "none" : "separator", "aria-orientation": "horizontal", "aria-hidden": decorative ? "true" : undefined, className: cn(dividerLabelVariants({ spacing, align, variant }), className), ...props, children: _jsx("span", { className: "px-3 shrink-0 font-medium text-xs text-muted-foreground", children: children }) }));
    }
    if (orientation === "vertical") {
        return (_jsx("div", { ref: ref, role: "separator", "aria-orientation": "vertical", "aria-hidden": decorative ? "true" : undefined, className: cn(dividerVariants({ orientation, variant, spacing }), className), ...props }));
    }
    return (_jsx("hr", { ref: ref, role: "separator", "aria-orientation": "horizontal", "aria-hidden": decorative ? "true" : undefined, className: cn(dividerVariants({ orientation, variant, spacing }), className), ...props }));
});
Divider.displayName = "Divider";
