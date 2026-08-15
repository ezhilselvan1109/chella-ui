import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormField } from "./FormField";
import { Form } from "./Form";
describe("FormField & Form component", () => {
    it("renders label linked to input via id and htmlFor", () => {
        render(_jsx(FormField, { label: "Email Address", children: _jsx("input", { type: "email", placeholder: "name@domain.com" }) }));
        const label = screen.getByText("Email Address");
        const input = screen.getByPlaceholderText("name@domain.com");
        expect(label).toHaveAttribute("for", input.id);
    });
    it("renders required asterisk when required is true", () => {
        render(_jsx(FormField, { label: "Username", required: true, children: _jsx("input", {}) }));
        expect(screen.getByText("*")).toBeInTheDocument();
    });
    it("renders error message with role alert and sets aria-invalid on input", () => {
        render(_jsx(FormField, { label: "Password", error: "Password must be at least 8 characters", children: _jsx("input", { type: "password", placeholder: "Password" }) }));
        const error = screen.getByRole("alert");
        const input = screen.getByPlaceholderText("Password");
        expect(error).toHaveTextContent("Password must be at least 8 characters");
        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(input).toHaveAttribute("aria-describedby");
    });
    it("renders help text when provided without error", () => {
        render(_jsx(FormField, { label: "SSH Key", helpText: "Upload your public ed25519 key", children: _jsx("input", { placeholder: "key-data" }) }));
        expect(screen.getByText("Upload your public ed25519 key")).toBeInTheDocument();
        const input = screen.getByPlaceholderText("key-data");
        expect(input).toHaveAttribute("aria-describedby");
    });
    it("supports compound syntax", () => {
        render(_jsxs(FormField, { id: "custom-compound-id", children: [_jsx(FormField.Label, { children: "Full Name" }), _jsx(FormField.Control, { children: _jsx("input", { placeholder: "Enter full name" }) }), _jsx(FormField.HelpText, { children: "As shown in government passport" })] }));
        expect(screen.getByText("Full Name")).toHaveAttribute("for", "custom-compound-id");
        expect(screen.getByText("As shown in government passport")).toBeInTheDocument();
    });
    it("Form component handles onSubmit", async () => {
        const handleSubmit = vi.fn((e) => e.preventDefault());
        const user = userEvent.setup();
        render(_jsxs(Form, { onSubmit: handleSubmit, children: [_jsx(FormField, { label: "Field", children: _jsx("input", {}) }), _jsx("button", { type: "submit", children: "Submit Form" })] }));
        await user.click(screen.getByRole("button", { name: "Submit Form" }));
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
    it("forwards ref to FormField and Form containers", () => {
        const fieldRef = createRef();
        const formRef = createRef();
        render(_jsx(Form, { ref: formRef, children: _jsx(FormField, { ref: fieldRef, label: "Test", children: _jsx("input", {}) }) }));
        expect(formRef.current).toBeInstanceOf(HTMLFormElement);
        expect(fieldRef.current).toBeInstanceOf(HTMLDivElement);
    });
});
