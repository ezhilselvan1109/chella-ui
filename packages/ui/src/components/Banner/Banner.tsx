import { forwardRef, useState } from "react";
import { cn } from "../../utils/cn";
import { bannerVariants, bannerCloseButtonVariants } from "./Banner.variants";
import type { BannerProps } from "./Banner.types";
import { X } from "lucide-react";

export const Banner = forwardRef<HTMLElement, BannerProps>(
  (
    {
      className,
      variant = "gradient",
      position = "static",
      icon,
      badge,
      action,
      closable = false,
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
      return null;
    }

    const handleClose = () => {
      setIsVisible(false);
      onClose?.();
    };

    return (
      <aside
        ref={ref}
        role="region"
        aria-label="Announcement"
        className={cn(bannerVariants({ variant, position }), className)}
        {...props}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {icon && <span className="shrink-0 [&>svg]:size-4">{icon}</span>}
          {badge && <span className="shrink-0">{badge}</span>}
          <div className="truncate font-medium">{children}</div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {action && <div>{action}</div>}
          {closable && (
            <button
              type="button"
              aria-label="Dismiss banner"
              onClick={handleClose}
              className={bannerCloseButtonVariants()}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </aside>
    );
  }
);

Banner.displayName = "Banner";
