import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover } from "./Popover";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
import { Filter, Settings } from "lucide-react";
const meta = {
    title: "Components/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx(Popover, { showCloseButton: true, content: _jsxs("div", { className: "space-y-3 w-64", children: [_jsx("div", { className: "font-semibold text-sm", children: "Cluster Filter Preferences" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Filter live telemetry streams by cluster node architecture." }), _jsxs("div", { className: "space-y-2", children: [_jsx(Switch, { label: "Show ARM64 Nodes", defaultChecked: true, size: "small" }), _jsx(Switch, { label: "Show Degraded Pods", size: "small" })] }), _jsx("div", { className: "pt-2 flex justify-end", children: _jsx(Button, { size: "small", variant: "primary", children: "Apply Filters" }) })] }), children: _jsx(Button, { variant: "outline", leftIcon: _jsx(Filter, { className: "w-3.5 h-3.5" }), children: "Filter Nodes" }) })),
};
export const QuickActionCard = {
    render: () => (_jsx(Popover, { showCloseButton: true, content: _jsxs("div", { className: "space-y-3 w-72", children: [_jsx("div", { className: "font-semibold text-sm", children: "Deploy Hotfix" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Override active deployment container tag." }), _jsx(Input, { label: "Image Tag", defaultValue: "v1.4.2-patch.1", size: "small" }), _jsxs("div", { className: "flex items-center justify-end gap-2 pt-2", children: [_jsx(Button, { size: "small", variant: "ghost", children: "Cancel" }), _jsx(Button, { size: "small", variant: "danger", children: "Deploy Hotfix" })] })] }), children: _jsx(Button, { variant: "secondary", leftIcon: _jsx(Settings, { className: "w-3.5 h-3.5" }), children: "Quick Deploy" }) })),
};
export const Placements = {
    render: () => (_jsxs("div", { className: "flex items-center gap-8 p-16", children: [_jsx(Popover, { placement: "top", content: _jsx("div", { className: "text-xs p-2", children: "Top Popover Content" }), children: _jsx(Button, { variant: "outline", children: "Top" }) }), _jsx(Popover, { placement: "bottom", content: _jsx("div", { className: "text-xs p-2", children: "Bottom Popover Content" }), children: _jsx(Button, { variant: "outline", children: "Bottom" }) }), _jsx(Popover, { placement: "left", content: _jsx("div", { className: "text-xs p-2", children: "Left Popover Content" }), children: _jsx(Button, { variant: "outline", children: "Left" }) }), _jsx(Popover, { placement: "right", content: _jsx("div", { className: "text-xs p-2", children: "Right Popover Content" }), children: _jsx(Button, { variant: "outline", children: "Right" }) })] })),
};
