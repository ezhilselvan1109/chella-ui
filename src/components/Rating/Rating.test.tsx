import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Rating } from "./Rating";

describe("Rating component", () => {
  it("renders radiogroup with 5 star radio items", () => {
    render(<Rating defaultValue={3} />);
    expect(screen.getByRole("radiogroup", { name: "Rating" })).toBeInTheDocument();
    expect(screen.getAllByRole("radio").length).toBe(5);
  });

  it("handles star clicks and calls onChange", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Rating onChange={handleChange} />);
    const stars = screen.getAllByRole("radio");

    await user.click(stars[3]!); // 4th star (value 4)
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it("handles keyboard navigation", () => {
    const handleChange = vi.fn();
    render(<Rating value={2} onChange={handleChange} />);

    const group = screen.getByRole("radiogroup");
    fireEvent.keyDown(group, { key: "ArrowRight" });
    expect(handleChange).toHaveBeenCalledWith(3);

    fireEvent.keyDown(group, { key: "ArrowLeft" });
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it("renders readOnly mode with role img", () => {
    render(<Rating value={4} readOnly showValueText />);
    expect(screen.getByRole("img", { name: "Rating: 4 of 5 stars" })).toBeInTheDocument();
    expect(screen.getByText("(4/5)")).toBeInTheDocument();
  });

  it("forwards ref to container", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Rating ref={ref} defaultValue={5} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
