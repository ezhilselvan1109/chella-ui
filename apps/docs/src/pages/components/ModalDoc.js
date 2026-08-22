import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Modal, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const modalProps = [
    {
        name: "open",
        type: "boolean",
        required: true,
        description: "Controls open visibility state.",
    },
    {
        name: "onClose",
        type: "() => void",
        required: true,
        description: "Callback fired when modal requests to be closed.",
    },
    {
        name: "title",
        type: "ReactNode",
        description: "Modal header title.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large" | "full"',
        defaultValue: '"medium"',
        description: "Width dimension constraint.",
    },
];
export const ModalDoc = () => {
    const [open, setOpen] = useState(false);
    return (_jsx(ComponentDoc, { title: "Modal / Dialog", description: "Accessible overlay dialog window with focus trap, escape key dismissal, and backdrop blur.", category: "Feedback & Overlay", propsData: modalProps, children: _jsxs(ComponentPreview, { title: "Interactive Modal Dialog", code: `<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
>
  <p className="text-xs text-muted-foreground">Are you sure you want to continue?</p>
</Modal>`, children: [_jsx(Button, { variant: "primary", onClick: () => setOpen(true), children: "Open Demo Modal" }), _jsx(Modal, { open: open, onClose: () => setOpen(false), title: "Confirm Microservice Deployment", children: _jsxs("div", { className: "space-y-4 text-xs", children: [_jsxs("p", { className: "text-muted-foreground leading-relaxed", children: ["Deploying ", _jsx("strong", { children: "v0.1.0" }), " will immediately update routing tables in the Kubernetes cluster. All active websocket connections will gracefully drain."] }), _jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [_jsx(Button, { variant: "ghost", size: "small", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { variant: "primary", size: "small", onClick: () => setOpen(false), children: "Proceed with Deploy" })] })] }) })] }) }));
};
