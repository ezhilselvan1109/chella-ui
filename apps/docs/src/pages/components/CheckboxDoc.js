import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Checkbox } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const checkboxProps = [
    {
        name: "checked",
        type: "boolean | 'indeterminate'",
        defaultValue: "false",
        description: "Checked or indeterminate state.",
    },
    {
        name: "label",
        type: "ReactNode",
        description: "Label text beside checkbox.",
    },
    {
        name: "description",
        type: "string",
        description: "Subordinate description text.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: "Visual scale of checkbox box.",
    },
];
export const CheckboxDoc = () => {
    const [terms, setTerms] = useState(true);
    const [news, setNews] = useState(false);
    return (_jsx(ComponentDoc, { title: "Checkbox", description: "Checkbox component for single binary toggles, indeterminate parent-child selections, and multi-option lists.", category: "Forms & Inputs", propsData: checkboxProps, children: _jsx(ComponentPreview, { title: "Checkboxes with Labels & Descriptions", code: `<Checkbox
  label="Accept Terms of Service"
  description="You agree to our platform terms and privacy guidelines."
  checked={terms}
  onChange={(e) => setTerms(e.target.checked)}
/>

<Checkbox
  label="Receive Product Updates"
  description="Weekly digest of new features and components."
  checked={news}
  onChange={(e) => setNews(e.target.checked)}
/>`, children: _jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsx(Checkbox, { label: "Accept Terms of Service", description: "You agree to our platform terms and privacy guidelines.", checked: terms, onChange: (e) => setTerms(e.target.checked) }), _jsx(Checkbox, { label: "Receive Product Updates", description: "Weekly digest of new features and components.", checked: news, onChange: (e) => setNews(e.target.checked) })] }) }) }));
};
