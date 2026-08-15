import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import {
  dividerVariants,
  dividerLabelVariants,
} from "./Divider.variants";
import type { DividerProps } from "./Divider.types";

export const Divider = forwardRef<HTMLElement, DividerProps>(
  (
    {
      className,
      orientation = "horizontal",
      variant = "solid",
      spacing = "medium",
      align = "center",
      decorative = true,
      children,
      ...props
    },
    ref
  ) => {
    // If text/label is supplied and horizontal, render label layout
    if (children && orientation === "horizontal") {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role={decorative ? "none" : "separator"}
          aria-orientation="horizontal"
          aria-hidden={decorative ? "true" : undefined}
          className={cn(dividerLabelVariants({ spacing, align, variant }), className)}
          {...(props as React.HTMLAttributes<HTMLDivElement>)}
        >
          <span className="px-3 shrink-0 font-medium text-xs text-muted-foreground">
            {children}
          </span>
        </div>
      );
    }

    if (orientation === "vertical") {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role="separator"
          aria-orientation="vertical"
          aria-hidden={decorative ? "true" : undefined}
          className={cn(dividerVariants({ orientation, variant, spacing }), className)}
          {...(props as React.HTMLAttributes<HTMLDivElement>)}
        />
      );
    }

    return (
      <hr
        ref={ref as React.Ref<HTMLHRElement>}
        role="separator"
        aria-orientation="horizontal"
        aria-hidden={decorative ? "true" : undefined}
        className={cn(dividerVariants({ orientation, variant, spacing }), className)}
        {...(props as React.HTMLAttributes<HTMLHRElement>)}
      />
    );
  }
);

Divider.displayName = "Divider";
