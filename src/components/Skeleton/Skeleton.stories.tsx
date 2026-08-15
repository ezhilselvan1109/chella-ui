import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { Card } from "../Card";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" lines={3} />
    </div>
  ),
};

export const UserCardSkeleton: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Content className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" width={44} height={44} />
          <div className="space-y-1.5 flex-1">
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="40%" height={12} />
          </div>
        </div>
        <Skeleton variant="rounded" height={80} />
        <div className="flex justify-end gap-2">
          <Skeleton variant="rounded" width={60} height={32} />
          <Skeleton variant="rounded" width={80} height={32} />
        </div>
      </Card.Content>
    </Card>
  ),
};

export const AnimationVariants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <div className="text-xs text-muted-foreground mb-1">Pulse Animation (Default)</div>
        <Skeleton variant="rounded" height={36} animation="pulse" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground mb-1">Wave / Shimmer Animation</div>
        <Skeleton variant="rounded" height={36} animation="wave" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground mb-1">None (Static Placeholder)</div>
        <Skeleton variant="rounded" height={36} animation="none" />
      </div>
    </div>
  ),
};
