import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { User, Shield, Briefcase } from "lucide-react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    clearable: { control: "boolean" },
    multiple: { control: "boolean" },
    searchable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const customerOptions = [
  { label: "Kumar (Admin)", value: "1", icon: <Shield className="w-4 h-4 text-primary" />, description: "Full access" },
  { label: "Ravi (Editor)", value: "2", icon: <User className="w-4 h-4 text-emerald-500" />, description: "Can edit posts" },
  { label: "Anand (Viewer)", value: "3", icon: <Briefcase className="w-4 h-4 text-amber-500" />, description: "Read-only access" },
  { label: "Deepa (Inactive)", value: "4", disabled: true },
];

export const Default: Story = {
  args: {
    label: "Select Customer",
    placeholder: "Choose a customer...",
    options: customerOptions,
    helperText: "Assign this project to an active team member.",
  },
};

export const Searchable: Story = {
  args: {
    label: "Search & Select",
    placeholder: "Type to filter team members...",
    options: customerOptions,
    searchable: true,
  },
};

export const MultiSelect: Story = {
  args: {
    label: "Assignees",
    placeholder: "Select multiple team members...",
    options: customerOptions,
    multiple: true,
    clearable: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Account Role",
    options: customerOptions,
    error: "Please select a valid role before continuing.",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Select size="small" placeholder="Small (h-8)" options={customerOptions} />
      <Select size="medium" placeholder="Medium (h-10)" options={customerOptions} />
      <Select size="large" placeholder="Large (h-12)" options={customerOptions} />
    </div>
  ),
};
