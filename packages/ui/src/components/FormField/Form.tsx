import {
  createContext,
  useContext,
  forwardRef,
  useMemo,
} from "react";
import { cn } from "../../utils/cn";
import { formVariants } from "./FormField.variants";
import type { FormProps, FormContextValue } from "./FormField.types";

const FormContext = createContext<FormContextValue | null>(null);

export function useFormContext() {
  return useContext(FormContext);
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className,
      layout = "vertical",
      size = "medium",
      children,
      onSubmit,
      ...props
    },
    ref
  ) => {
    const contextValue = useMemo(
      () => ({
        layout,
        size,
      }),
      [layout, size]
    );

    return (
      <FormContext.Provider value={contextValue}>
        <form
          ref={ref}
          onSubmit={onSubmit}
          className={cn(formVariants({ layout }), className)}
          {...props}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.displayName = "Form";
