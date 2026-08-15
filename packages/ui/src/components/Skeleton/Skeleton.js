import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { skeletonVariants } from "./Skeleton.variants";
function formatDimension(dim) {
    if (dim === undefined)
        return undefined;
    return typeof dim === "number" ? `${dim}px` : dim;
}
export const Skeleton = forwardRef(({ className, variant = "text", animation = "pulse", width, height, lines = 1, loading = true, children, style, ...props }, ref) => {
    // If not loading, render children directly
    if (!loading && children !== undefined) {
        return _jsx(_Fragment, { children: children });
    }
    const inlineStyles = {
        width: formatDimension(width),
        height: formatDimension(height),
        ...style,
    };
    // Multiline text skeleton support
    if (variant === "text" && lines > 1) {
        return (_jsx("div", { ref: ref, role: "status", "aria-busy": "true", "aria-label": "Loading content", className: cn("space-y-2 w-full", className), ...props, children: Array.from({ length: lines }).map((_, idx) => {
                const isLast = idx === lines - 1;
                const lineStyle = {
                    height: formatDimension(height),
                    width: isLast && width === undefined ? "75%" : formatDimension(width),
                };
                return (_jsx("div", { style: lineStyle, className: skeletonVariants({ variant: "text", animation }) }, idx));
            }) }));
    }
    return (_jsx("div", { ref: ref, role: "status", "aria-busy": "true", "aria-label": "Loading content", style: inlineStyles, className: cn(skeletonVariants({ variant, animation }), className), ...props }));
});
Skeleton.displayName = "Skeleton";
