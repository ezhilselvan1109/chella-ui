import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, } from "react";
import { cn } from "../../utils/cn";
import { alertVariants } from "./Alert.variants";
import { Info, CheckCircle2, AlertTriangle, AlertCircle, X, } from "lucide-react";
function getDefaultIcon(variant) {
    switch (variant) {
        case "success":
            return _jsx(CheckCircle2, { className: "w-4 h-4 shrink-0 mt-0.5" });
        case "warning":
            return _jsx(AlertTriangle, { className: "w-4 h-4 shrink-0 mt-0.5" });
        case "danger":
            return _jsx(AlertCircle, { className: "w-4 h-4 shrink-0 mt-0.5" });
        case "info":
        case "default":
        default:
            return _jsx(Info, { className: "w-4 h-4 shrink-0 mt-0.5" });
    }
}
export const AlertTitle = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("h5", { ref: ref, className: cn("font-semibold text-xs leading-tight tracking-tight", className), ...props, children: children }));
});
AlertTitle.displayName = "AlertTitle";
export const AlertDescription = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("p", { ref: ref, className: cn("text-xs leading-relaxed mt-1 opacity-90", className), ...props, children: children }));
});
AlertDescription.displayName = "AlertDescription";
const AlertRoot = forwardRef(({ className, variant = "info", styleVariant = "subtle", title, description, icon = true, closable = false, onClose, action, children, ...props }, ref) => {
    const [dismissed, setDismissed] = useState(false);
    if (dismissed)
        return null;
    const handleDismiss = () => {
        setDismissed(true);
        onClose?.();
    };
    const renderedIcon = icon === false ? null : icon === true ? getDefaultIcon(variant) : icon;
    const role = variant === "danger" || variant === "warning" ? "alert" : "status";
    return (_jsxs("div", { ref: ref, role: role, "aria-live": variant === "danger" ? "assertive" : "polite", className: cn(alertVariants({ variant, styleVariant }), className), ...props, children: [renderedIcon, _jsxs("div", { className: "flex-1 space-y-0.5 min-w-0", children: [title && _jsx(AlertTitle, { children: title }), description && _jsx(AlertDescription, { children: description }), children] }), action && _jsx("div", { className: "shrink-0 flex items-center", children: action }), closable && (_jsx("button", { type: "button", onClick: handleDismiss, "aria-label": "Dismiss alert", className: "shrink-0 rounded-chellaa-md p-1 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: _jsx(X, { className: "w-3.5 h-3.5" }) }))] }));
});
AlertRoot.displayName = "Alert";
export const Alert = Object.assign(AlertRoot, {
    Title: AlertTitle,
    Description: AlertDescription,
});
