import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, Children, cloneElement, isValidElement } from "react";
import { cn } from "../../utils/cn";
import { kbdVariants } from "./Kbd.variants";
const KEY_MAP = {
    cmd: "⌘",
    command: "⌘",
    shift: "⇧",
    ctrl: "Ctrl",
    control: "Ctrl",
    alt: "⌥",
    option: "⌥",
    enter: "↵",
    return: "↵",
    esc: "Esc",
    escape: "Esc",
    tab: "⇥",
    space: "Space",
    backspace: "⌫",
    delete: "Del",
    up: "↑",
    down: "↓",
    left: "←",
    right: "→",
};
export const KbdGroup = forwardRef(({ className, size, variant, separator = "+", children, ...props }, ref) => {
    const childrenArray = Children.toArray(children);
    return (_jsx("div", { ref: ref, className: cn("inline-flex items-center gap-1 font-sans", className), ...props, children: childrenArray.map((child, index) => {
            const isLast = index === childrenArray.length - 1;
            return (_jsxs("div", { className: "inline-flex items-center gap-1", children: [isValidElement(child)
                        ? cloneElement(child, {
                            size: child.props.size || size,
                            variant: child.props.variant || variant,
                        })
                        : child, !isLast && separator && (_jsx("span", { className: "text-muted-foreground text-xs font-mono select-none", children: separator }))] }, index));
        }) }));
});
KbdGroup.displayName = "KbdGroup";
const KbdRoot = forwardRef(({ className, variant = "default", size = "medium", keys, separator = "", children, ...props }, ref) => {
    if (keys && keys.length > 0) {
        return (_jsx("div", { className: "inline-flex items-center gap-1 font-sans", children: keys.map((keyName, idx) => {
                const mapped = KEY_MAP[keyName.toLowerCase()] || keyName.toUpperCase();
                const isLast = idx === keys.length - 1;
                return (_jsxs("span", { className: "inline-flex items-center gap-1", children: [_jsx("kbd", { ref: idx === 0 ? ref : undefined, className: cn(kbdVariants({ variant, size }), className), ...props, children: mapped }), !isLast && separator && (_jsx("span", { className: "text-muted-foreground text-xs font-mono select-none", children: separator }))] }, idx));
            }) }));
    }
    return (_jsx("kbd", { ref: ref, className: cn(kbdVariants({ variant, size }), className), ...props, children: children }));
});
KbdRoot.displayName = "Kbd";
export const Kbd = Object.assign(KbdRoot, {
    Group: KbdGroup,
});
