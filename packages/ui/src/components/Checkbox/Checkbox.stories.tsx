import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept Terms and Conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Option",
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Select All Permissions (Indeterminate)",
    indeterminate: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Enable Two-Factor Authentication",
    description: "Requires a verification code from your authenticator app when signing in.",
  },
};

export const WithError: Story = {
  args: {
    label: "I agree to the End User License Agreement",
    error: "You must agree to the license agreement to continue.",
  },
};

export const Required: Story = {
  args: {
    label: "Mandatory Consent",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled and Checked",
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="small" label="Small Checkbox (size='small')" />
      <Checkbox size="medium" label="Medium Checkbox (size='medium')" defaultChecked />
      <Checkbox size="large" label="Large Checkbox (size='large')" />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledCheckboxDemo() {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-3 p-4 border border-border rounded-lg bg-card max-w-sm">
        <Checkbox
          label="Email Notifications"
          description="Receive daily analytics summary directly in your inbox."
          checked={checked}
          onCheckedChange={setChecked}
        />
        <div className="text-xs text-muted-foreground pt-2 border-t border-border">
          Current State: <span className="font-bold text-primary">{checked ? "TRUE" : "FALSE"}</span>
        </div>
      </div>
    );
  },
};
