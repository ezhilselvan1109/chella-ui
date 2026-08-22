import React from "react";
import { Badge, Divider } from "@chellaa/ui";
import { PropsTable } from "./PropsTable";
import type { PropDefinition, DocCategory } from "../../types/docs.types";

interface ComponentDocProps {
  title: string;
  description: string;
  category?: DocCategory;
  badge?: "Core" | "New" | "Updated" | "Beta";
  packageSource?: string;
  propsData?: PropDefinition[];
  propsTitle?: string;
  children: React.ReactNode;
}

export const ComponentDoc: React.FC<ComponentDocProps> = ({
  title,
  description,
  category,
  badge = "Core",
  packageSource = "@chellaa/ui",
  propsData,
  propsTitle,
  children,
}) => {
  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Header Section */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {category && (
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {category}
            </span>
          )}
          {category && <span className="text-muted-foreground text-xs">•</span>}
          <span className="text-xs font-mono text-muted-foreground">{packageSource}</span>
          <Badge
            variant={badge === "New" ? "success" : badge === "Updated" ? "warning" : "primary"}
            size="small"
            className="text-[10px]"
          >
            {badge}
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      <Divider />

      {/* Main Examples / Demos */}
      <div className="space-y-8">{children}</div>

      {/* Props Reference Table */}
      {propsData && propsData.length > 0 && (
        <>
          <Divider />
          <PropsTable data={propsData} title={propsTitle} />
        </>
      )}
    </div>
  );
};
