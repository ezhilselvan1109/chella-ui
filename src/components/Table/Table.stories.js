import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Table } from "./Table";
import { Badge } from "../Badge";
import { Button } from "../Button";
const mockCustomers = [
    { id: "1", name: "Kumar", email: "kumar@example.com", status: "active", spent: 4500 },
    { id: "2", name: "Ravi", email: "ravi@example.com", status: "pending", spent: 1200 },
    { id: "3", name: "Anand", email: "anand@example.com", status: "active", spent: 8900 },
    { id: "4", name: "Deepa", email: "deepa@example.com", status: "inactive", spent: 340 },
];
const customerColumns = [
    { key: "name", title: "Customer Name", dataIndex: "name", sorter: true },
    { key: "email", title: "Email Address", dataIndex: "email" },
    {
        key: "status",
        title: "Status",
        dataIndex: "status",
        render: (status) => {
            const variant = status === "active" ? "success" : status === "pending" ? "warning" : "secondary";
            return _jsx(Badge, { dot: true, variant: variant, children: String(status).toUpperCase() });
        },
    },
    {
        key: "spent",
        title: "Total Spent",
        dataIndex: "spent",
        align: "right",
        render: (val) => _jsxs("span", { className: "font-mono", children: ["$", Number(val).toLocaleString()] }),
    },
    {
        key: "actions",
        title: "Actions",
        align: "right",
        render: (_, record) => (_jsx(Button, { variant: "ghost", size: "small", onClick: () => alert(`Editing ${record.name}`), children: "Manage" })),
    },
];
const meta = {
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
export const Default = {
    args: {
        columns: customerColumns,
        dataSource: mockCustomers,
        rowKey: "id",
    },
};
export const WithRowSelection = {
    render: () => {
        const [selectedKeys, setSelectedKeys] = useState(["1"]);
        return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "text-xs text-muted-foreground", children: ["Selected IDs: ", JSON.stringify(selectedKeys)] }), _jsx(Table, { columns: customerColumns, dataSource: mockCustomers, rowKey: "id", rowSelection: {
                        selectedRowKeys: selectedKeys,
                        onChange: (keys) => setSelectedKeys(keys),
                    } })] }));
    },
};
export const StripedAndBordered = {
    args: {
        columns: customerColumns,
        dataSource: mockCustomers,
        striped: true,
        bordered: true,
    },
};
