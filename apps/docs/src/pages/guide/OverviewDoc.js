import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Badge, Divider } from "@chellaa/ui";
import { CodeSnippet } from "../../components/shared/CodeSnippet";
import { Layers, ShieldCheck, Zap } from "lucide-react";
export const OverviewDoc = () => {
    return (_jsxs("div", { className: "space-y-8 animate-in fade-in-50 duration-200", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { variant: "primary", size: "small", children: "Design System v0.1.0" }), _jsx(Badge, { variant: "secondary", size: "small", children: "Production-Ready" })] }), _jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground", children: "Chellaa UI Design System" }), _jsx("p", { className: "text-base text-muted-foreground leading-relaxed max-w-3xl", children: "A high-performance, accessible, and theme-adaptive React component library engineered for modern enterprise web applications. Built with Tailwind CSS and Radix Primitives." })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [_jsxs(Card, { variant: "outlined", className: "p-4 space-y-2", children: [_jsx("div", { className: "w-8 h-8 rounded-chellaa-md bg-primary/10 text-primary flex items-center justify-center", children: _jsx(Layers, { className: "w-4 h-4" }) }), _jsx("h3", { className: "text-sm font-bold text-foreground", children: "35+ UI Primitives" }), _jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Accessible, keyboard-friendly primitives covering forms, navigation, overlays, and data display." })] }), _jsxs(Card, { variant: "outlined", className: "p-4 space-y-2", children: [_jsx("div", { className: "w-8 h-8 rounded-chellaa-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center", children: _jsx(Zap, { className: "w-4 h-4" }) }), _jsx("h3", { className: "text-sm font-bold text-foreground", children: "Obsidian & Chakra Dark" }), _jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: ["Engineered with deep slate/obsidian contrast (", _jsx("code", { className: "text-[11px] font-mono bg-muted px-1 py-0.5 rounded", children: "rgb(10 13 14)" }), ") and vibrant accents."] })] }), _jsxs(Card, { variant: "outlined", className: "p-4 space-y-2", children: [_jsx("div", { className: "w-8 h-8 rounded-chellaa-md bg-sky-500/10 text-sky-500 flex items-center justify-center", children: _jsx(ShieldCheck, { className: "w-4 h-4" }) }), _jsx("h3", { className: "text-sm font-bold text-foreground", children: "WCAG 2.1 AAA Compliant" }), _jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Strict focus trap, ARIA descriptors, keyboard navigation, and high-contrast text ratios." })] })] }), _jsx(Divider, {}), _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-xl font-bold text-foreground", children: "1. Installation" }), _jsx("p", { className: "text-xs sm:text-sm text-muted-foreground", children: "Install the package and its peer dependencies via npm or your preferred package manager:" }), _jsx(CodeSnippet, { code: "npm install @chellaa/ui clsx tailwind-merge lucide-react", language: "bash" })] }), _jsx(Divider, {}), _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-xl font-bold text-foreground", children: "2. Tailwind CSS Configuration" }), _jsxs("p", { className: "text-xs sm:text-sm text-muted-foreground", children: ["Add Chellaa UI package content paths to your ", _jsx("code", { className: "font-mono text-xs bg-muted px-1.5 py-0.5 rounded", children: "tailwind.config.js" }), ":"] }), _jsx(CodeSnippet, { code: `// tailwind.config.js
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@chellaa/ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
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
        card: {
          DEFAULT: "hsl(var(--chellaa-card) / <alpha-value>)",
          foreground: "hsl(var(--chellaa-card-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--chellaa-border) / <alpha-value>)",
      },
    },
  },
};`, language: "typescript" })] }), _jsx(Divider, {}), _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-xl font-bold text-foreground", children: "3. Quick Start Example" }), _jsxs("p", { className: "text-xs sm:text-sm text-muted-foreground", children: ["Wrap your root application with ", _jsx("code", { className: "font-mono text-xs bg-muted px-1.5 py-0.5 rounded", children: "<ThemeProvider>" }), " and start building:"] }), _jsx(CodeSnippet, { code: `import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, Button, Card } from "@chellaa/ui";
import "@chellaa/ui/styles.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen p-8 bg-background text-foreground">
        <Card variant="outlined" className="p-6 max-w-md space-y-4">
          <h2 className="text-lg font-bold">Welcome to Chellaa UI</h2>
          <p className="text-sm text-muted-foreground">
            Fast, modern, and accessible design system components.
          </p>
          <Button variant="primary">Get Started</Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);`, language: "tsx" })] })] }));
};
