import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from "./Select";
import { User, Shield, Briefcase } from "lucide-react";
const meta = {
    title: "Components/Select",
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        disabled: { control: "boolean" },
        loading: { control: "boolean" },
        clearable: { control: "boolean" },
        multiple: { control: "boolean" },
        searchable: { control: "boolean" },
    },
};
export default meta;
const customerOptions = [
    { label: "Kumar (Admin)", value: "1", icon: _jsx(Shield, { className: "w-4 h-4 text-primary" }), description: "Full access" },
    { label: "Ravi (Editor)", value: "2", icon: _jsx(User, { className: "w-4 h-4 text-emerald-500" }), description: "Can edit posts" },
    { label: "Anand (Viewer)", value: "3", icon: _jsx(Briefcase, { className: "w-4 h-4 text-amber-500" }), description: "Read-only access" },
    { label: "Deepa (Inactive)", value: "4", disabled: true },
];
export const Default = {
    args: {
        label: "Select Customer",
        placeholder: "Choose a customer...",
        options: customerOptions,
        helperText: "Assign this project to an active team member.",
    },
};
export const Searchable = {
    args: {
        label: "Search & Select",
        placeholder: "Type to filter team members...",
        options: customerOptions,
        searchable: true,
    },
};
export const MultiSelect = {
    args: {
        label: "Assignees",
        placeholder: "Select multiple team members...",
        options: customerOptions,
        multiple: true,
        clearable: true,
    },
};
export const WithError = {
    args: {
        label: "Account Role",
        options: customerOptions,
        error: "Please select a valid role before continuing.",
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsx(Select, { size: "small", placeholder: "Small (h-8)", options: customerOptions }), _jsx(Select, { size: "medium", placeholder: "Medium (h-10)", options: customerOptions }), _jsx(Select, { size: "large", placeholder: "Large (h-12)", options: customerOptions })] })),
};
