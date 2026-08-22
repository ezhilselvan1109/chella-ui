import React, { useState } from "react";
import { Select } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const selectProps: PropDefinition[] = [
  {
    name: "options",
    type: "{ label: string; value: string; disabled?: boolean }[]",
    required: true,
    description: "Array of selectable item objects.",
  },
  {
    name: "value",
    type: "string | string[]",
    description: "Controlled selection value.",
  },
  {
    name: "searchable",
    type: "boolean",
    defaultValue: "false",
    description: "Enables filter search box inside dropdown list.",
  },
  {
    name: "multiple",
    type: "boolean",
    defaultValue: "false",
    description: "Enables multi-tag selection mode.",
  },
];

const frameworkOptions = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Vite", value: "vite" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

export const SelectDoc: React.FC = () => {
  const [selected, setSelected] = useState<string | string[]>("react");
  const [multiSelected, setMultiSelected] = useState<string | string[]>(["react", "vite"]);

  return (
    <ComponentDoc
      title="Select"
      description="Custom styled dropdown select with keyboard navigation, live search filtering, and multi-select tags."
      category="Forms & Inputs"
      propsData={selectProps}
    >
      <ComponentPreview
        title="Single Selection & Searchable"
        code={`<Select
  label="Primary Framework"
  options={frameworkOptions}
  value={selected}
  onChange={setSelected}
  searchable
/>`}
      >
        <div className="w-full max-w-xs">
          <Select
            label="Primary Framework"
            options={frameworkOptions}
            value={selected}
            onChange={setSelected}
            searchable
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Multi-Selection"
        code={`<Select
  label="Tech Stack (Multi-Select)"
  options={frameworkOptions}
  value={multiSelected}
  onChange={setMultiSelected}
  multiple
/>`}
      >
        <div className="w-full max-w-sm">
          <Select
            label="Tech Stack (Multi-Select)"
            options={frameworkOptions}
            value={multiSelected}
            onChange={setMultiSelected}
            multiple
          />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
