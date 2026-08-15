import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "../Button";
import { FolderSearch, Inbox, Database, Plus } from "lucide-react";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  render: () => (
    <EmptyState
      icon={<Inbox />}
      title="No Microservices Found"
      description="You have not deployed any services in this cluster namespace yet."
      action={
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-1.5" /> Create Microservice
        </Button>
      }
    />
  ),
};

export const DashedBorder: Story = {
  render: () => (
    <EmptyState
      variant="dashed"
      icon={<FolderSearch />}
      title="No Matching Records"
      description="No deployment manifests match your search filter criteria."
      action={<Button variant="secondary">Clear All Filters</Button>}
    />
  ),
};

export const CardVariant: Story = {
  render: () => (
    <EmptyState
      variant="card"
      icon={<Database />}
      title="Database Cluster Inactive"
      description="Provision a managed Postgres or Redis instance to start collecting traces."
      action={
        <div className="flex gap-2">
          <Button variant="outline">Read Docs</Button>
          <Button variant="primary">Provision Database</Button>
        </div>
      }
    />
  ),
};
