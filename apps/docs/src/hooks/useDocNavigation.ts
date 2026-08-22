import { useState, useEffect, useCallback } from "react";
import { ALL_NAV_ITEMS } from "../config/navigation.config";

export function useDocNavigation(defaultSection = "getting-started") {
  const [activeSection, setActiveSectionState] = useState<string>(() => {
    if (typeof window === "undefined") return defaultSection;
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && ALL_NAV_ITEMS.some((item) => item.id === hash)) {
      return hash;
    }
    return defaultSection;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && ALL_NAV_ITEMS.some((item) => item.id === hash)) {
        setActiveSectionState(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = useCallback((id: string) => {
    setActiveSectionState(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { activeSection, navigateTo };
}
