import {
  forwardRef,
  type ChangeEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { useRadioGroupContext } from "./RadioGroup.context";
import { radioCircleVariants, radioDotVariants } from "./Radio.variants";
import type { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      size: sizeProp,
      value,
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      onChange,
      disabled: disabledProp = false,
      required: requiredProp = false,
      name: nameProp,
      id: customId,
      label,
      description,
      error,
      children,
      ...props
    },
    ref
  ) => {
    const inputId = useId("radio", customId);
    const descriptionId = `${inputId}-desc`;
    const errorId = `${inputId}-error`;

    const groupContext = useRadioGroupContext();
    const isInsideGroup = groupContext !== undefined;

    const size = groupContext?.size ?? sizeProp ?? "medium";
    const disabled = Boolean(disabledProp || groupContext?.disabled);
    const required = Boolean(requiredProp || groupContext?.required);
    const name = nameProp ?? groupContext?.name;

    // Standalone state management
    const [standaloneChecked, setStandaloneChecked] = useControlled<boolean>({
      controlled: controlledChecked,
      default: defaultChecked,
      name: "Radio",
      state: "checked",
    });

    const isChecked = isInsideGroup
      ? groupContext.value === value
      : Boolean(standaloneChecked);

    const hasError = Boolean(error);
    const labelContent = label ?? children;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (isInsideGroup) {
        groupContext.onValueChange?.(value);
      } else {
        setStandaloneChecked(true);
      }

      onCheckedChange?.(true);
      onChange?.(e);
    };

    // State variant for outer circle
    const stateVariant = hasError
      ? isChecked
        ? "errorChecked"
        : "error"
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
          {/* Native hidden accessible radio input */}
          <input
            ref={ref}
            id={inputId}
            type="radio"
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

          {/* Styled visual radio circle */}
          <label
            htmlFor={inputId}
            className={cn(
              radioCircleVariants({ size, state: stateVariant, disabled }),
              "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"
            )}
          >
            {/* Inner Dot Indicator */}
            <span
              className={cn(
                radioDotVariants({
                  size,
                  checked: isChecked,
                  hasError: hasError && isChecked,
                })
              )}
              aria-hidden="true"
            />
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

Radio.displayName = "Radio";
