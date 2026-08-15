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
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        background: "hsl(var(--chellaa-background) / <alpha-value>)",
        foreground: "hsl(var(--chellaa-foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--chellaa-primary) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--chellaa-secondary) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-secondary-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--chellaa-success) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--chellaa-warning) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-warning-foreground) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "hsl(var(--chellaa-danger) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-danger-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--chellaa-muted) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-muted-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--chellaa-card) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--chellaa-popover) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-popover-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--chellaa-border) / <alpha-value>)",
        input: "hsl(var(--chellaa-input) / <alpha-value>)",
        ring: "hsl(var(--chellaa-ring) / <alpha-value>)",
      },
      borderRadius: {
        "chellaa-sm": "calc(var(--chellaa-radius) - 2px)",
        "chellaa-md": "var(--chellaa-radius)",
        "chellaa-lg": "calc(var(--chellaa-radius) + 4px)",
        "chellaa-full": "9999px",
      },
    },
  },
  plugins: [],
};
