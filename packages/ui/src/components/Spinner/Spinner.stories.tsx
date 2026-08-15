import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => <Spinner size="medium" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="primary" />
      <Spinner variant="success" />
      <Spinner variant="warning" />
      <Spinner variant="danger" />
      <Spinner variant="info" />
    </div>
  ),
};

export const WithVisibleLabel: Story = {
  render: () => (
    <div className="space-y-3">
      <Spinner showLabel label="Fetching cluster logs..." size="small" />
      <Spinner showLabel label="Building Docker image..." size="medium" variant="success" />
    </div>
  ),
};
