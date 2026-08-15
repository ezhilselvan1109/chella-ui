import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable Notifications",
  },
};

export const On: Story = {
  args: {
    label: "Dark Mode Enabled",
    defaultChecked: true,
  },
};

export const Off: Story = {
  args: {
    label: "Airplane Mode",
    defaultChecked: false,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Automatic Cloud Backup",
    description: "Sync your project database every 6 hours to AWS S3.",
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Enable Production Debugger",
    error: "Live debugging is disabled on production clusters.",
  },
};

export const Required: Story = {
  args: {
    label: "Required System Setting",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Switch (Off)",
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    label: "Disabled Switch (On)",
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="small" label="Small Switch (size='small')" />
      <Switch size="medium" label="Medium Switch (size='medium')" defaultChecked />
      <Switch size="large" label="Large Switch (size='large')" />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledSwitchDemo() {
    const [enabled, setEnabled] = useState(false);

    return (
      <div className="flex flex-col gap-3 p-4 border border-border rounded-lg bg-card max-w-sm">
        <Switch
          label="Push Notifications"
          description="Receive real-time build and deployment status updates."
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <div className="text-xs text-muted-foreground pt-2 border-t border-border">
          Switch State: <span className="font-bold text-primary">{enabled ? "ACTIVE (ON)" : "INACTIVE (OFF)"}</span>
        </div>
      </div>
    );
  },
};

export const LongLabel: Story = {
  render: () => (
    <div className="max-w-xs p-4 border border-border rounded-lg bg-card">
      <Switch
        label="Allow external third-party microservice integration analytics"
        description="Share anonymized telemetry to improve system resilience."
        defaultChecked
      />
    </div>
  ),
};
