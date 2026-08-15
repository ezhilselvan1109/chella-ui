import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button";
import {
  MoreVertical,
  ChevronDown,
  Edit2,
  Copy,
  Trash2,
  Archive,
  Download,
  Share2,
} from "lucide-react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown
      trigger={
        <Button variant="secondary" rightIcon={<ChevronDown className="w-3.5 h-3.5" />}>
          Manage Service
        </Button>
      }
      items={[
        { key: "edit", label: "Edit Service Configuration", icon: <Edit2 className="w-3.5 h-3.5" /> },
        { key: "clone", label: "Clone Deployment", icon: <Copy className="w-3.5 h-3.5" /> },
        { key: "share", label: "Share Access URL", icon: <Share2 className="w-3.5 h-3.5" /> },
        { key: "div1", divider: true },
        { key: "export", label: "Export Metrics JSON", icon: <Download className="w-3.5 h-3.5" /> },
        { key: "archive", label: "Archive Service", icon: <Archive className="w-3.5 h-3.5" /> },
        { key: "div2", divider: true },
        { key: "delete", label: "Delete Cluster Node", icon: <Trash2 className="w-3.5 h-3.5" />, variant: "danger" },
      ]}
    />
  ),
};

export const IconTrigger: Story = {
  render: () => (
    <Dropdown
      placement="bottom-end"
      trigger={
        <button className="p-2 rounded-chellaa-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <MoreVertical className="w-4 h-4" />
        </button>
      }
      items={[
        { key: "inspect", label: "Inspect Resource" },
        { key: "logs", label: "View Live Logs" },
        { key: "divider", divider: true },
        { key: "restart", label: "Restart Pod", variant: "danger" },
      ]}
    />
  ),
};

export const CompoundSyntax: Story = {
  render: () => (
    <Dropdown
      trigger={
        <Button variant="outline" rightIcon={<ChevronDown className="w-3.5 h-3.5" />}>
          Compound Menu
        </Button>
      }
    >
      <Dropdown.Header>Deployment Actions</Dropdown.Header>
      <Dropdown.Item icon={<Edit2 className="w-3.5 h-3.5" />}>Edit Settings</Dropdown.Item>
      <Dropdown.Item icon={<Copy className="w-3.5 h-3.5" />}>Duplicate</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Header>Danger Zone</Dropdown.Header>
      <Dropdown.Item icon={<Trash2 className="w-3.5 h-3.5" />} variant="danger">
        Delete Deployment
      </Dropdown.Item>
    </Dropdown>
  ),
};
