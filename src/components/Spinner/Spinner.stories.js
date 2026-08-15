import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner } from "./Spinner";
const meta = {
    title: "Components/Spinner",
    component: Spinner,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => _jsx(Spinner, { size: "medium" }),
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Spinner, { size: "xs" }), _jsx(Spinner, { size: "small" }), _jsx(Spinner, { size: "medium" }), _jsx(Spinner, { size: "large" }), _jsx(Spinner, { size: "xl" })] })),
};
export const Variants = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Spinner, { variant: "primary" }), _jsx(Spinner, { variant: "success" }), _jsx(Spinner, { variant: "warning" }), _jsx(Spinner, { variant: "danger" }), _jsx(Spinner, { variant: "info" })] })),
};
export const WithVisibleLabel = {
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsx(Spinner, { showLabel: true, label: "Fetching cluster logs...", size: "small" }), _jsx(Spinner, { showLabel: true, label: "Building Docker image...", size: "medium", variant: "success" })] })),
};
