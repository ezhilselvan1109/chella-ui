import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import {
  spinnerVariants,
  spinnerTrackVariants,
  spinnerIndicatorVariants,
} from "./Spinner.variants";
import type { SpinnerProps } from "./Spinner.types";

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      size = "medium",
      variant = "primary",
      label = "Loading...",
      showLabel = false,
      thickness = 4,
      ...props
    },
    ref
  ) => {
    const svgElement = (
      <svg
        aria-hidden={!showLabel ? "true" : undefined}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(spinnerVariants({ variant, size }), !showLabel && className)}
      >
        <circle
          className={spinnerTrackVariants()}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth={thickness}
        />
        <path
          className={spinnerIndicatorVariants()}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    if (showLabel) {
      return (
        <div
          ref={ref}
          role="status"
          className={cn("inline-flex items-center gap-2 font-sans select-none", className)}
          {...props}
        >
          {svgElement}
          <span className="text-xs font-medium text-foreground leading-none">
            {label}
          </span>
          <span className="sr-only">{label}</span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="status"
        className="inline-flex items-center justify-center font-sans select-none"
        {...props}
      >
        {svgElement}
        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";
