import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Search, Mail, Eye } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "flushed"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    clearable: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Customer Name",
    placeholder: "Enter customer name",
    helperText: "This will be displayed on your invoice.",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    defaultValue: "invalid-email",
    error: "Please enter a valid email address.",
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    label: "Search Documents",
    placeholder: "Search anything...",
    prefix: <Search className="w-4 h-4" />,
    clearable: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input size="small" placeholder="Small input (h-8)" />
      <Input size="medium" placeholder="Medium input (h-10)" />
      <Input size="large" placeholder="Large input (h-12)" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input variant="default" label="Default Variant" placeholder="Default border input" />
      <Input variant="filled" label="Filled Variant" placeholder="Filled background input" />
      <Input variant="flushed" label="Flushed Variant" placeholder="Bottom-border only input" />
    </div>
  ),
};

export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input label="Clearable" defaultValue="Click the X icon" clearable />
      <Input label="Loading State" placeholder="Saving data..." loading />
      <Input label="Disabled State" defaultValue="Cannot edit this" disabled />
      <Input
        label="Password Input"
        type="password"
        prefix={<Mail className="w-4 h-4" />}
        suffix={<Eye className="w-4 h-4 cursor-pointer" />}
        defaultValue="secretPassword"
      />
    </div>
  ),
};
