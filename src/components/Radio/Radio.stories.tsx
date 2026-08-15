import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    value: "opt1",
    label: "Standard Radio Option",
  },
};

export const Checked: Story = {
  args: {
    value: "opt2",
    label: "Pre-selected Option",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    value: "opt3",
    label: "Disabled Option",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    value: "opt4",
    label: "Disabled & Checked",
    disabled: true,
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    value: "pro",
    label: "Professional Subscription",
    description: "Includes advanced observability metrics and priority SLAs.",
  },
};

export const WithError: Story = {
  args: {
    value: "err",
    label: "Mandatory Regulatory Consent",
    error: "Consent must be acknowledged.",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio value="s" size="small" label="Small Radio (size='small')" />
      <Radio value="m" size="medium" label="Medium Radio (size='medium')" defaultChecked />
      <Radio value="l" size="large" label="Large Radio (size='large')" />
    </div>
  ),
};
