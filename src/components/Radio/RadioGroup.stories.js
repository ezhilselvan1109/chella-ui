import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";
const meta = {
    title: "Components/RadioGroup",
    component: RadioGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const BasicGroup = {
    render: () => (_jsxs(RadioGroup, { defaultValue: "starter", label: "Subscription Tier", children: [_jsx(Radio, { value: "starter", label: "Starter Tier ($29/mo)", description: "Ideal for early-stage prototypes." }), _jsx(Radio, { value: "pro", label: "Professional Tier ($99/mo)", description: "For scaling microservice teams." }), _jsx(Radio, { value: "enterprise", label: "Enterprise Custom", description: "Dedicated clusters and custom VPC peering." })] })),
};
export const Horizontal = {
    render: () => (_jsxs(RadioGroup, { orientation: "horizontal", defaultValue: "card", label: "Payment Method", children: [_jsx(Radio, { value: "card", label: "Credit Card" }), _jsx(Radio, { value: "paypal", label: "PayPal" }), _jsx(Radio, { value: "wire", label: "Bank Wire Transfer" })] })),
};
export const Controlled = {
    render: function ControlledGroupDemo() {
        const [plan, setPlan] = useState("pro");
        return (_jsxs("div", { className: "flex flex-col gap-4 p-4 border border-border rounded-lg bg-card max-w-md", children: [_jsxs(RadioGroup, { value: plan, onValueChange: setPlan, label: "Select Cloud Provider", description: "Infrastructure region is provisioned automatically.", children: [_jsx(Radio, { value: "aws", label: "Amazon Web Services (AWS)" }), _jsx(Radio, { value: "gcp", label: "Google Cloud Platform (GCP)" }), _jsx(Radio, { value: "azure", label: "Microsoft Azure" })] }), _jsxs("div", { className: "text-xs text-muted-foreground pt-2 border-t border-border", children: ["Active Provider: ", _jsx("span", { className: "font-bold text-primary", children: plan.toUpperCase() })] })] }));
    },
};
export const WithError = {
    render: () => (_jsxs(RadioGroup, { label: "Notification Channel", error: "You must select at least one delivery channel.", children: [_jsx(Radio, { value: "slack", label: "Slack Webhook" }), _jsx(Radio, { value: "email", label: "Digest Email" }), _jsx(Radio, { value: "sms", label: "SMS Message" })] })),
};
export const DisabledGroup = {
    render: () => (_jsxs(RadioGroup, { disabled: true, defaultValue: "us-east", label: "Data Residency (Locked)", children: [_jsx(Radio, { value: "us-east", label: "US East (N. Virginia)" }), _jsx(Radio, { value: "eu-west", label: "EU Central (Frankfurt)" })] })),
};
export const IndividualDisabled = {
    render: () => (_jsxs(RadioGroup, { defaultValue: "standard", label: "Compute Flavor", children: [_jsx(Radio, { value: "standard", label: "Standard (2 vCPU, 8GB RAM)" }), _jsx(Radio, { value: "gpu", label: "GPU Accelerated (NVIDIA A100)", disabled: true, description: "Temporarily out of stock in this region." })] })),
};
