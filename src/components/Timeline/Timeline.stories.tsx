import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./Timeline";
import { CheckCircle2, AlertTriangle, XCircle, Clock } from "lucide-react";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Timeline
        items={[
          {
            title: "Build Passed",
            time: "10:15 AM",
            description: "Docker artifact pushed to container registry.",
            status: "success",
          },
          {
            title: "Integration Tests",
            time: "10:20 AM",
            description: "428 unit tests executed in 4.2s.",
            status: "success",
          },
          {
            title: "Rolling Deployment",
            time: "10:25 AM",
            description: "Updating pods in cluster namespace prod-us-east.",
            status: "processing",
          },
        ]}
      />
    </div>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <div className="w-96">
      <Timeline>
        <Timeline.Item status="success" icon={<CheckCircle2 />}>
          <Timeline.Time>09:00 AM</Timeline.Time>
          <Timeline.Title>Cluster Provisioned</Timeline.Title>
          <Timeline.Description>3 worker nodes connected.</Timeline.Description>
        </Timeline.Item>
        <Timeline.Item status="warning" icon={<AlertTriangle />}>
          <Timeline.Time>09:15 AM</Timeline.Time>
          <Timeline.Title>Memory Pressure Warning</Timeline.Title>
          <Timeline.Description>Node 2 reached 88% memory threshold.</Timeline.Description>
        </Timeline.Item>
        <Timeline.Item status="danger" icon={<XCircle />}>
          <Timeline.Time>09:30 AM</Timeline.Time>
          <Timeline.Title>Ingress Pod CrashLoopBackOff</Timeline.Title>
          <Timeline.Description>Failed healthcheck probe on port 8080.</Timeline.Description>
        </Timeline.Item>
        <Timeline.Item status="default" icon={<Clock />}>
          <Timeline.Time>09:45 AM</Timeline.Time>
          <Timeline.Title>Autoscaling Pending</Timeline.Title>
          <Timeline.Description>Waiting for additional EC2 instance allocation.</Timeline.Description>
        </Timeline.Item>
      </Timeline>
    </div>
  ),
};
