import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";
import { CheckCircle2 } from "lucide-react";
describe("Timeline component", () => {
    it("renders ordered list element with declarative items", () => {
        const { container } = render(_jsx(Timeline, { items: [
                { title: "Container Built", time: "10:00 AM", description: "Image tagged v1.0.0" },
                { title: "Deploying Service", time: "10:05 AM", status: "processing" },
            ] }));
        expect(container.querySelector("ol")).toBeInTheDocument();
        expect(screen.getByText("Container Built")).toBeInTheDocument();
        expect(screen.getByText("10:00 AM")).toBeInTheDocument();
        expect(screen.getByText("Image tagged v1.0.0")).toBeInTheDocument();
        expect(screen.getByText("Deploying Service")).toBeInTheDocument();
    });
    it("renders compound components with custom icon and status", () => {
        render(_jsx(Timeline, { children: _jsxs(Timeline.Item, { status: "success", icon: _jsx(CheckCircle2, { "data-testid": "check-icon" }), children: [_jsx(Timeline.Time, { children: "12:30 PM" }), _jsx(Timeline.Title, { children: "Backup Completed" }), _jsx(Timeline.Description, { children: "Encrypted snapshot saved to S3 bucket." })] }) }));
        expect(screen.getByTestId("check-icon")).toBeInTheDocument();
        expect(screen.getByText("12:30 PM")).toBeInTheDocument();
        expect(screen.getByText("Backup Completed")).toBeInTheDocument();
        expect(screen.getByText("Encrypted snapshot saved to S3 bucket.")).toBeInTheDocument();
    });
    it("forwards ref to ol container", () => {
        const ref = createRef();
        render(_jsx(Timeline, { ref: ref, items: [{ title: "Event" }] }));
        expect(ref.current).toBeInstanceOf(HTMLOListElement);
    });
});
