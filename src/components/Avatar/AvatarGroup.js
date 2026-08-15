import { jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, Children, cloneElement, isValidElement, } from "react";
import { cn } from "../../utils/cn";
import { avatarGroupVariants, avatarVariants } from "./Avatar.variants";
export const AvatarGroup = forwardRef(({ className, max, size = "medium", shape = "circle", bordered = true, spacing = "normal", children, ...props }, ref) => {
    const validChildren = Children.toArray(children).filter(isValidElement);
    const totalCount = validChildren.length;
    const renderLimit = max && max > 0 && totalCount > max ? max : totalCount;
    const visibleAvatars = validChildren.slice(0, renderLimit);
    const excessCount = totalCount - renderLimit;
    return (_jsxs("div", { ref: ref, role: "group", className: cn(avatarGroupVariants({ spacing }), className), ...props, children: [visibleAvatars.map((child, index) => cloneElement(child, {
                key: child.key || index,
                size: child.props.size || size,
                shape: child.props.shape || shape,
                bordered: child.props.bordered !== undefined ? child.props.bordered : bordered,
            })), excessCount > 0 && (_jsxs("div", { className: cn(avatarVariants({ size, shape }), bordered && "ring-2 ring-background", "bg-muted text-muted-foreground font-bold"), children: ["+", excessCount] }))] }));
});
AvatarGroup.displayName = "AvatarGroup";
