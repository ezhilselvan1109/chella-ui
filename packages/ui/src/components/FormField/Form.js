import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, } from "react";
import { cn } from "../../utils/cn";
import { formVariants } from "./FormField.variants";
const FormContext = createContext(null);
export function useFormContext() {
    return useContext(FormContext);
}
export const Form = forwardRef(({ className, layout = "vertical", size = "medium", children, onSubmit, ...props }, ref) => {
    const contextValue = useMemo(() => ({
        layout,
        size,
    }), [layout, size]);
    return (_jsx(FormContext.Provider, { value: contextValue, children: _jsx("form", { ref: ref, onSubmit: onSubmit, className: cn(formVariants({ layout }), className), ...props, children: children }) }));
});
Form.displayName = "Form";
