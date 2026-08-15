import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from "./Divider";
import { Button } from "../Button";
const meta = {
    title: "Components/Divider",
    component: Divider,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs("div", { className: "w-80 space-y-4", children: [_jsx("div", { children: "Top Section Content" }), _jsx(Divider, {}), _jsx("div", { children: "Bottom Section Content" })] })),
};
export const WithTextLabels = {
    render: () => (_jsxs("div", { className: "w-80 space-y-4", children: [_jsx(Divider, { children: "OR" }), _jsx(Divider, { align: "start", children: "LEFT ALIGNED" }), _jsx(Divider, { align: "end", children: "RIGHT ALIGNED" })] })),
};
export const LineVariants = {
    render: () => (_jsxs("div", { className: "w-80 space-y-4", children: [_jsx(Divider, { variant: "solid", children: "SOLID LINE" }), _jsx(Divider, { variant: "dashed", children: "DASHED LINE" }), _jsx(Divider, { variant: "dotted", children: "DOTTED LINE" })] })),
};
export const Vertical = {
    render: () => (_jsxs("div", { className: "flex items-center h-8 gap-2 text-sm text-muted-foreground", children: [_jsx(Button, { variant: "ghost", size: "small", children: "Edit" }), _jsx(Divider, { orientation: "vertical" }), _jsx(Button, { variant: "ghost", size: "small", children: "Duplicate" }), _jsx(Divider, { orientation: "vertical" }), _jsx(Button, { variant: "ghost", size: "small", children: "Delete" })] })),
};
