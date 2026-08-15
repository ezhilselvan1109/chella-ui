import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import type { ThemeMode, ThemeContextValue, ThemeProviderProps, CustomThemeTokens } from "./theme.types";
import { applyTokensToElement } from "./tokens";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "chellaa-theme",
  theme: themeConfig,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === "light" || stored === "dark" || stored === "system") {
        return stored;
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
    return defaultTheme;
  });

  const [customTokens, setCustomTokens] = useState<{
    light?: CustomThemeTokens;
    dark?: CustomThemeTokens;
  }>(themeConfig?.tokens || {});

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
  });

  // Watch system preference changes when in 'system' mode
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaChange = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [theme]);

  // Update resolvedTheme when theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const newResolvedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    setResolvedTheme(newResolvedTheme);
  }, [theme]);

  // Apply DOM classes and custom tokens
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    if (resolvedTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }

    const activeTokens = resolvedTheme === "dark" ? customTokens.dark : customTokens.light;
    if (activeTokens) {
      applyTokensToElement(root, activeTokens);
    }
  }, [resolvedTheme, customTokens]);

  const setTheme = useCallback(
    (newTheme: ThemeMode) => {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore local storage error
      }
      setThemeState(newTheme);
    },
    [storageKey]
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
      setCustomTokens,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a Chellaa UI ThemeProvider");
  }
  return context;
}
