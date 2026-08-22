import React from "react";
import { Dropdown, Button, useToast } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";
import { Edit2, Copy, Trash2 } from "lucide-react";

const dropdownProps: PropDefinition[] = [
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

export const DropdownDoc: React.FC = () => {
  const toast = useToast();

  const handleAction = (action: string) => {
    toast.info("Action Triggered", `Executed: ${action}`);
  };

  const menuItems = [
    {
      key: "edit",
      label: "Edit Project",
      icon: <Edit2 className="w-3.5 h-3.5 mr-2" />,
      onClick: () => handleAction("Edit Project"),
    },
    {
      key: "duplicate",
      label: "Duplicate",
      icon: <Copy className="w-3.5 h-3.5 mr-2" />,
      onClick: () => handleAction("Duplicate"),
    },
    {
      key: "delete",
      label: "Archive",
      variant: "danger" as const,
      icon: <Trash2 className="w-3.5 h-3.5 mr-2" />,
      onClick: () => handleAction("Archive"),
    },
  ];

  return (
    <ComponentDoc
      title="Dropdown Menu"
      description="Contextual action menu anchored to a trigger button with full keyboard arrow and enter support."
      category="Navigation"
      propsData={dropdownProps}
    >
      <ComponentPreview
        title="Actions Dropdown"
        code={`<Dropdown
  trigger={<Button variant="outline" size="small">Project Actions</Button>}
  items={[
    { key: "edit", label: "Edit Project", onClick: () => ... },
    { key: "duplicate", label: "Duplicate", onClick: () => ... },
    { key: "delete", label: "Archive", variant: "danger", onClick: () => ... }
  ]}
/>`}
      >
        <Dropdown
          trigger={
            <Button variant="outline" size="small">
              Project Actions
            </Button>
          }
          items={menuItems}
        />
      </ComponentPreview>
    </ComponentDoc>
  );
};
