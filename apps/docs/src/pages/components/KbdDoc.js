import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Kbd } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const KbdDoc = () => {
    return (_jsx(ComponentDoc, { title: "Kbd", description: "Keyboard shortcut key badge indicating physical keystrokes or key combinations.", category: "Data Display", children: _jsx(ComponentPreview, { title: "Key Combinations", code: `<div className="flex items-center gap-2">
  <span>Quick search:</span>
  <Kbd keys={["⌘", "K"]} />
</div>
<div className="flex items-center gap-2">
  <span>Save changes:</span>
  <Kbd keys={["Ctrl", "S"]} />
</div>`, children: _jsxs("div", { className: "space-y-3 text-xs", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-muted-foreground", children: "Quick search command:" }), _jsx(Kbd, { keys: ["⌘", "K"] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-muted-foreground", children: "Save document:" }), _jsx(Kbd, { keys: ["Ctrl", "S"] })] })] }) }) }));
};
