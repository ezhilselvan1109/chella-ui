import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Command } from "./Command";
describe("Command component", () => {
    it("renders search input, groups, items, and shortcuts", () => {
        render(_jsxs(Command, { children: [_jsx(Command.Input, { placeholder: "Search actions..." }), _jsx(Command.List, { children: _jsxs(Command.Group, { heading: "Navigation", children: [_jsx(Command.Item, { shortcut: "\u2318D", children: "Dashboard" }), _jsx(Command.Item, { shortcut: "\u2318S", children: "Settings" })] }) })] }));
        expect(screen.getByRole("searchbox")).toBeInTheDocument();
        expect(screen.getByText("Dashboard")).toBeInTheDocument();
        expect(screen.getByText("Settings")).toBeInTheDocument();
        expect(screen.getByText("⌘D")).toBeInTheDocument();
    });
    it("filters items when typing into search input and shows empty state", async () => {
        const user = userEvent.setup();
        render(_jsxs(Command, { children: [_jsx(Command.Input, {}), _jsxs(Command.List, { children: [_jsx(Command.Empty, { children: "No results" }), _jsxs(Command.Group, { heading: "Services", children: [_jsx(Command.Item, { children: "Auth Service" }), _jsx(Command.Item, { children: "Billing Service" })] })] })] }));
        const input = screen.getByRole("searchbox");
        await user.type(input, "Billing");
        expect(screen.getByText("Billing Service")).toBeInTheDocument();
        expect(screen.queryByText("Auth Service")).not.toBeInTheDocument();
        await user.type(input, "xyznonexistent");
        expect(screen.getByText("No results")).toBeInTheDocument();
    });
    it("handles item selection on click and on Enter key", async () => {
        const handleSelect = vi.fn();
        const user = userEvent.setup();
        render(_jsxs(Command, { children: [_jsx(Command.Input, {}), _jsx(Command.List, { children: _jsx(Command.Group, { children: _jsx(Command.Item, { onSelect: handleSelect, children: "Deploy Cluster" }) }) })] }));
        const item = screen.getByText("Deploy Cluster");
        await user.click(item);
        expect(handleSelect).toHaveBeenCalledTimes(1);
        const combobox = screen.getByRole("combobox");
        fireEvent.keyDown(combobox, { key: "Enter" });
        expect(handleSelect).toHaveBeenCalledTimes(2);
    });
    it("forwards ref to command root container", () => {
        const ref = createRef();
        render(_jsx(Command, { ref: ref, children: _jsx(Command.Input, {}) }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
