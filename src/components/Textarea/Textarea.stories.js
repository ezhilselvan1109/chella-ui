import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Textarea } from "./Textarea";
const meta = {
    title: "Components/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        placeholder: "Write your feedback or description here...",
    },
};
export const WithLabel = {
    args: {
        label: "Microservice Architecture Summary",
        placeholder: "Describe inter-service communication protocols and message brokers...",
    },
};
export const WithDescription = {
    args: {
        label: "Release Notes",
        description: "Markdown formatting is supported in change logs.",
        placeholder: "Add release highlights, bug fixes, and breaking changes...",
    },
};
export const WithCharacterCount = {
    args: {
        label: "Incident Summary",
        showCount: true,
        maxLength: 140,
        placeholder: "Provide an executive overview of the incident...",
    },
};
export const AutoResize = {
    args: {
        label: "Auto-Expanding Description",
        autoResize: true,
        placeholder: "Start typing multi-line paragraphs to watch the textarea expand dynamically...",
    },
};
export const WithError = {
    args: {
        label: "Root Cause Analysis",
        error: "Post-mortem analysis cannot be blank for Sev-1 outages.",
        placeholder: "Enter details...",
    },
};
export const Variants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-6 w-96", children: [_jsx(Textarea, { variant: "default", label: "Default Variant", placeholder: "Default border & shadow..." }), _jsx(Textarea, { variant: "filled", label: "Filled Variant", placeholder: "Muted background fill..." }), _jsx(Textarea, { variant: "flushed", label: "Flushed Variant", placeholder: "Clean bottom underline..." })] })),
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-6 w-96", children: [_jsx(Textarea, { size: "small", label: "Small Textarea (size='small')", placeholder: "Compact spacing..." }), _jsx(Textarea, { size: "medium", label: "Medium Textarea (size='medium')", placeholder: "Standard spacing..." }), _jsx(Textarea, { size: "large", label: "Large Textarea (size='large')", placeholder: "Generous spacing..." })] })),
};
export const Disabled = {
    args: {
        label: "Immutable System Configuration",
        disabled: true,
        defaultValue: "cluster.region = us-east-1\ncluster.shards = 12\ncluster.encryption = true",
    },
};
