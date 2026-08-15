import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Kbd } from "./Kbd";
const meta = {
    title: "Components/Kbd",
    component: Kbd,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => _jsx(Kbd, { children: "\u2318K" }),
};
export const KeyShortcuts = {
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm text-muted-foreground w-36", children: "Quick Search:" }), _jsx(Kbd, { keys: ["cmd", "k"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm text-muted-foreground w-36", children: "Command Palette:" }), _jsx(Kbd, { keys: ["cmd", "shift", "p"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm text-muted-foreground w-36", children: "Save Changes:" }), _jsx(Kbd, { keys: ["ctrl", "s"], separator: "+" })] })] })),
};
export const Variants = {
    render: () => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Kbd, { variant: "default", children: "Default" }), _jsx(Kbd, { variant: "outline", children: "Outline" }), _jsx(Kbd, { variant: "subtle", children: "Subtle" }), _jsx(Kbd, { variant: "ghost", children: "Ghost" })] })),
};
export const Sizing = {
    render: () => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Kbd, { size: "xs", children: "XS" }), _jsx(Kbd, { size: "small", children: "SM" }), _jsx(Kbd, { size: "medium", children: "MD" }), _jsx(Kbd, { size: "large", children: "LG" })] })),
};
