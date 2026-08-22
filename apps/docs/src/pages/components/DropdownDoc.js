import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown, Button, useToast } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { Edit2, Copy, Trash2 } from "lucide-react";
const dropdownProps = [
    {
        name: "trigger",
        type: "ReactNode",
        required: true,
        description: "Trigger element toggling the dropdown on click.",
    },
    {
        name: "items",
        type: "DropdownMenuItem[]",
        description: "Array of menu item objects { key, label, icon, variant, onClick }.",
    },
    {
        name: "placement",
        type: '"bottom-start" | "bottom-end" | "bottom" | "top-start" | "top-end" | "top"',
        defaultValue: '"bottom-start"',
        description: "Placement alignment of the dropdown relative to trigger.",
    },
];
export const DropdownDoc = () => {
    const toast = useToast();
    const handleAction = (action) => {
        toast.info("Action Triggered", `Executed: ${action}`);
    };
    const menuItems = [
        {
            key: "edit",
            label: "Edit Project",
            icon: _jsx(Edit2, { className: "w-3.5 h-3.5 mr-2" }),
            onClick: () => handleAction("Edit Project"),
        },
        {
            key: "duplicate",
            label: "Duplicate",
            icon: _jsx(Copy, { className: "w-3.5 h-3.5 mr-2" }),
            onClick: () => handleAction("Duplicate"),
        },
        {
            key: "delete",
            label: "Archive",
            variant: "danger",
            icon: _jsx(Trash2, { className: "w-3.5 h-3.5 mr-2" }),
            onClick: () => handleAction("Archive"),
        },
    ];
    return (_jsx(ComponentDoc, { title: "Dropdown Menu", description: "Contextual action menu anchored to a trigger button with full keyboard arrow and enter support.", category: "Navigation", propsData: dropdownProps, children: _jsx(ComponentPreview, { title: "Actions Dropdown", code: `<Dropdown
  trigger={<Button variant="outline" size="small">Project Actions</Button>}
  items={[
    { key: "edit", label: "Edit Project", onClick: () => ... },
    { key: "duplicate", label: "Duplicate", onClick: () => ... },
    { key: "delete", label: "Archive", variant: "danger", onClick: () => ... }
  ]}
/>`, children: _jsx(Dropdown, { trigger: _jsx(Button, { variant: "outline", size: "small", children: "Project Actions" }), items: menuItems }) }) }));
};
