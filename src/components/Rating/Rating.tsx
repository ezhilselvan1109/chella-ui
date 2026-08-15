import { forwardRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { cn } from "../../utils/cn";
import { ratingVariants, ratingItemVariants } from "./Rating.variants";
import type { RatingProps } from "./Rating.types";
import { Star } from "lucide-react";

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = 0,
      max = 5,
      readOnly = false,
      disabled = false,
      size = "medium",
      color = "default",
      showValueText = false,
      icon,
      emptyIcon,
      onChange,
      onHoverChange,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const currentValue = isControlled ? controlledValue : internalValue;
    const displayValue = hoverValue !== null ? hoverValue : currentValue;

    const handleSelect = (val: number) => {
      if (readOnly || disabled) return;
      if (!isControlled) {
        setInternalValue(val);
      }
      onChange?.(val);
    };

    const handleMouseEnter = (val: number) => {
      if (readOnly || disabled) return;
      setHoverValue(val);
      onHoverChange?.(val);
    };

    const handleMouseLeave = () => {
      if (readOnly || disabled) return;
      setHoverValue(null);
      onHoverChange?.(null);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (readOnly || disabled) return;

      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        const next = Math.min(max, currentValue + 1);
        handleSelect(next);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        const prev = Math.max(0, currentValue - 1);
        handleSelect(prev);
      } else if (e.key === "Home") {
        e.preventDefault();
        handleSelect(0);
      } else if (e.key === "End") {
        e.preventDefault();
        handleSelect(max);
      }
    };

    if (readOnly) {
      return (
        <div
          ref={ref}
          role="img"
          aria-label={`Rating: ${currentValue} of ${max} stars`}
          className={cn(ratingVariants({ size, disabled }), className)}
          {...props}
        >
          {Array.from({ length: max }, (_, index) => {
            const starValue = index + 1;
            const isFilled = starValue <= currentValue;

            return (
              <span
                key={index}
                className={cn(
                  ratingItemVariants({ color, readOnly: true }),
                  !isFilled && "text-muted-foreground/30 fill-transparent"
                )}
              >
                {isFilled
                  ? icon || <Star className="fill-current" />
                  : emptyIcon || <Star className="stroke-current" />}
              </span>
            );
          })}
          {showValueText && (
            <span className="text-muted-foreground font-mono ml-1.5 leading-none">
              ({currentValue}/{max})
            </span>
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label="Rating"
        aria-disabled={disabled ? "true" : undefined}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onMouseLeave={handleMouseLeave}
        className={cn(ratingVariants({ size, disabled }), className)}
        {...props}
      >
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= displayValue;

          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={currentValue === starValue}
              aria-label={`${starValue} of ${max} stars`}
              tabIndex={-1}
              disabled={disabled}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                handleSelect(starValue);
              }}
              onMouseEnter={() => handleMouseEnter(starValue)}
              className={cn(
                ratingItemVariants({ color, readOnly: false }),
                !isFilled && "text-muted-foreground/30 fill-transparent hover:text-muted-foreground/50"
              )}
            >
              {isFilled
                ? icon || <Star className="fill-current" />
                : emptyIcon || <Star className="stroke-current" />}
            </button>
          );
        })}
        {showValueText && (
          <span className="text-muted-foreground font-mono ml-1.5 leading-none">
            ({displayValue}/{max})
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = "Rating";
