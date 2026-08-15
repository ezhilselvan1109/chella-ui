import {
  forwardRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";
import { alertVariants } from "./Alert.variants";
import type {
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertVariant,
} from "./Alert.types";
import {
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  X,
} from "lucide-react";

function getDefaultIcon(variant: AlertVariant): ReactNode {
  switch (variant) {
    case "success":
      return <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />;
    case "warning":
      return <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />;
    case "danger":
      return <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />;
    case "info":
    case "default":
    default:
      return <Info className="w-4 h-4 shrink-0 mt-0.5" />;
  }
}

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn("font-semibold text-xs leading-tight tracking-tight", className)}
        {...props}
      >
        {children}
      </h5>
    );
  }
);
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-xs leading-relaxed mt-1 opacity-90", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
AlertDescription.displayName = "AlertDescription";

const AlertRoot = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "info",
      styleVariant = "subtle",
      title,
      description,
      icon = true,
      closable = false,
      onClose,
      action,
      children,
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    const handleDismiss = () => {
      setDismissed(true);
      onClose?.();
    };

    const renderedIcon =
      icon === false ? null : icon === true ? getDefaultIcon(variant) : icon;

    const role = variant === "danger" || variant === "warning" ? "alert" : "status";

    return (
      <div
        ref={ref}
        role={role}
        aria-live={variant === "danger" ? "assertive" : "polite"}
        className={cn(alertVariants({ variant, styleVariant }), className)}
        {...props}
      >
        {renderedIcon}

        <div className="flex-1 space-y-0.5 min-w-0">
          {title && <AlertTitle>{title}</AlertTitle>}
          {description && <AlertDescription>{description}</AlertDescription>}
          {children}
        </div>

        {action && <div className="shrink-0 flex items-center">{action}</div>}

        {closable && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss alert"
            className="shrink-0 rounded-chella-md p-1 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    );
  }
);

AlertRoot.displayName = "Alert";

export const Alert = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
});
