import React from "react";
import type { PropDefinition } from "../../types/docs.types";
import { Badge } from "@chellaa/ui";

interface PropsTableProps {
  data: PropDefinition[];
  title?: string;
}

export const PropsTable: React.FC<PropsTableProps> = ({ data, title = "Props & API Reference" }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <div className="rounded-chellaa-lg border border-border overflow-hidden bg-card shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-muted-foreground font-semibold">
                <th className="py-2.5 px-4 font-semibold">Prop</th>
                <th className="py-2.5 px-4 font-semibold">Type</th>
                <th className="py-2.5 px-4 font-semibold">Default</th>
                <th className="py-2.5 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-sans">
              {data.map((item) => (
                <tr key={item.name} className="hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-foreground whitespace-nowrap">
                    {item.name}
                    {item.required && (
                      <span className="ml-1.5 text-rose-500 font-bold" title="Required prop">
                        *
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-mono text-[11px] text-primary whitespace-nowrap">
                    <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-muted-foreground text-[11px] whitespace-nowrap">
                    {item.defaultValue ? (
                      <span className="bg-muted px-1.5 py-0.5 rounded border border-border">
                        {item.defaultValue}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground leading-relaxed">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
