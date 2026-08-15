import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Drawer } from "./Drawer";

describe("Drawer component", () => {
  it("does not render dialog content when open is false", () => {
    render(
      <Drawer open={false} onClose={vi.fn()}>
        <Drawer.Header>
          <Drawer.Title>Settings</Drawer.Title>
        </Drawer.Header>
      </Drawer>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders with role dialog, aria-modal, and compound elements when open is true", () => {
    render(
      <Drawer open={true} onClose={vi.fn()}>
        <Drawer.Header>
          <Drawer.Title>Cluster Settings</Drawer.Title>
          <Drawer.Description>Configure networking</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          <div>Main form content</div>
        </Drawer.Body>
        <Drawer.Footer>
          <button>Save</button>
        </Drawer.Footer>
      </Drawer>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByText("Cluster Settings")).toBeInTheDocument();
    expect(screen.getByText("Configure networking")).toBeInTheDocument();
    expect(screen.getByText("Main form content")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Drawer open={true} onClose={handleClose}>
        <Drawer.Header>
          <Drawer.Title>Title</Drawer.Title>
        </Drawer.Header>
      </Drawer>
    );

    const closeBtn = screen.getByRole("button", { name: "Close drawer" });
    await user.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when overlay backdrop is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    const { container } = render(
      <Drawer open={true} onClose={handleClose}>
        <Drawer.Header>
          <Drawer.Title>Title</Drawer.Title>
        </Drawer.Header>
      </Drawer>
    );

    const backdrop = container.querySelector(".fixed.inset-0.z-50.bg-black\\/60");
    if (backdrop) {
      await user.click(backdrop);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });

  it("calls onClose when Escape key is pressed", () => {
    const handleClose = vi.fn();

    render(
      <Drawer open={true} onClose={handleClose}>
        <Drawer.Header>
          <Drawer.Title>Title</Drawer.Title>
        </Drawer.Header>
      </Drawer>
    );

    fireEvent.keyDown(window, { key: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("forwards ref to Drawer content element", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Drawer ref={ref} open={true} onClose={vi.fn()}>
        <Drawer.Header>
          <Drawer.Title>Ref Title</Drawer.Title>
        </Drawer.Header>
      </Drawer>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
