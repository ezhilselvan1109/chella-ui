import { jsx as _jsx } from "react/jsx-runtime";
import { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./Textarea";
describe("Textarea component", () => {
    it("renders correctly with default attributes", () => {
        render(_jsx(Textarea, { placeholder: "Type your message..." }));
        const textarea = screen.getByPlaceholderText("Type your message...");
        expect(textarea).toBeInTheDocument();
        expect(textarea.tagName).toBe("TEXTAREA");
    });
    it("renders with label and focuses when label is clicked", async () => {
        const user = userEvent.setup();
        render(_jsx(Textarea, { label: "Bio Summary" }));
        const label = screen.getByText("Bio Summary");
        const textarea = screen.getByRole("textbox", { name: "Bio Summary" });
        expect(label).toBeInTheDocument();
        expect(textarea).toBeInTheDocument();
        await user.click(label);
        expect(textarea).toHaveFocus();
    });
    it("handles user typing in uncontrolled mode", async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(_jsx(Textarea, { placeholder: "Notes", onChange: handleChange }));
        const textarea = screen.getByPlaceholderText("Notes");
        await user.type(textarea, "Release notes for v1.2");
        expect(textarea).toHaveValue("Release notes for v1.2");
        expect(handleChange).toHaveBeenCalled();
    });
    it("handles controlled updates", async () => {
        const user = userEvent.setup();
        function ControlledDemo() {
            const [val, setVal] = useState("Initial text");
            return (_jsx(Textarea, { value: val, onChange: (e) => setVal(e.target.value), "aria-label": "Controlled Textarea" }));
        }
        render(_jsx(ControlledDemo, {}));
        const textarea = screen.getByRole("textbox", { name: "Controlled Textarea" });
        expect(textarea).toHaveValue("Initial text");
        await user.type(textarea, " - updated");
        expect(textarea).toHaveValue("Initial text - updated");
    });
    it("displays character count with and without maxLength", async () => {
        const user = userEvent.setup();
        render(_jsx(Textarea, { label: "Feedback", showCount: true, maxLength: 50, placeholder: "Share thoughts" }));
        const textarea = screen.getByPlaceholderText("Share thoughts");
        expect(screen.getByText("0 / 50")).toBeInTheDocument();
        await user.type(textarea, "Great UI!");
        expect(screen.getByText("9 / 50")).toBeInTheDocument();
    });
    it("disables interaction when disabled prop is true", async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(_jsx(Textarea, { disabled: true, placeholder: "Disabled notes", onChange: handleChange }));
        const textarea = screen.getByPlaceholderText("Disabled notes");
        expect(textarea).toBeDisabled();
        await user.type(textarea, "Cannot type");
        expect(textarea).toHaveValue("");
        expect(handleChange).not.toHaveBeenCalled();
    });
    it("renders error message and applies aria-invalid", () => {
        render(_jsx(Textarea, { label: "Project Scope", error: "Scope description cannot be empty." }));
        const textarea = screen.getByRole("textbox", { name: /Project Scope/ });
        const errorAlert = screen.getByRole("alert");
        expect(errorAlert).toHaveTextContent("Scope description cannot be empty.");
        expect(textarea).toHaveAttribute("aria-invalid", "true");
        expect(textarea).toHaveAttribute("aria-describedby", errorAlert.id);
    });
    it("associates description via aria-describedby", () => {
        render(_jsx(Textarea, { label: "Service Description", description: "Provide a high-level summary of your microservice." }));
        const textarea = screen.getByRole("textbox", { name: "Service Description" });
        const desc = screen.getByText("Provide a high-level summary of your microservice.");
        expect(textarea).toHaveAttribute("aria-describedby", desc.id);
    });
    it("forwards ref to the underlying HTMLTextAreaElement", () => {
        const ref = createRef();
        render(_jsx(Textarea, { ref: ref, placeholder: "Ref forward test" }));
        expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
        expect(ref.current?.tagName).toBe("TEXTAREA");
    });
    it("applies variant and size classes", () => {
        const { container: filledCont } = render(_jsx(Textarea, { variant: "filled", size: "small" }));
        const { container: flushedCont } = render(_jsx(Textarea, { variant: "flushed", size: "large" }));
        expect(filledCont.querySelector("textarea")).toHaveClass("bg-muted/60");
        expect(flushedCont.querySelector("textarea")).toHaveClass("border-b");
    });
});
