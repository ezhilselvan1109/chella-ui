import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

interface UseFocusTrapOptions {
  active?: boolean;
  initialFocusRef?: RefObject<HTMLElement | null>;
  restoreFocus?: boolean;
}

/**
 * Traps keyboard focus within the specified container and restores focus when deactivated.
 */
export function useFocusTrap<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  options: UseFocusTrapOptions = {}
) {
  const { active = true, initialFocusRef, restoreFocus = true } = options;
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;

    const container = containerRef.current;
    if (!container) return;

    // Focus initial element or first focusable element
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else {
      const focusable = container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);
      if (focusable.length > 0) {
        focusable[0]?.focus();
      } else {
        container.focus();
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const currentContainer = containerRef.current;
      if (!currentContainer) return;

      const focusableElements = Array.from(
        currentContainer.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS)
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement || document.activeElement === currentContainer) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (restoreFocus && previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [active, containerRef, initialFocusRef, restoreFocus]);
}
