import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Radio } from "./Radio";
const meta = {
    title: "Components/Radio",
    component: Radio,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        value: "opt1",
        label: "Standard Radio Option",
    },
};
export const Checked = {
    args: {
        value: "opt2",
        label: "Pre-selected Option",
        defaultChecked: true,
    },
};
export const Disabled = {
    args: {
        value: "opt3",
        label: "Disabled Option",
        disabled: true,
    },
};
export const DisabledChecked = {
    args: {
        value: "opt4",
        label: "Disabled & Checked",
        disabled: true,
        defaultChecked: true,
    },
};
export const WithDescription = {
    args: {
        value: "pro",
        label: "Professional Subscription",
        description: "Includes advanced observability metrics and priority SLAs.",
    },
};
export const WithError = {
    args: {
        value: "err",
        label: "Mandatory Regulatory Consent",
        error: "Consent must be acknowledged.",
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Radio, { value: "s", size: "small", label: "Small Radio (size='small')" }), _jsx(Radio, { value: "m", size: "medium", label: "Medium Radio (size='medium')", defaultChecked: true }), _jsx(Radio, { value: "l", size: "large", label: "Large Radio (size='large')" })] })),
};
