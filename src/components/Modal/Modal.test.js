import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./Modal";
import { Button } from "../Button";
describe("Modal component", () => {
    it("does not render dialog when open is false", () => {
        render(_jsx(Modal, { open: false, onClose: vi.fn(), title: "Hidden Modal", children: "Hidden Content" }));
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("renders dialog with title, description, and children when open", () => {
        render(_jsx(Modal, { open: true, onClose: vi.fn(), title: "Confirm Deletion", description: "Are you sure you want to delete this customer?", children: _jsx("p", { children: "This action cannot be undone." }) }));
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
        expect(screen.getByText("Confirm Deletion")).toBeInTheDocument();
        expect(screen.getByText("Are you sure you want to delete this customer?")).toBeInTheDocument();
        expect(screen.getByText("This action cannot be undone.")).toBeInTheDocument();
    });
    it("calls onClose when close 'X' button is clicked", async () => {
        const handleClose = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Modal, { open: true, onClose: handleClose, title: "Test Modal", children: "Content" }));
        const closeButton = screen.getByRole("button", { name: /close dialog/i });
        await user.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
    it("calls onClose when pressing Escape key", async () => {
        const handleClose = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Modal, { open: true, onClose: handleClose, title: "Escape Test", children: "Modal body" }));
        await user.keyboard("{Escape}");
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
    it("renders custom footer actions", () => {
        render(_jsx(Modal, { open: true, onClose: vi.fn(), title: "Action Modal", footer: _jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", children: "Cancel" }), _jsx(Button, { variant: "danger", children: "Confirm" })] }), children: "Modal content" }));
        expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /confirm/i })).toBeInTheDocument();
    });
});
