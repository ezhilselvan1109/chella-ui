import { forwardRef, type MouseEvent } from "react";
import { cn } from "../../utils/cn";
import { tagVariants, tagCloseButtonVariants } from "./Tag.variants";
import type { TagProps } from "./Tag.types";
import { X } from "lucide-react";

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant = "default",
      size = "medium",
      shape = "rounded",
      closable = false,
      selectable = false,
      selected = false,
      disabled = false,
      icon,
      avatar,
      onClose,
      onRemove,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClose?.(e);
      onRemove?.(e);
    };

    const isInteractive = selectable || Boolean(onClick);

    return (
      <span
        ref={ref}
        role={selectable ? "checkbox" : undefined}
        aria-checked={selectable ? selected : undefined}
        aria-disabled={disabled ? "true" : undefined}
        tabIndex={isInteractive && !disabled ? 0 : undefined}
        onClick={!disabled ? onClick : undefined}
        className={cn(
          tagVariants({
            variant,
            size,
            shape,
            selectable: isInteractive,
            selected,
            disabled,
          }),
          className
        )}
        {...props}
      >
        {avatar && <span className="shrink-0 -ml-1 mr-0.5">{avatar}</span>}
        {icon && <span className="shrink-0 [&>svg]:size-3.5">{icon}</span>}
        <span>{children}</span>
        {closable && !disabled && (
          <button
            type="button"
            aria-label="Remove tag"
            onClick={handleClose}
            className={tagCloseButtonVariants()}
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";
