import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "./Checkbox";
import { useState } from "react";
const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        label: "Accept Terms and Conditions",
    },
};
export const Checked = {
    args: {
        label: "Checked Option",
        defaultChecked: true,
    },
};
export const Indeterminate = {
    args: {
        label: "Select All Permissions (Indeterminate)",
        indeterminate: true,
    },
};
export const WithDescription = {
    args: {
        label: "Enable Two-Factor Authentication",
        description: "Requires a verification code from your authenticator app when signing in.",
    },
};
export const WithError = {
    args: {
        label: "I agree to the End User License Agreement",
        error: "You must agree to the license agreement to continue.",
    },
};
export const Required = {
    args: {
        label: "Mandatory Consent",
        required: true,
    },
};
export const Disabled = {
    args: {
        label: "Disabled Option",
        disabled: true,
    },
};
export const DisabledChecked = {
    args: {
        label: "Disabled and Checked",
        disabled: true,
        defaultChecked: true,
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Checkbox, { size: "small", label: "Small Checkbox (size='small')" }), _jsx(Checkbox, { size: "medium", label: "Medium Checkbox (size='medium')", defaultChecked: true }), _jsx(Checkbox, { size: "large", label: "Large Checkbox (size='large')" })] })),
};
export const Controlled = {
    render: function ControlledCheckboxDemo() {
        const [checked, setChecked] = useState(false);
        return (_jsxs("div", { className: "flex flex-col gap-3 p-4 border border-border rounded-lg bg-card max-w-sm", children: [_jsx(Checkbox, { label: "Email Notifications", description: "Receive daily analytics summary directly in your inbox.", checked: checked, onCheckedChange: setChecked }), _jsxs("div", { className: "text-xs text-muted-foreground pt-2 border-t border-border", children: ["Current State: ", _jsx("span", { className: "font-bold text-primary", children: checked ? "TRUE" : "FALSE" })] })] }));
    },
};
