export const DOC_NAVIGATION = [
    {
        title: "Getting Started",
        items: [
            { id: "getting-started", title: "Overview & Installation", category: "Getting Started" },
            { id: "theming", title: "Theming & Design Tokens", category: "Getting Started", badge: "Updated" },
        ],
    },
    {
        title: "Forms & Inputs",
        items: [
            { id: "button", title: "Button", category: "Forms & Inputs", badge: "Core" },
            { id: "input", title: "Input", category: "Forms & Inputs" },
            { id: "textarea", title: "Textarea", category: "Forms & Inputs" },
            { id: "checkbox", title: "Checkbox", category: "Forms & Inputs" },
            { id: "switch", title: "Switch", category: "Forms & Inputs" },
            { id: "radio", title: "Radio & RadioGroup", category: "Forms & Inputs" },
            { id: "select", title: "Select", category: "Forms & Inputs" },
            { id: "rating", title: "Rating", category: "Forms & Inputs" },
            { id: "form", title: "Form & FormField", category: "Forms & Inputs" },
        ],
    },
    {
        title: "Data Display",
        items: [
            { id: "badge", title: "Badge", category: "Data Display" },
            { id: "tag", title: "Tag / Chip", category: "Data Display" },
            { id: "avatar", title: "Avatar & AvatarGroup", category: "Data Display" },
            { id: "card", title: "Card", category: "Data Display" },
            { id: "table", title: "Table", category: "Data Display" },
            { id: "timeline", title: "Timeline", category: "Data Display" },
            { id: "statcard", title: "StatCard", category: "Data Display" },
            { id: "kbd", title: "Kbd", category: "Data Display" },
            { id: "emptystate", title: "EmptyState", category: "Data Display" },
            { id: "accordion", title: "Accordion", category: "Data Display" },
            { id: "tabs", title: "Tabs", category: "Data Display" },
        ],
    },
    {
        title: "Feedback & Overlay",
        items: [
            { id: "alert", title: "Alert Banner", category: "Feedback & Overlay" },
            { id: "banner", title: "Banner", category: "Feedback & Overlay" },
            { id: "toast", title: "Toast Notifications", category: "Feedback & Overlay" },
            { id: "modal", title: "Modal / Dialog", category: "Feedback & Overlay" },
            { id: "drawer", title: "Drawer / Sheet", category: "Feedback & Overlay" },
            { id: "popover", title: "Popover", category: "Feedback & Overlay" },
            { id: "tooltip", title: "Tooltip", category: "Feedback & Overlay" },
            { id: "spinner", title: "Spinner", category: "Feedback & Overlay" },
            { id: "skeleton", title: "Skeleton", category: "Feedback & Overlay" },
            { id: "progress", title: "Progress & Gauge", category: "Feedback & Overlay" },
        ],
    },
    {
        title: "Navigation",
        items: [
            { id: "breadcrumb", title: "Breadcrumb", category: "Navigation" },
            { id: "pagination", title: "Pagination", category: "Navigation" },
            { id: "dropdown", title: "Dropdown Menu", category: "Navigation" },
            { id: "command", title: "Command Palette", category: "Navigation", badge: "New" },
        ],
    },
    {
        title: "Layout & Utility",
        items: [
            { id: "divider", title: "Divider / Separator", category: "Layout & Utility" },
        ],
    },
];
export const ALL_NAV_ITEMS = DOC_NAVIGATION.flatMap((group) => group.items);
