import type { Preview } from "@storybook/react";
import React from "react";
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
        { name: "dark", value: "#090d16" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.backgrounds?.value === "#090d16" ? "dark" : "light";
      return (
        <ThemeProvider key={theme} defaultTheme={theme} storageKey="storybook-theme">
          <div className={`p-6 min-h-screen ${theme === "dark" ? "dark bg-background text-foreground" : "bg-background text-foreground"}`}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
