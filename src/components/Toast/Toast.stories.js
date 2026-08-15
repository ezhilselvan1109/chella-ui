import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToastProvider, useToast } from "./ToastContext";
import { Button } from "../Button";
const meta = {
    title: "Components/Toast",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
function ToastDemoButtons() {
    const toast = useToast();
    return (_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Button, { variant: "primary", onClick: () => toast.success("Deployment Succeeded", "All 12 microservice instances are healthy."), children: "Trigger Success" }), _jsx(Button, { variant: "danger", onClick: () => toast.error("Database Connection Lost", "Retrying automatic TLS reconnect in 5s."), children: "Trigger Danger" }), _jsx(Button, { variant: "secondary", onClick: () => toast.warning("High Memory Usage", "Worker node memory consumption reached 87%."), children: "Trigger Warning" }), _jsx(Button, { variant: "outline", onClick: () => toast({
                    title: "Artifact Uploaded",
                    description: "Binary checksum verified.",
                    action: {
                        label: "View Logs",
                        onClick: () => alert("Viewing build logs..."),
                    },
                }), children: "With Action" })] }));
}
export const Interactive = {
    render: () => (_jsx(ToastProvider, { placement: "top-right", children: _jsx(ToastDemoButtons, {}) })),
};
