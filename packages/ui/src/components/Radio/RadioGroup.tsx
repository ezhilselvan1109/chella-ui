import {
  forwardRef,
  useMemo,
} from "react";
import { cn } from "../../utils/cn";
import { useControlled } from "../../hooks/useControlled";
import { useId } from "../../hooks/useId";
import { RadioGroupContext, type RadioGroupContextValue } from "./RadioGroup.context";
import { radioGroupVariants } from "./Radio.variants";
import type { RadioGroupProps } from "./RadioGroup.types";

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      onValueChange,
      name: nameProp,
      disabled = false,
      required = false,
      orientation = "vertical",
      size = "medium",
      label,
      description,
      error,
      children,
      id: customId,
      ...props
    },
    ref
  ) => {
    const groupId = useId("radiogroup", customId);
    const autoName = useId("radiogroup-name", nameProp);
    const labelId = `${groupId}-label`;
    const descriptionId = `${groupId}-desc`;
    const errorId = `${groupId}-error`;

    const [value, setValue] = useControlled<string | undefined>({
      controlled: controlledValue,
      default: defaultValue,
      name: "RadioGroup",
      state: "value",
    });

    const handleValueChange = (newValue: string) => {
      setValue(newValue);
      onValueChange?.(newValue);
    };

    const contextValue = useMemo<RadioGroupContextValue>(
      () => ({
        name: autoName,
        value,
        onValueChange: handleValueChange,
        disabled,
        required,
        size,
      }),
      [autoName, value, disabled, required, size]
    );

    const hasError = Boolean(error);
    const describedBy = [
      hasError ? errorId : undefined,
      description ? descriptionId : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          id={groupId}
          role="radiogroup"
          aria-labelledby={label ? labelId : undefined}
          aria-describedby={describedBy}
          aria-invalid={hasError}
          aria-required={required}
          aria-orientation={orientation ?? "vertical"}
          className={cn("space-y-2 font-sans", className)}
          {...props}
        >
          {label && (
            <div
              id={labelId}
              className="text-xs font-semibold tracking-wide text-foreground/90 select-none"
            >
              {label}
              {required && <span className="ml-1 text-danger font-bold">*</span>}
            </div>
          )}

          <div className={cn(radioGroupVariants({ orientation }))}>
            {children}
          </div>

          {description && (
            <p id={descriptionId} className="text-xs text-muted-foreground mt-1">
              {description}
            </p>
          )}

          {error && (
            <p id={errorId} role="alert" className="text-xs font-medium text-danger mt-1 animate-fade-in">
              {error}
            </p>
          )}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
