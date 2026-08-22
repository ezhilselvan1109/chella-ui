import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, useToast } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const ToastDoc = () => {
    const toast = useToast();
    return (_jsx(ComponentDoc, { title: "Toast Notifications", description: "Imperative floating notifications powered by useToast hook and ToastProvider.", category: "Feedback & Overlay", children: _jsx(ComponentPreview, { title: "Trigger Toast Alerts", code: `const { toast } = useToast();

<Button
  variant="primary"
  onClick={() =>
    toast.success("Changes Saved", "Your configuration has been updated.")
  }
>
  Success Toast
</Button>`, children: _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { variant: "primary", onClick: () => toast.success("Changes Saved", "Your configuration has been updated successfully."), children: "Success Toast" }), _jsx(Button, { variant: "danger", onClick: () => toast.error("Connection Failed", "Unable to reach database cluster."), children: "Danger Toast" }), _jsx(Button, { variant: "outline", onClick: () => toast.info("Information", "Background compilation in progress."), children: "Info Toast" })] }) }) }));
};
