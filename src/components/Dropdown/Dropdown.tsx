import {
  forwardRef,
  useRef,
  useEffect,
  type MouseEvent,
  type KeyboardEvent,
  type HTMLAttributes,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { dropdownMenuVariants, dropdownItemVariants } from "./Dropdown.variants";
import type { DropdownProps, DropdownItemProps, DropdownMenuItem } from "./Dropdown.types";

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ className, icon, disabled = false, variant = "default", children, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        data-disabled={disabled ? "" : undefined}
        onClick={(e) => {
          if (disabled) return;
          onClick?.(e);
        }}
        className={cn(dropdownItemVariants({ variant }), className)}
        {...props}
      >
        {icon && <span className="shrink-0 w-4 h-4 flex items-center justify-center">{icon}</span>}
        <span className="flex-1 truncate">{children}</span>
      </div>
    );
  }
);
DropdownItem.displayName = "DropdownItem";

export const DropdownDivider = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div role="separator" className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
);
DropdownDivider.displayName = "DropdownDivider";

export const DropdownHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", className)} {...props}>
    {children}
  </div>
);
DropdownHeader.displayName = "DropdownHeader";

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      trigger,
      items,
      children,
      placement = "bottom-start",
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      closeOnSelect = true,
      disabled = false,
      id: customId,
      ...props
    },
    forwardedRef
  ) => {
    const dropdownId = useId("dropdown", customId);
    const menuId = `${dropdownId}-menu`;
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useControlled<boolean>({
      controlled: controlledOpen,
      default: defaultOpen,
      name: "Dropdown",
      state: "open",
    });

    const setMergedRef = (el: HTMLDivElement | null) => {
      containerRef.current = el;
      if (typeof forwardedRef === "function") {
        forwardedRef(el);
      } else if (forwardedRef) {
        (forwardedRef as { current: HTMLDivElement | null }).current = el;
      }
    };

    const handleToggle = (_e: MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      const nextOpen = !isOpen;
      setIsOpen(nextOpen);
      onOpenChange?.(nextOpen);
    };

    const handleClose = () => {
      if (isOpen) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    const handleItemClick = (item: DropdownMenuItem, e: MouseEvent<HTMLDivElement>) => {
      if (item.disabled || item.divider) return;
      item.onClick?.(e);
      if (closeOnSelect) {
        handleClose();
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(true);
          onOpenChange?.(true);
        }
        return;
      }

      if (e.key === "Escape" || e.key === "Tab") {
        e.preventDefault();
        handleClose();
      }
    };

    // Close on click outside
    useEffect(() => {
      if (!isOpen) return;

      const handleOutsideClick = (e: globalThis.MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          handleClose();
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isOpen]);

    return (
      <div
        ref={setMergedRef}
        id={dropdownId}
        className={cn("relative inline-flex font-sans", className)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {/* Trigger */}
        <div
          onClick={handleToggle}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls={isOpen ? menuId : undefined}
          className="inline-flex cursor-pointer"
        >
          {trigger}
        </div>

        {/* Menu Popup */}
        {isOpen && !disabled && (
          <div
            id={menuId}
            role="menu"
            aria-orientation="vertical"
            tabIndex={-1}
            className={cn("absolute", dropdownMenuVariants({ placement }))}
          >
            {items ? (
              items.map((item, idx) => {
                if (item.divider) {
                  return <DropdownDivider key={item.key || `divider-${idx}`} />;
                }
                return (
                  <DropdownItem
                    key={item.key}
                    icon={item.icon}
                    disabled={item.disabled}
                    variant={item.variant}
                    onClick={(e) => handleItemClick(item, e)}
                  >
                    {item.label}
                  </DropdownItem>
                );
              })
            ) : (
              children
            )}
          </div>
        )}
      </div>
    );
  }
);

DropdownRoot.displayName = "Dropdown";

export const Dropdown = Object.assign(DropdownRoot, {
  Item: DropdownItem,
  Divider: DropdownDivider,
  Header: DropdownHeader,
});
