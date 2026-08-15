import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Tag } from "./Tag";
import { Cpu, ShieldCheck, Zap } from "lucide-react";
const meta = {
    title: "Components/Tag",
    component: Tag,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => _jsx(Tag, { children: "Production" }),
};
export const SemanticVariants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx(Tag, { variant: "default", children: "Default" }), _jsx(Tag, { variant: "primary", children: "Primary" }), _jsx(Tag, { variant: "secondary", children: "Secondary" }), _jsx(Tag, { variant: "success", children: "Healthy" }), _jsx(Tag, { variant: "warning", children: "Degraded" }), _jsx(Tag, { variant: "danger", children: "Critical" }), _jsx(Tag, { variant: "info", children: "Info" }), _jsx(Tag, { variant: "outline", children: "Outline" })] })),
};
export const ClosableTags = {
    render: () => {
        const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Kubernetes"]);
        return (_jsx("div", { className: "flex flex-wrap items-center gap-2", children: tags.map((tag) => (_jsx(Tag, { variant: "primary", closable: true, onClose: () => setTags(tags.filter((t) => t !== tag)), children: tag }, tag))) }));
    },
};
export const SelectableFilterGroup = {
    render: () => {
        const [selectedTags, setSelectedTags] = useState(["frontend"]);
        const toggle = (val) => {
            setSelectedTags((prev) => prev.includes(val) ? prev.filter((t) => t !== val) : [...prev, val]);
        };
        return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Tag, { selectable: true, selected: selectedTags.includes("frontend"), onClick: () => toggle("frontend"), icon: _jsx(Zap, { className: "w-3.5 h-3.5" }), children: "Frontend" }), _jsx(Tag, { selectable: true, selected: selectedTags.includes("backend"), onClick: () => toggle("backend"), icon: _jsx(Cpu, { className: "w-3.5 h-3.5" }), children: "Backend" }), _jsx(Tag, { selectable: true, selected: selectedTags.includes("security"), onClick: () => toggle("security"), icon: _jsx(ShieldCheck, { className: "w-3.5 h-3.5" }), children: "Security" })] }));
    },
};
