import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ArrowRight, Trash2, CheckCircle2, Download } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger", "link"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the button",
    },
    loading: {
      control: "boolean",
      description: "Loading state with spinner",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    fullWidth: {
      control: "boolean",
      description: "Stretch to 100% width",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete Account",
    variant: "danger",
    leftIcon: <Trash2 className="w-4 h-4" />,
  },
};

export const Link: Story = {
  args: {
    children: "Documentation Link",
    variant: "link",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button>Normal</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button leftIcon={<Download className="w-4 h-4" />}>Download</Button>
      <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
        Continue
      </Button>
      <Button variant="outline" leftIcon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}>
        Verified
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 p-4 border border-border rounded-lg bg-card">
      <Button fullWidth variant="primary">
        Full Width Button
      </Button>
    </div>
  ),
};
