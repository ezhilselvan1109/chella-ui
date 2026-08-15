import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Command } from "./Command";
import { Button } from "../Button";
import {
  LayoutDashboard,
  Settings,
  User,
  Plus,
  Trash2,
  Terminal,
  FileCode,
} from "lucide-react";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <Command>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No commands found.</Command.Empty>
          <Command.Group heading="Navigation">
            <Command.Item icon={<LayoutDashboard />} shortcut="⌘D">
              Dashboard
            </Command.Item>
            <Command.Item icon={<Settings />} shortcut="⌘S">
              Settings
            </Command.Item>
            <Command.Item icon={<User />} shortcut="⌘P">
              Profile
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Developer Tools">
            <Command.Item icon={<Terminal />} shortcut="⌘T">
              Open Terminal
            </Command.Item>
            <Command.Item icon={<FileCode />} shortcut="⌘O">
              View Source Code
            </Command.Item>
            <Command.Item icon={<Plus />} shortcut="⌘N">
              New Microservice
            </Command.Item>
            <Command.Item icon={<Trash2 />} shortcut="⌘⌫">
              Delete Cache
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  ),
};

export const DialogModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Palette (⌘K)</Button>
        <Command.Dialog open={open} onOpenChange={setOpen}>
          <Command.Input placeholder="Quick search or action..." />
          <Command.List>
            <Command.Empty>No results matching your query.</Command.Empty>
            <Command.Group heading="Actions">
              <Command.Item
                icon={<Plus />}
                shortcut="⌘N"
                onSelect={() => {
                  alert("Created new service!");
                  setOpen(false);
                }}
              >
                Create Microservice
              </Command.Item>
              <Command.Item
                icon={<Settings />}
                shortcut="⌘,"
                onSelect={() => {
                  alert("Opened preferences");
                  setOpen(false);
                }}
              >
                Preferences
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Dialog>
      </div>
    );
  },
};
