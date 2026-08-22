export const defaultLightTokens = {
    primary: "221.2 83.2% 53.3%",
    primaryForeground: "210 40% 98%",
    secondary: "210 40% 96.1%",
    secondaryForeground: "222.2 47.4% 11.2%",
    success: "142.1 76.2% 36.3%",
    successForeground: "355.7 100% 97.3%",
    warning: "38 92% 50%",
    warningForeground: "48 96% 89%",
    danger: "0 84.2% 60.2%",
    dangerForeground: "210 40% 98%",
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    card: "0 0% 100%",
    cardForeground: "222.2 84% 4.9%",
    popover: "0 0% 100%",
    popoverForeground: "222.2 84% 4.9%",
    muted: "210 40% 96.1%",
    mutedForeground: "215.4 16.3% 46.9%",
    border: "214.3 31.8% 91.4%",
    input: "214.3 31.8% 91.4%",
    ring: "221.2 83.2% 53.3%",
    radius: "0.5rem",
};
export const defaultDarkTokens = {
    primary: "166 85% 44%",
    primaryForeground: "166 65% 6%",
    secondary: "195 13% 14%",
    secondaryForeground: "195 20% 95%",
    success: "158 75% 42%",
    successForeground: "158 80% 98%",
    warning: "38 92% 50%",
    warningForeground: "38 96% 10%",
    danger: "350 89% 60%",
    dangerForeground: "210 40% 98%",
    background: "195 17% 4.7%",
    foreground: "195 20% 98%",
    card: "195 15% 7.5%",
    cardForeground: "195 20% 98%",
    popover: "195 14% 9.5%",
    popoverForeground: "195 20% 98%",
    muted: "195 13% 11.5%",
    mutedForeground: "195 12% 64%",
    border: "195 14% 16%",
    input: "195 14% 18%",
    ring: "166 85% 44%",
    radius: "0.5rem",
};
const tokenToCssVariableMap = {
    primary: "--chellaa-primary",
    primaryForeground: "--chellaa-primary-foreground",
    secondary: "--chellaa-secondary",
    secondaryForeground: "--chellaa-secondary-foreground",
    success: "--chellaa-success",
    successForeground: "--chellaa-success-foreground",
    warning: "--chellaa-warning",
    warningForeground: "--chellaa-warning-foreground",
    danger: "--chellaa-danger",
    dangerForeground: "--chellaa-danger-foreground",
    background: "--chellaa-background",
    foreground: "--chellaa-foreground",
    card: "--chellaa-card",
    cardForeground: "--chellaa-card-foreground",
    popover: "--chellaa-popover",
    popoverForeground: "--chellaa-popover-foreground",
    muted: "--chellaa-muted",
    mutedForeground: "--chellaa-muted-foreground",
    border: "--chellaa-border",
    input: "--chellaa-input",
    ring: "--chellaa-ring",
    radius: "--chellaa-radius",
};
/**
 * Applies custom theme tokens to the root document element as CSS variables.
 */
export function applyTokensToElement(element, tokens) {
    for (const [key, value] of Object.entries(tokens)) {
        const cssVar = tokenToCssVariableMap[key];
        if (cssVar && value !== undefined) {
            element.style.setProperty(cssVar, value);
        }
    }
}
