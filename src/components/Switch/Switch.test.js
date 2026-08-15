import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./Switch";
describe("Switch Component", () => {
    it("renders with role='switch'", () => {
        render(_jsx(Switch, { "aria-label": "Dark Mode Toggle" }));
        const switchEl = screen.getByRole("switch", { name: "Dark Mode Toggle" });
        expect(switchEl).toBeInTheDocument();
        expect(switchEl).not.toBeChecked();
        expect(switchEl).toHaveAttribute("aria-checked", "false");
    });
    it("renders with label prop and toggles when label is clicked", async () => {
        const user = userEvent.setup();
        render(_jsx(Switch, { label: "Enable Push Notifications" }));
        const switchEl = screen.getByRole("switch", { name: "Enable Push Notifications" });
        const label = screen.getByText("Enable Push Notifications");
        expect(switchEl).not.toBeChecked();
        expect(switchEl).toHaveAttribute("aria-checked", "false");
        await user.click(label);
        expect(switchEl).toBeChecked();
        expect(switchEl).toHaveAttribute("aria-checked", "true");
    });
    it("renders label passed as children", async () => {
        const user = userEvent.setup();
        render(_jsx(Switch, { children: "Auto-Save Progress" }));
        const switchEl = screen.getByRole("switch", { name: "Auto-Save Progress" });
        expect(switchEl).not.toBeChecked();
        await user.click(switchEl);
        expect(switchEl).toBeChecked();
    });
    it("supports uncontrolled mode with defaultChecked", () => {
        render(_jsx(Switch, { label: "Default On", defaultChecked: true }));
        const switchEl = screen.getByRole("switch", { name: "Default On" });
        expect(switchEl).toBeChecked();
        expect(switchEl).toHaveAttribute("aria-checked", "true");
    });
    it("supports controlled mode and fires onCheckedChange", async () => {
        const user = userEvent.setup();
        const handleCheckedChange = vi.fn();
        const { rerender } = render(_jsx(Switch, { label: "Airplane Mode", checked: false, onCheckedChange: handleCheckedChange }));
        const switchEl = screen.getByRole("switch", { name: "Airplane Mode" });
        expect(switchEl).not.toBeChecked();
        await user.click(switchEl);
        expect(handleCheckedChange).toHaveBeenCalledWith(true);
        rerender(_jsx(Switch, { label: "Airplane Mode", checked: true, onCheckedChange: handleCheckedChange }));
        expect(switchEl).toBeChecked();
        expect(switchEl).toHaveAttribute("aria-checked", "true");
    });
    it("does not toggle when disabled and prevents callback invocation", async () => {
        const user = userEvent.setup();
        const handleCheckedChange = vi.fn();
        render(_jsx(Switch, { label: "Feature Unavailable", disabled: true, onCheckedChange: handleCheckedChange }));
        const switchEl = screen.getByRole("switch", { name: "Feature Unavailable" });
        expect(switchEl).toBeDisabled();
        await user.click(switchEl);
        expect(switchEl).not.toBeChecked();
        expect(handleCheckedChange).not.toHaveBeenCalled();
    });
    it("preserves name, value, and required attributes", () => {
        render(_jsx(Switch, { label: "Required Consent", name: "optIn", value: "true", required: true }));
        const switchEl = screen.getByRole("switch", { name: /Required Consent/ });
        expect(switchEl).toHaveAttribute("name", "optIn");
        expect(switchEl).toHaveAttribute("value", "true");
        expect(switchEl).toBeRequired();
    });
    it("toggles correctly using keyboard Space key", async () => {
        const user = userEvent.setup();
        render(_jsx(Switch, { label: "Keyboard Toggle" }));
        const switchEl = screen.getByRole("switch", { name: "Keyboard Toggle" });
        switchEl.focus();
        expect(switchEl).toHaveFocus();
        await user.keyboard(" ");
        expect(switchEl).toBeChecked();
        expect(switchEl).toHaveAttribute("aria-checked", "true");
        await user.keyboard(" ");
        expect(switchEl).not.toBeChecked();
        expect(switchEl).toHaveAttribute("aria-checked", "false");
    });
    it("associates description via aria-describedby", () => {
        render(_jsx(Switch, { label: "Weekly Digest", description: "Receive weekly summaries of team activities." }));
        const switchEl = screen.getByRole("switch", { name: "Weekly Digest" });
        const desc = screen.getByText("Receive weekly summaries of team activities.");
        expect(switchEl).toHaveAttribute("aria-describedby", desc.id);
    });
    it("associates error message and sets aria-invalid", () => {
        render(_jsx(Switch, { label: "Cloud Backup", error: "Storage quota exceeded for cloud backup." }));
        const switchEl = screen.getByRole("switch", { name: /Cloud Backup/ });
        const errorMsg = screen.getByRole("alert");
        expect(errorMsg).toHaveTextContent("Storage quota exceeded for cloud backup.");
        expect(switchEl).toHaveAttribute("aria-invalid", "true");
        expect(switchEl).toHaveAttribute("aria-describedby", errorMsg.id);
    });
    it("supports small, medium, and large sizes", () => {
        const { container: smallContainer } = render(_jsx(Switch, { size: "small", label: "Small" }));
        const { container: largeContainer } = render(_jsx(Switch, { size: "large", label: "Large" }));
        expect(smallContainer.querySelector("label")).toBeInTheDocument();
        expect(largeContainer.querySelector("label")).toBeInTheDocument();
    });
    it("forwards ref to underlying HTMLInputElement", () => {
        const ref = createRef();
        render(_jsx(Switch, { ref: ref, label: "With Ref" }));
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
        expect(ref.current?.tagName).toBe("INPUT");
        expect(ref.current?.getAttribute("role")).toBe("switch");
    });
    it("merges custom className onto root container", () => {
        const { container } = render(_jsx(Switch, { className: "custom-switch-container", label: "Styled" }));
        expect(container.firstChild).toHaveClass("custom-switch-container");
    });
});
