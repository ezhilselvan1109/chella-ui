import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { Shield } from "lucide-react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Kumar Selvan" size="large" status="online" />
      <Avatar name="Ravi Chandran" size="medium" status="busy" />
      <Avatar name="Priya Sundar" size="small" status="away" />
      <Avatar icon={<Shield className="w-1/2 h-1/2" />} size="medium" />
    </div>
  ),
};

export const ShapesAndSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Circle" shape="circle" size="large" />
      <Avatar name="Rounded" shape="rounded" size="large" />
      <Avatar name="Square" shape="square" size="large" />
    </div>
  ),
};

export const GroupStack: Story = {
  render: () => (
    <div className="space-y-4">
      <AvatarGroup max={3} size="medium">
        <Avatar name="Alice Johnson" />
        <Avatar name="Bob Smith" />
        <Avatar name="Charlie Brown" />
        <Avatar name="David Miller" />
        <Avatar name="Emma Watson" />
      </AvatarGroup>
    </div>
  ),
};
