import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

const mockOptions = [
  { label: "Kumar", value: "1" },
  { label: "Ravi", value: "2" },
  { label: "Anand", value: "3" },
  { label: "Deepa", value: "4", disabled: true },
];

describe("Select component", () => {
  it("renders trigger with placeholder", () => {
    render(<Select options={mockOptions} placeholder="Choose user" />);
    expect(screen.getByText("Choose user")).toBeInTheDocument();
  });

  it("opens dropdown and selects an option", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Select options={mockOptions} onChange={handleChange} placeholder="Choose" />);
    const trigger = screen.getByRole("combobox");

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const option = screen.getByText("Kumar");
    await user.click(option);

    expect(handleChange).toHaveBeenCalledWith("1");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("Kumar")).toBeInTheDocument();
  });

  it("supports keyboard navigation with Arrow keys and Enter", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Select options={mockOptions} onChange={handleChange} placeholder="Choose" />);
    const trigger = screen.getByRole("combobox");

    trigger.focus();
    await user.keyboard("{ArrowDown}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    // Navigate to second option (Ravi)
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");

    expect(handleChange).toHaveBeenCalledWith("2");
    expect(screen.getByText("Ravi")).toBeInTheDocument();
  });

  it("closes dropdown on Escape key", async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} placeholder="Choose" />);
    const trigger = screen.getByRole("combobox");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Escape}");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("filters options when searchable is enabled", async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} searchable searchPlaceholder="Type to filter..." />);
    const trigger = screen.getByRole("combobox");

    await user.click(trigger);
    const searchInput = screen.getByPlaceholderText("Type to filter...");

    await user.type(searchInput, "An");
    expect(screen.getByText("Anand")).toBeInTheDocument();
    expect(screen.queryByText("Kumar")).not.toBeInTheDocument();
  });

  it("supports multi-selection mode", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Select options={mockOptions} multiple onChange={handleChange} />);
    const trigger = screen.getByRole("combobox");

    await user.click(trigger);
    await user.click(screen.getByText("Kumar"));
    await user.click(screen.getByText("Ravi"));

    expect(handleChange).toHaveBeenCalledWith(["1", "2"]);
  });

  it("prevents selecting disabled options", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Select options={mockOptions} onChange={handleChange} />);
    const trigger = screen.getByRole("combobox");

    await user.click(trigger);
    const disabledOption = screen.getByText("Deepa");

    await user.click(disabledOption);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("clears selection when clearable button is clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Select options={mockOptions} defaultValue="1" clearable onChange={handleChange} />);
    expect(screen.getByText("Kumar")).toBeInTheDocument();

    const clearButton = screen.getByRole("button", { name: /clear selection/i });
    await user.click(clearButton);

    expect(handleChange).toHaveBeenCalledWith("");
  });
});
