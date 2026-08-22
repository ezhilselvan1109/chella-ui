import React, { useState } from "react";
import { Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";
import { Sparkles, Download, Trash2, ArrowRight } from "lucide-react";

const buttonProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "danger" | "link"',
    defaultValue: '"primary"',
    description: "Visual appearance and prominence of the button.",
  },
  {
    name: "size",
    type: '"small" | "medium" | "large"',
    defaultValue: '"medium"',
    description: "Size dimensions of the button.",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description: "Shows an inline spinner and disables interactions.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Prevents click events and applies disabled styling.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "false",
    description: "Expands the button to fill 100% of its parent width.",
  },
];

export const ButtonDoc: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ComponentDoc
      title="Button"
      description="Interactive button component supporting multiple aesthetic variants, size scales, loading animations, and icon attachments."
      category="Forms & Inputs"
      badge="Core"
      propsData={buttonProps}
    >
      <ComponentPreview
        title="Visual Variants"
        description="Six carefully designed variants covering all primary and secondary action hierarchies."
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Small (32px), Medium (40px), and Large (48px) sizes."
        code={`<Button size="small">Small (32px)</Button>
<Button size="medium">Medium (40px)</Button>
<Button size="large">Large (48px)</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading & Interactive States"
        description="Built-in animated spinner and disabled state."
        code={`<Button loading={loading} onClick={() => setLoading(!loading)}>
  {loading ? "Saving..." : "Click to Load"}
</Button>
<Button disabled>Disabled Button</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
            }}
          >
            {loading ? "Loading..." : "Click for Spinner"}
          </Button>
          <Button variant="secondary" disabled>
            Disabled Button
          </Button>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
