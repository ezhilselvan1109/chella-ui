import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";

describe("Radio Component", () => {
  it("renders a native radio input", () => {
    render(<Radio value="option1" aria-label="Option 1" />);
    const radio = screen.getByRole("radio", { name: "Option 1" });
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
  });

  it("renders with label prop and selects when label is clicked", async () => {
    const user = userEvent.setup();
    render(<Radio value="plan-pro" label="Pro Tier" />);

    const radio = screen.getByRole("radio", { name: "Pro Tier" });
    const label = screen.getByText("Pro Tier");

    expect(radio).not.toBeChecked();
    await user.click(label);
    expect(radio).toBeChecked();
  });

  it("renders label passed as children", async () => {
    const user = userEvent.setup();
    render(<Radio value="annual">Annual Billing</Radio>);

    const radio = screen.getByRole("radio", { name: "Annual Billing" });
    expect(radio).not.toBeChecked();
    await user.click(radio);
    expect(radio).toBeChecked();
  });

  it("supports uncontrolled mode with defaultChecked", () => {
    render(<Radio value="starter" label="Starter" defaultChecked />);
    const radio = screen.getByRole("radio", { name: "Starter" });
    expect(radio).toBeChecked();
  });

  it("supports controlled mode and fires onCheckedChange", async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    const { rerender } = render(
      <Radio
        value="opt"
        label="Controlled Radio"
        checked={false}
        onCheckedChange={handleCheckedChange}
      />
    );

    const radio = screen.getByRole("radio", { name: "Controlled Radio" });
    expect(radio).not.toBeChecked();

    await user.click(radio);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);

    rerender(
      <Radio
        value="opt"
        label="Controlled Radio"
        checked={true}
        onCheckedChange={handleCheckedChange}
      />
    );
    expect(radio).toBeChecked();
  });

  it("does not select when disabled and prevents callbacks", async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(
      <Radio
        value="enterprise"
        label="Enterprise"
        disabled
        onCheckedChange={handleCheckedChange}
      />
    );

    const radio = screen.getByRole("radio", { name: "Enterprise" });
    expect(radio).toBeDisabled();

    await user.click(radio);
    expect(radio).not.toBeChecked();
    expect(handleCheckedChange).not.toHaveBeenCalled();
  });

  it("preserves name, value, and required attributes", () => {
    render(
      <Radio
        name="billing"
        value="monthly"
        label="Monthly"
        required
      />
    );

    const radio = screen.getByRole("radio", { name: /Monthly/ });
    expect(radio).toHaveAttribute("name", "billing");
    expect(radio).toHaveAttribute("value", "monthly");
    expect(radio).toBeRequired();
  });

  it("selects when pressing Space key", async () => {
    const user = userEvent.setup();
    render(<Radio value="key" label="Keyboard Option" />);

    const radio = screen.getByRole("radio", { name: "Keyboard Option" });
    radio.focus();
    expect(radio).toHaveFocus();

    await user.keyboard(" ");
    expect(radio).toBeChecked();
  });

  it("associates description via aria-describedby", () => {
    render(
      <Radio
        value="sms"
        label="SMS Authentication"
        description="Receive login codes via text message."
      />
    );

    const radio = screen.getByRole("radio", { name: "SMS Authentication" });
    const desc = screen.getByText("Receive login codes via text message.");
    expect(radio).toHaveAttribute("aria-describedby", desc.id);
  });

  it("associates error message and sets aria-invalid", () => {
    render(
      <Radio
        value="consent"
        label="Mandatory Consent"
        error="Selection is required."
      />
    );

    const radio = screen.getByRole("radio", { name: /Mandatory Consent/ });
    const errorMsg = screen.getByRole("alert");
    expect(errorMsg).toHaveTextContent("Selection is required.");
    expect(radio).toHaveAttribute("aria-invalid", "true");
    expect(radio).toHaveAttribute("aria-describedby", errorMsg.id);
  });

  it("supports small, medium, and large sizes", () => {
    const { container: smallContainer } = render(<Radio value="s" size="small" label="Small" />);
    const { container: largeContainer } = render(<Radio value="l" size="large" label="Large" />);

    expect(smallContainer.querySelector("label")).toBeInTheDocument();
    expect(largeContainer.querySelector("label")).toBeInTheDocument();
  });

  it("forwards ref to underlying HTMLInputElement", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Radio ref={ref} value="ref-test" label="Ref Test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.tagName).toBe("INPUT");
    expect(ref.current?.type).toBe("radio");
  });

  it("merges custom className onto root container", () => {
    const { container } = render(<Radio value="cls" className="custom-radio-wrap" label="Styled" />);
    expect(container.firstChild).toHaveClass("custom-radio-wrap");
  });
});
