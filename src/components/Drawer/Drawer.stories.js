import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
const meta = {
    title: "Components/Drawer",
    component: Drawer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs("div", { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Side Drawer" }), _jsxs(Drawer, { open: open, onClose: () => setOpen(false), position: "right", children: [_jsxs(Drawer.Header, { children: [_jsx(Drawer.Title, { children: "Configure Ingress Gateway" }), _jsx(Drawer.Description, { children: "Adjust proxy timeouts and TLS termination settings." })] }), _jsxs(Drawer.Body, { children: [_jsx(Input, { label: "Domain Name", defaultValue: "api.internal.network" }), _jsx(Input, { label: "Port Forward", defaultValue: "8443" }), _jsx("div", { className: "pt-2", children: _jsx(Switch, { label: "Enable mTLS 1.3 Strict Mode", defaultChecked: true }) })] }), _jsxs(Drawer.Footer, { children: [_jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: () => setOpen(false), children: "Apply Configurations" })] })] })] }));
    },
};
export const Positions = {
    render: () => {
        const [position, setPosition] = useState("right");
        const [open, setOpen] = useState(false);
        return (_jsxs("div", { className: "flex gap-2", children: [["right", "left", "top", "bottom"].map((pos) => (_jsx(Button, { variant: "secondary", onClick: () => {
                        setPosition(pos);
                        setOpen(true);
                    }, children: pos.toUpperCase() }, pos))), _jsxs(Drawer, { open: open, onClose: () => setOpen(false), position: position, children: [_jsxs(Drawer.Header, { children: [_jsxs(Drawer.Title, { children: ["Position: ", position.toUpperCase()] }), _jsx(Drawer.Description, { children: "Slide-over sheet panel from screen edge." })] }), _jsx(Drawer.Body, { children: _jsx("p", { className: "text-sm text-muted-foreground", children: "Smooth slide-in CSS animation with backdrop click dismiss." }) }), _jsx(Drawer.Footer, { children: _jsx(Button, { onClick: () => setOpen(false), children: "Close" }) })] })] }));
    },
};
