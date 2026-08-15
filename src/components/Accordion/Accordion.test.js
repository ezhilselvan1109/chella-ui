import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./Accordion";
describe("Accordion component", () => {
    it("renders triggers and expands default value item", () => {
        render(_jsxs(Accordion, { type: "single", defaultValue: "item-1", children: [_jsxs(Accordion.Item, { value: "item-1", children: [_jsx(Accordion.Trigger, { children: "Section 1" }), _jsx(Accordion.Content, { children: "Content 1" })] }), _jsxs(Accordion.Item, { value: "item-2", children: [_jsx(Accordion.Trigger, { children: "Section 2" }), _jsx(Accordion.Content, { children: "Content 2" })] })] }));
        expect(screen.getByRole("button", { name: "Section 1" })).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("button", { name: "Section 2" })).toHaveAttribute("aria-expanded", "false");
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
    });
    it("toggles item when clicked in single mode", async () => {
        const user = userEvent.setup();
        const handleValueChange = vi.fn();
        render(_jsxs(Accordion, { type: "single", collapsible: true, defaultValue: "item-1", onValueChange: handleValueChange, children: [_jsxs(Accordion.Item, { value: "item-1", children: [_jsx(Accordion.Trigger, { children: "Section 1" }), _jsx(Accordion.Content, { children: "Content 1" })] }), _jsxs(Accordion.Item, { value: "item-2", children: [_jsx(Accordion.Trigger, { children: "Section 2" }), _jsx(Accordion.Content, { children: "Content 2" })] })] }));
        const trigger2 = screen.getByRole("button", { name: "Section 2" });
        await user.click(trigger2);
        expect(handleValueChange).toHaveBeenCalledWith("item-2");
        expect(screen.getByText("Content 2")).toBeInTheDocument();
        expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
        // Collapse section 2
        await user.click(trigger2);
        expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
    });
    it("allows multiple items to be expanded in multiple mode", async () => {
        const user = userEvent.setup();
        render(_jsxs(Accordion, { type: "multiple", defaultValue: ["item-1"], children: [_jsxs(Accordion.Item, { value: "item-1", children: [_jsx(Accordion.Trigger, { children: "Section 1" }), _jsx(Accordion.Content, { children: "Content 1" })] }), _jsxs(Accordion.Item, { value: "item-2", children: [_jsx(Accordion.Trigger, { children: "Section 2" }), _jsx(Accordion.Content, { children: "Content 2" })] })] }));
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        const trigger2 = screen.getByRole("button", { name: "Section 2" });
        await user.click(trigger2);
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        expect(screen.getByText("Content 2")).toBeInTheDocument();
    });
    it("does not toggle disabled items", async () => {
        const user = userEvent.setup();
        render(_jsx(Accordion, { type: "single", children: _jsxs(Accordion.Item, { value: "item-1", disabled: true, children: [_jsx(Accordion.Trigger, { children: "Disabled Section" }), _jsx(Accordion.Content, { children: "Disabled Content" })] }) }));
        const trigger = screen.getByRole("button", { name: "Disabled Section" });
        await user.click(trigger);
        expect(screen.queryByText("Disabled Content")).not.toBeInTheDocument();
    });
    it("supports controlled state", () => {
        function ControlledAccordion() {
            const [val, setVal] = useState("item-2");
            return (_jsxs(Accordion, { type: "single", value: val, onValueChange: (v) => setVal(v), children: [_jsxs(Accordion.Item, { value: "item-1", children: [_jsx(Accordion.Trigger, { children: "Section 1" }), _jsx(Accordion.Content, { children: "Content 1" })] }), _jsxs(Accordion.Item, { value: "item-2", children: [_jsx(Accordion.Trigger, { children: "Section 2" }), _jsx(Accordion.Content, { children: "Content 2" })] })] }));
        }
        render(_jsx(ControlledAccordion, {}));
        expect(screen.getByText("Content 2")).toBeInTheDocument();
        expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    });
    it("supports declarative items array", () => {
        render(_jsx(Accordion, { items: [
                { value: "faq-1", title: "Question 1", content: "Answer 1" },
                { value: "faq-2", title: "Question 2", content: "Answer 2" },
            ] }));
        expect(screen.getByRole("button", { name: "Question 1" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Question 2" })).toBeInTheDocument();
    });
    it("forwards ref to container element", () => {
        const ref = createRef();
        render(_jsx(Accordion, { ref: ref, children: _jsxs(Accordion.Item, { value: "1", children: [_jsx(Accordion.Trigger, { children: "Title" }), _jsx(Accordion.Content, { children: "Body" })] }) }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
