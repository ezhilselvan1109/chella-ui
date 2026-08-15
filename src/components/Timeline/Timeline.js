import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, Children, isValidElement, cloneElement, } from "react";
import { cn } from "../../utils/cn";
import { timelineVariants, timelineItemVariants, timelinePointVariants, } from "./Timeline.variants";
const TimelineContext = createContext(null);
function useTimelineContext() {
    return useContext(TimelineContext);
}
export const TimelinePoint = forwardRef(({ className, status = "default", size = "medium", children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, "aria-hidden": "true", className: cn(timelinePointVariants({ status, size }), className), ...props, children: children }));
});
TimelinePoint.displayName = "TimelinePoint";
export const TimelineContent = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex-1 space-y-1 pb-2 pt-0.5", className), ...props, children: children }));
});
TimelineContent.displayName = "TimelineContent";
export const TimelineTime = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("time", { ref: ref, className: cn("block text-[11px] text-muted-foreground font-mono leading-none mb-1", className), ...props, children: children }));
});
TimelineTime.displayName = "TimelineTime";
export const TimelineTitle = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("h4", { ref: ref, className: cn("font-semibold text-foreground tracking-tight text-xs", className), ...props, children: children }));
});
TimelineTitle.displayName = "TimelineTitle";
export const TimelineDescription = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("p", { ref: ref, className: cn("text-muted-foreground text-xs leading-relaxed", className), ...props, children: children }));
});
TimelineDescription.displayName = "TimelineDescription";
export const TimelineItem = forwardRef(({ className, status = "default", size = "medium", icon, isLast = false, children, ...props }, ref) => {
    const context = useTimelineContext();
    const mode = context?.mode || "left";
    // Auto calculate point position connector
    const connectorOffset = size === "small" ? "left-[7px]" : size === "large" ? "left-[15px]" : "left-[11px]";
    return (_jsxs("li", { ref: ref, className: cn(timelineItemVariants({ mode }), className), ...props, children: [!isLast && (_jsx("div", { "aria-hidden": "true", className: cn("absolute top-6 bottom-[-24px] w-0.5 bg-border group-last:hidden", connectorOffset) })), _jsx(TimelinePoint, { status: status, size: size, children: icon }), _jsx(TimelineContent, { children: children })] }));
});
TimelineItem.displayName = "TimelineItem";
const TimelineRoot = forwardRef(({ className, mode = "left", items, children, ...props }, ref) => {
    const contextValue = useMemo(() => ({
        mode,
    }), [mode]);
    let content = children;
    if (items && items.length > 0 && !children) {
        content = items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (_jsxs(TimelineItem, { status: item.status, icon: item.icon, isLast: isLast, children: [item.time && _jsx(TimelineTime, { children: item.time }), item.title && _jsx(TimelineTitle, { children: item.title }), item.description && _jsx(TimelineDescription, { children: item.description })] }, index));
        });
    }
    else if (children) {
        // Mark last child item as isLast
        const childArray = Children.toArray(children);
        content = childArray.map((child, idx) => {
            const isLast = idx === childArray.length - 1;
            if (isValidElement(child)) {
                return cloneElement(child, {
                    isLast: child.props.isLast ?? isLast,
                });
            }
            return child;
        });
    }
    return (_jsx(TimelineContext.Provider, { value: contextValue, children: _jsx("ol", { ref: ref, className: cn(timelineVariants({ mode }), className), ...props, children: content }) }));
});
TimelineRoot.displayName = "Timeline";
export const Timeline = Object.assign(TimelineRoot, {
    Item: TimelineItem,
    Point: TimelinePoint,
    Content: TimelineContent,
    Time: TimelineTime,
    Title: TimelineTitle,
    Description: TimelineDescription,
});
