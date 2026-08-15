import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: () => <Tag>Production</Tag>,
};

export const SemanticVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Healthy</Tag>
      <Tag variant="warning">Degraded</Tag>
      <Tag variant="danger">Critical</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="outline">Outline</Tag>
    </div>
  ),
};

export const ClosableTags: Story = {
  render: () => {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Kubernetes"]);

    return (
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Tag
            key={tag}
            variant="primary"
            closable
            onClose={() => setTags(tags.filter((t) => t !== tag))}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
};

export const SelectableFilterGroup: Story = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>(["frontend"]);

    const toggle = (val: string) => {
      setSelectedTags((prev) =>
        prev.includes(val) ? prev.filter((t) => t !== val) : [...prev, val]
      );
    };

    return (
      <div className="flex items-center gap-2">
        <Tag
          selectable
          selected={selectedTags.includes("frontend")}
          onClick={() => toggle("frontend")}
          icon={<Zap className="w-3.5 h-3.5" />}
        >
          Frontend
        </Tag>
        <Tag
          selectable
          selected={selectedTags.includes("backend")}
          onClick={() => toggle("backend")}
          icon={<Cpu className="w-3.5 h-3.5" />}
        >
          Backend
        </Tag>
        <Tag
          selectable
          selected={selectedTags.includes("security")}
          onClick={() => toggle("security")}
          icon={<ShieldCheck className="w-3.5 h-3.5" />}
        >
          Security
        </Tag>
      </div>
    );
  },
};
