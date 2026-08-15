import {
  forwardRef,
  useRef,
  useEffect,
  type MouseEvent,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { popoverContentVariants } from "./Popover.variants";
import type { PopoverProps } from "./Popover.types";
import { X } from "lucide-react";

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      className,
      content,
      children,
      placement = "bottom-start",
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      closeOnOutsideClick = true,
      closeOnEscape = true,
      showCloseButton = false,
      contentClassName,
      disabled = false,
      id: customId,
      ...props
    },
    forwardedRef
  ) => {
    const popoverId = useId("popover", customId);
    const contentId = `${popoverId}-content`;
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useControlled<boolean>({
      controlled: controlledOpen,
      default: defaultOpen,
      name: "Popover",
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

    const toggleOpen = (_e: MouseEvent<HTMLDivElement>) => {
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

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (closeOnEscape && e.key === "Escape" && isOpen) {
        e.stopPropagation();
        handleClose();
      }
    };

    // Close on click outside
    useEffect(() => {
      if (!isOpen || !closeOnOutsideClick) return;

      const handleOutsideClick = (e: globalThis.MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          handleClose();
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isOpen, closeOnOutsideClick]);

    return (
      <div
        ref={setMergedRef}
        id={popoverId}
        className={cn("relative inline-flex font-sans", className)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {/* Interactive Trigger Wrapper */}
        <div
          onClick={toggleOpen}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls={isOpen ? contentId : undefined}
          className="inline-flex cursor-pointer"
        >
          {children}
        </div>

        {/* Popover Rich Content Card */}
        {isOpen && !disabled && (
          <div
            id={contentId}
            role="dialog"
            aria-modal="false"
            className={cn(
              "absolute",
              popoverContentVariants({ placement }),
              contentClassName
            )}
          >
            {showCloseButton && (
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close popover"
                className="absolute top-3 right-3 p-1 rounded-chella-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            {content}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = "Popover";
