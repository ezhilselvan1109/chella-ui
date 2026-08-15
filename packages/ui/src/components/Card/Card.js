import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { cn } from "../../utils/cn";
import { cardVariants } from "./Card.variants";
const CardBase = forwardRef(({ className, variant = "outlined", hoverable = false, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(cardVariants({ variant, hoverable }), className), ...props, children: children }));
});
CardBase.displayName = "Card";
export const CardHeader = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("p-6 pb-3 space-y-1.5", className), ...props, children: children }));
});
CardHeader.displayName = "CardHeader";
export const CardTitle = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("h3", { ref: ref, className: cn("text-lg font-semibold tracking-tight text-card-foreground", className), ...props, children: children }));
});
CardTitle.displayName = "CardTitle";
export const CardDescription = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props, children: children }));
});
CardDescription.displayName = "CardDescription";
export const CardContent = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("p-6 pt-0 text-sm", className), ...props, children: children }));
});
CardContent.displayName = "CardContent";
export const CardFooter = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex items-center justify-end gap-3 p-6 pt-0", className), ...props, children: children }));
});
CardFooter.displayName = "CardFooter";
export const Card = CardBase;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;
