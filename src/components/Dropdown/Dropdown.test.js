import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown";
describe("Dropdown component", () => {
    it("renders trigger and does not display menu initially", () => {
        render(_jsx(Dropdown, { trigger: _jsx("button", { children: "Actions" }), items: [
                { key: "1", label: "Edit" },
                { key: "2", label: "Delete" },
            ] }));
        expect(screen.getByRole("button", { name: "Actions" })).toBeInTheDocument();
        expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    it("opens menu on trigger click and fires item callback on select", async () => {
        const user = userEvent.setup();
        const handleEdit = vi.fn();
        render(_jsx(Dropdown, { trigger: _jsx("button", { children: "Manage Record" }), items: [
                { key: "edit", label: "Edit Record", onClick: handleEdit },
                { key: "archive", label: "Archive Record" },
            ] }));
        const trigger = screen.getByRole("button", { name: "Manage Record" });
        await user.click(trigger);
        expect(screen.getByRole("menu")).toBeInTheDocument();
        const editItem = screen.getByText("Edit Record");
        await user.click(editItem);
        expect(handleEdit).toHaveBeenCalled();
        expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    it("does not trigger callback on disabled items", async () => {
        const user = userEvent.setup();
        const handleDisabled = vi.fn();
        render(_jsx(Dropdown, { trigger: _jsx("button", { children: "Options" }), items: [
                { key: "dis", label: "Unavailable Option", disabled: true, onClick: handleDisabled },
            ] }));
        const trigger = screen.getByRole("button", { name: "Options" });
        await user.click(trigger);
        const disabledItem = screen.getByText("Unavailable Option");
        await user.click(disabledItem);
        expect(handleDisabled).not.toHaveBeenCalled();
    });
    it("closes menu when clicking outside", async () => {
        const user = userEvent.setup();
        render(_jsxs("div", { children: [_jsx(Dropdown, { trigger: _jsx("button", { children: "Open Menu" }), items: [{ key: "1", label: "Item 1" }] }), _jsx("button", { children: "Outside" })] }));
        const trigger = screen.getByRole("button", { name: "Open Menu" });
        await user.click(trigger);
        expect(screen.getByRole("menu")).toBeInTheDocument();
        fireEvent.mouseDown(screen.getByRole("button", { name: "Outside" }));
        expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    it("closes menu on Escape key", async () => {
        const user = userEvent.setup();
        render(_jsx(Dropdown, { trigger: _jsx("button", { children: "Open Menu" }), items: [{ key: "1", label: "Item 1" }] }));
        const trigger = screen.getByRole("button", { name: "Open Menu" });
        await user.click(trigger);
        expect(screen.getByRole("menu")).toBeInTheDocument();
        fireEvent.keyDown(screen.getByRole("menu"), { key: "Escape" });
        expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    it("supports compound component syntax", async () => {
        const user = userEvent.setup();
        const handleDelete = vi.fn();
        render(_jsxs(Dropdown, { trigger: _jsx("button", { children: "Compound Menu" }), children: [_jsx(Dropdown.Header, { children: "Actions" }), _jsx(Dropdown.Item, { children: "Duplicate" }), _jsx(Dropdown.Divider, {}), _jsx(Dropdown.Item, { variant: "danger", onClick: handleDelete, children: "Delete Forever" })] }));
        const trigger = screen.getByRole("button", { name: "Compound Menu" });
        await user.click(trigger);
        expect(screen.getByText("Actions")).toBeInTheDocument();
        const deleteItem = screen.getByText("Delete Forever");
        expect(deleteItem).toBeInTheDocument();
        await user.click(deleteItem);
        expect(handleDelete).toHaveBeenCalled();
    });
    it("supports controlled open mode", () => {
        function ControlledDropdown() {
            const [isOpen, setIsOpen] = useState(true);
            return (_jsx(Dropdown, { open: isOpen, onOpenChange: setIsOpen, trigger: _jsx("button", { children: "Controlled Trigger" }), items: [{ key: "1", label: "Active Item" }] }));
        }
        render(_jsx(ControlledDropdown, {}));
        expect(screen.getByRole("menu")).toBeInTheDocument();
    });
    it("forwards ref to container element", () => {
        const ref = createRef();
        render(_jsx(Dropdown, { ref: ref, trigger: _jsx("button", { children: "Ref Dropdown" }), items: [{ key: "1", label: "Item" }] }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
