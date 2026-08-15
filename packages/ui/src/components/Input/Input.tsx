import { forwardRef, type ChangeEvent, type MouseEvent } from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { inputVariants } from "./Input.variants";
import type { InputProps } from "./Input.types";
import { X, Loader2 } from "lucide-react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "default",
      size = "medium",
      label,
      helperText,
      error,
      prefix,
      suffix,
      clearable = false,
      onClear,
      loading = false,
      disabled = false,
      required = false,
      id: customId,
      value: controlledValue,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputId = useId("input", customId);
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const [value, setValue] = useControlled<string | number | readonly string[] | undefined>({
      controlled: controlledValue,
      default: defaultValue ?? "",
      name: "Input",
    });

    const hasValue = value !== undefined && value !== "" && value !== null;
    const hasError = Boolean(error);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange?.(e);
    };

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation();
      setValue("");
      onClear?.();
      // Dispatch synthetic event if needed
      const syntheticEvent = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
    };

    return (
      <div className="w-full space-y-1.5 font-sans">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold tracking-wide text-foreground/90 select-none"
          >
            {label}
            {required && <span className="ml-1 text-danger font-bold">*</span>}
          </label>
        )}

        <div className="relative flex items-center w-full">
          {prefix && (
            <div
              className={cn(
                "absolute left-3 flex items-center pointer-events-none text-muted-foreground z-10",
                size === "small" && "left-2 text-xs",
                size === "large" && "left-3.5"
              )}
            >
              {prefix}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            value={value}
            onChange={handleChange}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : helperText ? helperId : undefined}
            className={cn(
              inputVariants({ variant, size, hasError }),
              prefix && (size === "small" ? "pl-7" : size === "large" ? "pl-11" : "pl-9"),
              (suffix || clearable || loading) &&
                (size === "small" ? "pr-7" : size === "large" ? "pr-11" : "pr-9"),
              className
            )}
            {...props}
          />

          <div
            className={cn(
              "absolute right-3 flex items-center gap-1.5 text-muted-foreground z-10",
              size === "small" && "right-2 text-xs",
              size === "large" && "right-3.5"
            )}
          >
            {loading && (
              <Loader2 className="h-4 w-4 animate-spin text-primary shrink-0" aria-hidden="true" />
            )}

            {!loading && clearable && hasValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                aria-label="Clear input value"
                tabIndex={-1}
                className="p-0.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}

            {!loading && suffix && <div className="flex items-center">{suffix}</div>}
          </div>
        </div>

        {error && (
          <p id={errorId} role="alert" className="text-xs font-medium text-danger animate-fade-in">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
