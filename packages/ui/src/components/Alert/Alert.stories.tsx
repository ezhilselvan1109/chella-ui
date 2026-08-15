import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { Button } from "../Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Variants: Story = {
  render: () => (
    <div className="w-[500px] space-y-3">
      <Alert
        variant="info"
        title="System Maintenance Scheduled"
        description="Core database migration scheduled tonight at 02:00 UTC."
      />
      <Alert
        variant="success"
        title="Cluster Upgraded"
        description="Kubernetes control plane upgraded to version 1.30.2."
      />
      <Alert
        variant="warning"
        title="High Memory Usage"
        description="Node group CPU utilization exceeded 85% for >10 mins."
      />
      <Alert
        variant="danger"
        title="Ingress TLS Certificate Expired"
        description="Action required: Renew wildcard cert for *.api.mesh.internal."
      />
    </div>
  ),
};

export const StyleVariants: Story = {
  render: () => (
    <div className="w-[500px] space-y-3">
      <Alert
        variant="info"
        styleVariant="subtle"
        title="Subtle Style (Default)"
        description="Soft translucent background with accent border."
      />
      <Alert
        variant="info"
        styleVariant="outline"
        title="Outline Style"
        description="Clean card background with colored perimeter."
      />
      <Alert
        variant="info"
        styleVariant="solid"
        title="Solid Style"
        description="High-contrast solid semantic background fill."
      />
    </div>
  ),
};

export const ClosableWithAction: Story = {
  render: () => (
    <div className="w-[500px]">
      <Alert
        variant="success"
        closable
        title="Artifact Published"
        description="Package @chellaa/ui@0.1.0 published to registry."
        action={
          <Button size="small" variant="secondary">
            View Release
          </Button>
        }
      />
    </div>
  ),
};
