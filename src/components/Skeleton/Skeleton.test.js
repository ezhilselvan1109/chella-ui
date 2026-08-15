import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";
describe("Skeleton component", () => {
    it("renders with role status and aria-busy", () => {
        render(_jsx(Skeleton, {}));
        const el = screen.getByRole("status");
        expect(el).toBeInTheDocument();
        expect(el).toHaveAttribute("aria-busy", "true");
    });
    it("applies width and height dimensions correctly", () => {
        render(_jsx(Skeleton, { width: 200, height: 40, "data-testid": "sized-skeleton" }));
        const el = screen.getByTestId("sized-skeleton");
        expect(el).toHaveStyle({ width: "200px", height: "40px" });
    });
    it("renders multiple text lines when lines > 1", () => {
        const { container } = render(_jsx(Skeleton, { variant: "text", lines: 3 }));
        const lines = container.querySelectorAll(".h-4");
        expect(lines.length).toBe(3);
    });
    it("renders circular variant", () => {
        render(_jsx(Skeleton, { variant: "circular", width: 48, height: 48, "data-testid": "circle-skeleton" }));
        const el = screen.getByTestId("circle-skeleton");
        expect(el).toHaveClass("rounded-full");
    });
    it("supports conditional wrapper mode", () => {
        const { rerender } = render(_jsx(Skeleton, { loading: true, children: _jsx("div", { "data-testid": "loaded-content", children: "Real User Profile" }) }));
        expect(screen.getByRole("status")).toBeInTheDocument();
        expect(screen.queryByTestId("loaded-content")).not.toBeInTheDocument();
        rerender(_jsx(Skeleton, { loading: false, children: _jsx("div", { "data-testid": "loaded-content", children: "Real User Profile" }) }));
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
        expect(screen.getByTestId("loaded-content")).toBeInTheDocument();
    });
    it("forwards ref to container element", () => {
        const ref = createRef();
        render(_jsx(Skeleton, { ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
