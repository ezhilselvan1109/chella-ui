import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Tag } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const tagProps = [
    {
        name: "variant",
        type: '"default" | "primary" | "success" | "warning" | "danger" | "info"',
        defaultValue: '"default"',
        description: "Visual color and border styling.",
    },
    {
        name: "closable",
        type: "boolean",
        defaultValue: "false",
        description: "Renders an inline dismiss button.",
    },
    {
        name: "onClose",
        type: "() => void",
        description: "Callback invoked when close button is clicked.",
    },
];
export const TagDoc = () => {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Design System"]);
    const removeTag = (tagToRemove) => {
        setTags(tags.filter((t) => t !== tagToRemove));
    };
    return (_jsx(ComponentDoc, { title: "Tag / Chip", description: "Interactive chips representing keywords, categories, or filters with optional dismissal support.", category: "Data Display", propsData: tagProps, children: _jsx(ComponentPreview, { title: "Interactive Closable Tags", code: `{tags.map((tag) => (
  <Tag key={tag} closable onClose={() => removeTag(tag)}>
    {tag}
  </Tag>
))}`, children: _jsxs("div", { className: "flex flex-wrap gap-2", children: [tags.map((t) => (_jsx(Tag, { variant: "primary", closable: true, onClose: () => removeTag(t), children: t }, t))), tags.length === 0 && (_jsx("span", { className: "text-xs text-muted-foreground", children: "All tags dismissed" }))] }) }) }));
};
