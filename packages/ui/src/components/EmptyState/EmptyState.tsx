import {
  createContext,
  useContext,
  forwardRef,
  useMemo,
} from "react";
import { cn } from "../../utils/cn";
import {
  emptyStateVariants,
  emptyStateIconVariants,
  emptyStateTitleVariants,
  emptyStateDescriptionVariants,
} from "./EmptyState.variants";
import type {
  EmptyStateProps,
  EmptyStateIconProps,
  EmptyStateTitleProps,
  EmptyStateDescriptionProps,
  EmptyStateActionProps,
  EmptyStateContextValue,
} from "./EmptyState.types";

const EmptyStateContext = createContext<EmptyStateContextValue | null>(null);

function useEmptyStateContext() {
  return useContext(EmptyStateContext);
}

export const EmptyStateIcon = forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className, size: itemSize, children, ...props }, ref) => {
    const context = useEmptyStateContext();
    const size = itemSize || context?.size || "medium";

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(emptyStateIconVariants({ size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
EmptyStateIcon.displayName = "EmptyStateIcon";

export const EmptyStateTitle = forwardRef<HTMLHeadingElement, EmptyStateTitleProps>(
  ({ className, size: itemSize, children, ...props }, ref) => {
    const context = useEmptyStateContext();
    const size = itemSize || context?.size || "medium";

    return (
      <h3
        ref={ref}
        className={cn(emptyStateTitleVariants({ size }), className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
EmptyStateTitle.displayName = "EmptyStateTitle";

export const EmptyStateDescription = forwardRef<HTMLParagraphElement, EmptyStateDescriptionProps>(
  ({ className, size: itemSize, children, ...props }, ref) => {
    const context = useEmptyStateContext();
    const size = itemSize || context?.size || "medium";

    return (
      <p
        ref={ref}
        className={cn(emptyStateDescriptionVariants({ size }), className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
EmptyStateDescription.displayName = "EmptyStateDescription";

export const EmptyStateAction = forwardRef<HTMLDivElement, EmptyStateActionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mt-5 flex flex-wrap items-center justify-center gap-2.5", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
EmptyStateAction.displayName = "EmptyStateAction";

const EmptyStateRoot = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      variant = "default",
      size = "medium",
      icon,
      title,
      description,
      action,
      children,
      ...props
    },
    ref
  ) => {
    const contextValue: EmptyStateContextValue = useMemo(
      () => ({
        size,
      }),
      [size]
    );

    return (
      <EmptyStateContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="status"
          className={cn(emptyStateVariants({ variant, size }), className)}
          {...props}
        >
          {icon && <EmptyStateIcon>{icon}</EmptyStateIcon>}
          {title && <EmptyStateTitle>{title}</EmptyStateTitle>}
          {description && <EmptyStateDescription>{description}</EmptyStateDescription>}
          {action && <EmptyStateAction>{action}</EmptyStateAction>}
          {children}
        </div>
      </EmptyStateContext.Provider>
    );
  }
);

EmptyStateRoot.displayName = "EmptyState";

export const EmptyState = Object.assign(EmptyStateRoot, {
  Icon: EmptyStateIcon,
  Title: EmptyStateTitle,
  Description: EmptyStateDescription,
  Action: EmptyStateAction,
});
