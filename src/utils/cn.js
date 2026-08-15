import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Utility to merge conditional CSS classes with Tailwind conflict resolution.
 * Combines `clsx` for conditional class expressions and `tailwind-merge` to resolve
 * class conflicts (e.g., `px-4` overriding `px-2` correctly).
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
