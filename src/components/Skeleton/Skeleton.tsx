import { forwardRef, type CSSProperties } from "react";
import { cn } from "../../utils/cn";
import { skeletonVariants } from "./Skeleton.variants";
import type { SkeletonProps } from "./Skeleton.types";

function formatDimension(dim?: string | number): string | undefined {
  if (dim === undefined) return undefined;
  return typeof dim === "number" ? `${dim}px` : dim;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "text",
      animation = "pulse",
      width,
      height,
      lines = 1,
      loading = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    // If not loading, render children directly
    if (!loading && children !== undefined) {
      return <>{children}</>;
    }

    const inlineStyles: CSSProperties = {
      width: formatDimension(width),
      height: formatDimension(height),
      ...style,
    };

    // Multiline text skeleton support
    if (variant === "text" && lines > 1) {
      return (
        <div
          ref={ref}
          role="status"
          aria-busy="true"
          aria-label="Loading content"
          className={cn("space-y-2 w-full", className)}
          {...props}
        >
          {Array.from({ length: lines }).map((_, idx) => {
            const isLast = idx === lines - 1;
            const lineStyle: CSSProperties = {
              height: formatDimension(height),
              width: isLast && width === undefined ? "75%" : formatDimension(width),
            };
            return (
              <div
                key={idx}
                style={lineStyle}
                className={skeletonVariants({ variant: "text", animation })}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="status"
        aria-busy="true"
        aria-label="Loading content"
        style={inlineStyles}
        className={cn(skeletonVariants({ variant, animation }), className)}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
