import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { toastVariants } from "./Toast.variants";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X, } from "lucide-react";
export const Toast = forwardRef(({ className, id, title, description, variant = "default", action, onClose, ...props }, ref) => {
    const isAlert = variant === "danger";
    const getIcon = () => {
        switch (variant) {
            case "success":
                return _jsx(CheckCircle2, { className: "w-5 h-5 text-success shrink-0" });
            case "warning":
                return _jsx(AlertTriangle, { className: "w-5 h-5 text-warning shrink-0" });
            case "danger":
                return _jsx(AlertCircle, { className: "w-5 h-5 text-danger shrink-0" });
            case "info":
                return _jsx(Info, { className: "w-5 h-5 text-primary shrink-0" });
            default:
                return null;
        }
    };
    return (_jsxs("div", { ref: ref, id: id, role: isAlert ? "alert" : "status", "aria-live": isAlert ? "assertive" : "polite", className: cn(toastVariants({ variant }), className), ...props, children: [getIcon(), _jsxs("div", { className: "flex-1 space-y-1", children: [title && _jsx("div", { className: "text-xs font-semibold leading-tight text-foreground", children: title }), description && (_jsx("div", { className: "text-xs text-muted-foreground leading-relaxed", children: description })), action && (_jsx("button", { type: "button", onClick: action.onClick, className: "mt-2 text-xs font-bold text-primary hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-ring", children: action.label }))] }), onClose && (_jsx("button", { type: "button", onClick: onClose, "aria-label": "Close notification", className: "shrink-0 p-1 rounded-chellaa-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring", children: _jsx(X, { className: "w-3.5 h-3.5" }) }))] }));
});
Toast.displayName = "Toast";
