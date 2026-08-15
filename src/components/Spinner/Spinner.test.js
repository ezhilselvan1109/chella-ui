import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";
describe("Spinner component", () => {
    it("renders with role status and default sr-only label", () => {
        render(_jsx(Spinner, {}));
        const spinner = screen.getByRole("status");
        expect(spinner).toBeInTheDocument();
        expect(screen.getByText("Loading...")).toHaveClass("sr-only");
    });
    it("renders custom label when showLabel is true", () => {
        render(_jsx(Spinner, { showLabel: true, label: "Syncing Telemetry..." }));
        expect(screen.getByText("Syncing Telemetry...", { selector: "span:not(.sr-only)" })).toBeInTheDocument();
    });
    it("renders different size classes", () => {
        const { container, rerender } = render(_jsx(Spinner, { size: "small" }));
        expect(container.querySelector(".size-4")).toBeInTheDocument();
        rerender(_jsx(Spinner, { size: "large" }));
        expect(container.querySelector(".size-8")).toBeInTheDocument();
    });
    it("renders color variant classes", () => {
        const { container } = render(_jsx(Spinner, { variant: "success" }));
        expect(container.querySelector(".text-success")).toBeInTheDocument();
    });
    it("forwards ref to status container", () => {
        const ref = createRef();
        render(_jsx(Spinner, { ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
