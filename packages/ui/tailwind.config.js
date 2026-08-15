/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../apps/**/*.{ts,tsx,js,jsx}",
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
