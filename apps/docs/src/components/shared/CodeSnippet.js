import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Copy, Check } from "lucide-react";
import { useClipboard } from "../../hooks/useClipboard";
export const CodeSnippet = ({ code, language = "tsx", id, className = "", }) => {
    const snippetId = id || code.slice(0, 24);
    const { copiedId, copy } = useClipboard();
    const isCopied = copiedId === snippetId;
    return (_jsxs("div", { className: `relative group rounded-chellaa-lg border border-border bg-muted/40 overflow-hidden font-mono text-xs ${className}`, children: [_jsxs("div", { className: "flex items-center justify-between px-3.5 py-2 border-b border-border/50 bg-muted/20 text-muted-foreground", children: [_jsx("span", { className: "text-[11px] font-medium tracking-wide uppercase", children: language }), _jsx("button", { type: "button", onClick: () => copy(code, snippetId), className: "inline-flex items-center gap-1.5 px-2 py-1 rounded-chellaa-sm text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors focus:outline-none focus:ring-1 focus:ring-primary", "aria-label": "Copy code to clipboard", children: isCopied ? (_jsxs(_Fragment, { children: [_jsx(Check, { className: "w-3.5 h-3.5 text-emerald-500" }), _jsx("span", { className: "text-emerald-500", children: "Copied!" })] })) : (_jsxs(_Fragment, { children: [_jsx(Copy, { className: "w-3.5 h-3.5" }), _jsx("span", { children: "Copy" })] })) })] }), _jsx("pre", { className: "p-4 overflow-x-auto text-[13px] leading-relaxed text-foreground select-text", children: _jsx("code", { children: code.trim() }) })] }));
};
