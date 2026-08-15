import {
  forwardRef,
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from "react";
import { cn } from "../../utils/cn";
import { avatarGroupVariants, avatarVariants } from "./Avatar.variants";
import type { AvatarGroupProps, AvatarProps } from "./Avatar.types";

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      className,
      max,
      size = "medium",
      shape = "circle",
      bordered = true,
      spacing = "normal",
      children,
      ...props
    },
    ref
  ) => {
    const validChildren = Children.toArray(children).filter(
      isValidElement
    ) as ReactElement<AvatarProps>[];

    const totalCount = validChildren.length;
    const renderLimit = max && max > 0 && totalCount > max ? max : totalCount;
    const visibleAvatars = validChildren.slice(0, renderLimit);
    const excessCount = totalCount - renderLimit;

    return (
      <div
        ref={ref}
        role="group"
        className={cn(avatarGroupVariants({ spacing }), className)}
        {...props}
      >
        {visibleAvatars.map((child, index) =>
          cloneElement(child, {
            key: child.key || index,
            size: child.props.size || size,
            shape: child.props.shape || shape,
            bordered: child.props.bordered !== undefined ? child.props.bordered : bordered,
          })
        )}

        {excessCount > 0 && (
          <div
            className={cn(
              avatarVariants({ size, shape }),
              bordered && "ring-2 ring-background",
              "bg-muted text-muted-foreground font-bold"
            )}
          >
            +{excessCount}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
