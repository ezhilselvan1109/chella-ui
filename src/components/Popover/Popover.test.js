import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover } from "./Popover";
describe("Popover component", () => {
    it("renders trigger and does not display content initially", () => {
        render(_jsx(Popover, { content: _jsx("div", { children: "Popover Body" }), children: _jsx("button", { children: "Open Popover" }) }));
        expect(screen.getByRole("button", { name: "Open Popover" })).toBeInTheDocument();
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("opens popover on click and toggles closed on second click", async () => {
        const user = userEvent.setup();
        render(_jsx(Popover, { content: _jsx("div", { children: "Interactive Settings Panel" }), children: _jsx("button", { children: "Toggle Menu" }) }));
        const trigger = screen.getByRole("button", { name: "Toggle Menu" });
        await user.click(trigger);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByText("Interactive Settings Panel")).toBeInTheDocument();
        await user.click(trigger);
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("closes popover when clicking outside", async () => {
        const user = userEvent.setup();
        render(_jsxs("div", { children: [_jsx(Popover, { content: _jsx("div", { children: "Menu Content" }), children: _jsx("button", { children: "Open" }) }), _jsx("button", { children: "Outside Target" })] }));
        const trigger = screen.getByRole("button", { name: "Open" });
        await user.click(trigger);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        const outsideTarget = screen.getByRole("button", { name: "Outside Target" });
        fireEvent.mouseDown(outsideTarget);
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("closes popover on Escape key", async () => {
        const user = userEvent.setup();
        render(_jsx(Popover, { content: _jsx("div", { children: "Escape dismissible" }), children: _jsx("button", { children: "Open Dialog" }) }));
        const trigger = screen.getByRole("button", { name: "Open Dialog" });
        await user.click(trigger);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("closes popover when clicking close button", async () => {
        const user = userEvent.setup();
        render(_jsx(Popover, { showCloseButton: true, content: _jsx("div", { children: "Panel with close button" }), children: _jsx("button", { children: "Open Panel" }) }));
        const trigger = screen.getByRole("button", { name: "Open Panel" });
        await user.click(trigger);
        const closeBtn = screen.getByRole("button", { name: "Close popover" });
        expect(closeBtn).toBeInTheDocument();
        await user.click(closeBtn);
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("supports controlled open state", async () => {
        const handleOpenChange = vi.fn();
        function ControlledDemo() {
            const [isOpen, setIsOpen] = useState(true);
            return (_jsx(Popover, { open: isOpen, onOpenChange: (next) => {
                    setIsOpen(next);
                    handleOpenChange(next);
                }, content: _jsx("div", { children: "Controlled Content" }), children: _jsx("button", { children: "Controlled Trigger" }) }));
        }
        render(_jsx(ControlledDemo, {}));
        expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    it("does not open when disabled", async () => {
        const user = userEvent.setup();
        render(_jsx(Popover, { disabled: true, content: _jsx("div", { children: "Cannot open" }), children: _jsx("button", { children: "Disabled Trigger" }) }));
        const trigger = screen.getByRole("button", { name: "Disabled Trigger" });
        await user.click(trigger);
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    it("forwards ref to outer container", () => {
        const ref = createRef();
        render(_jsx(Popover, { ref: ref, content: _jsx("div", { children: "Ref content" }), children: _jsx("button", { children: "Ref trigger" }) }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
