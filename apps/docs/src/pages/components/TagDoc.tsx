import React, { useState } from "react";
import { Tag } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const tagProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "primary" | "success" | "warning" | "danger" | "info"',
    defaultValue: '"default"',
    description: "Visual color and border styling.",
  },
  {
    name: "closable",
    type: "boolean",
    defaultValue: "false",
    description: "Renders an inline dismiss button.",
  },
  {
    name: "onClose",
    type: "() => void",
    description: "Callback invoked when close button is clicked.",
  },
];

export const TagDoc: React.FC = () => {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Design System"]);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  return (
    <ComponentDoc
      title="Tag / Chip"
      description="Interactive chips representing keywords, categories, or filters with optional dismissal support."
      category="Data Display"
      propsData={tagProps}
    >
      <ComponentPreview
        title="Interactive Closable Tags"
        code={`{tags.map((tag) => (
  <Tag key={tag} closable onClose={() => removeTag(tag)}>
    {tag}
  </Tag>
))}`}
      >
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t} variant="primary" closable onClose={() => removeTag(t)}>
              {t}
            </Tag>
          ))}
          {tags.length === 0 && (
            <span className="text-xs text-muted-foreground">All tags dismissed</span>
          )}
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
