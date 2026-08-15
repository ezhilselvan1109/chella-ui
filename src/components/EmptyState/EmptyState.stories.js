import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EmptyState } from "./EmptyState";
import { Button } from "../Button";
import { FolderSearch, Inbox, Database, Plus } from "lucide-react";
const meta = {
    title: "Components/EmptyState",
    component: EmptyState,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx(EmptyState, { icon: _jsx(Inbox, {}), title: "No Microservices Found", description: "You have not deployed any services in this cluster namespace yet.", action: _jsxs(Button, { variant: "primary", children: [_jsx(Plus, { className: "w-4 h-4 mr-1.5" }), " Create Microservice"] }) })),
};
export const DashedBorder = {
    render: () => (_jsx(EmptyState, { variant: "dashed", icon: _jsx(FolderSearch, {}), title: "No Matching Records", description: "No deployment manifests match your search filter criteria.", action: _jsx(Button, { variant: "secondary", children: "Clear All Filters" }) })),
};
export const CardVariant = {
    render: () => (_jsx(EmptyState, { variant: "card", icon: _jsx(Database, {}), title: "Database Cluster Inactive", description: "Provision a managed Postgres or Redis instance to start collecting traces.", action: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", children: "Read Docs" }), _jsx(Button, { variant: "primary", children: "Provision Database" })] }) })),
};
