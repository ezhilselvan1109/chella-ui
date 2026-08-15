import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, } from "react";
import { cn } from "../../utils/cn";
import { breadcrumbVariants, breadcrumbListVariants, breadcrumbItemVariants, breadcrumbLinkVariants, breadcrumbPageVariants, breadcrumbSeparatorVariants, } from "./Breadcrumb.variants";
import { ChevronRight, MoreHorizontal } from "lucide-react";
const BreadcrumbContext = createContext(null);
function useBreadcrumbContext() {
    return useContext(BreadcrumbContext);
}
export const BreadcrumbList = forwardRef(({ className, children, ...props }, ref) => {
    const context = useBreadcrumbContext();
    const size = context?.size || "medium";
    return (_jsx("ol", { ref: ref, className: cn(breadcrumbListVariants({ size }), className), ...props, children: children }));
});
BreadcrumbList.displayName = "BreadcrumbList";
export const BreadcrumbItem = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("li", { ref: ref, className: cn(breadcrumbItemVariants(), className), ...props, children: children }));
});
BreadcrumbItem.displayName = "BreadcrumbItem";
export const BreadcrumbLink = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("a", { ref: ref, className: cn(breadcrumbLinkVariants(), className), ...props, children: children }));
});
BreadcrumbLink.displayName = "BreadcrumbLink";
export const BreadcrumbPage = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("span", { ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cn(breadcrumbPageVariants(), className), ...props, children: children }));
});
BreadcrumbPage.displayName = "BreadcrumbPage";
export const BreadcrumbSeparator = forwardRef(({ className, children, ...props }, ref) => {
    const context = useBreadcrumbContext();
    const defaultIcon = context?.separator || _jsx(ChevronRight, { className: "w-3.5 h-3.5" });
    return (_jsx("li", { ref: ref, role: "presentation", "aria-hidden": "true", className: cn(breadcrumbSeparatorVariants(), className), ...props, children: children ?? defaultIcon }));
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
export const BreadcrumbEllipsis = forwardRef(({ className, ...props }, ref) => {
    return (_jsxs("span", { ref: ref, role: "presentation", "aria-hidden": "true", className: cn("flex h-6 w-6 items-center justify-center text-muted-foreground", className), ...props, children: [_jsx(MoreHorizontal, { className: "w-4 h-4" }), _jsx("span", { className: "sr-only", children: "More links" })] }));
});
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
function renderItemsList(items, maxItems, itemsBeforeCollapse = 1, itemsAfterCollapse = 2) {
    let hasEllipsis = false;
    if (maxItems && items.length > maxItems) {
        const totalVisible = itemsBeforeCollapse + itemsAfterCollapse;
        if (items.length > totalVisible) {
            hasEllipsis = true;
        }
    }
    if (!hasEllipsis) {
        return items.map((item, index) => {
            const isLast = index === items.length - 1 || item.active;
            return (_jsxs("span", { className: "inline-flex items-center gap-1.5", children: [index > 0 && _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: isLast ? (_jsxs(BreadcrumbPage, { children: [item.icon && _jsx("span", { className: "mr-1.5 inline-flex", children: item.icon }), item.label] })) : (_jsxs(BreadcrumbLink, { href: item.href, onClick: item.onClick, className: item.onClick ? "cursor-pointer" : undefined, children: [item.icon && _jsx("span", { className: "mr-1.5 inline-flex", children: item.icon }), item.label] })) })] }, index));
        });
    }
    const startItems = items.slice(0, itemsBeforeCollapse);
    const endItems = items.slice(items.length - itemsAfterCollapse);
    return (_jsxs(_Fragment, { children: [startItems.map((item, index) => (_jsxs("span", { className: "inline-flex items-center gap-1.5", children: [index > 0 && _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsxs(BreadcrumbLink, { href: item.href, onClick: item.onClick, children: [item.icon && _jsx("span", { className: "mr-1.5 inline-flex", children: item.icon }), item.label] }) })] }, `start-${index}`))), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbEllipsis, {}) }), endItems.map((item, index) => {
                const isLast = index === endItems.length - 1 || item.active;
                return (_jsxs("span", { className: "inline-flex items-center gap-1.5", children: [_jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: isLast ? (_jsxs(BreadcrumbPage, { children: [item.icon && _jsx("span", { className: "mr-1.5 inline-flex", children: item.icon }), item.label] })) : (_jsxs(BreadcrumbLink, { href: item.href, onClick: item.onClick, children: [item.icon && _jsx("span", { className: "mr-1.5 inline-flex", children: item.icon }), item.label] })) })] }, `end-${index}`));
            })] }));
}
const BreadcrumbRoot = forwardRef(({ className, separator, size = "medium", items, maxItems, itemsBeforeCollapse = 1, itemsAfterCollapse = 2, children, ...props }, ref) => {
    const contextValue = useMemo(() => ({
        separator,
        size,
    }), [separator, size]);
    return (_jsx(BreadcrumbContext.Provider, { value: contextValue, children: _jsx("nav", { ref: ref, "aria-label": "breadcrumb", className: cn(breadcrumbVariants({ size }), className), ...props, children: items ? (_jsx(BreadcrumbList, { children: renderItemsList(items, maxItems, itemsBeforeCollapse, itemsAfterCollapse) })) : (children) }) }));
});
BreadcrumbRoot.displayName = "Breadcrumb";
export const Breadcrumb = Object.assign(BreadcrumbRoot, {
    List: BreadcrumbList,
    Item: BreadcrumbItem,
    Link: BreadcrumbLink,
    Page: BreadcrumbPage,
    Separator: BreadcrumbSeparator,
    Ellipsis: BreadcrumbEllipsis,
});
