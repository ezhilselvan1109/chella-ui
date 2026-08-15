import { useState, useCallback, useRef } from "react";
/**
 * Custom hook to seamlessly manage both controlled and uncontrolled component states.
 */
export function useControlled({ controlled, default: defaultProp, name = "Component", state = "value", }) {
    const isControlled = controlled !== undefined;
    const [valueState, setValueState] = useState(defaultProp);
    const value = isControlled ? controlled : valueState;
    const isControlledRef = useRef(isControlled);
    const wasControlled = isControlledRef.current;
    if (process.env.NODE_ENV !== "production") {
        if (wasControlled !== isControlled) {
            console.warn(`Chellaa UI: ${name} is changing from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa).`);
        }
    }
    const setValue = useCallback((newValue) => {
        if (!isControlled) {
            setValueState(newValue);
        }
    }, [isControlled]);
    return [value, setValue, isControlled];
}
