import React, { createRef, useState } from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip component", () => {
  it("renders trigger and does not display tooltip initially", () => {
    render(
      <Tooltip content="Helper hint">
        <button>Trigger</button>
      </Tooltip>
    );

    expect(screen.getByRole("button", { name: "Trigger" })).toBeInTheDocument();
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("displays tooltip on hover with delayDuration=0", () => {
    render(
      <Tooltip content="Helper hint" delayDuration={0}>
        <button>Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Trigger" });
    fireEvent.mouseEnter(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent("Helper hint");

    fireEvent.mouseLeave(trigger);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("displays tooltip on focus and closes on blur", () => {
    render(
      <Tooltip content="Focused hint" delayDuration={0}>
        <button>Focusable</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Focusable" });
    fireEvent.focus(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent("Focused hint");

    fireEvent.blur(trigger);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("closes tooltip when Escape key is pressed", () => {
    render(
      <Tooltip content="Dismissible tooltip" delayDuration={0}>
        <button>Dismiss me</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Dismiss me" });
    fireEvent.mouseEnter(trigger);

    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("associates trigger with tooltip via aria-describedby", () => {
    const { container } = render(
      <Tooltip content="Aria linked tooltip" delayDuration={0}>
        <button>Inspect</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Inspect" });
    fireEvent.mouseEnter(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(container.firstChild).toHaveAttribute("aria-describedby", tooltip.id);
  });

  it("supports controlled open state", () => {
    function ControlledTooltip() {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <Tooltip
          content="Controlled content"
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <button>Controlled</button>
        </Tooltip>
      );
    }

    render(<ControlledTooltip />);
    expect(screen.getByRole("tooltip")).toHaveTextContent("Controlled content");
  });

  it("does not open when disabled", () => {
    render(
      <Tooltip content="Disabled tooltip" disabled delayDuration={0}>
        <button>Disabled Target</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Disabled Target" });
    fireEvent.mouseEnter(trigger);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("forwards ref to outer container", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Tooltip ref={ref} content="Ref tooltip">
        <button>Ref button</button>
      </Tooltip>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
