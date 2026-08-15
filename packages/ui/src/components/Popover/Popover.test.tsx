import React, { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover } from "./Popover";

describe("Popover component", () => {
  it("renders trigger and does not display content initially", () => {
    render(
      <Popover content={<div>Popover Body</div>}>
        <button>Open Popover</button>
      </Popover>
    );

    expect(screen.getByRole("button", { name: "Open Popover" })).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens popover on click and toggles closed on second click", async () => {
    const user = userEvent.setup();
    render(
      <Popover content={<div>Interactive Settings Panel</div>}>
        <button>Toggle Menu</button>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Toggle Menu" });
    await user.click(trigger);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Interactive Settings Panel")).toBeInTheDocument();

    await user.click(trigger);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes popover when clicking outside", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Popover content={<div>Menu Content</div>}>
          <button>Open</button>
        </Popover>
        <button>Outside Target</button>
      </div>
    );

    const trigger = screen.getByRole("button", { name: "Open" });
    await user.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const outsideTarget = screen.getByRole("button", { name: "Outside Target" });
    fireEvent.mouseDown(outsideTarget);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes popover on Escape key", async () => {
    const user = userEvent.setup();
    render(
      <Popover content={<div>Escape dismissible</div>}>
        <button>Open Dialog</button>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Open Dialog" });
    await user.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes popover when clicking close button", async () => {
    const user = userEvent.setup();
    render(
      <Popover showCloseButton content={<div>Panel with close button</div>}>
        <button>Open Panel</button>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Open Panel" });
    await user.click(trigger);

    const closeBtn = screen.getByRole("button", { name: "Close popover" });
    expect(closeBtn).toBeInTheDocument();

    await user.click(closeBtn);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("supports controlled open state", async () => {
    const handleOpenChange = vi.fn();

    function ControlledDemo() {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <Popover
          open={isOpen}
          onOpenChange={(next) => {
            setIsOpen(next);
            handleOpenChange(next);
          }}
          content={<div>Controlled Content</div>}
        >
          <button>Controlled Trigger</button>
        </Popover>
      );
    }

    render(<ControlledDemo />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(
      <Popover disabled content={<div>Cannot open</div>}>
        <button>Disabled Trigger</button>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Disabled Trigger" });
    await user.click(trigger);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("forwards ref to outer container", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Popover ref={ref} content={<div>Ref content</div>}>
        <button>Ref trigger</button>
      </Popover>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
