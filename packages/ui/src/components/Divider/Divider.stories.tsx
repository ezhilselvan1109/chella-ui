import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import { Button } from "../Button";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>Top Section Content</div>
      <Divider />
      <div>Bottom Section Content</div>
    </div>
  ),
};

export const WithTextLabels: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Divider>OR</Divider>
      <Divider align="start">LEFT ALIGNED</Divider>
      <Divider align="end">RIGHT ALIGNED</Divider>
    </div>
  ),
};

export const LineVariants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Divider variant="solid">SOLID LINE</Divider>
      <Divider variant="dashed">DASHED LINE</Divider>
      <Divider variant="dotted">DOTTED LINE</Divider>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center h-8 gap-2 text-sm text-muted-foreground">
      <Button variant="ghost" size="small">Edit</Button>
      <Divider orientation="vertical" />
      <Button variant="ghost" size="small">Duplicate</Button>
      <Divider orientation="vertical" />
      <Button variant="ghost" size="small">Delete</Button>
    </div>
  ),
};
