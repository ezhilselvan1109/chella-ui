import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs } from "./Tabs";
import { Card } from "../Card";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
import { Server, Shield, Activity, HardDrive } from "lucide-react";
const meta = {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const LineVariant = {
    render: () => (_jsx(Card, { className: "w-[450px]", children: _jsx(Card.Content, { className: "p-6", children: _jsxs(Tabs, { defaultValue: "cluster", variant: "line", children: [_jsxs(Tabs.List, { children: [_jsxs(Tabs.Trigger, { value: "cluster", children: [_jsx(Server, { className: "w-3.5 h-3.5 mr-1.5" }), "Cluster Specs"] }), _jsxs(Tabs.Trigger, { value: "security", children: [_jsx(Shield, { className: "w-3.5 h-3.5 mr-1.5" }), "Security"] }), _jsxs(Tabs.Trigger, { value: "telemetry", children: [_jsx(Activity, { className: "w-3.5 h-3.5 mr-1.5" }), "Telemetry"] })] }), _jsxs(Tabs.Content, { value: "cluster", className: "space-y-3 pt-2", children: [_jsx("div", { className: "text-xs text-muted-foreground", children: "Compute pool configurations" }), _jsx(Input, { label: "Worker Pool Name", defaultValue: "pool-us-east-prod", size: "small" }), _jsx(Button, { size: "small", variant: "primary", children: "Save Specs" })] }), _jsxs(Tabs.Content, { value: "security", className: "space-y-3 pt-2", children: [_jsx("div", { className: "text-xs text-muted-foreground", children: "Encryption & TLS configurations" }), _jsx(Switch, { label: "Strict mTLS 1.3 Handshake", defaultChecked: true, size: "small" }), _jsx(Switch, { label: "Enforce Zero-Trust Network Access", defaultChecked: true, size: "small" })] }), _jsxs(Tabs.Content, { value: "telemetry", className: "space-y-3 pt-2", children: [_jsx("div", { className: "text-xs text-muted-foreground", children: "OpenTelemetry stream metrics" }), _jsx(Switch, { label: "Sample Trace Tracing (100%)", size: "small" })] })] }) }) })),
};
export const PillVariant = {
    render: () => (_jsx(Card, { className: "w-[400px]", children: _jsx(Card.Content, { className: "p-6", children: _jsxs(Tabs, { defaultValue: "day", variant: "pill", children: [_jsxs(Tabs.List, { children: [_jsx(Tabs.Trigger, { value: "day", children: "24 Hours" }), _jsx(Tabs.Trigger, { value: "week", children: "7 Days" }), _jsx(Tabs.Trigger, { value: "month", children: "30 Days" })] }), _jsx(Tabs.Content, { value: "day", className: "p-3 text-xs text-muted-foreground", children: "24h Throughput: 42,910 req/sec | Avg p99: 18ms" }), _jsx(Tabs.Content, { value: "week", className: "p-3 text-xs text-muted-foreground", children: "7d Throughput: 310,400 req/sec | Avg p99: 22ms" }), _jsx(Tabs.Content, { value: "month", className: "p-3 text-xs text-muted-foreground", children: "30d Throughput: 1,420,000 req/sec | Avg p99: 24ms" })] }) }) })),
};
export const DeclarativeItems = {
    render: () => (_jsx(Tabs, { variant: "pill", items: [
            { key: "db", label: "Database", icon: _jsx(HardDrive, { className: "w-3.5 h-3.5" }), children: _jsx("div", { className: "text-xs p-3", children: "PostgreSQL 16 Cluster" }) },
            { key: "cache", label: "Cache", icon: _jsx(Activity, { className: "w-3.5 h-3.5" }), children: _jsx("div", { className: "text-xs p-3", children: "Redis Sentinel v7.2" }) },
        ] })),
};
