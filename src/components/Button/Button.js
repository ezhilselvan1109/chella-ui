import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { buttonVariants } from "./Button.variants";
import { Loader2 } from "lucide-react";
export const Button = forwardRef(({ className, variant = "primary", size = "medium", loading = false, disabled = false, fullWidth = false, leftIcon, rightIcon, children, type = "button", ...props }, ref) => {
    const isDisabled = disabled || loading;
    return (_jsxs("button", { ref: ref, type: type, disabled: isDisabled, "aria-busy": loading, "aria-disabled": isDisabled, className: cn(buttonVariants({ variant, size, fullWidth }), className), ...props, children: [loading && (_jsx(Loader2, { className: cn("animate-spin shrink-0", size === "small" ? "h-3.5 w-3.5" : size === "large" ? "h-5 w-5" : "h-4 w-4"), "aria-hidden": "true" })), !loading && leftIcon && _jsx("span", { className: "inline-flex shrink-0 items-center", children: leftIcon }), children && _jsx("span", { children: children }), !loading && rightIcon && _jsx("span", { className: "inline-flex shrink-0 items-center", children: rightIcon })] }));
});
Button.displayName = "Button";
