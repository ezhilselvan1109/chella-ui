import React, { useState } from "react";
import { Drawer, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const drawerProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    required: true,
    description: "Controls drawer visibility.",
  },
  {
    name: "onClose",
    type: "() => void",
    required: true,
    description: "Close callback handler.",
  },
  {
    name: "position",
    type: '"right" | "left" | "top" | "bottom"',
    defaultValue: '"right"',
    description: "Slide-in entry side.",
  },
  {
    name: "size",
    type: '"small" | "medium" | "large" | "full"',
    defaultValue: '"medium"',
    description: "Width or height dimension constraint.",
  },
];

export const DrawerDoc: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<"right" | "left" | "top" | "bottom">("right");

  const openDrawer = (p: "right" | "left" | "top" | "bottom") => {
    setPos(p);
    setOpen(true);
  };

  return (
    <ComponentDoc
      title="Drawer / Sheet"
      description="Slide-out container panel anchored to any screen edge for complex sidebars, filters, and configuration panels."
      category="Feedback & Overlay"
      propsData={drawerProps}
    >
      <ComponentPreview
        title="Slide-In Positions"
        code={`<Button onClick={() => openDrawer("right")}>Right Drawer</Button>
<Button onClick={() => openDrawer("left")}>Left Drawer</Button>
<Button onClick={() => openDrawer("bottom")}>Bottom Sheet</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => openDrawer("right")}>
            Slide Right
          </Button>
          <Button variant="outline" onClick={() => openDrawer("left")}>
            Slide Left
          </Button>
          <Button variant="outline" onClick={() => openDrawer("bottom")}>
            Slide Bottom
          </Button>
        </div>

        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          position={pos}
        >
          <div className="space-y-4 p-4 text-xs">
            <h3 className="text-sm font-bold text-foreground">Drawer Panel ({pos})</h3>
            <p className="text-muted-foreground leading-relaxed">
              This drawer slid in from the <strong>{pos}</strong> edge with backdrop lock and focus trapping.
            </p>
            <Button variant="primary" size="small" onClick={() => setOpen(false)}>
              Close Panel
            </Button>
          </div>
        </Drawer>
      </ComponentPreview>
    </ComponentDoc>
  );
};
