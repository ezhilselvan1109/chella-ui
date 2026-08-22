import React, { useState } from "react";
import { Search, X, ChevronRight, Sparkles } from "lucide-react";
import { Badge, Input } from "@chellaa/ui";
import { DOC_NAVIGATION } from "../../config/navigation.config";
import type { NavItem } from "../../types/docs.types";

interface DocSidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({
  activeSection,
  onSelectSection,
  isMobileOpen,
  onCloseMobile,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = DOC_NAVIGATION.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  const handleItemClick = (id: string) => {
    onSelectSection(id);
    onCloseMobile();
  };

  const navContent = (
    <div className="flex flex-col h-full space-y-4">
      {/* Search Input */}
      <div className="px-3 pt-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Filter documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 text-xs rounded-chellaa-md border border-border bg-muted/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-2 p-0.5 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-5 text-xs pb-8 select-none">
        {filteredGroups.map((group) => (
          <div key={group.title} className="space-y-1.5">
            <h4 className="px-2 text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
              {group.title}
            </h4>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = item.id === activeSection;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-chellaa-md font-medium transition-colors text-left ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      <span className="truncate">{item.title}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded font-semibold tracking-wide uppercase ${
                            isActive
                              ? "bg-primary-foreground/20 text-primary-foreground"
                              : item.badge === "New"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                              : item.badge === "Updated"
                              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                              : "bg-muted text-muted-foreground border border-border"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden md:block w-64 shrink-0 border-r border-border bg-card/40 h-[calc(100vh-53px)] sticky top-[53px]">
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in-0 duration-200"
            onClick={onCloseMobile}
          />
          <div className="relative w-4/5 max-w-xs bg-card border-r border-border h-full shadow-2xl z-10 flex flex-col animate-in slide-in-from-left duration-200">
            <div className="p-3.5 border-b border-border flex items-center justify-between">
              <span className="font-extrabold text-sm text-foreground">Navigation</span>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1.5 rounded-chellaa-md text-muted-foreground hover:text-foreground hover:bg-muted"
                aria-label="Close Navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pt-2">{navContent}</div>
          </div>
        </div>
      )}
    </>
  );
};
