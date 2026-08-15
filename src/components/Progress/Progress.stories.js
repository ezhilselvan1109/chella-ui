import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Progress } from "./Progress";
import { CircularProgress } from "./CircularProgress";
const meta = {
    title: "Components/Progress",
    component: Progress,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Linear = {
    render: () => (_jsxs("div", { className: "w-80 space-y-4", children: [_jsx(Progress, { value: 65, showLabel: true, label: "Cluster Resource Usage" }), _jsx(Progress, { value: 85, variant: "danger", showLabel: true, label: "Disk Storage Critical" }), _jsx(Progress, { value: 100, variant: "success", showLabel: true, label: "Database Sync Complete" }), _jsx(Progress, { value: 40, variant: "gradient", showLabel: true, label: "Model Weights Loaded" }), _jsx(Progress, { indeterminate: true, variant: "info" })] })),
};
export const Circular = {
    render: () => (_jsxs("div", { className: "flex items-center gap-6", children: [_jsx(CircularProgress, { value: 72, showLabel: true, size: "medium" }), _jsx(CircularProgress, { value: 95, variant: "success", showLabel: true, size: "large" }), _jsx(CircularProgress, { value: 30, variant: "warning", showLabel: true, size: "small" }), _jsx(CircularProgress, { indeterminate: true, variant: "info", size: "medium" })] })),
};
