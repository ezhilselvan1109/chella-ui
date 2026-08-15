import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";
import { CircularProgress } from "./CircularProgress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Linear: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress value={65} showLabel label="Cluster Resource Usage" />
      <Progress value={85} variant="danger" showLabel label="Disk Storage Critical" />
      <Progress value={100} variant="success" showLabel label="Database Sync Complete" />
      <Progress value={40} variant="gradient" showLabel label="Model Weights Loaded" />
      <Progress indeterminate variant="info" />
    </div>
  ),
};

export const Circular: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={72} showLabel size="medium" />
      <CircularProgress value={95} variant="success" showLabel size="large" />
      <CircularProgress value={30} variant="warning" showLabel size="small" />
      <CircularProgress indeterminate variant="info" size="medium" />
    </div>
  ),
};
