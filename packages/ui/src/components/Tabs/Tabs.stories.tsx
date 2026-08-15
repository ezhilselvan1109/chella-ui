import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { Card } from "../Card";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
import { Server, Shield, Activity, HardDrive } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const LineVariant: Story = {
  render: () => (
    <Card className="w-[450px]">
      <Card.Content className="p-6">
        <Tabs defaultValue="cluster" variant="line">
          <Tabs.List>
            <Tabs.Trigger value="cluster">
              <Server className="w-3.5 h-3.5 mr-1.5" />
              Cluster Specs
            </Tabs.Trigger>
            <Tabs.Trigger value="security">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Security
            </Tabs.Trigger>
            <Tabs.Trigger value="telemetry">
              <Activity className="w-3.5 h-3.5 mr-1.5" />
              Telemetry
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="cluster" className="space-y-3 pt-2">
            <div className="text-xs text-muted-foreground">Compute pool configurations</div>
            <Input label="Worker Pool Name" defaultValue="pool-us-east-prod" size="small" />
            <Button size="small" variant="primary">Save Specs</Button>
          </Tabs.Content>

          <Tabs.Content value="security" className="space-y-3 pt-2">
            <div className="text-xs text-muted-foreground">Encryption & TLS configurations</div>
            <Switch label="Strict mTLS 1.3 Handshake" defaultChecked size="small" />
            <Switch label="Enforce Zero-Trust Network Access" defaultChecked size="small" />
          </Tabs.Content>

          <Tabs.Content value="telemetry" className="space-y-3 pt-2">
            <div className="text-xs text-muted-foreground">OpenTelemetry stream metrics</div>
            <Switch label="Sample Trace Tracing (100%)" size="small" />
          </Tabs.Content>
        </Tabs>
      </Card.Content>
    </Card>
  ),
};

export const PillVariant: Story = {
  render: () => (
    <Card className="w-[400px]">
      <Card.Content className="p-6">
        <Tabs defaultValue="day" variant="pill">
          <Tabs.List>
            <Tabs.Trigger value="day">24 Hours</Tabs.Trigger>
            <Tabs.Trigger value="week">7 Days</Tabs.Trigger>
            <Tabs.Trigger value="month">30 Days</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="day" className="p-3 text-xs text-muted-foreground">
            24h Throughput: 42,910 req/sec | Avg p99: 18ms
          </Tabs.Content>
          <Tabs.Content value="week" className="p-3 text-xs text-muted-foreground">
            7d Throughput: 310,400 req/sec | Avg p99: 22ms
          </Tabs.Content>
          <Tabs.Content value="month" className="p-3 text-xs text-muted-foreground">
            30d Throughput: 1,420,000 req/sec | Avg p99: 24ms
          </Tabs.Content>
        </Tabs>
      </Card.Content>
    </Card>
  ),
};

export const DeclarativeItems: Story = {
  render: () => (
    <Tabs
      variant="pill"
      items={[
        { key: "db", label: "Database", icon: <HardDrive className="w-3.5 h-3.5" />, children: <div className="text-xs p-3">PostgreSQL 16 Cluster</div> },
        { key: "cache", label: "Cache", icon: <Activity className="w-3.5 h-3.5" />, children: <div className="text-xs p-3">Redis Sentinel v7.2</div> },
      ]}
    />
  ),
};
