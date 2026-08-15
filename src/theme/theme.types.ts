import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "system";

export interface CustomThemeTokens {
  primary?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryForeground?: string;
  success?: string;
  successForeground?: string;
  warning?: string;
  warningForeground?: string;
  danger?: string;
  dangerForeground?: string;
  background?: string;
  foreground?: string;
  card?: string;
  cardForeground?: string;
  popover?: string;
  popoverForeground?: string;
  muted?: string;
  mutedForeground?: string;
  border?: string;
  input?: string;
  ring?: string;
  radius?: string;
}

export interface ThemeConfig {
  defaultTheme?: ThemeMode;
  storageKey?: string;
  tokens?: {
    light?: CustomThemeTokens;
    dark?: CustomThemeTokens;
  };
}

export interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setCustomTokens: (tokens: { light?: CustomThemeTokens; dark?: CustomThemeTokens }) => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
  theme?: ThemeConfig;
}
