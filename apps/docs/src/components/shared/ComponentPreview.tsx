import React, { useState } from "react";
import { Code2, ChevronDown, ChevronUp } from "lucide-react";
import { CodeSnippet } from "./CodeSnippet";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
  defaultShowCode?: boolean;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  code,
  children,
  defaultShowCode = false,
}) => {
  const [showCode, setShowCode] = useState(defaultShowCode);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-foreground">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
        {code && (
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-chellaa-md border border-border bg-card text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
            aria-expanded={showCode}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{showCode ? "Hide Code" : "View Code"}</span>
            {showCode ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>

      <div className="rounded-chellaa-lg border border-border bg-card overflow-hidden shadow-xs">
        <div className="p-4 sm:p-6 flex flex-wrap items-center justify-center gap-4 bg-background/50 min-h-[120px]">
          {children}
        </div>
        {showCode && code && (
          <div className="border-t border-border">
            <CodeSnippet code={code} className="border-none rounded-none" />
          </div>
        )}
      </div>
    </div>
  );
};
