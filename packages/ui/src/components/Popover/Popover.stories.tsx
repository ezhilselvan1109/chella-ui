import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
import { Filter, Settings } from "lucide-react";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover
      showCloseButton
      content={
        <div className="space-y-3 w-64">
          <div className="font-semibold text-sm">Cluster Filter Preferences</div>
          <p className="text-xs text-muted-foreground">Filter live telemetry streams by cluster node architecture.</p>
          <div className="space-y-2">
            <Switch label="Show ARM64 Nodes" defaultChecked size="small" />
            <Switch label="Show Degraded Pods" size="small" />
          </div>
          <div className="pt-2 flex justify-end">
            <Button size="small" variant="primary">Apply Filters</Button>
          </div>
        </div>
      }
    >
      <Button variant="outline" leftIcon={<Filter className="w-3.5 h-3.5" />}>
        Filter Nodes
      </Button>
    </Popover>
  ),
};

export const QuickActionCard: Story = {
  render: () => (
    <Popover
      showCloseButton
      content={
        <div className="space-y-3 w-72">
          <div className="font-semibold text-sm">Deploy Hotfix</div>
          <p className="text-xs text-muted-foreground">Override active deployment container tag.</p>
          <Input label="Image Tag" defaultValue="v1.4.2-patch.1" size="small" />
          <div className="flex items-center justify-end gap-2 pt-2">
            <Button size="small" variant="ghost">Cancel</Button>
            <Button size="small" variant="danger">Deploy Hotfix</Button>
          </div>
        </div>
      }
    >
      <Button variant="secondary" leftIcon={<Settings className="w-3.5 h-3.5" />}>
        Quick Deploy
      </Button>
    </Popover>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-16">
      <Popover placement="top" content={<div className="text-xs p-2">Top Popover Content</div>}>
        <Button variant="outline">Top</Button>
      </Popover>
      <Popover placement="bottom" content={<div className="text-xs p-2">Bottom Popover Content</div>}>
        <Button variant="outline">Bottom</Button>
      </Popover>
      <Popover placement="left" content={<div className="text-xs p-2">Left Popover Content</div>}>
        <Button variant="outline">Left</Button>
      </Popover>
      <Popover placement="right" content={<div className="text-xs p-2">Right Popover Content</div>}>
        <Button variant="outline">Right</Button>
      </Popover>
    </div>
  ),
};
