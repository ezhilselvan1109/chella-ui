import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, } from "react";
import { cn } from "../../utils/cn";
import { avatarVariants, avatarStatusVariants } from "./Avatar.variants";
import { User } from "lucide-react";
function getInitials(name) {
    if (!name)
        return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
        return (parts[0]?.substring(0, 2) ?? "").toUpperCase();
    }
    const first = parts[0]?.charAt(0) ?? "";
    const last = parts[parts.length - 1]?.charAt(0) ?? "";
    return `${first}${last}`.toUpperCase();
}
export const Avatar = forwardRef(({ className, src, alt, name, icon, size = "medium", shape = "circle", status, statusPlacement = "bottom-right", imgProps, bordered = false, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);
    const handleImageError = (e) => {
        setHasError(true);
        imgProps?.onError?.(e);
    };
    const showImage = src && !hasError;
    const initials = getInitials(name);
    return (_jsxs("div", { ref: ref, role: showImage ? undefined : "img", "aria-label": showImage ? undefined : (alt || name || "Avatar"), className: cn(avatarVariants({ size, shape }), bordered && "ring-2 ring-background", className), ...props, children: [showImage ? (_jsx("img", { src: src, alt: alt || name || "Avatar", onError: handleImageError, className: "w-full h-full object-cover", ...imgProps })) : initials ? (_jsx("span", { className: "font-semibold leading-none", children: initials })) : icon ? (_jsx("span", { className: "flex items-center justify-center w-full h-full", children: icon })) : (_jsx(User, { className: "w-1/2 h-1/2 text-muted-foreground" })), status && (_jsx("span", { role: "status", "aria-label": `Status: ${status}`, className: cn(avatarStatusVariants({ status, size, placement: statusPlacement })) }))] }));
});
Avatar.displayName = "Avatar";
