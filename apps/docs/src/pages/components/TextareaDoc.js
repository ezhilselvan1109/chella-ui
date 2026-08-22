import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Textarea } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const textareaProps = [
    {
        name: "label",
        type: "string",
        description: "Accessible top label.",
    },
    {
        name: "maxLength",
        type: "number",
        description: "Enforces max characters and displays real-time counter.",
    },
    {
        name: "showCount",
        type: "boolean",
        defaultValue: "false",
        description: "Shows character length counter at the bottom.",
    },
    {
        name: "error",
        type: "string",
        description: "Error alert message.",
    },
];
export const TextareaDoc = () => {
    const [bio, setBio] = useState("Senior Frontend Engineer building design systems.");
    return (_jsxs(ComponentDoc, { title: "Textarea", description: "Multi-line text input with auto-resize capability, live character counters, and accessibility bindings.", category: "Forms & Inputs", propsData: textareaProps, children: [_jsx(ComponentPreview, { title: "Standard Textarea", description: "Textarea with label and helper description.", code: `<Textarea
  label="Project Notes"
  placeholder="Enter detailed description..."
  description="Markdown formatting is supported."
/>`, children: _jsx("div", { className: "w-full max-w-md", children: _jsx(Textarea, { label: "Project Notes", placeholder: "Enter detailed description...", description: "Markdown formatting is supported." }) }) }), _jsx(ComponentPreview, { title: "Character Count & Max Length", description: "Built-in counter monitoring length limit.", code: `<Textarea
  label="Author Bio"
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  maxLength={120}
  showCount
/>`, children: _jsx("div", { className: "w-full max-w-md", children: _jsx(Textarea, { label: "Author Bio", value: bio, onChange: (e) => setBio(e.target.value), maxLength: 120, showCount: true }) }) })] }));
};
