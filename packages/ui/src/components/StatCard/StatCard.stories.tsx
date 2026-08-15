import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";
import { DollarSign, Users, Activity, Server } from "lucide-react";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <StatCard
        title="Total Revenue (ARR)"
        value="$128,450.00"
        icon={<DollarSign />}
        trend={{ value: "+24.5%", direction: "up", label: "vs last quarter" }}
        hoverable
      />
    </div>
  ),
};

export const MetricGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 w-[850px]">
      <StatCard
        title="Total ARR"
        value="$128,450"
        icon={<DollarSign />}
        trend={{ value: "+24.5%", direction: "up", label: "compared to Q2" }}
        hoverable
      />
      <StatCard
        title="Active Team Members"
        value="1,248"
        icon={<Users />}
        trend={{ value: "+32", direction: "up", label: "joined this week" }}
        hoverable
      />
      <StatCard
        title="System Uptime"
        value="99.98%"
        icon={<Activity />}
        trend={{ value: "-0.01%", direction: "down", label: "during incident" }}
        hoverable
      />
    </div>
  ),
};

export const SubtleVariant: Story = {
  render: () => (
    <div className="w-80">
      <StatCard
        variant="subtle"
        title="Active Nodes"
        value="64 Nodes"
        icon={<Server />}
        trend={{ value: "100% capacity", direction: "neutral" }}
      />
    </div>
  ),
};
