import {
  forwardRef,
  useRef,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useId } from "../../hooks/useId";
import { textareaVariants } from "./Textarea.variants";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = "default",
      size = "medium",
      resize = "vertical",
      label,
      description,
      error,
      showCount = false,
      autoResize = false,
      maxLength,
      value: controlledValue,
      defaultValue = "",
      onChange,
      disabled = false,
      required = false,
      id: customId,
      rows = 3,
      ...props
    },
    forwardedRef
  ) => {
    const textareaId = useId("textarea", customId);
    const descriptionId = `${textareaId}-desc`;
    const errorId = `${textareaId}-error`;
    const countId = `${textareaId}-count`;

    const internalRef = useRef<HTMLTextAreaElement | null>(null);
    const [internalValue, setInternalValue] = useState<string>(
      String(defaultValue ?? "")
    );

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? String(controlledValue ?? "") : internalValue;
    const currentLength = currentValue.length;
    const hasError = Boolean(error);

    // Merge internal and external refs
    const setMergedRef = (el: HTMLTextAreaElement | null) => {
      internalRef.current = el;
      if (typeof forwardedRef === "function") {
        forwardedRef(el);
      } else if (forwardedRef) {
        (forwardedRef as { current: HTMLTextAreaElement | null }).current = el;
      }
    };

    // Auto-resize effect on content changes
    const adjustHeight = () => {
      if (autoResize && internalRef.current) {
        internalRef.current.style.height = "auto";
        internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;
      }
    };

    useEffect(() => {
      adjustHeight();
    }, [currentValue, autoResize]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
      adjustHeight();
    };

    const describedBy = [
      hasError ? errorId : undefined,
      description ? descriptionId : undefined,
      showCount ? countId : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <div className={cn("w-full space-y-1.5 font-sans", className)}>
        {/* Label and Character Count Header */}
        {(label || showCount) && (
          <div className="flex items-center justify-between">
            {label && (
              <label
                htmlFor={textareaId}
                className={cn(
                  "text-xs font-semibold tracking-wide text-foreground/90 select-none block",
                  disabled && "opacity-50 cursor-not-allowed",
                  hasError && "text-danger"
                )}
              >
                {label}
                {required && <span className="ml-1 text-danger font-bold">*</span>}
              </label>
            )}

            {showCount && (
              <span
                id={countId}
                className={cn(
                  "text-[11px] font-mono text-muted-foreground ml-auto",
                  maxLength && currentLength >= maxLength && "text-danger font-bold"
                )}
                aria-live="polite"
              >
                {currentLength}
                {maxLength ? ` / ${maxLength}` : ""}
              </span>
            )}
          </div>
        )}

        {/* Textarea Input */}
        <textarea
          ref={setMergedRef}
          id={textareaId}
          rows={rows}
          value={controlledValue}
          defaultValue={isControlled ? undefined : defaultValue}
          maxLength={maxLength}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          className={cn(
            textareaVariants({
              variant,
              size,
              resize: autoResize ? "none" : resize,
              hasError,
            })
          )}
          {...props}
        />

        {/* Description / Helper Text */}
        {description && (
          <p id={descriptionId} className="text-xs text-muted-foreground">
            {description}
          </p>
        )}

        {/* Error Alert */}
        {error && (
          <p id={errorId} role="alert" className="text-xs font-medium text-danger animate-fade-in">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
