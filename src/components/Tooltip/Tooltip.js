import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { tooltipContentVariants, tooltipArrowVariants } from "./Tooltip.variants";
export const Tooltip = forwardRef(({ className, content, children, placement = "top", variant = "default", arrow = true, delayDuration = 100, open: controlledOpen, defaultOpen = false, onOpenChange, disabled = false, id: customId, ...props }, ref) => {
    const tooltipId = useId("tooltip", customId);
    const timeoutRef = useRef(null);
    const [isOpen, setIsOpen] = useControlled({
        controlled: controlledOpen,
        default: defaultOpen,
        name: "Tooltip",
        state: "open",
    });
    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };
    const handleOpen = () => {
        if (disabled || !content)
            return;
        clearTimer();
        if (delayDuration > 0) {
            timeoutRef.current = setTimeout(() => {
                setIsOpen(true);
                onOpenChange?.(true);
            }, delayDuration);
        }
        else {
            setIsOpen(true);
            onOpenChange?.(true);
        }
    };
    const handleClose = () => {
        clearTimer();
        if (isOpen) {
            setIsOpen(false);
            onOpenChange?.(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Escape" && isOpen) {
            e.stopPropagation();
            handleClose();
        }
    };
    useEffect(() => {
        return () => {
            clearTimer();
        };
    }, []);
    return (_jsxs("div", { ref: ref, className: cn("relative inline-flex", className), onMouseEnter: handleOpen, onMouseLeave: handleClose, onFocus: handleOpen, onBlur: handleClose, onKeyDown: handleKeyDown, "aria-describedby": isOpen && !disabled ? tooltipId : undefined, ...props, children: [children, isOpen && !disabled && content && (_jsxs("div", { id: tooltipId, role: "tooltip", className: cn("absolute whitespace-nowrap", tooltipContentVariants({ variant, placement })), children: [content, arrow && (_jsx("span", { className: cn(tooltipArrowVariants({ variant, placement })), "aria-hidden": "true" }))] }))] }));
});
Tooltip.displayName = "Tooltip";
