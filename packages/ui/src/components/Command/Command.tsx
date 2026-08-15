import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useId,
  forwardRef,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import {
  commandVariants,
  commandInputVariants,
  commandItemVariants,
} from "./Command.variants";
import type {
  CommandProps,
  CommandDialogProps,
  CommandInputProps,
  CommandListProps,
  CommandEmptyProps,
  CommandGroupProps,
  CommandItemProps,
  CommandSeparatorProps,
  CommandContextValue,
} from "./Command.types";
import { Search, X } from "lucide-react";
import { Kbd } from "../Kbd";

const CommandContext = createContext<CommandContextValue | null>(null);

function useCommand() {
  const ctx = useContext(CommandContext);
  if (!ctx) {
    throw new Error("Command subcomponents must be rendered within a <Command /> root");
  }
  return ctx;
}

export const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, value: controlledValue, onValueChange, placeholder = "Type a command or search...", ...props }, ref) => {
    const { search, setSearch } = useCommand();
    const isControlled = controlledValue !== undefined;
    const currentSearch = isControlled ? controlledValue : search;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!isControlled) {
        setSearch(val);
      }
      onValueChange?.(val);
    };

    return (
      <div className="flex items-center border-b border-border px-3 gap-2">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        <input
          ref={ref}
          role="searchbox"
          value={currentSearch}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(commandInputVariants(), className)}
          {...props}
        />
        {currentSearch && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="p-1 rounded-sm text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    );
  }
);
CommandInput.displayName = "CommandInput";

export const CommandList = forwardRef<HTMLDivElement, CommandListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="listbox"
        className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden p-1.5 space-y-1 focus:outline-hidden", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandList.displayName = "CommandList";

export const CommandEmpty = forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ className, children = "No matching commands found.", ...props }, ref) => {
    const { search, items } = useCommand();

    const matchingCount = items.filter((item) =>
      item.textValue.toLowerCase().includes(search.toLowerCase())
    ).length;

    if (search.trim() === "" || matchingCount > 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn("py-8 text-center text-xs text-muted-foreground", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandEmpty.displayName = "CommandEmpty";

export const CommandGroup = forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ className, heading, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-label={typeof heading === "string" ? heading : undefined}
        className={cn("overflow-hidden p-1 text-foreground space-y-0.5", className)}
        {...props}
      >
        {heading && (
          <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground select-none">
            {heading}
          </div>
        )}
        {children}
      </div>
    );
  }
);
CommandGroup.displayName = "CommandGroup";

export const CommandItem = forwardRef<HTMLDivElement, CommandItemProps>(
  (
    {
      className,
      value: customValue,
      disabled = false,
      onSelect,
      icon,
      shortcut,
      children,
      ...props
    },
    ref
  ) => {
    const { search, activeIndex, registerItem, items } = useCommand();
    const itemId = useId();

    const textValue =
      customValue ||
      (typeof children === "string" ? children : "") ||
      itemId;

    useEffect(() => {
      return registerItem(itemId, textValue, onSelect);
    }, [itemId, textValue, onSelect, registerItem]);

    const isMatch =
      search.trim() === "" ||
      textValue.toLowerCase().includes(search.toLowerCase());

    if (!isMatch) {
      return null;
    }

    // Determine if this item is currently active in the visible filtered items
    const visibleItems = items.filter((item) =>
      item.textValue.toLowerCase().includes(search.toLowerCase())
    );
    const itemIndex = visibleItems.findIndex((item) => item.id === itemId);
    const isActive = itemIndex === activeIndex;

    const handleClick = () => {
      if (disabled) return;
      onSelect?.();
    };

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isActive}
        data-disabled={disabled ? "true" : undefined}
        onClick={handleClick}
        className={cn(commandItemVariants({ active: isActive }), className)}
        {...props}
      >
        {icon && <span className="shrink-0 [&>svg]:size-4 text-muted-foreground">{icon}</span>}
        <span className="flex-1 truncate">{children}</span>
        {shortcut && (
          <span className="ml-auto shrink-0">
            {Array.isArray(shortcut) ? (
              <Kbd keys={shortcut} size="xs" variant="subtle" />
            ) : (
              <Kbd size="xs" variant="subtle">{shortcut}</Kbd>
            )}
          </span>
        )}
      </div>
    );
  }
);
CommandItem.displayName = "CommandItem";

export const CommandSeparator = forwardRef<HTMLDivElement, CommandSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        className={cn("-mx-1 my-1 h-px bg-border", className)}
        {...props}
      />
    );
  }
);
CommandSeparator.displayName = "CommandSeparator";

const CommandRoot = forwardRef<HTMLDivElement, CommandProps>(
  ({ className, size = "medium", children, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [items, setItems] = useState<Array<{ id: string; textValue: string; onSelect?: () => void }>>([]);

    const registerItem = useCallback(
      (id: string, textValue: string, onSelect?: () => void) => {
        setItems((prev) => {
          if (prev.some((item) => item.id === id)) return prev;
          return [...prev, { id, textValue, onSelect }];
        });

        return () => {
          setItems((prev) => prev.filter((item) => item.id !== id));
        };
      },
      []
    );

    // Reset active index when search changes
    useEffect(() => {
      setActiveIndex(0);
    }, [search]);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const visibleItems = items.filter((item) =>
        item.textValue.toLowerCase().includes(search.toLowerCase())
      );

      if (visibleItems.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % visibleItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const active = visibleItems[activeIndex];
        active?.onSelect?.();
      }
    };

    return (
      <CommandContext.Provider
        value={{
          search,
          setSearch,
          activeIndex,
          setActiveIndex,
          registerItem,
          items,
        }}
      >
        <div
          ref={ref}
          role="combobox"
          aria-expanded="true"
          aria-haspopup="listbox"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={cn(commandVariants({ size }), className)}
          {...props}
        >
          {children}
        </div>
      </CommandContext.Provider>
    );
  }
);
CommandRoot.displayName = "Command";

export const CommandDialog = forwardRef<HTMLDivElement, CommandDialogProps>(
  ({ open = false, onOpenChange, children, ...props }, ref) => {
    useEffect(() => {
      const handleKeyDown = (e: globalThis.KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          onOpenChange?.(!open);
        } else if (e.key === "Escape" && open) {
          e.preventDefault();
          onOpenChange?.(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-background/80 backdrop-blur-xs transition-all">
        <div
          className="fixed inset-0"
          onClick={() => onOpenChange?.(false)}
          aria-hidden="true"
        />
        <div className="relative z-50 w-full max-w-lg shadow-2xl animate-in fade-in-0 zoom-in-95 duration-150">
          <CommandRoot ref={ref} {...props}>
            {children}
          </CommandRoot>
        </div>
      </div>
    );
  }
);
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
