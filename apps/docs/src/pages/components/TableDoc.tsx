import React, { useState } from "react";
import { Table, Badge } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const tableProps: PropDefinition[] = [
  {
    name: "columns",
    type: "TableColumn<T>[]",
    required: true,
    description: "Definitions of table columns (key, title, sorter, render).",
  },
  {
    name: "dataSource",
    type: "T[]",
    required: true,
    description: "Array of row data records.",
  },
  {
    name: "rowKey",
    type: "keyof T | string | ((record: T) => string | number)",
    description: "Unique row identifier key.",
  },
  {
    name: "rowSelection",
    type: "{ selectedRowKeys: (string | number)[]; onChange: (...) => void }",
    description: "Enables row checkboxes and selection handler.",
  },
];

interface UserRow {
  id: string;
  name: string;
  role: string;
  status: "Active" | "Inactive";
}

const sampleUsers: UserRow[] = [
  { id: "1", name: "Sarah Connor", role: "DevOps Lead", status: "Active" },
  { id: "2", name: "John Doe", role: "Frontend Architect", status: "Active" },
  { id: "3", name: "Alex Mercer", role: "Security Engineer", status: "Inactive" },
];

export const TableDoc: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);

  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name" as const,
      sorter: true,
    },
    {
      key: "role",
      title: "Role",
      dataIndex: "role" as const,
    },
    {
      key: "status",
      title: "Status",
      render: (_: unknown, record: UserRow) => (
        <Badge variant={record.status === "Active" ? "success" : "secondary"} size="small">
          {record.status}
        </Badge>
      ),
    },
  ];

  return (
    <ComponentDoc
      title="Table"
      description="Data table supporting column sorting, custom cell renderers, row selections, and responsive containers."
      category="Data Display"
      propsData={tableProps}
    >
      <ComponentPreview
        title="Sortable Table with Selection"
        code={`<Table
  columns={columns}
  dataSource={sampleUsers}
  rowKey="id"
  rowSelection={{
    selectedRowKeys: selectedKeys,
    onChange: setSelectedKeys,
  }}
/>`}
      >
        <div className="w-full">
          <Table<UserRow>
            columns={columns}
            dataSource={sampleUsers}
            rowKey="id"
            rowSelection={{
              selectedRowKeys: selectedKeys,
              onChange: (keys) => setSelectedKeys(keys),
            }}
          />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
