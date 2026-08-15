import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { Shield } from "lucide-react";
const meta = {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { name: "Kumar Selvan", size: "large", status: "online" }), _jsx(Avatar, { name: "Ravi Chandran", size: "medium", status: "busy" }), _jsx(Avatar, { name: "Priya Sundar", size: "small", status: "away" }), _jsx(Avatar, { icon: _jsx(Shield, { className: "w-1/2 h-1/2" }), size: "medium" })] })),
};
export const ShapesAndSizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { name: "Circle", shape: "circle", size: "large" }), _jsx(Avatar, { name: "Rounded", shape: "rounded", size: "large" }), _jsx(Avatar, { name: "Square", shape: "square", size: "large" })] })),
};
export const GroupStack = {
    render: () => (_jsx("div", { className: "space-y-4", children: _jsxs(AvatarGroup, { max: 3, size: "medium", children: [_jsx(Avatar, { name: "Alice Johnson" }), _jsx(Avatar, { name: "Bob Smith" }), _jsx(Avatar, { name: "Charlie Brown" }), _jsx(Avatar, { name: "David Miller" }), _jsx(Avatar, { name: "Emma Watson" })] }) })),
};
