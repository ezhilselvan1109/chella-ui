import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";
import { Home, Server, Layers } from "lucide-react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: "Home", href: "/", icon: <Home className="w-3.5 h-3.5" /> },
        { label: "Infrastructure", href: "/infra", icon: <Server className="w-3.5 h-3.5" /> },
        { label: "Clusters", href: "/infra/clusters", icon: <Layers className="w-3.5 h-3.5" /> },
        { label: "us-east-1-primary" },
      ]}
    />
  ),
};

export const CollapsedMaxItems: Story = {
  render: () => (
    <Breadcrumb
      maxItems={3}
      items={[
        { label: "Platform", href: "/" },
        { label: "Organizations", href: "/orgs" },
        { label: "Chellaa Corp", href: "/orgs/chellaa" },
        { label: "Projects", href: "/orgs/chellaa/projects" },
        { label: "Microservices", href: "/orgs/chellaa/projects/microservices" },
        { label: "Production Ingress" },
      ]}
    />
  ),
};

export const CustomSlashSeparator: Story = {
  render: () => (
    <Breadcrumb
      separator="/"
      items={[
        { label: "Root", href: "/" },
        { label: "etc", href: "/etc" },
        { label: "nginx", href: "/etc/nginx" },
        { label: "nginx.conf" },
      ]}
    />
  ),
};
