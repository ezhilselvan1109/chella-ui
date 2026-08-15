import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider component", () => {
  it("renders horizontal hr separator by default", () => {
    const { container } = render(<Divider decorative={false} />);
    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("aria-orientation", "horizontal");
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("renders vertical separator with aria-orientation vertical", () => {
    render(<Divider orientation="vertical" decorative={false} />);
    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("aria-orientation", "vertical");
  });

  it("renders text children label between divider lines", () => {
    render(<Divider>OR CONTINUE WITH</Divider>);
    expect(screen.getByText("OR CONTINUE WITH")).toBeInTheDocument();
  });

  it("supports start and end alignment for children", () => {
    const { container, rerender } = render(<Divider align="start">Section Start</Divider>);
    expect(container.querySelector(".before\\:w-6")).toBeInTheDocument();

    rerender(<Divider align="end">Section End</Divider>);
    expect(container.querySelector(".after\\:w-6")).toBeInTheDocument();
  });

  it("forwards ref to divider container", () => {
    const ref = createRef<HTMLElement>();
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
