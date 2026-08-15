import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>What is Chellaa UI?</Accordion.Trigger>
          <Accordion.Content>
            Chellaa UI is a high-performance React design system inspired by Ant Design, Material UI, and Radix UI, styled with Tailwind CSS tokens.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>How does theme switching work?</Accordion.Trigger>
          <Accordion.Content>
            ThemeProvider provides CSS variable tokens supporting Light, Dark, System, and custom brand palettes (Emerald, Violet, Amber) at runtime.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger>Is Chellaa UI fully accessible?</Accordion.Trigger>
          <Accordion.Content>
            Yes! All components follow W3C WAI-ARIA authoring practices, with keyboard navigation, focus rings, and screen-reader semantics.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const SeparatedCards: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="multiple" variant="separated" defaultValue={["sec-1"]}>
        <Accordion.Item value="sec-1">
          <Accordion.Trigger>Cluster Deployment Node Topology</Accordion.Trigger>
          <Accordion.Content>
            12 active ARM64 nodes provisioned in AWS us-east-1 and us-west-2 availability zones.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="sec-2">
          <Accordion.Trigger>Zero-Trust Security Policies</Accordion.Trigger>
          <Accordion.Content>
            All ingress and egress communication is encrypted with TLS 1.3 mTLS and verified via SPIFFE IDs.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const DeclarativeItems: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion
        variant="bordered"
        items={[
          { value: "q1", title: "Automated Rollback Rules", content: "Rollbacks trigger if 5xx rate exceeds 0.5% over a 3-minute window." },
          { value: "q2", title: "Autoscaling Parameters", content: "HPA scales from 3 to 50 replicas when target CPU reaches 70%." },
        ]}
      />
    </div>
  ),
};
