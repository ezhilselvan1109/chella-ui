/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../packages/ui/src/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--chella-background) / <alpha-value>)",
        foreground: "hsl(var(--chella-foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--chella-primary) / <alpha-value>)",
          foreground: "hsl(var(--chella-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--chella-secondary) / <alpha-value>)",
          foreground: "hsl(var(--chella-secondary-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--chella-success) / <alpha-value>)",
          foreground: "hsl(var(--chella-success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--chella-warning) / <alpha-value>)",
          foreground: "hsl(var(--chella-warning-foreground) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "hsl(var(--chella-danger) / <alpha-value>)",
          foreground: "hsl(var(--chella-danger-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--chella-muted) / <alpha-value>)",
          foreground: "hsl(var(--chella-muted-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--chella-card) / <alpha-value>)",
          foreground: "hsl(var(--chella-card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--chella-popover) / <alpha-value>)",
          foreground: "hsl(var(--chella-popover-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--chella-border) / <alpha-value>)",
        input: "hsl(var(--chella-input) / <alpha-value>)",
        ring: "hsl(var(--chella-ring) / <alpha-value>)",
      },
      borderRadius: {
        "chella-sm": "calc(var(--chella-radius) - 2px)",
        "chella-md": "var(--chella-radius)",
        "chella-lg": "calc(var(--chella-radius) + 4px)",
        "chella-full": "9999px",
      },
    },
  },
  plugins: [],
};
