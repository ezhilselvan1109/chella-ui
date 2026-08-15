import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button";
import { MoreVertical, ChevronDown, Edit2, Copy, Trash2, Archive, Download, Share2, } from "lucide-react";
const meta = {
    title: "Components/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx(Dropdown, { trigger: _jsx(Button, { variant: "secondary", rightIcon: _jsx(ChevronDown, { className: "w-3.5 h-3.5" }), children: "Manage Service" }), items: [
            { key: "edit", label: "Edit Service Configuration", icon: _jsx(Edit2, { className: "w-3.5 h-3.5" }) },
            { key: "clone", label: "Clone Deployment", icon: _jsx(Copy, { className: "w-3.5 h-3.5" }) },
            { key: "share", label: "Share Access URL", icon: _jsx(Share2, { className: "w-3.5 h-3.5" }) },
            { key: "div1", divider: true },
            { key: "export", label: "Export Metrics JSON", icon: _jsx(Download, { className: "w-3.5 h-3.5" }) },
            { key: "archive", label: "Archive Service", icon: _jsx(Archive, { className: "w-3.5 h-3.5" }) },
            { key: "div2", divider: true },
            { key: "delete", label: "Delete Cluster Node", icon: _jsx(Trash2, { className: "w-3.5 h-3.5" }), variant: "danger" },
        ] })),
};
export const IconTrigger = {
    render: () => (_jsx(Dropdown, { placement: "bottom-end", trigger: _jsx("button", { className: "p-2 rounded-chella-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: _jsx(MoreVertical, { className: "w-4 h-4" }) }), items: [
            { key: "inspect", label: "Inspect Resource" },
            { key: "logs", label: "View Live Logs" },
            { key: "divider", divider: true },
            { key: "restart", label: "Restart Pod", variant: "danger" },
        ] })),
};
export const CompoundSyntax = {
    render: () => (_jsxs(Dropdown, { trigger: _jsx(Button, { variant: "outline", rightIcon: _jsx(ChevronDown, { className: "w-3.5 h-3.5" }), children: "Compound Menu" }), children: [_jsx(Dropdown.Header, { children: "Deployment Actions" }), _jsx(Dropdown.Item, { icon: _jsx(Edit2, { className: "w-3.5 h-3.5" }), children: "Edit Settings" }), _jsx(Dropdown.Item, { icon: _jsx(Copy, { className: "w-3.5 h-3.5" }), children: "Duplicate" }), _jsx(Dropdown.Divider, {}), _jsx(Dropdown.Header, { children: "Danger Zone" }), _jsx(Dropdown.Item, { icon: _jsx(Trash2, { className: "w-3.5 h-3.5" }), variant: "danger", children: "Delete Deployment" })] })),
};
