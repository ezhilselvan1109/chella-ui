import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Pagination } from "./Pagination";
const meta = {
    title: "Components/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => {
        const [page, setPage] = useState(4);
        return (_jsxs("div", { className: "space-y-4 text-center", children: [_jsxs("div", { className: "text-sm text-muted-foreground", children: ["Current Active Page: ", page] }), _jsx(Pagination, { page: page, totalPages: 15, showEdges: true, onPageChange: setPage })] }));
    },
};
export const Variants = {
    render: () => (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Default Variant" }), _jsx(Pagination, { totalPages: 8, page: 3 })] }), _jsxs("div", { children: [_jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Outline Variant" }), _jsx(Pagination, { variant: "outline", totalPages: 8, page: 3 })] }), _jsxs("div", { children: [_jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Pills Variant" }), _jsx(Pagination, { variant: "pills", totalPages: 8, page: 3 })] })] })),
};
