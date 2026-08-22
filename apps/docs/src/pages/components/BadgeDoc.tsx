import React from "react";
import { Badge } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const badgeProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "success" | "warning" | "danger" | "outline"',
    defaultValue: '"primary"',
    description: "Semantic color style.",
  },
  {
    name: "size",
    type: '"small" | "medium" | "large"',
    defaultValue: '"medium"',
    description: "Size dimensions of the badge.",
  },
];

export const BadgeDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Badge"
      description="Compact indicator used to highlight status, categories, counts, or feature availability."
      category="Data Display"
      propsData={badgeProps}
    >
      <ComponentPreview
        title="Badge Variants"
        code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <div className="flex flex-wrap gap-2.5">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="danger">Failed</Badge>
          <Badge variant="outline">Draft</Badge>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
