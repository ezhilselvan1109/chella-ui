import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Drawer, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const drawerProps = [
    {
        name: "open",
        type: "boolean",
        required: true,
        description: "Controls drawer visibility.",
    },
    {
        name: "onClose",
        type: "() => void",
        required: true,
        description: "Close callback handler.",
    },
    {
        name: "position",
        type: '"right" | "left" | "top" | "bottom"',
        defaultValue: '"right"',
        description: "Slide-in entry side.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large" | "full"',
        defaultValue: '"medium"',
        description: "Width or height dimension constraint.",
    },
];
export const DrawerDoc = () => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState("right");
    const openDrawer = (p) => {
        setPos(p);
        setOpen(true);
    };
    return (_jsx(ComponentDoc, { title: "Drawer / Sheet", description: "Slide-out container panel anchored to any screen edge for complex sidebars, filters, and configuration panels.", category: "Feedback & Overlay", propsData: drawerProps, children: _jsxs(ComponentPreview, { title: "Slide-In Positions", code: `<Button onClick={() => openDrawer("right")}>Right Drawer</Button>
<Button onClick={() => openDrawer("left")}>Left Drawer</Button>
<Button onClick={() => openDrawer("bottom")}>Bottom Sheet</Button>`, children: [_jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { variant: "outline", onClick: () => openDrawer("right"), children: "Slide Right" }), _jsx(Button, { variant: "outline", onClick: () => openDrawer("left"), children: "Slide Left" }), _jsx(Button, { variant: "outline", onClick: () => openDrawer("bottom"), children: "Slide Bottom" })] }), _jsx(Drawer, { open: open, onClose: () => setOpen(false), position: pos, children: _jsxs("div", { className: "space-y-4 p-4 text-xs", children: [_jsxs("h3", { className: "text-sm font-bold text-foreground", children: ["Drawer Panel (", pos, ")"] }), _jsxs("p", { className: "text-muted-foreground leading-relaxed", children: ["This drawer slid in from the ", _jsx("strong", { children: pos }), " edge with backdrop lock and focus trapping."] }), _jsx(Button, { variant: "primary", size: "small", onClick: () => setOpen(false), children: "Close Panel" })] }) })] }) }));
};
