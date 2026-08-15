import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";
import { CircularProgress } from "./CircularProgress";

describe("Progress & CircularProgress component", () => {
  it("renders linear progress with role progressbar and aria-valuenow", () => {
    render(<Progress value={45} max={100} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute("aria-valuenow", "45");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });

  it("renders label and percentage when showLabel is enabled", () => {
    render(<Progress value={75} showLabel label="Upload Progress" />);
    expect(screen.getByText("Upload Progress")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("renders indeterminate linear progress without aria-valuenow", () => {
    render(<Progress indeterminate />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toBeInTheDocument();
    expect(bar).not.toHaveAttribute("aria-valuenow");
  });

  it("renders CircularProgress with correct aria-valuenow and svg circle", () => {
    const { container } = render(<CircularProgress value={60} showLabel />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-valuenow", "60");
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(container.querySelector("circle")).toBeInTheDocument();
  });

  it("renders indeterminate CircularProgress spinner", () => {
    render(<CircularProgress indeterminate />);
    const progress = screen.getByRole("progressbar");
    expect(progress).not.toHaveAttribute("aria-valuenow");
  });

  it("forwards ref to Progress container", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Progress ref={ref} value={50} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("forwards ref to CircularProgress container", () => {
    const ref = createRef<HTMLDivElement>();
    render(<CircularProgress ref={ref} value={50} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
