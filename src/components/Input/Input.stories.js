import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "./Input";
import { Search, Mail, Eye } from "lucide-react";
const meta = {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "filled", "flushed"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        label: { control: "text" },
        helperText: { control: "text" },
        error: { control: "text" },
        clearable: { control: "boolean" },
        loading: { control: "boolean" },
        disabled: { control: "boolean" },
    },
};
export default meta;
export const Default = {
    args: {
        label: "Customer Name",
        placeholder: "Enter customer name",
        helperText: "This will be displayed on your invoice.",
    },
};
export const WithError = {
    args: {
        label: "Email Address",
        defaultValue: "invalid-email",
        error: "Please enter a valid email address.",
    },
};
export const WithPrefixAndSuffix = {
    args: {
        label: "Search Documents",
        placeholder: "Search anything...",
        prefix: _jsx(Search, { className: "w-4 h-4" }),
        clearable: true,
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsx(Input, { size: "small", placeholder: "Small input (h-8)" }), _jsx(Input, { size: "medium", placeholder: "Medium input (h-10)" }), _jsx(Input, { size: "large", placeholder: "Large input (h-12)" })] })),
};
export const Variants = {
    render: () => (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsx(Input, { variant: "default", label: "Default Variant", placeholder: "Default border input" }), _jsx(Input, { variant: "filled", label: "Filled Variant", placeholder: "Filled background input" }), _jsx(Input, { variant: "flushed", label: "Flushed Variant", placeholder: "Bottom-border only input" })] })),
};
export const InteractiveStates = {
    render: () => (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsx(Input, { label: "Clearable", defaultValue: "Click the X icon", clearable: true }), _jsx(Input, { label: "Loading State", placeholder: "Saving data...", loading: true }), _jsx(Input, { label: "Disabled State", defaultValue: "Cannot edit this", disabled: true }), _jsx(Input, { label: "Password Input", type: "password", prefix: _jsx(Mail, { className: "w-4 h-4" }), suffix: _jsx(Eye, { className: "w-4 h-4 cursor-pointer" }), defaultValue: "secretPassword" })] })),
};
