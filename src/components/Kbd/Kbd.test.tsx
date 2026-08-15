import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Kbd } from "./Kbd";

describe("Kbd component", () => {
  it("renders native kbd element with children", () => {
    const { container } = render(<Kbd>⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toBeInTheDocument();
    expect(container.querySelector("kbd")).toBeInTheDocument();
  });

  it("maps shortcut key names when keys prop is provided", () => {
    render(<Kbd keys={["cmd", "shift", "p"]} separator="+" />);
    expect(screen.getByText("⌘")).toBeInTheDocument();
    expect(screen.getByText("⇧")).toBeInTheDocument();
    expect(screen.getByText("P")).toBeInTheDocument();
  });

  it("renders Kbd.Group with separator", () => {
    render(
      <Kbd.Group separator="+">
        <Kbd>Ctrl</Kbd>
        <Kbd>Alt</Kbd>
        <Kbd>Del</Kbd>
      </Kbd.Group>
    );

    expect(screen.getByText("Ctrl")).toBeInTheDocument();
    expect(screen.getByText("Alt")).toBeInTheDocument();
    expect(screen.getByText("Del")).toBeInTheDocument();
    expect(screen.getAllByText("+").length).toBe(2);
  });

  it("renders size and variant classes", () => {
    const { container, rerender } = render(<Kbd size="small" variant="outline">Esc</Kbd>);
    expect(container.querySelector(".h-5")).toBeInTheDocument();
    expect(container.querySelector(".border-border")).toBeInTheDocument();

    rerender(<Kbd size="large" variant="subtle">Enter</Kbd>);
    expect(container.querySelector(".h-7")).toBeInTheDocument();
  });

  it("forwards ref to kbd element", () => {
    const ref = createRef<HTMLElement>();
    render(<Kbd ref={ref}>A</Kbd>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
