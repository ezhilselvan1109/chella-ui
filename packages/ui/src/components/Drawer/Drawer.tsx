import {
  createContext,
  useContext,
  forwardRef,
  useEffect,
  useMemo,
} from "react";
import { cn } from "../../utils/cn";
import { useId } from "../../hooks/useId";
import {
  drawerOverlayVariants,
  drawerContentVariants,
} from "./Drawer.variants";
import type {
  DrawerProps,
  DrawerHeaderProps,
  DrawerTitleProps,
  DrawerDescriptionProps,
  DrawerBodyProps,
  DrawerFooterProps,
  DrawerContextValue,
} from "./Drawer.types";
import { X } from "lucide-react";

const DrawerContext = createContext<DrawerContextValue | null>(null);

function useDrawerContext() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer compound components must be rendered inside <Drawer>");
  }
  return context;
}

export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className, children, ...props }, ref) => {
    const { onClose, showCloseButton } = useDrawerContext();

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start justify-between p-5 border-b border-border shrink-0 select-none",
          className
        )}
        {...props}
      >
        <div className="space-y-1 flex-1 pr-4">{children}</div>
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="rounded-chellaa-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);
DrawerHeader.displayName = "DrawerHeader";

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ className, children, ...props }, ref) => {
    const { titleId } = useDrawerContext();

    return (
      <h2
        ref={ref}
        id={titleId}
        className={cn("text-base font-bold text-foreground leading-none", className)}
        {...props}
      >
        {children}
      </h2>
    );
  }
);
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    const { descriptionId } = useDrawerContext();

    return (
      <p
        ref={ref}
        id={descriptionId}
        className={cn("text-xs text-muted-foreground leading-normal", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
DrawerDescription.displayName = "DrawerDescription";

export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex-1 overflow-y-auto p-5 space-y-4 font-sans", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DrawerBody.displayName = "DrawerBody";

export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-end gap-2.5 p-4 border-t border-border bg-muted/20 shrink-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerRoot = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      open,
      onClose,
      position = "right",
      size = "medium",
      closeOnOverlayClick = true,
      closeOnEsc = true,
      showCloseButton = true,
      children,
      id: customId,
      ...props
    },
    ref
  ) => {
    const drawerId = useId("drawer", customId);
    const titleId = `${drawerId}-title`;
    const descriptionId = `${drawerId}-description`;

    // Handle Escape key
    useEffect(() => {
      if (!open || !closeOnEsc) return;

      const handleKeyDown = (e: globalThis.KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, closeOnEsc, onClose]);

    // Body scroll lock
    useEffect(() => {
      if (open) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }, [open]);

    const contextValue: DrawerContextValue = useMemo(
      () => ({
        onClose,
        titleId,
        descriptionId,
        showCloseButton,
      }),
      [onClose, titleId, descriptionId, showCloseButton]
    );

    if (!open) return null;

    return (
      <DrawerContext.Provider value={contextValue}>
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Overlay Backdrop */}
          <div
            aria-hidden="true"
            onClick={() => {
              if (closeOnOverlayClick) {
                onClose();
              }
            }}
            className={cn(drawerOverlayVariants({ open }))}
          />

          {/* Drawer Content */}
          <div
            ref={ref}
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className={cn(drawerContentVariants({ position, size }), className)}
            {...props}
          >
            {children}
          </div>
        </div>
      </DrawerContext.Provider>
    );
  }
);

DrawerRoot.displayName = "Drawer";

export const Drawer = Object.assign(DrawerRoot, {
  Header: DrawerHeader,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Body: DrawerBody,
  Footer: DrawerFooter,
});
