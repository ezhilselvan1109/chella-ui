import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { accordionVariants, accordionItemVariants, accordionTriggerVariants, accordionContentVariants, } from "./Accordion.variants";
import { ChevronDown } from "lucide-react";
const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);
function useAccordionContext() {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("Accordion compound components must be rendered inside <Accordion>");
    }
    return context;
}
function useAccordionItemContext() {
    const context = useContext(AccordionItemContext);
    if (!context) {
        throw new Error("Accordion.Trigger and Accordion.Content must be rendered inside <Accordion.Item>");
    }
    return context;
}
export const AccordionItem = forwardRef(({ className, value, disabled = false, children, ...props }, ref) => {
    const { value: activeValues, variant, accordionId } = useAccordionContext();
    const isOpen = activeValues.includes(value);
    const itemId = `${accordionId}-item-${value}`;
    const contextValue = useMemo(() => ({
        value,
        isOpen,
        disabled,
        itemId,
    }), [value, isOpen, disabled, itemId]);
    return (_jsx(AccordionItemContext.Provider, { value: contextValue, children: _jsx("div", { ref: ref, id: itemId, "data-state": isOpen ? "open" : "closed", "data-disabled": disabled ? "" : undefined, className: cn(accordionItemVariants({ variant }), className), ...props, children: children }) }));
});
AccordionItem.displayName = "AccordionItem";
export const AccordionTrigger = forwardRef(({ className, children, hideIcon = false, onClick, ...props }, ref) => {
    const { toggleItem, size } = useAccordionContext();
    const { value, isOpen, disabled, itemId } = useAccordionItemContext();
    const triggerId = `${itemId}-trigger`;
    const contentId = `${itemId}-content`;
    return (_jsxs("button", { ref: ref, type: "button", id: triggerId, "aria-expanded": isOpen, "aria-controls": contentId, "data-state": isOpen ? "open" : "closed", disabled: disabled, onClick: (e) => {
            if (disabled)
                return;
            toggleItem(value);
            onClick?.(e);
        }, className: cn(accordionTriggerVariants({ size }), className), ...props, children: [_jsx("span", { children: children }), !hideIcon && (_jsx(ChevronDown, { className: "w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200" }))] }));
});
AccordionTrigger.displayName = "AccordionTrigger";
export const AccordionContent = forwardRef(({ className, children, ...props }, ref) => {
    const { isOpen, itemId } = useAccordionItemContext();
    const triggerId = `${itemId}-trigger`;
    const contentId = `${itemId}-content`;
    if (!isOpen)
        return null;
    return (_jsx("div", { ref: ref, id: contentId, role: "region", "aria-labelledby": triggerId, "data-state": isOpen ? "open" : "closed", className: cn(accordionContentVariants(), className), ...props, children: children }));
});
AccordionContent.displayName = "AccordionContent";
const AccordionRoot = forwardRef(({ className, type = "single", value: controlledValue, defaultValue, onValueChange, collapsible = true, variant = "default", size = "medium", items, children, id: customId, ...props }, ref) => {
    const accordionId = useId("accordion", customId);
    // Normalize initial value to string[]
    const initialNormalized = useMemo(() => {
        if (defaultValue !== undefined) {
            return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
        }
        return [];
    }, [defaultValue]);
    const controlledNormalized = useMemo(() => {
        if (controlledValue !== undefined) {
            return Array.isArray(controlledValue) ? controlledValue : [controlledValue];
        }
        return undefined;
    }, [controlledValue]);
    const [activeValues, setActiveValues] = useControlled({
        controlled: controlledNormalized,
        default: initialNormalized,
        name: "Accordion",
        state: "value",
    });
    const toggleItem = (itemValue) => {
        let nextValues;
        if (type === "single") {
            const isCurrentlyOpen = activeValues.includes(itemValue);
            if (isCurrentlyOpen) {
                nextValues = collapsible ? [] : [itemValue];
            }
            else {
                nextValues = [itemValue];
            }
        }
        else {
            // multiple
            if (activeValues.includes(itemValue)) {
                nextValues = activeValues.filter((v) => v !== itemValue);
            }
            else {
                nextValues = [...activeValues, itemValue];
            }
        }
        setActiveValues(nextValues);
        if (onValueChange) {
            if (type === "single") {
                onValueChange(nextValues[0] ?? "");
            }
            else {
                onValueChange(nextValues);
            }
        }
    };
    const contextValue = {
        type,
        value: activeValues,
        toggleItem,
        variant,
        size,
        accordionId,
    };
    return (_jsx(AccordionContext.Provider, { value: contextValue, children: _jsx("div", { ref: ref, id: accordionId, className: cn(accordionVariants({ variant }), className), ...props, children: items ? (items.map((item) => (_jsxs(AccordionItem, { value: item.value, disabled: item.disabled, children: [_jsx(AccordionTrigger, { children: item.title }), _jsx(AccordionContent, { children: item.content })] }, item.value)))) : (children) }) }));
});
AccordionRoot.displayName = "Accordion";
export const Accordion = Object.assign(AccordionRoot, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
});
