import { createContext, useContext } from "react";

export interface RadioGroupContextValue {
  name?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium" | "large";
}

export const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

export function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}
