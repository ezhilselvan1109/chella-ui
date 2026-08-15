import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Side Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} position="right">
          <Drawer.Header>
            <Drawer.Title>Configure Ingress Gateway</Drawer.Title>
            <Drawer.Description>
              Adjust proxy timeouts and TLS termination settings.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Body>
            <Input label="Domain Name" defaultValue="api.internal.network" />
            <Input label="Port Forward" defaultValue="8443" />
            <div className="pt-2">
              <Switch label="Enable mTLS 1.3 Strict Mode" defaultChecked />
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Apply Configurations
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [position, setPosition] = useState<"right" | "left" | "top" | "bottom">("right");
    const [open, setOpen] = useState(false);

    return (
      <div className="flex gap-2">
        {(["right", "left", "top", "bottom"] as const).map((pos) => (
          <Button
            key={pos}
            variant="secondary"
            onClick={() => {
              setPosition(pos);
              setOpen(true);
            }}
          >
            {pos.toUpperCase()}
          </Button>
        ))}

        <Drawer open={open} onClose={() => setOpen(false)} position={position}>
          <Drawer.Header>
            <Drawer.Title>Position: {position.toUpperCase()}</Drawer.Title>
            <Drawer.Description>Slide-over sheet panel from screen edge.</Drawer.Description>
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-sm text-muted-foreground">
              Smooth slide-in CSS animation with backdrop click dismiss.
            </p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  },
};
