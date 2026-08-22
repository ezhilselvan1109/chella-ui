import React, { useState } from "react";
import { Progress, CircularProgress, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const progressProps: PropDefinition[] = [
  {
    name: "value",
    type: "number",
    defaultValue: "0",
    description: "Current completion percentage (0 - 100).",
  },
  {
    name: "showLabel",
    type: "boolean",
    defaultValue: "false",
    description: "Displays textual percent indicator.",
  },
  {
    name: "variant",
    type: '"default" | "success" | "warning" | "danger" | "info" | "gradient"',
    defaultValue: '"default"',
    description: "Color fill scheme.",
  },
];

export const ProgressDoc: React.FC = () => {
  const [percent, setPercent] = useState(65);

  return (
    <ComponentDoc
      title="Progress & Gauge"
      description="Linear and circular progress indicators visualizing task progression and system quotas."
      category="Feedback & Overlay"
      propsData={progressProps}
    >
      <ComponentPreview
        title="Linear & Circular Progress"
        code={`<Progress value={percent} label="Upload Progress" showLabel />
<CircularProgress value={percent} size={64} showLabel />`}
      >
        <div className="space-y-6 w-full max-w-md">
          <Progress value={percent} label="Upload Status" showLabel />

          <div className="flex items-center justify-between">
            <CircularProgress value={percent} size={64} showLabel />
            <div className="flex gap-2">
              <Button
                size="small"
                variant="outline"
                onClick={() => setPercent(Math.max(0, percent - 15))}
              >
                -15%
              </Button>
              <Button
                size="small"
                variant="outline"
                onClick={() => setPercent(Math.min(100, percent + 15))}
              >
                +15%
              </Button>
            </div>
          </div>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
