import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Input } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { Mail } from "lucide-react";
const inputProps = [
    {
        name: "variant",
        type: '"default" | "filled" | "flushed"',
        defaultValue: '"default"',
        description: "Visual border and background style.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: "Dimensions of the input box.",
    },
    {
        name: "label",
        type: "ReactNode",
        description: "Accessible top label with proper htmlFor binding.",
    },
    {
        name: "error",
        type: "ReactNode",
        description: "Validation error message with aria-invalid synchronization.",
    },
    {
        name: "prefix",
        type: "ReactNode",
        description: "Prefix icon inside input field.",
    },
    {
        name: "suffix",
        type: "ReactNode",
        description: "Suffix icon or interactive adornment.",
    },
];
export const InputDoc = () => {
    const [val, setVal] = useState("Jane Doe");
    return (_jsxs(ComponentDoc, { title: "Input", description: "Accessible text input component with support for labels, helper text, error messages, prefix/suffix icons, and multiple size scales.", category: "Forms & Inputs", propsData: inputProps, children: [_jsx(ComponentPreview, { title: "Input Variants", description: "Default outlined, filled background, and bottom-bordered flushed styles.", code: `<Input variant="default" label="Default Outlined" placeholder="Type here..." />
<Input variant="filled" label="Filled Background" placeholder="Filled input..." />
<Input variant="flushed" label="Flushed Underline" placeholder="Flushed style..." />`, children: _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl", children: [_jsx(Input, { variant: "default", label: "Default Outlined", placeholder: "Type here..." }), _jsx(Input, { variant: "filled", label: "Filled", placeholder: "Filled..." }), _jsx(Input, { variant: "flushed", label: "Flushed", placeholder: "Flushed..." })] }) }), _jsx(ComponentPreview, { title: "Icons & Validation Errors", description: "Prefix icon adornment and dynamic error feedback.", code: `<Input
  prefix={<Mail className="w-4 h-4 text-muted-foreground" />}
  label="Email Address"
  placeholder="user@example.com"
  value={val}
  onChange={(e) => setVal(e.target.value)}
/>

<Input
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
  defaultValue="1234"
/>`, children: _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl", children: [_jsx(Input, { prefix: _jsx(Mail, { className: "w-4 h-4 text-muted-foreground" }), label: "Email Address", placeholder: "user@example.com", value: val, onChange: (e) => setVal(e.target.value) }), _jsx(Input, { label: "Password", type: "password", error: "Password must be at least 8 characters", defaultValue: "1234" })] }) })] }));
};
