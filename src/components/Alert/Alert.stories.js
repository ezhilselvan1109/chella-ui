import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert } from "./Alert";
import { Button } from "../Button";
const meta = {
    title: "Components/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Variants = {
    render: () => (_jsxs("div", { className: "w-[500px] space-y-3", children: [_jsx(Alert, { variant: "info", title: "System Maintenance Scheduled", description: "Core database migration scheduled tonight at 02:00 UTC." }), _jsx(Alert, { variant: "success", title: "Cluster Upgraded", description: "Kubernetes control plane upgraded to version 1.30.2." }), _jsx(Alert, { variant: "warning", title: "High Memory Usage", description: "Node group CPU utilization exceeded 85% for >10 mins." }), _jsx(Alert, { variant: "danger", title: "Ingress TLS Certificate Expired", description: "Action required: Renew wildcard cert for *.api.mesh.internal." })] })),
};
export const StyleVariants = {
    render: () => (_jsxs("div", { className: "w-[500px] space-y-3", children: [_jsx(Alert, { variant: "info", styleVariant: "subtle", title: "Subtle Style (Default)", description: "Soft translucent background with accent border." }), _jsx(Alert, { variant: "info", styleVariant: "outline", title: "Outline Style", description: "Clean card background with colored perimeter." }), _jsx(Alert, { variant: "info", styleVariant: "solid", title: "Solid Style", description: "High-contrast solid semantic background fill." })] })),
};
export const ClosableWithAction = {
    render: () => (_jsx("div", { className: "w-[500px]", children: _jsx(Alert, { variant: "success", closable: true, title: "Artifact Published", description: "Package @chella/ui@0.1.0 published to registry.", action: _jsx(Button, { size: "small", variant: "secondary", children: "View Release" }) }) })),
};
