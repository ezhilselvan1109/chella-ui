import { forwardRef, Children, cloneElement, isValidElement, type ReactElement } from "react";
import { cn } from "../../utils/cn";
import { kbdVariants } from "./Kbd.variants";
import type { KbdProps, KbdGroupProps } from "./Kbd.types";

const KEY_MAP: Record<string, string> = {
  cmd: "⌘",
  command: "⌘",
  shift: "⇧",
  ctrl: "Ctrl",
  control: "Ctrl",
  alt: "⌥",
  option: "⌥",
  enter: "↵",
  return: "↵",
  esc: "Esc",
  escape: "Esc",
  tab: "⇥",
  space: "Space",
  backspace: "⌫",
  delete: "Del",
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
};

export const KbdGroup = forwardRef<HTMLDivElement, KbdGroupProps>(
  ({ className, size, variant, separator = "+", children, ...props }, ref) => {
    const childrenArray = Children.toArray(children);

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-1 font-sans", className)}
        {...props}
      >
        {childrenArray.map((child, index) => {
          const isLast = index === childrenArray.length - 1;

          return (
            <div key={index} className="inline-flex items-center gap-1">
              {isValidElement(child)
                ? cloneElement(child as ReactElement<KbdProps>, {
                    size: (child.props as KbdProps).size || size,
                    variant: (child.props as KbdProps).variant || variant,
                  })
                : child}
              {!isLast && separator && (
                <span className="text-muted-foreground text-xs font-mono select-none">
                  {separator}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);
KbdGroup.displayName = "KbdGroup";

const KbdRoot = forwardRef<HTMLElement, KbdProps>(
  (
    {
      className,
      variant = "default",
      size = "medium",
      keys,
      separator = "",
      children,
      ...props
    },
    ref
  ) => {
    if (keys && keys.length > 0) {
      return (
        <div className="inline-flex items-center gap-1 font-sans">
          {keys.map((keyName, idx) => {
            const mapped = KEY_MAP[keyName.toLowerCase()] || keyName.toUpperCase();
            const isLast = idx === keys.length - 1;

            return (
              <span key={idx} className="inline-flex items-center gap-1">
                <kbd
                  ref={idx === 0 ? ref : undefined}
                  className={cn(kbdVariants({ variant, size }), className)}
                  {...props}
                >
                  {mapped}
                </kbd>
                {!isLast && separator && (
                  <span className="text-muted-foreground text-xs font-mono select-none">
                    {separator}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      );
    }

    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);

KbdRoot.displayName = "Kbd";

export const Kbd = Object.assign(KbdRoot, {
  Group: KbdGroup,
});
