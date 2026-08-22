import React from "react";
import { Tooltip, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { Info, HelpCircle } from "lucide-react";

export const TooltipDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Tooltip"
      description="Brief informational tooltip displayed on hover or keyboard focus, linked with aria-describedby."
      category="Feedback & Overlay"
    >
      <ComponentPreview
        title="Hover Tooltips"
        code={`<Tooltip content="Copies git commit hash to clipboard">
  <Button variant="outline" size="small">Hover for Tooltip</Button>
</Tooltip>`}
      >
        <div className="flex flex-wrap gap-4 items-center">
          <Tooltip content="Copies commit SHA-256 to clipboard" placement="top">
            <Button variant="outline" size="small">
              Hover Me (Top)
            </Button>
          </Tooltip>
          <Tooltip content="Deletes local build cache" placement="bottom">
            <Button variant="danger" size="small">
              Hover Me (Bottom)
            </Button>
          </Tooltip>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
