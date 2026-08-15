import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./Tabs";
describe("Tabs component", () => {
    it("renders tab triggers and displays initial active tab content", () => {
        render(_jsxs(Tabs, { defaultValue: "account", children: [_jsxs(Tabs.List, { children: [_jsx(Tabs.Trigger, { value: "account", children: "Account" }), _jsx(Tabs.Trigger, { value: "password", children: "Password" })] }), _jsx(Tabs.Content, { value: "account", children: "Account Settings Panel" }), _jsx(Tabs.Content, { value: "password", children: "Password Settings Panel" })] }));
        expect(screen.getByRole("tab", { name: "Account" })).toHaveAttribute("aria-selected", "true");
        expect(screen.getByRole("tab", { name: "Password" })).toHaveAttribute("aria-selected", "false");
        expect(screen.getByText("Account Settings Panel")).toBeInTheDocument();
        expect(screen.queryByText("Password Settings Panel")).not.toBeInTheDocument();
    });
    it("switches active tab when trigger is clicked", async () => {
        const user = userEvent.setup();
        const handleValueChange = vi.fn();
        render(_jsxs(Tabs, { defaultValue: "account", onValueChange: handleValueChange, children: [_jsxs(Tabs.List, { children: [_jsx(Tabs.Trigger, { value: "account", children: "Account" }), _jsx(Tabs.Trigger, { value: "password", children: "Password" })] }), _jsx(Tabs.Content, { value: "account", children: "Account Settings Panel" }), _jsx(Tabs.Content, { value: "password", children: "Password Settings Panel" })] }));
        const passwordTab = screen.getByRole("tab", { name: "Password" });
        await user.click(passwordTab);
        expect(handleValueChange).toHaveBeenCalledWith("password");
        expect(passwordTab).toHaveAttribute("aria-selected", "true");
        expect(screen.getByText("Password Settings Panel")).toBeInTheDocument();
        expect(screen.queryByText("Account Settings Panel")).not.toBeInTheDocument();
    });
    it("does not activate disabled tabs", async () => {
        const user = userEvent.setup();
        const handleValueChange = vi.fn();
        render(_jsxs(Tabs, { defaultValue: "account", onValueChange: handleValueChange, children: [_jsxs(Tabs.List, { children: [_jsx(Tabs.Trigger, { value: "account", children: "Account" }), _jsx(Tabs.Trigger, { value: "billing", disabled: true, children: "Billing (Disabled)" })] }), _jsx(Tabs.Content, { value: "account", children: "Account Settings Panel" }), _jsx(Tabs.Content, { value: "billing", children: "Billing Settings Panel" })] }));
        const billingTab = screen.getByRole("tab", { name: "Billing (Disabled)" });
        await user.click(billingTab);
        expect(handleValueChange).not.toHaveBeenCalled();
        expect(screen.getByText("Account Settings Panel")).toBeInTheDocument();
        expect(screen.queryByText("Billing Settings Panel")).not.toBeInTheDocument();
    });
    it("supports keyboard navigation with Arrow keys", () => {
        render(_jsxs(Tabs, { defaultValue: "tab1", children: [_jsxs(Tabs.List, { children: [_jsx(Tabs.Trigger, { value: "tab1", children: "Tab 1" }), _jsx(Tabs.Trigger, { value: "tab2", children: "Tab 2" }), _jsx(Tabs.Trigger, { value: "tab3", children: "Tab 3" })] }), _jsx(Tabs.Content, { value: "tab1", children: "Content 1" }), _jsx(Tabs.Content, { value: "tab2", children: "Content 2" }), _jsx(Tabs.Content, { value: "tab3", children: "Content 3" })] }));
        const tablist = screen.getByRole("tablist");
        fireEvent.keyDown(tablist, { key: "ArrowRight" });
        expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveAttribute("aria-selected", "true");
        expect(screen.getByText("Content 2")).toBeInTheDocument();
        fireEvent.keyDown(tablist, { key: "ArrowLeft" });
        expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("aria-selected", "true");
    });
    it("supports controlled mode", () => {
        function ControlledTabs() {
            const [val, setVal] = useState("tab2");
            return (_jsxs(Tabs, { value: val, onValueChange: setVal, children: [_jsxs(Tabs.List, { children: [_jsx(Tabs.Trigger, { value: "tab1", children: "Tab 1" }), _jsx(Tabs.Trigger, { value: "tab2", children: "Tab 2" })] }), _jsx(Tabs.Content, { value: "tab1", children: "Panel 1" }), _jsx(Tabs.Content, { value: "tab2", children: "Panel 2" })] }));
        }
        render(_jsx(ControlledTabs, {}));
        expect(screen.getByText("Panel 2")).toBeInTheDocument();
        expect(screen.queryByText("Panel 1")).not.toBeInTheDocument();
    });
    it("supports declarative items array", () => {
        render(_jsx(Tabs, { items: [
                { key: "overview", label: "Overview", children: _jsx("div", { children: "Overview Content" }) },
                { key: "metrics", label: "Metrics", children: _jsx("div", { children: "Metrics Content" }) },
            ] }));
        expect(screen.getByRole("tab", { name: "Overview" })).toBeInTheDocument();
        expect(screen.getByText("Overview Content")).toBeInTheDocument();
    });
    it("forwards ref to container element", () => {
        const ref = createRef();
        render(_jsxs(Tabs, { ref: ref, defaultValue: "1", children: [_jsx(Tabs.List, { children: _jsx(Tabs.Trigger, { value: "1", children: "1" }) }), _jsx(Tabs.Content, { value: "1", children: "1" })] }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
