import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useMemo,
  type ReactNode,
  type MouseEvent,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useId } from "../../hooks/useId";
import {
  selectTriggerVariants,
  selectDropdownVariants,
  selectOptionVariants,
} from "./Select.variants";
import type {
  SelectProps,
  SelectOptionItem,
  SelectContextValue,
} from "./Select.types";
import { ChevronDown, Check, X, Search, Loader2 } from "lucide-react";

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Select compound subcomponents must be used within a <Select>");
  }
  return context;
}

export function Select({
  options: externalOptions = [],
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = "Select an option...",
  label,
  helperText,
  error,
  multiple = false,
  searchable = false,
  searchPlaceholder = "Search options...",
  size = "medium",
  disabled = false,
  loading = false,
  clearable = false,
  className,
  children,
}: SelectProps) {
  const selectId = useId("select");
  const helperId = `${selectId}-helper`;
  const errorId = `${selectId}-error`;

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [registeredOptions, setRegisteredOptions] = useState<SelectOptionItem[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [selectedValue, setSelectedValue] = useControlled<string | string[]>({
    controlled: controlledValue,
    default: defaultValue ?? (multiple ? [] : ""),
    name: "Select",
  });

  useOutsideClick(
    containerRef,
    () => {
      setIsOpen(false);
      setSearchQuery("");
    },
    isOpen
  );

  const registerOption = useCallback((option: SelectOptionItem) => {
    setRegisteredOptions((prev) => {
      if (prev.some((o) => o.value === option.value)) return prev;
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
    if (!searchQuery.trim()) return allOptions;
    return allOptions.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allOptions, searchQuery]);

  const selectOption = useCallback(
    (optionValue: string) => {
      if (disabled) return;

      if (multiple) {
        const currentArr = Array.isArray(selectedValue) ? selectedValue : [];
        const nextArr = currentArr.includes(optionValue)
          ? currentArr.filter((v) => v !== optionValue)
          : [...currentArr, optionValue];
        setSelectedValue(nextArr);
        onChange?.(nextArr);
      } else {
        setSelectedValue(optionValue);
        onChange?.(optionValue);
        setIsOpen(false);
        setSearchQuery("");
        triggerRef.current?.focus();
      }
    },
    [disabled, multiple, selectedValue, setSelectedValue, onChange]
  );

  const handleClear = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      const emptyVal = multiple ? [] : "";
      setSelectedValue(emptyVal);
      onChange?.(emptyVal);
    },
    [multiple, setSelectedValue, onChange]
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) return;

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
          selectOption(filteredOptions[highlightedIndex]!.value);
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

  const contextValue = useMemo<SelectContextValue>(
    () => ({
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
    }),
    [
      isOpen,
      selectedValue,
      selectOption,
      multiple,
      highlightedIndex,
      size,
      disabled,
      registerOption,
      allOptions,
    ]
  );

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

  return (
    <SelectContext.Provider value={contextValue}>
      <div ref={containerRef} className="relative w-full space-y-1.5 font-sans">
        {label && (
          <label className="block text-xs font-semibold tracking-wide text-foreground/90 select-none">
            {label}
          </label>
        )}

        <div className="relative">
          <div
            ref={triggerRef}
            role="combobox"
            tabIndex={disabled ? -1 : 0}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            aria-disabled={disabled}
            onClick={() => {
              if (!disabled) {
                setIsOpen(!isOpen);
                if (!isOpen && searchable) {
                  setTimeout(() => searchInputRef.current?.focus(), 50);
                }
              }
            }}
            onKeyDown={handleKeyDown}
            className={cn(
              selectTriggerVariants({ size, hasError: Boolean(error), isOpen }),
              className
            )}
          >
            <div className="flex flex-wrap items-center gap-1.5 overflow-hidden flex-1">
              {!hasValue && (
                <span className="text-muted-foreground text-sm truncate">{placeholder}</span>
              )}

              {hasValue && !multiple && (
                <span className="truncate text-foreground text-sm font-medium">
                  {selectedLabels[0]}
                </span>
              )}

              {hasValue && multiple && (
                <div className="flex flex-wrap gap-1">
                  {selectedLabels.map((lbl, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary"
                    >
                      {lbl}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const valToRemove = (selectedValue as string[])[idx];
                          if (valToRemove) selectOption(valToRemove);
                        }}
                        className="hover:bg-primary/20 rounded-xs p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground shrink-0 ml-2">
              {loading && <Loader2 className="w-4 h-4 animate-spin text-primary" />}

              {!loading && clearable && hasValue && !disabled && (
                <button
                  type="button"
                  onClick={handleClear}
                  aria-label="Clear selection"
                  className="p-0.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isOpen && "rotate-180 text-primary"
                )}
              />
            </div>
          </div>

          {isOpen && (
            <div role="listbox" className={selectDropdownVariants()}>
              {searchable && (
                <div className="p-1.5 border-b border-border mb-1 flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setHighlightedIndex(0);
                    }}
                    placeholder={searchPlaceholder}
                    className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}

              {children ? (
                children
              ) : filteredOptions.length === 0 ? (
                <div className="px-3 py-6 text-xs text-center text-muted-foreground">
                  No options found
                </div>
              ) : (
                filteredOptions.map((opt, idx) => {
                  const isSelected = multiple
                    ? Array.isArray(selectedValue) && selectedValue.includes(opt.value)
                    : selectedValue === opt.value;
                  const isHighlighted = idx === highlightedIndex;

                  return (
                    <div
                      key={opt.value}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={opt.disabled}
                      onClick={() => !opt.disabled && selectOption(opt.value)}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                      className={selectOptionVariants({
                        isSelected,
                        isHighlighted,
                        isDisabled: opt.disabled,
                      })}
                    >
                      <div className="flex items-center gap-2">
                        {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                        <div>
                          <div className="text-sm">{opt.label}</div>
                          {opt.description && (
                            <div className="text-xs text-muted-foreground">{opt.description}</div>
                          )}
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-primary shrink-0 ml-2" />}
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} role="alert" className="text-xs font-medium text-danger animate-fade-in">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    </SelectContext.Provider>
  );
}

export interface SelectOptionProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function SelectOption({ value, children, disabled = false, className }: SelectOptionProps) {
  const { selectedValue, selectOption, multiple } = useSelectContext();
  const isSelected = multiple
    ? Array.isArray(selectedValue) && selectedValue.includes(value)
    : selectedValue === value;

  return (
    <div
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled}
      onClick={() => !disabled && selectOption(value)}
      className={cn(
        selectOptionVariants({
          isSelected,
          isDisabled: disabled,
        }),
        className
      )}
    >
      <span className="truncate">{children}</span>
      {isSelected && <Check className="w-4 h-4 text-primary shrink-0 ml-2" />}
    </div>
  );
}

Select.Option = SelectOption;
