import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StatCard } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { Users, DollarSign } from "lucide-react";
const statCardProps = [
    {
        name: "title",
        type: "ReactNode",
        description: "Header metric label.",
    },
    {
        name: "value",
        type: "ReactNode",
        description: "Main numerical value.",
    },
    {
        name: "icon",
        type: "ReactNode",
        description: "Leading or accent icon.",
    },
    {
        name: "trend",
        type: "{ value: ReactNode; direction?: 'up' | 'down' | 'neutral'; label?: ReactNode }",
        description: "Percentage trend metric and direction.",
    },
];
export const StatCardDoc = () => {
    return (_jsx(ComponentDoc, { title: "StatCard", description: "Dashboard metric card displaying key indicators, trends, icon accents, and comparison changes.", category: "Data Display", propsData: statCardProps, children: _jsx(ComponentPreview, { title: "Dashboard KPI Cards", code: `<StatCard
  title="Monthly Revenue"
  value="$48,250"
  trend={{ value: "+14.2%", direction: "up" }}
  icon={<DollarSign className="w-5 h-5" />}
/>
<StatCard
  title="Active Users"
  value="12,480"
  trend={{ value: "+8.1%", direction: "up" }}
  icon={<Users className="w-5 h-5" />}
/>`, children: _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl", children: [_jsx(StatCard, { title: "Monthly Revenue", value: "$48,250", trend: { value: "+14.2%", direction: "up" }, icon: _jsx(DollarSign, { className: "w-5 h-5" }) }), _jsx(StatCard, { title: "Active Users", value: "12,480", trend: { value: "+8.1%", direction: "up" }, icon: _jsx(Users, { className: "w-5 h-5" }) })] }) }) }));
};
