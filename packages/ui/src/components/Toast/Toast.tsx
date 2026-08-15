import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { toastVariants } from "./Toast.variants";
import type { ToastProps } from "./Toast.types";
import {
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Info,
  X,
} from "lucide-react";

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      id,
      title,
      description,
      variant = "default",
      action,
      onClose,
      ...props
    },
    ref
  ) => {
    const isAlert = variant === "danger";

    const getIcon = () => {
      switch (variant) {
        case "success":
          return <CheckCircle2 className="w-5 h-5 text-success shrink-0" />;
        case "warning":
          return <AlertTriangle className="w-5 h-5 text-warning shrink-0" />;
        case "danger":
          return <AlertCircle className="w-5 h-5 text-danger shrink-0" />;
        case "info":
          return <Info className="w-5 h-5 text-primary shrink-0" />;
        default:
          return null;
      }
    };

    return (
      <div
        ref={ref}
        id={id}
        role={isAlert ? "alert" : "status"}
        aria-live={isAlert ? "assertive" : "polite"}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      >
        {/* Leading Status Icon */}
        {getIcon()}

        {/* Text Content */}
        <div className="flex-1 space-y-1">
          {title && <div className="text-xs font-semibold leading-tight text-foreground">{title}</div>}
          {description && (
            <div className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </div>
          )}

          {/* Action Button */}
          {action && (
            <button
              type="button"
              onClick={action.onClick}
              className="mt-2 text-xs font-bold text-primary hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {action.label}
            </button>
          )}
        </div>

        {/* Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close notification"
            className="shrink-0 p-1 rounded-chellaa-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = "Toast";
