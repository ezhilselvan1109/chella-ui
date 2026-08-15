import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Sparkles, AlertTriangle, ShieldAlert } from "lucide-react";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const GradientAnnouncement: Story = {
  render: () => (
    <Banner
      variant="gradient"
      icon={<Sparkles />}
      badge={<Badge variant="secondary" size="small">v1.2.0</Badge>}
      action={
        <Button size="small" variant="secondary" className="h-7 text-xs">
          Explore Features
        </Button>
      }
      closable
    >
      Chella UI v1.2.0 with 33 production-ready primitives is now live!
    </Banner>
  ),
};

export const SystemWarning: Story = {
  render: () => (
    <Banner
      variant="warning"
      icon={<AlertTriangle />}
      action={
        <Button size="small" variant="primary" className="h-7 text-xs">
          Status Page
        </Button>
      }
      closable
    >
      Cluster maintenance scheduled for Sunday, August 16 at 02:00 UTC.
    </Banner>
  ),
};

export const CriticalAlert: Story = {
  render: () => (
    <Banner
      variant="danger"
      icon={<ShieldAlert />}
      action={
        <Button size="small" variant="secondary" className="h-7 text-xs">
          Rotate Keys
        </Button>
      }
      closable
    >
      Security Advisory: 1 API token expired 2 hours ago.
    </Banner>
  ),
};
