import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { cn } from "../../utils/cn";
import { bannerVariants, bannerCloseButtonVariants } from "./Banner.variants";
import { X } from "lucide-react";
export const Banner = forwardRef(({ className, variant = "gradient", position = "static", icon, badge, action, closable = false, onClose, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible) {
        return null;
    }
    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };
    return (_jsxs("aside", { ref: ref, role: "region", "aria-label": "Announcement", className: cn(bannerVariants({ variant, position }), className), ...props, children: [_jsxs("div", { className: "flex items-center gap-2.5 min-w-0 flex-1", children: [icon && _jsx("span", { className: "shrink-0 [&>svg]:size-4", children: icon }), badge && _jsx("span", { className: "shrink-0", children: badge }), _jsx("div", { className: "truncate font-medium", children: children })] }), _jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [action && _jsx("div", { children: action }), closable && (_jsx("button", { type: "button", "aria-label": "Dismiss banner", onClick: handleClose, className: bannerCloseButtonVariants(), children: _jsx(X, { className: "w-3.5 h-3.5" }) }))] })] }));
});
Banner.displayName = "Banner";
