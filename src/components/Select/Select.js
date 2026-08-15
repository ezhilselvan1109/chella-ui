import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useRef, useCallback, useMemo, } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useId } from "../../hooks/useId";
import { selectTriggerVariants, selectDropdownVariants, selectOptionVariants, } from "./Select.variants";
import { ChevronDown, Check, X, Search, Loader2 } from "lucide-react";
const SelectContext = createContext(undefined);
export function useSelectContext() {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error("Select compound subcomponents must be used within a <Select>");
    }
    return context;
}
export function Select({ options: externalOptions = [], value: controlledValue, defaultValue, onChange, placeholder = "Select an option...", label, helperText, error, multiple = false, searchable = false, searchPlaceholder = "Search options...", size = "medium", disabled = false, loading = false, clearable = false, className, children, }) {
    const selectId = useId("select");
    const helperId = `${selectId}-helper`;
    const errorId = `${selectId}-error`;
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [registeredOptions, setRegisteredOptions] = useState([]);
    const containerRef = useRef(null);
    const triggerRef = useRef(null);
    const searchInputRef = useRef(null);
    const [selectedValue, setSelectedValue] = useControlled({
        controlled: controlledValue,
        default: defaultValue ?? (multiple ? [] : ""),
        name: "Select",
    });
    useOutsideClick(containerRef, () => {
        setIsOpen(false);
        setSearchQuery("");
    }, isOpen);
    const registerOption = useCallback((option) => {
        setRegisteredOptions((prev) => {
            if (prev.some((o) => o.value === option.value))
                return prev;
            return [...prev, option];
        });
        return () => {
            setRegisteredOptions((prev) => prev.filter((o) => o.value !== option.value));
        };
    }, []);
    const allOptions = useMemo(() => {
        return externalOptions.length > 0 ? externalOptions : registeredOptions;
    }, [externalOptions, registeredOptions]);
    const filteredOptions = useMemo(() => {
        if (!searchQuery.trim())
            return allOptions;
        return allOptions.filter((opt) => opt.label.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [allOptions, searchQuery]);
    const selectOption = useCallback((optionValue) => {
        if (disabled)
            return;
        if (multiple) {
            const currentArr = Array.isArray(selectedValue) ? selectedValue : [];
            const nextArr = currentArr.includes(optionValue)
                ? currentArr.filter((v) => v !== optionValue)
                : [...currentArr, optionValue];
            setSelectedValue(nextArr);
            onChange?.(nextArr);
        }
        else {
            setSelectedValue(optionValue);
            onChange?.(optionValue);
            setIsOpen(false);
            setSearchQuery("");
            triggerRef.current?.focus();
        }
    }, [disabled, multiple, selectedValue, setSelectedValue, onChange]);
    const handleClear = useCallback((e) => {
        e.stopPropagation();
        const emptyVal = multiple ? [] : "";
        setSelectedValue(emptyVal);
        onChange?.(emptyVal);
    }, [multiple, setSelectedValue, onChange]);
    const handleKeyDown = (e) => {
        if (disabled)
            return;
        if (!isOpen) {
            if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsOpen(true);
            }
            return;
        }
        switch (e.key) {
            case "Escape":
                e.preventDefault();
                setIsOpen(false);
                setSearchQuery("");
                triggerRef.current?.focus();
                break;
            case "ArrowDown":
                e.preventDefault();
                setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0));
                break;
            case "ArrowUp":
                e.preventDefault();
                setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
                break;
            case "Enter":
                e.preventDefault();
                if (filteredOptions[highlightedIndex] && !filteredOptions[highlightedIndex]?.disabled) {
                    selectOption(filteredOptions[highlightedIndex].value);
                }
                break;
            case "Home":
                e.preventDefault();
                setHighlightedIndex(0);
                break;
            case "End":
                e.preventDefault();
                setHighlightedIndex(filteredOptions.length - 1);
                break;
        }
    };
    const contextValue = useMemo(() => ({
        isOpen,
        setIsOpen,
        selectedValue,
        selectOption,
        multiple,
        highlightedIndex,
        setHighlightedIndex,
        size,
        disabled,
        registerOption,
        options: allOptions,
    }), [
        isOpen,
        selectedValue,
        selectOption,
        multiple,
        highlightedIndex,
        size,
        disabled,
        registerOption,
        allOptions,
    ]);
    const hasValue = multiple
        ? Array.isArray(selectedValue) && selectedValue.length > 0
        : Boolean(selectedValue);
    const selectedLabels = useMemo(() => {
        if (multiple && Array.isArray(selectedValue)) {
            return selectedValue
                .map((v) => allOptions.find((o) => o.value === v)?.label ?? v)
                .filter(Boolean);
        }
        const match = allOptions.find((o) => o.value === selectedValue);
        return match ? [match.label] : [];
    }, [multiple, selectedValue, allOptions]);
    return (_jsx(SelectContext.Provider, { value: contextValue, children: _jsxs("div", { ref: containerRef, className: "relative w-full space-y-1.5 font-sans", children: [label && (_jsx("label", { className: "block text-xs font-semibold tracking-wide text-foreground/90 select-none", children: label })), _jsxs("div", { className: "relative", children: [_jsxs("div", { ref: triggerRef, role: "combobox", tabIndex: disabled ? -1 : 0, "aria-expanded": isOpen, "aria-haspopup": "listbox", "aria-invalid": Boolean(error), "aria-describedby": error ? errorId : helperText ? helperId : undefined, "aria-disabled": disabled, onClick: () => {
                                if (!disabled) {
                                    setIsOpen(!isOpen);
                                    if (!isOpen && searchable) {
                                        setTimeout(() => searchInputRef.current?.focus(), 50);
                                    }
                                }
                            }, onKeyDown: handleKeyDown, className: cn(selectTriggerVariants({ size, hasError: Boolean(error), isOpen }), className), children: [_jsxs("div", { className: "flex flex-wrap items-center gap-1.5 overflow-hidden flex-1", children: [!hasValue && (_jsx("span", { className: "text-muted-foreground text-sm truncate", children: placeholder })), hasValue && !multiple && (_jsx("span", { className: "truncate text-foreground text-sm font-medium", children: selectedLabels[0] })), hasValue && multiple && (_jsx("div", { className: "flex flex-wrap gap-1", children: selectedLabels.map((lbl, idx) => (_jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary", children: [lbl, _jsx("button", { type: "button", onClick: (e) => {
                                                            e.stopPropagation();
                                                            const valToRemove = selectedValue[idx];
                                                            if (valToRemove)
                                                                selectOption(valToRemove);
                                                        }, className: "hover:bg-primary/20 rounded-xs p-0.5", children: _jsx(X, { className: "w-3 h-3" }) })] }, idx))) }))] }), _jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground shrink-0 ml-2", children: [loading && _jsx(Loader2, { className: "w-4 h-4 animate-spin text-primary" }), !loading && clearable && hasValue && !disabled && (_jsx("button", { type: "button", onClick: handleClear, "aria-label": "Clear selection", className: "p-0.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors", children: _jsx(X, { className: "w-3.5 h-3.5" }) })), _jsx(ChevronDown, { className: cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180 text-primary") })] })] }), isOpen && (_jsxs("div", { role: "listbox", className: selectDropdownVariants(), children: [searchable && (_jsxs("div", { className: "p-1.5 border-b border-border mb-1 flex items-center gap-2", children: [_jsx(Search, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }), _jsx("input", { ref: searchInputRef, type: "text", value: searchQuery, onChange: (e) => {
                                                setSearchQuery(e.target.value);
                                                setHighlightedIndex(0);
                                            }, placeholder: searchPlaceholder, className: "w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none", onClick: (e) => e.stopPropagation() })] })), children ? (children) : filteredOptions.length === 0 ? (_jsx("div", { className: "px-3 py-6 text-xs text-center text-muted-foreground", children: "No options found" })) : (filteredOptions.map((opt, idx) => {
                                    const isSelected = multiple
                                        ? Array.isArray(selectedValue) && selectedValue.includes(opt.value)
                                        : selectedValue === opt.value;
                                    const isHighlighted = idx === highlightedIndex;
                                    return (_jsxs("div", { role: "option", "aria-selected": isSelected, "aria-disabled": opt.disabled, onClick: () => !opt.disabled && selectOption(opt.value), onMouseEnter: () => setHighlightedIndex(idx), className: selectOptionVariants({
                                            isSelected,
                                            isHighlighted,
                                            isDisabled: opt.disabled,
                                        }), children: [_jsxs("div", { className: "flex items-center gap-2", children: [opt.icon && _jsx("span", { className: "shrink-0", children: opt.icon }), _jsxs("div", { children: [_jsx("div", { className: "text-sm", children: opt.label }), opt.description && (_jsx("div", { className: "text-xs text-muted-foreground", children: opt.description }))] })] }), isSelected && _jsx(Check, { className: "w-4 h-4 text-primary shrink-0 ml-2" })] }, opt.value));
                                }))] }))] }), error && (_jsx("p", { id: errorId, role: "alert", className: "text-xs font-medium text-danger animate-fade-in", children: error })), !error && helperText && (_jsx("p", { id: helperId, className: "text-xs text-muted-foreground", children: helperText }))] }) }));
}
export function SelectOption({ value, children, disabled = false, className }) {
    const { selectedValue, selectOption, multiple } = useSelectContext();
    const isSelected = multiple
        ? Array.isArray(selectedValue) && selectedValue.includes(value)
        : selectedValue === value;
    return (_jsxs("div", { role: "option", "aria-selected": isSelected, "aria-disabled": disabled, onClick: () => !disabled && selectOption(value), className: cn(selectOptionVariants({
            isSelected,
            isDisabled: disabled,
        }), className), children: [_jsx("span", { className: "truncate", children: children }), isSelected && _jsx(Check, { className: "w-4 h-4 text-primary shrink-0 ml-2" })] }));
}
Select.Option = SelectOption;
