import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";
import { HelpCircle } from "lucide-react";
const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx(Tooltip, { content: "Instantly deploys container image to production cluster", children: _jsx(Button, { variant: "primary", children: "Deploy Node" }) })),
};
export const Placements = {
    render: () => (_jsxs("div", { className: "flex items-center gap-8 p-12", children: [_jsx(Tooltip, { content: "Top Placement", placement: "top", children: _jsx(Button, { variant: "secondary", children: "Top" }) }), _jsx(Tooltip, { content: "Bottom Placement", placement: "bottom", children: _jsx(Button, { variant: "secondary", children: "Bottom" }) }), _jsx(Tooltip, { content: "Left Placement", placement: "left", children: _jsx(Button, { variant: "secondary", children: "Left" }) }), _jsx(Tooltip, { content: "Right Placement", placement: "right", children: _jsx(Button, { variant: "secondary", children: "Right" }) })] })),
};
export const Variants = {
    render: () => (_jsxs("div", { className: "flex items-center gap-6 p-8", children: [_jsx(Tooltip, { content: "Default Dark Contrast", variant: "default", children: _jsx(Button, { variant: "outline", children: "Default" }) }), _jsx(Tooltip, { content: "Primary Theme Variant", variant: "primary", children: _jsx(Button, { variant: "outline", children: "Primary" }) }), _jsx(Tooltip, { content: "Light High-Contrast", variant: "light", children: _jsx(Button, { variant: "outline", children: "Light" }) })] })),
};
export const WithIconTrigger = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4 text-sm text-foreground", children: [_jsx("span", { children: "Zero-trust network encryption" }), _jsx(Tooltip, { content: "All inter-service traffic is encrypted via mTLS 1.3", children: _jsx("button", { className: "text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full", children: _jsx(HelpCircle, { className: "w-4 h-4" }) }) })] })),
};
export const Disabled = {
    render: () => (_jsx(Tooltip, { content: "This should not appear", disabled: true, children: _jsx(Button, { variant: "secondary", disabled: true, children: "Disabled Action" }) })),
};
