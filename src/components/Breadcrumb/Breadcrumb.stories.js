import { jsx as _jsx } from "react/jsx-runtime";
import { Breadcrumb } from "./Breadcrumb";
import { Home, Server, Layers } from "lucide-react";
const meta = {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx(Breadcrumb, { items: [
            { label: "Home", href: "/", icon: _jsx(Home, { className: "w-3.5 h-3.5" }) },
            { label: "Infrastructure", href: "/infra", icon: _jsx(Server, { className: "w-3.5 h-3.5" }) },
            { label: "Clusters", href: "/infra/clusters", icon: _jsx(Layers, { className: "w-3.5 h-3.5" }) },
            { label: "us-east-1-primary" },
        ] })),
};
export const CollapsedMaxItems = {
    render: () => (_jsx(Breadcrumb, { maxItems: 3, items: [
            { label: "Platform", href: "/" },
            { label: "Organizations", href: "/orgs" },
            { label: "Chella Corp", href: "/orgs/chella" },
            { label: "Projects", href: "/orgs/chella/projects" },
            { label: "Microservices", href: "/orgs/chella/projects/microservices" },
            { label: "Production Ingress" },
        ] })),
};
export const CustomSlashSeparator = {
    render: () => (_jsx(Breadcrumb, { separator: "/", items: [
            { label: "Root", href: "/" },
            { label: "etc", href: "/etc" },
            { label: "nginx", href: "/etc/nginx" },
            { label: "nginx.conf" },
        ] })),
};
