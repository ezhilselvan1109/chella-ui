import React, { useState } from "react";
import { DocHeader } from "./DocHeader";
import { DocSidebar } from "./DocSidebar";
import { useDocNavigation } from "../../hooks/useDocNavigation";
import { ALL_NAV_ITEMS } from "../../config/navigation.config";
import { ChevronRight } from "lucide-react";

interface DocLayoutProps {
  children: (activeSection: string) => React.ReactNode;
}

export const DocLayout: React.FC<DocLayoutProps> = ({ children }) => {
  const { activeSection, navigateTo } = useDocNavigation("getting-started");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentItem = ALL_NAV_ITEMS.find((item) => item.id === activeSection);
  const currentIndex = ALL_NAV_ITEMS.findIndex((item) => item.id === activeSection);
  const prevItem = currentIndex > 0 ? ALL_NAV_ITEMS[currentIndex - 1] : null;
  const nextItem = currentIndex < ALL_NAV_ITEMS.length - 1 ? ALL_NAV_ITEMS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      {/* Top Header */}
      <DocHeader onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Main Grid: Sidebar + Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        <DocSidebar
          activeSection={activeSection}
          onSelectSection={navigateTo}
          isMobileOpen={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        <main className="flex-1 min-w-0 px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 max-w-4xl">
          {/* Breadcrumb Indicator */}
          {currentItem && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 font-medium overflow-x-auto whitespace-nowrap pb-1">
              <span>Docs</span>
              <ChevronRight className="w-3 h-3 text-muted-foreground/60 shrink-0" />
              <span>{currentItem.category}</span>
              <ChevronRight className="w-3 h-3 text-muted-foreground/60 shrink-0" />
              <span className="text-foreground font-semibold">{currentItem.title}</span>
            </div>
          )}

          {/* Dynamic Page Content */}
          <div className="pb-12 sm:pb-16">{children(activeSection)}</div>

          {/* Bottom Pagination Links */}
          <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs font-medium">
            {prevItem ? (
              <button
                type="button"
                onClick={() => navigateTo(prevItem.id)}
                className="flex flex-col items-start gap-1 p-3 rounded-chellaa-lg border border-border hover:bg-muted/60 transition-colors text-left group w-full sm:w-auto min-h-[52px]"
              >
                <span className="text-[11px] text-muted-foreground">Previous</span>
                <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                  ← {prevItem.title}
                </span>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextItem && (
              <button
                type="button"
                onClick={() => navigateTo(nextItem.id)}
                className="flex flex-col items-start sm:items-end gap-1 p-3 rounded-chellaa-lg border border-border hover:bg-muted/60 transition-colors text-left sm:text-right group w-full sm:w-auto sm:ml-auto min-h-[52px]"
              >
                <span className="text-[11px] text-muted-foreground">Next</span>
                <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {nextItem.title} →
                </span>
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
