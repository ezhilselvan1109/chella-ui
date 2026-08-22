import React from "react";
import { Divider } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const DividerDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Divider / Separator"
      description="Visual separator line distinguishing between distinct content groups in horizontal or vertical orientations."
      category="Layout & Utility"
    >
      <ComponentPreview
        title="Horizontal and Vertical Dividers"
        code={`<div className="space-y-4">
  <p>Top section content</p>
  <Divider />
  <p>Bottom section content</p>
</div>`}
      >
        <div className="space-y-4 w-full max-w-sm text-xs">
          <p className="text-muted-foreground">Primary workspace settings</p>
          <Divider />
          <p className="text-muted-foreground">Secondary integration keys</p>
          <Divider />
          <p className="text-muted-foreground">Audit and retention logs</p>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
