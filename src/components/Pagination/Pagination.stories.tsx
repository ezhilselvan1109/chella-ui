import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(4);

    return (
      <div className="space-y-4 text-center">
        <div className="text-sm text-muted-foreground">Current Active Page: {page}</div>
        <Pagination
          page={page}
          totalPages={15}
          showEdges
          onPageChange={setPage}
        />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <div className="text-xs text-muted-foreground mb-2">Default Variant</div>
        <Pagination totalPages={8} page={3} />
      </div>

      <div>
        <div className="text-xs text-muted-foreground mb-2">Outline Variant</div>
        <Pagination variant="outline" totalPages={8} page={3} />
      </div>

      <div>
        <div className="text-xs text-muted-foreground mb-2">Pills Variant</div>
        <Pagination variant="pills" totalPages={8} page={3} />
      </div>
    </div>
  ),
};
