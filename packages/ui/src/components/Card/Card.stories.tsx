import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "flat"],
    },
    hoverable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <Card.Header>
        <Card.Title>Account Settings</Card.Title>
        <Card.Description>Manage your workspace preferences and billing profile.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-sm text-foreground/80">
          Your current plan is <strong>Enterprise Pro</strong> with 12 active seats.
        </p>
      </Card.Content>
      <Card.Footer>
        <Button variant="secondary" size="small">
          Manage Plan
        </Button>
      </Card.Footer>
    </Card>
  ),
};

export const MetricCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card hoverable variant="elevated">
        <Card.Header className="flex flex-row items-center justify-between pb-2">
          <Card.Title className="text-sm font-medium text-muted-foreground">
            Total Revenue
          </Card.Title>
          <DollarSign className="w-4 h-4 text-emerald-500" />
        </Card.Header>
        <Card.Content>
          <div className="text-2xl font-bold text-foreground">$45,231.89</div>
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +20.1% from last month
          </p>
        </Card.Content>
      </Card>

      <Card hoverable variant="elevated">
        <Card.Header className="flex flex-row items-center justify-between pb-2">
          <Card.Title className="text-sm font-medium text-muted-foreground">
            Active Subscriptions
          </Card.Title>
          <Users className="w-4 h-4 text-primary" />
        </Card.Header>
        <Card.Content>
          <div className="text-2xl font-bold text-foreground">+2,350</div>
          <p className="text-xs text-primary mt-1">+180 new customers this week</p>
        </Card.Content>
      </Card>
    </div>
  ),
};
