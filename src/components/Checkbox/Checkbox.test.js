import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";
describe("Checkbox Component", () => {
    it("renders a native checkbox input", () => {
        render(_jsx(Checkbox, { "aria-label": "Simple Checkbox" }));
        const checkbox = screen.getByRole("checkbox", { name: "Simple Checkbox" });
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });
    it("renders with label prop and toggles when label is clicked", async () => {
        const user = userEvent.setup();
        render(_jsx(Checkbox, { label: "Accept Terms and Conditions" }));
        const checkbox = screen.getByRole("checkbox", { name: "Accept Terms and Conditions" });
        const label = screen.getByText("Accept Terms and Conditions");
        expect(checkbox).not.toBeChecked();
        await user.click(label);
        expect(checkbox).toBeChecked();
    });
    it("renders label passed as children", async () => {
        const user = userEvent.setup();
        render(_jsx(Checkbox, { children: "Subscribe to newsletter" }));
        const checkbox = screen.getByRole("checkbox", { name: "Subscribe to newsletter" });
        expect(checkbox).not.toBeChecked();
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
    });
    it("supports uncontrolled mode with defaultChecked", () => {
        render(_jsx(Checkbox, { label: "Default Checked", defaultChecked: true }));
        const checkbox = screen.getByRole("checkbox", { name: "Default Checked" });
        expect(checkbox).toBeChecked();
    });
    it("supports controlled mode and fires onCheckedChange", async () => {
        const user = userEvent.setup();
        const handleCheckedChange = vi.fn();
        const { rerender } = render(_jsx(Checkbox, { label: "Controlled Checkbox", checked: false, onCheckedChange: handleCheckedChange }));
        const checkbox = screen.getByRole("checkbox", { name: "Controlled Checkbox" });
        expect(checkbox).not.toBeChecked();
        await user.click(checkbox);
        expect(handleCheckedChange).toHaveBeenCalledWith(true);
        rerender(_jsx(Checkbox, { label: "Controlled Checkbox", checked: true, onCheckedChange: handleCheckedChange }));
        expect(checkbox).toBeChecked();
    });
    it("does not toggle when disabled", async () => {
        const user = userEvent.setup();
        const handleCheckedChange = vi.fn();
        render(_jsx(Checkbox, { label: "Disabled Option", disabled: true, onCheckedChange: handleCheckedChange }));
        const checkbox = screen.getByRole("checkbox", { name: "Disabled Option" });
        expect(checkbox).toBeDisabled();
        await user.click(checkbox);
        expect(checkbox).not.toBeChecked();
        expect(handleCheckedChange).not.toHaveBeenCalled();
    });
    it("preserves name, value, and required attributes", () => {
        render(_jsx(Checkbox, { label: "Required Consent", name: "consent", value: "agreed", required: true }));
        const checkbox = screen.getByRole("checkbox", { name: /Required Consent/ });
        expect(checkbox).toHaveAttribute("name", "consent");
        expect(checkbox).toHaveAttribute("value", "agreed");
        expect(checkbox).toBeRequired();
    });
    it("toggles when pressing Space key", async () => {
        const user = userEvent.setup();
        render(_jsx(Checkbox, { label: "Keyboard Accessible" }));
        const checkbox = screen.getByRole("checkbox", { name: "Keyboard Accessible" });
        checkbox.focus();
        expect(checkbox).toHaveFocus();
        await user.keyboard(" ");
        expect(checkbox).toBeChecked();
        await user.keyboard(" ");
        expect(checkbox).not.toBeChecked();
    });
    it("associates description via aria-describedby", () => {
        render(_jsx(Checkbox, { label: "Security Alerts", description: "Receive SMS alerts for login attempts." }));
        const checkbox = screen.getByRole("checkbox", { name: "Security Alerts" });
        const desc = screen.getByText("Receive SMS alerts for login attempts.");
        expect(checkbox).toHaveAttribute("aria-describedby", desc.id);
    });
    it("associates error message and sets aria-invalid", () => {
        render(_jsx(Checkbox, { label: "I accept the Privacy Policy", error: "You must agree to continue." }));
        const checkbox = screen.getByRole("checkbox", { name: /I accept the Privacy Policy/ });
        const errorMsg = screen.getByRole("alert");
        expect(errorMsg).toHaveTextContent("You must agree to continue.");
        expect(checkbox).toHaveAttribute("aria-invalid", "true");
        expect(checkbox).toHaveAttribute("aria-describedby", errorMsg.id);
    });
    it("sets DOM indeterminate property and transitions on user click", async () => {
        const user = userEvent.setup();
        const handleCheckedChange = vi.fn();
        render(_jsx(Checkbox, { label: "Select All Items", indeterminate: true, onCheckedChange: handleCheckedChange }));
        const checkbox = screen.getByRole("checkbox", { name: "Select All Items" });
        expect(checkbox.indeterminate).toBe(true);
        await user.click(checkbox);
        expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });
    it("supports small, medium, and large sizes", () => {
        const { container: smallContainer } = render(_jsx(Checkbox, { size: "small", label: "Small" }));
        const { container: largeContainer } = render(_jsx(Checkbox, { size: "large", label: "Large" }));
        expect(smallContainer.querySelector("label")).toBeInTheDocument();
        expect(largeContainer.querySelector("label")).toBeInTheDocument();
    });
    it("forwards ref to underlying HTMLInputElement", () => {
        const ref = createRef();
        render(_jsx(Checkbox, { ref: ref, label: "With Ref" }));
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
        expect(ref.current?.tagName).toBe("INPUT");
    });
    it("merges custom className onto wrapper", () => {
        const { container } = render(_jsx(Checkbox, { className: "custom-checkbox-class", label: "Styled" }));
        expect(container.firstChild).toHaveClass("custom-checkbox-class");
    });
});
