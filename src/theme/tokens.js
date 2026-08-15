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
    primary: "217.2 91.2% 59.8%",
    primaryForeground: "222.2 47.4% 11.2%",
    secondary: "217.2 32.6% 17.5%",
    secondaryForeground: "210 40% 98%",
    success: "142.1 70.6% 45.3%",
    successForeground: "144.9 80.4% 10%",
    warning: "38 92% 50%",
    warningForeground: "48 96% 10%",
    danger: "0 72.2% 50.6%",
    dangerForeground: "210 40% 98%",
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
    card: "222.2 84% 6.9%",
    cardForeground: "210 40% 98%",
    popover: "222.2 84% 6.9%",
    popoverForeground: "210 40% 98%",
    muted: "217.2 32.6% 17.5%",
    mutedForeground: "215 20.2% 65.1%",
    border: "217.2 32.6% 17.5%",
    input: "217.2 32.6% 17.5%",
    ring: "224.3 76.3% 48%",
    radius: "0.5rem",
};
const tokenToCssVariableMap = {
    primary: "--chella-primary",
    primaryForeground: "--chella-primary-foreground",
    secondary: "--chella-secondary",
    secondaryForeground: "--chella-secondary-foreground",
    success: "--chella-success",
    successForeground: "--chella-success-foreground",
    warning: "--chella-warning",
    warningForeground: "--chella-warning-foreground",
    danger: "--chella-danger",
    dangerForeground: "--chella-danger-foreground",
    background: "--chella-background",
    foreground: "--chella-foreground",
    card: "--chella-card",
    cardForeground: "--chella-card-foreground",
    popover: "--chella-popover",
    popoverForeground: "--chella-popover-foreground",
    muted: "--chella-muted",
    mutedForeground: "--chella-muted-foreground",
    border: "--chella-border",
    input: "--chella-input",
    ring: "--chella-ring",
    radius: "--chella-radius",
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
