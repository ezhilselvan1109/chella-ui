import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { badgeVariants } from "./Badge.variants";
import { X } from "lucide-react";
export const Badge = forwardRef(({ className, variant = "primary", size = "medium", dot = false, removable = false, onRemove, children, ...props }, ref) => {
    return (_jsxs("span", { ref: ref, className: cn(badgeVariants({ variant, size }), className), ...props, children: [dot && (_jsx("span", { className: cn("rounded-full shrink-0", size === "small" ? "w-1.5 h-1.5" : size === "large" ? "w-2.5 h-2.5" : "w-2 h-2", variant === "primary" && "bg-primary", variant === "secondary" && "bg-muted-foreground", variant === "success" && "bg-success", variant === "warning" && "bg-warning", variant === "danger" && "bg-danger", variant === "outline" && "bg-foreground"), "aria-hidden": "true" })), children, removable && (_jsx("button", { type: "button", onClick: (e) => {
                    e.stopPropagation();
                    onRemove?.(e);
                }, "aria-label": "Remove badge", className: "rounded-full hover:bg-black/10 dark:hover:bg-white/20 p-0.5 -mr-1 transition-colors", children: _jsx(X, { className: size === "small" ? "w-2.5 h-2.5" : "w-3 h-3" }) }))] }));
});
Badge.displayName = "Badge";
