import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./Button";
import { ArrowRight, Trash2, CheckCircle2, Download } from "lucide-react";
const meta = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "outline", "ghost", "danger", "link"],
            description: "Visual style variant",
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
            description: "Size of the button",
        },
        loading: {
            control: "boolean",
            description: "Loading state with spinner",
        },
        disabled: {
            control: "boolean",
            description: "Disabled state",
        },
        fullWidth: {
            control: "boolean",
            description: "Stretch to 100% width",
        },
    },
};
export default meta;
export const Primary = {
    args: {
        children: "Primary Button",
        variant: "primary",
        size: "medium",
    },
};
export const Secondary = {
    args: {
        children: "Secondary Button",
        variant: "secondary",
    },
};
export const Outline = {
    args: {
        children: "Outline Button",
        variant: "outline",
    },
};
export const Ghost = {
    args: {
        children: "Ghost Button",
        variant: "ghost",
    },
};
export const Danger = {
    args: {
        children: "Delete Account",
        variant: "danger",
        leftIcon: _jsx(Trash2, { className: "w-4 h-4" }),
    },
};
export const Link = {
    args: {
        children: "Documentation Link",
        variant: "link",
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { size: "small", children: "Small" }), _jsx(Button, { size: "medium", children: "Medium" }), _jsx(Button, { size: "large", children: "Large" })] })),
};
export const States = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { children: "Normal" }), _jsx(Button, { loading: true, children: "Loading" }), _jsx(Button, { disabled: true, children: "Disabled" })] })),
};
export const WithIcons = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { leftIcon: _jsx(Download, { className: "w-4 h-4" }), children: "Download" }), _jsx(Button, { variant: "secondary", rightIcon: _jsx(ArrowRight, { className: "w-4 h-4" }), children: "Continue" }), _jsx(Button, { variant: "outline", leftIcon: _jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-500" }), children: "Verified" })] })),
};
export const FullWidth = {
    render: () => (_jsx("div", { className: "w-80 p-4 border border-border rounded-lg bg-card", children: _jsx(Button, { fullWidth: true, variant: "primary", children: "Full Width Button" }) })),
};
