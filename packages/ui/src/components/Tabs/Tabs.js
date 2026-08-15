import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useRef, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { tabsListVariants, tabsTriggerVariants, tabsContentVariants, } from "./Tabs.variants";
const TabsContext = createContext(null);
function useTabsContext() {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("Tabs compound components must be rendered inside <Tabs>");
    }
    return context;
}
export const TabsList = forwardRef(({ className, children, ...props }, ref) => {
    const { variant, orientation, tabsId } = useTabsContext();
    const listRef = useRef(null);
    const handleKeyDown = (e) => {
        const container = listRef.current;
        if (!container)
            return;
        const triggers = Array.from(container.querySelectorAll('[role="tab"]:not([disabled])'));
        if (triggers.length === 0)
            return;
        const activeIndex = triggers.findIndex((tab) => tab.getAttribute("data-state") === "active");
        let nextIndex = -1;
        if (orientation === "horizontal") {
            if (e.key === "ArrowRight") {
                nextIndex = (activeIndex + 1) % triggers.length;
            }
            else if (e.key === "ArrowLeft") {
                nextIndex = (activeIndex - 1 + triggers.length) % triggers.length;
            }
        }
        else {
            if (e.key === "ArrowDown") {
                nextIndex = (activeIndex + 1) % triggers.length;
            }
            else if (e.key === "ArrowUp") {
                nextIndex = (activeIndex - 1 + triggers.length) % triggers.length;
            }
        }
        if (e.key === "Home") {
            nextIndex = 0;
        }
        else if (e.key === "End") {
            nextIndex = triggers.length - 1;
        }
        if (nextIndex !== -1) {
            e.preventDefault();
            const nextTab = triggers[nextIndex];
            nextTab?.click();
            nextTab?.focus();
        }
    };
    return (_jsx("div", { ref: (node) => {
            listRef.current = node;
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, role: "tablist", "aria-orientation": orientation, id: `${tabsId}-tablist`, onKeyDown: handleKeyDown, className: cn(tabsListVariants({ variant, orientation }), className), ...props, children: children }));
});
TabsList.displayName = "TabsList";
export const TabsTrigger = forwardRef(({ className, value, disabled = false, children, onClick, ...props }, ref) => {
    const { value: selectedValue, onValueChange, variant, size, tabsId, } = useTabsContext();
    const isSelected = selectedValue === value;
    const triggerId = `${tabsId}-trigger-${value}`;
    const contentId = `${tabsId}-content-${value}`;
    return (_jsx("button", { ref: ref, type: "button", role: "tab", id: triggerId, "aria-selected": isSelected, "aria-controls": contentId, tabIndex: isSelected ? 0 : -1, disabled: disabled, "data-state": isSelected ? "active" : "inactive", onClick: (e) => {
            if (disabled)
                return;
            onValueChange(value);
            onClick?.(e);
        }, className: cn(tabsTriggerVariants({ variant, size }), className), ...props, children: children }));
});
TabsTrigger.displayName = "TabsTrigger";
export const TabsContent = forwardRef(({ className, value, children, ...props }, ref) => {
    const { value: selectedValue, orientation, tabsId } = useTabsContext();
    const isSelected = selectedValue === value;
    const triggerId = `${tabsId}-trigger-${value}`;
    const contentId = `${tabsId}-content-${value}`;
    if (!isSelected)
        return null;
    return (_jsx("div", { ref: ref, role: "tabpanel", id: contentId, "aria-labelledby": triggerId, tabIndex: 0, "data-state": isSelected ? "active" : "inactive", className: cn(tabsContentVariants({ orientation }), className), ...props, children: children }));
});
TabsContent.displayName = "TabsContent";
const TabsRoot = forwardRef(({ className, value: controlledValue, defaultValue, onValueChange, variant = "line", orientation = "horizontal", size = "medium", items, children, id: customId, ...props }, ref) => {
    const tabsId = useId("tabs", customId);
    const initialValue = defaultValue ?? (items && items.length > 0 ? items[0]?.key : undefined);
    const [currentValue, setCurrentValue] = useControlled({
        controlled: controlledValue,
        default: initialValue ?? "",
        name: "Tabs",
        state: "value",
    });
    const handleValueChange = (val) => {
        setCurrentValue(val);
        onValueChange?.(val);
    };
    const contextValue = {
        value: currentValue,
        onValueChange: handleValueChange,
        variant,
        orientation,
        size,
        tabsId,
    };
    return (_jsx(TabsContext.Provider, { value: contextValue, children: _jsx("div", { ref: ref, id: tabsId, className: cn("font-sans", orientation === "vertical" ? "flex flex-row" : "flex flex-col", className), ...props, children: items ? (_jsxs(_Fragment, { children: [_jsx(TabsList, { children: items.map((item) => (_jsxs(TabsTrigger, { value: item.key, disabled: item.disabled, children: [item.icon && _jsx("span", { className: "mr-2 inline-flex", children: item.icon }), item.label] }, item.key))) }), items.map((item) => (_jsx(TabsContent, { value: item.key, children: item.children }, item.key)))] })) : (children) }) }));
});
TabsRoot.displayName = "Tabs";
export const Tabs = Object.assign(TabsRoot, {
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
});
