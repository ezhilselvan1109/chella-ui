import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { dropdownMenuVariants, dropdownItemVariants } from "./Dropdown.variants";
export const DropdownItem = forwardRef(({ className, icon, disabled = false, variant = "default", children, onClick, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, role: "menuitem", tabIndex: disabled ? -1 : 0, "aria-disabled": disabled, "data-disabled": disabled ? "" : undefined, onClick: (e) => {
            if (disabled)
                return;
            onClick?.(e);
        }, className: cn(dropdownItemVariants({ variant }), className), ...props, children: [icon && _jsx("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center", children: icon }), _jsx("span", { className: "flex-1 truncate", children: children })] }));
});
DropdownItem.displayName = "DropdownItem";
export const DropdownDivider = ({ className, ...props }) => (_jsx("div", { role: "separator", className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
DropdownDivider.displayName = "DropdownDivider";
export const DropdownHeader = ({ className, children, ...props }) => (_jsx("div", { className: cn("px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", className), ...props, children: children }));
DropdownHeader.displayName = "DropdownHeader";
const DropdownRoot = forwardRef(({ className, trigger, items, children, placement = "bottom-start", open: controlledOpen, defaultOpen = false, onOpenChange, closeOnSelect = true, disabled = false, id: customId, ...props }, forwardedRef) => {
    const dropdownId = useId("dropdown", customId);
    const menuId = `${dropdownId}-menu`;
    const containerRef = useRef(null);
    const [isOpen, setIsOpen] = useControlled({
        controlled: controlledOpen,
        default: defaultOpen,
        name: "Dropdown",
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
    const handleToggle = (_e) => {
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
    const handleItemClick = (item, e) => {
        if (item.disabled || item.divider)
            return;
        item.onClick?.(e);
        if (closeOnSelect) {
            handleClose();
        }
    };
    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsOpen(true);
                onOpenChange?.(true);
            }
            return;
        }
        if (e.key === "Escape" || e.key === "Tab") {
            e.preventDefault();
            handleClose();
        }
    };
    // Close on click outside
    useEffect(() => {
        if (!isOpen)
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
    }, [isOpen]);
    return (_jsxs("div", { ref: setMergedRef, id: dropdownId, className: cn("relative inline-flex font-sans", className), onKeyDown: handleKeyDown, ...props, children: [_jsx("div", { onClick: handleToggle, "aria-haspopup": "menu", "aria-expanded": isOpen, "aria-controls": isOpen ? menuId : undefined, className: "inline-flex cursor-pointer", children: trigger }), isOpen && !disabled && (_jsx("div", { id: menuId, role: "menu", "aria-orientation": "vertical", tabIndex: -1, className: cn("absolute", dropdownMenuVariants({ placement })), children: items ? (items.map((item, idx) => {
                    if (item.divider) {
                        return _jsx(DropdownDivider, {}, item.key || `divider-${idx}`);
                    }
                    return (_jsx(DropdownItem, { icon: item.icon, disabled: item.disabled, variant: item.variant, onClick: (e) => handleItemClick(item, e), children: item.label }, item.key));
                })) : (children) }))] }));
});
DropdownRoot.displayName = "Dropdown";
export const Dropdown = Object.assign(DropdownRoot, {
    Item: DropdownItem,
    Divider: DropdownDivider,
    Header: DropdownHeader,
});
