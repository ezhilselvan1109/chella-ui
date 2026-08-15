import React, { useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input component", () => {
  it("renders correctly with label and placeholder", () => {
    render(<Input label="Username" placeholder="Enter username" />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("handles user typing (uncontrolled)", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");

    await user.type(input, "Chella");
    expect(input).toHaveValue("Chella");
  });

  it("handles controlled value updates", async () => {
    const user = userEvent.setup();

    function ControlledInput() {
      const [val, setVal] = useState("initial");
      return (
        <div>
          <Input
            label="Controlled"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <span data-testid="output">{val}</span>
        </div>
      );
    }

    render(<ControlledInput />);
    const input = screen.getByLabelText("Controlled");
    expect(input).toHaveValue("initial");

    await user.clear(input);
    await user.type(input, "updated");
    expect(input).toHaveValue("updated");
    expect(screen.getByTestId("output")).toHaveTextContent("updated");
  });

  it("displays error message and sets aria-invalid", () => {
    render(<Input label="Email" error="Invalid email address" />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid email address");
  });

  it("displays helper text when no error exists", () => {
    render(<Input label="Password" helperText="Must be at least 8 characters" />);
    expect(screen.getByText("Must be at least 8 characters")).toBeInTheDocument();
  });

  it("supports prefix and suffix elements", () => {
    render(
      <Input
        label="Amount"
        prefix={<span data-testid="prefix">$</span>}
        suffix={<span data-testid="suffix">USD</span>}
      />
    );
    expect(screen.getByTestId("prefix")).toBeInTheDocument();
    expect(screen.getByTestId("suffix")).toBeInTheDocument();
  });

  it("clears input value when clearable button is clicked", async () => {
    const user = userEvent.setup();
    const handleClear = vi.fn();

    render(<Input defaultValue="Clear me" clearable onClear={handleClear} placeholder="Clearable" />);
    const input = screen.getByPlaceholderText("Clearable");
    expect(input).toHaveValue("Clear me");

    const clearButton = screen.getByRole("button", { name: /clear input value/i });
    await user.click(clearButton);

    expect(input).toHaveValue("");
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  it("disables input when disabled prop is provided", async () => {
    const user = userEvent.setup();
    render(<Input label="Disabled" disabled defaultValue="Cannot edit" />);
    const input = screen.getByLabelText("Disabled");

    expect(input).toBeDisabled();
    await user.type(input, "123");
    expect(input).toHaveValue("Cannot edit");
  });
});
