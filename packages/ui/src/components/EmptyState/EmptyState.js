import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, } from "react";
import { cn } from "../../utils/cn";
import { emptyStateVariants, emptyStateIconVariants, emptyStateTitleVariants, emptyStateDescriptionVariants, } from "./EmptyState.variants";
const EmptyStateContext = createContext(null);
function useEmptyStateContext() {
    return useContext(EmptyStateContext);
}
export const EmptyStateIcon = forwardRef(({ className, size: itemSize, children, ...props }, ref) => {
    const context = useEmptyStateContext();
    const size = itemSize || context?.size || "medium";
    return (_jsx("div", { ref: ref, "aria-hidden": "true", className: cn(emptyStateIconVariants({ size }), className), ...props, children: children }));
});
EmptyStateIcon.displayName = "EmptyStateIcon";
export const EmptyStateTitle = forwardRef(({ className, size: itemSize, children, ...props }, ref) => {
    const context = useEmptyStateContext();
    const size = itemSize || context?.size || "medium";
    return (_jsx("h3", { ref: ref, className: cn(emptyStateTitleVariants({ size }), className), ...props, children: children }));
});
EmptyStateTitle.displayName = "EmptyStateTitle";
export const EmptyStateDescription = forwardRef(({ className, size: itemSize, children, ...props }, ref) => {
    const context = useEmptyStateContext();
    const size = itemSize || context?.size || "medium";
    return (_jsx("p", { ref: ref, className: cn(emptyStateDescriptionVariants({ size }), className), ...props, children: children }));
});
EmptyStateDescription.displayName = "EmptyStateDescription";
export const EmptyStateAction = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("mt-5 flex flex-wrap items-center justify-center gap-2.5", className), ...props, children: children }));
});
EmptyStateAction.displayName = "EmptyStateAction";
const EmptyStateRoot = forwardRef(({ className, variant = "default", size = "medium", icon, title, description, action, children, ...props }, ref) => {
    const contextValue = useMemo(() => ({
        size,
    }), [size]);
    return (_jsx(EmptyStateContext.Provider, { value: contextValue, children: _jsxs("div", { ref: ref, role: "status", className: cn(emptyStateVariants({ variant, size }), className), ...props, children: [icon && _jsx(EmptyStateIcon, { children: icon }), title && _jsx(EmptyStateTitle, { children: title }), description && _jsx(EmptyStateDescription, { children: description }), action && _jsx(EmptyStateAction, { children: action }), children] }) }));
});
EmptyStateRoot.displayName = "EmptyState";
export const EmptyState = Object.assign(EmptyStateRoot, {
    Icon: EmptyStateIcon,
    Title: EmptyStateTitle,
    Description: EmptyStateDescription,
    Action: EmptyStateAction,
});
