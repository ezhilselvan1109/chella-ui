import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { circularProgressVariants } from "./Progress.variants";
import type { CircularProgressProps, ProgressSize } from "./Progress.types";

function getSizeDimension(size?: ProgressSize | number): number {
  if (typeof size === "number") return size;
  switch (size) {
    case "small":
      return 32;
    case "large":
      return 64;
    case "medium":
    default:
      return 44;
  }
}

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = "medium",
      strokeWidth = 4,
      variant = "default",
      indeterminate = false,
      showLabel = false,
      formatValue,
      label,
      trackClassName,
      indicatorClassName,
      ...props
    },
    ref
  ) => {
    const dimension = getSizeDimension(size);
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = max > 0 ? Math.round((clampedValue / max) * 100) : 0;

    const radius = (dimension - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const displayValue = label ?? (formatValue ? formatValue(clampedValue, max) : `${percentage}%`);

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuetext={indeterminate ? "Loading..." : `${percentage}%`}
        className={cn(circularProgressVariants({ variant }), className)}
        style={{ width: dimension, height: dimension }}
      >
        <svg
          width={dimension}
          height={dimension}
          viewBox={`0 0 ${dimension} ${dimension}`}
          className={cn("rotate-[-90deg]", indeterminate && "animate-spin origin-center")}
          {...props}
        >
          {/* Background Track */}
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            className={cn("stroke-muted/60", trackClassName)}
          />

          {/* Value Indicator Bar */}
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? circumference * 0.75 : strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className={cn("stroke-current transition-all duration-300 ease-out", indicatorClassName)}
          />
        </svg>

        {showLabel && !indeterminate && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono text-foreground">
            {displayValue}
          </span>
        )}
      </div>
    );
  }
);

CircularProgress.displayName = "CircularProgress";
