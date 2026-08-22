import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover, Button, Input } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { Settings } from "lucide-react";
const popoverProps = [
    {
        name: "content",
        type: "ReactNode",
        required: true,
        description: "The rich interactive content displayed inside popover card.",
    },
    {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Trigger element toggling popover.",
    },
    {
        name: "placement",
        type: '"top" | "bottom" | "left" | "right" | "bottom-start" | ...',
        defaultValue: '"bottom-start"',
        description: "Alignment of popover relative to trigger.",
    },
];
export const PopoverDoc = () => {
    const popoverContent = (_jsxs("div", { className: "w-64 p-4 space-y-3", children: [_jsx("h4", { className: "font-bold text-xs text-foreground", children: "Service Parameters" }), _jsx(Input, { size: "small", label: "Port Number", defaultValue: "8080" }), _jsx(Button, { size: "small", variant: "primary", fullWidth: true, children: "Apply Changes" })] }));
    return (_jsx(ComponentDoc, { title: "Popover", description: "Floating overlay card triggered by click, anchored to a target element with automatic collision detection.", category: "Feedback & Overlay", propsData: popoverProps, children: _jsx(ComponentPreview, { title: "Interactive Popover Settings", code: `<Popover
  content={
    <div className="w-64 p-4 space-y-3">
      <h4 className="font-bold text-xs">Service Parameters</h4>
      <Input size="small" label="Port" defaultValue="8080" />
      <Button size="small" variant="primary" fullWidth>Apply Changes</Button>
    </div>
  }
>
  <Button variant="outline" size="small">
    <Settings className="w-3.5 h-3.5 mr-1.5" /> Popover Settings
  </Button>
</Popover>`, children: _jsx(Popover, { content: popoverContent, children: _jsxs(Button, { variant: "outline", size: "small", children: [_jsx(Settings, { className: "w-3.5 h-3.5 mr-1.5" }), " Popover Settings"] }) }) }) }));
};
