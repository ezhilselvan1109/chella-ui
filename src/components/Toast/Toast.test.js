import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toast } from "./Toast";
import { ToastProvider, useToast } from "./ToastContext";
describe("Toast component & Provider", () => {
    it("renders toast element with title, description, and status role", () => {
        render(_jsx(Toast, { id: "test-toast", title: "Build Complete", description: "Artifact v1.2.0 deployed to cluster.", variant: "success" }));
        expect(screen.getByRole("status")).toBeInTheDocument();
        expect(screen.getByText("Build Complete")).toBeInTheDocument();
        expect(screen.getByText("Artifact v1.2.0 deployed to cluster.")).toBeInTheDocument();
    });
    it("renders danger variant with alert role", () => {
        render(_jsx(Toast, { id: "error-toast", title: "Deployment Failed", variant: "danger" }));
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText("Deployment Failed")).toBeInTheDocument();
    });
    it("fires onClose when clicking close button", async () => {
        const user = userEvent.setup();
        const handleClose = vi.fn();
        render(_jsx(Toast, { id: "dismissible", title: "Notice", onClose: handleClose }));
        const closeBtn = screen.getByRole("button", { name: "Close notification" });
        await user.click(closeBtn);
        expect(handleClose).toHaveBeenCalled();
    });
    it("fires action button callback", async () => {
        const user = userEvent.setup();
        const handleAction = vi.fn();
        render(_jsx(Toast, { id: "action-toast", title: "Node Deleted", action: { label: "Undo", onClick: handleAction } }));
        const actionBtn = screen.getByRole("button", { name: "Undo" });
        await user.click(actionBtn);
        expect(handleAction).toHaveBeenCalled();
    });
    it("triggers toast notification through useToast hook", async () => {
        const user = userEvent.setup();
        function TestConsumer() {
            const toast = useToast();
            return (_jsxs("div", { children: [_jsx("button", { onClick: () => toast.success("Cluster Created", "Region us-east-1"), children: "Trigger Success" }), _jsx("button", { onClick: () => toast.error("Quota Exceeded"), children: "Trigger Error" }), _jsx("button", { onClick: () => toast.clear(), children: "Clear All" })] }));
        }
        render(_jsx(ToastProvider, { children: _jsx(TestConsumer, {}) }));
        const successBtn = screen.getByRole("button", { name: "Trigger Success" });
        await user.click(successBtn);
        expect(screen.getByText("Cluster Created")).toBeInTheDocument();
        expect(screen.getByText("Region us-east-1")).toBeInTheDocument();
        const errorBtn = screen.getByRole("button", { name: "Trigger Error" });
        await user.click(errorBtn);
        expect(screen.getByText("Quota Exceeded")).toBeInTheDocument();
        const clearBtn = screen.getByRole("button", { name: "Clear All" });
        await user.click(clearBtn);
        expect(screen.queryByText("Cluster Created")).not.toBeInTheDocument();
        expect(screen.queryByText("Quota Exceeded")).not.toBeInTheDocument();
    });
    it("throws error when useToast is used outside provider", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => { });
        function FaultyComponent() {
            useToast();
            return null;
        }
        expect(() => render(_jsx(FaultyComponent, {}))).toThrow("useToast must be used within a <ToastProvider>");
        spy.mockRestore();
    });
});
