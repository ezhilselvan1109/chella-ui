import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";
import { CircularProgress } from "./CircularProgress";
describe("Progress & CircularProgress component", () => {
    it("renders linear progress with role progressbar and aria-valuenow", () => {
        render(_jsx(Progress, { value: 45, max: 100 }));
        const bar = screen.getByRole("progressbar");
        expect(bar).toBeInTheDocument();
        expect(bar).toHaveAttribute("aria-valuenow", "45");
        expect(bar).toHaveAttribute("aria-valuemax", "100");
    });
    it("renders label and percentage when showLabel is enabled", () => {
        render(_jsx(Progress, { value: 75, showLabel: true, label: "Upload Progress" }));
        expect(screen.getByText("Upload Progress")).toBeInTheDocument();
        expect(screen.getByText("75%")).toBeInTheDocument();
    });
    it("renders indeterminate linear progress without aria-valuenow", () => {
        render(_jsx(Progress, { indeterminate: true }));
        const bar = screen.getByRole("progressbar");
        expect(bar).toBeInTheDocument();
        expect(bar).not.toHaveAttribute("aria-valuenow");
    });
    it("renders CircularProgress with correct aria-valuenow and svg circle", () => {
        const { container } = render(_jsx(CircularProgress, { value: 60, showLabel: true }));
        const progress = screen.getByRole("progressbar");
        expect(progress).toHaveAttribute("aria-valuenow", "60");
        expect(screen.getByText("60%")).toBeInTheDocument();
        expect(container.querySelector("circle")).toBeInTheDocument();
    });
    it("renders indeterminate CircularProgress spinner", () => {
        render(_jsx(CircularProgress, { indeterminate: true }));
        const progress = screen.getByRole("progressbar");
        expect(progress).not.toHaveAttribute("aria-valuenow");
    });
    it("forwards ref to Progress container", () => {
        const ref = createRef();
        render(_jsx(Progress, { ref: ref, value: 50 }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
    it("forwards ref to CircularProgress container", () => {
        const ref = createRef();
        render(_jsx(CircularProgress, { ref: ref, value: 50 }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
