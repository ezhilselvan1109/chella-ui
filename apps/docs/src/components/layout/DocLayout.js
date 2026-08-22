import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DocHeader } from "./DocHeader";
import { DocSidebar } from "./DocSidebar";
import { useDocNavigation } from "../../hooks/useDocNavigation";
import { ALL_NAV_ITEMS } from "../../config/navigation.config";
import { ChevronRight } from "lucide-react";
export const DocLayout = ({ children }) => {
    const { activeSection, navigateTo } = useDocNavigation("getting-started");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const currentItem = ALL_NAV_ITEMS.find((item) => item.id === activeSection);
    const currentIndex = ALL_NAV_ITEMS.findIndex((item) => item.id === activeSection);
    const prevItem = currentIndex > 0 ? ALL_NAV_ITEMS[currentIndex - 1] : null;
    const nextItem = currentIndex < ALL_NAV_ITEMS.length - 1 ? ALL_NAV_ITEMS[currentIndex + 1] : null;
    return (_jsxs("div", { className: "min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20", children: [_jsx(DocHeader, { onOpenMobileMenu: () => setMobileMenuOpen(true) }), _jsxs("div", { className: "flex-1 flex max-w-7xl w-full mx-auto", children: [_jsx(DocSidebar, { activeSection: activeSection, onSelectSection: navigateTo, isMobileOpen: mobileMenuOpen, onCloseMobile: () => setMobileMenuOpen(false) }), _jsxs("main", { className: "flex-1 min-w-0 px-4 sm:px-8 py-8 lg:py-10 max-w-4xl", children: [currentItem && (_jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-6 font-medium", children: [_jsx("span", { children: "Docs" }), _jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground/60" }), _jsx("span", { children: currentItem.category }), _jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground/60" }), _jsx("span", { className: "text-foreground font-semibold", children: currentItem.title })] })), _jsx("div", { className: "pb-16", children: children(activeSection) }), _jsxs("div", { className: "border-t border-border pt-8 flex items-center justify-between gap-4 text-xs font-medium", children: [prevItem ? (_jsxs("button", { type: "button", onClick: () => navigateTo(prevItem.id), className: "flex flex-col items-start gap-1 p-3 rounded-chellaa-lg border border-border hover:bg-muted/60 transition-colors text-left group", children: [_jsx("span", { className: "text-[11px] text-muted-foreground", children: "Previous" }), _jsxs("span", { className: "font-bold text-foreground group-hover:text-primary transition-colors", children: ["\u2190 ", prevItem.title] })] })) : (_jsx("div", {})), nextItem && (_jsxs("button", { type: "button", onClick: () => navigateTo(nextItem.id), className: "flex flex-col items-end gap-1 p-3 rounded-chellaa-lg border border-border hover:bg-muted/60 transition-colors text-right group ml-auto", children: [_jsx("span", { className: "text-[11px] text-muted-foreground", children: "Next" }), _jsxs("span", { className: "font-bold text-foreground group-hover:text-primary transition-colors", children: [nextItem.title, " \u2192"] })] }))] })] })] })] }));
};
