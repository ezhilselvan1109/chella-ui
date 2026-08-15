import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Timeline } from "./Timeline";
import { CheckCircle2, AlertTriangle, XCircle, Clock } from "lucide-react";
const meta = {
    title: "Components/Timeline",
    component: Timeline,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx("div", { className: "w-96", children: _jsx(Timeline, { items: [
                {
                    title: "Build Passed",
                    time: "10:15 AM",
                    description: "Docker artifact pushed to container registry.",
                    status: "success",
                },
                {
                    title: "Integration Tests",
                    time: "10:20 AM",
                    description: "428 unit tests executed in 4.2s.",
                    status: "success",
                },
                {
                    title: "Rolling Deployment",
                    time: "10:25 AM",
                    description: "Updating pods in cluster namespace prod-us-east.",
                    status: "processing",
                },
            ] }) })),
};
export const CustomIcons = {
    render: () => (_jsx("div", { className: "w-96", children: _jsxs(Timeline, { children: [_jsxs(Timeline.Item, { status: "success", icon: _jsx(CheckCircle2, {}), children: [_jsx(Timeline.Time, { children: "09:00 AM" }), _jsx(Timeline.Title, { children: "Cluster Provisioned" }), _jsx(Timeline.Description, { children: "3 worker nodes connected." })] }), _jsxs(Timeline.Item, { status: "warning", icon: _jsx(AlertTriangle, {}), children: [_jsx(Timeline.Time, { children: "09:15 AM" }), _jsx(Timeline.Title, { children: "Memory Pressure Warning" }), _jsx(Timeline.Description, { children: "Node 2 reached 88% memory threshold." })] }), _jsxs(Timeline.Item, { status: "danger", icon: _jsx(XCircle, {}), children: [_jsx(Timeline.Time, { children: "09:30 AM" }), _jsx(Timeline.Title, { children: "Ingress Pod CrashLoopBackOff" }), _jsx(Timeline.Description, { children: "Failed healthcheck probe on port 8080." })] }), _jsxs(Timeline.Item, { status: "default", icon: _jsx(Clock, {}), children: [_jsx(Timeline.Time, { children: "09:45 AM" }), _jsx(Timeline.Title, { children: "Autoscaling Pending" }), _jsx(Timeline.Description, { children: "Waiting for additional EC2 instance allocation." })] })] }) })),
};
