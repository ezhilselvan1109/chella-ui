import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const badgeProps = [
    {
        name: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "danger" | "outline"',
        defaultValue: '"primary"',
        description: "Semantic color style.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: "Size dimensions of the badge.",
    },
];
export const BadgeDoc = () => {
    return (_jsx(ComponentDoc, { title: "Badge", description: "Compact indicator used to highlight status, categories, counts, or feature availability.", category: "Data Display", propsData: badgeProps, children: _jsx(ComponentPreview, { title: "Badge Variants", code: `<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="outline">Outline</Badge>`, children: _jsxs("div", { className: "flex flex-wrap gap-2.5", children: [_jsx(Badge, { variant: "primary", children: "Primary" }), _jsx(Badge, { variant: "secondary", children: "Secondary" }), _jsx(Badge, { variant: "success", children: "Active" }), _jsx(Badge, { variant: "warning", children: "Pending" }), _jsx(Badge, { variant: "danger", children: "Failed" }), _jsx(Badge, { variant: "outline", children: "Draft" })] }) }) }));
};
