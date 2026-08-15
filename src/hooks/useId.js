import { useId as reactUseId } from "react";
/**
 * Generates a unique ID with an optional prefix, providing fallback for a11y labels and inputs.
 */
export function useId(prefix, overrideId) {
    const generatedId = reactUseId();
    if (overrideId)
        return overrideId;
    return prefix ? `${prefix}-${generatedId}` : generatedId;
}
