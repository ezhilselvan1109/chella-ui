import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner component", () => {
  it("renders with role status and default sr-only label", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toHaveClass("sr-only");
  });

  it("renders custom label when showLabel is true", () => {
    render(<Spinner showLabel label="Syncing Telemetry..." />);
    expect(screen.getByText("Syncing Telemetry...", { selector: "span:not(.sr-only)" })).toBeInTheDocument();
  });

  it("renders different size classes", () => {
    const { container, rerender } = render(<Spinner size="small" />);
    expect(container.querySelector(".size-4")).toBeInTheDocument();

    rerender(<Spinner size="large" />);
    expect(container.querySelector(".size-8")).toBeInTheDocument();
  });

  it("renders color variant classes", () => {
    const { container } = render(<Spinner variant="success" />);
    expect(container.querySelector(".text-success")).toBeInTheDocument();
  });

  it("forwards ref to status container", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
