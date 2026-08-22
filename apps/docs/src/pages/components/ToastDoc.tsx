import React from "react";
import { Button, useToast } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const ToastDoc: React.FC = () => {
  const toast = useToast();

  return (
    <ComponentDoc
      title="Toast Notifications"
      description="Imperative floating notifications powered by useToast hook and ToastProvider."
      category="Feedback & Overlay"
    >
      <ComponentPreview
        title="Trigger Toast Alerts"
        code={`const { toast } = useToast();

<Button
  variant="primary"
  onClick={() =>
    toast.success("Changes Saved", "Your configuration has been updated.")
  }
>
  Success Toast
</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="primary"
            onClick={() =>
              toast.success(
                "Changes Saved",
                "Your configuration has been updated successfully."
              )
            }
          >
            Success Toast
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              toast.error(
                "Connection Failed",
                "Unable to reach database cluster."
              )
            }
          >
            Danger Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.info(
                "Information",
                "Background compilation in progress."
              )
            }
          >
            Info Toast
          </Button>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
