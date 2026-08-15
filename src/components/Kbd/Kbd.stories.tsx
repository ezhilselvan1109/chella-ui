import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => <Kbd>⌘K</Kbd>,
};

export const KeyShortcuts: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-36">Quick Search:</span>
        <Kbd keys={["cmd", "k"]} />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-36">Command Palette:</span>
        <Kbd keys={["cmd", "shift", "p"]} />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-36">Save Changes:</span>
        <Kbd keys={["ctrl", "s"]} separator="+" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Kbd variant="default">Default</Kbd>
      <Kbd variant="outline">Outline</Kbd>
      <Kbd variant="subtle">Subtle</Kbd>
      <Kbd variant="ghost">Ghost</Kbd>
    </div>
  ),
};

export const Sizing: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Kbd size="xs">XS</Kbd>
      <Kbd size="small">SM</Kbd>
      <Kbd size="medium">MD</Kbd>
      <Kbd size="large">LG</Kbd>
    </div>
  ),
};
