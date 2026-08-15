import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { Input } from "../Input";
import { AlertTriangle, UserPlus } from "lucide-react";

const meta: Meta<typeof Modal> = {
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
type Story = StoryObj<typeof Modal>;

export const InteractiveDemo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)} leftIcon={<UserPlus className="w-4 h-4" />}>
          Open Customer Modal
        </Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Create New Customer"
          description="Fill in the customer information below to provision their account."
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Create Customer
              </Button>
            </>
          }
        >
          <div className="space-y-4 py-2">
            <Input label="Customer Full Name" placeholder="e.g. Anand Kumar" />
            <Input label="Email Address" placeholder="anand@company.com" type="email" />
            <Input label="Company Name" placeholder="e.g. Acme Corp" />
          </div>
        </Modal>
      </div>
    );
  },
};

export const DangerConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="danger" onClick={() => setOpen(true)} leftIcon={<AlertTriangle className="w-4 h-4" />}>
          Delete Customer Record
        </Button>

        <Modal
          open={open}
          size="small"
          onClose={() => setOpen(false)}
          title="Delete Customer"
          description="Are you absolutely sure you want to delete this customer record? This action cannot be reversed."
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Yes, Delete
              </Button>
            </>
          }
        />
      </div>
    );
  },
};
