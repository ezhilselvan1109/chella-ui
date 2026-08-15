import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { buttonVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";
import { Loader2 } from "lucide-react";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      >
        {loading && (
          <Loader2
            className={cn(
              "animate-spin shrink-0",
              size === "small" ? "h-3.5 w-3.5" : size === "large" ? "h-5 w-5" : "h-4 w-4"
            )}
            aria-hidden="true"
          />
        )}
        {!loading && leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {!loading && rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
