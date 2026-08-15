import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Command } from "./Command";
import { Button } from "../Button";
import { LayoutDashboard, Settings, User, Plus, Trash2, Terminal, FileCode, } from "lucide-react";
const meta = {
    title: "Components/Command",
    component: Command,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx("div", { className: "w-[450px]", children: _jsxs(Command, { children: [_jsx(Command.Input, { placeholder: "Type a command or search..." }), _jsxs(Command.List, { children: [_jsx(Command.Empty, { children: "No commands found." }), _jsxs(Command.Group, { heading: "Navigation", children: [_jsx(Command.Item, { icon: _jsx(LayoutDashboard, {}), shortcut: "\u2318D", children: "Dashboard" }), _jsx(Command.Item, { icon: _jsx(Settings, {}), shortcut: "\u2318S", children: "Settings" }), _jsx(Command.Item, { icon: _jsx(User, {}), shortcut: "\u2318P", children: "Profile" })] }), _jsx(Command.Separator, {}), _jsxs(Command.Group, { heading: "Developer Tools", children: [_jsx(Command.Item, { icon: _jsx(Terminal, {}), shortcut: "\u2318T", children: "Open Terminal" }), _jsx(Command.Item, { icon: _jsx(FileCode, {}), shortcut: "\u2318O", children: "View Source Code" }), _jsx(Command.Item, { icon: _jsx(Plus, {}), shortcut: "\u2318N", children: "New Microservice" }), _jsx(Command.Item, { icon: _jsx(Trash2, {}), shortcut: "\u2318\u232B", children: "Delete Cache" })] })] })] }) })),
};
export const DialogModal = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs("div", { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Palette (\u2318K)" }), _jsxs(Command.Dialog, { open: open, onOpenChange: setOpen, children: [_jsx(Command.Input, { placeholder: "Quick search or action..." }), _jsxs(Command.List, { children: [_jsx(Command.Empty, { children: "No results matching your query." }), _jsxs(Command.Group, { heading: "Actions", children: [_jsx(Command.Item, { icon: _jsx(Plus, {}), shortcut: "\u2318N", onSelect: () => {
                                                alert("Created new service!");
                                                setOpen(false);
                                            }, children: "Create Microservice" }), _jsx(Command.Item, { icon: _jsx(Settings, {}), shortcut: "\u2318,", onSelect: () => {
                                                alert("Opened preferences");
                                                setOpen(false);
                                            }, children: "Preferences" })] })] })] })] }));
    },
};
