import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { statCardVariants, statCardTrendVariants } from "./StatCard.variants";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
export const StatCardHeader = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex items-center justify-between gap-2 pb-2", className), ...props, children: children }));
});
StatCardHeader.displayName = "StatCardHeader";
export const StatCardTitle = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("h3", { ref: ref, className: cn("text-xs font-bold uppercase tracking-wider text-muted-foreground", className), ...props, children: children }));
});
StatCardTitle.displayName = "StatCardTitle";
export const StatCardIcon = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, "aria-hidden": "true", className: cn("p-2 rounded-chella-md bg-primary/10 text-primary shrink-0 [&>svg]:size-4", className), ...props, children: children }));
});
StatCardIcon.displayName = "StatCardIcon";
export const StatCardValue = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("text-2xl sm:text-3xl font-black text-foreground tracking-tight", className), ...props, children: children }));
});
StatCardValue.displayName = "StatCardValue";
export const StatCardTrend = forwardRef(({ className, direction = "neutral", value, label, children, ...props }, ref) => {
    const renderTrendIcon = () => {
        if (direction === "up")
            return _jsx(TrendingUp, { className: "w-3.5 h-3.5 shrink-0" });
        if (direction === "down")
            return _jsx(TrendingDown, { className: "w-3.5 h-3.5 shrink-0" });
        return _jsx(Minus, { className: "w-3.5 h-3.5 shrink-0" });
    };
    return (_jsxs("div", { ref: ref, className: cn(statCardTrendVariants({ direction }), className), ...props, children: [renderTrendIcon(), value && _jsx("span", { children: value }), label && _jsx("span", { className: "text-muted-foreground font-normal ml-0.5", children: label }), children] }));
});
StatCardTrend.displayName = "StatCardTrend";
const StatCardRoot = forwardRef(({ className, variant = "default", hoverable = false, title, value, icon, trend, description, children, ...props }, ref) => {
    if (!children && (title || value)) {
        return (_jsxs("div", { ref: ref, className: cn(statCardVariants({ variant, hoverable }), className), ...props, children: [_jsxs("div", { children: [_jsxs(StatCardHeader, { children: [title && _jsx(StatCardTitle, { children: title }), icon && _jsx(StatCardIcon, { children: icon })] }), value && _jsx(StatCardValue, { children: value })] }), _jsxs("div", { children: [trend && (_jsx(StatCardTrend, { direction: trend.direction, value: trend.value, label: trend.label })), description && (_jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: description }))] })] }));
    }
    return (_jsx("div", { ref: ref, className: cn(statCardVariants({ variant, hoverable }), className), ...props, children: children }));
});
StatCardRoot.displayName = "StatCard";
export const StatCard = Object.assign(StatCardRoot, {
    Header: StatCardHeader,
    Title: StatCardTitle,
    Icon: StatCardIcon,
    Value: StatCardValue,
    Trend: StatCardTrend,
});
