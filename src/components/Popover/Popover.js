import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { popoverContentVariants } from "./Popover.variants";
import { X } from "lucide-react";
export const Popover = forwardRef(({ className, content, children, placement = "bottom-start", open: controlledOpen, defaultOpen = false, onOpenChange, closeOnOutsideClick = true, closeOnEscape = true, showCloseButton = false, contentClassName, disabled = false, id: customId, ...props }, forwardedRef) => {
    const popoverId = useId("popover", customId);
    const contentId = `${popoverId}-content`;
    const containerRef = useRef(null);
    const [isOpen, setIsOpen] = useControlled({
        controlled: controlledOpen,
        default: defaultOpen,
        name: "Popover",
        state: "open",
    });
    const setMergedRef = (el) => {
        containerRef.current = el;
        if (typeof forwardedRef === "function") {
            forwardedRef(el);
        }
        else if (forwardedRef) {
            forwardedRef.current = el;
        }
    };
    const toggleOpen = (_e) => {
        if (disabled)
            return;
        const nextOpen = !isOpen;
        setIsOpen(nextOpen);
        onOpenChange?.(nextOpen);
    };
    const handleClose = () => {
        if (isOpen) {
            setIsOpen(false);
            onOpenChange?.(false);
        }
    };
    const handleKeyDown = (e) => {
        if (closeOnEscape && e.key === "Escape" && isOpen) {
            e.stopPropagation();
            handleClose();
        }
    };
    // Close on click outside
    useEffect(() => {
        if (!isOpen || !closeOnOutsideClick)
            return;
        const handleOutsideClick = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                handleClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, closeOnOutsideClick]);
    return (_jsxs("div", { ref: setMergedRef, id: popoverId, className: cn("relative inline-flex font-sans", className), onKeyDown: handleKeyDown, ...props, children: [_jsx("div", { onClick: toggleOpen, "aria-haspopup": "dialog", "aria-expanded": isOpen, "aria-controls": isOpen ? contentId : undefined, className: "inline-flex cursor-pointer", children: children }), isOpen && !disabled && (_jsxs("div", { id: contentId, role: "dialog", "aria-modal": "false", className: cn("absolute", popoverContentVariants({ placement }), contentClassName), children: [showCloseButton && (_jsx("button", { type: "button", onClick: handleClose, "aria-label": "Close popover", className: "absolute top-3 right-3 p-1 rounded-chella-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: _jsx(X, { className: "w-3.5 h-3.5" }) })), content] }))] }));
});
Popover.displayName = "Popover";
