import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./ToastContext";
import { Button } from "../Button";

const meta: Meta = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

function ToastDemoButtons() {
  const toast = useToast();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="primary"
        onClick={() =>
          toast.success("Deployment Succeeded", "All 12 microservice instances are healthy.")
        }
      >
        Trigger Success
      </Button>

      <Button
        variant="danger"
        onClick={() =>
          toast.error("Database Connection Lost", "Retrying automatic TLS reconnect in 5s.")
        }
      >
        Trigger Danger
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          toast.warning("High Memory Usage", "Worker node memory consumption reached 87%.")
        }
      >
        Trigger Warning
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: "Artifact Uploaded",
            description: "Binary checksum verified.",
            action: {
              label: "View Logs",
              onClick: () => alert("Viewing build logs..."),
            },
          })
        }
      >
        With Action
      </Button>
    </div>
  );
}

export const Interactive: Story = {
  render: () => (
    <ToastProvider placement="top-right">
      <ToastDemoButtons />
    </ToastProvider>
  ),
};
