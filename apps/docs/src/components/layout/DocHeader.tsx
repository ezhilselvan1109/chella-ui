import React from "react";
import { Badge, useTheme } from "@chellaa/ui";
import { Menu, Sun, Moon, Laptop, Github, ExternalLink } from "lucide-react";

interface DocHeaderProps {
  onOpenMobileMenu: () => void;
}

export const DocHeader: React.FC<DocHeaderProps> = ({ onOpenMobileMenu }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between shadow-xs">
      <div className="flex items-center gap-3">
        {/* Mobile Navigation Trigger */}
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 -ml-1.5 rounded-chellaa-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <a href="#getting-started" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-chellaa-md bg-primary text-primary-foreground flex items-center justify-center font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
            C
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-tight text-sm sm:text-base text-foreground">
              Chellaa UI
            </span>
            <Badge variant="primary" size="small" className="font-semibold text-[10px] px-1.5 py-0.5">
              v0.1.0
            </Badge>
          </div>
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Theme Switcher Button */}
        <button
          type="button"
          onClick={cycleTheme}
          className="p-2 rounded-chellaa-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          title={`Current Theme: ${theme} (Click to cycle)`}
          aria-label="Toggle Theme Mode"
        >
          {theme === "system" ? (
            <Laptop className="w-4 h-4" />
          ) : resolvedTheme === "dark" ? (
            <Moon className="w-4 h-4 text-emerald-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
        </button>

        {/* Storybook Link */}
        <a
          href="http://localhost:6006"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-chellaa-md border border-border bg-card text-xs font-medium text-foreground hover:bg-muted transition-colors shadow-xs"
        >
          <span>Storybook</span>
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-chellaa-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="GitHub Repository"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};
