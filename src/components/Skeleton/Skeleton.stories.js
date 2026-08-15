import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "./Skeleton";
import { Card } from "../Card";
const meta = {
    title: "Components/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs("div", { className: "w-80 space-y-4", children: [_jsx(Skeleton, { variant: "text", width: "60%" }), _jsx(Skeleton, { variant: "text", lines: 3 })] })),
};
export const UserCardSkeleton = {
    render: () => (_jsx(Card, { className: "w-80", children: _jsxs(Card.Content, { className: "p-6 space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Skeleton, { variant: "circular", width: 44, height: 44 }), _jsxs("div", { className: "space-y-1.5 flex-1", children: [_jsx(Skeleton, { variant: "text", width: "70%" }), _jsx(Skeleton, { variant: "text", width: "40%", height: 12 })] })] }), _jsx(Skeleton, { variant: "rounded", height: 80 }), _jsxs("div", { className: "flex justify-end gap-2", children: [_jsx(Skeleton, { variant: "rounded", width: 60, height: 32 }), _jsx(Skeleton, { variant: "rounded", width: 80, height: 32 })] })] }) })),
};
export const AnimationVariants = {
    render: () => (_jsxs("div", { className: "w-80 space-y-4", children: [_jsxs("div", { children: [_jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Pulse Animation (Default)" }), _jsx(Skeleton, { variant: "rounded", height: 36, animation: "pulse" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Wave / Shimmer Animation" }), _jsx(Skeleton, { variant: "rounded", height: 36, animation: "wave" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "None (Static Placeholder)" }), _jsx(Skeleton, { variant: "rounded", height: 36, animation: "none" })] })] })),
};
