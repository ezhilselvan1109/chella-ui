import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "./Alert";
import { Shield } from "lucide-react";
describe("Alert component", () => {
    it("renders with role status for default/info variant and role alert for danger", () => {
        const { rerender } = render(_jsx(Alert, { title: "Information Note" }));
        expect(screen.getByRole("status")).toBeInTheDocument();
        rerender(_jsx(Alert, { variant: "danger", title: "Fatal Error" }));
        expect(screen.getByRole("alert")).toBeInTheDocument();
    });
    it("renders compound Title and Description", () => {
        render(_jsxs(Alert, { variant: "warning", children: [_jsx(Alert.Title, { children: "Node Eviction Warning" }), _jsx(Alert.Description, { children: "Memory pressure detected on worker-04." })] }));
        expect(screen.getByText("Node Eviction Warning")).toBeInTheDocument();
        expect(screen.getByText("Memory pressure detected on worker-04.")).toBeInTheDocument();
    });
    it("renders shorthand title and description props", () => {
        render(_jsx(Alert, { variant: "success", title: "Deployment Complete", description: "All pods healthy." }));
        expect(screen.getByText("Deployment Complete")).toBeInTheDocument();
        expect(screen.getByText("All pods healthy.")).toBeInTheDocument();
    });
    it("renders custom icon or hides icon when icon={false}", () => {
        const { rerender } = render(_jsx(Alert, { icon: _jsx(Shield, { "data-testid": "custom-shield" }), title: "Secure" }));
        expect(screen.getByTestId("custom-shield")).toBeInTheDocument();
        rerender(_jsx(Alert, { icon: false, title: "No Icon" }));
        expect(screen.queryByTestId("custom-shield")).not.toBeInTheDocument();
    });
    it("handles dismissal with closable prop", async () => {
        const handleClose = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Alert, { closable: true, onClose: handleClose, title: "Dismissable Banner" }));
        const closeBtn = screen.getByRole("button", { name: "Dismiss alert" });
        await user.click(closeBtn);
        expect(handleClose).toHaveBeenCalledTimes(1);
        expect(screen.queryByText("Dismissable Banner")).not.toBeInTheDocument();
    });
    it("renders action slot", () => {
        render(_jsx(Alert, { title: "Backup Complete", action: _jsx("button", { "data-testid": "alert-action", children: "View Logs" }) }));
        expect(screen.getByTestId("alert-action")).toBeInTheDocument();
    });
    it("forwards ref to Alert container", () => {
        const ref = createRef();
        render(_jsx(Alert, { ref: ref, title: "Ref Alert" }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
