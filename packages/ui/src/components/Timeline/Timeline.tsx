import {
  createContext,
  useContext,
  forwardRef,
  useMemo,
  Children,
  isValidElement,
  cloneElement,
  type ReactElement,
} from "react";
import { cn } from "../../utils/cn";
import {
  timelineVariants,
  timelineItemVariants,
  timelinePointVariants,
} from "./Timeline.variants";
import type {
  TimelineProps,
  TimelineItemProps,
  TimelinePointProps,
  TimelineContentProps,
  TimelineTimeProps,
  TimelineTitleProps,
  TimelineDescriptionProps,
  TimelineContextValue,
} from "./Timeline.types";

const TimelineContext = createContext<TimelineContextValue | null>(null);

function useTimelineContext() {
  return useContext(TimelineContext);
}

export const TimelinePoint = forwardRef<HTMLDivElement, TimelinePointProps>(
  ({ className, status = "default", size = "medium", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(timelinePointVariants({ status, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelinePoint.displayName = "TimelinePoint";

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex-1 space-y-1 pb-2 pt-0.5", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineContent.displayName = "TimelineContent";

export const TimelineTime = forwardRef<HTMLTimeElement, TimelineTimeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <time
        ref={ref}
        className={cn("block text-[11px] text-muted-foreground font-mono leading-none mb-1", className)}
        {...props}
      >
        {children}
      </time>
    );
  }
);
TimelineTime.displayName = "TimelineTime";

export const TimelineTitle = forwardRef<HTMLHeadingElement, TimelineTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn("font-semibold text-foreground tracking-tight text-xs", className)}
        {...props}
      >
        {children}
      </h4>
    );
  }
);
TimelineTitle.displayName = "TimelineTitle";

export const TimelineDescription = forwardRef<HTMLParagraphElement, TimelineDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-muted-foreground text-xs leading-relaxed", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
TimelineDescription.displayName = "TimelineDescription";

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  (
    {
      className,
      status = "default",
      size = "medium",
      icon,
      isLast = false,
      children,
      ...props
    },
    ref
  ) => {
    const context = useTimelineContext();
    const mode = context?.mode || "left";

    // Auto calculate point position connector
    const connectorOffset =
      size === "small" ? "left-[7px]" : size === "large" ? "left-[15px]" : "left-[11px]";

    return (
      <li
        ref={ref}
        className={cn(timelineItemVariants({ mode }), className)}
        {...props}
      >
        {/* Connector Line */}
        {!isLast && (
          <div
            aria-hidden="true"
            className={cn(
              "absolute top-6 bottom-[-24px] w-0.5 bg-border group-last:hidden",
              connectorOffset
            )}
          />
        )}

        {/* If children has Point component, render children as-is, else auto wrap point */}
        <TimelinePoint status={status} size={size}>
          {icon}
        </TimelinePoint>

        <TimelineContent>{children}</TimelineContent>
      </li>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

const TimelineRoot = forwardRef<HTMLOListElement, TimelineProps>(
  ({ className, mode = "left", items, children, ...props }, ref) => {
    const contextValue: TimelineContextValue = useMemo(
      () => ({
        mode,
      }),
      [mode]
    );

    let content = children;

    if (items && items.length > 0 && !children) {
      content = items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <TimelineItem
            key={index}
            status={item.status}
            icon={item.icon}
            isLast={isLast}
          >
            {item.time && <TimelineTime>{item.time}</TimelineTime>}
            {item.title && <TimelineTitle>{item.title}</TimelineTitle>}
            {item.description && <TimelineDescription>{item.description}</TimelineDescription>}
          </TimelineItem>
        );
      });
    } else if (children) {
      // Mark last child item as isLast
      const childArray = Children.toArray(children);
      content = childArray.map((child, idx) => {
        const isLast = idx === childArray.length - 1;
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<TimelineItemProps>, {
            isLast: (child.props as TimelineItemProps).isLast ?? isLast,
          });
        }
        return child;
      });
    }

    return (
      <TimelineContext.Provider value={contextValue}>
        <ol
          ref={ref}
          className={cn(timelineVariants({ mode }), className)}
          {...props}
        >
          {content}
        </ol>
      </TimelineContext.Provider>
    );
  }
);

TimelineRoot.displayName = "Timeline";

export const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Description: TimelineDescription,
});
