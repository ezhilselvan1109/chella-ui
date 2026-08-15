import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
describe("RadioGroup Component", () => {
    it("renders with role='radiogroup' and children", () => {
        render(_jsxs(RadioGroup, { "aria-label": "Plan Selection", children: [_jsx(Radio, { value: "starter", label: "Starter" }), _jsx(Radio, { value: "pro", label: "Pro" }), _jsx(Radio, { value: "enterprise", label: "Enterprise" })] }));
        const group = screen.getByRole("radiogroup", { name: "Plan Selection" });
        expect(group).toBeInTheDocument();
        const radios = screen.getAllByRole("radio");
        expect(radios).toHaveLength(3);
    });
    it("selects correct radio with defaultValue in uncontrolled mode", () => {
        render(_jsxs(RadioGroup, { defaultValue: "pro", "aria-label": "Plans", children: [_jsx(Radio, { value: "starter", label: "Starter" }), _jsx(Radio, { value: "pro", label: "Pro" }), _jsx(Radio, { value: "enterprise", label: "Enterprise" })] }));
        expect(screen.getByRole("radio", { name: "Starter" })).not.toBeChecked();
        expect(screen.getByRole("radio", { name: "Pro" })).toBeChecked();
        expect(screen.getByRole("radio", { name: "Enterprise" })).not.toBeChecked();
    });
    it("coordinates selection so only one radio is checked at a time", async () => {
        const user = userEvent.setup();
        const handleValueChange = vi.fn();
        render(_jsxs(RadioGroup, { defaultValue: "starter", onValueChange: handleValueChange, "aria-label": "Plans", children: [_jsx(Radio, { value: "starter", label: "Starter" }), _jsx(Radio, { value: "pro", label: "Pro" }), _jsx(Radio, { value: "enterprise", label: "Enterprise" })] }));
        const starter = screen.getByRole("radio", { name: "Starter" });
        const pro = screen.getByRole("radio", { name: "Pro" });
        expect(starter).toBeChecked();
        expect(pro).not.toBeChecked();
        await user.click(pro);
        expect(handleValueChange).toHaveBeenCalledWith("pro");
        expect(pro).toBeChecked();
        expect(starter).not.toBeChecked();
    });
    it("supports controlled mode with value and onValueChange", async () => {
        const user = userEvent.setup();
        const handleValueChange = vi.fn();
        function ControlledGroup() {
            const [val, setVal] = useState("starter");
            return (_jsxs(RadioGroup, { value: val, onValueChange: (next) => {
                    setVal(next);
                    handleValueChange(next);
                }, "aria-label": "Controlled Plans", children: [_jsx(Radio, { value: "starter", label: "Starter" }), _jsx(Radio, { value: "pro", label: "Pro" })] }));
        }
        render(_jsx(ControlledGroup, {}));
        const starter = screen.getByRole("radio", { name: "Starter" });
        const pro = screen.getByRole("radio", { name: "Pro" });
        expect(starter).toBeChecked();
        expect(pro).not.toBeChecked();
        await user.click(pro);
        expect(handleValueChange).toHaveBeenCalledWith("pro");
        expect(pro).toBeChecked();
        expect(starter).not.toBeChecked();
    });
    it("disables all child radios when group is disabled", async () => {
        const user = userEvent.setup();
        const handleValueChange = vi.fn();
        render(_jsxs(RadioGroup, { disabled: true, defaultValue: "starter", onValueChange: handleValueChange, "aria-label": "Disabled Group", children: [_jsx(Radio, { value: "starter", label: "Starter" }), _jsx(Radio, { value: "pro", label: "Pro" })] }));
        const starter = screen.getByRole("radio", { name: "Starter" });
        const pro = screen.getByRole("radio", { name: "Pro" });
        expect(starter).toBeDisabled();
        expect(pro).toBeDisabled();
        await user.click(pro);
        expect(handleValueChange).not.toHaveBeenCalled();
        expect(starter).toBeChecked();
        expect(pro).not.toBeChecked();
    });
    it("respects individual disabled radio inside enabled group", async () => {
        const user = userEvent.setup();
        const handleValueChange = vi.fn();
        render(_jsxs(RadioGroup, { defaultValue: "starter", onValueChange: handleValueChange, "aria-label": "Group", children: [_jsx(Radio, { value: "starter", label: "Starter" }), _jsx(Radio, { value: "enterprise", label: "Enterprise", disabled: true })] }));
        const enterprise = screen.getByRole("radio", { name: "Enterprise" });
        expect(enterprise).toBeDisabled();
        await user.click(enterprise);
        expect(handleValueChange).not.toHaveBeenCalled();
    });
    it("associates group label with aria-labelledby", () => {
        render(_jsxs(RadioGroup, { label: "Deployment Environment", children: [_jsx(Radio, { value: "dev", label: "Development" }), _jsx(Radio, { value: "prod", label: "Production" })] }));
        const group = screen.getByRole("radiogroup");
        const label = screen.getByText("Deployment Environment");
        expect(group).toHaveAttribute("aria-labelledby", label.id);
    });
    it("associates group description and error with aria-describedby and aria-invalid", () => {
        render(_jsxs(RadioGroup, { label: "Notification Frequency", description: "Choose how often you receive digest summaries.", error: "You must select a frequency.", children: [_jsx(Radio, { value: "daily", label: "Daily" }), _jsx(Radio, { value: "weekly", label: "Weekly" })] }));
        const group = screen.getByRole("radiogroup");
        const desc = screen.getByText("Choose how often you receive digest summaries.");
        const errorMsg = screen.getByRole("alert");
        expect(group).toHaveAttribute("aria-invalid", "true");
        expect(group.getAttribute("aria-describedby")).toContain(desc.id);
        expect(group.getAttribute("aria-describedby")).toContain(errorMsg.id);
    });
    it("supports horizontal and vertical orientations", () => {
        const { container: vert } = render(_jsx(RadioGroup, { orientation: "vertical", children: _jsx(Radio, { value: "1", label: "One" }) }));
        const { container: horiz } = render(_jsx(RadioGroup, { orientation: "horizontal", children: _jsx(Radio, { value: "1", label: "One" }) }));
        expect(vert.querySelector(".flex-col")).toBeInTheDocument();
        expect(horiz.querySelector(".flex-row")).toBeInTheDocument();
    });
    it("navigates radios using arrow keys", async () => {
        const user = userEvent.setup();
        render(_jsxs(RadioGroup, { defaultValue: "opt1", "aria-label": "Arrow Navigation", children: [_jsx(Radio, { value: "opt1", label: "Option 1" }), _jsx(Radio, { value: "opt2", label: "Option 2" }), _jsx(Radio, { value: "opt3", label: "Option 3" })] }));
        const opt1 = screen.getByRole("radio", { name: "Option 1" });
        const opt2 = screen.getByRole("radio", { name: "Option 2" });
        opt1.focus();
        expect(opt1).toHaveFocus();
        await user.keyboard("{ArrowDown}");
        expect(opt2).toBeChecked();
    });
    it("works seamlessly inside HTML forms", () => {
        const handleSubmit = vi.fn((e) => e.preventDefault());
        render(_jsxs("form", { onSubmit: handleSubmit, "data-testid": "test-form", children: [_jsxs(RadioGroup, { name: "billingPeriod", defaultValue: "annual", children: [_jsx(Radio, { value: "monthly", label: "Monthly" }), _jsx(Radio, { value: "annual", label: "Annual" })] }), _jsx("button", { type: "submit", children: "Submit" })] }));
        const annualRadio = screen.getByRole("radio", { name: "Annual" });
        expect(annualRadio).toHaveAttribute("name", "billingPeriod");
        expect(annualRadio).toHaveAttribute("value", "annual");
        expect(annualRadio).toBeChecked();
    });
});
