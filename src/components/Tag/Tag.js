import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { tagVariants, tagCloseButtonVariants } from "./Tag.variants";
import { X } from "lucide-react";
export const Tag = forwardRef(({ className, variant = "default", size = "medium", shape = "rounded", closable = false, selectable = false, selected = false, disabled = false, icon, avatar, onClose, onRemove, onClick, children, ...props }, ref) => {
    const handleClose = (e) => {
        e.stopPropagation();
        onClose?.(e);
        onRemove?.(e);
    };
    const isInteractive = selectable || Boolean(onClick);
    return (_jsxs("span", { ref: ref, role: selectable ? "checkbox" : undefined, "aria-checked": selectable ? selected : undefined, "aria-disabled": disabled ? "true" : undefined, tabIndex: isInteractive && !disabled ? 0 : undefined, onClick: !disabled ? onClick : undefined, className: cn(tagVariants({
            variant,
            size,
            shape,
            selectable: isInteractive,
            selected,
            disabled,
        }), className), ...props, children: [avatar && _jsx("span", { className: "shrink-0 -ml-1 mr-0.5", children: avatar }), icon && _jsx("span", { className: "shrink-0 [&>svg]:size-3.5", children: icon }), _jsx("span", { children: children }), closable && !disabled && (_jsx("button", { type: "button", "aria-label": "Remove tag", onClick: handleClose, className: tagCloseButtonVariants(), children: _jsx(X, { className: "w-3 h-3" }) }))] }));
});
Tag.displayName = "Tag";
