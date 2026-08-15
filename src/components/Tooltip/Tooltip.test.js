import { jsx as _jsx } from "react/jsx-runtime";
import { createRef, useState } from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./Tooltip";
describe("Tooltip component", () => {
    it("renders trigger and does not display tooltip initially", () => {
        render(_jsx(Tooltip, { content: "Helper hint", children: _jsx("button", { children: "Trigger" }) }));
        expect(screen.getByRole("button", { name: "Trigger" })).toBeInTheDocument();
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
    it("displays tooltip on hover with delayDuration=0", () => {
        render(_jsx(Tooltip, { content: "Helper hint", delayDuration: 0, children: _jsx("button", { children: "Trigger" }) }));
        const trigger = screen.getByRole("button", { name: "Trigger" });
        fireEvent.mouseEnter(trigger);
        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveTextContent("Helper hint");
        fireEvent.mouseLeave(trigger);
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
    it("displays tooltip on focus and closes on blur", () => {
        render(_jsx(Tooltip, { content: "Focused hint", delayDuration: 0, children: _jsx("button", { children: "Focusable" }) }));
        const trigger = screen.getByRole("button", { name: "Focusable" });
        fireEvent.focus(trigger);
        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveTextContent("Focused hint");
        fireEvent.blur(trigger);
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
    it("closes tooltip when Escape key is pressed", () => {
        render(_jsx(Tooltip, { content: "Dismissible tooltip", delayDuration: 0, children: _jsx("button", { children: "Dismiss me" }) }));
        const trigger = screen.getByRole("button", { name: "Dismiss me" });
        fireEvent.mouseEnter(trigger);
        expect(screen.getByRole("tooltip")).toBeInTheDocument();
        fireEvent.keyDown(trigger, { key: "Escape" });
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
    it("associates trigger with tooltip via aria-describedby", () => {
        const { container } = render(_jsx(Tooltip, { content: "Aria linked tooltip", delayDuration: 0, children: _jsx("button", { children: "Inspect" }) }));
        const trigger = screen.getByRole("button", { name: "Inspect" });
        fireEvent.mouseEnter(trigger);
        const tooltip = screen.getByRole("tooltip");
        expect(container.firstChild).toHaveAttribute("aria-describedby", tooltip.id);
    });
    it("supports controlled open state", () => {
        function ControlledTooltip() {
            const [isOpen, setIsOpen] = useState(true);
            return (_jsx(Tooltip, { content: "Controlled content", open: isOpen, onOpenChange: setIsOpen, children: _jsx("button", { children: "Controlled" }) }));
        }
        render(_jsx(ControlledTooltip, {}));
        expect(screen.getByRole("tooltip")).toHaveTextContent("Controlled content");
    });
    it("does not open when disabled", () => {
        render(_jsx(Tooltip, { content: "Disabled tooltip", disabled: true, delayDuration: 0, children: _jsx("button", { children: "Disabled Target" }) }));
        const trigger = screen.getByRole("button", { name: "Disabled Target" });
        fireEvent.mouseEnter(trigger);
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
    it("forwards ref to outer container", () => {
        const ref = createRef();
        render(_jsx(Tooltip, { ref: ref, content: "Ref tooltip", children: _jsx("button", { children: "Ref button" }) }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
