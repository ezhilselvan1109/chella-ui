import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Write your feedback or description here...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Microservice Architecture Summary",
    placeholder: "Describe inter-service communication protocols and message brokers...",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Release Notes",
    description: "Markdown formatting is supported in change logs.",
    placeholder: "Add release highlights, bug fixes, and breaking changes...",
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: "Incident Summary",
    showCount: true,
    maxLength: 140,
    placeholder: "Provide an executive overview of the incident...",
  },
};

export const AutoResize: Story = {
  args: {
    label: "Auto-Expanding Description",
    autoResize: true,
    placeholder: "Start typing multi-line paragraphs to watch the textarea expand dynamically...",
  },
};

export const WithError: Story = {
  args: {
    label: "Root Cause Analysis",
    error: "Post-mortem analysis cannot be blank for Sev-1 outages.",
    placeholder: "Enter details...",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Textarea variant="default" label="Default Variant" placeholder="Default border & shadow..." />
      <Textarea variant="filled" label="Filled Variant" placeholder="Muted background fill..." />
      <Textarea variant="flushed" label="Flushed Variant" placeholder="Clean bottom underline..." />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Textarea size="small" label="Small Textarea (size='small')" placeholder="Compact spacing..." />
      <Textarea size="medium" label="Medium Textarea (size='medium')" placeholder="Standard spacing..." />
      <Textarea size="large" label="Large Textarea (size='large')" placeholder="Generous spacing..." />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Immutable System Configuration",
    disabled: true,
    defaultValue: "cluster.region = us-east-1\ncluster.shards = 12\ncluster.encryption = true",
  },
};
