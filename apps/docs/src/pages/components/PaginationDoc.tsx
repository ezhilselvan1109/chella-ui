import React, { useState } from "react";
import { Pagination } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const paginationProps: PropDefinition[] = [
  {
    name: "page",
    type: "number",
    defaultValue: "1",
    description: "Current active page number.",
  },
  {
    name: "totalPages",
    type: "number",
    required: true,
    description: "Total number of pages available.",
  },
  {
    name: "onPageChange",
    type: "(page: number) => void",
    description: "Callback invoked when a page button is selected.",
  },
  {
    name: "variant",
    type: '"default" | "outline" | "ghost" | "pills"',
    defaultValue: '"default"',
    description: "Visual button style.",
  },
];

export const PaginationDoc: React.FC = () => {
  const [page, setPage] = useState(3);

  return (
    <ComponentDoc
      title="Pagination"
      description="Navigation component splitting large datasets into discrete pages with next/prev buttons and direct page jumps."
      category="Navigation"
      propsData={paginationProps}
    >
      <ComponentPreview
        title="Interactive Pagination"
        code={`<Pagination
  page={page}
  totalPages={10}
  onPageChange={setPage}
/>`}
      >
        <div className="flex flex-col items-center gap-3">
          <Pagination page={page} totalPages={10} onPageChange={setPage} />
          <span className="text-xs text-muted-foreground">Active page: {page} of 10</span>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
