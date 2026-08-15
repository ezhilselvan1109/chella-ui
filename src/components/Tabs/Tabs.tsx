import {
  createContext,
  useContext,
  forwardRef,
  useRef,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import {
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
} from "./Tabs.variants";
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
  TabsContextValue,
} from "./Tabs.types";

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be rendered inside <Tabs>");
  }
  return context;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const { variant, orientation, tabsId } = useTabsContext();
    const listRef = useRef<HTMLDivElement | null>(null);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const container = listRef.current;
      if (!container) return;

      const triggers = Array.from(
        container.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
      );
      if (triggers.length === 0) return;

      const activeIndex = triggers.findIndex(
        (tab) => tab.getAttribute("data-state") === "active"
      );

      let nextIndex = -1;

      if (orientation === "horizontal") {
        if (e.key === "ArrowRight") {
          nextIndex = (activeIndex + 1) % triggers.length;
        } else if (e.key === "ArrowLeft") {
          nextIndex = (activeIndex - 1 + triggers.length) % triggers.length;
        }
      } else {
        if (e.key === "ArrowDown") {
          nextIndex = (activeIndex + 1) % triggers.length;
        } else if (e.key === "ArrowUp") {
          nextIndex = (activeIndex - 1 + triggers.length) % triggers.length;
        }
      }

      if (e.key === "Home") {
        nextIndex = 0;
      } else if (e.key === "End") {
        nextIndex = triggers.length - 1;
      }

      if (nextIndex !== -1) {
        e.preventDefault();
        const nextTab = triggers[nextIndex];
        nextTab?.click();
        nextTab?.focus();
      }
    };

    return (
      <div
        ref={(node) => {
          listRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as { current: HTMLDivElement | null }).current = node;
        }}
        role="tablist"
        aria-orientation={orientation}
        id={`${tabsId}-tablist`}
        onKeyDown={handleKeyDown}
        className={cn(tabsListVariants({ variant, orientation }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsList.displayName = "TabsList";

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, disabled = false, children, onClick, ...props }, ref) => {
    const {
      value: selectedValue,
      onValueChange,
      variant,
      size,
      tabsId,
    } = useTabsContext();

    const isSelected = selectedValue === value;
    const triggerId = `${tabsId}-trigger-${value}`;
    const contentId = `${tabsId}-content-${value}`;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={triggerId}
        aria-selected={isSelected}
        aria-controls={contentId}
        tabIndex={isSelected ? 0 : -1}
        disabled={disabled}
        data-state={isSelected ? "active" : "inactive"}
        onClick={(e) => {
          if (disabled) return;
          onValueChange(value);
          onClick?.(e);
        }}
        className={cn(
          tabsTriggerVariants({ variant, size }),
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: selectedValue, orientation, tabsId } = useTabsContext();
    const isSelected = selectedValue === value;
    const triggerId = `${tabsId}-trigger-${value}`;
    const contentId = `${tabsId}-content-${value}`;

    if (!isSelected) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={contentId}
        aria-labelledby={triggerId}
        tabIndex={0}
        data-state={isSelected ? "active" : "inactive"}
        className={cn(tabsContentVariants({ orientation }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = "TabsContent";

const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      onValueChange,
      variant = "line",
      orientation = "horizontal",
      size = "medium",
      items,
      children,
      id: customId,
      ...props
    },
    ref
  ) => {
    const tabsId = useId("tabs", customId);

    const initialValue =
      defaultValue ?? (items && items.length > 0 ? items[0]?.key : undefined);

    const [currentValue, setCurrentValue] = useControlled<string>({
      controlled: controlledValue,
      default: initialValue ?? "",
      name: "Tabs",
      state: "value",
    });

    const handleValueChange = (val: string) => {
      setCurrentValue(val);
      onValueChange?.(val);
    };

    const contextValue: TabsContextValue = {
      value: currentValue,
      onValueChange: handleValueChange,
      variant,
      orientation,
      size,
      tabsId,
    };

    return (
      <TabsContext.Provider value={contextValue}>
        <div
          ref={ref}
          id={tabsId}
          className={cn(
            "font-sans",
            orientation === "vertical" ? "flex flex-row" : "flex flex-col",
            className
          )}
          {...props}
        >
          {items ? (
            <>
              <TabsList>
                {items.map((item) => (
                  <TabsTrigger
                    key={item.key}
                    value={item.key}
                    disabled={item.disabled}
                  >
                    {item.icon && <span className="mr-2 inline-flex">{item.icon}</span>}
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {items.map((item) => (
                <TabsContent key={item.key} value={item.key}>
                  {item.children}
                </TabsContent>
              ))}
            </>
          ) : (
            children
          )}
        </div>
      </TabsContext.Provider>
    );
  }
);

TabsRoot.displayName = "Tabs";

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
