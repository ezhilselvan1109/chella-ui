import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, } from "react";
import { cn } from "../../utils/cn";
import { paginationVariants, paginationContentVariants, paginationItemVariants, paginationEllipsisVariants, } from "./Pagination.variants";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, } from "lucide-react";
const PaginationContext = createContext(null);
function usePaginationContext() {
    return useContext(PaginationContext);
}
export const PaginationContent = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("ul", { ref: ref, className: cn(paginationContentVariants(), className), ...props, children: children }));
});
PaginationContent.displayName = "PaginationContent";
export const PaginationItem = forwardRef(({ className, variant: itemVariant, size: itemSize, active = false, disabled, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = itemVariant || context?.variant || "default";
    const size = itemSize || context?.size || "medium";
    const isDisabled = disabled || context?.disabled || false;
    return (_jsx("li", { children: _jsx("button", { ref: ref, type: "button", "aria-current": active ? "page" : undefined, disabled: isDisabled, className: cn(paginationItemVariants({ variant, size, active }), className), ...props, children: children }) }));
});
PaginationItem.displayName = "PaginationItem";
export const PaginationPrev = forwardRef(({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";
    return (_jsx("li", { children: _jsx("button", { ref: ref, type: "button", "aria-label": "Go to previous page", className: cn(paginationItemVariants({ variant, size }), className), ...props, children: children ?? _jsx(ChevronLeft, { className: "w-4 h-4" }) }) }));
});
PaginationPrev.displayName = "PaginationPrev";
export const PaginationNext = forwardRef(({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";
    return (_jsx("li", { children: _jsx("button", { ref: ref, type: "button", "aria-label": "Go to next page", className: cn(paginationItemVariants({ variant, size }), className), ...props, children: children ?? _jsx(ChevronRight, { className: "w-4 h-4" }) }) }));
});
PaginationNext.displayName = "PaginationNext";
export const PaginationFirst = forwardRef(({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";
    return (_jsx("li", { children: _jsx("button", { ref: ref, type: "button", "aria-label": "Go to first page", className: cn(paginationItemVariants({ variant, size }), className), ...props, children: children ?? _jsx(ChevronsLeft, { className: "w-4 h-4" }) }) }));
});
PaginationFirst.displayName = "PaginationFirst";
export const PaginationLast = forwardRef(({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";
    return (_jsx("li", { children: _jsx("button", { ref: ref, type: "button", "aria-label": "Go to last page", className: cn(paginationItemVariants({ variant, size }), className), ...props, children: children ?? _jsx(ChevronsRight, { className: "w-4 h-4" }) }) }));
});
PaginationLast.displayName = "PaginationLast";
export const PaginationEllipsis = forwardRef(({ className, ...props }, ref) => {
    return (_jsx("li", { "aria-hidden": "true", children: _jsxs("span", { ref: ref, role: "presentation", className: cn(paginationEllipsisVariants(), className), ...props, children: [_jsx(MoreHorizontal, { className: "w-4 h-4" }), _jsx("span", { className: "sr-only", children: "More pages" })] }) }));
});
PaginationEllipsis.displayName = "PaginationEllipsis";
function getPaginationRange(currentPage, totalPages, siblingCount = 1) {
    const totalPageNumbers = siblingCount * 2 + 5; // 1 + siblings + current + siblings + last + 2 ellipses
    if (totalPages <= totalPageNumbers) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
        return [...leftRange, "ellipsis-end", totalPages];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
        return [1, "ellipsis-start", ...rightRange];
    }
    const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
    return [1, "ellipsis-start", ...middleRange, "ellipsis-end", totalPages];
}
const PaginationRoot = forwardRef(({ className, page: controlledPage, defaultPage = 1, totalPages, siblingCount = 1, showEdges = false, showPrevNext = true, variant = "default", size = "medium", disabled = false, onPageChange, children, ...props }, ref) => {
    const currentPage = controlledPage ?? defaultPage;
    const handlePageClick = (newPage) => {
        if (newPage < 1 || (totalPages && newPage > totalPages) || disabled)
            return;
        onPageChange?.(newPage);
    };
    const contextValue = useMemo(() => ({
        variant,
        size,
        disabled,
    }), [variant, size, disabled]);
    let content = children;
    if (totalPages !== undefined && !children) {
        const range = getPaginationRange(currentPage, totalPages, siblingCount);
        content = (_jsxs(PaginationContent, { children: [showEdges && (_jsx(PaginationFirst, { onClick: () => handlePageClick(1), disabled: currentPage <= 1 || disabled })), showPrevNext && (_jsx(PaginationPrev, { onClick: () => handlePageClick(currentPage - 1), disabled: currentPage <= 1 || disabled })), range.map((item, index) => {
                    if (typeof item === "string") {
                        return _jsx(PaginationEllipsis, {}, `dots-${item}-${index}`);
                    }
                    return (_jsx(PaginationItem, { active: item === currentPage, onClick: () => handlePageClick(item), disabled: disabled, children: item }, item));
                }), showPrevNext && (_jsx(PaginationNext, { onClick: () => handlePageClick(currentPage + 1), disabled: currentPage >= totalPages || disabled })), showEdges && (_jsx(PaginationLast, { onClick: () => handlePageClick(totalPages), disabled: currentPage >= totalPages || disabled }))] }));
    }
    return (_jsx(PaginationContext.Provider, { value: contextValue, children: _jsx("nav", { ref: ref, role: "navigation", "aria-label": "pagination", className: cn(paginationVariants({ size }), className), ...props, children: content }) }));
});
PaginationRoot.displayName = "Pagination";
export const Pagination = Object.assign(PaginationRoot, {
    Content: PaginationContent,
    Item: PaginationItem,
    Prev: PaginationPrev,
    Next: PaginationNext,
    First: PaginationFirst,
    Last: PaginationLast,
    Ellipsis: PaginationEllipsis,
});
