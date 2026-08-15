import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from "./Switch";
import { useState } from "react";
const meta = {
    title: "Components/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        label: "Enable Notifications",
    },
};
export const On = {
    args: {
        label: "Dark Mode Enabled",
        defaultChecked: true,
    },
};
export const Off = {
    args: {
        label: "Airplane Mode",
        defaultChecked: false,
    },
};
export const WithDescription = {
    args: {
        label: "Automatic Cloud Backup",
        description: "Sync your project database every 6 hours to AWS S3.",
        defaultChecked: true,
    },
};
export const WithError = {
    args: {
        label: "Enable Production Debugger",
        error: "Live debugging is disabled on production clusters.",
    },
};
export const Required = {
    args: {
        label: "Required System Setting",
        required: true,
    },
};
export const Disabled = {
    args: {
        label: "Disabled Switch (Off)",
        disabled: true,
    },
};
export const DisabledOn = {
    args: {
        label: "Disabled Switch (On)",
        disabled: true,
        defaultChecked: true,
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Switch, { size: "small", label: "Small Switch (size='small')" }), _jsx(Switch, { size: "medium", label: "Medium Switch (size='medium')", defaultChecked: true }), _jsx(Switch, { size: "large", label: "Large Switch (size='large')" })] })),
};
export const Controlled = {
    render: function ControlledSwitchDemo() {
        const [enabled, setEnabled] = useState(false);
        return (_jsxs("div", { className: "flex flex-col gap-3 p-4 border border-border rounded-lg bg-card max-w-sm", children: [_jsx(Switch, { label: "Push Notifications", description: "Receive real-time build and deployment status updates.", checked: enabled, onCheckedChange: setEnabled }), _jsxs("div", { className: "text-xs text-muted-foreground pt-2 border-t border-border", children: ["Switch State: ", _jsx("span", { className: "font-bold text-primary", children: enabled ? "ACTIVE (ON)" : "INACTIVE (OFF)" })] })] }));
    },
};
export const LongLabel = {
    render: () => (_jsx("div", { className: "max-w-xs p-4 border border-border rounded-lg bg-card", children: _jsx(Switch, { label: "Allow external third-party microservice integration analytics", description: "Share anonymized telemetry to improve system resilience.", defaultChecked: true }) })),
};
