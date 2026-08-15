import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { Input } from "../Input";
import { AlertTriangle, UserPlus } from "lucide-react";
const meta = {
    title: "Components/Modal",
    component: Modal,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large", "full"],
        },
        closeOnEsc: { control: "boolean" },
        closeOnBackdropClick: { control: "boolean" },
        showCloseButton: { control: "boolean" },
    },
};
export default meta;
export const InteractiveDemo = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs("div", { children: [_jsx(Button, { onClick: () => setOpen(true), leftIcon: _jsx(UserPlus, { className: "w-4 h-4" }), children: "Open Customer Modal" }), _jsx(Modal, { open: open, onClose: () => setOpen(false), title: "Create New Customer", description: "Fill in the customer information below to provision their account.", footer: _jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: () => setOpen(false), children: "Create Customer" })] }), children: _jsxs("div", { className: "space-y-4 py-2", children: [_jsx(Input, { label: "Customer Full Name", placeholder: "e.g. Anand Kumar" }), _jsx(Input, { label: "Email Address", placeholder: "anand@company.com", type: "email" }), _jsx(Input, { label: "Company Name", placeholder: "e.g. Acme Corp" })] }) })] }));
    },
};
export const DangerConfirmation = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs("div", { children: [_jsx(Button, { variant: "danger", onClick: () => setOpen(true), leftIcon: _jsx(AlertTriangle, { className: "w-4 h-4" }), children: "Delete Customer Record" }), _jsx(Modal, { open: open, size: "small", onClose: () => setOpen(false), title: "Delete Customer", description: "Are you absolutely sure you want to delete this customer record? This action cannot be reversed.", footer: _jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { variant: "danger", onClick: () => setOpen(false), children: "Yes, Delete" })] }) })] }));
    },
};
