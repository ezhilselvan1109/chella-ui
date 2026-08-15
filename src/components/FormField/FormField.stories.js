import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormField } from "./FormField";
import { Form } from "./Form";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { Select } from "../Select";
import { Button } from "../Button";
const meta = {
    title: "Components/FormField",
    component: FormField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx("div", { className: "w-80", children: _jsx(FormField, { label: "Cluster Domain", required: true, helpText: "Fully qualified domain for internal cluster ingress", children: _jsx(Input, { placeholder: "e.g. k8s.prod.internal" }) }) })),
};
export const WithValidationErrors = {
    render: () => (_jsxs("div", { className: "w-80 space-y-4", children: [_jsx(FormField, { label: "Work Email", required: true, error: "Please provide a valid company email address", children: _jsx(Input, { defaultValue: "kumar@invalid" }) }), _jsx(FormField, { label: "Pod Description", error: "Description exceeds maximum character count", children: _jsx(Textarea, { defaultValue: "A long description..." }) })] })),
};
export const FormLayouts = {
    render: () => (_jsxs(Form, { layout: "vertical", className: "w-96 space-y-4", children: [_jsx(FormField, { label: "Service Name", required: true, children: _jsx(Input, { placeholder: "auth-gateway" }) }), _jsx(FormField, { label: "Deployment Region", children: _jsx(Select, { options: [
                        { label: "US East (N. Virginia)", value: "us-east-1" },
                        { label: "US West (Oregon)", value: "us-west-2" },
                        { label: "EU Central (Frankfurt)", value: "eu-central-1" },
                    ] }) }), _jsx("div", { className: "pt-2", children: _jsx(Button, { variant: "primary", className: "w-full", children: "Deploy Service" }) })] })),
};
