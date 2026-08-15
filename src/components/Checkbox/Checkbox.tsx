import {
  forwardRef,
  useRef,
  useEffect,
  type ChangeEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { checkboxBoxVariants } from "./Checkbox.variants";
import type { CheckboxProps } from "./Checkbox.types";
import { Check, Minus } from "lucide-react";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      size = "medium",
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      onChange,
      indeterminate = false,
      disabled = false,
      required = false,
      id: customId,
      name,
      value,
      label,
      description,
      error,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const inputId = useId("checkbox", customId);
    const descriptionId = `${inputId}-desc`;
    const errorId = `${inputId}-error`;

    const internalRef = useRef<HTMLInputElement>(null);

    const [checked, setChecked] = useControlled<boolean>({
      controlled: controlledChecked,
      default: defaultChecked,
      name: "Checkbox",
      state: "checked",
    });

    const isChecked = Boolean(checked);
    const isIndeterminate = Boolean(indeterminate);
    const hasError = Boolean(error);
    const labelContent = label ?? children;

    // Synchronize native DOM input ref with forwarded ref and indeterminate property
    useEffect(() => {
      const el = internalRef.current;
      if (el) {
        el.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

    const setMergedRef = (el: HTMLInputElement | null) => {
      (internalRef as { current: HTMLInputElement | null }).current = el;
      if (typeof forwardedRef === "function") {
        forwardedRef(el);
      } else if (forwardedRef) {
        (forwardedRef as { current: HTMLInputElement | null }).current = el;
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const nextChecked = isIndeterminate ? true : e.target.checked;
      setChecked(nextChecked);
      onCheckedChange?.(nextChecked);
      onChange?.(e);
    };

    // Determine state variant
    const stateVariant = hasError
      ? isChecked
        ? "errorChecked"
        : "error"
      : isIndeterminate
      ? "indeterminate"
      : isChecked
      ? "checked"
      : "unchecked";

    const describedBy = [
      hasError ? errorId : undefined,
      description ? descriptionId : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <div className={cn("inline-flex items-start gap-2.5 font-sans", className)}>
        <div className="relative flex items-center justify-center mt-0.5">
          {/* Native hidden accessible checkbox */}
          <input
            ref={setMergedRef}
            id={inputId}
            type="checkbox"
            name={name}
            value={value}
            checked={isChecked}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            aria-invalid={hasError}
            aria-describedby={describedBy}
            className="peer sr-only"
            {...props}
          />

          {/* Styled visual checkbox box */}
          <label
            htmlFor={inputId}
            className={cn(
              checkboxBoxVariants({ size, state: stateVariant, disabled }),
              "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"
            )}
          >
            {isIndeterminate ? (
              <Minus
                className={cn(
                  "stroke-[3] transition-transform duration-150 scale-100",
                  size === "small" && "w-2.5 h-2.5",
                  size === "medium" && "w-3 h-3",
                  size === "large" && "w-3.5 h-3.5"
                )}
                aria-hidden="true"
              />
            ) : isChecked ? (
              <Check
                className={cn(
                  "stroke-[3] transition-transform duration-150 scale-100",
                  size === "small" && "w-2.5 h-2.5",
                  size === "medium" && "w-3 h-3",
                  size === "large" && "w-3.5 h-3.5"
                )}
                aria-hidden="true"
              />
            ) : null}
          </label>
        </div>

        {/* Label, Description and Error container */}
        {(labelContent || description || error) && (
          <div className="flex flex-col select-none">
            {labelContent && (
              <label
                htmlFor={inputId}
                className={cn(
                  "font-medium leading-none text-foreground cursor-pointer",
                  size === "small" && "text-xs pt-0.5",
                  size === "medium" && "text-sm pt-0.5",
                  size === "large" && "text-base pt-0.5",
                  disabled && "opacity-50 cursor-not-allowed",
                  hasError && "text-danger"
                )}
              >
                {labelContent}
                {required && <span className="ml-1 text-danger font-bold">*</span>}
              </label>
            )}

            {description && (
              <p
                id={descriptionId}
                className={cn(
                  "text-muted-foreground mt-1",
                  size === "small" && "text-[11px]",
                  size === "medium" && "text-xs",
                  size === "large" && "text-sm",
                  disabled && "opacity-50"
                )}
              >
                {description}
              </p>
            )}

            {error && (
              <p
                id={errorId}
                role="alert"
                className={cn(
                  "text-danger font-medium mt-1 animate-fade-in",
                  size === "small" && "text-[11px]",
                  size === "medium" && "text-xs",
                  size === "large" && "text-sm"
                )}
              >
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
