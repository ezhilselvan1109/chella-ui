import React from "react";
import { Button, Card, Badge, Divider, useTheme } from "@chellaa/ui";
import { CodeSnippet } from "../../components/shared/CodeSnippet";
import { Moon, Sun, Laptop, Palette } from "lucide-react";

export const ThemingDoc: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="warning" size="small">
            Obsidian Dark Palette
          </Badge>
          <span className="text-xs font-mono text-muted-foreground">rgb(10 13 14) / #0a0d0e</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Theming & Design Tokens
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
          Chellaa UI uses semantic CSS variables in HSL format for instant zero-runtime theme switching between Light, Dark (Obsidian / Chakra Style), and System preferences.
        </p>
      </div>

      <Divider />

      {/* Interactive Theme Switcher Demo */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Interactive Theme Controls</h2>
        <Card variant="outlined" className="p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={theme === "light" ? "primary" : "outline"}
              size="small"
              onClick={() => setTheme("light")}
            >
              <Sun className="w-4 h-4 mr-1.5" /> Light Mode
            </Button>
            <Button
              variant={theme === "dark" ? "primary" : "outline"}
              size="small"
              onClick={() => setTheme("dark")}
            >
              <Moon className="w-4 h-4 mr-1.5" /> Dark Mode (Obsidian)
            </Button>
            <Button
              variant={theme === "system" ? "primary" : "outline"}
              size="small"
              onClick={() => setTheme("system")}
            >
              <Laptop className="w-4 h-4 mr-1.5" /> System Preference
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Current mode: <strong className="text-foreground">{theme}</strong> (Resolved as:{" "}
            <strong className="text-primary">{resolvedTheme}</strong>)
          </p>
        </Card>
      </div>

      <Divider />

      {/* Token Values Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Dark Mode Design Tokens</h2>
        <div className="rounded-chellaa-lg border border-border overflow-hidden bg-card text-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-muted-foreground font-semibold">
                <th className="py-2.5 px-4">CSS Variable</th>
                <th className="py-2.5 px-4">HSL Token Value</th>
                <th className="py-2.5 px-4">Hex / RGB</th>
                <th className="py-2.5 px-4">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono">
              <tr>
                <td className="py-2.5 px-4 font-bold text-primary">--chellaa-background</td>
                <td className="py-2.5 px-4">195 17% 4.7%</td>
                <td className="py-2.5 px-4 text-muted-foreground">rgb(10 13 14) / #0a0d0e</td>
                <td className="py-2.5 px-4 font-sans text-muted-foreground">Obsidian Canvas</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-primary">--chellaa-card</td>
                <td className="py-2.5 px-4">195 15% 7.5%</td>
                <td className="py-2.5 px-4 text-muted-foreground">rgb(16 22 24) / #101618</td>
                <td className="py-2.5 px-4 font-sans text-muted-foreground">Elevated Surface</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-primary">--chellaa-primary</td>
                <td className="py-2.5 px-4">166 85% 44%</td>
                <td className="py-2.5 px-4 text-emerald-400">#0ed796 (Chakra Mint)</td>
                <td className="py-2.5 px-4 font-sans text-muted-foreground">Primary Accent</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-primary">--chellaa-border</td>
                <td className="py-2.5 px-4">195 14% 16%</td>
                <td className="py-2.5 px-4 text-muted-foreground">#233237</td>
                <td className="py-2.5 px-4 font-sans text-muted-foreground">Subtle Dark Border</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-primary">--chellaa-foreground</td>
                <td className="py-2.5 px-4">195 20% 98%</td>
                <td className="py-2.5 px-4 text-muted-foreground">#f3f8f9</td>
                <td className="py-2.5 px-4 font-sans text-muted-foreground">High-contrast text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

      <Divider />

      {/* ThemeProvider Setup */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Using Custom Theme Tokens</h2>
        <CodeSnippet
          code={`import { ThemeProvider } from "@chellaa/ui";

const customTokens = {
  dark: {
    primary: "166 85% 44%", // Custom Mint Accent
    background: "195 17% 4.7%", // rgb(10 13 14)
    card: "195 15% 7.5%",
  },
};

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" theme={{ tokens: customTokens }}>
      {/* App content */}
    </ThemeProvider>
  );
}`}
          language="tsx"
        />
      </div>
    </div>
  );
};
