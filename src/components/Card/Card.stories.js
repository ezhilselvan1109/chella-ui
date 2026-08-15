import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "./Card";
import { Button } from "../Button";
import { TrendingUp, Users, DollarSign } from "lucide-react";
const meta = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["elevated", "outlined", "flat"],
        },
        hoverable: { control: "boolean" },
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(Card, { className: "max-w-md", children: [_jsxs(Card.Header, { children: [_jsx(Card.Title, { children: "Account Settings" }), _jsx(Card.Description, { children: "Manage your workspace preferences and billing profile." })] }), _jsx(Card.Content, { children: _jsxs("p", { className: "text-sm text-foreground/80", children: ["Your current plan is ", _jsx("strong", { children: "Enterprise Pro" }), " with 12 active seats."] }) }), _jsx(Card.Footer, { children: _jsx(Button, { variant: "secondary", size: "small", children: "Manage Plan" }) })] })),
};
export const MetricCards = {
    render: () => (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs(Card, { hoverable: true, variant: "elevated", children: [_jsxs(Card.Header, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(Card.Title, { className: "text-sm font-medium text-muted-foreground", children: "Total Revenue" }), _jsx(DollarSign, { className: "w-4 h-4 text-emerald-500" })] }), _jsxs(Card.Content, { children: [_jsx("div", { className: "text-2xl font-bold text-foreground", children: "$45,231.89" }), _jsxs("p", { className: "text-xs text-emerald-600 mt-1 flex items-center gap-1", children: [_jsx(TrendingUp, { className: "w-3.5 h-3.5" }), " +20.1% from last month"] })] })] }), _jsxs(Card, { hoverable: true, variant: "elevated", children: [_jsxs(Card.Header, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(Card.Title, { className: "text-sm font-medium text-muted-foreground", children: "Active Subscriptions" }), _jsx(Users, { className: "w-4 h-4 text-primary" })] }), _jsxs(Card.Content, { children: [_jsx("div", { className: "text-2xl font-bold text-foreground", children: "+2,350" }), _jsx("p", { className: "text-xs text-primary mt-1", children: "+180 new customers this week" })] })] })] })),
};
