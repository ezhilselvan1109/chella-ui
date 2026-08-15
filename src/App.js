import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DocsView from "./pages/DocsView";
import PlaygroundView from "./pages/PlaygroundView";
import { BookOpen, Sparkles } from "lucide-react";
import { Badge } from "./components/Badge";
import { ToastProvider } from "./components/Toast";
export function App() {
    const [currentAppView, setCurrentAppView] = useState("docs");
    return (_jsx(ToastProvider, { placement: "top-right", children: _jsxs("div", { className: "min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200", children: [_jsxs("div", { className: "bg-card/90 border-b border-border/80 px-4 sm:px-6 py-2 flex items-center justify-between text-xs backdrop-blur-md sticky top-0 z-50 shadow-xs", children: [_jsxs("div", { className: "flex items-center gap-3 sm:gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-7 h-7 rounded-chella-md bg-primary text-primary-foreground flex items-center justify-center font-black text-xs shadow-xs", children: "C" }), _jsxs("span", { className: "font-bold tracking-tight text-foreground text-sm flex items-center gap-1.5", children: ["Chella UI", _jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-success animate-pulse" })] })] }), _jsx("div", { className: "h-4 w-px bg-border hidden sm:block" }), _jsxs("div", { className: "flex items-center gap-1 bg-muted/70 p-0.5 rounded-chella-md border border-border/60", children: [_jsxs("button", { onClick: () => setCurrentAppView("docs"), className: `flex items-center gap-1.5 px-3 py-1 rounded-chella-sm text-xs font-semibold transition-all ${currentAppView === "docs"
                                                ? "bg-background text-primary shadow-xs"
                                                : "text-muted-foreground hover:text-foreground hover:bg-background/50"}`, children: [_jsx(BookOpen, { className: "w-3.5 h-3.5" }), _jsx("span", { children: "Documentation" })] }), _jsxs("button", { onClick: () => setCurrentAppView("playground"), className: `flex items-center gap-1.5 px-3 py-1 rounded-chella-sm text-xs font-semibold transition-all ${currentAppView === "playground"
                                                ? "bg-background text-primary shadow-xs"
                                                : "text-muted-foreground hover:text-foreground hover:bg-background/50"}`, children: [_jsx(Sparkles, { className: "w-3.5 h-3.5" }), _jsx("span", { children: "Playground" })] })] })] }), _jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [_jsx(Badge, { variant: "primary", size: "small", children: "v0.1.0" }), _jsx(Badge, { variant: "secondary", size: "small", className: "hidden sm:inline-flex", children: "35 Production Components" })] })] }), _jsx("div", { className: "flex-1 flex flex-col", children: currentAppView === "docs" ? _jsx(DocsView, {}) : _jsx(PlaygroundView, {}) })] }) }));
}
export default App;
