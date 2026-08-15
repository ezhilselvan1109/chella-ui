import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "./Badge";
const meta = {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "danger", "outline"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        dot: { control: "boolean" },
        removable: { control: "boolean" },
    },
};
export default meta;
export const Variants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Badge, { variant: "primary", children: "Primary" }), _jsx(Badge, { variant: "secondary", children: "Secondary" }), _jsx(Badge, { variant: "success", children: "Success" }), _jsx(Badge, { variant: "warning", children: "Warning" }), _jsx(Badge, { variant: "danger", children: "Danger" }), _jsx(Badge, { variant: "outline", children: "Outline" })] })),
};
export const StatusDots = {
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Badge, { dot: true, variant: "success", children: "Online" }), _jsx(Badge, { dot: true, variant: "warning", children: "Away" }), _jsx(Badge, { dot: true, variant: "danger", children: "Offline" }), _jsx(Badge, { dot: true, variant: "primary", children: "In Review" })] })),
};
export const RemovableTags = {
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx(Badge, { removable: true, onRemove: () => alert("Removed React"), variant: "primary", children: "React" }), _jsx(Badge, { removable: true, onRemove: () => alert("Removed TypeScript"), variant: "secondary", children: "TypeScript" }), _jsx(Badge, { removable: true, onRemove: () => alert("Removed Tailwind"), variant: "outline", children: "Tailwind CSS" })] })),
};
