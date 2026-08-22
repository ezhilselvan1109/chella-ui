import React from "react";
import { Button, Card, Badge, Divider } from "@chellaa/ui";
import { CodeSnippet } from "../../components/shared/CodeSnippet";
import { Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export const OverviewDoc: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Hero Banner */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="small">
            Design System v0.1.0
          </Badge>
          <Badge variant="secondary" size="small">
            Production-Ready
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Chellaa UI Design System
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          A high-performance, accessible, and theme-adaptive React component library engineered for modern enterprise web applications. Built with Tailwind CSS and Radix Primitives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card variant="outlined" className="p-4 space-y-2">
          <div className="w-8 h-8 rounded-chellaa-md bg-primary/10 text-primary flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-foreground">35+ UI Primitives</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Accessible, keyboard-friendly primitives covering forms, navigation, overlays, and data display.
          </p>
        </Card>

        <Card variant="outlined" className="p-4 space-y-2">
          <div className="w-8 h-8 rounded-chellaa-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-foreground">Obsidian & Chakra Dark</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Engineered with deep slate/obsidian contrast (<code className="text-[11px] font-mono bg-muted px-1 py-0.5 rounded">rgb(10 13 14)</code>) and vibrant accents.
          </p>
        </Card>

        <Card variant="outlined" className="p-4 space-y-2">
          <div className="w-8 h-8 rounded-chellaa-md bg-sky-500/10 text-sky-500 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-foreground">WCAG 2.1 AAA Compliant</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Strict focus trap, ARIA descriptors, keyboard navigation, and high-contrast text ratios.
          </p>
        </Card>
      </div>

      <Divider />

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">1. Installation</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Install the package and its peer dependencies via npm or your preferred package manager:
        </p>

        <CodeSnippet
          code="npm install @chellaa/ui clsx tailwind-merge lucide-react"
          language="bash"
        />
      </div>

      <Divider />

      {/* Tailwind Setup */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">2. Tailwind CSS Configuration</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Add Chellaa UI package content paths to your <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">tailwind.config.js</code>:
        </p>

        <CodeSnippet
          code={`// tailwind.config.js
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
};`}
          language="typescript"
        />
      </div>

      <Divider />

      {/* Quick Start Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">3. Quick Start Example</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Wrap your root application with <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">&lt;ThemeProvider&gt;</code> and start building:
        </p>

        <CodeSnippet
          code={`import React from "react";
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

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);`}
          language="tsx"
        />
      </div>
    </div>
  );
};
