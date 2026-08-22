import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Progress, CircularProgress, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const progressProps = [
    {
        name: "value",
        type: "number",
        defaultValue: "0",
        description: "Current completion percentage (0 - 100).",
    },
    {
        name: "showLabel",
        type: "boolean",
        defaultValue: "false",
        description: "Displays textual percent indicator.",
    },
    {
        name: "variant",
        type: '"default" | "success" | "warning" | "danger" | "info" | "gradient"',
        defaultValue: '"default"',
        description: "Color fill scheme.",
    },
];
export const ProgressDoc = () => {
    const [percent, setPercent] = useState(65);
    return (_jsx(ComponentDoc, { title: "Progress & Gauge", description: "Linear and circular progress indicators visualizing task progression and system quotas.", category: "Feedback & Overlay", propsData: progressProps, children: _jsx(ComponentPreview, { title: "Linear & Circular Progress", code: `<Progress value={percent} label="Upload Progress" showLabel />
<CircularProgress value={percent} size={64} showLabel />`, children: _jsxs("div", { className: "space-y-6 w-full max-w-md", children: [_jsx(Progress, { value: percent, label: "Upload Status", showLabel: true }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CircularProgress, { value: percent, size: 64, showLabel: true }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "small", variant: "outline", onClick: () => setPercent(Math.max(0, percent - 15)), children: "-15%" }), _jsx(Button, { size: "small", variant: "outline", onClick: () => setPercent(Math.min(100, percent + 15)), children: "+15%" })] })] })] }) }) }));
};
