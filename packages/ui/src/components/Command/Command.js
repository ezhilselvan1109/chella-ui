import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, useCallback, useId, forwardRef, } from "react";
import { cn } from "../../utils/cn";
import { commandVariants, commandInputVariants, commandItemVariants, } from "./Command.variants";
import { Search, X } from "lucide-react";
import { Kbd } from "../Kbd";
const CommandContext = createContext(null);
function useCommand() {
    const ctx = useContext(CommandContext);
    if (!ctx) {
        throw new Error("Command subcomponents must be rendered within a <Command /> root");
    }
    return ctx;
}
export const CommandInput = forwardRef(({ className, value: controlledValue, onValueChange, placeholder = "Type a command or search...", ...props }, ref) => {
    const { search, setSearch } = useCommand();
    const isControlled = controlledValue !== undefined;
    const currentSearch = isControlled ? controlledValue : search;
    const handleChange = (e) => {
        const val = e.target.value;
        if (!isControlled) {
            setSearch(val);
        }
        onValueChange?.(val);
    };
    return (_jsxs("div", { className: "flex items-center border-b border-border px-3 gap-2", children: [_jsx(Search, { className: "size-4 shrink-0 text-muted-foreground" }), _jsx("input", { ref: ref, role: "searchbox", value: currentSearch, onChange: handleChange, placeholder: placeholder, className: cn(commandInputVariants(), className), ...props }), currentSearch && (_jsx("button", { type: "button", onClick: () => setSearch(""), className: "p-1 rounded-sm text-muted-foreground hover:text-foreground", "aria-label": "Clear search", children: _jsx(X, { className: "size-3.5" }) }))] }));
});
CommandInput.displayName = "CommandInput";
export const CommandList = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, role: "listbox", className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden p-1.5 space-y-1 focus:outline-hidden", className), ...props, children: children }));
});
CommandList.displayName = "CommandList";
export const CommandEmpty = forwardRef(({ className, children = "No matching commands found.", ...props }, ref) => {
    const { search, items } = useCommand();
    const matchingCount = items.filter((item) => item.textValue.toLowerCase().includes(search.toLowerCase())).length;
    if (search.trim() === "" || matchingCount > 0) {
        return null;
    }
    return (_jsx("div", { ref: ref, className: cn("py-8 text-center text-xs text-muted-foreground", className), ...props, children: children }));
});
CommandEmpty.displayName = "CommandEmpty";
export const CommandGroup = forwardRef(({ className, heading, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, role: "group", "aria-label": typeof heading === "string" ? heading : undefined, className: cn("overflow-hidden p-1 text-foreground space-y-0.5", className), ...props, children: [heading && (_jsx("div", { className: "px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground select-none", children: heading })), children] }));
});
CommandGroup.displayName = "CommandGroup";
export const CommandItem = forwardRef(({ className, value: customValue, disabled = false, onSelect, icon, shortcut, children, ...props }, ref) => {
    const { search, activeIndex, registerItem, items } = useCommand();
    const itemId = useId();
    const textValue = customValue ||
        (typeof children === "string" ? children : "") ||
        itemId;
    useEffect(() => {
        return registerItem(itemId, textValue, onSelect);
    }, [itemId, textValue, onSelect, registerItem]);
    const isMatch = search.trim() === "" ||
        textValue.toLowerCase().includes(search.toLowerCase());
    if (!isMatch) {
        return null;
    }
    // Determine if this item is currently active in the visible filtered items
    const visibleItems = items.filter((item) => item.textValue.toLowerCase().includes(search.toLowerCase()));
    const itemIndex = visibleItems.findIndex((item) => item.id === itemId);
    const isActive = itemIndex === activeIndex;
    const handleClick = () => {
        if (disabled)
            return;
        onSelect?.();
    };
    return (_jsxs("div", { ref: ref, role: "option", "aria-selected": isActive, "data-disabled": disabled ? "true" : undefined, onClick: handleClick, className: cn(commandItemVariants({ active: isActive }), className), ...props, children: [icon && _jsx("span", { className: "shrink-0 [&>svg]:size-4 text-muted-foreground", children: icon }), _jsx("span", { className: "flex-1 truncate", children: children }), shortcut && (_jsx("span", { className: "ml-auto shrink-0", children: Array.isArray(shortcut) ? (_jsx(Kbd, { keys: shortcut, size: "xs", variant: "subtle" })) : (_jsx(Kbd, { size: "xs", variant: "subtle", children: shortcut })) }))] }));
});
CommandItem.displayName = "CommandItem";
export const CommandSeparator = forwardRef(({ className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, role: "separator", className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
});
CommandSeparator.displayName = "CommandSeparator";
const CommandRoot = forwardRef(({ className, size = "medium", children, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [items, setItems] = useState([]);
    const registerItem = useCallback((id, textValue, onSelect) => {
        setItems((prev) => {
            if (prev.some((item) => item.id === id))
                return prev;
            return [...prev, { id, textValue, onSelect }];
        });
        return () => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        };
    }, []);
    // Reset active index when search changes
    useEffect(() => {
        setActiveIndex(0);
    }, [search]);
    const handleKeyDown = (e) => {
        const visibleItems = items.filter((item) => item.textValue.toLowerCase().includes(search.toLowerCase()));
        if (visibleItems.length === 0)
            return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) => (prev + 1) % visibleItems.length);
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
        }
        else if (e.key === "Enter") {
            e.preventDefault();
            const active = visibleItems[activeIndex];
            active?.onSelect?.();
        }
    };
    return (_jsx(CommandContext.Provider, { value: {
            search,
            setSearch,
            activeIndex,
            setActiveIndex,
            registerItem,
            items,
        }, children: _jsx("div", { ref: ref, role: "combobox", "aria-expanded": "true", "aria-haspopup": "listbox", tabIndex: 0, onKeyDown: handleKeyDown, className: cn(commandVariants({ size }), className), ...props, children: children }) }));
});
CommandRoot.displayName = "Command";
export const CommandDialog = forwardRef(({ open = false, onOpenChange, children, ...props }, ref) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                onOpenChange?.(!open);
            }
            else if (e.key === "Escape" && open) {
                e.preventDefault();
                onOpenChange?.(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, onOpenChange]);
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-background/80 backdrop-blur-xs transition-all", children: [_jsx("div", { className: "fixed inset-0", onClick: () => onOpenChange?.(false), "aria-hidden": "true" }), _jsx("div", { className: "relative z-50 w-full max-w-lg shadow-2xl animate-in fade-in-0 zoom-in-95 duration-150", children: _jsx(CommandRoot, { ref: ref, ...props, children: children }) })] }));
});
CommandDialog.displayName = "CommandDialog";
export const Command = Object.assign(CommandRoot, {
    Input: CommandInput,
    List: CommandList,
    Empty: CommandEmpty,
    Group: CommandGroup,
    Item: CommandItem,
    Separator: CommandSeparator,
    Dialog: CommandDialog,
});
