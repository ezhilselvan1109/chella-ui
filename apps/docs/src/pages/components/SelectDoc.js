import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Select } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const selectProps = [
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
export const SelectDoc = () => {
    const [selected, setSelected] = useState("react");
    const [multiSelected, setMultiSelected] = useState(["react", "vite"]);
    return (_jsxs(ComponentDoc, { title: "Select", description: "Custom styled dropdown select with keyboard navigation, live search filtering, and multi-select tags.", category: "Forms & Inputs", propsData: selectProps, children: [_jsx(ComponentPreview, { title: "Single Selection & Searchable", code: `<Select
  label="Primary Framework"
  options={frameworkOptions}
  value={selected}
  onChange={setSelected}
  searchable
/>`, children: _jsx("div", { className: "w-full max-w-xs", children: _jsx(Select, { label: "Primary Framework", options: frameworkOptions, value: selected, onChange: setSelected, searchable: true }) }) }), _jsx(ComponentPreview, { title: "Multi-Selection", code: `<Select
  label="Tech Stack (Multi-Select)"
  options={frameworkOptions}
  value={multiSelected}
  onChange={setMultiSelected}
  multiple
/>`, children: _jsx("div", { className: "w-full max-w-sm", children: _jsx(Select, { label: "Tech Stack (Multi-Select)", options: frameworkOptions, value: multiSelected, onChange: setMultiSelected, multiple: true }) }) })] }));
};
