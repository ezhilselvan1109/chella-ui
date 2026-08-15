import { createContext, useContext } from "react";
export const RadioGroupContext = createContext(undefined);
export function useRadioGroupContext() {
    return useContext(RadioGroupContext);
}
