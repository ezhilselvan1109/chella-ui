import { useState } from "react";
import DocsView from "./pages/DocsView";
import PlaygroundView from "./pages/PlaygroundView";
import { BookOpen, Sparkles } from "lucide-react";
import { Badge } from "./components/Badge";

export function App() {
  const [currentAppView, setCurrentAppView] = useState<"docs" | "playground">("docs");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Top Application Switcher Bar */}
      <div className="bg-card/90 border-b border-border/80 px-4 sm:px-6 py-2 flex items-center justify-between text-xs backdrop-blur-md sticky top-0 z-50 shadow-xs">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-chella-md bg-primary text-primary-foreground flex items-center justify-center font-black text-xs shadow-xs">
              C
            </div>
            <span className="font-bold tracking-tight text-foreground text-sm flex items-center gap-1.5">
              Chella UI
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            </span>
          </div>

          <div className="h-4 w-px bg-border hidden sm:block" />

          {/* View switcher tabs */}
          <div className="flex items-center gap-1 bg-muted/70 p-0.5 rounded-chella-md border border-border/60">
            <button
              onClick={() => setCurrentAppView("docs")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-chella-sm text-xs font-semibold transition-all ${
                currentAppView === "docs"
                  ? "bg-background text-primary shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Documentation</span>
            </button>
            <button
              onClick={() => setCurrentAppView("playground")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-chella-sm text-xs font-semibold transition-all ${
                currentAppView === "playground"
                  ? "bg-background text-primary shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Playground</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Badge variant="primary" size="small">
            v0.1.0
          </Badge>
          <Badge variant="secondary" size="small" className="hidden sm:inline-flex">
            9 Production Components
          </Badge>
        </div>
      </div>

      {/* Main View Content */}
      <main className="flex-1">
        {currentAppView === "docs" ? <DocsView /> : <PlaygroundView />}
      </main>
    </div>
  );
}

export default App;
