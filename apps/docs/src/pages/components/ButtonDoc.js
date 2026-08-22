import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const buttonProps = [
    {
        name: "variant",
        type: '"primary" | "secondary" | "outline" | "ghost" | "danger" | "link"',
        defaultValue: '"primary"',
        description: "Visual appearance and prominence of the button.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: "Size dimensions of the button.",
    },
    {
        name: "loading",
        type: "boolean",
        defaultValue: "false",
        description: "Shows an inline spinner and disables interactions.",
    },
    {
        name: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: "Prevents click events and applies disabled styling.",
    },
    {
        name: "fullWidth",
        type: "boolean",
        defaultValue: "false",
        description: "Expands the button to fill 100% of its parent width.",
    },
];
export const ButtonDoc = () => {
    const [loading, setLoading] = useState(false);
    return (_jsxs(ComponentDoc, { title: "Button", description: "Interactive button component supporting multiple aesthetic variants, size scales, loading animations, and icon attachments.", category: "Forms & Inputs", badge: "Core", propsData: buttonProps, children: [_jsx(ComponentPreview, { title: "Visual Variants", description: "Six carefully designed variants covering all primary and secondary action hierarchies.", code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>`, children: _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Button, { variant: "primary", children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "outline", children: "Outline" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "danger", children: "Danger" }), _jsx(Button, { variant: "link", children: "Link" })] }) }), _jsx(ComponentPreview, { title: "Sizes", description: "Small (32px), Medium (40px), and Large (48px) sizes.", code: `<Button size="small">Small (32px)</Button>
<Button size="medium">Medium (40px)</Button>
<Button size="large">Large (48px)</Button>`, children: _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Button, { size: "small", children: "Small" }), _jsx(Button, { size: "medium", children: "Medium" }), _jsx(Button, { size: "large", children: "Large" })] }) }), _jsx(ComponentPreview, { title: "Loading & Interactive States", description: "Built-in animated spinner and disabled state.", code: `<Button loading={loading} onClick={() => setLoading(!loading)}>
  {loading ? "Saving..." : "Click to Load"}
</Button>
<Button disabled>Disabled Button</Button>`, children: _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Button, { variant: "primary", loading: loading, onClick: () => {
                                setLoading(true);
                                setTimeout(() => setLoading(false), 2000);
                            }, children: loading ? "Loading..." : "Click for Spinner" }), _jsx(Button, { variant: "secondary", disabled: true, children: "Disabled Button" })] }) })] }));
};
