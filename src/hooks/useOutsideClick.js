import { useEffect } from "react";
/**
 * Triggers callback when a click or touch event occurs outside the specified element ref.
 */
export function useOutsideClick(ref, handler, enabled = true) {
    useEffect(() => {
        if (!enabled)
            return;
        const listener = (event) => {
            const el = ref.current;
            if (!el || el.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler, enabled]);
}
