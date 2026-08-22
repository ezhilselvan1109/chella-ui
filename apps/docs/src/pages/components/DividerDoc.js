import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const DividerDoc = () => {
    return (_jsx(ComponentDoc, { title: "Divider / Separator", description: "Visual separator line distinguishing between distinct content groups in horizontal or vertical orientations.", category: "Layout & Utility", children: _jsx(ComponentPreview, { title: "Horizontal and Vertical Dividers", code: `<div className="space-y-4">
  <p>Top section content</p>
  <Divider />
  <p>Bottom section content</p>
</div>`, children: _jsxs("div", { className: "space-y-4 w-full max-w-sm text-xs", children: [_jsx("p", { className: "text-muted-foreground", children: "Primary workspace settings" }), _jsx(Divider, {}), _jsx("p", { className: "text-muted-foreground", children: "Secondary integration keys" }), _jsx(Divider, {}), _jsx("p", { className: "text-muted-foreground", children: "Audit and retention logs" })] }) }) }));
};
