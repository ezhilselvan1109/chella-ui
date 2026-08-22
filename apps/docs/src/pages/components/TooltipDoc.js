import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const TooltipDoc = () => {
    return (_jsx(ComponentDoc, { title: "Tooltip", description: "Brief informational tooltip displayed on hover or keyboard focus, linked with aria-describedby.", category: "Feedback & Overlay", children: _jsx(ComponentPreview, { title: "Hover Tooltips", code: `<Tooltip content="Copies git commit hash to clipboard">
  <Button variant="outline" size="small">Hover for Tooltip</Button>
</Tooltip>`, children: _jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [_jsx(Tooltip, { content: "Copies commit SHA-256 to clipboard", placement: "top", children: _jsx(Button, { variant: "outline", size: "small", children: "Hover Me (Top)" }) }), _jsx(Tooltip, { content: "Deletes local build cache", placement: "bottom", children: _jsx(Button, { variant: "danger", size: "small", children: "Hover Me (Bottom)" }) })] }) }) }));
};
