import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const BasicGroup: Story = {
  render: () => (
    <RadioGroup defaultValue="starter" label="Subscription Tier">
      <Radio value="starter" label="Starter Tier ($29/mo)" description="Ideal for early-stage prototypes." />
      <Radio value="pro" label="Professional Tier ($99/mo)" description="For scaling microservice teams." />
      <Radio value="enterprise" label="Enterprise Custom" description="Dedicated clusters and custom VPC peering." />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup orientation="horizontal" defaultValue="card" label="Payment Method">
      <Radio value="card" label="Credit Card" />
      <Radio value="paypal" label="PayPal" />
      <Radio value="wire" label="Bank Wire Transfer" />
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: function ControlledGroupDemo() {
    const [plan, setPlan] = useState("pro");

    return (
      <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-card max-w-md">
        <RadioGroup
          value={plan}
          onValueChange={setPlan}
          label="Select Cloud Provider"
          description="Infrastructure region is provisioned automatically."
        >
          <Radio value="aws" label="Amazon Web Services (AWS)" />
          <Radio value="gcp" label="Google Cloud Platform (GCP)" />
          <Radio value="azure" label="Microsoft Azure" />
        </RadioGroup>
        <div className="text-xs text-muted-foreground pt-2 border-t border-border">
          Active Provider: <span className="font-bold text-primary">{plan.toUpperCase()}</span>
        </div>
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => (
    <RadioGroup
      label="Notification Channel"
      error="You must select at least one delivery channel."
    >
      <Radio value="slack" label="Slack Webhook" />
      <Radio value="email" label="Digest Email" />
      <Radio value="sms" label="SMS Message" />
    </RadioGroup>
  ),
};

export const DisabledGroup: Story = {
  render: () => (
    <RadioGroup disabled defaultValue="us-east" label="Data Residency (Locked)">
      <Radio value="us-east" label="US East (N. Virginia)" />
      <Radio value="eu-west" label="EU Central (Frankfurt)" />
    </RadioGroup>
  ),
};

export const IndividualDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" label="Compute Flavor">
      <Radio value="standard" label="Standard (2 vCPU, 8GB RAM)" />
      <Radio value="gpu" label="GPU Accelerated (NVIDIA A100)" disabled description="Temporarily out of stock in this region." />
    </RadioGroup>
  ),
};
