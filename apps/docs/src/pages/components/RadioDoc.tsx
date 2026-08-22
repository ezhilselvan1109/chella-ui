import React, { useState } from "react";
import { Radio, RadioGroup } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const radioProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "Value identifying this radio item in the group.",
  },
  {
    name: "label",
    type: "ReactNode",
    description: "Label content displayed next to radio circle.",
  },
  {
    name: "description",
    type: "string",
    description: "Secondary helper text.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables selection on this radio item.",
  },
];

export const RadioDoc: React.FC = () => {
  const [plan, setPlan] = useState("pro");

  return (
    <ComponentDoc
      title="Radio & RadioGroup"
      description="Accessible radio group allowing single choice selection from mutually exclusive options with arrow-key navigation."
      category="Forms & Inputs"
      propsData={radioProps}
    >
      <ComponentPreview
        title="Subscription Tier Selection"
        code={`<RadioGroup value={plan} onValueChange={setPlan} label="Billing Plan">
  <Radio value="starter" label="Starter" description="$10/month per user" />
  <Radio value="pro" label="Pro" description="$29/month with unlimited projects" />
  <Radio value="enterprise" label="Enterprise" description="Custom SLAs & dedicated support" />
</RadioGroup>`}
      >
        <div className="max-w-md w-full">
          <RadioGroup value={plan} onValueChange={setPlan} label="Choose a Plan">
            <Radio value="starter" label="Starter Plan" description="$10/mo for individual builders" />
            <Radio value="pro" label="Pro Plan" description="$29/mo with team collaboration" />
            <Radio value="enterprise" label="Enterprise" description="Custom deployment & compliance" />
          </RadioGroup>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
