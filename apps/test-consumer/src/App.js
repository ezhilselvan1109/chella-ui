import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button, Input, Card, Badge, Switch, Rating, Table, Modal, } from "@chellaa/ui";
export function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rating, setRating] = useState(5);
    const [active, setActive] = useState(true);
    return (_jsxs("div", { style: { padding: "2rem", maxWidth: "800px", margin: "0 auto" }, children: [_jsxs("header", { style: { marginBottom: "1.5rem" }, children: [_jsx("h1", { children: "Test Consumer Application" }), _jsx("p", { children: "Validating @chellaa/ui external packaging and styles" }), _jsxs("div", { style: { display: "flex", gap: "0.5rem", marginTop: "0.5rem" }, children: [_jsx(Badge, { variant: "primary", children: "Consumer Mode" }), _jsx(Badge, { dot: true, variant: "success", children: "Zero-Purge CSS" })] })] }), _jsxs(Card, { variant: "elevated", hoverable: true, children: [_jsxs(Card.Header, { children: [_jsx(Card.Title, { children: "Consumer Integration Test" }), _jsx(Card.Description, { children: "Components imported via package boundary" })] }), _jsx(Card.Content, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "1rem" }, children: [_jsx(Input, { label: "Consumer Input", placeholder: "Type here...", defaultValue: "Validated" }), _jsx(Switch, { label: "Live Sync", description: "Toggle consumer sync state", checked: active, onCheckedChange: setActive }), _jsxs("div", { children: [_jsx("div", { style: { fontSize: "0.875rem", marginBottom: "0.25rem" }, children: "Rating Component:" }), _jsx(Rating, { value: rating, onChange: setRating, showValueText: true })] }), _jsx(Table, { columns: [
                                        { key: "service", title: "Microservice", dataIndex: "service" },
                                        { key: "status", title: "Status", dataIndex: "status", render: (s) => _jsx(Badge, { dot: true, variant: "success", children: String(s) }) },
                                    ], dataSource: [
                                        { id: "1", service: "auth-gateway", status: "Healthy" },
                                        { id: "2", service: "billing-core", status: "Healthy" },
                                    ] })] }) }), _jsx(Card.Footer, { children: _jsx(Button, { variant: "primary", onClick: () => setModalOpen(true), children: "Open Consumer Modal" }) })] }), _jsx(Modal, { open: modalOpen, onClose: () => setModalOpen(false), title: "Consumer Validation Dialog", description: "Verifies modal portal, focus trapping, and backdrop overlay in external apps.", footer: _jsx(Button, { variant: "secondary", onClick: () => setModalOpen(false), children: "Close" }), children: _jsx("p", { children: "The consumer modal is working properly!" }) })] }));
}
export default App;
