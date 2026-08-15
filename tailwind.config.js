/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./.storybook/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
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
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.96)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "spin-fast": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-out": "fade-out 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-right": "slide-in-right 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        "spin-fast": "spin-fast 0.6s linear infinite",
      },
    },
  },
  plugins: [],
};
