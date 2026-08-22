import React, { useState } from "react";
import { Modal, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const modalProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    required: true,
    description: "Controls open visibility state.",
  },
  {
    name: "onClose",
    type: "() => void",
    required: true,
    description: "Callback fired when modal requests to be closed.",
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Modal header title.",
  },
  {
    name: "size",
    type: '"small" | "medium" | "large" | "full"',
    defaultValue: '"medium"',
    description: "Width dimension constraint.",
  },
];

export const ModalDoc: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <ComponentDoc
      title="Modal / Dialog"
      description="Accessible overlay dialog window with focus trap, escape key dismissal, and backdrop blur."
      category="Feedback & Overlay"
      propsData={modalProps}
    >
      <ComponentPreview
        title="Interactive Modal Dialog"
        code={`<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
>
  <p className="text-xs text-muted-foreground">Are you sure you want to continue?</p>
</Modal>`}
      >
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Demo Modal
        </Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Microservice Deployment"
        >
          <div className="space-y-4 text-xs">
            <p className="text-muted-foreground leading-relaxed">
              Deploying <strong>v0.1.0</strong> will immediately update routing tables in the Kubernetes cluster. All active websocket connections will gracefully drain.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost" size="small" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="small" onClick={() => setOpen(false)}>
                Proceed with Deploy
              </Button>
            </div>
          </div>
        </Modal>
      </ComponentPreview>
    </ComponentDoc>
  );
};
