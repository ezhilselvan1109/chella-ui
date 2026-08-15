import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion } from "./Accordion";
const meta = {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx("div", { className: "w-[500px]", children: _jsxs(Accordion, { type: "single", collapsible: true, defaultValue: "item-1", children: [_jsxs(Accordion.Item, { value: "item-1", children: [_jsx(Accordion.Trigger, { children: "What is Chella UI?" }), _jsx(Accordion.Content, { children: "Chella UI is a high-performance React design system inspired by Ant Design, Material UI, and Radix UI, styled with Tailwind CSS tokens." })] }), _jsxs(Accordion.Item, { value: "item-2", children: [_jsx(Accordion.Trigger, { children: "How does theme switching work?" }), _jsx(Accordion.Content, { children: "ThemeProvider provides CSS variable tokens supporting Light, Dark, System, and custom brand palettes (Emerald, Violet, Amber) at runtime." })] }), _jsxs(Accordion.Item, { value: "item-3", children: [_jsx(Accordion.Trigger, { children: "Is Chella UI fully accessible?" }), _jsx(Accordion.Content, { children: "Yes! All components follow W3C WAI-ARIA authoring practices, with keyboard navigation, focus rings, and screen-reader semantics." })] })] }) })),
};
export const SeparatedCards = {
    render: () => (_jsx("div", { className: "w-[500px]", children: _jsxs(Accordion, { type: "multiple", variant: "separated", defaultValue: ["sec-1"], children: [_jsxs(Accordion.Item, { value: "sec-1", children: [_jsx(Accordion.Trigger, { children: "Cluster Deployment Node Topology" }), _jsx(Accordion.Content, { children: "12 active ARM64 nodes provisioned in AWS us-east-1 and us-west-2 availability zones." })] }), _jsxs(Accordion.Item, { value: "sec-2", children: [_jsx(Accordion.Trigger, { children: "Zero-Trust Security Policies" }), _jsx(Accordion.Content, { children: "All ingress and egress communication is encrypted with TLS 1.3 mTLS and verified via SPIFFE IDs." })] })] }) })),
};
export const DeclarativeItems = {
    render: () => (_jsx("div", { className: "w-[500px]", children: _jsx(Accordion, { variant: "bordered", items: [
                { value: "q1", title: "Automated Rollback Rules", content: "Rollbacks trigger if 5xx rate exceeds 0.5% over a 3-minute window." },
                { value: "q2", title: "Autoscaling Parameters", content: "HPA scales from 3 to 50 replicas when target CPU reaches 70%." },
            ] }) })),
};
