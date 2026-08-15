import { jsx as _jsx } from "react/jsx-runtime";
import { Banner } from "./Banner";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Sparkles, AlertTriangle, ShieldAlert } from "lucide-react";
const meta = {
    title: "Components/Banner",
    component: Banner,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;
export const GradientAnnouncement = {
    render: () => (_jsx(Banner, { variant: "gradient", icon: _jsx(Sparkles, {}), badge: _jsx(Badge, { variant: "secondary", size: "small", children: "v1.2.0" }), action: _jsx(Button, { size: "small", variant: "secondary", className: "h-7 text-xs", children: "Explore Features" }), closable: true, children: "Chella UI v1.2.0 with 33 production-ready primitives is now live!" })),
};
export const SystemWarning = {
    render: () => (_jsx(Banner, { variant: "warning", icon: _jsx(AlertTriangle, {}), action: _jsx(Button, { size: "small", variant: "primary", className: "h-7 text-xs", children: "Status Page" }), closable: true, children: "Cluster maintenance scheduled for Sunday, August 16 at 02:00 UTC." })),
};
export const CriticalAlert = {
    render: () => (_jsx(Banner, { variant: "danger", icon: _jsx(ShieldAlert, {}), action: _jsx(Button, { size: "small", variant: "secondary", className: "h-7 text-xs", children: "Rotate Keys" }), closable: true, children: "Security Advisory: 1 API token expired 2 hours ago." })),
};
