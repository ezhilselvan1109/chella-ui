import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Rating } from "./Rating";
const meta = {
    title: "Components/Rating",
    component: Rating,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => {
        const [rating, setRating] = useState(4);
        return _jsx(Rating, { value: rating, onChange: setRating, showValueText: true });
    },
};
export const Sizing = {
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-xs text-muted-foreground w-16", children: "Small:" }), _jsx(Rating, { defaultValue: 3, size: "small" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-xs text-muted-foreground w-16", children: "Medium:" }), _jsx(Rating, { defaultValue: 4, size: "medium" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-xs text-muted-foreground w-16", children: "Large:" }), _jsx(Rating, { defaultValue: 5, size: "large" })] })] })),
};
export const ReadOnlyWithText = {
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsx(Rating, { value: 5, readOnly: true, showValueText: true }), _jsx(Rating, { value: 4, readOnly: true, showValueText: true, color: "primary" }), _jsx(Rating, { value: 3, readOnly: true, showValueText: true, color: "emerald" })] })),
};
