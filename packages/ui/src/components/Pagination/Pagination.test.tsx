import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";

describe("Pagination component", () => {
  it("renders nav element with aria-label='pagination' and active page highlight", () => {
    render(
      <Pagination page={3} totalPages={10} onPageChange={vi.fn()} />
    );

    const nav = screen.getByRole("navigation", { name: "pagination" });
    expect(nav).toBeInTheDocument();

    const activeBtn = screen.getByRole("button", { name: "3" });
    expect(activeBtn).toHaveAttribute("aria-current", "page");
  });

  it("calls onPageChange when a page number is clicked", async () => {
    const handlePageChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Pagination page={1} totalPages={5} onPageChange={handlePageChange} />
    );

    const page4Btn = screen.getByRole("button", { name: "4" });
    await user.click(page4Btn);

    expect(handlePageChange).toHaveBeenCalledWith(4);
  });

  it("calls onPageChange when Next and Prev buttons are clicked", async () => {
    const handlePageChange = vi.fn();
    const user = userEvent.setup();

    const { rerender } = render(
      <Pagination page={2} totalPages={5} onPageChange={handlePageChange} />
    );

    const nextBtn = screen.getByRole("button", { name: "Go to next page" });
    await user.click(nextBtn);
    expect(handlePageChange).toHaveBeenCalledWith(3);

    const prevBtn = screen.getByRole("button", { name: "Go to previous page" });
    await user.click(prevBtn);
    expect(handlePageChange).toHaveBeenCalledWith(1);

    // Boundary disable
    rerender(<Pagination page={1} totalPages={5} onPageChange={handlePageChange} />);
    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeDisabled();

    rerender(<Pagination page={5} totalPages={5} onPageChange={handlePageChange} />);
    expect(screen.getByRole("button", { name: "Go to next page" })).toBeDisabled();
  });

  it("renders ellipsis indicators for large page sets", () => {
    render(
      <Pagination page={10} totalPages={20} siblingCount={1} />
    );

    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "10" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "20" })).toBeInTheDocument();
    expect(screen.getAllByText("More pages").length).toBeGreaterThanOrEqual(1);
  });

  it("forwards ref to nav container", () => {
    const ref = createRef<HTMLElement>();
    render(<Pagination ref={ref} totalPages={3} page={1} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
