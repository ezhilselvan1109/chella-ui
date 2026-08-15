import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: () => {
    const [rating, setRating] = useState(4);
    return <Rating value={rating} onChange={setRating} showValueText />;
  },
};

export const Sizing: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground w-16">Small:</span>
        <Rating defaultValue={3} size="small" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground w-16">Medium:</span>
        <Rating defaultValue={4} size="medium" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground w-16">Large:</span>
        <Rating defaultValue={5} size="large" />
      </div>
    </div>
  ),
};

export const ReadOnlyWithText: Story = {
  render: () => (
    <div className="space-y-3">
      <Rating value={5} readOnly showValueText />
      <Rating value={4} readOnly showValueText color="primary" />
      <Rating value={3} readOnly showValueText color="emerald" />
    </div>
  ),
};
