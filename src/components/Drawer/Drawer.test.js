import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Drawer } from "./Drawer";
describe("Drawer component", () => {
    it("does not render dialog content when open is false", () => {
        render(_jsx(Drawer, { open: false, onClose: vi.fn(), children: _jsx(Drawer.Header, { children: _jsx(Drawer.Title, { children: "Settings" }) }) }));
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("renders with role dialog, aria-modal, and compound elements when open is true", () => {
        render(_jsxs(Drawer, { open: true, onClose: vi.fn(), children: [_jsxs(Drawer.Header, { children: [_jsx(Drawer.Title, { children: "Cluster Settings" }), _jsx(Drawer.Description, { children: "Configure networking" })] }), _jsx(Drawer.Body, { children: _jsx("div", { children: "Main form content" }) }), _jsx(Drawer.Footer, { children: _jsx("button", { children: "Save" }) })] }));
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveAttribute("aria-modal", "true");
        expect(screen.getByText("Cluster Settings")).toBeInTheDocument();
        expect(screen.getByText("Configure networking")).toBeInTheDocument();
        expect(screen.getByText("Main form content")).toBeInTheDocument();
    });
    it("calls onClose when close button is clicked", async () => {
        const handleClose = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Drawer, { open: true, onClose: handleClose, children: _jsx(Drawer.Header, { children: _jsx(Drawer.Title, { children: "Title" }) }) }));
        const closeBtn = screen.getByRole("button", { name: "Close drawer" });
        await user.click(closeBtn);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
    it("calls onClose when overlay backdrop is clicked", async () => {
        const handleClose = vi.fn();
        const user = userEvent.setup();
        const { container } = render(_jsx(Drawer, { open: true, onClose: handleClose, children: _jsx(Drawer.Header, { children: _jsx(Drawer.Title, { children: "Title" }) }) }));
        const backdrop = container.querySelector(".fixed.inset-0.z-50.bg-black\\/60");
        if (backdrop) {
            await user.click(backdrop);
            expect(handleClose).toHaveBeenCalledTimes(1);
        }
    });
    it("calls onClose when Escape key is pressed", () => {
        const handleClose = vi.fn();
        render(_jsx(Drawer, { open: true, onClose: handleClose, children: _jsx(Drawer.Header, { children: _jsx(Drawer.Title, { children: "Title" }) }) }));
        fireEvent.keyDown(window, { key: "Escape" });
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
    it("forwards ref to Drawer content element", () => {
        const ref = createRef();
        render(_jsx(Drawer, { ref: ref, open: true, onClose: vi.fn(), children: _jsx(Drawer.Header, { children: _jsx(Drawer.Title, { children: "Ref Title" }) }) }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
