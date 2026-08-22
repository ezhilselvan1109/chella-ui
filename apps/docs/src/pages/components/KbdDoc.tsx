import React from "react";
import { Kbd } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const KbdDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Kbd"
      description="Keyboard shortcut key badge indicating physical keystrokes or key combinations."
      category="Data Display"
    >
      <ComponentPreview
        title="Key Combinations"
        code={`<div className="flex items-center gap-2">
  <span>Quick search:</span>
  <Kbd keys={["⌘", "K"]} />
</div>
<div className="flex items-center gap-2">
  <span>Save changes:</span>
  <Kbd keys={["Ctrl", "S"]} />
</div>`}
      >
        <div className="space-y-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">Quick search command:</span>
            <Kbd keys={["⌘", "K"]} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">Save document:</span>
            <Kbd keys={["Ctrl", "S"]} />
          </div>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
