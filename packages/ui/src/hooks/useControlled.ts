import { useState, useCallback, useRef } from "react";

export interface UseControlledProps<T> {
  controlled?: T;
  default?: T;
  name?: string;
  state?: string;
}

/**
 * Custom hook to seamlessly manage both controlled and uncontrolled component states.
 */
export function useControlled<T>({
  controlled,
  default: defaultProp,
  name = "Component",
  state = "value",
}: UseControlledProps<T>): [T, (newValue: T | ((prevValue: T) => T)) => void, boolean] {
  const isControlled = controlled !== undefined;
  const [valueState, setValueState] = useState<T>(defaultProp as T);
  const value = isControlled ? controlled : valueState;

  const isControlledRef = useRef(isControlled);
  if (process.env.NODE_ENV !== "production") {
    if (isControlledRef.current !== isControlled) {
      console.warn(
        `Chella UI: ${name} is changing from ${
          isControlledRef.current ? "controlled" : "uncontrolled"
        } to ${isControlled ? "controlled" : "uncontrolled"} for ${state}. Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`
      );
    }
  }

  const setValue = useCallback(
    (newValue: T | ((prevValue: T) => T)) => {
      if (!isControlled) {
        setValueState(newValue);
      }
    },
    [isControlled]
  );

  return [value, setValue, isControlled];
}
