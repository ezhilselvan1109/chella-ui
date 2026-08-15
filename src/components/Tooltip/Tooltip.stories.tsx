import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";
import { HelpCircle } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Instantly deploys container image to production cluster">
      <Button variant="primary">Deploy Node</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-12">
      <Tooltip content="Top Placement" placement="top">
        <Button variant="secondary">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom Placement" placement="bottom">
        <Button variant="secondary">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left Placement" placement="left">
        <Button variant="secondary">Left</Button>
      </Tooltip>
      <Tooltip content="Right Placement" placement="right">
        <Button variant="secondary">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <Tooltip content="Default Dark Contrast" variant="default">
        <Button variant="outline">Default</Button>
      </Tooltip>
      <Tooltip content="Primary Theme Variant" variant="primary">
        <Button variant="outline">Primary</Button>
      </Tooltip>
      <Tooltip content="Light High-Contrast" variant="light">
        <Button variant="outline">Light</Button>
      </Tooltip>
    </div>
  ),
};

export const WithIconTrigger: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-sm text-foreground">
      <span>Zero-trust network encryption</span>
      <Tooltip content="All inter-service traffic is encrypted via mTLS 1.3">
        <button className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full">
          <HelpCircle className="w-4 h-4" />
        </button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tooltip content="This should not appear" disabled>
      <Button variant="secondary" disabled>Disabled Action</Button>
    </Tooltip>
  ),
};
