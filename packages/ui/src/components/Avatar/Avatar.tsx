import {
  forwardRef,
  useState,
  type SyntheticEvent,
} from "react";
import { cn } from "../../utils/cn";
import { avatarVariants, avatarStatusVariants } from "./Avatar.variants";
import type { AvatarProps } from "./Avatar.types";
import { User } from "lucide-react";

function getInitials(name?: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return (parts[0]?.substring(0, 2) ?? "").toUpperCase();
  }
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts[parts.length - 1]?.charAt(0) ?? "";
  return `${first}${last}`.toUpperCase();
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt,
      name,
      icon,
      size = "medium",
      shape = "circle",
      status,
      statusPlacement = "bottom-right",
      imgProps,
      bordered = false,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true);
      imgProps?.onError?.(e);
    };

    const showImage = src && !hasError;
    const initials = getInitials(name);

    return (
      <div
        ref={ref}
        role={showImage ? undefined : "img"}
        aria-label={showImage ? undefined : (alt || name || "Avatar")}
        className={cn(
          avatarVariants({ size, shape }),
          bordered && "ring-2 ring-background",
          className
        )}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            onError={handleImageError}
            className="w-full h-full object-cover"
            {...imgProps}
          />
        ) : initials ? (
          <span className="font-semibold leading-none">{initials}</span>
        ) : icon ? (
          <span className="flex items-center justify-center w-full h-full">{icon}</span>
        ) : (
          <User className="w-1/2 h-1/2 text-muted-foreground" />
        )}

        {/* Status Indicator */}
        {status && (
          <span
            role="status"
            aria-label={`Status: ${status}`}
            className={cn(
              avatarStatusVariants({ status, size, placement: statusPlacement })
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
