import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";
import { FolderSearch } from "lucide-react";
describe("EmptyState component", () => {
    it("renders with role status and shorthand props", () => {
        render(_jsx(EmptyState, { icon: _jsx(FolderSearch, { "data-testid": "empty-icon" }), title: "No Results Found", description: "Try adjusting your filter criteria.", action: _jsx("button", { children: "Reset Filters" }) }));
        expect(screen.getByRole("status")).toBeInTheDocument();
        expect(screen.getByTestId("empty-icon")).toBeInTheDocument();
        expect(screen.getByText("No Results Found")).toBeInTheDocument();
        expect(screen.getByText("Try adjusting your filter criteria.")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Reset Filters" })).toBeInTheDocument();
    });
    it("renders compound components", () => {
        render(_jsxs(EmptyState, { variant: "dashed", children: [_jsx(EmptyState.Icon, { children: _jsx(FolderSearch, { "data-testid": "compound-icon" }) }), _jsx(EmptyState.Title, { children: "No Deployments" }), _jsx(EmptyState.Description, { children: "Create your first container deployment." }), _jsx(EmptyState.Action, { children: _jsx("button", { children: "Deploy Now" }) })] }));
        expect(screen.getByTestId("compound-icon")).toBeInTheDocument();
        expect(screen.getByText("No Deployments")).toBeInTheDocument();
        expect(screen.getByText("Create your first container deployment.")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Deploy Now" })).toBeInTheDocument();
    });
    it("renders card and dashed variant classes", () => {
        const { container, rerender } = render(_jsx(EmptyState, { variant: "card", title: "Card" }));
        expect(container.querySelector(".bg-card")).toBeInTheDocument();
        rerender(_jsx(EmptyState, { variant: "dashed", title: "Dashed" }));
        expect(container.querySelector(".border-dashed")).toBeInTheDocument();
    });
    it("forwards ref to empty state container", () => {
        const ref = createRef();
        render(_jsx(EmptyState, { ref: ref, title: "Ref Test" }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
