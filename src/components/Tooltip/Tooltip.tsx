import {
  forwardRef,
  useRef,
  useEffect,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { tooltipContentVariants, tooltipArrowVariants } from "./Tooltip.variants";
import type { TooltipProps } from "./Tooltip.types";

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      className,
      content,
      children,
      placement = "top",
      variant = "default",
      arrow = true,
      delayDuration = 100,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      disabled = false,
      id: customId,
      ...props
    },
    ref
  ) => {
    const tooltipId = useId("tooltip", customId);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [isOpen, setIsOpen] = useControlled<boolean>({
      controlled: controlledOpen,
      default: defaultOpen,
      name: "Tooltip",
      state: "open",
    });

    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleOpen = () => {
      if (disabled || !content) return;
      clearTimer();
      if (delayDuration > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsOpen(true);
          onOpenChange?.(true);
        }, delayDuration);
      } else {
        setIsOpen(true);
        onOpenChange?.(true);
      }
    };

    const handleClose = () => {
      clearTimer();
      if (isOpen) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape" && isOpen) {
        e.stopPropagation();
        handleClose();
      }
    };

    useEffect(() => {
      return () => {
        clearTimer();
      };
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex", className)}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onFocus={handleOpen}
        onBlur={handleClose}
        onKeyDown={handleKeyDown}
        aria-describedby={isOpen && !disabled ? tooltipId : undefined}
        {...props}
      >
        {children}

        {isOpen && !disabled && content && (
          <div
            id={tooltipId}
            role="tooltip"
            className={cn("absolute whitespace-nowrap", tooltipContentVariants({ variant, placement }))}
          >
            {content}
            {arrow && (
              <span
                className={cn(tooltipArrowVariants({ variant, placement }))}
                aria-hidden="true"
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
