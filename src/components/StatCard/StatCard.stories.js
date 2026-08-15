import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StatCard } from "./StatCard";
import { DollarSign, Users, Activity, Server } from "lucide-react";
const meta = {
    title: "Components/StatCard",
    component: StatCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx("div", { className: "w-80", children: _jsx(StatCard, { title: "Total Revenue (ARR)", value: "$128,450.00", icon: _jsx(DollarSign, {}), trend: { value: "+24.5%", direction: "up", label: "vs last quarter" }, hoverable: true }) })),
};
export const MetricGrid = {
    render: () => (_jsxs("div", { className: "grid grid-cols-3 gap-6 w-[850px]", children: [_jsx(StatCard, { title: "Total ARR", value: "$128,450", icon: _jsx(DollarSign, {}), trend: { value: "+24.5%", direction: "up", label: "compared to Q2" }, hoverable: true }), _jsx(StatCard, { title: "Active Team Members", value: "1,248", icon: _jsx(Users, {}), trend: { value: "+32", direction: "up", label: "joined this week" }, hoverable: true }), _jsx(StatCard, { title: "System Uptime", value: "99.98%", icon: _jsx(Activity, {}), trend: { value: "-0.01%", direction: "down", label: "during incident" }, hoverable: true })] })),
};
export const SubtleVariant = {
    render: () => (_jsx("div", { className: "w-80", children: _jsx(StatCard, { variant: "subtle", title: "Active Nodes", value: "64 Nodes", icon: _jsx(Server, {}), trend: { value: "100% capacity", direction: "neutral" } }) })),
};
