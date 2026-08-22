import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Table, Badge } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const tableProps = [
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
const sampleUsers = [
    { id: "1", name: "Sarah Connor", role: "DevOps Lead", status: "Active" },
    { id: "2", name: "John Doe", role: "Frontend Architect", status: "Active" },
    { id: "3", name: "Alex Mercer", role: "Security Engineer", status: "Inactive" },
];
export const TableDoc = () => {
    const [selectedKeys, setSelectedKeys] = useState([]);
    const columns = [
        {
            key: "name",
            title: "Name",
            dataIndex: "name",
            sorter: true,
        },
        {
            key: "role",
            title: "Role",
            dataIndex: "role",
        },
        {
            key: "status",
            title: "Status",
            render: (_, record) => (_jsx(Badge, { variant: record.status === "Active" ? "success" : "secondary", size: "small", children: record.status })),
        },
    ];
    return (_jsx(ComponentDoc, { title: "Table", description: "Data table supporting column sorting, custom cell renderers, row selections, and responsive containers.", category: "Data Display", propsData: tableProps, children: _jsx(ComponentPreview, { title: "Sortable Table with Selection", code: `<Table
  columns={columns}
  dataSource={sampleUsers}
  rowKey="id"
  rowSelection={{
    selectedRowKeys: selectedKeys,
    onChange: setSelectedKeys,
  }}
/>`, children: _jsx("div", { className: "w-full", children: _jsx(Table, { columns: columns, dataSource: sampleUsers, rowKey: "id", rowSelection: {
                        selectedRowKeys: selectedKeys,
                        onChange: (keys) => setSelectedKeys(keys),
                    } }) }) }) }));
};
