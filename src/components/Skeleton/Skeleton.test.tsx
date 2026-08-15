import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton component", () => {
  it("renders with role status and aria-busy", () => {
    render(<Skeleton />);
    const el = screen.getByRole("status");
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("aria-busy", "true");
  });

  it("applies width and height dimensions correctly", () => {
    render(<Skeleton width={200} height={40} data-testid="sized-skeleton" />);
    const el = screen.getByTestId("sized-skeleton");
    expect(el).toHaveStyle({ width: "200px", height: "40px" });
  });

  it("renders multiple text lines when lines > 1", () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const lines = container.querySelectorAll(".h-4");
    expect(lines.length).toBe(3);
  });

  it("renders circular variant", () => {
    render(<Skeleton variant="circular" width={48} height={48} data-testid="circle-skeleton" />);
    const el = screen.getByTestId("circle-skeleton");
    expect(el).toHaveClass("rounded-full");
  });

  it("supports conditional wrapper mode", () => {
    const { rerender } = render(
      <Skeleton loading={true}>
        <div data-testid="loaded-content">Real User Profile</div>
      </Skeleton>
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.queryByTestId("loaded-content")).not.toBeInTheDocument();

    rerender(
      <Skeleton loading={false}>
        <div data-testid="loaded-content">Real User Profile</div>
      </Skeleton>
    );

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByTestId("loaded-content")).toBeInTheDocument();
  });

  it("forwards ref to container element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
