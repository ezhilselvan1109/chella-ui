import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";
import { ThemeProvider } from "@chellaa/ui";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0a0d0e" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const bgValue = context.globals.backgrounds?.value;
      const isDark = bgValue === "#0a0d0e" || bgValue === "dark" || context.globals.theme === "dark";
      const activeTheme = isDark ? "dark" : "light";

      useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
          root.classList.add("dark");
          root.setAttribute("data-theme", "dark");
        } else {
          root.classList.remove("dark");
          root.setAttribute("data-theme", "light");
        }
      }, [isDark]);

      return (
        <ThemeProvider key={activeTheme} defaultTheme={activeTheme} storageKey={`sb-theme-${activeTheme}`}>
          <div className={`p-6 min-h-screen bg-background text-foreground transition-colors duration-150 ${isDark ? "dark" : ""}`}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
