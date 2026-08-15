import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "outline"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    dot: { control: "boolean" },
    removable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const StatusDots: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge dot variant="success">Online</Badge>
      <Badge dot variant="warning">Away</Badge>
      <Badge dot variant="danger">Offline</Badge>
      <Badge dot variant="primary">In Review</Badge>
    </div>
  ),
};

export const RemovableTags: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge removable onRemove={() => alert("Removed React")} variant="primary">React</Badge>
      <Badge removable onRemove={() => alert("Removed TypeScript")} variant="secondary">TypeScript</Badge>
      <Badge removable onRemove={() => alert("Removed Tailwind")} variant="outline">Tailwind CSS</Badge>
    </div>
  ),
};
