import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Badge } from "../Badge";
import { Button } from "../Button";
import type { TableColumn } from "./Table.types";

interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending";
  spent: number;
}

const mockCustomers: CustomerRecord[] = [
  { id: "1", name: "Kumar", email: "kumar@example.com", status: "active", spent: 4500 },
  { id: "2", name: "Ravi", email: "ravi@example.com", status: "pending", spent: 1200 },
  { id: "3", name: "Anand", email: "anand@example.com", status: "active", spent: 8900 },
  { id: "4", name: "Deepa", email: "deepa@example.com", status: "inactive", spent: 340 },
];

const customerColumns: TableColumn<CustomerRecord>[] = [
  { key: "name", title: "Customer Name", dataIndex: "name", sorter: true },
  { key: "email", title: "Email Address", dataIndex: "email" },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      const variant =
        status === "active" ? "success" : status === "pending" ? "warning" : "secondary";
      return <Badge dot variant={variant}>{String(status).toUpperCase()}</Badge>;
    },
  },
  {
    key: "spent",
    title: "Total Spent",
    dataIndex: "spent",
    align: "right",
    sorter: (a, b) => a.spent - b.spent,
    render: (val) => `$${Number(val).toLocaleString()}`,
  },
  {
    key: "actions",
    title: "Actions",
    align: "right",
    render: (_, record) => (
      <Button variant="ghost" size="small" onClick={() => alert(`Viewing ${record.name}`)}>
        Manage
      </Button>
    ),
  },
];

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    bordered: { control: "boolean" },
    striped: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: customerColumns,
    dataSource: mockCustomers,
    rowKey: "id",
  },
};

export const WithRowSelection: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>(["1"]);

    return (
      <div className="space-y-4">
        <div className="text-xs text-muted-foreground">
          Selected IDs: {JSON.stringify(selectedKeys)}
        </div>
        <Table
          columns={customerColumns}
          dataSource={mockCustomers}
          rowKey="id"
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
        />
      </div>
    );
  },
};

export const StripedAndBordered: Story = {
  args: {
    columns: customerColumns,
    dataSource: mockCustomers,
    striped: true,
    bordered: true,
  },
};
