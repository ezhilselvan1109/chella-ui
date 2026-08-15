import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Badge } from "./Badge";

describe("Badge component", () => {
  it("renders badge text correctly", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText("Success")).toHaveClass("text-success");

    rerender(<Badge variant="danger">Danger</Badge>);
    expect(screen.getByText("Danger")).toHaveClass("text-danger");
  });

  it("renders dot indicator", () => {
    const { container } = render(<Badge dot>Online</Badge>);
    expect(container.querySelector(".rounded-full")).toBeInTheDocument();
  });

  it("handles remove click event", async () => {
    const handleRemove = vi.fn();
    const user = userEvent.setup();

    render(<Badge removable onRemove={handleRemove}>React</Badge>);
    const removeBtn = screen.getByRole("button", { name: /remove badge/i });

    await user.click(removeBtn);
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });
});
