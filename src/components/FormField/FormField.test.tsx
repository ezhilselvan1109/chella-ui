import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormField } from "./FormField";
import { Form } from "./Form";

describe("FormField & Form component", () => {
  it("renders label linked to input via id and htmlFor", () => {
    render(
      <FormField label="Email Address">
        <input type="email" placeholder="name@domain.com" />
      </FormField>
    );

    const label = screen.getByText("Email Address");
    const input = screen.getByPlaceholderText("name@domain.com");

    expect(label).toHaveAttribute("for", input.id);
  });

  it("renders required asterisk when required is true", () => {
    render(
      <FormField label="Username" required>
        <input />
      </FormField>
    );

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders error message with role alert and sets aria-invalid on input", () => {
    render(
      <FormField label="Password" error="Password must be at least 8 characters">
        <input type="password" placeholder="Password" />
      </FormField>
    );

    const error = screen.getByRole("alert");
    const input = screen.getByPlaceholderText("Password");

    expect(error).toHaveTextContent("Password must be at least 8 characters");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby");
  });

  it("renders help text when provided without error", () => {
    render(
      <FormField label="SSH Key" helpText="Upload your public ed25519 key">
        <input placeholder="key-data" />
      </FormField>
    );

    expect(screen.getByText("Upload your public ed25519 key")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("key-data");
    expect(input).toHaveAttribute("aria-describedby");
  });

  it("supports compound syntax", () => {
    render(
      <FormField id="custom-compound-id">
        <FormField.Label>Full Name</FormField.Label>
        <FormField.Control>
          <input placeholder="Enter full name" />
        </FormField.Control>
        <FormField.HelpText>As shown in government passport</FormField.HelpText>
      </FormField>
    );

    expect(screen.getByText("Full Name")).toHaveAttribute("for", "custom-compound-id");
    expect(screen.getByText("As shown in government passport")).toBeInTheDocument();
  });

  it("Form component handles onSubmit", async () => {
    const handleSubmit = vi.fn((e) => e.preventDefault());
    const user = userEvent.setup();

    render(
      <Form onSubmit={handleSubmit}>
        <FormField label="Field">
          <input />
        </FormField>
        <button type="submit">Submit Form</button>
      </Form>
    );

    await user.click(screen.getByRole("button", { name: "Submit Form" }));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("forwards ref to FormField and Form containers", () => {
    const fieldRef = createRef<HTMLDivElement>();
    const formRef = createRef<HTMLFormElement>();

    render(
      <Form ref={formRef}>
        <FormField ref={fieldRef} label="Test">
          <input />
        </FormField>
      </Form>
    );

    expect(formRef.current).toBeInstanceOf(HTMLFormElement);
    expect(fieldRef.current).toBeInstanceOf(HTMLDivElement);
  });
});
