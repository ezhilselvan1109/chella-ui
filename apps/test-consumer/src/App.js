import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Button, Input, Select, Modal, Card, Badge, Table, Checkbox, useTheme, } from "@chella/ui";
const sampleOrders = [
    { id: "ORD-101", item: "Enterprise License", qty: 5, price: 2499, status: "shipped" },
    { id: "ORD-102", item: "Cloud Storage Addon", qty: 2, price: 450, status: "processing" },
    { id: "ORD-103", item: "Priority Support SLA", qty: 1, price: 1200, status: "pending" },
];
export default function App() {
    const { theme, toggleTheme } = useTheme();
    const [customerName, setCustomerName] = useState("Acme Global Corp");
    const [selectedPlan, setSelectedPlan] = useState("pro");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        { key: "id", title: "Order ID", dataIndex: "id", sorter: true },
        { key: "item", title: "Product / Service", dataIndex: "item" },
        { key: "qty", title: "Qty", dataIndex: "qty", align: "center" },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: (status) => {
                const variant = status === "shipped" ? "success" : status === "processing" ? "primary" : "warning";
                return _jsx(Badge, { dot: true, variant: variant, children: String(status).toUpperCase() });
            },
        },
        {
            key: "price",
            title: "Amount",
            dataIndex: "price",
            align: "right",
            sorter: (a, b) => a.price - b.price,
            render: (val) => `$${Number(val).toLocaleString()}`,
        },
    ];
    return (_jsx("div", { style: { minHeight: "100vh", padding: "2rem" }, children: _jsxs("div", { style: { maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }, children: [_jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [_jsxs("div", { children: [_jsx("h1", { style: { fontSize: "1.75rem", fontWeight: "bold", margin: 0 }, children: "External Consumer App" }), _jsx("p", { style: { margin: "0.25rem 0 0", opacity: 0.7, fontSize: "0.875rem" }, children: "Verifying that @chella/ui renders with zero consumer Tailwind compiler setup." })] }), _jsxs(Button, { variant: "outline", size: "small", onClick: toggleTheme, children: ["Toggle ", theme === "dark" ? "Light" : "Dark", " Mode"] })] }), _jsxs(Card, { variant: "elevated", children: [_jsxs(Card.Header, { children: [_jsx(Card.Title, { children: "Customer Provisioning Form" }), _jsx(Card.Description, { children: "Testing form components imported directly from @chella/ui" })] }), _jsxs(Card.Content, { children: [_jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }, children: [_jsx(Input, { label: "Customer Account", value: customerName, onChange: (e) => setCustomerName(e.target.value), clearable: true }), _jsx(Select, { label: "Subscription Tier", value: selectedPlan, onChange: setSelectedPlan, options: [
                                                { label: "Starter ($29/mo)", value: "starter" },
                                                { label: "Professional ($99/mo)", value: "pro" },
                                                { label: "Enterprise Custom", value: "enterprise" },
                                            ] })] }), _jsxs("div", { style: { marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [_jsx(Checkbox, { label: "Auto-Renew Annual Contract", description: "Save 20% on all enterprise addons when billed annually.", defaultChecked: true }), _jsx(Checkbox, { label: "Dedicated Solution Architect Support", size: "small" })] })] }), _jsxs(Card.Footer, { children: [_jsx(Button, { variant: "secondary", onClick: () => alert("Discarded"), children: "Discard" }), _jsx(Button, { variant: "primary", onClick: () => setIsModalOpen(true), children: "Review & Submit" })] })] }), _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: [_jsx("h2", { style: { fontSize: "1.25rem", fontWeight: "600", margin: 0 }, children: "Recent Orders" }), _jsx(Table, { columns: columns, dataSource: sampleOrders, rowKey: "id" })] }), _jsx(Modal, { open: isModalOpen, onClose: () => setIsModalOpen(false), title: "Confirm Provisioning", description: `Are you ready to provision ${customerName} on the selected plan?`, footer: _jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", onClick: () => setIsModalOpen(false), children: "Back" }), _jsx(Button, { variant: "primary", onClick: () => {
                                    setIsModalOpen(false);
                                    alert("Provisioned successfully via @chella/ui!");
                                }, children: "Confirm Provisioning" })] }), children: _jsx("p", { style: { margin: 0, fontSize: "0.875rem" }, children: "The account credentials will be emailed to the primary technical contact immediately." }) })] }) }));
}
